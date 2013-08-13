'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
var servicesModule = angular.module('myApp.services', []);

servicesModule.value('version', '0.1');

servicesModule.factory('impressService', [function() {
		var api = null;
		console.log("impressService");
      	return function() {
      			if (!api) {
      				console.log("INITIALIZED");
      				api = impress();
      				api.init();
      			}

      			console.log("Returning API");
      			return api;
      		}
      	}
]);

