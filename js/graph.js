angular.module("MyApp", ["chart.js"]).controller("LineCtrl", function ($scope) {

  console.log('dziala');
  
  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40]
  ];
});