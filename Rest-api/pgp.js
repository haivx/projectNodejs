/**
 * Created by techmaster on 1/17/17.
 */
const path = require("path");
const env = process.env.NODE_ENV || "development";
const config = require(path.join(__dirname, 'config', 'config.json'))[env];
const Promise = require('bluebird');

const cn = {
  host: config.host,
  port: config.port,
  database: config.database,
  user: config.username,
  password: config.password
};



const options = {
  promiseLib: Promise // overriding the default (ES6 Promise);
};
const pgp = require('pg-promise')(options);

//enable this row when insert data Or return value when get data in file *.js 
// module.exports = pgp(cn);

module.exports.db = pgp(cn);
module.exports.config = config;
