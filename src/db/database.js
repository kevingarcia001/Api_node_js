const {Sequelize} = require("sequelize");

const db = new Sequelize('usuarios_db', 'root', '', {
    host: 'localhost',
    dialect:  'mysql' /* one of| 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  module.exports = db;