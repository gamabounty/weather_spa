angular
  .module('myWeatherApp')
  .controller('HomeCtrl', function($scope, $rootScope, WeatherService) {
  	$scope.test = "Ceci va être remplacé par la météo"

  	// This function uses the factory WeatherService with two parameters from the html body
  	$scope.getWeather = function() {
  		$scope.test = WeatherService.get({date:$scope.date, city:$scope.city});
  	}
  })