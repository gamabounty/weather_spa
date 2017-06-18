angular
  .module('myWeatherApp')
  .config(function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
    $urlRouterProvider.otherwise('/home')
  })