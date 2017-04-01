var client;

function setup() {
    var fullW = 900;
    var fullH = 500;
    createCanvas(fullW, fullH);
    background(52);
    client = io.connect('http://127.0.0.1:3000');
}

function draw() {}

function mouseDragged() {
    console.log("emitting: " + mouseX + ', ' + mouseY);
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 20, 20);
    var data = {
        x: mouseX
        , y: mouseY
    }
    console.log(data);
    client.emit('mouse', data);
}