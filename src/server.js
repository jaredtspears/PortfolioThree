// server.js made for express server for heroku deployement
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
const app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
app.get('/', (req, res) => {
    console.log('A new user has made a GET request to "/"');
    res.sendFile('index.html', { root: __dirname});
});
console.log('server started '+ port);