const http= require('http');
const express= require('express');
const app =express();

//This is used to set globle variable through out our node application
app.set('view engine','pug');
app.set('views','views');

const bodyParser=require('body-parser');
const adminRoutes= require('./routes/admin');
const shopRoutes= require('./routes/shop');
const path=require('path');
const errorController=require('./controllers/error');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname,'public')));
app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);