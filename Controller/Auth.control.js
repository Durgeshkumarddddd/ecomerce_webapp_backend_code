/** i need to write the controller / logic to register a user */

const { request } = require("express")
const user_medel = require('../Models/model_customer')

exports.signup = async (req ,res )=>{
    
    /**
     * Logic to create the user
     */

    // 1. Read the request body 
    const request_body  = req.body 

   // 2.Insert the data in the users collection in MongoDB
    const userObj = {  
        name : request_body.name ,
        userId : request_body.userId,
        email : request_body.email,
        userType : request_body.userType,
        password : bcrypt.hashSync(request_body.password ,8)
 
       }
       
        try{
           const user_created = await user_medel.create(userObj)
           /**
            * Return this user
            */
          res.status(201).send(user_created) //201 is right indicate server

            }
            catch(error){
                console.log(" error while create obj :",error)
                res.status(500).send({
                    message : "Some error happend while registering the user "
                }) //it is internal server 500
     //3.Return the response back to the 
    }   
}

