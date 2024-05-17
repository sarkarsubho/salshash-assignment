const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "W7301@jqir#",
    database: "sys",
  });

  database.connect(()=>{
console.log("database connected")
  })

app.post("/api/favourites",(req,res)=>{
    res.send("this is home route");
    
})
app.get("/api/favourites",(req,res)=>{
    res.send("this is home route");
})
app.get("/",(req,res)=>{
    res.send("this is home route");
})

app.listen(8080,()=>{
    console.log("server is connected")
})