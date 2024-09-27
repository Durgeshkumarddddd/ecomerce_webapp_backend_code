 /** post controller to controll  */
 const authController = require("../Controller/Auth.control");

 module.exports = (app) => {
    app.post("/ecomm/api/v1/auth/signup",authController.signup);
}