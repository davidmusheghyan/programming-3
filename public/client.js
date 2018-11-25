var socket = io.connect('http://localhost:4444');
var statistics = {
    "timestamp": "",
    "clicks": 0,
    "dbclicks": 0,
    "keypresses": 0,
    "framecount": 0
}

function setup() {
    var cnv = createCanvas(600, 600);
    frameRate(20);
}

function draw() {
    if (frameCount % 500 === 0) {
        statistics.timestamp = (new Date()).toString();
        statistics.framecount = frameCount;
        socket.emit("send data", statistics);
    }
}

function mouseClicked() {
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 30, 30);
    statistics.clicks++;
    changeView(statistics);
}

function keyPressed() {
    fill(random(255), random(255), random(255));
    var x = random(0, 600);
    var y = random(0, 600);
    rect(x, y, 30, 30);
    statistics.keypresses++;
    changeView(statistics);
}


function doubleClicked() {
    fill(random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 70, 50);
    statistics.dbclicks++;
    changeView(statistics);
}


function changeView(stat) {
    var c = document.getElementById("clicks");
    var k = document.getElementById("keypress");
    var d = document.getElementById("dclicks");
    c.innerHTML = stat.clicks;
    k.innerHTML = stat.keypresses;
    d.innerHTML = stat.dbclicks;
}
