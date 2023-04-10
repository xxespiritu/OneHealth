/****************************************************************
*   home-routes.js                                              *
*   Specify new views here.                                     *
*****************************************************************/
const express = require('express');

const {indexView, staffView, billingView, patientsView, profileView, signinView, signupView, patient1View} = require('../controllers/homeController');
const router = express.Router();

router.get('/', indexView);
router.get('/staff', staffView);
router.get('/billing', billingView);
router.get('/patients', patientsView);
router.get('/profile', profileView);
router.get('/sign-in', signinView);
router.get('/sign-up', signupView);
router.get('/patient1', patient1View);


module.exports = {
    routes: router
}