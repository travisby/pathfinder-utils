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

  it('should attach an empty list of creatures to the scope', function () {
    expect(scope.creatures.length).toBe(0);
  });
});
