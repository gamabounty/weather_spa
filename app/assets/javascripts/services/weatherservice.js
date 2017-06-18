angular
  .module('myWeatherApp')
  .factory('WeatherService', function($resource) {
  	return $resource('http://localhost:3000/weather')
  })