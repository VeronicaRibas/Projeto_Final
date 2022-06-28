import { CreateTables } from './context/dbcontext.js';
import express  from 'express';
const app = express();

CreateTables();
app.use(express.json);

app.get('/',function(req,res){
    res.send("Projeto Teste!!")
})


app.listen(3000,()=>console.log("Api Rodando"));