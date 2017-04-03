//require express
var express = require('express');
//init express - makes the express application/framework
var app = express();
//create the server for applicaiton
//use our app that utiises express
var server = require('http').createServer(app);
//require socket.io for communication between server and client
var io = require('socket.io')(server);
//variable to store all the strokes
var drawnLines = [];
//variable to stor users
var connectedUsers = [];
//clients who connect to the server will be able to see files in this directory
//hosting static files that wont be changing, host.
app.use(express.static(__dirname + '/public'));
//when a client connects we will get the index.html page for them
app.get('/' + function (req, res, next) {
    res.sendFile(__dirname + '/public/index.html');
});
//turn the connection on for the server
io.on('connect', function (client) {
    //log each connection a client makes and their id
    console.log('client connected ' + client.id);
    //    var uID = client.client.id;
    //add each of the connected users to the array of users
    connectedUsers.push(client.id);
    //output(emit) a message called connectedClients and send the array data
    io.emit('connectedClients', connectedUsers);
    //    console.log(uID);
    //    client.emit('message', "this is a test");
    //for each client listen for a message called mouse
    client.on('mouse', sendDrawing);
    //function to send drawing data
    function sendDrawing(data) {
        console.log(data);
        //        var newdata = client.broadcast.emit(data);
        //brodcast to all clients on the server except for the client sending data
        client.broadcast.emit('mouse', data);
        //        console.log("new data: " + newdata);
    }
});
//io.emit('message', "this is a test");
//start our web server and socket.io server listening
server.listen(3000, function () {
    console.log('listening on *:3000');
});