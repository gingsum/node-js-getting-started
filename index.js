var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/homepage');
});
app.get('/3x3_TTT', function(request, response) {
  response.render('pages/3x3_TTT');
});
app.get('/about', function(request, response) {
  response.render('pages/about');
});
app.get('/9x9_TTT', function(request, response) {
  response.render('pages/9x9_TTT');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


