(function (angular) {
    'use strict;'
    angular.module('moviecat.home_page',[])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider
                .when('/home_page',{
                    templateUrl:'./home_page/view.html',
                    controller:'home_pageControl'
                })
        }])
        .controller('home_pageControl',['$scope',function ($scope) {
            
        }])
})(angular)