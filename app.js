const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('<b> Learning Jenkins </b>')
})


let PORT = 3001
app.listen(PORT,()=>{
    console.log('server is running');
})
