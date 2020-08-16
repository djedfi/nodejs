'use strict';

const services   =   require('../services/index');
const { response } = require('express');


function isAuth(req, res, next)
{
    if(!req.headers.authorization)
    {
        return res.status(403).send({message: 'NO EXISTE NINGUN TOKEN CREADO'});
    }
    const token           = req.headers.authorization.split(' ')[1];
    //const decode_token    = services.decodeToken(token);

    services.decodeToken(token)
    .then(response => 
        {
            //res.status(201).send({message:response});
            next();
        })
    .catch(response =>
        {
        res.status(response.status).send({message:response.message});
    });



    /*if(!decode_token)
    {
        return res.status(403).send({message: 'ERROR AL MOMENTO DE DECODIFICAR EL TOKEN'});
    }
    else if(decode_token == -2)
    {
        return res.status(403).send({message: 'ERROR EL TOKEN HA EXPIRADO'});
    }
    else if(decode_token.id >= 0)
    {
        next();
    }
    else
    {
        return res.status(403).send({message: 'EL USUARIO NO TIENE ACCESO AL RECURSO'});
    }*/
}
module.exports = isAuth;