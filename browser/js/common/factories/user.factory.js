app.factory('UserFactory', function ($http) {
  return {
    createUser: function (data) {
      return $http.post('/api/users', data)
      .then(res => res.data);
    },
    fetchMatches: function () {
      return $http.get('/api/users/matches')
      .then(res => res.data);
    }
  }
});

