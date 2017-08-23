angular.module('todolist', [])
  .controller('TodoController',['$scope', function($scope){
    $scope.tasks = [];

    // add a task to the todo list
    $scope.addTask = function(task){
      $scope.tasks.push({ done: false, data: task });
      $scope.todoinput1 = "";
    };

      // function to remove a task
    $scope.remove = function(task){
      var val = $scope.tasks.indexOf(task);
      $scope.tasks.splice(val, 1);
    };
  }]);
