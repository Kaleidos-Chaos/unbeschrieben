'use strict';

describe('Directive: imageOnload', function () {

  // load the directive's module
  beforeEach(module('unbeschriebenEpApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<image-onload></image-onload>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imageOnload directive');
  }));
});
