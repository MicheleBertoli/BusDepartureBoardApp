'use strict';

describe('Service: Transport', function () {

  // load the service's module
  beforeEach(module('outOfViewApp'));

  // instantiate service
  var Transport;
  beforeEach(inject(function (_Transport_) {
    Transport = _Transport_;
  }));

  it('should do something', function () {
    expect(!!Transport).toBe(true);
  });

  describe('query', function () {
    var $httpBackend;
    beforeEach(inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend
        .expectGET(/transportapi/)
        .respond({
          'minlon': -0.0938,
          'minlat': 51.5207,
          'maxlon': -0.074,
          'maxlat': 51.528,
          'searchlon': -0.0839,
          'searchlat': 51.52435,
          'page': 1,
          'rpp': 25,
          'total': 49,
          'request_time': '2014-07-29T11:26:37+01:00',
          'stops': [{
            'atcocode': '490011448Z',
            'smscode': '73334',
            'name': 'Ravey Street (EC2)',
            'mode': 'bus',
            'bearing': 'W',
            'locality': 'Shoreditch',
            'indicator': 'Stop Z',
            'longitude': -0.08246,
            'latitude': 51.5254,
            'distance': 247
          }]
        });
    }));
    it('should return stops', function () {
      var stops = Transport.query();
      $httpBackend.flush();
      expect(stops.length).toBe(1);
    });
  });

});