const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');
const homeRoutes = require('./routes/home-routes');
const mysql = require ('mysql');

const app = express();

app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(homeRoutes.routes);

app.listen(3000, () => console.log('App is listening on url http://localhost:3000'));

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
}
const config = {
    host: 'onehealth-mysql.cfxvv4hyvfvq.us-west-1.rds.amazonaws.com',
    user: 'admin',
    password: '&avb#2%E',
    database: 'onehealth',
  };
myPanel = new ControlPanel(config);
myPanel.connect();