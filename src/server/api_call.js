const axios = require('axios');
const routes = require('./routes');

const DELIVERY_BASE_URL = 'http://info.sweettracker.co.kr';
const DELIVERY_URL_API_KEY = 'Jxts8oPkbHBoNoG8MQP2qA';

exports.getDeliveryCompanyList = function getDeliveryCompanyList() {
	data = new Object();
	data.t_key = DELIVERY_URL_API_KEY;
	axios.get(DELIVERY_BASE_URL + routes.COMPANY_LIST, 
		{ params : data })
	.then(
		function(response) {
			// [TODO]
			test_response = response.data;
			console.log('TEST RESPONSE', test_response);
		}
	);
}

exports.getRecommendDeliveryComapny = function getRecommendDeliveryComapny(waybillNumber) {
	data = new Object();
	data.t_key = DELIVERY_URL_API_KEY;
	data.t_invoice = waybillNumber;
	axios.get(DELIVERY_BASE_URL + routes.RECOMMEND_COMPANY,
		{ params : data })
	.then(
		function(response) {
			// [TODO]
			test_response = response.data;
			console.log('TEST RESPONSE', test_response);
		}
	);
}

exports.getTrackingInfo = function getTrackingInfo(waybillNumber, deliveryCompanyCode) {
	data = new Object();
	data.t_key = DELIVERY_URL_API_KEY;
	data.t_code = deliveryCompanyCode;
	data.t_invoice = waybillNumber;
	axios.get(DELIVERY_BASE_URL + routes.TRACKING_INFO,
		{ params : data })
	.then(
		function(response) {
			// [TODO]
			test_response = response.data;
			console.log('TEST RESPONSE', test_response);
		}
	);
}
