var client;
//is any key
var value = 0;

function setup() {
    var fullW = 900;
    var fullH = 500;
    createCanvas(fullW, fullH);
    background(52);
    client = io.connect();
    client.on('mouse', function (data) {
        noStroke();
        fill(255, 10, 200);
        ellipse(data.x, data.y, 20, 20);
        console.log("new drwaing data: " + data);
    });
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

function keyPressed() {
    if (value === 0) {
        clear();
        background(52);
    }
    else {
        clear();
    }
}