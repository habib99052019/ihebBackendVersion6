
const express = require('express')
const router = express.Router();
const lodash=require('lodash');




const userSchema = require('../models/userSchema')
router.get('/all', async (req, res) => {
     
    var user = await userSchema.find();
      const jsonArray = user.map(doc => doc.toJSON());
     res.send(jsonArray.reverse());
//aaaa
 });
router.get('/ledsEmployer/:id', async (req, res) => {
     
    var user = await userSchema.find({employer:req.params.id});
      const jsonArray = user.map(doc => doc.toJSON());
     res.send(jsonArray.reverse());
//aaaa
 });
 router.get('/:id', async (req, res) => {
  console.log("habib")
var user=  await userSchema.findById(req.params.id)
      
 res.send(user)


})
 router.post('/addUser', async (req, res) => {
   console.log("habibbbbb")
   var user = await userSchema.create(req.body)
  //  if(req.body.dateMeet){
  //   user.dateRendezVous = req.body.dateMeet;
  //  }
  //  if(req.body.timeMeet){
  //   user.timeRendezVous=req.body.timeMeet
  //  }
  
   
  
     res.send(user);
 });
 router.post('/addXl', async (req, res) => {
  console.log("habibbbbb")
  await userSchema.insertMany(req.body.tabExel)
    res.send({message:true});
});
 router.put('/:id', async (req, res) => {
  

  console.log(req.params.id);
  var  user = await userSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
  res.send({message:true,user:user})
})

router.delete('/:id', async (req, res) => {

 await userSchema.deleteOne({ _id: req.params.id })
 res.send({message:true})

});
  
 module.exports = router;
 
