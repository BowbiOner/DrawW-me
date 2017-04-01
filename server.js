//require express
var express = require('express');
//init express
var app = express();
//create the server for applicaiton
//use our app that utiises express
var server = require('http').createServer(app);
//require socket.io for communication between server and client
var io = require('socket.io')(server);
//variable to store all the strokes
var drawnLines = [];
//variable to stor users
var connectedUsers = {};
//redirect any client who connects to our index.html
app.use(express.static(__dirname + '/public'));
//
app.get('/' + function (req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});
//turn the connection on for the server
io.on('connection', function (client) {
    console.log('client connected ' + client.id);
    var uID = client.client.id;
    //    console.log(uID);
    client.emit('message', "this is a test");
});
io.on('mouse', function (data) {
    console.log(data);
});
//io.emit('message', "this is a test");
//start our web server and socket.io server listening
server.listen(3000, function () {
    console.log('listening on *:3000');
});