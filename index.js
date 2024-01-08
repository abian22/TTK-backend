const dotenv = require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")

function startExpress() {
  const app = express()

  app.use(cors({
    origin: 'http://localhost:4000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
  }))

  app.use(express.json())
  app.use("/api", require("./src/routes/index"))
  app.use(morgan('dev'))

  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: process.env.DB_NAME,
    })
    .then(() => {
      console.log("MongoDB connected....")
    })
    .catch((err) => console.log(err.message))

  app.listen(process.env.PORT, () => {
    console.log(`On port ${process.env.PORT} !!!`)
  });
}

async function start() {
  await startExpress()
}

start()

//Day5MXgJVkdqXjvj
//mongodb+srv://Abian:<password>@cluster0.jdwi1h4.mongodb.net/?retryWrites=true&w=majoritya