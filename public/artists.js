//variable to connect to sockets
var client;
//is any key
var value = 0;
//setup function, excutes once the applicaiton is running
function setup() {
    //width of canvas
    var fullW = 900;
    //height of canvas
    var fullH = 500;
    //create canvas funciton - creates a default canvas object and gives it a width and height
    createCanvas(fullW, fullH);
    //set the background colour of the canvas
    background(52);
    //use our client variable to create a connection to our server
    client = io.connect();
    //tell the client to listen for a message called mouse
    //calls an anon function
    client.on('mouse', function (data) {
        //disables outline of shape
        noStroke();
        //fill the ellipse with a pinky colour when drawing on your instance of the canvas
        fill(255, 10, 200);
        //draw an ellipse using the x and y we have recived from the server, with a widht and height of 20
        ellipse(data.x, data.y, 15, 15);
        //log to the console the data that is from other clients
        console.log("new drwaing data: " + data);
    });
}

function draw() {}
//prebuilt function from p5.js, it gets called when the mouse is moving and when a mouse button is pressed too
function mouseDragged() {
    //log the data that we are sending to the server
    //p5 has prebuilt property that gets the pos of mouseX and mouseY
    console.log("emitting: " + mouseX + ', ' + mouseY);
    noStroke();
    //fill your drawing with white
    fill(255);
    //draw an ellipse in the current mousex and mousey pos
    ellipse(mouseX, mouseY, 15, 15);
    //store mouseX and mouseY in an array called data
    var data = {
        x: mouseX
        , y: mouseY
    }
    console.log(data);
    //emit a message called mouse and send the data array
    client.emit('mouse', data);
}
//prebuilt function from p5.js that listens for a key presses. 
function keyPressed() {
    //if any button is pressed
    if (value === 0) {
        //clear the current instance of the canvas
        clear();
        //set the background back to stock
        background(52);
    }
    else {
        clear();
    }
}