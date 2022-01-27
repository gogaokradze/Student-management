import express from "express";
import mongoose from 'mongoose'
import bodyParser from "body-parser";
import cors from 'cors'
import studentRoutes from "./routes/student.js";
import dotenv from 'dotenv'

const app=express()
dotenv.config()


app.use(bodyParser.json({limit:"20mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"20mb",extended:true}))
app.use(cors())

app.use('/students', studentRoutes)


const PORT =process.env.PORT || 5000

mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
  .then(()=>app.listen(PORT,()=>console.log(`Connections is established on port: ${PORT}`)))
  .catch((error)=>console.log(error))
