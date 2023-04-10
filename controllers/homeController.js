/****************************************************************
*   homeController.js                                           *
*   You can add new "views" here. Following the following format*
*   you must also add this new view to home-routes.js           *
*****************************************************************/
const indexView = (req, res) => {
    res.render('home');
}

const staffView = (req, res) => {
    res.render('staff');
}

const billingView = (req, res) => {
    res.render('billing');
}

const patientsView = (req, res) => {
    res.render('patients')
}

const profileView = (req, res) => {
    res.render('profile');
}

const signinView = (req, res) => {
    res.render('sign-in');
}

const signupView = (req, res) => {
    res.render('sign-up');
}

const patient1View = (req, res) => {
    res.render('patient1');
}

module.exports = {
    indexView,
    staffView,
    billingView,
    patientsView,
    profileView,
    signinView,
    signupView,
    patient1View
}