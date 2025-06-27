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

exports.createNewUser = (req, res) => {
  let objFromClient=req.body;
  console.log('new user obj',objFromClient);
  let userName=objFromClient['custUserName'];
  let fName=objFromClient['custFirstName'];
  let lastName=objFromClient['custLastName'];
  let email=objFromClient['custEmail'];
  let phone=objFromClient['custPhone'];
  let pwd=objFromClient['custPwd'];

  const sqlText = `INSERT INTO EDW.MDM_DEV.REPOS_USER(USERNAME,ENCRYPTED_PASSWORD,FIRSTNAME,LASTNAME,EMAIL,PHONE,CREATED_BY,UPDATED_BY) values('${userName}','${pwd}','${fName}','${lastName}','${email}','${phone}','Admin','Admin')`;
//   const sqlText = `UPDATE BO_CUSTOMER  set FIRST_NAME = '${custFirstName}', 
// LAST_NAME = '${custLastName}' , EMAIL = '${custEmail}', PHONE = '${custPhone}',
// AGE = '${custAge}' , GENDER_CD = '${custGender}', LOYALTY_SCORE = '${loyolScore}' 
// where CUSTOMER_ID ='${custId}'`;
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

}

exports.updateUserDetails = (req, res) => {

  // Make sure connection is initialized properly

  let objFromClient=req.body;
 // let objFromClientJSON=JSON.parse(req.body);
let custId=objFromClient['custId']
let custFirstName=objFromClient['custFirstName']
let custLastName=objFromClient['custLastName']
let custEmail=objFromClient['custEmail']
let custPhone= objFromClient['custPhone']



  //${newName}  ${oldName}
 // AGE,GENDER_CD,LOYALTY_SCORE
 // const sqlText = `UPDATE BO_CUSTOMER  set FIRST_NAME =`+newName+` where FIRST_NAME =`+oldName+`;`;
const sqlText = `UPDATE REPOS_USER  set FIRSTNAME = '${custFirstName}', 
LASTNAME = '${custLastName}' , EMAIL = '${custEmail}', PHONE = '${custPhone}'
 where USER_ID ='${custId}'`;
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
  //  let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER WHERE CUSTOMER_MDM_ID in(160);" ;
 // let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER WHERE CUSTOMER_MDM_ID in(160);" ;
  let sqlTextQuery1="SELECT * FROM MDM_DEV.BO_CUSTOMER " ;
  let sqlTextQuery2= req['query']['buildQuery'];

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

//     from x ref query we will get original_mdm_id
// from  trust  column values we have to pass cust_mdm_id and original_mdm_id 
    exports.getCrossRefernceXReferenceForCustomers = (req, res) => {
  
      //let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
      //let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER_xref WHERE CUSTOMER_MDM_ID in(160) ORDER BY CUSTOMER_MDM_ID;" ;
      //let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER_xref WHERE CUSTOMER_MDM_ID in(160) ORDER BY CUSTOMER_MDM_ID;" ;
    
    
      let sqlTextQuery1="SELECT * FROM mdm_dev.BO_CUSTOMER_xref " ;
      let sqlTextQuery2= req['query']['buildQuery'];
      let sqlTextQuery3= " ORDER BY CUSTOMER_MDM_ID" ;;
    
      let sqlTextQuery=sqlTextQuery1+sqlTextQuery2+sqlTextQuery3; 
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
      // let sqlTextFromXRef = "SELECT * FROM mdm_dev.BO_CUSTOMER_xref ";
      // let sqlTextQueryXRef2 = req['query']['buildQuery'];
      // let sqlTextQueryForXRef = sqlTextFromXRef + sqlTextQueryXRef2;

      // let sqlTextForXRef = `${sqlTextQueryForXRef}`;
      // let xRefResult = connection.execute({
      //   sqlTextForXRef,
      //   complete: (err, stmt, rows) => {
      //     console.log("Inside complete callback");  // <-- VERY IMPORTANT
      //     if (err) {
      //       console.error('Failed to fetch active inactive customers: ' + err.message);
      //      // return res.status(500).json({ error: err.message });
      //     } else {
      //       console.log("Query successful, sending response...");
      //      // return res.status(200).json(rows);
      //     }
      //   }
      // });
//console.log('xref query executed inside trust query',xRefResult);
function generateoriginalMDMId(sqlQuery){
    return new Promise(async (resolve,reject) => {

      try{
        console.log('inside new function sqlQuery',sqlQuery);
        let sqlText=`${sqlQuery}`;
        connection.execute({
          sqlText,
          complete: (err, stmt, rows) => {
            console.log("Inside complete callback");  // <-- VERY IMPORTANT
            if (err) {
              console.error('Failed to fetch active inactive customers: ' + err.message);
             // return res.status(500).json({ error: err.message });
            } else {
              console.log("Query successful, sending response...");
              let responseData= res.status(200).json(rows);
              resolve(responseData);
            }
          }
        });
      }catch(error){

        reject(error);
      }
      
    })
       


      }
      exports.getCrossRefernceTrustForCustomers = (req, res) => {
  
        let sqlTextFromXRef = "SELECT * FROM mdm_dev.BO_CUSTOMER_xref ";
       let sqlTextQueryXRef2 = req['query']['buildQuery'];
       let sqlTextQueryForXRef = sqlTextFromXRef + sqlTextQueryXRef2;
     // let returnedVal= generateoriginalMDMId(sqlTextQueryForXRef);
    //  console.log('xref query executed inside trust query',returnedVal);
        //let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
        //let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER_TRUST_COLUMN_VALUES WHERE CUSTOMER_MDM_ID in(1181,160);" ;
       // let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER_TRUST_COLUMN_VALUES WHERE CUSTOMER_MDM_ID in(1181,160);" ;
       
      
       let sqlTextQuery1="SELECT * FROM mdm_dev.BO_CUSTOMER_TRUST_COLUMN_VALUES " ;
        let sqlTextQuery2= req['query']['buildQuery'];
       // let sqlTextQuery3= " ORDER BY CUSTOMER_MDM_ID" ;;
      
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

 //Match refernces
 
 exports.getMatchRefernceForCustomers = (req, res) => {
  
  //let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
  //let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER WHERE CUSTOMER_MDM_ID in(160,1181);" ;
  //let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER WHERE CUSTOMER_MDM_ID in(160,1181);" ;
  let sqlTextQuery1="SELECT * FROM mdm_dev.BO_CUSTOMER " ;
  let sqlTextQuery2= req['query']['buildQuery'];
 // let sqlTextQuery3= " ORDER BY CUSTOMER_MDM_ID" ;;

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

  exports.getMatchRefernceXReferenceForCustomers = (req, res) => {

    //let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
  //  let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER_MTCH WHERE SRC_CUSTOMER_MDM_ID =145  OR TGT_CUSTOMER_MDM_ID =145;" ;
    //let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER_MTCH WHERE SRC_CUSTOMER_MDM_ID =145  OR TGT_CUSTOMER_MDM_ID =145;" ;
   // let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER_MTCH WHERE SRC_CUSTOMER_MDM_ID =145  OR TGT_CUSTOMER_MDM_ID =145;" ;
    let sqlTextQuery1="SELECT * FROM mdm_dev.BO_CUSTOMER_MTCH " ;
    let sqlTextQuery2= req['query']['buildQuery'];
   // let sqlTextQuery3= " ORDER BY CUSTOMER_MDM_ID" ;;
  
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

    exports.getMatchRefernceTrustForCustomers = (req, res) => {

      //let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
    //  let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER_TRUST_COLUMN_VALUES WHERE CUSTOMER_MDM_ID in(1181,160);" ;

     // let sqlTextQuery="SELECT * FROM mdm_dev.BO_CUSTOMER_TRUST_COLUMN_VALUES WHERE CUSTOMER_MDM_ID in(1181,160);" ;
      let sqlTextQuery1="SELECT * FROM mdm_dev.BO_CUSTOMER_TRUST_COLUMN_VALUES " ;
      let sqlTextQuery2= req['query']['buildQuery'];
 // let sqlTextQuery3= " ORDER BY CUSTOMER_MDM_ID" ;;

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


      exports.getJobStatus = (req, res) => {
        //let source:AnalyserNode;
        let jobType=JSON.stringify(req['query']['jobType']);
        let sourceTable =JSON.stringify(req['query']['source']);
        let tabele=  JSON.stringify(req['query']['tabele']);
       
        let stage=JSON.stringify(req['query']['staging']);
        let dev= JSON.stringify(req['query']['dev']);
        sourceTable = sourceTable.replace(/"/g, "'");
        jobType = jobType.replace(/"/g, "'");
        tabele = tabele.replace(/"/g, "'");

        stage = stage.replace(/"/g, "'");
        dev = dev.replace(/"/g, "'");
       
        let statusVal='TRUE';
        //let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
        let sqlTextQuery1='CALL MDM_LOAD_CONTROL(';
       let queryStringFor= sourceTable+','+jobType+','+tabele+','+sourceTable+','+stage+','+dev+','+ statusVal ;
       let finalportion=')'
    
       let sqlTextQuery=sqlTextQuery1+queryStringFor+finalportion;
    
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

        exports.getJobLog = (req, res) => {

          let sqlTextQuery="SELECT * FROM MDM_EXECUTION_LOG ORDER BY EXECUTED_DATETIME DESC " ;
       //   let sqlTextQuery="CALL MDM_LOAD_CONTROL('NETSUITE','DATA_INGESTION','CUSTOMER','NETSUITE','MDM_STG','MDM_DEV',TRUE);" ;
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


          exports.getTrustLog = (req, res) => {

            let sqlTextQuery="Select * from  REPOS_TRUST_COLUMNS where column_name='FIRST_NAME' and SOURCE_SYSTEM='NETSUITE' " ;
         //   let sqlTextQuery="CALL MDM_LOAD_CONTROL('NETSUITE','DATA_INGESTION','CUSTOMER','NETSUITE','MDM_STG','MDM_DEV',TRUE);" ;
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

            exports.getTrustLogFromCurrentTable = (req, res) => {

              let sqlTextQuery="Select * from BO_CUSTOMER_TRUST_COLUMN_VALUES where customer_mdm_id in (199) and column_name='FIRST_NAME' and SOURCE_SYSTEM='NETSUITE'" ;
           //   let sqlTextQuery="CALL MDM_LOAD_CONTROL('NETSUITE','DATA_INGESTION','CUSTOMER','NETSUITE','MDM_STG','MDM_DEV',TRUE);" ;
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

              exports.getAllUsers = (req, res) => {

                let sqlTextQuery="Select * from EDW.MDM_DEV.REPOS_USER" ;
             //   let sqlTextQuery="CALL MDM_LOAD_CONTROL('NETSUITE','DATA_INGESTION','CUSTOMER','NETSUITE','MDM_STG','MDM_DEV',TRUE);" ;
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