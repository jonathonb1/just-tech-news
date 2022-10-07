const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
    // create connection to our DB, pass in your MySQL info for Username and Password
sequelize = new Sequelize('just_tech_news_db', 'root', 'rootpassword', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});
}



module.exports = sequelize;
