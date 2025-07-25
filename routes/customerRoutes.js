const express = require('express');
const router = express.Router();
const { getAllCustomers } = require('../controllers/customerController');
const { getAllCustomerDetails } = require('../controllers/customerController');
const { getAllPersonsDetails } = require('../controllers/customerController');

const { getGraphDataForCustomerByCountry } = require('../controllers/customerController');
const { getGraphDataForACtiveInactiveCustomers } = require('../controllers/customerController');
const { getGraphDataForCustomersByYear } = require('../controllers/customerController');
const { getGraphDataForCustomersBySystemName } = require('../controllers/customerController');
const { getHistoryDataForCustomers } = require('../controllers/customerController');
const { getHistoryDataForPersons } = require('../controllers/customerController');

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
const {getOverViewForPerson} =require('../controllers/customerController');

const {getPersonalDetails} =require('../controllers/customerController');
const {getAdditionalDetails} =require('../controllers/customerController');
const {getPhoneDetails} =require('../controllers/customerController');
const {getEMailDetails} =require('../controllers/customerController');
const {getIdentifierDetailsForPersons} =require('../controllers/customerController');
const {getAddressDetailsForPersons} =require('../controllers/customerController');
const {getNamePrefix} =require('../controllers/customerController');
const {getGenders} =require('../controllers/customerController');
const {getPartyTypes} =require('../controllers/customerController');
const {getMaritalStatus} =require('../controllers/customerController');
const {getEducationLevels} =require('../controllers/customerController');
const {getYesNoVals} =require('../controllers/customerController');
const {getCrossRefernceXReferenceForPersons} =require('../controllers/customerController');
const {getCrossRefernceTrustForPersons} =require('../controllers/customerController');

// Define the route
router.get('/customers', getAllCustomers);
router.get('/customerDetails', getAllCustomerDetails);
router.get('/personDetails', getAllPersonsDetails);
router.get('/personOverView', getOverViewForPerson);
router.get('/personOverView', getPersonalDetails);
router.get('/personalDetails', getPersonalDetails);
router.get('/personAdditionalDetails', getAdditionalDetails);
router.get('/personPhoneDetails', getPhoneDetails);
router.get('/personEmailDetails', getEMailDetails);
router.get('/personIdentifierDetails', getIdentifierDetailsForPersons);
router.get('/personAddressDetails', getAddressDetailsForPersons);
router.post('/getUserRolesForDetails', getUserRolesForDetails);
router.post('/getUserLoginForDetails', getUserLoginForDetails);

router.get('/graphDataForCustomerByCountry', getGraphDataForCustomerByCountry);
router.get('/graphDataForACtiveInactiveCustomers', getGraphDataForACtiveInactiveCustomers);
router.get('/graphDataForCustomersByYear', getGraphDataForCustomersByYear);
router.get('/graphDataForCustomersBySystemName', getGraphDataForCustomersBySystemName);
//cross refernces
router.get('/crossRefernceForCustomers', getCrossRefernceForCustomers);
router.get('/crossRefernceXReferenceForCustomers', getCrossRefernceXReferenceForCustomers);
router.get('/crossRefernceXReferenceForPersons', getCrossRefernceXReferenceForPersons);
router.get('/crossRefernceTrustForPersons', getCrossRefernceTrustForPersons);

router.get('/crossRefernceTrustForCustomers', getCrossRefernceTrustForCustomers);

router.get('/historyDataForCustomers', getHistoryDataForCustomers);
router.get('/historyDataForPersons', getHistoryDataForPersons);

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


router.get('/getNamePrefix', getNamePrefix);
router.get('/getGenders', getGenders);
router.get('/getPartyTypes', getPartyTypes);
router.get('/getMaritalStatus', getMaritalStatus);
router.get('/getEducationLevels', getEducationLevels);
router.get('/getYesNoVals', getYesNoVals);

module.exports = router;
