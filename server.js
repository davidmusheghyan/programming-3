var fs = require('fs');  
var express = require('express'); 
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var statData = []; 
var statDataGOL = [];


if (fs.existsSync("public/data.json")) {
    var statData = require("./public/data.json");
}
if (fs.existsSync("GameOfLife/data.json")) {
    var statDataGOL = require("./GameOfLife/data.json");
}


app.use(express.static("public"));
app.use(express.static("GameOfLife"));
app.use('/socket', express.static(__dirname + '/node_modules/socket.io-client/dist/'));
app.use('/p5', express.static(__dirname + '/node_modules/p5/lib/'));


app.get('/', function (req, res) {
    res.redirect('index.stats.html');
});

app.get('/stats', function (req, res) {
    res.redirect('stats.html');
});
app.get('/index', function (req, res) {
    res.redirect('index.html');
});

server.listen(4544);

io.on('connection', function (socket) {
    socket.on("send data", function (data) {
        statData.push(data); 
        fs.writeFile('public/data.json', JSON.stringify(statData)); 
    })

    
    socket.on("get stats", function () { 
        fs.readFile('public/data.json', "utf8", function(err, statisticsFromFile) {
            socket.emit("send stats",statisticsFromFile);    
        });
    })
    
});
io.on('connection', function (socket) {
    socket.on("send data", function (data) {
        statDataGOL.push(data); 
        fs.writeFile('GameOfLife/data.json', JSON.stringify(statDataGOL)); 
    })

    
    socket.on("get stats", function () { 
        fs.readFile('GameOfLife/data.json', "utf8", function(err, statisticsFromFile) {
            socket.emit("send stats",statisticsFromFile);    
        });
    })
    
});

