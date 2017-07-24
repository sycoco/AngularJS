(function (angular) {

    'use strict';
    angular.module('moviecat.jsonp',[])
        .service('jsonpSrc',['$window',function ($window) {
            var window = $window,
                document = window.document;
            this.jsonp = jsonp;
            function jsonp(url,param,callback) {
                //https://ai.jd.com/index/hotWords.php?callback=jsonCallBackHotWords&pin=&uuid=1498753652667442892758
                url += '?';
                for( var k in param){
                    url += k +'='+ param[k]+ '&';
                }
                //随机生成回调函数名字
                var callName = 'jsonpComplete_' + (new Date() - 0);
                url += 'callback='+ callName;
                //返回的函数要是全局的所以挂在window对象上
                window[callName] = function (data) {
                    callback(data);
                    document.head.removeChild(script);
                    delete window[callName];
                }
                //生成script标签
                var script = document.createElement('script');
                script.src = url;
                document.head.appendChild(script);
            }
        }])
})(angular)