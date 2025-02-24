import express from "express";

import dotenv from "dotenv";
import dbConnect from "./config/connectDB.js"
// import booksRouter from "./routes/booksRouter.js"; 
import router from "./routes/booksRouter.js";



const app= express()
app.use(express.json())

dotenv.config()

app.use("/books", router);


const port = process.env.PORT;


dbConnect()






app.listen(port,() =>

    console.log(`the server is runing on ${port}`))