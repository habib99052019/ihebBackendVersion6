const express = require('express')
const router = express.Router();
const lodash=require('lodash');


const MeetSchema = require('../models/Meet')

const userSchema = require('../models/userSchema')

async function  del(){
     console.log("del1")
     await MeetSchema.deleteMany()
      console.log("del2")
}
del()
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
   router.post('/add',  async (req, res) => {
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
             
// console.log(req.body , typeOf(req.body))
    

   var meet= await MeetSchema.create(req.body)
   
 
   await userSchema.findByIdAndUpdate({ _id:req.body.lead}, { $push: { tableMeet: meet._id } })
       var user = await  userSchema.findById(req.body.lead )
      user.dateUpdate=dateUpdate
      await user.save()
   res.send(meet)
    
});
router.get('/all', async (req, res) => {
     
    var Meet = await MeetSchema.find().populate('lead');
      const jsonArray = Meet.map(doc => doc.toJSON());
     res.send(jsonArray.reverse());
//aaaa
 });
router.get('/all/today', async (req, res) => {
     
    var Meet = await MeetSchema.find({date:convertDateToDDMMYY()}).populate('lead');
      const jsonArray = Meet.map(doc => doc.toJSON());
     res.send(jsonArray.reverse());
//aaaa
 });
router.get('/all/today/valide', async (req, res) => {
     
    var Meet = await MeetSchema.find({DateMeet:convertDateToDDMMYY(),status:"1"}).populate('lead');
      const jsonArray = Meet.map(doc => doc.toJSON());
     res.send(jsonArray.reverse());
//aaaa
 });
router.get('/employer/:id', async (req, res) => {
     
    var Meet = await MeetSchema.find({employer:req.params.id}).populate('lead');
      const jsonArray = Meet.map(doc => doc.toJSON());
     res.send(jsonArray.reverse());
//aaaa
 });
router.get('/:id', async (req, res) => {
  console.log("habib")
var user=  await MeetSchema.findById(req.params.id).populate('lead')
      
 res.send(user)


})
 router.put('/:id', async (req, res) => {
  

  console.log(req.params.id);
  var  meet= await MeetSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
  res.send({message:true,meet:meet})
})
router.delete('/:id', async (req, res) => {
    try{
        var prod= await MeetSchema.findById(req.params.id)
        await userSchema.findByIdAndUpdate({ _id:prod.lead}, { $pull: { tableMeet: prod._id } })

        const prodDelete = await MeetSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
            var prods = await   MeetSchema.find();
            res.send(prods)
          })
        
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});
router.delete('/', async (req, res) => {
    try{
        const pubDelete = await MeetSchema.deleteMany()
          
            res.send({message:true})
       
        
   
        
    
    }catch(error){
        res.send(error.message)   
    }
    
});
module.exports = router;
