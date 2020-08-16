'use strict';

const jwt           =   require('jsonwebtoken');
const fs            =   require('fs');
const moment        =   require('moment');
const config        =  require('../config/config');
var privateKey      =   fs.readFileSync('./app/config/private.pem', 'utf8');


function createtoken()
{
    
    let payload     =   {id:5,name:'CARLOS'};
    let token       =   jwt.sign(payload, privateKey, {algorithm: config.algorithm_cifrado,expiresIn:30});
    return token;
}


function decodeToken(token)
{
    const decoded = new Promise(function(resolve, reject) 
    {
        try
        {
            const payload = jwt.verify(token,privateKey,{ algorithms: [config.algorithm_cifrado] });
            
            if(payload.exp <= moment().unix())
            {
                reject({status : 403,message:'TOKEN HA EXPIRADO'});
            }
            else
            {
                resolve(payload.id);
            }
            
        }
        catch(err)
        {
            reject({status : 500,message:'TOKEN ES INVALIDO O HA EXPIRADO'});
        }
       
    });
    return decoded;
    /*
    try
    {
        const payload = jwt.verify(token,privateKey,{ algorithms: [config.algorithm_cifrado] });
        if(payload.exp <= moment().unix())
        {
            return -2;
        }
        else
        {
            return payload;
        }
        
    }
    catch(err)
    {
        
    }*/
}

module.exports  =   {createtoken,decodeToken};
//console.log('CODIGFICADO: '+token);

//var decoded     = jwt.verify(token,privateKey,{ algorithms: ['HS256'] });
//console.log('\nDECODIGFICADO: '+decoded.nombre);