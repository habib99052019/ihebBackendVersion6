const express = require('express')
const router = express.Router();
const lodash=require('lodash');


const MeetSchema = require('../models/Meet')

const userSchema = require('../models/userSchema')
   router.post('/add',  async (req, res) => {
   
             
// console.log(req.body , typeOf(req.body))
    

   var meet= await MeetSchema.create(req.body)
   
 
   await userSchema.findByIdAndUpdate({ _id:req.body.lead}, { $push: { tableMeet: meet._id } })
   res.send(meet)
    
});
router.get('/all', async (req, res) => {
     
    var Meet = await MeetSchema.find().populate('lead');
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
