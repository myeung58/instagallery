var ApiRequest = require('./models/ApiRequest.js'),
    express = require('express'),
    app = express();

app.use(express.static('public'));

app.get('/hashtag/:hashtag', function(req, res) {
  var token = '8619424.1fb234f.7269466246614d66b271705b4ec43707',
    url = 'https://api.instagram.com/v1/tags/' + req.params.hashtag + '/media/recent?access_token=' + token,
    promise = ApiRequest.get(url);

  promise.then(function(response) {
      var data = { content: [] },
        dataCount = 0;

      response.data.forEach(function(media) {
        if (dataCount < 10 && media.type === 'image') {
          data.content.push({
            link: media.link,
            image: media.images.thumbnail.url,
            likes: media.likes.count
          });

          dataCount += 1;
        }
      });

      res.json(data);
    }, function(err) {
      res.json({ err: err });
    });

});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Instagallery server listening on http://%s:%s', host, port);
});