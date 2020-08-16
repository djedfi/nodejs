'use strict';
const sql = require('../config/db');

let Users = function (user) 
{
    this.first_name     =   user.first_name;
    this.last_name      =   user.last_name;
};

Users.getAll       = (result) => 
{
  sql.query("select * from users", (err, res) => 
  {
    if (err) 
    {
      //console.log("error: ", err);
      result(err, null);
    } 
    else 
    {
      result(null, res)
    }
  });
}


Users.getOne = (userId, result) => 
{
    sql.query(`select * from users WHERE id_user = ${sql.escape(userId)}`, (err, res) => 
    //sql.query("select * from users WHERE id_user = ?",[userId], (err, res) => 
    {
        if (err) 
        {
            console.error(err);
            result(err, null);
        } 
        else 
        {
            result(null, res);
        }
    });
}

module.exports = Users;