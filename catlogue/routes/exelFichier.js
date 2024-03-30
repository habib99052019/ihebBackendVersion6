
const express = require('express')
const router = express.Router();
const lodash=require('lodash')
const XLSX = require('xlsx');
const userSchema = require('../models/userSchema')
 // convertit les données de la première feuille en JSON
router.post('/crrerExel', async (req, res) => {
    const workbook = XLSX.readFile(req.body.fichier);
const sheet_name_list = workbook.SheetNames; // obtient le nom de toutes les feuilles
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
 
    var users =  await  userSchema.create(data)
    
    res.send({message :true})
  

})
