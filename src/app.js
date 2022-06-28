import { openDb } from '../context/configdb.js';
import express  from 'express';
const app = express();

openDb();

app.get('/',function(req,res){
    res.send("Projeto Teste!!")
})


app.listen(3000,()=>console.log("Api Rodando"));