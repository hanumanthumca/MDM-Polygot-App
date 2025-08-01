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

exports.createUserPermission = (req, res) => {
  let objFromClient=req.body;
  console.log('new user obj',objFromClient);
  //let userName=objFromClient['userName'];
  let roleName=objFromClient['role'];
  let tableName=objFromClient['tableName'];
  let coulumnName=objFromClient['coulumnName'];
  let readPermission=objFromClient['readPermission'];
  let createPermission=objFromClient['createPermission'];
  let updatePermission=objFromClient['updatePermission'];
  let deletePermission=objFromClient['deletePermission'];

  const sqlText = `INSERT INTO EDW.MDM_DEV.REPOS_USER_ROLE_PERMISSIONS(ROLE_ID,TABLE_NAME,COLUMN_NAME,READ_PERMISSION,CREATE_PERMISSION,UPDATE_PERMISSION,DELETE_PERMISSION,CREATED_BY,UPDATED_BY) values('${roleName}','${tableName}','${coulumnName}','${readPermission}','${createPermission}','${updatePermission}','${deletePermission}','Admin','Admin') `;
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
      //  const createdId = rows && rows.length > 0 ? rows[0]['USER_ID'] : null;
        console.log("Query successful, sending response...");
      //  console.log('Insert successful, created ID:', createdId);
        return res.status(200).json(rows);
      }
    }
  });

}
// exports.getUserID = (userName) => {
   
//   console.log('userName',userName);
//   return userName;
  
// };
function getUserID(userName) {
  console.log('userName',userName);
  const sqlText = `Select USER_ID from EDW.MDM_DEV.REPOS_USER where USERNAME='vinay'`;

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
        let id=res;
        return id;
      }
    }
  });
  //return userName;
}
exports.createNewUser = (req, res) => {
  let objFromClient=req.body;
  console.log('new user obj',objFromClient);
  let userName=objFromClient['custUserName'];
  let fName=objFromClient['custFirstName'];
  let lastName=objFromClient['custLastName'];
  let email=objFromClient['custEmail'];
  let phone=objFromClient['custPhone'];
  let pwd=objFromClient['custPwd'];

  let roleIds=objFromClient['userRoles'];

  const sqlText = `INSERT INTO EDW.MDM_DEV.REPOS_USER(USERNAME,ENCRYPTED_PASSWORD,FIRSTNAME,LASTNAME,EMAIL,PHONE,CREATED_BY,UPDATED_BY) values('${userName}','${pwd}','${fName}','${lastName}','${email}','${phone}','Admin','Admin')`;
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
        console.log("Query successful, sending response...",res);
       // const createdId = rows && rows.length > 0 ? rows[0]['USER_ID'] : null;
     // console.log('Insert successful, created ID:', createdId);
      // let uname= getUserID(userName);
        return res.status(200).json(rows);

      }
    }
  });


  const sqlText1 = `Select USER_ID from EDW.MDM_DEV.REPOS_USER where USERNAME='${userName}'`;

  console.log("Starting query execution...");

  // connection.execute({
  //   sqlText:sqlText1,
  //   complete: (err, stmt, rows) => {
  //     console.log("Inside complete callback");  // <-- VERY IMPORTANT
  //     if (err) {
  //       console.error('Failed to fetch customers: ' + err.message);
  //       return res.status(500).json({ error: err.message });
  //     } else {
  //       console.log("Query successful, sending response...");
      
      
  //     }
  //   }
  // });
}


// getUserID=async(userName)=>{
//   console.log('userName',userName);
// }
// exports.getUserId = (req, res) => {
//   const now = new Date();

//   res.json({
//     date: now.toISOString(), // e.g., "2025-07-02T13:30:00.000Z"
//     message: 'Current server date and time'
//   });
// };

exports.deleteRolePermission = (req, res) => {
  let objFromClient=req.body;
  console.log('new user obj',objFromClient);
  //let userName=objFromClient['userName'];
  let roleName=objFromClient['role'];
 

const sqlText = `delete  FROM EDW.MDM_DEV.REPOS_USER_ROLE_PERMISSIONS WHERE role_id ='${roleName}' `;
 
  console.log("delete query execution...");

  connection.execute({
    sqlText,
    complete: (err, stmt, rows) => {
      console.log("Inside complete callback");  // <-- VERY IMPORTANT
      if (err) {
        console.error('Failed to delete role: ' + err.message);
        return res.status(500).json({ error: err.message });
      } else {
        // const createdId = rows && rows.length > 0 ? rows[0]['USER_ID'] : null;
        // console.log("Query successful, sending response...");
        // console.log('Insert successful, created ID:', createdId);
        return res.status(200).json(rows);
      }
    }
  });

}



 exports.updateUserRoles = (req, res) => {

  // Make sure connection is initialized properly

  let objFromClient=req.body;
 // let objFromClientJSON=JSON.parse(req.body);
let custId=objFromClient['custId'];
let role=objFromClient['userRoles'];

const sqlText = `INSERT INTO EDW.MDM_DEV.REPOS_USER_ROLES(USER_ID,ROLE_ID,CREATED_BY,UPDATED_BY) values(${custId},${role},'Admin','Admin');`;


  //${newName}  ${oldName}
 // AGE,GENDER_CD,LOYALTY_SCORE
 // const sqlText = `UPDATE BO_CUSTOMER  set FIRST_NAME =`+newName+` where FIRST_NAME =`+oldName+`;`;

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


exports.getUserLoginForDetails = (req, res) => {
 let objFromClient=req.body;
 let userName=objFromClient['userName'];
 let pwd=objFromClient['password'];
 console.log('hello query string is ',req);
//const sqlText = `Select ROLE_ID from EDW.MDM_DEV.REPOS_USER_ROLES WHERE USER_ID =${userid} `;
const sqlText = `SELECT * FROM EDW.MDM_DEV.REPOS_USER where USERNAME='${userName}' and ENCRYPTED_PASSWORD='${pwd}' `;

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


exports.getUserRolesForDetails = (req, res) => {
  // Make sure connection is initialized properly
 // const sqlText = `SELECT * FROM BO_CUSTOMER`;
 //req['query']['buildQuery'];
 let objFromClient=req.body;
 let userid=objFromClient['userid'];
 console.log('hello query string is ',req);
 //Select ROLE_ID from EDW.MDM_DEV.REPOS_USER_ROLES WHERE USER_ID =101
//  const sqlText = `SELECT C.CUSTOMER_ID,C.FIRST_NAME,C.LAST_NAME,C.EMAIL,C.PHONE,C.AGE,C.LOYALTY_SCORE,C.GENDER_CD,C.BIRTH_DATE,CA.CUSTOMER_ADDRESS_MDM_ID,CA.IS_ACTIVE,CA.CUSTOMER_ADDRESS_ID,CA.CUSTOMER_ADDRESS,
//  CA.CITY,CA.STATE,CA.COUNTRY,CA.ZIP_CODE FROM BO_CUSTOMER_ADDRESS CA
//  LEFT JOIN BO_CUSTOMER_ADDRESS_BRIDGE CAB ON CA.CUSTOMER_ADDRESS_MDM_ID = CAB. CUSTOMER_ADDRESS_MDM_ID
//  JOIN BO_CUSTOMER C ON C.CUSTOMER_MDM_ID = CAB.CUSTOMER_MDM_ID `;
const sqlText = `Select ROLE_ID from EDW.MDM_DEV.REPOS_USER_ROLES WHERE USER_ID =${userid} `;

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
 

 //let sqlTextQuery1 = "SELECT C.CUSTOMER_ID,C.FIRST_NAME,C.LAST_NAME,C.EMAIL,C.PHONE,C.AGE,C.LOYALTY_SCORE,C.GENDER_CD,C.BIRTH_DATE,CA.CUSTOMER_ADDRESS_MDM_ID,CA.IS_ACTIVE,CA.CUSTOMER_ADDRESS_ID,CA.CUSTOMER_ADDRESS,CA.CITY,CA.STATE,CA.COUNTRY,CA.ZIP_CODE FROM BO_CUSTOMER_ADDRESS CA LEFT JOIN BO_CUSTOMER_ADDRESS_BRIDGE CAB ON CA.CUSTOMER_ADDRESS_MDM_ID = CAB. CUSTOMER_ADDRESS_MDM_ID JOIN BO_CUSTOMER C ON C.CUSTOMER_MDM_ID = CAB.CUSTOMER_MDM_ID ";
let sqlTextQuery1="SELECT C.CUSTOMER_MDM_ID,C.IS_ACTIVE,C.CUSTOMER_ID,C.FIRST_NAME,C.LAST_NAME,C.EMAIL,C.PHONE,C.AGE,C.LOYALTY_SCORE,C.GENDER_CD,C.BIRTH_DATE,CA.CUSTOMER_ADDRESS_MDM_ID,CA.IS_ACTIVE,CA.CUSTOMER_ADDRESS_ID,CA.CUSTOMER_ADDRESS,CA.CITY,CA.STATE,CA.COUNTRY,CA.ZIP_CODE,CBR.CUSTOMER_BUS_REL_MDM_ID,CBR.CUSTOMER_BUS_REL_ID,CBR.CUSTOMER_MDM_ID,CBR.RELATIONSHIP_TYPE_CD,CBR.RELATIONSHIP_START_DATE,CBR.RELATIONSHIP_END_DATE FROM BO_CUSTOMER C LEFT JOIN BO_CUSTOMER_ADDRESS_BRIDGE CAB ON C.CUSTOMER_MDM_ID = CAB.CUSTOMER_MDM_ID JOIN BO_CUSTOMER_ADDRESS CA ON CA.CUSTOMER_ADDRESS_MDM_ID = CAB. CUSTOMER_ADDRESS_MDM_ID LEFT JOIN BO_CUSTOMER_BUS_REL CBR ON C.CUSTOMER_MDM_ID = CBR.CUSTOMER_MDM_ID "

 // let sqlTextQuery=sqlTextQuery1;
let sqlTextQuery2= req['query']['buildQuery'];
 let sqlTextQuery=sqlTextQuery1+sqlTextQuery2;
  //let sqlTextQuery2= "where C.FIRST_NAME='Emma' and C.AGE=27";
 
//  let sqlTextQuery2= req['query']['buildQuery'];

let sqlText=`${sqlTextQuery}`;
//   const sqlText = `SELECT C.CUSTOMER_ID,C.FIRST_NAME,C.LAST_NAME,C.EMAIL,C.PHONE,C.AGE,C.LOYALTY_SCORE,C.GENDER_CD,C.BIRTH_DATE,CA.CUSTOMER_ADDRESS_MDM_ID,CA.IS_ACTIVE,CA.CUSTOMER_ADDRESS_ID,CA.CUSTOMER_ADDRESS,

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
  let sqlTextQuery1 = "SELECT * FROM MDM_DEV.BO_CUSTOMER ";
  let sqlTextQuery2 = req['query']['buildQuery'];

  let sqlTextQuery = sqlTextQuery1 + sqlTextQuery2;
  let sqlText = `${sqlTextQuery}`;
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

  
  let sqlTextQuery1 = "SELECT * FROM mdm_dev.BO_CUSTOMER_xref ";
  let sqlTextQuery2 = req['query']['buildQuery'];
  let sqlTextQuery3 = " ORDER BY CUSTOMER_MDM_ID";;

  let sqlTextQuery = sqlTextQuery1 + sqlTextQuery2 + sqlTextQuery3;
  let sqlText = `${sqlTextQuery}`;
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


  let sqlTextQuery1 = "SELECT * FROM mdm_dev.BO_CUSTOMER_TRUST_COLUMN_VALUES ";
  let sqlTextQuery2 = req['query']['buildQuery'];
  // let sqlTextQuery3= " ORDER BY CUSTOMER_MDM_ID" ;;

  let sqlTextQuery = sqlTextQuery1 + sqlTextQuery2;

  let sqlText = `${sqlTextQuery}`;
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
  let sqlTextQuery1 = "SELECT * FROM mdm_dev.BO_CUSTOMER_TRUST_COLUMN_VALUES ";
  let sqlTextQuery2 = req['query']['buildQuery'];
  // let sqlTextQuery3= " ORDER BY CUSTOMER_MDM_ID" ;;

  let sqlTextQuery = sqlTextQuery1 + sqlTextQuery2;
  let sqlText = `${sqlTextQuery}`;
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
  let jobType = JSON.stringify(req['query']['jobType']);
  let sourceTable = JSON.stringify(req['query']['source']);
  let tabele = JSON.stringify(req['query']['tabele']);

  let stage = JSON.stringify(req['query']['staging']);
  let dev = JSON.stringify(req['query']['dev']);
  sourceTable = sourceTable.replace(/"/g, "'");
  jobType = jobType.replace(/"/g, "'");
  tabele = tabele.replace(/"/g, "'");

  stage = stage.replace(/"/g, "'");
  dev = dev.replace(/"/g, "'");

  let statusVal = 'TRUE';
  //let sqlTextQuery="SELECT COUNT(1) AS NUMBER_OF_RECORDS,IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') AS YEAR FROm MDM_DEV.BO_CUSTOMER_XREF GROUP BY IS_ACTIVE,TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') order by TO_CHAR(SRC_LAST_UPDATE_DATE,'YYYY') " ;
  let sqlTextQuery1 = 'CALL MDM_LOAD_CONTROL(';
  let queryStringFor = sourceTable + ',' + jobType + ',' + tabele + ',' + sourceTable + ',' + stage + ',' + dev + ',' + statusVal;
  let finalportion = ')'

  let sqlTextQuery = sqlTextQuery1 + queryStringFor + finalportion;

  let sqlText = `${sqlTextQuery}`;
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

  let sqlTextQuery = "SELECT * FROM MDM_EXECUTION_LOG ORDER BY EXECUTED_DATETIME DESC ";
  //   let sqlTextQuery="CALL MDM_LOAD_CONTROL('NETSUITE','DATA_INGESTION','CUSTOMER','NETSUITE','MDM_STG','MDM_DEV',TRUE);" ;
  let sqlText = `${sqlTextQuery}`;
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

  let sqlTextQuery = "Select * from  REPOS_TRUST_COLUMNS where column_name='FIRST_NAME' and SOURCE_SYSTEM='NETSUITE' ";
  //   let sqlTextQuery="CALL MDM_LOAD_CONTROL('NETSUITE','DATA_INGESTION','CUSTOMER','NETSUITE','MDM_STG','MDM_DEV',TRUE);" ;
  let sqlText = `${sqlTextQuery}`;
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

  let sqlTextQuery = "Select * from BO_CUSTOMER_TRUST_COLUMN_VALUES where customer_mdm_id in (199) and column_name='FIRST_NAME' and SOURCE_SYSTEM='NETSUITE'";
  //   let sqlTextQuery="CALL MDM_LOAD_CONTROL('NETSUITE','DATA_INGESTION','CUSTOMER','NETSUITE','MDM_STG','MDM_DEV',TRUE);" ;
  let sqlText = `${sqlTextQuery}`;
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
              
exports.getAllUserRoles = (req, res) => {

  let sqlTextQuery = "SELECT * FROM EDW.MDM_DEV.REPOS_ROLES;";
  let sqlText = `${sqlTextQuery}`;
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

exports.getAllTableColumns = (req, res) => {

  let sqlTextQuery = "SELECT TABLE_NAME,COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_SCHEMA ='MDM_DEV' AND ( TABLE_NAME NOT LIKE '%HIST%' AND TABLE_NAME NOT LIKE '%XREF%'  AND TABLE_NAME NOT LIKE '%MTCH%'  AND TABLE_NAME NOT LIKE '%HMRG%'  AND TABLE_NAME NOT LIKE '%REPOS%'  AND TABLE_NAME NOT LIKE '%TRUST%'  AND TABLE_NAME NOT LIKE '%VALIDATION%' AND TABLE_NAME NOT LIKE '%LOG%' AND TABLE_NAME NOT LIKE '%REFERENCE%' AND TABLE_NAME NOT LIKE '%STREAM%' AND TABLE_NAME NOT LIKE '%DELTA%' AND TABLE_NAME NOT LIKE '%PROFILE%' AND TABLE_NAME NOT LIKE '%STATS%' AND TABLE_NAME NOT LIKE '%ERROR%' AND TABLE_NAME NOT LIKE '%ALERT%' ) ORDER BY table_name,ORDINAL_POSITION,COLUMN_NAME";
  let sqlText = `${sqlTextQuery}`;
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


exports.getAllUserRolesByName = (req, res) => {

  //let sqlTextQuery = "Select * from EDW.MDM_DEV.REPOS_USER_ROLE_PERMISSIONS where USERNAME='TestUserName'";
 let sqlTextQuery1 = "SELECT * FROM EDW.MDM_DEV.REPOS_USER_ROLE_PERMISSIONS "
 let sqlTextQuery2 = req['query']['buildQuery'];
 let sqlTextQuery = sqlTextQuery1 + sqlTextQuery2;
 // let sqlText = `${sqlTextQuery}`;
  
  //   let sqlTextQuery="CALL MDM_LOAD_CONTROL('NETSUITE','DATA_INGESTION','CUSTOMER','NETSUITE','MDM_STG','MDM_DEV',TRUE);" ;
  let sqlText = `${sqlTextQuery}`;
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

exports.getAllUserNames = (req, res) => {

  let sqlTextQuery = "Select USERNAME from EDW.MDM_DEV.REPOS_USER";
  //   let sqlTextQuery="CALL MDM_LOAD_CONTROL('NETSUITE','DATA_INGESTION','CUSTOMER','NETSUITE','MDM_STG','MDM_DEV',TRUE);" ;
  let sqlText = `${sqlTextQuery}`;
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

  let sqlTextQuery = "Select * from EDW.MDM_DEV.REPOS_USER";
  //   let sqlTextQuery="CALL MDM_LOAD_CONTROL('NETSUITE','DATA_INGESTION','CUSTOMER','NETSUITE','MDM_STG','MDM_DEV',TRUE);" ;
  let sqlText = `${sqlTextQuery}`;
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