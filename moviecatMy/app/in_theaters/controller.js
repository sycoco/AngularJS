(function (angular) {
    'use strict';
    angular.module('moviecat.in_theaters',[])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider
                .when('/in_theaters',{
                    templateUrl:'./in_theaters/view.html',
                    controller:'in_theatersCtrl'
                })
        }])
        .controller('in_theatersCtrl',['$scope','$http',function ($scope,$http) {
            $http({
                method: 'GET',
                url: './in_theaters/data.json'
            }).then(function successCallback(response) {
               $scope.data = response.data;
            }, function errorCallback(response) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        }])
})(angular)