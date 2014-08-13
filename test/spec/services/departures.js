'use strict';

describe('Service: Departures', function () {

  // load the service's module
  beforeEach(module('busDepartureBoardApp'));

  // instantiate service
  var Departures;
  beforeEach(inject(function (_Departures_) {
    Departures = _Departures_;
  }));

  it('should do something', function () {
    expect(!!Departures).toBe(true);
  });

  describe('get', function () {
    var $httpBackend;
    beforeEach(inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET(/transportapi/)
        .respond({
          'atcocode': '490011448Z',
          'smscode': '73861',
          'request_time': '2014-07-29T11:37:34+01:00',
          'departures': {
            '76': [{
              'mode': 'bus',
              'line': '76',
              'direction': 'Tottenham T H',
              'operator': 'TFL',
              'aimed_departure_time': null,
              'expected_departure_time': '11:38',
              'best_departure_estimate': '11:38',
              'source': 'Countdown instant'
            }]
          }
        });
    }));
    it('should return stops', function () {
      var departures = Departures.get();
      $httpBackend.flush();
      expect(departures['76'].length).toBe(1);
    });
  });

});
