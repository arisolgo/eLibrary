const express = require('express');
const router = express.Router();
const response = require('./response');
const bookController = require('../components/book/controller');

const admin = require('firebase-admin');
const serviceAccount = require("../jsonService.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
console.log("Conectado a la base de datos")
db = admin.firestore();


/*BOOK CRUD*/
router.get('/book', function (req, res){
    bookController.getBooks(db).then(result =>{
        response.success(req, res, result, 200);
    })
    .catch(error =>{
        response.error(req, res, 'Informacion invalida', 400, 'error en el controlador')
    })
});


router.get('/book/:id', function (req, res){
   
    bookController.getBookById(req.params.id ,db).then(result =>{
        response.success(req, res, result, 200);
    })
    .catch(error =>{
        response.error(req, res, 'Informacion invalida', 400, 'error en el controlador')
    })
});


router.post('/book', function (request, res) {
    bookController.createBook(request.body.user, request.body.title, request.body.description, request.body.editorial, request.body.author, db)
    .then((book)=>{
        response.success(request, res, book, 200);
    })
    .catch(error=>{
        response.error(request, res, 'Informacion invalida', 400, 'error en el controlador')
    })  
});

router.delete('/book/:id', function(request, res){
    bookController.deleteBook(request.params.id, db)
    .then(()=>{
        response.success(request, res, 'Eliminado Satisfactoriamente!', 200);
    })
    .catch(error=>{
        response.error(request, res, 'Error Inesperado', 400, 'error en el controlador');
    })
})

router.put('/book/:id', function (request, res) {
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

module.exports = router;