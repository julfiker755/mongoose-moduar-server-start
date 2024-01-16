import express, { Application} from 'express'
import cors from 'cors'
const app:Application = express()

import userRoutes from './app/modules/user/user.route'

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// use router
app.use('/',userRoutes)




export default app;