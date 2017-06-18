angular
  .module('myWeatherApp')
  .controller('HomeCtrl', function($scope, $rootScope, WeatherService) {
  	$scope.hello = "Salut toi";
  	$scope.test = WeatherService.get();
  })