'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('outOfViewApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach an event listener on tilesloaded to the map', function () {
    expect(scope.map.events.tilesloaded).toBeDefined();
  });
});
