
const  config = {
  user:  'sa', // sql user
  password:  'foci', //sql user password
  server:  'localhost\\SQLEXPRESS', // if it does not work try- localhost
  database:  'szakdolgozat',
  options: {
    trustedconnection:  true,
    enableArithAbort:  true,
    trustServerCertificate: true,
    instancename:  'SQLEXPRESS'  // SQL Server instance name
  },

  port:  57403
}

module.exports = config;

