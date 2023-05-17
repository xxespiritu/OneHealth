const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const homeRoutes = require('./routes/home-routes');
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');
const myScript = require('./public/myScript');
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: 'a long, randomly-generated string stored in env',
  baseURL: 'http://localhost:3000',
  clientID: 'hK2DZR5Wd6Hc3TyFelJEAdxH53CMoTkO',
  issuerBaseURL: 'https://dev-kgl22ommg21jze83.us.auth0.com'
}

const app = express();
//auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(homeRoutes.routes);

app.listen(3000, () => console.log('App is listening on url http://localhost:3000'));