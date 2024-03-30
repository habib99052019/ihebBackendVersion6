const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  employeSchema  = new mongoose.Schema({
    project:String,
    linkFront:String,
    linkOffices:String,
    seoOptimation:String,
    googleAnalytec:String,
    pageFacebook:string,
    pixel:String

    
  });
module.exports=mongoose.model('landSchema',landSchema);