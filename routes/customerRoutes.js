const express = require('express');
const router = express.Router();
const { getAllCustomers } = require('../controllers/customerController');
const { getAllCustomerDetails } = require('../controllers/customerController');
const { getGraphDataForCustomerByCountry } = require('../controllers/customerController');
const {updateCustomer} =require('../controllers/customerController');


// Define the route
router.get('/customers', getAllCustomers);
router.get('/customerDetails', getAllCustomerDetails);
router.get('/graphDataForCustomerByCountry', getGraphDataForCustomerByCountry);
router.post('/updateDetails',updateCustomer);


module.exports = router;
