angular
	.module('myWeatherApp')
	.directive('myNavbarDirective', myNavbarDirective);

const template = `
	<nav class="navbar navbar-inverse">
	  <div class="container-fluid">
	    <div class="navbar-header">
		    <p class="navbar-text">My Weather App</p>
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