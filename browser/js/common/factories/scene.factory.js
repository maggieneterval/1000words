app.factory('SceneFactory', function ($http) {
  return {
    fetchAll: function () {
      return $http.get('/api/scenes')
      .then(res => res.data);
    }
  }
})
