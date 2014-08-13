'use strict';

/**
 * @ngdoc function
 * @name outOfViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outOfViewApp
 */
angular.module('outOfViewApp')
  .controller('MainCtrl', function ($scope) {
    $scope.map = {
		center: {
	        latitude: 45,
	        longitude: -73
	    },
	    zoom: 8,
	    events: {
            tilesloaded: function (map) {
            	$scope.$apply(function () {
            		$scope.bounds = map.getBounds();
            		console.log($scope.bounds);
            	});
            }
        }
	};
  });
