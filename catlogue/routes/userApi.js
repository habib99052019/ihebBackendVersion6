
const express = require('express')
const router = express.Router();
const lodash=require('lodash');



////
const userSchema = require('../models/userSchema')
// async function  del(){
//      console.log("del1")
//      await userSchema.deleteMany()
//       console.log("del2")
// }
// // //
// del()
router.get('/all', async (req, res) => {
     
    var user = await userSchema.find().populate('tableMeet');
      const jsonArray = user.map(doc => doc.toJSON());
     res.send(jsonArray.reverse());
//aaaa
 });
router.get('/ledsEmployer/:id', async (req, res) => {
     
    var user = await userSchema.find({employer:req.params.id}).populate('tableMeet');
      const jsonArray = user.map(doc => doc.toJSON());
     res.send(jsonArray.reverse());
//aaaa
 });
 router.get('/:id', async (req, res) => {
  console.log("habib")
var user=  await userSchema.findById(req.params.id).populate('tableMeet')
      
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
      // console.log(req.body.tabExel)
      let date = new Date();

let timeInMillis = date.getTime();
      let tableauAvecAttributAjouté = req.body.tabExel.map(object => {
    return {
        name:object.name,
         email:object.email,
         country:object.country,
         phone:object.phone + "/" + object.phone1,
         project:object.project,
         isFacebook:object.isFacebook,
         isWebsite:object.isWebSite,
        employer: req.body.employer ,
         dateUpdate:req.body.date,
         date:req.body.date,
         dateNumber:timeInMillis,
    };
});
  // console.log(tableauAvecAttributAjouté)
  await userSchema.insertMany(tableauAvecAttributAjouté)
    res.send({message:true});
});
 router.put('/:id', async (req, res) => {
   // Créer un objet Date à partir de la chaîne de date fournie
    var currentDate = new Date();

    // Extraire le jour, le mois et l'année de l'objet Date
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
    var year = currentDate.getFullYear() ; // Obtenir les deux derniers chiffres de l'année

    // Ajouter un zéro devant le jour et le mois si nécessaire
    if (day < 10) {
       var  d = '0' + day;
    }
    if (month < 10) {
      var   m = '0' + month;
    }
if (day >= 10) {
       var  d = '' + day;
    }
    if (month >= 10) {
      var   m = '' + month;
    }

    // Retourner la date au format "dd-mm-yy"
    var dateUpdate= day + '-' + m + '-' + year;
     var  user1 = await userSchema.findByIdAndUpdate(req.params.id)

  var  user = await userSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
      user.date=user1.date
      user.dateUpdate=dateUpdate
      await user.save()
  res.send({message:true,user:user})
})

router.delete('/:id', async (req, res) => {

 await userSchema.deleteOne({ _id: req.params.id })
 res.send({message:true})

});
  router.get('/del', async (req, res) => {
    try{
         console.log("are")
        await userSchema.deleteMany()
          
            res.send({message:true})
       
        
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});
 module.exports = router;
 
