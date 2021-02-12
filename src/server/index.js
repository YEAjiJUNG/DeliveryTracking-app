const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const api_call = require('./api_call');

const app = express()

const PORT = 5000;

const DB_ID = "root";
const DB_PASSWORD = "1234";
const DB_IP = "127.0.0.1";
const DB_NAME = "delivery";

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

var con = mysql.createConnection({
    host: DB_IP,
    user: DB_ID,
    password: DB_PASSWORD,
    database: DB_NAME
});

api_call.getTrackingInfo('1234567890', '04');

con.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected");
});

app.listen(PORT, () => console.log(`Delivery Tracking app listening on port`)) 
