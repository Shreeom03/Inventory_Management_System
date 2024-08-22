import { cookie } from "express-validator";
import UserModel from "../models/user-model.js";

export default class UserController{
    getRegister(req, res) {
        res.render('register-user');
    }

    getLogin(req, res) {
        res.render('login' , {errorMessage:null});
    }

    Register(req, res) {
        UserModel.add(req.body);
        res.render('login' , {errorMessage:null});
    }

    Login(req, res , next) {
        let validated = UserModel.validate(req.body);
        if(validated){
            req.session.userEmail = req.body.email;
            next();
        }
        else{
            res.render('login' , {errorMessage: "User Not Found! Try Again"});
        }
    }

    Logout(req, res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/login');
            }
        });
        res.clearCookie('lastVisit');
    }
}