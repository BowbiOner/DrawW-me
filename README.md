# DrawW-me
*Intro*:
-Fade to black- 
DrawW-me is a very basic collaborative canvas drawing application that is hosted using Node.js, the framework that gives structure is Express.js, which then utilises Socket.io to handle communication between server and clients & finally P5 library to allow ease of use drawing on the canvas.

*Features*:
 Draw simultaneous with other clients, see client list(little buggy), clear your canvas
 
 *Start-up*:
 Node must be installed on your machine (and paths need to be correct), in Terminal or CMD then CD to project path then run with either ```node server.js``` or ```nodemon server.js```. Clients will connect either through 127.0.0.1:3000 or http://localhost:3000.
