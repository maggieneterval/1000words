app.config(function ($stateProvider) {
  $stateProvider.state('rate', {
    url: '/rate',
    templateUrl: '/js/common/states/rate/rate.template.html',
    resolve: {
      scenes: function (SceneFactory){
        return SceneFactory.fetchAll();
      }
    },
    controller: 'RateController'
  });
});

app.controller('RateController', function ($scope, scenes, RankFactory) {

  $scope.scenes = scenes;
  $scope.index = 0;
  $scope.currentScene = $scope.scenes[$scope.index];
  $scope.rating = 0;

  $scope.prev = function () {
    $scope.submitRating();
    if ($scope.index === 0){
      $scope.index = $scope.scenes.length - 1;
    } else {
      $scope.index--;
    }
    $scope.currentScene = $scope.scenes[$scope.index];
  }

  $scope.next = function () {
    $scope.submitRating();
    if ($scope.index === $scope.scenes.length - 1){
      $scope.index = 0;
    } else {
      $scope.index++;
    }
    $scope.currentScene = $scope.scenes[$scope.index];
  }

  $scope.submitRating = function () {
    var data = {
      value: $scope.rating,
      sceneId: $scope.currentScene.id
    };
    return RankFactory.postRank(data)
    .then(function () {
      $scope.rating = 0;
    })
  }

});
