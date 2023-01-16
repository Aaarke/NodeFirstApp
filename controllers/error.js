exports.get404=(req,res)=>{
    res.status(404).render('notfound',{pageTitle:'Page Not Found'});
    //res.status(404).sendFile(path.join(__dirname,'views','notfound.html'));

};