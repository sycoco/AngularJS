(function (angular) {

    'use strict';
    angular.module('moviecat.movielist',[])
        .config(['$routeProvider',function ($routeProvider) {
            $routeProvider
                .when('/:movielist/:curPage?',{
                    templateUrl:'./movielist/view.html',
                    controller:'movielistCtrl'
                })
        }])
        .controller('movielistCtrl',['$scope','$http','jsonpSrc','$routeParams','$route',function ($scope,$http,jsonpSrc,$routeParams,$route) {
            var url = 'https://api.douban.com/v2/movie/'+$routeParams.movielist;
            //分页功能
            var pageSize = 5,
                page = 0;
            //获取地址栏当前页码

            page = $routeParams.curPage || 1;
            $scope.page = page;
            $scope.goPage = function (page) {
                //页码边界
                if( page < 1 || page >  $scope.totalpage){
                    return;
                }
                //修改路由参数的值
                $route.updateParams({curPage: page});
            }
            jsonpSrc.jsonp(url,{
                start:(page-1)*pageSize,
                count:pageSize
            },function (data) {
                $scope.data = data;

                console.log(data);
                //总页数
                $scope.totalpage = Math.ceil(data.total/pageSize);
                $scope.$apply();
            })
        }])
})(angular)