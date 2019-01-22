const mongoose= require('mongoose');

const productSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,require:true},
    price:{type:String,require:true},
    categories:[{type:String,require:false}],
});

module.exports = mongoose.model('Product',productSchema);