
const indexView = (req, res) => {
    res.render('home');
}

const tableView = (req, res) => {
    res.render('table');
}

const billingView = (req, res) => {
    res.render('billing');
}

const virtualView = (req, res) => {
    res.render('virtual-reality')
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

module.exports = {
    indexView,
    tableView,
    billingView,
    virtualView,
    profileView,
    signinView,
    signupView
}