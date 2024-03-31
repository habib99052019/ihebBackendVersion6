const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  userSchema = new mongoose.Schema({
  
  name: String,
   
    lastName:String ,
    phone: String,
    email: String,
    typRef:String,
    typM:String,
    typB:String,
    date:String,
   dateUpdate:String,
    country:String,
    project:String,
  dateNumber:Number,
    DateN:String,
    color : String,
    employer:String,
   isFacebook:Boolean,
   isWebSite:Boolean,
   
   statut:String,
   isNouveaux:Boolean,
    dateMeet: String,
    timeMeet:String,
    historique:[],
    arrayMeeting: []
   


  });
module.exports=mongoose.model('userSchema',userSchema);
