angular
  .module('myWeatherApp')
  .controller('HomeCtrl', function($scope, $rootScope, WeatherService, $filter) {
  	$scope.test = "Ceci va être remplacé par la météo"
  	$scope.datepicker = new Date()

  	$scope.minDate = new Date(98, 01, 01, 12, 0, 0, 0);
  	$scope.finaldate = $filter('date')($scope.datepicker, 'yyyyMMdd')

  	// This function uses the factory WeatherService with two parameters from the html body
  	$scope.getWeather = function() {
  		$scope.test = WeatherService.get({date:$scope.date, city:$scope.city});
  	}
  })