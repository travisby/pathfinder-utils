'use strict';

/**
 * @ngdoc function
 * @name pathfinderUtilsApp.controller:InitiativeCtrl
 * @description
 * # InitiativeCtrl
 * Controller of the pathfinderUtilsApp
 */
angular.module('pathfinderUtilsApp')
  .controller('InitiativeCtrl', function ($scope, localStorageService) {
      $scope.creatures = [];
      localStorageService.bind($scope, 'creatures', $scope.creatures);
      $scope.add = function () {
          $scope.creatures.push($scope.creature);
          $scope.creature = null;
      };
      $scope.remove = function (index) {
          $scope.creatures.splice(index, 1);
      };
      // between 1 and 20
      $scope.reroll = function(index) {
          $scope.creatures[index].initiative = Math.floor((Math.random() * 20) + 1);
      };
  });
