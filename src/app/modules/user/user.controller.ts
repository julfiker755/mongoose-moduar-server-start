import { createuserdb, getoneuserdb, getuserdb } from "./user.service"
import {Request,Response} from 'express'

// createuser
export const createUser=async (req:Request, res:Response) => {
    const bodydata=req.body
       const user=await createuserdb(bodydata);
       res.status(200).json({
        status: 'success',
        data: user,
      });
}

// getuser
export const getUser=async (req:Request, res:Response) => {
    const user=await getuserdb();
    res.status(200).json({
     status: 'success',
     data: user,
   });
}

// getuser findonedata
export const getoneUser=async (req:Request, res:Response) => {
    const {id}=req.params
    const user=await getoneuserdb(id);
    res.status(200).json({
     status: 'success',
     data: user,
   });
}