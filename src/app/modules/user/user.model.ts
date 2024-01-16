import { Schema, model } from "mongoose";
import IUSER from "./user.interface";

const userSchema = new Schema<IUSER>({
    id: { type: String, required: true,unique:true },
    role: { type: String, required: true },
    password: { type: String, required: true },
    name:{
        fastname:{ type: String, required: true },
        middlename:{ type: String, required: true },
        lastname:{ type: String, required: true },
    },
    dateofbrith: { type: String, required: true },
    gerder:{type:String,enum:['male','Female']},
    email:{ type: String, required: true },
    contactnumber:{ type: String, required: true },
  });


  const Usermodel = model<IUSER>('Users', userSchema);

  export default Usermodel;
