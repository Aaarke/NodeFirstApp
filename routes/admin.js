const express =require('express');
const rootDir = require('../util/path');

const router =express.Router();
const path =require('path');
const productsController=require('../controllers/products');

router.get('/add-product',productsController.getAddProduct);

router.post('/add-product',productsController.postAddProducts);



module.exports=router;
