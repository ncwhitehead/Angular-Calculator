angular.module('calcApp', []).controller('CalcController',
    function($scope) {
        $scope.currentExpression = "";

        $scope.buildExpression = function (operand) {
          $scope.currentExpression += operand.toString();
        }

        $scope.clearExpression = function () {
          $scope.currentExpression = "";
        }

        $scope.evaluateExpression = function () {
          $scope.currentExpression = eval($scope.currentExpression);
        }

        $scope.removeFromExpression = function () {
          $scope.currentExpression = ($scope.currentExpression).substring(0, ($scope.currentExpression).length-1);
        }
    }
);