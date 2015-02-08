'use strict';

/**
 * @ngdoc function
 * @name pathfinderUtilsApp.controller:InitiativeCtrl
 * @description
 * # InitiativeCtrl
 * Controller of the pathfinderUtilsApp
 */
angular.module('pathfinderUtilsApp')
  .controller('InitiativeCtrl', function ($scope) {
      $scope.creatures = [];
      $scope.add = function () {
          $scope.creatures.push($scope.creature);
          $scope.creature = null;
      };
      $scope.remove = function (index) {
          $scope.creatures.splice(index, 1);
      };
  });
