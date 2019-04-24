// var socket = io();
var socket = io.connect('http://localhost:4000');

var msg = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

//emit
btn.addEventListener('click',function (){
	socket.emit('chat',{
		msg: msg.value,
		handle: handle.value
	})
})

socket.on('chat',(data)=>{
	output.innerHTML+='<p><strong>'+data.handle+'</strong>: '+data.msg+'</p>';
})