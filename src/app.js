const express  = require('express');

const app = express();


app.get('/',function(req,res){
    res.send("Projeto Iniciado!!")
})


app.listen(3000,()=>console.log("Api Rodando"));