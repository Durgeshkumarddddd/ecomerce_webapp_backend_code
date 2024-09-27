
   user_name : "Durgesh",
    userId : "durgesh123",
    email : "durgeshkumar@gmail.com",
    password : bcrypt.hashSync("WELCOME1"+8)

    try {
        user = await user_model.create({
        user_name : "Durgeshji",
        userId : "durgesh123",
        email : "durgeshkumar@gmail.com",
        password : bcrypt.hashSync("WELCOME1"+8) ,
       
        })
        }
        catch(error){
            console.log("error for create user :"+error)
        }
        console.log("server create :",user)