const connection = require('../config/snowflake');

exports.getAllCustomers = (req, res) => {
  // Make sure connection is initialized properly
  const sqlText = `SELECT * FROM BO_CUSTOMER`;

  console.log("Starting query execution...");

  connection.execute({
    sqlText,
    complete: (err, stmt, rows) => {
      console.log("Inside complete callback");  // <-- VERY IMPORTANT
      if (err) {
        console.error('Failed to fetch customers: ' + err.message);
        return res.status(500).json({ error: err.message });
      } else {
        console.log("Query successful, sending response...");
        return res.status(200).json(rows);
      }
    }
  });
};

exports.getAllCustomerDetails = (req, res) => {
  // Make sure connection is initialized properly
 // const sqlText = `SELECT * FROM BO_CUSTOMER`;
 //req['query']['buildQuery']
 console.log('hello query string is ',req);
 
//  const sqlText = `SELECT C.CUSTOMER_ID,C.FIRST_NAME,C.LAST_NAME,C.EMAIL,C.PHONE,C.AGE,C.LOYALTY_SCORE,C.GENDER_CD,C.BIRTH_DATE,CA.CUSTOMER_ADDRESS_MDM_ID,CA.IS_ACTIVE,CA.CUSTOMER_ADDRESS_ID,CA.CUSTOMER_ADDRESS,
//  CA.CITY,CA.STATE,CA.COUNTRY,CA.ZIP_CODE FROM BO_CUSTOMER_ADDRESS CA
//  LEFT JOIN BO_CUSTOMER_ADDRESS_BRIDGE CAB ON CA.CUSTOMER_ADDRESS_MDM_ID = CAB. CUSTOMER_ADDRESS_MDM_ID
//  JOIN BO_CUSTOMER C ON C.CUSTOMER_MDM_ID = CAB.CUSTOMER_MDM_ID `;

 let sqlTextQuery1 = "SELECT C.CUSTOMER_ID,C.FIRST_NAME,C.LAST_NAME,C.EMAIL,C.PHONE,C.AGE,C.LOYALTY_SCORE,C.GENDER_CD,C.BIRTH_DATE,CA.CUSTOMER_ADDRESS_MDM_ID,CA.IS_ACTIVE,CA.CUSTOMER_ADDRESS_ID,CA.CUSTOMER_ADDRESS,CA.CITY,CA.STATE,CA.COUNTRY,CA.ZIP_CODE FROM BO_CUSTOMER_ADDRESS CA LEFT JOIN BO_CUSTOMER_ADDRESS_BRIDGE CAB ON CA.CUSTOMER_ADDRESS_MDM_ID = CAB. CUSTOMER_ADDRESS_MDM_ID JOIN BO_CUSTOMER C ON C.CUSTOMER_MDM_ID = CAB.CUSTOMER_MDM_ID ";
  let sqlTextQuery2= req['query']['buildQuery'];
  //let sqlTextQuery2= "where C.FIRST_NAME='Emma' and C.AGE=27";
 // let sqlTextQuery=sqlTextQuery1;
  let sqlTextQuery=sqlTextQuery1+sqlTextQuery2;
//  let sqlTextQuery2= req['query']['buildQuery'];

let sqlText=`${sqlTextQuery}`;
//   const sqlText = `SELECT C.CUSTOMER_ID,C.FIRST_NAME,C.LAST_NAME,C.EMAIL,C.PHONE,C.AGE,C.LOYALTY_SCORE,C.GENDER_CD,C.BIRTH_DATE,CA.CUSTOMER_ADDRESS_MDM_ID,CA.IS_ACTIVE,CA.CUSTOMER_ADDRESS_ID,CA.CUSTOMER_ADDRESS,
// CA.CITY,CA.STATE,CA.COUNTRY,CA.ZIP_CODE FROM BO_CUSTOMER_ADDRESS CA
// LEFT JOIN BO_CUSTOMER_ADDRESS_BRIDGE CAB ON CA.CUSTOMER_ADDRESS_MDM_ID = CAB. CUSTOMER_ADDRESS_MDM_ID
// JOIN BO_CUSTOMER C ON C.CUSTOMER_MDM_ID = CAB.CUSTOMER_MDM_ID  where C.AGE=27 and CA.CITY='Seattle'`;


  console.log("Starting query execution...");

  connection.execute({
    sqlText,
    complete: (err, stmt, rows) => {
      console.log("Inside complete callback");  // <-- VERY IMPORTANT
      if (err) {
        console.error('Failed to fetch customers: ' + err.message);
        return res.status(500).json({ error: err.message });
      } else {
        console.log("Query successful, sending response...");
        return res.status(200).json(rows);
      }
    }
  });
};
