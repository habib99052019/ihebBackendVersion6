const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  employeSchema  = new mongoose.Schema({
    name:String,
    lastName:String,
    pseudoName:String,
    login:String,
    password:String,
    phone:String,
    email:String,
    role:String,
    stablme:String,
    profil:String,
    planing:[]
    
  });
module.exports=mongoose.model('employeSchema',employeSchema);