const {
    toTitleCase,
    validateEmail,
    emailCheckInDatabase
} = require('../config/function');
const bcrypt = require('bcryptjs');
const userModel = require('../models/users');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/keys');

class Auth {
    async allUser(req,res){
        try{        
            let allUser = await userModel.find({})
            res.json({users:allUser})
        }catch{
            res.status(404)
        }
    }   

    async postSignup(req, res) {
        let { name, email, password, cPassword } = req.body
        let error = {}
        if (!name || !email || !password || !cPassword) {
            error = {...error,name:"Filed must not be empty",email:"Filed must not be empty",password:"Filed must not be empty",cPassword:"Filed must not be empty"}
            return res.status(400).json({error})
        }
        if (name.length < 3 || name.length > 25) {
            error = {...error,name:"Name must be 3-25 charecter"}
            return res.status(400).json({error})
        } else {
            if (validateEmail(email)) {
                name = toTitleCase(name)
                if (password.length > 255 | password.length < 8) {
                    error = {...error,password:"Password must be 8 charecter",name:"",email:""}
                    return res.status(400).json({error})
                } else {
                    // Email & Number exists Logic
                    try {
                        password = bcrypt.hashSync(password, 10)
                        const data = await userModel.findOne({ email: email })
                        if (data) {
                            error = {...error,password:"",name:"",email:"Email already exists"}
                            return res.status(400).json({error})
                        } else {
                            let newUser = new userModel({
                                name,
                                email,
                                password
                            })
                            newUser.save()
                                .then(data => {
                                    return res.status(200).json({ success: "Account create successfully. Please login" })
                                })
                                .catch(err => { console.log(err) })
                        }
                    } catch (err) {
                        console.log(err)
                    }
                }
            } else {
                error = {...error,password:"",name:"",email:"Email is not valid"}
                return res.status(400).json({error})
            }
        }
    }

    async postSignin(req, res) {
        let { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                error: "Fields must not be empty"
            })
        }
        try {
            const data = await userModel.findOne({ email: email })
            if (!data) {
                return res.status(400).json({
                    error: "Invalid email or password"
                })
            } else {
                const login = await bcrypt.compare(password, data.password)
                if (login) {
                    const token = jwt.sign({ _id: data._id }, JWT_SECRET);
                    const encode = jwt.verify(token, JWT_SECRET)
                    return res.status(200).json({
                        token: token,
                        user: encode
                    })
                } else {
                    return res.status(400).json({
                        error: "Invalid email or password"
                    })
                }
            }
        } catch (err) {
            console.log(err)
        }
    }
}

const authController = new Auth
module.exports = authController