app.controller('MainCtrl', function ($scope, $rootScope, AUTH_EVENTS, AuthService, $state) {
  $rootScope.currentUser = null;
  $scope.$on(AUTH_EVENTS.loginSuccess, function () {
    AuthService.getLoggedInUser()
    .then(function (user) {
      $rootScope.currentUser = user;
    })
  })
  $scope.logout = function () {
    return AuthService.logout()
    .then(function () {
      $rootScope.currentUser = null;
      $state.go('home')
    })
  }
})
