'use strict';

/**
 * @ngdoc function
 * @name outOfViewApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the outOfViewApp
 */
angular.module('outOfViewApp')
  .controller('MainCtrl', function ($scope, Transport) {

    var tilesloaded = function (map) {
      var bounds = getBounds(map);
      Transport.query(bounds).$promise.then(addMarkers);
    };

    var getBounds = function (map) {
      var bounds = map.getBounds();
      var ne = bounds.getNorthEast();
      var sw = bounds.getSouthWest();
      return {
        minlon: sw.lng(),
        minlat: sw.lat(),
        maxlon: ne.lng(),
        maxlat: ne.lat()
      };
    };

    var addMarkers = function (markers) {
      $scope.map.markers = markers;
      $scope.map.markers.forEach(function (marker) {
        marker.onClick = onClick.bind(null, marker);
      });
    };

    var onClick = function (marker) {
      console.log(marker);
    };

    $scope.map = {
      center: {
        latitude: 51.528,
        longitude: -0.0839
      },
      zoom: 16,
      events: {
        tilesloaded: tilesloaded
      }
    };

  });
