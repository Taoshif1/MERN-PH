const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;
// console.log(process)
const admin = require("firebase-admin");
const jwt = require('jsonwebtoken');

const serviceAccount = require("./smart-deals-firebase-adminsdk.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

//middlewares
app.use(cors());
app.use(express.json());

// middleware for specific task ig
const logger = (req, res, next) => {
    console.log('logging information');
    next();
}

// verify middleware
const verifyFireBaseToken = async (req, res, next) => {
    // console.log('In the verify middleware', req.headers.authorization)
    if (!req.headers.authorization) {
        // do not allow cause no auth(token) & maybe no headers in request
        return res.status(401).send({ message: 'unauthorized access' });
    }
    // split the token ( Bearer[0 index] <token>[1]) & verify if there is token or not (do not allow)
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).send({ message: 'unauthorized access' })
    }
    // verify token
    try {
        const userInfo = await admin.auth().verifyIdToken(token);
        req.token_email = userInfo.email;
        console.log('after token validation', userInfo);
        next();
    }
    catch {
        console.log('invalid token')
        return res.status(401).send({ message: 'unauthorized access' })
    }

}

const verifyJWTToken = (req, res, next) => {

    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(401).send({ message: 'unauthorized access' })
    }
    const token = authorization.split(' ')[1];
    if (!token) {
        return res.status(401).send({ message: 'unauthorized access' })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ message: 'unauthorized access' })
        }
        // put it in the right place
        console.log('after decoded', decoded);
        req.token_email = decoded.email;
        next();
    })


}

// const uri = "mongodb+srv://smartdbUser:bY0bW2CRsQ0a34JO@cluster0.kpmcxd4.mongodb.net/?appName=Cluster0";
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kpmcxd4.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get('/', (req, res) => {
    res.send("Smart Deals Server ")
})

// run() to connect to DB
async function run(){
    try{
        await client.connect();  // we can also connect in other ways below
        
        // create a DB & then Collections in our Client
        const db = client.db('Smart_DB')

        const productsCollection = db.collection('products')
        const bidsCollection = db.collection('bids');
        const usersCollection = db.collection('users');


        // USERS API
        //checking for same email during login=> not adding it in DB again
        app.post('/users', async(req, res) => {
            const newUser = req.body;
            const email = req.body.email;
            const query = { email: email}
            const existingUser = await usersCollection.findOne(query);

            if(existingUser){
                res.send({message: 'User Already Exists, No need to add again in BD'})
            }else{
                const result = await usersCollection.insertOne(newUser);
                res.send(result);
            }
        })

        // PRODUCTS APIs
        app.get('/products', async(req, res)=>{

            // const cursor = productsCollection.find().sort({price_min: 1}).limit(5);  // .limit(how many times u want)

            // we can also show data = 1 & dont show = 0
            // const projectFields = { title : 1, price_min: 1, price_max: 1, image: 1}

            // const cursor = productsCollection.find().sort({price_min: 1}).limit(5).project(projectFields); // for sorting 1 = ascending, -1 = descending

            // const cursor = productsCollection.find().sort({price_min: 1})
            // .project(projectFields); // for sorting 1 = ascending, -1 = descending

            // we can also use skip(how many times u want)
            
            // console.log(req.query);
            const email = req.query.email;
            const query = {};
            if(email){
                query.email = email;
            }

            const cursor = productsCollection.find();

            const result = await cursor.toArray();
            res.send(result);
        })

        app.get("/latest-products", async(req, res) =>{
            const cursor = productsCollection.find().sort({created_at: -1}).limit(6);
            const result = await cursor.toArray();
            res.send(result);
        })
        
        // get/find ONE specific id
        app.get('/products/:id', async(req, res)=>{
            const id = req.params.id;
            const query = { _id: id};
            const result = await productsCollection.findOne(query);
            // console.log(id);

            res.send(result);
        })

        

        //post api
        app.post('/products', async(req, res)=>{
            const newProduct = req.body;
            const result = await productsCollection.insertOne(newProduct);
            res.send(result);
        })

        // patch
        app.patch('/products/:id', async(req, res)=>{
            const id = req.params.id;
            const updatedProduct = req.body;
            const query = { _id: new ObjectId(id)};
            const update = {
                // $set: updatedProduct
                $set: {
                    name: updatedProduct.name,
                    price: updatedProduct.price
                }
            }
            const result = await productsCollection.updateOne(query, update)
            res.send(result);

        })

        // delete api
        app.delete('/products/:id', async(req, res)=>{
            const id = req.params.id;
            const query = { _id: new ObjectId(id)};
            const result = await productsCollection.deleteOne(query);
            res.send(result);
        })

        // bids related apis
        app.get('/bids', logger, verifyFireBaseToken, async(req, res)=>{
            // console.log("headers", req.headers)
            const email = req.query.email;  // checks whether my email & searched email are same or not
            const query = {};

            if (email) {
                if (email !== req.token_email) {
                    return res.status(403).send({ message: 'forbidden access' })
                }

                query.buyer_email = email;
            }

            const cursor = bidsCollection.find(query); 
            const result = await cursor.toArray();
            res.send(result);
        })


        // bids in a particular product api
        app.get('/products/bids/:productId', verifyFireBaseToken, async(req, res) =>{
          const productId = req.params.productId;
          const query =   { product: productId};
          const cursor = bidsCollection.find(query).sort({bid_price: -1});
          const result = await cursor.toArray();
          res.send(result);
        })


        //get only mybids api
        // app.get('/bids', async(req, res) => {

        //     const query = {};
        //     if(query.email){
        //         query.buyer_email = email;
        //     }

        //     const cursor = bidsCollection.find(query);
        //     const result = await cursor.toArray();
        //     res.send(result);
        // })


        
        

        app.post('/bids', async(req, res)=>{
            const newBid = req.body;
            const result = await bidsCollection.insertOne(newBid);
            res.send(result);
        })


        // delete mybids api
        app.delete('/bids/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id) }
            const result = await bidsCollection.deleteOne(query);
            res.send(result);
        })
        
        //sending ping cmd to verify connection
        await client.db("admin").command({ping:1});
        console.log("Pinged your deployment. You Successfully connected to MongoDB!");
        }
        
        finally{

        }
}

// calling the run()
run().catch(console.dir)

// app listening
app.listen(port, ()=>{
    console.log(`Smart Server Running on Port: ${port}`);
})

// alternate of run(), connect then listen.
// client.connect()
//     .then(()=>{
//         app.listen(port, ()=>{
//             console.log(`Smart Server is Now Running On ${port}`)
//         })
//     })
//     .catch(console.dir)


