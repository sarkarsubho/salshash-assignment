const mysql = require("mysql");

const database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "W7301@jqir#",
  database: "",
});

module.exports = database;
