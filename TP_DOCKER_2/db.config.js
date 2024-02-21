// Uncomment this block to use sqlite
/* module.exports = {
    dialect: "sqlite",
    storage: "./my-db.sqlite",
} */

// Uncomment this block to use mysql
module.exports = {
    hostname: process.env.DB_HOST || 'localhost',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'root',
    database: process.env.DB_NAME || 'maBaseDeDonnees',
    port: process.env.DB_PORT || 3306,
    dialect: "mysql"
  };
  


// TODO : adapt this file to load parameters from environment variables (process.env.VARIABLE_NAME)