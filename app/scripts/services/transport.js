'use strict';

/**
 * @ngdoc service
 * @name outOfViewApp.Transport
 * @description
 * # Transport
 * Factory in the outOfViewApp.
 */
angular.module('outOfViewApp')
  .factory('Transport', function ($resource, api) {
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