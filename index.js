const express = require('express')
var cors = require('cors')
// const {mongoconnect} =require('./db')

// mongoconnect();
const app = express()
const port =5000 ;
app.use(cors())
app.use(express.json());
app.use('/public',express.static(__dirname+ '/public'))

app.get('/',async(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");
})

app.use('/api/location',require('./api/location'));

// app.listen(port, () => {
//   console.log(`server listening at http://localhost:${port}`)
// })
module.exports=app;