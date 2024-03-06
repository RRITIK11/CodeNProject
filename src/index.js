// require('dotenv').config({path: './env'}) 

import connectDB from "./db/index.js"
import dotenv from "dotenv"
import express from "express"

dotenv.config({
    path: './env'
})

const app = express();

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running at PORT : ${process.env.PORT}`)
    })
    app.get('/',(req,res)=>{
        res.send("Hello jee kaise h app jb")
    })
})
.catch((err)=>{
    console.log("MONGO db connection failed !!! ",err);
})




/*
import mongoose from "mongoose"
import { DB_NAME } from "./constants"
import express from "express"
const app = express()

;(async ()=> {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR : ",error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR: ",error)
        throw error
    }
})()
*/