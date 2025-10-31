const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// mongoDB: simpleDBUser - d1F69hx7hPo2bzUA
const uri = "mongodb+srv://simpleDBUser:d1F69hx7hPo2bzUA@cluster0.kpmcxd4.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// database has no connection outside run() function
app.get('/', (req, res)=>{
    res.send(`Simple CRUD server is running on WEB PORT: ${port}`);
})


// async function run() {
//     await
// }
// run().catch(console.dir)

// database connection
async function run() {
    try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    //create users database & a collection
    const usersDB = client.db('usersDB');
    const usersCollection = usersDB.collection('users');

    // find value or Read value => R
    app.get('/users', async(req, res)=> {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    })

    // find specific id (almost same as delete)
    app.get('/users/:id', async(req, res)=>{
      const id = req.params.id;
      console.log('Need user with ID: ', id);
      const query = {_id: new ObjectId(id)};
      const result = await usersCollection.findOne(query);
      res.send(result);

    })

    
    // add database related apis here
    app.post('/users', async(req, res)=>{
      const newUser = req.body;
      console.log('New User: ',newUser);
      //insert/create user in DB => C
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    })

    // patch
    app.patch('/users/:id', async(req, res)=>{
      const id = req.params.id;
      const updatedUser = req.body;
      console.log("To Update -> ", id, updatedUser);
      const query = { _id: new ObjectId(id)};
      const update = {
        $set: {
            name: updatedUser.name,
            email: updatedUser.email,
        }
      }
      const options = {};
      const result = await usersCollection.updateOne(query, update, options);
      res.send(result);
    })



    // delete user of a specific id
    app.delete('/users/:id', async(req, res)=>{
      console.log(req.params.id);
      const id = req.params.id; 
      const  query = { _id: new ObjectId(id)}
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
    }
}

run().catch(console.dir)



app.listen(port, ()=>{
    console.log(`Simple CRUD Server Running on Terminal PORT: ${port}`);
})



/**
 * 1. at least one user
 * 2. set uri with userId & password
 * 3. create a mongodb client
 * 4. add a run function to connect to the database
 * 5. use try finally inside it to connect the client
 * 6. ping the database to see if server is alive or not
 * 
 */







