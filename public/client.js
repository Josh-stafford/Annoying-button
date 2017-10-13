var socket;
var button;

socket = io.connect('http://86.136.53.142:6060');

function sendNot(){
	button = document.getElementById('SEND');
	socket.emit('notification');
	console.log('Sending notification');
}
