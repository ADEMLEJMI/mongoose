const mongoose=require('mongoose')
const clientShema=mongoose.Schema(
    {
        name:String,
        email:String,
        age:Number,
    }
)
const client=mongoose.model('client',clientShema)
module.exports=client