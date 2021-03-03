const express = require('express')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const api_call = require('./api_call');

const app = express()

const PORT = 5000;

const DB_ID = "root";
const DB_PASSWORD = "dpwl9924";
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


// Example url 
// host : localhost
// port : 5000
//
// http://localhost:5000/api/company_list
app.get('/api/company_list', (req, res) => {
	api_call.getDeliveryCompanyList()
			.then((response) => {
				console.log('Response from getDeliveryCompanyList');
				return res.json(response.data);
			});
})

// Example url
// host : localhost
// port : 5000
// waybillNumber : 1234567890
//
// http://localhost:5000/api/recommended_company/waybillNumber/1234567890
app.get('/api/recommended_company/waybillNumber/:wbNumber', (req, res) => {
	api_call.getRecommendDeliveryComapny(req.params.wbNumber)
			.then((response) => {
				console.log('Response from getRecommendDeliveryComapny');
				return res.json(response.data);
			});
})


// Example url
// host : localhost
// port : 5000
// waybillNumber : 1234567890
// company_code : 04
//
// http://localhost:5000/api/tracking_info/waybillNumber/1234567890/company_code/04
app.get('/api/tracking_info/waybillNumber/:wbNumber/company_code/:c_code', (req, res) => {
	api_call.getTrackingInfo(req.params.wbNumber, req.params.c_code)
			.then((response) => {
				console.log('Response from getTrackingInfo', response.data);
				return res.json(response.data);
			});
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected");
});

app.listen(PORT, () => console.log(`Delivery Tracking app listening on port`)) 
