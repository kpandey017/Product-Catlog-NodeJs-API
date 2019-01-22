const express = require('express');
const router = express.Router();

const ProdutController=require('../controllers/products')

router.get('/',ProdutController.products_get_all);

router.post('/',ProdutController.products_post);

router.put('/:productId',ProdutController.product_update);

router.get('/:productId', ProdutController.products_get_by_id);

router.get('/getByCategory/:category', ProdutController.products_get_by_category);

module.exports=router;