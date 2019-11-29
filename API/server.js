const express =  require('express');
var app = express();

app.use('/', function(req, resp){
    resp.send("hola");
});
app.listen(3000);
console.log(" la aplication esta escuchando en el port http://localhost::3000");