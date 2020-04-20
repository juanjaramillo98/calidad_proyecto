var express = require('express');
var app = express();
var path = require('path');

app.set('port', process.env.PORT || 7777)

var serv = app.listen(app.get('port'));

app.get('/',function(req, res) {
	res.sendFile(path.join(__dirname , 'publico','FigureFinder.html'));
});

app.use('/publico',express.static(path.join(__dirname , 'publico')));

const socketIO = require('socket.io');
const io = socketIO(serv);

io.on('connection',(socket)=>{

    console.log('nueva coneccion',socket.id);
    
});