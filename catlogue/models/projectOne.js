const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  projectOne= new mongoose.Schema({
  
  title: String,
      sTitle:String,
      desc: String,
     type:String, 
      price:String,
      brochure:String,
      catigorie:String,
      imgBackground:String,
      porcentage:String,
      delv:String,
      roi:String,
      location: String,
      prixFinal: String,
      plan:String,
      room: String,
      bath: String,
      bed: String,
      surface:String ,
      carc: [],
      imageProfil: String,
      pyement:String,
      lng:String,
      lat: String,
      imgs: [],
      video: String,
      sepcial:Boolean,
      coeur:Number,
      month:String,
      locationMap:String,
      titleArab:String,
      titleFrensh:String,
      descArab:String,
      descFrensh:String





   


  });
module.exports=mongoose.model('projectOne',projectOne);