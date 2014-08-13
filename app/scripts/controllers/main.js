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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
