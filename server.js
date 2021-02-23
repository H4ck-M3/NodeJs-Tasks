const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const bodyParser = require("body-parser")

// Connection to db
mongoose.connect("mongodb://localhost:27017/mytasks", {useNewUrlParser:true, useUnifiedTopology: true})
const db = mongoose.connection

// Handle error and success
db.on("error", (err)=>{
    console.log("[!] An error occured during connection to db ::: "+err)
})
db.once("open", ()=>{
    console.log("[+] Conntected to db successfully")
})

// Manage the server
const app = express()

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log("[+] Server opened successfully and runs on port ")
})
