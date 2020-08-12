'use strict';
let Users = require('../model/users');

exports.getAll = (req, res) => 
{
    Users.getAll((err, data) => 
    {
        if (err) 
        {
            return res.status(500).send(err);
        } 
        else 
        {
            return res.json(data);
        }
    });
}

exports.getOne = (req, res) => 
{
    const userId    =   req.params.userId;
    Users.getOne(userId,(err, data) => 
    {
        if (err) 
        {
            return res.status(500).send({
                code: 'SQL error',
                message: err
            });
        } 
        else 
        {
            return res.json(data);
        }
    });
}

