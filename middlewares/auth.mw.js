/**
 *   create a middle ware will check if the request body is proper and correct 
 */
// import user model
const user_model = require("../Models/model_customer")

const verifySignUpBoddy = async(req,res,next) => {

    try{
        // check for name
        if(!req.body.name){
            return res.status(400).send({
                message:"Failed ! Name was not provide in request body"
            })
        }      
        //check for userid 
        if(!req.body.userId){
         return res.status(400).send({
            message:" Failed ! while userid is provided in req body "
         })
        }
        //check for email
        if(!req.body.name){
            return res.status(400).send({
                message:"Failed ! email id is not provided "
            })
        }

        //check if the usertype
        if(!req.body.userType){
            return res.status(400).send({
                message:"Failed ! usertype is not provided "
            })
        }

        // check password
        if(!req.body.password){
            return res.status(400).send({
                message:"Failed ! password is not provided "
            })
        }
        // Check if the user with the same useId is already present
         const user = await user_model.findOne({userId : req.body.userId})
         if(user){
            return res.status(400).send({
                message : "Failled user with same userid is already "
            })
        }
    
        next()

    }catch(err){
        console.log("error while variefying ",err)
        res.status(500).send({
            message:"Error while validating the request body"
        })
    }
 
} 
    // Check if the user with the same userId is already present
   module.exports = (app)=>{
    app.post("/ecomm/api/v1/auth/signup",[auth.mw.varifySignUpBoddy],authController.signup);
   }