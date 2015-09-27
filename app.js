/*global angular*/

// (function(){
// 	var app = angular.module('work',['ngMaterial']);

// 	app.controller('WorkController',function(){


// 	});

// })();

// angular
//   .module('inputIconDemo', ['ngMaterial', 'ngMessages'])
//   .controller('DemoCtrl', function($scope) {
//     $scope.user = {
//       name: 'John Doe',
//       email: '',
//       phone: '',
//       address: 'Mountain View, CA'
//     };
//   });
var app =angular.module('inputIconDemo', ['ngMaterial', 'ngMessages'])
app.controller('DemoCtrl', function($scope) {
	$scope.user = {
		name: 'John Doe',
		email: '',
		phone: '',
		address: 'Mountain View, CA'
	};

});
app.controller('SelectOptGroupController',function($scope) {
	$scope.cars=["Audi","BMW","Skoda"];
	$scope.bikes=["Conandole","RIdeBike","Veloplaneta"];
	$scope.snowboards=["GNU","Burton","Ride"];




});
