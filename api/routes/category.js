const express = require('express');
const router = express.Router();

const CategoryController=require('../controllers/category')

router.get('/',CategoryController.category_get_all);

router.post('/',CategoryController.category_post);

router.get('/:categoryId', CategoryController.category_get_by_id);

module.exports=router;