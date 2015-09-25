(function(){
	var app = angular.module('work',['ngMaterial']);

	app.controller('WorkController',function(){

		
	});
  	
 })();

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