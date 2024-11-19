
const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const factureSchema = require('../models/factueSchema.js')
var cron = require('node-cron');
//jjjj
//habib
//hh


router.post('/creat', async (req, res) => {
    console.log(5)
 
    var cat =  await  factureSchema.create(req.body)
    console.log(cat,"facture")
    res.send(cat)
  

})
router.post('/compareFacture', async (req, res) => {
 
 
    var cat =  await  factureSchema.create(req.body)
    console.log(cat,"facture")
    res.send(cat)
  

})
router.get('/:id', async (req, res) => {
    console.log("habib")
  var facture=  await factureSchema.findById(req.params.id).lean()
   res.send(facture)
  

})

router.get('/', async (req, res) => {
  console.log("habib")
var factures=  await factureSchema.find()
 res.send(factures)


})
//get avec sous facture

router.put('/:id', async (req, res) => {
  

  console.log(req.params.id);
  var  prod = await factureSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
  res.send({message:true})
})

router.delete('/Delet/:id', async (req, res) => {

  const groupDelete = await factureSchema.deleteOne({ _id: req.params.id }).then(async (group) => {
    var prods = await factureSchema.find();
    res.send(prods)
  })


});
//getHome

   //push sous factures
//    router.post('/pushDemandesbou/:idfacture/:idsousfacture' , async (req, res) => {
  
        
           
//     await     factureSchema.findByIdAndUpdate({ _id:idfacture}, { $push: {  sousfacture: req.params.idsousfacture } }).then(async (cat) => {
     
//     var catcreate= await factureSchema.findOne({ _id: idfacture }).populate('sousfacture')
//     return res.send({mes:true})
   
//             });

 

      

 

// })
cron.schedule('0 0 * * *', async () => {

   
    const tabfac =  await factureSchema.find()
    const oneWeekInMillis = 7 * 24 * 60 * 60 * 1000;
  // Traiter les données de réponse ici
  // console.log(prod,"20segonde")
  
  for (let i = 0; i < tabfac.length; i++) {
    const currentTimeInMillis = Date.now();
   var compar =  tabfac[i].deadLineM - currentTimeInMillis
   if(compar < oneWeekInMillis){
    tabfac[i].status=1
    await tabfac[i].save()
    var   text= "facture pyer"
    console.log(text)
  
      const mailOptions = {
          from:"habibfullstack90@gmail.com",
           to: ["heartofcarthagedubai@gmail.com","ha9.0bib90@gmail.com"],  //"Contact@heartofcarthage.com" ,
          subject: 'New customer',
         html: `<div><h2>Information to customer</h2></div>
         <pre>Title: ${tabfac[i].title}</pre>
         <pre>Dead line :  ${tabfac[i].deadLine}</pre>
         
         `
          
      };
  

  var transport = nodemailer.createTransport({
          service: "Gmail",
          auth: {
              user: "habibfullstack90@gmail.com" ,      // "hearth.Of.carthage90@outlook.fr",
              pass:"iwkiteaprenqvvwk" //"5h5a171078" //"5qtztsuwozbbnrmcm"
          }  
      });
      // send email
      try{
          await transport.sendMail(mailOptions, (error, info) => {
              if (error) {
                  console.log(error);
              } else {
                  console.log('Email sent: ' + info.reponse);
                  res.json({message: "email send sucessfully"});
              }
          });
      }catch(err){
          console.log(err);
          
        }
    
    
   }
  }
  });
    module.exports = router;
    



   
     
    
  
   
