const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "#Heaven81",
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  con.query("SHOW DATABASES", (err, result) => {
    if (err) throw err;
    console.log("Result: " + result);
  });
});
