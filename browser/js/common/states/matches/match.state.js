app.config(function ($stateProvider) {
  $stateProvider.state('match', {
    url: '/match',
    templateUrl: '/js/common/states/matches/match.template.html',
    resolve: {
      matches: function (UserFactory) {
        return UserFactory.fetchMatches();
      }
    },
    controller: 'MatchCtrl'
  });
});

app.controller('MatchCtrl', function ($scope, matches) {
  $scope.matches = matches;
});

