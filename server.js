const express=require('express')
const mongoose=require('mongoose')
const app = express()
const port=5000

app.use(express.json())


mongoose.connect('mongodb+srv://adem:ademlejmi@cluster0.8eblnis.mongodb.net/f3?retryWrites=true&w=majority').then(()=>console.log("db connecting"))
app.use('/',require('./routes/clientroute'))
app.listen(port,(err)=>{err? console.log(err):console.log("server is runnig in port:",port)})