const mongoose = require('mongoose');
//funcion que define como son los datos
const Schema = mongoose.Schema;
const VehiculoSchema = new Schema({
     nSerie: String,
     patente: String,
     kmI: String,
     horometroI: String,
     combustibleI: String,
     nombreE: String,
     chofer: String,
     fechaI:String,
     fechaA: String,


 });
module.exports= mongoose.model('vehiculos', VehiculoSchema)