'use strict';

/* Controllers */

var controllersModule = angular.module('myApp.controllers', []);
  
controllersModule.controller('PresentationController', ['$scope', '$timeout', 'impressService', function($scope, $timeout, impressService) {
	console.log("PresentationController initialized");
	
	$scope.init = function() {
		$scope.api = impressService();
	}

	$timeout($scope.init, 1000, true);
	
}]);