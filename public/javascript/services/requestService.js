app.service('RequestService', function ($http) {
  this.urls = {
    getContentUrl: '/hashtag'
  };

  this.getContent = function(searchTerm, callback) {
    var url = this.urls.getContentUrl + '/' + searchTerm;

    $http.get(url)
      .then(function(response) {
        if (response.data.content) {
          callback(response.data.content);
        } else {
          callback();
        }
      });
  };

});
