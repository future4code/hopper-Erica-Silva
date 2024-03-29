import express from "express";

import { UserController } from "../controller/UserController";

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post('/signup', userController.signup)
userRouter.get('/profile',userController.infoUser )
userRouter.post('/login',userController.login)
userRouter.post('/recipe',userController.recipe)
