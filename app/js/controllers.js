'use strict';

/* Controllers */

var controllersModule = angular.module('myApp.controllers', []);
  
controllersModule.controller('PresentationController', ['$scope', '$timeout', 'impressService', function($scope, $timeout, impressService) {
	console.log("PresentationController initialized");
	
	$scope.init = function() {
		$scope.api = impressService();
		$scope.activeTab = 'html';
	}

	$scope.isActiveTab = function(tabName) {
		if ($scope.activeTab === tabName) {
			return 'active';
		}

		return '';
	}

	$timeout($scope.init, 500, true);
}]);

controllersModule.controller('HelloAngularFireController', ['$scope', '$firebase', function($scope, $firebase) {
	var ref = new Firebase("hello-world-app.firebaseio.com");

	$firebase(ref).$bind($scope, 'yourName');
}]);