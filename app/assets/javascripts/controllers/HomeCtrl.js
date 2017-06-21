angular
  .module('myWeatherApp')
  .controller('HomeCtrl', function($scope, $rootScope, WeatherService, $filter) {
  	// $scope.datepicker = new Date()

  	$scope.minDate = new Date(98, 01, 01, 12, 0, 0, 0);
  	// $scope.finaldate = $filter('date')($scope.datepicker, 'yyyyMMdd')

  	// This function uses the factory WeatherService with two parameters from the html body
  	$scope.getWeather = function() {
  		$scope.result = WeatherService.get({date:$scope.finaldate, city:$scope.city});
      console.log($scope.result);
  	}

    $scope.test = function() {
      return ($scope.datepicker - new Date());
    }

    function update() {
      $scope.finaldate = $filter('date')($scope.datepicker, 'yyyyMMdd')
    }

    $scope.$watch($scope.test, update);
  })
