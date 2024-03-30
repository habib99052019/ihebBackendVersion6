const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  projectOne= new mongoose.Schema({
 
  id:Number,
  price:String,
  brochure:String,
  catigorie:String,
  prencentage:String,
  plan:String,
  title:String,
  video: String,//"https://www.youtube.com/embed/pxEWiz40xBo?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1" ,
  titleHtml1:String,
  titleHtml2: String,
  location:String,
  pyement:String,
  sTitle:String,
  descFinale:String,
  desc:String,
  images:[]






   


  });
module.exports=mongoose.model('projectOne',projectOne);