'use strict';

module.exports = function(app) 
{
    const User = require('../controller/users');

    app.route('/api/users/all').get(User.getAll);
    app.route('/api/users/:userId').get(User.getOne);
};    