const express = require("express")
const app = express()
require("dotenv").config({ path: "./config/config.env" })
const dbConnect = require("./dbConnect")
const router = require("./routes/indexRoute")
const cookieParser = require("cookie-parser")

//connect database
dbConnect(app)

//parsing input
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

//declare routes
router(app)
