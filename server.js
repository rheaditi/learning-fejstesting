/* require stuff */
var express = require('express');
var config = require('./config.json');

/* express initializatons */
var app = express();
app.use(express.static(__dirname + '/public'));

app.set('port', (process.env.PORT || config.app.port));

app.get('/HELLO', function(request, response){
	response.send('WORLD');
});


/* Finally, bind & listen */
app.listen(app.get('port'), function() {
  console.log('Server running on port ', app.get('port'));
});