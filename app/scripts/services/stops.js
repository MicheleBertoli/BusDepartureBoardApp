'use strict';

/**
 * @ngdoc service
 * @name busDepartureBoardApp.Stops
 * @description
 * # Stops
 * Factory in the busDepartureBoardApp.
 */
angular.module('busDepartureBoardApp')
  .factory('Stops', function ($resource, api) {
    return $resource(api.url + '/stops/bbox.json', {
      'api_key': api.apiKey,
      'app_id': api.appId
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
