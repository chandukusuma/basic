require("dotenv").config();
const jwt = require("jsonwebtoken");
const auth = require("../middleware/Auth");
const User = require("../models/user.model")


const newToken = (user) => {
    return jwt.sign({user : user}, process.env.JWT_ACCESS_KEY)
}

const register = async (req, res) => {

    try{

    let user =  await User.findOne({email: req.body.email}).lean().exec()
    if(user) return res.status(400).json({
        status: "failed",
        message: "Please provide a different emial address"
    })

    user = await User.create(req.body) 

    const token = newToken(user)

    res.status(201).json({user, token});

    }
    catch(error){
        return res.status(500).json({message: error.message})
    }
    
    

     
}

const login = async (req, res) => {


  
    try{
        const user2 = await User.findOne({email: req.body.email});
 
        if(!user2)
            return res.status(400).json({
                status: "failed",
                message: "Please provide a different emial address"
            }); 
        
        const match = await user2.checkPassword(req.body.password);

        if(!match)
        return res.status(400).json({
            status: "failed",
            message: "Please provide a correct email address or password"
        }); 

        

        const token = newToken(user2);

        res.status(201).json({user2, token});

    }
    catch(e){
        res.status(500).json({status: "failed", message: e.message})
    }
}

//data update

const updateuser = async (req, res) => {
    try{
        const user4 = await User.findByIdAndUpdate(req.params.id, req.body);

        res.status(201).json({user4})
    }
    catch(e){
        res.status(500).json({message: e.message})
    }
}

// get users

const list = async (req, res) => {
    try{
        const user3 = await User.find().lean().exec();

        res.status(201).json({user3})
    }
    catch(e){
        res.status(500).json({message: e.message})
    }


}




module.exports = {
    register,
    login,
    list,
    updateuser
    
}