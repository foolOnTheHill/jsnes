var express = require('express');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname, 'public')));

var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket) {
	//console.log('Component connected.');

	socket.on('disconnect', function() {
		//console.log('Component disconnected.');
	});

	socket.on('pressKey', function(data) {
		socket.broadcast.emit('keyPressed', data);
	});

});

http.listen(3000, function() {
	console.log('App running on port 3000');
});