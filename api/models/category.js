const mongoose= require('mongoose');

const categorySchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String,require:true},
    description:{type:String,require:false},
    parentCategory:{type:String,require:false},
});

module.exports = mongoose.model('Category',categorySchema);