angular.module('calcApp', []).controller('CalcController',
    function($scope) {
        $scope.currentExpression = "0";
        $scope.lastExpression = "";

        $scope.buildExpression = function (operand) {
          $scope.currentExpression += operand.toString();
        }

        $scope.clearExpression = function () {
          $scope.currentExpression = "";
        }

        $scope.evaluateExpression = function () {
          $scope.lastExpression = $scope.currentExpression + "=";
          $scope.currentExpression = eval($scope.currentExpression);
        }

        $scope.removeFromExpression = function () {
          $scope.currentExpression = ($scope.currentExpression).substring(0, ($scope.currentExpression).length-1);
        }
    }
);