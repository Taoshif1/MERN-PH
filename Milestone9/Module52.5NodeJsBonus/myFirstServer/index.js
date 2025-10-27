const express = require('express');  // before import[ES6] require was used
const phones = require('./phones.json');
const app = express();              // create a app with the express
const port = 5000;                 // then declare a port
const cors = require('cors');


// middleware (cors)
app.use(cors());

// func to get data app.get('route', function)
app.get('/', (req, res)=>{
    res.send('Hello from my first server!!');

})

app.get('/data', (req, res)=>{
    res.send('More Data coming sooon!!');

})

// shows phones data
app.get('/phones', (req, res)=>{
    res.send(phones);

})


app.get('/phones/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log("I need data for Id -> ", id);
    
    const phone = phones.find(phone => phone.id === id); 
    
    // Handle case where phone is not found
    if (phone) {
        res.send(phone);
    } else {
        res.status(404).send({ message: 'Phone not found' });
    }
})


// maybe called listener idk
// connect the app with the port app.listen(port, optional function)
app.listen(port, ()=>{
    console.log(`My First Server Running on PORT: ${port}`);
})