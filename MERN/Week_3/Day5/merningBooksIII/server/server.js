import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import dbConnect from './config/mongoose.config.js'
import booksRouter from './routes/booksRouter.js'



const app = express();


app.use(express.json(), cors())


dotenv.config();


app.use('/api', booksRouter)

dbConnect();

app.listen(process.env.PORT,()=> {
    console.log('Server runing on port' + process.env.PORT);
    
})