const express = require('express');

const path =require('path');

const router= express.Router();
const rootDir =require('../util/path');

router.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));
});

router.post('/add-product',(req,res,next)=>{
    const data =req.body
    console.log(data);
    res.status(200).redirect('/');
});

module.exports =router;