
const Category = require('../models/category');
const mongoose = require('mongoose');

exports.category_get_all= (req,res,next)=>{
    Category.find()
    .lean()
    .exec()
    .then(docs=>{        
        docs.forEach((element,index) => {
            if(element.parentCategory!=null){
                const parentName=element.parentCategory
                const parentCategories=docs.filter(rec => rec.name==parentName)[0];
                if(parentCategories.childCategories == null || parentCategories.childCategories== undefined){
                    parentCategories.childCategories=[];
                }
                parentCategories.childCategories.push(element);
                docs.splice(index, 1);
            }
        });
        res.status(200).json(docs);
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error:err
        });
    });
}

exports.category_post= (req,res,next)=>{

    const category = new Category({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        description:req.body.description,
        parentCategory:req.body.parentCategory
    });
    category
        .save()
        .then(result=>{
            console.log(result);
            res.status(200).json({
                message:'Category Created',
                cretedCategory: category
            });
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({error:err});
        });
        
    
}

exports.category_get_by_id = (req,res,next)=>{
    const id = req.params.categoryId
    Category.findById(id)
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