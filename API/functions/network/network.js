const express = require('express');
const router = express.Router();
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const verifyToken = require('../config/verifyToken')
const response = require('./response');
const bookController = require('../components/book/controller');
const userController = require('../components/user/controller');
const registerController = require('../components/register/controller')
const authController = require('../components/auth/controller');



const admin = require('firebase-admin');
const serviceAccount = require("../jsonService.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
console.log("Conectado a la base de datos")
db = admin.firestore();



const rutasProtegidas = express.Router(); 
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];
 
    if (token) {
      jwt.verify(token, config.llave, (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });








/*BOOK CRUD*/
router.get('/book', rutasProtegidas, function (req, res){
    bookController.getBooks(db).then(result =>{
        response.success(req, res, result, 200);
    })
    .catch(error =>{
        response.error(req, res, 'Informacion invalida', 400, 'error en el controlador')
    })
});


router.get('/book/:id', rutasProtegidas ,function (req, res){
   
    bookController.getBookById(req.params.id ,db).then(result =>{
        response.success(req, res, result, 200);
    })
    .catch(error =>{
        response.error(req, res, 'Informacion invalida', 400, 'error en el controlador')
    })
});


router.post('/book', rutasProtegidas , function(request, res) {
    bookController.createBook(request.body.user, request.body.title, request.body.description, request.body.editorial, request.body.author, db)
    .then((book)=>{
        response.success(request, res, book, 200);
    })
    .catch(error=>{
        response.error(request, res, 'Informacion invalida', 400, 'error en el controlador')
    })  
});

router.delete('/book/:id', rutasProtegidas , function(request, res){
    bookController.deleteBook(request.params.id, db)
    .then(()=>{
        response.success(request, res, 'Eliminado Satisfactoriamente!', 200);
    })
    .catch(error=>{
        response.error(request, res, 'Error Inesperado', 400, 'error en el controlador');
    })
})

router.put('/book/:id', rutasProtegidas , function (request, res) {
    bookController.updateBook(request.body.user, request.body.title, request.body.description, request.body.editorial, request.body.author, request.params.id, db)
    .then(()=>{
        const edited = {
            userCreator: request.body.user,
            title: request.body.title,
            author: request.body.author,
            editorial: request.body.editorial,
            description: request.body.description,

        }
        response.success(request, res, edited, 200);
    })
    .catch(error=>{
        response.error(request, res, 'Informacion invalida', 400, 'error en el controlador')
    })  
});



/*USER CRUD*/

router.get('/user', rutasProtegidas ,function (req, res){
    userController.getUsers(db).then(result =>{
        response.success(req, res, result, 200);
    })
    .catch(error =>{
        response.error(req, res, 'Informacion invalida', 400, 'error en el controlador')
    })
});


router.get('/user/:id', rutasProtegidas , function (req, res){
   
    userController.getUserById(req.params.id ,db).then(result =>{
        response.success(req, res, result, 200);
    })
    .catch(error =>{
        response.error(req, res, 'Informacion invalida', 400, 'error en el controlador')
    })
});


router.post('/user', rutasProtegidas ,function (request, res) {
    userController.createUser(request.body.userName, request.body.name, request.body.lastName, request.body.password, request.body.email, request.body.roleName, db)
    .then((user)=>{
        response.success(request, res, user, 200);
    })
    .catch(error=>{
        response.error(request, res, 'Informacion invalida', 400, 'error en el controlador')
    })  
});

router.delete('/user/:id', rutasProtegidas ,function(request, res){
    userController.deleteUser(request.params.id, db)
    .then(()=>{
        response.success(request, res, 'Eliminado Satisfactoriamente!', 200);
    })
    .catch(error=>{
        response.error(request, res, 'Error Inesperado', 400, 'error en el controlador');
    })
})

router.put('/user/:id', rutasProtegidas ,function (request, res) {
    userController.updateUser(request.body.userName, request.body.name, request.body.lastName, request.body.password, request.body.email, request.body.roleName, request.params.id, db)
    .then(()=>{
        const edited = {
            userName: request.body.userName,
            name: request.body.name,
            lastName: request.body.lastName,
            password: request.body.password,
            email: request.body.email,
            roleName: request.body.roleName

        }
        response.success(request, res, edited, 200);
    })
    .catch(error=>{
        response.error(request, res, 'Informacion invalida', 400, 'error en el controlador')
    })  
});



/*REGISTER USER*/
router.post('/register', function (request, res) {
    registerController.registerUser(request.body.userName, request.body.name, request.body.lastName, request.body.password, request.body.email, db)
    .then((user)=>{
        response.success(request, res, user, 200);
    })
    .catch(error=>{
        response.error(request, res, 'Informacion invalida', 400, 'error en el controlador')
    })  
});


/** LOGIN WITH JWT*/

router.post('/login', function (request, res) {
    authController.login(request.body.email, request.body.password, db, config, jwt)
    .then((user)=>{
        res.header({
            "access-token": user.token
        })
        response.success(request, res, user, 200);
    })
    .catch(error=>{
        response.error(request, res, 'Informacion invalida', 400, 'error en el controlador')
    })  
});





module.exports = router;