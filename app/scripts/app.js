'use strict';

/**
 * @ngdoc overview
 * @name busDepartureBoardApp
 * @description
 * # busDepartureBoardApp
 *
 * Main module of the application.
 */
angular
  .module('busDepartureBoardApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'google-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('api', {
    url: 'https://cors-anywhere.herokuapp.com/transportapi.com/v3/uk/bus',
    apiKey: 'fed809061ed9956f32d719787fcf8d0e',
    appId: 'ad0f4534'
  });
