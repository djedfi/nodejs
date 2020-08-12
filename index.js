'use strict';

const connectdb =   require('./app/config/db');
const http      =   require('http');
const express   =   require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3001,
    cors = require('cors');


const httpServer = http.createServer(app);


if(connectdb.connect)
{
    console.log('DB is Connected :)!');
}
else
{
    console.log('No connection at the moment :)!');
}

// app.listen(port);
console.log('API server started on ' + port);

app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/routes'); //importing route
routes(app); //register the route

httpServer.listen(port);