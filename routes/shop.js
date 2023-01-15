const express = require('express');

const path =require('path');

const router= express.Router();
const rootDir =require('../util/path');
const adminData=require('./admin');

router.get('/',(req,res,next)=>{
   const products= adminData.products;
    //This is provided by express to render
    res.render('shop',{prods:products,docTitle:'Shop',path:'/'});
    //res.sendFile(path.join(rootDir,'views','shop.pug'));
});

module.exports =router;