angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = {};
  Links.getAll().then(function(allLinks) {
    $scope.data.links = allLinks;
  });
});
