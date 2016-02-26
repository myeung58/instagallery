app.controller('mainController', function ($scope, RequestService) {
  $scope.searchTerm = '';
  $scope.searchResults = [];
  $scope.currentResultItem = {};
  $scope.render = {
    searchResults: false,
    itemDetail: true
  };

  $scope.searchFor = function(searchTerm) {
    $scope.searchTerm = searchTerm.split(' ').join('');

    RequestService.getContent(searchTerm, function(content) {
      $scope.resetRender();

      if (!!content.length) {
        $scope.render.searchResults = true;
        $scope.searchResults = content;
      }
    });
  };

  $scope.resetRender = function(exception) {
    for (var key in $scope.render) {
      if (key !== exception) {
        $scope.render[key] = false;
      }
    }
  };

  $scope.renderResultDetail = function(item) {
    $scope.render.itemDetail = true;
    $scope.currentResultItem = item;
  };

  $scope.hideResultDetail = function() {
    $scope.render.itemDetail = false;
  };

});
