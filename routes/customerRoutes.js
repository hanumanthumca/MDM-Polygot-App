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
const { getTrustLog } = require('../controllers/customerController');
const { getTrustLogFromCurrentTable } = require('../controllers/customerController');
const{getAllUsers}= require('../controllers/customerController');
const{getAllTableColumns}= require('../controllers/customerController');
const {getAllUserNames} =require('../controllers/customerController');
const {updateCustomer} =require('../controllers/customerController');
const {updateUserDetails} =require('../controllers/customerController');
const {updateUserRoles} =require('../controllers/customerController');
const {deleteRolePermission} =require('../controllers/customerController');
const {createNewUser} =require('../controllers/customerController');
const {createUserPermission} =require('../controllers/customerController');
const {getAllUserRolesByName} =require('../controllers/customerController');
const {getAllUserRoles} =require('../controllers/customerController');
const {getUserRolesForDetails} =require('../controllers/customerController');
const {getUserLoginForDetails} =require('../controllers/customerController');

// Define the route
router.get('/customers', getAllCustomers);
router.get('/customerDetails', getAllCustomerDetails);
router.post('/getUserRolesForDetails', getUserRolesForDetails);
router.post('/getUserLoginForDetails', getUserLoginForDetails);

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
router.post('/updateUserDetails',updateUserDetails);
router.post('/updateUserRoles',updateUserRoles);
router.post('/createUser',createNewUser);
router.post('/createUserPermission',createUserPermission);
router.post('/deleteRolePermission',deleteRolePermission);
//Match refernces
router.get('/matchRefernceForCustomers', getMatchRefernceForCustomers);
router.get('/matchRefernceXReferenceForCustomers', getMatchRefernceXReferenceForCustomers);
router.get('/matchRefernceTrustForCustomers', getMatchRefernceTrustForCustomers);
router.get('/runJobs', getJobStatus);
router.get('/jobsLog', getJobLog);
router.get('/getTrustLog', getTrustLog);
router.get('/getTrustLogFromCurrentTable', getTrustLogFromCurrentTable);
router.get('/getAllUsers', getAllUsers);
router.get('/getAllUserNames', getAllUserNames);
router.get('/getAllUserRolesByName', getAllUserRolesByName);

router.get('/getAllTableColumns', getAllTableColumns);
router.get('/getAllUserRoles', getAllUserRoles);



module.exports = router;
