/****************************************************************
*   homeController.js                                           *
*   You can add new "views" here. Following the following format*
*   you must also add this new view to home-routes.js           *
*****************************************************************/

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
    index,
    loginView,
    profile,
    //indexView,
    staffView,
    billingView,
    patientsView,
    profileView,
    profileView1,
    patient1View
}