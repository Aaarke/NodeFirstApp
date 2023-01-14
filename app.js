const http= require('http');
const express= require('express');
const app =express();
const bodyParser=require('body-parser');
const adminData= require('./routes/admin');
const shopRoutes= require('./routes/shop');
const path=require('path');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminData.routes);
app.use(shopRoutes);

app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname,'views','notfound.html'));

});

app.listen(3000);