const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  factureSchema= new mongoose.Schema({
  title:String,
  deadLine:String,
  deadLineM:Number,
  price:String,
 type:String,
  date:String,
  status:Number,
  link:String,
  dateCreation:String
 

  });
module.exports=mongoose.model('facture',factureSchema);