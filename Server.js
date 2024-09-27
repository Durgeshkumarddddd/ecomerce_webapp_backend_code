/** import express */
const express = require('express')
const app = express();
const PORT = 8888;
/** import mongoose */
const mongoose = require('mongoose')
const user_model = require('./Models/model_customer')

const server_config = require('./config/Server.config')
//const db_config = require("../config/db.config")

const bcrypt = require('bcryptjs')

/**import / Stich the route to the server */
require("./Routers/Auth.router")(app)

// to convert json postmanfile to nodejs app
app.use(express.json())

// connect with mongodb
mongoose.connect('mongodb://127.0.0.1:27017/eco_db')
const db = mongoose.connection

db.on("error",()=>{
    console.log("Error while connect with mongodb")
})
db.once("open" , ()=>{
    console.log("success full with mongodb")
    init();
})

async function init(){
        let user ;  
    try{
         user = await user_model.findOne({ userId : "durgesh123"})
        if(user){
        console.log("user is present already ")
           return
         }

    }catch(error){
        console.log("Error while write model :",error)
    }
  
  

}


// start server 
app.listen(PORT , () =>{
    console.log("server started at port num:" ,PORT )
})

