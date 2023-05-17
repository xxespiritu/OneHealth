/****************************************************************
*   homeController.js                                           *
*   You can add new "views" here. Following the following format*
*   you must also add this new view to home-routes.js           *
*****************************************************************/
<<<<<<< Updated upstream
const homeScreen = (req, res) => {
    res.render('log-in', {layout: 'log-in'});
}

const register = (req, res) => {
    res.render('register', {layout: 'register'});
}

const indexView = (req, res) => {
=======

const index = (req, res, next) => {
    res.render('home', {
        title: 'Auth0 Webapp Sample Nodejs',
        isAuthenticated: req.oidc.isAuthenticated()
    });
};

const loginView = (req, res, next) => {
    res.oidc.login({
        returnTo: '/home',
        authorizationParams: {
            redirect_uri: 'http://localhost:3000/callback',
        },
    })
};

const profile = (req, res, next) => {
    res.render('profile', {
        userProfile: JSON.stringify(req.oidc.user, null, 2),
        title: 'Profile Page'
    });
};

/*const indexView = (req, res) => {
>>>>>>> Stashed changes
    res.render('home');
}*/

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

const profileView1 = (req, res) => {
    res.render('editprofile');
}

const patient1View = (req, res) => {
    res.render('patient1');
}

module.exports = {
<<<<<<< Updated upstream
    homeScreen,
    register,
    indexView,
=======
    index,
    loginView,
    profile,
    //indexView,
>>>>>>> Stashed changes
    staffView,
    billingView,
    patientsView,
    profileView,
    profileView1,
    patient1View
}