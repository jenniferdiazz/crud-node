const path = require('path');
const express = require('express');
const morgan= require('morgan');
const mongoose = require('mongoose')
const app = express();
//connecting to db
//promesas se ejecutan cuando pasa determinado evento: en este caso la conexion
mongoose.connect('mongodb://localhost/vehiculos-mongo')
    .then(db => console.log('Db connected'))
    .catch(err=>console.log(err));

//importando routes
const indexRoutes = require('./routes/index');
const { Mongoose } = require('mongoose');
//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
//motor de plantilla ejs
app.set('view engine', 'ejs');
//middlewares: funciones que se ejecutan antes de que lleguen a las rutas, para usarlas usamos morgan
app.use(morgan('dev'));
//entiende los datos html
app.use(express.urlencoded({extended:false}));

app.use('/', indexRoutes);
//starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});