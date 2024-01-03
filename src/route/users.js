import express from "express";
import { getUser,postLoginUser,postRegisterUser } from "../controller/userController.js";
import { body, validationResult } from 'express-validator';
const router = express.Router()

const inintUsersRoute = (app) => {
    router.get('/', getUser)
    router.post('/login',
        body('email').isEmail(),
        body('password').isLength({ min: 5}),   
         postLoginUser)
    router.post('/register', postRegisterUser)

    return app.use('/user', router)
}

export default inintUsersRoute;