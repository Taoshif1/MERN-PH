const express = require('express');
const app = express();
const port = process.env.PORT || 3000 ;


app.get('/', (req, res) => {
    res.send('user server is available');
})

app.listen(port, ()=>{
    console.log(`user server started on PORT ${port}`)
})