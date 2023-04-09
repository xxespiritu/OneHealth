
const indexView = (req, res) => {
    res.render('home');
}

const iconsView = (req, res) => {
    res.render('icons');
}

module.exports = {
    indexView
}