'use strict';

/**
 * @ngdoc function
 * @name busDepartureBoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the busDepartureBoardApp
 */
angular.module('busDepartureBoardApp')
  .controller('MainCtrl', function ($scope, Stops, Departures) {

    var tilesloaded = function (map) {
      var bounds = getBounds(map);
      Stops.query(bounds).$promise.then(addMarkers);
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
      $scope.departures = Departures.get(marker);
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
