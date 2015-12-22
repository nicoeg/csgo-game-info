var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');

app.use(express.static('public'));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

var clients = [];

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
	for (var i = 0; i < clients.length; i++) {
		clients[i].emit('data', req.body);
	}
});

io.on('connection', function(socket) {
  	console.log('a user connected');
  	clients.push(socket);
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});