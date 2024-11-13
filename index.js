const express = require('express')
//body parse//
//habibnnyyyyyyhyyt
//kkkoooloop^pkkkkk
//yyyyyy
//ii update 3
var bodyParser = require('body-parser');
var http = require('http');
const path = require('path');
var multer = require('multer');
console.log('produit')
const app = express();
app.use(bodyParser.json({ limit: '50mb' })); // Par exemple, 20 Mo pour JSON
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true })); // 20 Mo pour les données URL-encoded

// Ou utilisez directement express.json() si vous n'utilisez pas body-parser explicitement
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));


app.get('/backend', (req, res) => {
    res.send('Hello Backend!');
});
const connect = require('./dataBase/connect')
// instantiating an object
// const adsSdk = require('facebook-nodejs-business-sdk');
// const accessToken = 'EAAHJeNk7T40BO6N3M3LMMbZBgRyI2enWjU39Nqb7IZAyY3kRtrfvQwyv6fX1T4F876yLgDiGAdNY6a4pZBIoUC38ONyR1egjZAnPZCEfzC9ZCxrhYlsuZBKJ11Cg3k3oDiibk1XsUA633g6EBoAHyhDNGJzbWQYZCY7K9ZBTmmzd7FZBbu9bf3Md7WEIov3vGvAlaywwZDZD';
// const api = adsSdk.FacebookAdsApi.init(accessToken);
const produitApi=require('./catlogue/routes/produitApi')
const catigorieApi = require('./catlogue/routes/catigorieApi')
const sousCatigorieApi=require('./catlogue/routes/sousCatigorieApi')
const userApi= require('./catlogue/routes/userApi')
const emailApi= require('./catlogue/routes/emailApi')
const vila = require('./catlogue/routes/vilaApi')
const appr= require('./catlogue/routes/appApi')
const off= require('./catlogue/routes/off-plan')
const rent= require('./catlogue/routes/rentApi')
const project=require('./catlogue/routes/lunding')
const employer=require('./catlogue/routes/empoyer')
const Meet = require('./catlogue/routes/MeetApi')
const projectOne= require('./catlogue/routes/projectApi')
const facture= require('./catlogue/routes/factureApi')
//activer les api
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//routes

app.use('/backend/produit',produitApi);
app.use('/backend/catigorie',catigorieApi)
app.use('/backend/sousCat',sousCatigorieApi);
app.use('/backend/email',emailApi);
app.use('/backend/user',userApi);
app.use('/bacend/vila',vila);
app.use('/backend/off',off);
app.use('/backend/vila',vila);
app.use('/backend/appr',appr);
app.use('/backend/rent',rent);
app.use('/backend/one',project);
app.use('/backend/employer',employer);
app.use('/backend/meet',Meet);
app.use('/backend/real',projectOne);
app.use('/backend/facture',facture);
//app.use('/backend/uploads/', express.static(path.join(__dirname, '/uploads')));
app.use('/backend/uploads', express.static('uploads'));
const uploadDirectory = path.join(__dirname, 'uploads');
let img;
// Configurer Multer pour gérer les téléchargements
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename:  (req, file, cb) => {
    img=file.fieldname + '-' + Date.now() + path.extname(file.originalname)
         console.log(file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    cb(null,img);
  
  }
});

const upload = multer({ storage: storage });

// Définir la route pour le téléchargement de fichiers
app.post('/backend/upload', upload.single('image'), (req, res) => {
  // Gérer la réponse après le téléchargement du fichier
  res.send({message:'Fichier téléchargé avec succès',img:img});
});

//port
const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`Server listen on the port ${port}`)) ;

//port

