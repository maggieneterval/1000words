app.config(function ($stateProvider) {

    $stateProvider.state('signup', {
        url: '/signup',
        templateUrl: 'js/signup/signup.html',
        controller: 'SignupCtrl'
    });

});

app.controller('SignupCtrl', function ($scope, AuthService, $state, UserFactory) {

    $scope.signup = {};
    $scope.error = null;

    $scope.sendSignup = function (signupInfo) {

        $scope.error = null;
        const loginInfo = {email: $scope.signup.email, password: $scope.signup.password};

        UserFactory.createUser(signupInfo)
        .then(function () {
          AuthService.login(loginInfo).then(function () {
            $state.go('rate');
          }).catch(function () {
            $scope.error = 'Invalid login credentials.';
          });
        })
    };
});
