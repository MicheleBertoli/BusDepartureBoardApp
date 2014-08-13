'use strict';

/**
 * @ngdoc service
 * @name outOfViewApp.Transport
 * @description
 * # Transport
 * Factory in the outOfViewApp.
 */
angular.module('outOfViewApp')
  .factory('Transport', function ($resource) {
    return $resource('https://cors-anywhere.herokuapp.com/transportapi.com/v3/uk/bus/stops/bbox.json', {
      'api_key': 'fed809061ed9956f32d719787fcf8d0e',
      'app_id': 'ad0f4534'
    }, {
    	query: {
    		method: 'GET',
    		isArray: true,
    		transformResponse: function(data) {
    			return angular.fromJson(data).stops;
    		}
    	}
    });
  });
