'use strict';

describe('Controller: InitiativeCtrl', function () {

  // load the controller's module
  beforeEach(module('pathfinderUtilsApp'));

  var InitiativeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InitiativeCtrl = $controller('InitiativeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
