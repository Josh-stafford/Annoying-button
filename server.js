var express  = require('express');
var socket = require('socket.io');
var shell = require('python-shell');

var app = express();
var server = app.listen(6060);
console.log('Listening on port 6060');

app.use(express.static('public'));

var io = socket(server);
//var not = new Audio('sound.mp3');

io.sockets.on('connection', newConnection);

function newConnection(socket){
	console.log('New connection: ' + socket.id);
	socket.on('notification', playSound);
}

function playSound(){
	console.log('Playing sound');
	shell.run('play.py', function (err, result) {
		if (err) throw err;
		console.log('Returned: %j', result);
	});
}
