/*
 *  myScript.js
 *  Implementation of necessary functions for app.
 */

console.log("myScript.js properly loaded.");

const mysql = require ('mysql');

//Home.ejs Functions
function PatientNumber(){
    //Output a random number.
    document.write(Math.floor((Math.random()+1) * 15));
}

function PatientPercentage(){
    //Output a dummy percentage.
    document.write(Math.floor(Math.random()*100));
}

class ControlPanel {
    constructor(config) {
      this.connection = mysql.createConnection(config);
    }
  
    connect() {
      this.connection.connect((error) => {
        if (error) {
          console.error('Error connecting to MySQL database:', error);
        } else {
          console.log('Connected to MySQL database');
        }
      });
    }
  
    disconnect() {
      this.connection.end((error) => {
        if (error) {
          console.error('Error disconnecting from MySQL database:', error);
        } else {
          console.log('Disconnected from MySQL database');
        }
      });
    }
  
    query(sql, params, callback) {
      this.connection.query(sql, params, (error, results, fields) => {
        if (error) {
          console.error('Error executing MySQL query:', error);
        }
        callback(error, results, fields);
      });
    }
    test() {
      document.write("test");
    }
}
const dbconfig = {
    host: 'onehealth-mysql.cfxvv4hyvfvq.us-west-1.rds.amazonaws.com',
    user: 'admin',
    password: '&avb#2%E',
    database: 'onehealth',
  };
myPanel = new ControlPanel(dbconfig);
myPanel.connect();