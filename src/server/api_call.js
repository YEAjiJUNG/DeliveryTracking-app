const axios = require('axios');
const routes = require('./routes');

const DELIVERY_BASE_URL = 'http://info.sweettracker.co.kr';
const DELIVERY_URL_API_KEY = 'jUsdJAZNJVy0KB8b6IQMyQ';

exports.getDeliveryCompanyList = async function getDeliveryCompanyList() {
  var result = '';
  data = new Object();
  data.t_key = DELIVERY_URL_API_KEY;
  try {
    result = await axios.get(DELIVERY_BASE_URL + routes.COMPANY_LIST, {
      params: data,
    });
  } catch (error) {
    console.error(error);
  }
  return result;
};

exports.getRecommendDeliveryComapny = async function getRecommendDeliveryComapny(
  waybillNumber
) {
  var result = '';
  console.log('Bill : ', waybillNumber);
  data = new Object();
  data.t_key = DELIVERY_URL_API_KEY;
  data.t_invoice = waybillNumber;
  try {
    result = await axios.get(DELIVERY_BASE_URL + routes.RECOMMEND_COMPANY, {
      params: data,
    });
  } catch (error) {
    console.error(error);
  }
  return result;
};

exports.getTrackingInfo = async function getTrackingInfo(
  waybillNumber,
  deliveryCompanyCode
) {
  var result = '';
  data = new Object();
  data.t_key = DELIVERY_URL_API_KEY;
  data.t_code = deliveryCompanyCode;
  data.t_invoice = waybillNumber;
  try {
    result = await axios.get(DELIVERY_BASE_URL + routes.TRACKING_INFO, {
      params: data,
    });
  } catch (error) {
    console.error(error);
  }
  return result;
};
