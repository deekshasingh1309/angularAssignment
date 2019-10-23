module.exports = (app) => {
    const userData = require('./controllers/userController');

    //route for get api
    app.get('/userdetails', userData.userdetails);

    // route for posting the details of users
    app.post('/add', userData.addUser);

}
