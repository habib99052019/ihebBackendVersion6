const express = require('express')
const router = express.Router();
const lodash=require('lodash');
// const { off } = require('../models/offPlanSchema.js');
const projectSchema = require('../models/projectOne.js')
// async function  del(){
//     console.log("del1")
//     await projectSchema.deleteMany()
//      console.log("del2")
// }
// // // //
// del()
// async function findProjectsByType() {
//     try {
//       const projects = await projectSchema.find({ type: "Ready" });
//       console.log(projects);
//     } catch (err) {
//       console.error(err);
//     } 
//   }
//  console.log('project')
//  findProjectsByType()
// async function  del(){
//      console.log("del1")
//      await projectSchema.deleteMany()
//       console.log("del2")
// }
// // // //
// del()
router.post('/creat', async (req, res) => {
    
 console.log(req.body,"ertBoo")
    var project =  await  projectSchema.create(req.body)
   
    res.send(project)
  

})
router.get('/:id', async (req, res) => {
    console.log("habib")
  const projecta=  await projectSchema.findById(req.params.id)
  console.log(projecta,"eree")
   res.send(projecta)
  

})
router.get('/', async (req, res) => {
     
  var projects = await projectSchema.find();
   res.send(projects);
//aaaa
});
router.get('/all/leng', async (req, res) => {
     
  var projects = await projectSchema.find();
   res.send({len:projects.length} );
//aaaa
});
router.get('/all/sepcial', async (req, res) => {
     
  var projects = await projectSchema.find({sepcial:true});
   res.send(projects);
//aaaa
});
router.get('/all/apar', async (req, res) => {
     
  var projects = await projectSchema.find({catigorie:"Apartement"});
   res.send(projects);
//aaaa
});
router.get('/all/vila', async (req, res) => {
     
  var projects = await projectSchema.find({catigorie:"Villa"});
   res.send(projects);
//aaaa
});
router.get('/all/office', async (req, res) => {
     
  var projects = await projectSchema.find({catigorie:"Office"});
   res.send(projects);
//aaaa
});
router.get('/all/redy', async (req, res) => {
 
     try {
        const projects = await projectSchema.find({ type: "Ready" });
        console.log(projects);
        res.send(projects);
      } catch (err) {
        console.error(err);
      } 
     
  //aaaa
  });
  router.get('/all/off', async (req, res) => {
   
    try {
        const projects = await projectSchema.find({ type: "Off" });
        console.log(projects);
        res.send(projects);
      } catch (err) {
        console.error(err);
      } 

  //aaaa
  });

//get avec sous off

router.put('/modif/:id', async (req, res) => {
     console.log(55888)
    var proj=  await projectSchema.findById(req.params.id)
    if(proj){
        var  project = await projectSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
 
        res.send({message:true ,project:project})
    }
 

})

router.delete('/Delet/:id', async (req, res) => {
  console.log("rrrrrr")
    var proj=  await projectSchema.findById(req.params.id)
    if(proj){
 await projectSchema.deleteOne({ _id: req.params.id })
 var projects = await projectSchema.find();
  const projectsReadys = await projectSchema.find({ type: "Ready" });
    const projectsOffs = await projectSchema.find({ type: "Off" });
  res.send({message:true,readys:projectsReadys,offs:projectsOffs})
}

});
  
module.exports = router;

