import express  from "express";
import { createUser, getUser, getoneUser } from "./user.controller";

const router=express.Router()


// all router 
 router.get('/getuser',getUser)
 router.post('/createuser',createUser)
 router.get('/getuser/:id',getoneUser)

 export default router