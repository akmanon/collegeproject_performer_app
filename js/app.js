var app = angular.module("MyApp", ["ngRoute","chart.js","firebase"]);
        app.config(function($routeProvider,$locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'myCtrl'
            })
            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'myCtrl'
            })
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutCtrl'
            })
            .when('/form', {
                templateUrl : 'pages/form.html',
                controller  : 'formCtrl'
            })
            .when('/graph', {
                templateUrl : 'pages/graph.html',
                controller  : 'LineCtrl'
            })
            .when('/getintouch', {
                templateUrl : 'pages/getintouch.html',
                controller  : 'getintouchCtrl'
            })
            .when('/seefeedback', {
                templateUrl : 'pages/seefeedback.html',
                controller  : 'seeCtrl'
            })

        });
        app.controller('myCtrl', function($scope,$location) {
            $scope.firstname = "John";
            $scope.lastname = "Doe";
            $scope.path = $location.path();

        });

         app.factory('MyService', function() {
                var value = [];
                var value1 = "";
              return {                  
                  getValue: function() {
                    return value;
                  },
                  setValue: function(val) {
                        value.push(String(val));  
                  },
                  getValue1: function() {
                    return value1;
                  },
                  setValue1: function(val) {
                        value1 = val;
                  }
                };
            });
  
        app.controller('formCtrl', function($scope, $rootScope, $location, MyService) {
            $scope.id = "VU4F15160";
            $scope.idno ="";
            $scope.res = $scope.id.concat($scope.idno);
            $scope.onselect = "true";
            $scope.select = "false";
            $scope.label22 = "ashish";
            $scope.sem1 = "false";
            $scope.sem2 = "false";
            $scope.sem3 = "false";
            $scope.sem4 = "false";
            $scope.sem5 = "false";
            $scope.sem6 = "false";
            $scope.sem7 = "false";
            $scope.sem8 = "false";
            $scope.selectsem = function (sel) 
                        {   
                            $scope.res = $scope.id.concat($scope.idno);
                            $scope.onselect = "false";
                            $scope.select = "true";
                            MyService.setValue1($scope.res);
                             if ($scope.sel == "sem1") {
                                 $scope.sem1 = "true";
                                 $scope.sem2 = "false";
                                 $scope.sem3 = "false";
                                 $scope.sem4 = "false";
                                 $scope.sem5 = "false";
                                 $scope.sem6 = "false";
                                 $scope.sem7 = "false";
                                 $scope.sem8 = "false";
                             }
                             else if ($scope.sel == "sem2") {
                                $scope.sem1 = "true";
                                $scope.sem2 = "true";
                                $scope.sem3 = "false";
                                $scope.sem4 = "false";
                                $scope.sem5 = "false";
                                 $scope.sem6 = "false";
                                 $scope.sem7 = "false";
                                 $scope.sem8 = "false";
                             }
                             else if ($scope.sel == "sem3") {
                                $scope.sem1 = "true";
                                $scope.sem2 = "true";
                                $scope.sem3 = "true";
                                $scope.sem4 = "false";
                                $scope.sem5 = "false";
                                 $scope.sem6 = "false";
                                 $scope.sem7 = "false";
                                 $scope.sem8 = "false";
                             }
                             else if ($scope.sel == "sem4") {
                                $scope.sem1 = "true";
                                $scope.sem2 = "true";
                                $scope.sem3 = "true";
                                $scope.sem4 = "true";
                                $scope.sem5 = "false";
                                $scope.sem6 = "false";
                                $scope.sem7 = "false";
                                $scope.sem8 = "false";
                             }
                              else if ($scope.sel == "sem5") {
                                $scope.sem1 = "true";
                                $scope.sem2 = "true";
                                $scope.sem3 = "true";
                                $scope.sem4 = "true";
                                $scope.sem5 = "true";
                                $scope.sem6 = "false";
                                $scope.sem7 = "false";
                                $scope.sem8 = "false";
                             }
                              else if ($scope.sel == "sem6") {
                                $scope.sem1 = "true";
                                $scope.sem2 = "true";
                                $scope.sem3 = "true";
                                $scope.sem4 = "true";
                                $scope.sem5 = "true";
                                $scope.sem6 = "true";
                                $scope.sem7 = "false";
                                $scope.sem8 = "false";
                             }
                              else if ($scope.sel == "sem7") {
                                $scope.sem1 = "true";
                                $scope.sem2 = "true";
                                $scope.sem3 = "true";
                                $scope.sem4 = "true";
                                $scope.sem5 = "true";
                                $scope.sem6 = "true";
                                $scope.sem7 = "true";
                                $scope.sem8 = "false";
                             }
                              else if ($scope.sel == "sem8") {
                                $scope.sem1 = "true";
                                $scope.sem2 = "true";
                                $scope.sem3 = "true";
                                $scope.sem4 = "true";
                                $scope.sem5 = "true";
                                $scope.sem6 = "true";
                                $scope.sem7 = "true";
                                $scope.sem8 = "true";
                             }
                        };
                        
            $scope.go = function (path) 
                        {
                            console.log("ashish"); 
                        
                            if ($scope.sem1 == "true") {
                                MyService.setValue($scope.label1);
                             }
                             if ($scope.sem2 == "true") {
                                MyService.setValue($scope.label2);
                             }
                             if ($scope.sem3 == "true") {
                                MyService.setValue($scope.label3);
                             }
                             if ($scope.sem4 == "true") {
                                MyService.setValue($scope.label4);
                             }
                             if ($scope.sem5 == "true") {
                                MyService.setValue($scope.label4);
                             }
                             if ($scope.sem6 == "true") {
                                MyService.setValue($scope.label4);
                             }
                             if ($scope.sem7 == "true") {
                                MyService.setValue($scope.label4);
                             }
                             if ($scope.sem8 == "true") {
                                MyService.setValue($scope.label4);
                             }
                            
                            $rootScope.$broadcast('increment-value-event');
                            $location.path( path );
                        };
                        

        });
        app.controller("LineCtrl", function ($scope, MyService) {
          $scope.id = MyService.getValue1();
          console.log($scope.id);
          $scope.image1= "http://pvppmis.net/student/photo/";

          $scope.image2= ".jpg";
          $scope.image3 = $scope.image1.concat($scope.id);
          console.log($scope.image);
          $scope.image = $scope.image3.concat($scope.image2);
          $scope.value = MyService.getValue();
          $scope.points = $scope.value;
          $scope.poin = [6.5, 5.9, 8.0, 8.1, 5.6] ;
          $scope.colors = ['#45b7cd'];
          $scope.labels = ["Sem-1", "Sem-2", "Sem-3", "Sem-4", "Sem-5", "Sem-6", "Sem-7", "Sem-8"];
          $scope.data = [
            $scope.points
          ];
        });
        app.controller("aboutCtrl", function ($scope, MyService, $location) {
            $scope.value = MyService.getValue();
        });
        app.controller("getintouchCtrl", function ($scope, $firebase) {
            $scope.email = 'kashish979@gmail.com';
            $scope.sucess = "true";
            var e = $scope.email;
            var fireRef = new Firebase('https://collegeproject-7fe5b.firebaseio.com/');
            $scope.feedback = $firebase(fireRef).$asArray();
            $scope.submitForm = function() {
                            var userName = $scope.name1; 
                            var userEmail = $scope.email1; 
                            var userMessage = $scope.message1;
                            console.log('Submitted');
                            $scope.feedback.$add({
                               Name: userName,
                               Email: userEmail,
                               Message: userMessage
                           })
                            $scope.sucess ="false";

              }

        }); 
        app.controller("seeCtrl", function ($scope,$firebase) {
            var fireRef = new Firebase('https://collegeproject-7fe5b.firebaseio.com/');
            $scope.feedback = $firebase(fireRef).$asArray();
        });