const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');

const PORT = 5000;
const DB_ID = "root";
const DB_PASSWORD = "1234";
const DB_IP = "127.0.0.1";
const DB_NAME = "drugdb";


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

var con = mysql.createConnection({
    host: DB_IP,
    user: DB_ID,
    password: DB_PASSWORD,
    database: DB_NAME
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected");
});

app.listen(PORT, () => console.log(`Delivery Tracking app listening on port`)) 
