const express = require('express');

const router = express.Router();
const Vehiculo = require('../models/vehiculo')
//peticiones a la ruta
router.get('/',(req,res)=>{
    //render recibe ejs y transforma a html
    res.render('index')


});
router.get('/listado', async(req,res)=>{
    //render recibe ejs y transforma a html
    const vehiculos = await Vehiculo.find();
    res.render('listado',{
        vehiculos
    });
    

    
});
router.post('/add', async (req,res)=>{
    
    console.log(new Vehiculo(req.body));
    const vehiculo = new Vehiculo(req.body);
    await vehiculo.save();
    res.send('agregado');
    //se almacena con save...pero es una promesa
    //async await permite ejecutar eventos asincronos sin usar promesas o callback
    
    
    
    
})
module.exports = router;