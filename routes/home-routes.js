/****************************************************************
*   home-routes.js                                              *
*   Specify new views here.                                     *
*****************************************************************/
const express = require('express');
const { requiresAuth } = require('express-openid-connect');

const {index, loginView, profile, /*indexView,*/ staffView, billingView, patientsView, profileView1, patient1View} = require('../controllers/homeController');
const router = express.Router();

//router.get('/', homeScreen);
router.get('/home', index);
router.get('/', loginView);
router.get('/profile', requiresAuth(), profile);
router.get('/editprofile', requiresAuth(), profileView1);
//router.get('/home', indexView);
router.get('/staff', requiresAuth(), staffView);
router.get('/billing', requiresAuth(), billingView);
router.get('/patients', requiresAuth(), patientsView);
//router.get('/profile', profileView);
router.get('/patient1', patient1View);

module.exports = {
    routes: router
}