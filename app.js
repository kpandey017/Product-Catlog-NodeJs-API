const express= require('express');

const app = express();

const productRoute = require('./api/routes/products');
const categoryRoute = require('./api/routes/category');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

const multer = require('multer');
const upload = multer();

const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];

mongoose.connect(config.dbConnection);

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(bodyParser.json());
app.use(upload.array()); 

app.use('/product',productRoute);
app.use('/category',categoryRoute);

app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status=404;
    next(error);
});

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});


module.exports = app;