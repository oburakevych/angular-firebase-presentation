'use strict';

/* Controllers */

var controllersModule = angular.module('myApp.controllers', []);
  
controllersModule.controller('PresentationController', ['$scope', '$timeout', 'impressService', function($scope, $timeout, impressService) {
	console.log("PresentationController initialized");
	
	$scope.init = function() {
		$scope.api = impressService();
	}
	$timeout($scope.init, 500, true);
}]);

controllersModule.controller('HelloAngularFireController', ['$scope', 'angularFire', function($scope, angularFire) {
	var url = "hello-world-app.firebaseio.com";

	angularFire(url, $scope, 'yourName', "");
}]);