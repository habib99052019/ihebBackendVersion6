
const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const landingSchema = require('../models/landingSchema.js')

router.post('/addlanding', async (req, res) => {
    try{
      

   
    var landing =  await  landingSchema.create(req.body)
  
   return res.send({
       message: true,
       id: landing._id
    })
   
   
 /*var  user  =new userSchema({
           nom:req.params.nom,
         age:req.params.age     //tu peut creer d'apres les parametres /:nom/:age en api de poste
      
   })    
    /*  user = await userSchema.create(user);*/
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});

router.put('/modif/:id', async (req, res) => {
  

    console.log(req.params.id);
    var  landing = await landingSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
   
    res.send({message:true})
  })
  
  router.delete('/Delet/:id', async (req, res) => {
  
    const groupDelete = await landingSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
      var  landings = await landingSchema.find();
      res.send(landings)
    })
})
router.get('/:id', async (req, res) => {
    console.log("habib")
  var landing=  await landingSchema.findById(req.params.id)
   res.send(landing)
  

})