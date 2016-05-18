var express = require('express');
var app = express();

app.listen(process.ENV.port || 3000, function(){
	console.log("listening on 3000");
});

app.get('/HELLO', function(request, response){
	response.send('WORLD');
});