const express = require("express");
const sequelize = require("./config/dbcontext");

const app = express();

sequelize.sync().then(()=>console.log("database connect Successfully!!!"));

app.use(express.json());

app.listen(3030,()=>{
    console.log("Server started on port 3030");
})