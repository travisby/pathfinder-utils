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

  it('should be able to add to creatures', function () {
      scope.creature = {name: 'Travis', initiative: 14};
      scope.add();
      expect(scope.creatures[0].name).toBe('Travis');
      expect(scope.creatures[0].initiative).toBe(14);
  });

  it('should clear text when creature is added', function () {
      scope.creature = {name: 'Travis', initiative: 14};
      scope.add();
      expect(scope.creature).toBeFalsy();
  });
});
