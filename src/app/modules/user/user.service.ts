import IUSER from "./user.interface";
import Usermodel from "./user.model";

export const createuserdb=async(bodydata:IUSER)=> {
    const user = new Usermodel(bodydata);
    await user.save();
}

  export const getuserdb=async()=> {
    const users=await Usermodel.find()
    return users
  
  }
  
  export const getoneuserdb=async(id:string)=> {
    const users=await Usermodel.findOne({id:id})
    return users
  
  }
  