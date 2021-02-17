// Get Delivery company list
// params : 
// 			t_key	-	string
exports.COMPANY_LIST = '/api/v1/companylist';

// Get recommended delivery company
// params :
// 			t_key	-	string
// 			t_invoice	-	string
exports.RECOMMEND_COMPANY = '/api/v1/recommend'; 

// Get tracking information with t_invoice 
// params :
// 			t_key	-	string
// 			t_code	-	string
// 			t_invoice	-	string
exports.TRACKING_INFO = '/api/v1/trackingInfo';
