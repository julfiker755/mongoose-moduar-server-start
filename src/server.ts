import mongoose from 'mongoose'
import app from './app';

const port:number = 4000



// database connection **mongoose**
async function main(){
   try{
    await mongoose.connect('mongodb+srv://hello:hello@cluster0.4mjyxmf.mongodb.net/mongoose');
     console.log('Database/Mongoose connection Successfull')
   }catch(err){
     console.log('Database connection fail',err)
   }
  }
  main()

  app.listen(port, () => {
    console.log(`app start ${port}`)
  })



