const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

// mongoDB: simpleDBUser - d1F69hx7hPo2bzUA

app.get('/', (req, res)=>{
    res.send(`Simple CRUD server is running on WEB PORT: ${port}`);
})

app.listen(port, ()=>{
    console.log(`Simple CRUD Server Running on Terminal PORT: ${port}`);
})










