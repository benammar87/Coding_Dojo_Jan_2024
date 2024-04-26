const {Product} = require("../models/products.model")

module.exports.getALL=(req , res)=>{
    Product.find({})
    .then(objs=>res.json(objs))
    .catch(err=>res.json(err))
}

module.exports.create=(req , res)=>{
    Product.create(req.body)
    .then(objs => res.json(objs))
    .catch(err=>res.status(400).json(err))
}

module.exports.update=(req , res)=>{
    Product.findOneAndUpdate({_id:req.params.id},req.body, {new :true , runValidators:true})
    .then(objs=>res.json(objs))
    .catch(err=>res.status(400).json(err))
}

module.exports.delete = (req,res)=>{
    Product.deleteOne({_id:req.params.id})
    .then(objs=>res.json(objs))
    .catch(err=>res.json(err))
}

module.exports.getOne=(req,res)=>{
    Product.findOne({_id:req.params.id})
    .then(objs=>res.json(objs))
    .catch(err=>res.json(err))
}