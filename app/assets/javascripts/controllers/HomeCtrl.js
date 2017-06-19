angular
  .module('myWeatherApp')
  .controller('HomeCtrl', function($scope, $rootScope, WeatherService) {
  	$scope.hello = "Salut toi";
  	// $scope.test = WeatherService.get({date:"20170619", city:"Paris"});
  	$scope.test = "Ceci va être remplacé par la météo"

  	// This function uses the factory WeatherService with two parameters from the html body
  	$scope.getWeather = function() {
  		$scope.test = WeatherService.get({date:$scope.date, city:$scope.city});
  	}
  })