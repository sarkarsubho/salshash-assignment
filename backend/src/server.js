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

  // Create a route to retrieve all favourites
app.get('/api/favourites', (req, res) => {
    const query = 'SELECT * FROM favourites';
    db.query(query, (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error retrieving favourites');
      } else {
        res.json(results);
      }
    });
  });
  
  // Create a route to add a new favourite
  app.post('/api/favourites', (req, res) => {
    const { title, year } = req.body;
    const query = 'INSERT INTO favourites (title, year) VALUES (?, ?)';
    db.query(query, [title, year], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error adding favourite');
      } else {
        res.json({ message: 'Favourite added successfully' });
      }
    });
  });
  
// app.post("/api/favourites",(req,res)=>{
//     res.send("this is home route");

// })
// app.get("/api/favourites",(req,res)=>{
//     res.send("this is home route");
// })
app.get("/",(req,res)=>{
    res.send("this is home route");
})

app.listen(8080,()=>{
    console.log("server is connected")
})