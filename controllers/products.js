const Product=require('../models/product');
exports.getAddProduct=(req,res,next)=>{
    res.render('add-product',{pageTitle:'Add product', 
    path: '/admin/add-product',
    formsCSS:true,
    productCSS:true,
    activeAddProduct:true});
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postAddProducts=(req,res,next)=>{
    const product= new Product(req.body.title);
    product.save();
    res.redirect('/');
 };

 exports.getProducts=(req,res,next)=>{
    const allProducts=Product.fetchAll();
     //This is provided by express to render
     res.render('shop',{prods:products,pageTitle:'Shop',path:'/'});
     //res.sendFile(path.join(rootDir,'views','shop.pug'));
 };

