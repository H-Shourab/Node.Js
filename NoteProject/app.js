const express = require('express');
const mongoose = require('mongoose');
const http=require("http")
const dotenv = require('dotenv').config();
const path=require("path")
const { append } = require("express/lib/response")
const bodyParser=require("body-parser")
const cors = require('cors');
const xss=require("xss")
const ejs=require("ejs")

const app = express();
app.use(cors())
//app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 5500;

//app.set('view engine', 'ejs');
app.set('template engine','ejs')
app.set('views','temp')
app.use(express.static(path.join(__dirname,'/public')))
app.get("/",(req,res)=>{
    res.set("Access-Control-Allow_Origin","*")
    //res.render("temp/todo")
    res.sendFile(path.join(__dirname,'/public/todoform.html'))
})
app.post('/',(req,res)=>{
    //res.status(200).redirect('/public/main.html')
    res.sendFile(path.join(__dirname,'/public/main.html'))
})

const TodoRoute = require('./routes/todoroute');


//connect to mongodb ..
mongoose.connect("mongodb://localhost:27017/todoproject")
.then(()=> console.log("Database connected"))
.catch(err => console.log(err))

app.use('/', TodoRoute);

//const httpserver=http.createServer(app)
app.listen(PORT, ()=> console.log("Server connected  http://localhost:"+PORT) );
