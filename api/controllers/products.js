
const Product = require('../models/products');
const mongoose = require('mongoose');

exports.products_get_all= (req,res,next)=>{
    Product.find()
    .exec()
    .then(docs=>{
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}

exports.products_post= (req,res,next)=>{
    let categories=null;
    if(req.body.categories){
        categories=req.body.categories.split(',');        
    }
    
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        price:req.body.price,
        categories:categories
    });

    product
        .save()
        .then(result=>{
            console.log(result);
            res.status(200).json({
                message:'Product Created',
                cretedProduct: product
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error:err});
        });
        
    
}

exports.products_get_by_category = (req,res,next)=>{
    const category = req.params.category
    Product.find({ categories: category })
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}


exports.product_update = (req,res,next)=>{
    const id = req.params.productId
    const updateOps = {};
    // for(const ops of req.body){
    //     updateOps[ops.propName]=ops.value;
    // }
    for (const key of Object.keys(req.body)) {
        updateOps[key]=req.body[key];//console.log(key, input[key]);
      }
    Product.update({_id:id},{$set:updateOps})
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json(updateOps);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}

exports.products_get_by_id = (req,res,next)=>{
    const id = req.params.productId
    Product.findById(id)
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}