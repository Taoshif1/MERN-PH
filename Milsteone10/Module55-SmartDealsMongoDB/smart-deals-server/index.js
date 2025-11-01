const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(cors());
app.use(express.json());


//mongodb uri & pass => bY0bW2CRsQ0a34JO
const uri = "mongodb+srv://smartdbUser:bY0bW2CRsQ0a34JO@cluster0.kpmcxd4.mongodb.net/?appName=Cluster0";

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
        
        // create a DB & a Collection in our Client
        const db = client.db('Smart_DB')
        const productsCollection = db.collection('products')

        const bidsCollection = db.collection('bids');
        const usersCollection = db.collection('users');


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

        // get api
        app.get('/products', async(req, res)=>{

            // const cursor = productsCollection.find().sort({price_min: 1}).limit(5);  // .limit(how many times u want)

            // we can also show data = 1 & dont show = 0
            // const projectFields = { title : 1, price_min: 1, price_max: 1, image: 1}

            // const cursor = productsCollection.find().sort({price_min: 1}).limit(5).project(projectFields); // for sorting 1 = ascending, -1 = descending

            // const cursor = productsCollection.find().sort({price_min: 1})
            // .project(projectFields); // for sorting 1 = ascending, -1 = descending

            // we can also use skip(how many times u want)
            
            console.log(req.query);
            const email = req.query.email;
            const query = {};
            if(email){
                query.email = email;
            }

            const cursor = productsCollection.find();

            const result = await cursor.toArray();
            res.send(result);
        })
        
        // get/find ONE specific id
        app.get('/products/:id', async(req, res)=>{
            const id = req.params.id;
            const query = { _id: new ObjectId(id)};
            const result = await productsCollection.findOne(query);
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
        app.get('/bids', async(req, res)=>{
            const email = req.query.email;
            const query = {};

            if(email){
                query.buyer_email = email;
            }

            const cursor = bidsCollection.find(query); 
            const result = await cursor.toArray();
            res.send(result);
        })

        app.post('/bids', async(req, res)=>{
            const newBid = req.body;
            const result = await bidsCollection.insertOne(newBid);
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


