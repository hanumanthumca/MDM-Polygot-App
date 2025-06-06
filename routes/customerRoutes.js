const express = require('express');
const router = express.Router();
const { getAllCustomers } = require('../controllers/customerController');
const { getAllCustomerDetails } = require('../controllers/customerController');
const { getGraphDataForCustomerByCountry } = require('../controllers/customerController');
const { getGraphDataForACtiveInactiveCustomers } = require('../controllers/customerController');
const { getGraphDataForCustomersByYear } = require('../controllers/customerController');
const { getGraphDataForCustomersBySystemName } = require('../controllers/customerController');
const { getHistoryDataForCustomers } = require('../controllers/customerController');

const { getCrossRefernceForCustomers } = require('../controllers/customerController');
const { getCrossRefernceXReferenceForCustomers } = require('../controllers/customerController');
const { getCrossRefernceTrustForCustomers } = require('../controllers/customerController');

const { getMatchRefernceForCustomers } = require('../controllers/customerController');
const { getMatchRefernceXReferenceForCustomers } = require('../controllers/customerController');
const { getMatchRefernceTrustForCustomers } = require('../controllers/customerController');
const { getJobStatus } = require('../controllers/customerController');
const { getJobLog } = require('../controllers/customerController');
const {updateCustomer} =require('../controllers/customerController');


// Define the route
router.get('/customers', getAllCustomers);
router.get('/customerDetails', getAllCustomerDetails);
router.get('/graphDataForCustomerByCountry', getGraphDataForCustomerByCountry);
router.get('/graphDataForACtiveInactiveCustomers', getGraphDataForACtiveInactiveCustomers);
router.get('/graphDataForCustomersByYear', getGraphDataForCustomersByYear);
router.get('/graphDataForCustomersBySystemName', getGraphDataForCustomersBySystemName);
//cross refernces
router.get('/crossRefernceForCustomers', getCrossRefernceForCustomers);
router.get('/crossRefernceXReferenceForCustomers', getCrossRefernceXReferenceForCustomers);
router.get('/crossRefernceTrustForCustomers', getCrossRefernceTrustForCustomers);

router.get('/historyDataForCustomers', getHistoryDataForCustomers);
router.post('/updateDetails',updateCustomer);
//Match refernces
router.get('/matchRefernceForCustomers', getMatchRefernceForCustomers);
router.get('/matchRefernceXReferenceForCustomers', getMatchRefernceXReferenceForCustomers);
router.get('/matchRefernceTrustForCustomers', getMatchRefernceTrustForCustomers);
router.get('/runJobs', getJobStatus);
router.get('/jobsLog', getJobLog);




module.exports = router;
