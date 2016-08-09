app.config(function ($stateProvider) {
  $stateProvider.state('profile', {
    url: '/profile',
    templateUrl: '/js/common/states/profile/profile.template.html',
    resolve: {
      profileData: function (RankFactory){
        return RankFactory.getUserRank();
      }
    },
    controller: 'ProfileCtrl'
  });
});

app.controller('ProfileCtrl', function ($scope, profileData) {
  $scope.dimensions = ['location', 'extroversion', 'extravagance', 'family', 'partnership'];
  $scope.profileData = profileData;
})
