
const express =  require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');
// const admin = require('firebase-admin');
// const serviceAccount = require("./jsonService.json");

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

// let db = admin.firestore();


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use(router);
router(app);



app.listen(3000);
console.log(" la aplicación esta escuchando en el port http://localhost:3000");




