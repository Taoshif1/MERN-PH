const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000 ;


app.use(cors());

app.get('/', (req, res) => {
    res.send('user server is available');
})

const users = [
    {id:1, name: "Mahafuza", email: "mahafuza@gmail.com"},
    {id:2, name: "Taoshif", email: "taoshif@gmail.com"},
    {id:3, name: "noone", email: "noone@gmail.com"},
]

app.get('/users', (req, res)=>{
    res.send(users);
})

app.listen(port, ()=>{
    console.log(`user server started on PORT ${port}`)
})