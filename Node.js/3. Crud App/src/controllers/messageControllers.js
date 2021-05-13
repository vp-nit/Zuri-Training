const Message = require('../models/message');

exports.createNewMessage = async(req, res)=>{
    const message = new Message({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country,
    });
    try{
        const m1 = await message.save();
        res.json(m1);
    }catch(err){
        res.send("Error"+err);
    }
}

exports.fetchAllMessages = async(req, res) => {
    try{
        const messages = await Message.find();
        res.json(messages);
    }catch(err){
        res.send("Error" + err);
    }
}

exports.fetchSingleMessage = async(req, res) => {
    try{
        const message = await Message.findById(req.params.id);
        res.json(message);
    }catch(err){
        res.send("Error" + err);
    }
}

exports.updadeSingleMessage = async(req, res)=>{
   try{
       const message = await Message.findById(req.params.id);
       message.email = req.body.email;
       const m1 = await message.save();
       res.json(m1);
   }catch(err){
       res.send("Error: "+ err);
   }
}

exports.deleteSingleMessage = async(req, res) => {
    try{
        const message = await Message.findById(req.params.id);
        const m1 = await message.remove();
        res.json(message)
    }catch(err){
        res.send("Error: " + err)
    }
}