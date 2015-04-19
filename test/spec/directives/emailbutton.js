'use strict';

describe('Directive: emailbutton', function () {

  // load the directive's module
  beforeEach(module('unbeschriebenEpApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<emailbutton></emailbutton>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the emailbutton directive');
  }));
});
