'use strict';

describe('Service: ep', function () {

  // load the service's module
  beforeEach(module('unbeschriebenEpApp'));

  // instantiate service
  var ep;
  beforeEach(inject(function (_ep_) {
    ep = _ep_;
  }));

  it('should do something', function () {
    expect(!!ep).toBe(true);
  });

});
