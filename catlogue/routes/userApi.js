
const express = require('express')
const router = express.Router();
const lodash=require('lodash');
const userSchema = require('../models/userSchema')
const employerSchema=require('../models/employerSchema')
var cron = require('node-cron');
var tabji=[]
var tabEmm=[]
var tabjo
  function convertDateToDDMMYY() {
    var currentDate = new Date();
    // Créer un objet Date à partir de la chaîne de date fournie
    var day = currentDate.getUTCDate();
    var month = currentDate.getUTCMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
    var year = currentDate.getUTCFullYear() ; // Obtenir les deux derniers chiffres de l'année

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
    return  d + '-' + m + '-' + year;
}
      function processUser(user) {
    // Parcours de toutes les clés de l'objet
    for (var key in user) {
        // Vérification si la valeur de la propriété est undefined
        if (user.hasOwnProperty(key) && user[key] === undefined) {
            // Attribuer une valeur de chaîne vide '' à la propriété undefined
            user[key] = '';
        }
    }
    return user; // Retourner l'objet user traité
}

////

// async function  del(){
//      //console.log("del1")
//      await userSchema.deleteMany()
//       //console.log("del2")
// }
// // // //
// del()
router.get('/all', async (req, res) => {
     
    var user = await userSchema.find({isNouveaux:false}).populate('tableMeet');
      const jsonArray = user.map(doc => doc.toJSON());
     var arr = jsonArray.sort((a, b) => b.dateNumber - a.dateNumber);
   //console.log(arr[0],'sort')
     res.send(arr);
//aaaa
 });
 router.get('/allLeads', async (req, res) => {
     
  var user = await userSchema.find().populate('tableMeet');
    const jsonArray = user.map(doc => doc.toJSON());
   var arr = jsonArray.sort((a, b) => b.dateNumber - a.dateNumber);
 //console.log(arr[0],'sort')
   res.send(arr);
//aaaa
});
router.get('/xxl/xl', async (req, res) => {
     

   res.send({t:tabji,t2:tabEmm});
//aaaa
});
 router.get('/all/new', async (req, res) => {
     
  var user = await userSchema.find({isNouveaux:true})
    const jsonArray = user.map(doc => doc.toJSON());
   var arr = jsonArray.sort((a, b) => b.dateNumber - a.dateNumber);
 //console.log(arr[0],'sort')
   res.send(arr);
//aaaa
});
router.get('/all/pend', async (req, res) => {
     
  var user = await userSchema.find({isNouveaux:false, color:"3" })
    const jsonArray = user.map(doc => doc.toJSON());
   var arr = jsonArray.sort((a, b) => b.dateNumber - a.dateNumber);
 //console.log(arr[0],'sort')
   res.send(arr);
//aaaa
});
 router.get('/all/web/new', async (req, res) => {
     
  var user = await userSchema.find({isNouveaux:true ,isWebSite:true })
    const jsonArray = user.map(doc => doc.toJSON());
   var arr = jsonArray.sort((a, b) => b.dateNumber - a.dateNumber);
 //console.log(arr[0],'sort')
   res.send(arr);
//aaaa
});
router.post('/new/salesNew', async (req, res) => {
  //console.log("nnew")
  var users= await userSchema.find({isNouveaux:true ,employer:req.body.employer})
  res.send(users)
   
});
router.get('/all/facebook/new', async (req, res) => {
     
  var user = await userSchema.find({isNouveaux:true ,isFacebook:true })
    const jsonArray = user.map(doc => doc.toJSON());
   var arr = jsonArray.sort((a, b) => b.dateNumber - a.dateNumber);
 //console.log(arr[0],'ddd')
   res.send(arr);
//aaaa
});
router.get('/all/today', async (req, res) => {
     
    var user = await userSchema.find({dateUpdate:convertDateToDDMMYY()}).sort({ dateNumber: 1 }).populate('tableMeet');
      const jsonArray = user.map(doc => doc.toJSON());
    
     res.send(jsonArray);
//aaaa
 });
router.get('/all/today/messages', async (req, res) => {
     
    var user = await userSchema.find({dateUpdate:convertDateToDDMMYY()}).populate('tableMeet');
      const jsonArray = user.map(doc => doc.toJSON());
  var NumberMessages=0
  for (var i = 0; i <jsonArray.length ; i++) {
  NumberMessages=NumberMessages + jsonArray[i].historique.length
}
      
     res.send({message:NumberMessages});
//aaaa
 });
router.get('/all/redy', async (req, res) => {
     
    var user = await userSchema.find({color:"4"}).populate('tableMeet');
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
  //console.log("habib")
var user=  await userSchema.findById(req.params.id).populate('tableMeet')
      
 res.send(user)


})
router.post('/addUser/new', async (req, res) => {
  //console.log("habibbbbb")
  let date = new Date();
  let d=Date().slice(0,21)
  let timeInMillis = date.getTime();
  var user = await userSchema.create(req.body)
  user.dateLeadNew=d
  user.dateNumber=timeInMillis
   user.DateN=new Date()
  await user.save()
 
 
    res.send(user);
});
 router.post('/addUser', async (req, res) => {
   //console.log("habibbbbb")
   var user = await userSchema.create(req.body)
    user.DateN=new Date()
   await user.save()
  //  if(req.body.dateMeet){
  //   user.dateRendezVous = req.body.dateMeet;
  //  }
  //  if(req.body.timeMeet){
  //   user.timeRendezVous=req.body.timeMeet
  //  }
  
   
  
     res.send(user);
 });
router.put('/addUser/NewLeadArr', async (req, res) => {
   //console.log("habibbbbb")
   let date = new Date();

let timeInMillis = date.getTime();
   var user = await userSchema.findOne({_id:req.body.idUserNew})
  user.date=convertDateToDDMMYY()
  user.isNouveaux=false
  user.DateN=date
  user.dateUpdate=convertDateToDDMMYY()
  user.dateNumber=timeInMillis
    user.statut="new"
  user.color="3"
    await user.save()
  //  if(req.body.dateMeet){
  //   user.dateRendezVous = req.body.dateMeet;
  //  }
  //  if(req.body.timeMeet){
  //   user.timeRendezVous=req.body.timeMeet
  //  }
  
   
  
     res.send(user);
 });
 router.post('/addXl', async (req, res) => {
      // //console.log(req.body.tabExel)
      let date = new Date();

let timeInMillis = date.getTime();

      let tableauAvecAttributAjouté = req.body.tabExel
     let tabEmp = await  employerSchema.find({ login: { $ne: "admin" } })
     tabEmm=tabEmp
    console.log( tabEmp ,"emps")
    //
     let pointZero=0
   if(tableauAvecAttributAjouté.length >= tabEmp.length ) {
    let devision =    Math.floor(tableauAvecAttributAjouté.length / tabEmp.length )
   
    console.log(devision ,tableauAvecAttributAjouté.length,tabEmp.length ,"dev")
    for (let i = 0; i <tabEmp.length ; i++) {
      tableauAvecAttributAjouté.slice(pointZero, (i+2)*devision).map(ele=> ele.employer=tabEmp[i].login) ;

      pointZero=devision*(i+1)


    }
    
   }
   tabji=tableauAvecAttributAjouté
  // //console.log(tableauAvecAttributAjouté)
  await userSchema.insertMany(tableauAvecAttributAjouté)
    res.send({message:true});
});
 router.put('/:id', async (req, res) => {
   // Créer un objet Date à partir de la chaîne de date fournie
    var currentDate = new Date();

    // Extraire le jour, le mois et l'année de l'objet Date
    var day = currentDate.getUTCDate();
    var month = currentDate.getUTCMonth() + 1; // Les mois commencent à 0, donc on ajoute 1
    var year = currentDate.getUTCFullYear() ; // Obtenir les deux derniers chiffres de l'année

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
    var dateUpdate= d + '-' + m + '-' + year;
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
         //console.log("are")
        await userSchema.deleteMany()
          
            res.send({message:true})
       
        
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});
// cron.schedule('*/1 * * * *', async () => {
//   //console.log(55)
//   var prod= await userSchema.find({isNouveaux:true})
//   const tabEmp =  await employerSchema.find()

// // Traiter les données de réponse ici

// for (let i = 0; i < prod.length; i++) {
//   prod[i].employer=tabEmp[Math.floor(Math.random() * tabEmp.length)].login;
//   //console.log(prod[i] , "userEmployer")
//   await prod[i].save()
// }

// })
cron.schedule('*/20 * * * * *', async () => {

  var prod= await userSchema.find({isNouveaux:true})
  const tabEmp =  await employerSchema.find()

// Traiter les données de réponse ici
// //console.log(prod,"20segonde")

for (let i = 0; i < prod.length; i++) {
  prod[i].employer=tabEmp[Math.floor(Math.random() * tabEmp.length)].login;
 
  await prod[i].save()
  //console.log(prod[i].employer)
}
});
 module.exports = router;
 
