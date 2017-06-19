angular
	.module('myWeatherApp')
	.directive('myNavbarDirective', myNavbarDirective);

const template = `
	<nav class="navbar navbar-inverse">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <a class="navbar-brand" href="#">
	        <img alt="Brand" src="http://www.lafranceagricole.fr/images/sprite_weather/day/55.svg">
	      </a>
	    </div>
	  </div>
	</nav>
`;

function myNavbarDirective(){
	return {
		restrict: 'E',
		template: template
	};
}