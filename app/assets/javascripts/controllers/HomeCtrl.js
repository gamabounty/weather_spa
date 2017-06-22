angular
  .module('myWeatherApp')
  .controller('HomeCtrl', function($scope, $rootScope, WeatherService, WeatherToday, $filter) {

    $scope.minDate = new Date(97, 12, 01, 12, 0, 0, 0);
  	$scope.maxDate = new Date();

  	// This function uses the factory WeatherService with two parameters from the html body
  	$scope.getWeather = function() {
  		$scope.result = WeatherService.get({date:$scope.finaldate, city:$scope.city});
      $scope.today = WeatherToday.get({city:$scope.city})
  	}

    // This function monitors whether the date chosen in the datepicker has changed
    $scope.test = function() {
      return ($scope.datepicker - new Date());
    }
    // This function updates the finaldate variable using a filter to get the format required by the API doc
    function update() {
      $scope.finaldate = $filter('date')($scope.datepicker, 'yyyyMMdd')
    }
    // If the date from the datepicker is changed, so does the finaldate variable
    $scope.$watch($scope.test, update);

    $scope.cities = [{
      name: "Ajaccio",
      value: "ajaccio"
    }, {
      name: "Barfleur",
      value: "barfleur"
    }, {
      name: "Bordeaux",
      value: "bordeaux"
    }, {
      name: "Caen",
      value: "caen"
    }, {
      name: "Dunkerque",
      value: "dunkerque"
    }, {
      name: "Lyon",
      value: "lyon"
    }, {
      name: "Montpellier",
      value: "montpellier"
    }, {
      name: "Paris",
      value: "paris"
    }, {
      name: "Rennes",
      value: "rennes"
    }, {
      name: "Toulouse",
      value: "toulouse"
    }]
  })
