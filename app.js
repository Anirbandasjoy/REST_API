const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const cors = require("cors")
const app = express()
const userRouter = require("./routes/user.routes")

app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use(cors());

// DATA ROUTING
app.use("/users" , userRouter)

// HOME ROUTE
app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname + "/views/index.html"))
})
app.use((req,res,next) => {
    res.status(404).json({message: "rong url"})
})



module.exports = app;



