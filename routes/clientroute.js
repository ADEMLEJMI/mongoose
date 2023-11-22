const express=require('express')
const route =express.Router()
const client=require('../models/clientShema')

route.get('/',
async(req,res)=>{
    try {
        const clientlist= await client.find()
        res.status(200).json({msg:"get all",clientlist:clientlist})
        
    } catch (err) {res.status(500).json({msg:err})
        
    }
})
route.post('/post',
async(req,res)=>{
    try {
        const clientlist= new client(req.body)
        await clientlist.save()
        res.status(201).json({msg:"new contact",newcontact:clientlist})
        
    } catch (err) {res.status(500).json({msg:err})
        
    }
})
route.delete("/delete/:id", 
async(req, res) => {
    try {
     const del= await client.findByIdAndDelete({_id:req.params.id})
      res.status(201).json({ msg: "deleted "});
    } catch (err) {
      res.status(500).json({ msg: err });
    }
  });



module.exports=route