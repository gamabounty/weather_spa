angular
  .module('myWeatherApp')
  .factory('WeatherService', function($resource) {
  	// This factory uses the $resource to make a get request on my Rails route, with the parameters date and city
  	return $resource('http://localhost:3000/weather/:date/:city')
  })
  // .config(function($mdDateLocaleProvider) {
  // 	$mdDateLocaleProvider.formatDate = function(date) {
  //      return moment(date).format('DD-MM-YYYY');
  //   };
  // })
  .filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});