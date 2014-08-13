'use strict';

/**
 * @ngdoc function
 * @name outOfViewApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the outOfViewApp
 */
angular.module('outOfViewApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
