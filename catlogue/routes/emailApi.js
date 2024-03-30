const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();
const userSchema = require('../models/userSchema')
/////hnnibal
router.post('/hannibal',async (req, res) => {
    console.log(req.body.email)
   
  

    const mailOptions = {
        from:"info@hannibalmarketing.com",
         to: ["heartofcarthagedubai@gmail.com","iheb88ben@outlook.com ","ha9.0bib90@gmail.com"],  //"Contact@heartofcarthage.com" ,
        subject: 'New customer',
       html: `<div><h2>Information to customer of Hannibal</h2></div>
       <pre>name: ${req.body.name}</pre>
       <pre>phone: ${req.body.phone}</pre>
       <pre>email: ${req.body.email}</pre>
       <h5>${req.body.project}</h5>
     
  
       `
        
    };
      const mailOptions2 = {
        from:"info@hannibalmarketing.com",
         to: req.body.email ,
        subject: 'Welcome to Hannibal Marketing',
       html:`<div>
      <p><img src="https://img1.wsimg.com/isteam/ip/181a5736-b1af-4d3e-aab7-8a755a286595/HANNIBAL%20D.MARKETING%20LOGO%20WITHOUT%20BACKGROUND%201.png/:/rs=w:276,h:100,cg:true,m/cr=w:276,h:100/qt=q:95" style="  width:200px;
           height:auto;"></p>
       <h2>Welcome to Hannibal Mrketing</h2></div>
       <p>Welcome ${req.body.name} thank you for registering with hannibal Marketing
our team will contact within 24 hours to help</p>
       
      
     
  
       `
        
    };
   //oflniaebswpiddrt
    // email transport configuration

   
//         maxConnections: 3, //<-----------ADD THIS LINE
//         pool: true,
       
//         host: "smtp-mail.outlook.com", // hostname
//         secureConnection: false, // TLS requires secureConnection to be false
//         port: 587, // port for secure SMTP
        
//   secure: false,
//   ignoreTLS:  false,
//   requireTLS: false,
//   connectionTimeout:  5000,
//   greetingTimeout: 5000,
//   socketTimeout: 5000, // port for secure SMTP
//         tls: {
//             rejectUnauthorized: false
//         }
//         ,
var transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "info@hannibalmarketing.com" ,      // "hearth.Of.carthage90@outlook.fr",
            pass:"nahmzayvkqmshkjx" //"5h5a171078" //"5qtztsuwozbbnrmcm"
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
           await transport.sendMail(mailOptions2, (error, info) => {
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
  
});
///fin hinnbal

router.post('/send-mail1',async (req, res) => {
    console.log(req.body.email)
  

   text="*"+ req.body.name+"*" +req.body.email + '*'+ req.body.phone+"*"+ req.body.project +"*"+req.body.typRef+"*"+req.body.typM+"*"+req.body.typB+"*"+req.body.date+"*"
  console.log(text)

    const mailOptions = {
        from:"habibfullstack90@gmail.com",
         to: ["heartofcarthagedubai@gmail.com","iheb88ben@outlook.com ","ha9.0bib90@gmail.com"],  //"Contact@heartofcarthage.com" ,
        subject: 'New customer',
       html: `<div><h2>Information to customer</h2></div>
       <pre>name: ${req.body.name}</pre>
       <pre>phone: ${req.body.phone}</pre>
       <pre>email: ${req.body.email}</pre>
       <h5>${req.body.project}</h5>
       <pre>What is the subject of the consultation?: ${req.body.q1}</pre>
       <pre>What type of property do you wan: ${req.body.q2}</pre>
       <pre>type of consultation: ${req.body.q3}</pre>
       <pre>date of meeting: ${req.body.dateMeet}</pre>
       <pre>time of meeting: ${req.body.timeMeet}</pre>
       <h2 style='margin-left:60%'>Good luck</h2>
       `
        
    };
   //oflniaebswpiddrt
    // email transport configuration

   
//         maxConnections: 3, //<-----------ADD THIS LINE
//         pool: true,
       
//         host: "smtp-mail.outlook.com", // hostname
//         secureConnection: false, // TLS requires secureConnection to be false
//         port: 587, // port for secure SMTP
        
//   secure: false,
//   ignoreTLS:  false,
//   requireTLS: false,
//   connectionTimeout:  5000,
//   greetingTimeout: 5000,
//   socketTimeout: 5000, // port for secure SMTP
//         tls: {
//             rejectUnauthorized: false
//         }
//         ,
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
  
});
router.post('/send-mail',async (req, res) => {
    console.log(req.body.email)
   
   text="Welcome to our company, and thank you for trusting us Our people will contact you for more information"
  console.log(text)

    const mailOptions = {
        from:"heartofcarthagedubai@gmail.com" ,
        to:req.body.email ,
        subject: 'code verifcation email:' + req.body.code ,
      
       html: `<div><img src="https://www.heart-of-carthage-dubai.com/assets/images/logoHOCD.png" style="  width:80px;
       height:auto;margin:auto">
       <h3>code verfication email Heart of Carthage</h3></div>
       <h2>code: ${req.body.code}</h2>
      
       `
    };
   
    // email transport configuration

   
//         maxConnections: 3, //<-----------ADD THIS LINE
//         pool: true,
       
//         host: "smtp-mail.outlook.com", // hostname
//         secureConnection: false, // TLS requires secureConnection to be false
//         port: 587, // port for secure SMTP
        
//   secure: false,
//   ignoreTLS:  false,
//   requireTLS: false,
//   connectionTimeout:  5000,
//   greetingTimeout: 5000,
//   socketTimeout: 5000, // port for secure SMTP
//         tls: {
//             rejectUnauthorized: false
//         }
//         ,
var transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "heartofcarthagedubai@gmail.com" ,      // "hearth.Of.carthage90@outlook.fr",
            pass:"lflcuyknikjuqyrb" //"5h5a171078" //"5qtztsuwozbbnrmcm"
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
  
});
router.post('/send-mailRendevous',async (req, res) => {
    console.log(req.body.email)
   
   text="Welcome to our company, and thank you for trusting us Our people will contact you for more information"
  console.log(text)

    const mailOptions = {
        from:"heartofcarthagedubai@gmail.com" ,
        to:req.body.email ,
        subject: 'Confirm Meeting ',
      
       html: `<style>
       body {
         height: 100%;
         margin: 0;
       }
       
       .bgimg {
         background-image: url('https://static3.mansionglobal.com/production/media/article-images/3ab3a2b26589045e80e3da2b799a73b9/large_dubai11.jpg');
         height: 100%;
         background-position: center;
         background-size: cover;
         position: relative;
         color: white;
         font-family: "Courier New", Courier, monospace;
         font-size: 25px;
       }
       
       .topleft {
         position: absolute;
         top: 0;
         left: 16px;
       }
       
       .bottomleft {
         position: absolute;
         bottom: 0;
         left: 16px;
       }
       
       .middle {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         text-align: center;
       }
       
       hr {
         margin: auto;
         width: 40%;
       }
       </style>
       <body>
       
       <div class="bgimg" style=" background-image: url('https://static3.mansionglobal.com/production/media/article-images/3ab3a2b26589045e80e3da2b799a73b9/large_dubai11.jpg');">
         <div class="topleft">
           <p><img src="https://www.heart-of-carthage-dubai.com/assets/images/logoHOCD.png" style="  width:80px;
           height:auto;"></p>
         </div>
         <div class="middle">
           <h1 style="color:#fff">Date Of meeting</h1>
           <hr>
           <p></p>
         </div>
         <div class="bottomleft">
           <p style="color:#fff">name : ${req.body.name}</p>
           <p style="color:#fff">phone : ${req.body.phone}</p>
           <p style="color:#fff">Date Meeting: ${req.body.dateMeet}</p>
           <p style="color:#fff">Time Meeting : ${req.body.timeMeet}</p>
         </div>
       </div>
       
       </body>
      
       `
    };
   
    // email transport configuration

   
//         maxConnections: 3, //<-----------ADD THIS LINE
//         pool: true,
       
//         host: "smtp-mail.outlook.com", // hostname
//         secureConnection: false, // TLS requires secureConnection to be false
//         port: 587, // port for secure SMTP
        
//   secure: false,
//   ignoreTLS:  false,
//   requireTLS: false,
//   connectionTimeout:  5000,
//   greetingTimeout: 5000,
//   socketTimeout: 5000, // port for secure SMTP
//         tls: {
//             rejectUnauthorized: false
//         }
//         ,
var transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "heartofcarthagedubai@gmail.com" ,      // "hearth.Of.carthage90@outlook.fr",
            pass:"lflcuyknikjuqyrb" //"5h5a171078" //"5qtztsuwozbbnrmcm"
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
  
});
////////////////////////////////////
router.post('/send-mail-ichkel',async (req, res) => {
    console.log(req.body.email)
   
   var text= "votre réservation à bien été confirmer" +" "+ req.body.text

    const mailOptions = {
        from:"habibfullstack90@gmail.com",
         to: req.body.email,  //"Contact@heartofcarthage.com" ,
        subject: ' Nouveaux client',
        text:text
        
    };
   //oflniaebswpiddrt
    // email transport configuration

   
//         maxConnections: 3, //<-----------ADD THIS LINE
//         pool: true,
       
//         host: "smtp-mail.outlook.com", // hostname
//         secureConnection: false, // TLS requires secureConnection to be false
//         port: 587, // port for secure SMTP
        
//   secure: false,
//   ignoreTLS:  false,
//   requireTLS: false,
//   connectionTimeout:  5000,
//   greetingTimeout: 5000,
//   socketTimeout: 5000, // port for secure SMTP
//         tls: {
//             rejectUnauthorized: false
//         }
//         ,
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
  
});
router.post('/send-mail-ichkel1',async (req, res) => {
    console.log(req.body.email)
   
   var text= "Par la présente, je vous confirme la réservation d'une chambre pour une durée (préciser la durée), du (préciser une date) au (précisez une date) pour (préciser le nombre de personnes) personnes. Je vous remercie de votre service et vous prie d'agréer, Madame, Monsieur, l'expression de ma respectueuse considération." +" "+ req.body.text

    const mailOptions = {
        from:"dichkeul@gmail.com",
         to: req.body.email,  //"Contact@heartofcarthage.com" ,
        subject: 'Bienvenue a Dar Ichkeul',
        text:text,
        html:
       "<div style='text-align:center'> <img src='https://darichkeul.tn/assets/img/logo_final.png' style='height:50px;width:50px'></div>"
    
       
    };

   //oflniaebswpiddrt
    // email transport configuration

   
//         maxConnections: 3, //<-----------ADD THIS LINE
//         pool: true,
       
//         host: "smtp-mail.outlook.com", // hostname
//         secureConnection: false, // TLS requires secureConnection to be false
//         port: 587, // port for secure SMTP
        
//   secure: false,
//   ignoreTLS:  false,
//   requireTLS: false,
//   connectionTimeout:  5000,
//   greetingTimeout: 5000,
//   socketTimeout: 5000, // port for secure SMTP
//         tls: {
//             rejectUnauthorized: false
//         }
//         ,
var transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "dichkeul@gmail.com" ,      // "hearth.Of.carthage90@outlook.fr",
            pass:"wlnquragxnlemgit" //"5h5a171078" //"5qtztsuwozbbnrmcm"
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
  
});
///crm
router.post('/send-mailCrmClient',async (req, res) => {
    console.log(req.body.email)
   
//   text="Welcome to our company, and thank you for trusting us Our people will contact you for more information"
//  console.log(text)

    const mailOptions = {
        from:"heartofcarthagedubai@gmail.com" ,
        to:req.body.email ,
        subject: req.body.objectEmail,
      
       html: `<style>
       body {
         height: 100%;
         margin: 0;
       }
       
       .bgimg {
        
         height: 100%;
         background-position: center;
         background-size: cover;
         position: relative;
         color: white;
         font-family: "Courier New", Courier, monospace;
         font-size: 25px;
       }
       
       .topleft {
         position: absolute;
         top: 0;
         left: 16px;
       }
       
       .bottomleft {
         position: absolute;
         bottom: 0;
         left: 16px;
       }
       
       .middle {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
         text-align: center;
       }
       
       hr {
         margin: auto;
         width: 40%;
       }
       </style>
       <body>
       
       <div class="bgimg" style=" background-image: url('https://static3.mansionglobal.com/production/media/article-images/3ab3a2b26589045e80e3da2b799a73b9/large_dubai11.jpg');">
         <div class="topleft">
           <p><img src="https://www.heart-of-carthage-dubai.com/assets/images/logoHOCD.png" style="  width:80px;
           height:auto;"></p>
         </div>
         <div class="middle">
           <h1 style="color:#fff">Date Of meeting</h1>
           <hr>
           <p></p>
         </div>
         <div class="bottomleft">
           <p >name : ${req.body.text}</p>
           
          
         </div>
       </div>
       
       </body>
      
       `
    };
   
    // email transport configuration

   
//         maxConnections: 3, //<-----------ADD THIS LINE
//         pool: true,
       
//         host: "smtp-mail.outlook.com", // hostname
//         secureConnection: false, // TLS requires secureConnection to be false
//         port: 587, // port for secure SMTP
        
//   secure: false,
//   ignoreTLS:  false,
//   requireTLS: false,
//   connectionTimeout:  5000,
//   greetingTimeout: 5000,
//   socketTimeout: 5000, // port for secure SMTP
//         tls: {
//             rejectUnauthorized: false
//         }
//         ,
var transport = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "heartofcarthagedubai@gmail.com" ,      // "hearth.Of.carthage90@outlook.fr",
            pass:"lflcuyknikjuqyrb" //"5h5a171078" //"5qtztsuwozbbnrmcm"
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
  
});
module.exports = router;
//update
///
