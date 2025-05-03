const snowflake = require('snowflake-sdk');
require('dotenv').config();

const connection = snowflake.createConnection({
  account: 'pyhfgwb-jn54203',
  username: 'vimbai',
  password: 'vimbai@123',
  database: 'EDW',
  schema: 'MDM_DEV',
  warehouse: 'COMPUTE_WH',
});

connection.connect((err, conn) => {
  if (err) {
    console.error('Unable to connect to Snowflake: ' + err.message);
  } else {
    console.log('Successfully connected to Snowflake.');
  }
});

module.exports = connection;