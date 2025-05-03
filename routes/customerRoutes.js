const express = require('express');
const router = express.Router();
const { getAllCustomers } = require('../controllers/customerController');
const { getAllCustomerDetails } = require('../controllers/customerController');

// Define the route
router.get('/customers', getAllCustomers);
router.get('/customerDetails', getAllCustomerDetails);


module.exports = router;
