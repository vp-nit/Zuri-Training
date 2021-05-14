const Message = require('../models/message');

exports.createNewMessage = async(req, res)=>{
    const message = new Message({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country,
    });
    try{
        const m1 = await message.save();
        res.status(200).json({status:"New message created.", message});
    }catch(err){
        res.status(500).json(err);
    }
}

exports.fetchAllMessages = async(req, res) => {
    try{
        const messages = await Message.find();
        res.status(200).json(messages);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.fetchSingleMessage = async(req, res) => {
    try{
        const message = await Message.findById(req.params.id);
        res.status(200).json(message);
    }catch(err){
        res.status(500).json(err);
    }
}

exports.updadeSingleMessage = async(req, res)=>{
   try{
       const message = await Message.findById(req.params.id);
       message.email = req.body.email;
       message.country = req.body.country
       const m1 = await message.save();
       res.status(200).json({status:"Succesfully updated",m1});
   }catch(err){
       res.status(500).json(err);
   }
}

exports.deleteSingleMessage = async(req, res) => {
    try{
        const message = await Message.findById(req.params.id);
        const m1 = await message.remove();
        res.status(200).json({status:"Succesfully deleted",message})
    }catch(err){
        res.status(500).json(err)
    }
}