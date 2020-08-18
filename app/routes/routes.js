'use strict';

module.exports = function(app) 
{
    const User      =   require('../controller/users');
    const auth      =   require('../middlewares/auth');
    const services  =   require('../services/index');

    app.route('/api/users/all').get(auth,User.getAll);
    app.route('/api/users/:userId').get(auth,User.getOne);

    app.route('/api/private').get(auth,function(req,res){
        //let token=services.createtoken();
        //let name = services.decodeToken(token);   
        //res.send();
    });
    app.route('/api/token').get(function(req,res){
        let token=services.createtoken();
        res.send(token);
    });
};    