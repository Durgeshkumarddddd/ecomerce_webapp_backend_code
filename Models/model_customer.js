/** Being mongoose file */
const mongoose = require('mongoose')

/**
 * user name
 * userId
 * password 
 * email id
 * usetype
 */

const userSchema = new mongoose.Schema({
    user_name : {
        type : String ,
        required : true 
    },
    userId : {
        type : String ,
        required : true ,
        unique : true 
    },
    password : {
        type : String ,
        required : true,
        minlength : 8,     
    },
    email : {
        type : String ,
        required : true ,
        lowercase : true ,
        minLength : 10 ,
        unique : true 
    },
    
},{timestamps : true , versionKey : false})

module.exports = mongoose.model(" user " , userSchema);