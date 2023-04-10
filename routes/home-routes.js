/****************************************************************
*   home-routes.js                                              *
*   Specify new views here.                                     *
*****************************************************************/
const express = require('express');

const {indexView, tableView, billingView, virtualView, profileView, signinView, signupView} = require('../controllers/homeController');
const router = express.Router();

router.get('/', indexView);
router.get('/table', tableView);
router.get('/billing', billingView);
router.get('/virtual-reality', virtualView);
router.get('/profile', profileView);
router.get('/sign-in', signinView);
router.get('/sign-up', signupView);


module.exports = {
    routes: router
}