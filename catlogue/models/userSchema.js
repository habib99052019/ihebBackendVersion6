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
    country:String,
    project:String,
    DateN:String,
    color : String,
    
    dateMeet: String,
    timeMeet:String,
    historique:[],
    arrayMeeting: []
   


  });
module.exports=mongoose.model('userSchema',userSchema);
