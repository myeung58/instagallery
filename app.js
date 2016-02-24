var express = require('express'),
    app = express();

app.use(express.static('public'));

app.get('/hashtag/:hashtag', function(req, res) {
  // Instagram token
  var token = '8619424.1fb234f.7269466246614d66b271705b4ec43707';

  // Insert code here to call Instagram and return photos.

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Instagallery server listening on http://%s:%s', host, port);
});