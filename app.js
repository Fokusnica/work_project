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
angular
  .module('inputIconDemo', ['ngMaterial', 'ngMessages'])
  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      name: 'John Doe',
      email: '',
      phone: '',
      address: 'Mountain View, CA'
    };

  });
  inputIconDemo.controller('SelectOptGroupController',function($scope) {
  	$scope.cars_marks=["Audi","BMW","Skoda","Volkswagen","KIA"];


  });

