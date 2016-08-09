app.factory('RankFactory', function ($http) {
  return {
    postRank: function (data) {
      return $http.post('/api/ranks', data)
      .then(res => res.data);
    },
    getUserRank: function () {
      return $http.get('/api/ranks/profile')
      .then(res => res.data);
    }
  }
});

