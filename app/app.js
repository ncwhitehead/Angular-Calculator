angular.module('calcApp', []).controller('CalcController',
  function($scope) {
      $scope.currentExpression = "";
      $scope.lastExpression = "";
      $scope.expressionBottom = false;

      $scope.buildExpression = function (operand) {
        $scope.currentExpression += operand.toString();
      }

      $scope.clearExpression = function () {
        $scope.currentExpression = "";
      }

      $scope.evaluateExpression = function () {
        $scope.lastExpression = $scope.currentExpression + "=";

        try {
          if($scope.currentExpression === "") {
            $scope.currentExpression = eval(0).toString();
          }
          else {
            $scope.currentExpression = eval($scope.currentExpression).toString();
          }
        }
        catch (err) {
          $scope.lastExpression = "Error in evaluating expression.";
        }

        $scope.expressionBottom = true;
      }

      $scope.removeFromExpression = function () {
        $scope.currentExpression = ($scope.currentExpression).substring(0, ($scope.currentExpression).length-1);
      }
  }
);