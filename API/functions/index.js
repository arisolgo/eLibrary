
var admin = require("firebase-admin");

var serviceAccount = require("./jsonService.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://elibrary-8ce6a.firebaseio.com"
});


var ref = admin.database().ref('libros');
var pushBook = ref.push();

pushBook.set({
    
    nombre: 'Ariel',
    libro: 'Agencias',


});