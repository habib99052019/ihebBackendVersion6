const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  MeetSchema  = new mongoose.Schema({
   
    title:String,
    lead:{ type: Schema.Types.ObjectId, ref:'userSchema'}, 
         employer:String,
           id:String,
           date:String,
         status:String,
         dateMetingSeconde:Number,
          DateMeet:String,
           Time:String ,
         desc:String
  });
module.exports=mongoose.model('MeetSchema',MeetSchema);
