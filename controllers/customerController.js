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

exports.updateCustomer = (req, res) => {

  // Make sure connection is initialized properly

  let objFromClient=req.body;
 // let objFromClientJSON=JSON.parse(req.body);
let custId=objFromClient['custId']
let custFirstName=objFromClient['custFirstName']
let custLastName=objFromClient['custLastName']
let custEmail=objFromClient['custEmail']
let custPhone= objFromClient['custPhone']

let custAge=objFromClient['custAge'];
let custGender=objFromClient['custGender'];
let loyolScore= objFromClient['loyolScore'];

  //${newName}  ${oldName}
 // AGE,GENDER_CD,LOYALTY_SCORE
 // const sqlText = `UPDATE BO_CUSTOMER  set FIRST_NAME =`+newName+` where FIRST_NAME =`+oldName+`;`;
const sqlText = `UPDATE BO_CUSTOMER  set FIRST_NAME = '${custFirstName}', 
LAST_NAME = '${custLastName}' , EMAIL = '${custEmail}', PHONE = '${custPhone}',
AGE = '${custAge}' , GENDER_CD = '${custGender}', LOYALTY_SCORE = '${loyolScore}' 
where CUSTOMER_ID ='${custId}'`;
//const sqlText = `UPDATE BO_CUSTOMER  set FIRST_NAME = '${newName}' where FIRST_NAME ='${oldName}'`;
  //const sqlText = `UPDATE BO_CUSTOMER  set FIRST_NAME ='Emma1' where FIRST_NAME ='Emma'`;
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

 //let sqlTextQuery1 = "SELECT C.CUSTOMER_ID,C.FIRST_NAME,C.LAST_NAME,C.EMAIL,C.PHONE,C.AGE,C.LOYALTY_SCORE,C.GENDER_CD,C.BIRTH_DATE,CA.CUSTOMER_ADDRESS_MDM_ID,CA.IS_ACTIVE,CA.CUSTOMER_ADDRESS_ID,CA.CUSTOMER_ADDRESS,CA.CITY,CA.STATE,CA.COUNTRY,CA.ZIP_CODE FROM BO_CUSTOMER_ADDRESS CA LEFT JOIN BO_CUSTOMER_ADDRESS_BRIDGE CAB ON CA.CUSTOMER_ADDRESS_MDM_ID = CAB. CUSTOMER_ADDRESS_MDM_ID JOIN BO_CUSTOMER C ON C.CUSTOMER_MDM_ID = CAB.CUSTOMER_MDM_ID ";
let sqlTextQuery1="SELECT C.CUSTOMER_MDM_ID,C.IS_ACTIVE,C.CUSTOMER_ID,C.FIRST_NAME,C.LAST_NAME,C.EMAIL,C.PHONE,C.AGE,C.LOYALTY_SCORE,C.GENDER_CD,C.BIRTH_DATE,CA.CUSTOMER_ADDRESS_MDM_ID,CA.IS_ACTIVE,CA.CUSTOMER_ADDRESS_ID,CA.CUSTOMER_ADDRESS,CA.CITY,CA.STATE,CA.COUNTRY,CA.ZIP_CODE,CBR.CUSTOMER_BUS_REL_MDM_ID,CBR.CUSTOMER_BUS_REL_ID,CBR.CUSTOMER_MDM_ID,CBR.RELATIONSHIP_TYPE_CD,CBR.RELATIONSHIP_START_DATE,CBR.RELATIONSHIP_END_DATE FROM BO_CUSTOMER C LEFT JOIN BO_CUSTOMER_ADDRESS_BRIDGE CAB ON C.CUSTOMER_MDM_ID = CAB.CUSTOMER_MDM_ID JOIN BO_CUSTOMER_ADDRESS CA ON CA.CUSTOMER_ADDRESS_MDM_ID = CAB. CUSTOMER_ADDRESS_MDM_ID LEFT JOIN BO_CUSTOMER_BUS_REL CBR ON C.CUSTOMER_MDM_ID = CBR.CUSTOMER_MDM_ID "

 // let sqlTextQuery=sqlTextQuery1;
let sqlTextQuery2= req['query']['buildQuery'];
 let sqlTextQuery=sqlTextQuery1+sqlTextQuery2;
  //let sqlTextQuery2= "where C.FIRST_NAME='Emma' and C.AGE=27";
 
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

exports.getGraphDataForCustomerByCountry = (req, res) => {
 console.log('hello query string is ',req);
  //let sqlTextQuery1 = "SELECT C.CUSTOMER_ID,C.FIRST_NAME,C.LAST_NAME,C.EMAIL,C.PHONE,C.AGE,C.LOYALTY_SCORE,C.GENDER_CD,C.BIRTH_DATE,CA.CUSTOMER_ADDRESS_MDM_ID,CA.IS_ACTIVE,CA.CUSTOMER_ADDRESS_ID,CA.CUSTOMER_ADDRESS,CA.CITY,CA.STATE,CA.COUNTRY,CA.ZIP_CODE FROM BO_CUSTOMER_ADDRESS CA LEFT JOIN BO_CUSTOMER_ADDRESS_BRIDGE CAB ON CA.CUSTOMER_ADDRESS_MDM_ID = CAB. CUSTOMER_ADDRESS_MDM_ID JOIN BO_CUSTOMER C ON C.CUSTOMER_MDM_ID = CAB.CUSTOMER_MDM_ID ";
let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,COUNTRY,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR From MDM_DEV.BO_CUSTOMER_ADDRESS_XREF GROUP BY COUNTRY,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY')  order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') ";

let sqlText=`${sqlTextQuery}`;
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


exports.getGraphDataForACtiveInactiveCustomers = (req, res) => {
  console.log('hello query string is ',req);
 let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
 let sqlText=`${sqlTextQuery}`;
   connection.execute({
     sqlText,
     complete: (err, stmt, rows) => {
       console.log("Inside complete callback");  // <-- VERY IMPORTANT
       if (err) {
         console.error('Failed to fetch active inactive customers: ' + err.message);
         return res.status(500).json({ error: err.message });
       } else {
         console.log("Query successful, sending response...");
         return res.status(200).json(rows);
       }
     }
   });
 };
 exports.getGraphDataForCustomersByYear = (req, res) => {
  console.log('hello query string is ',req);
 //let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
 let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
 
 let sqlText=`${sqlTextQuery}`;
   connection.execute({
     sqlText,
     complete: (err, stmt, rows) => {
       console.log("Inside complete callback");  // <-- VERY IMPORTANT
       if (err) {
         console.error('Failed to fetch active inactive customers: ' + err.message);
         return res.status(500).json({ error: err.message });
       } else {
         console.log("Query successful, sending response...");
         return res.status(200).json(rows);
       }
     }
   });
 };


 exports.getGraphDataForCustomersBySystemName = (req, res) => {
  
 //let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
 let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,SRC_SYSTEM_NAME,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY SRC_SYSTEM_NAME,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY')  order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY');" ;
 let sqlText=`${sqlTextQuery}`;
   connection.execute({
     sqlText,
     complete: (err, stmt, rows) => {
       console.log("Inside complete callback");  // <-- VERY IMPORTANT
       if (err) {
         console.error('Failed to fetch active inactive customers: ' + err.message);
         return res.status(500).json({ error: err.message });
       } else {
         console.log("Query successful, sending response...");
         return res.status(200).json(rows);
       }
     }
   });
 };

 exports.getHistoryDataForCustomers = (req, res) => {
  
  //let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
  //let sqlTextQuery="SELECT * FROM MDM_DEV.BO_CUSTOMER_HIST WHERE CUSTOMER_MDM_ID =769 ORDER BY HIST_CREATE_DATE desc;" ;
  let sqlTextQuery1="SELECT * FROM MDM_DEV.BO_CUSTOMER_HIST " ;
  let sqlTextQuery2= req['query']['buildQuery'];
  //WHERE CUSTOMER_MDM_ID =769 ORDER BY HIST_CREATE_DATE desc;
  let sqlTextQuery=sqlTextQuery1+sqlTextQuery2;
  let sqlText=`${sqlTextQuery}`;
    connection.execute({
      sqlText,
      complete: (err, stmt, rows) => {
        console.log("Inside complete callback");  // <-- VERY IMPORTANT
        if (err) {
          console.error('Failed to fetch active inactive customers: ' + err.message);
          return res.status(500).json({ error: err.message });
        } else {
          console.log("Query successful, sending response...");
          return res.status(200).json(rows);
        }
      }
    });
  };

  exports.getCrossRefernceForCustomers = (req, res) => {
  
    //let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
    let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER WHERE CUSTOMER_MDM_ID in(160);" ;
    let sqlText=`${sqlTextQuery}`;
      connection.execute({
        sqlText,
        complete: (err, stmt, rows) => {
          console.log("Inside complete callback");  // <-- VERY IMPORTANT
          if (err) {
            console.error('Failed to fetch active inactive customers: ' + err.message);
            return res.status(500).json({ error: err.message });
          } else {
            console.log("Query successful, sending response...");
            return res.status(200).json(rows);
          }
        }
      });
    };

    exports.getCrossRefernceXReferenceForCustomers = (req, res) => {
  
      //let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
      let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER_xref WHERE CUSTOMER_MDM_ID in(160) ORDER BY CUSTOMER_MDM_ID;" ;
      let sqlText=`${sqlTextQuery}`;
        connection.execute({
          sqlText,
          complete: (err, stmt, rows) => {
            console.log("Inside complete callback");  // <-- VERY IMPORTANT
            if (err) {
              console.error('Failed to fetch active inactive customers: ' + err.message);
              return res.status(500).json({ error: err.message });
            } else {
              console.log("Query successful, sending response...");
              return res.status(200).json(rows);
            }
          }
        });
      };

      exports.getCrossRefernceTrustForCustomers = (req, res) => {
  
        //let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
        let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER_TRUST_COLUMN_VALUES WHERE CUSTOMER_MDM_ID in(1181,160);" ;
        let sqlText=`${sqlTextQuery}`;
          connection.execute({
            sqlText,
            complete: (err, stmt, rows) => {
              console.log("Inside complete callback");  // <-- VERY IMPORTANT
              if (err) {
                console.error('Failed to fetch active inactive customers: ' + err.message);
                return res.status(500).json({ error: err.message });
              } else {
                console.log("Query successful, sending response...");
                return res.status(200).json(rows);
              }
            }
          });
        };