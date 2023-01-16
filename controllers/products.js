const products = [];

exports.getAddProduct=(req,res,next)=>{
    res.render('add-product',{pageTitle:'Add product', 
    path: '/admin/add-product',
    formsCSS:true,
    productCSS:true,
    activeAddProduct:true});
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postAddProducts=(req,res,next)=>{
    products.push({title:req.body.title});
     res.redirect('/');
 };

 exports.getProducts=(req,res,next)=>{
     //This is provided by express to render
     res.render('shop',{prods:products,pageTitle:'Shop',path:'/'});
     //res.sendFile(path.join(rootDir,'views','shop.pug'));
 };

