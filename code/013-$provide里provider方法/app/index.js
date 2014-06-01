

var myApp = angular.module('myApp',[],function($provide){


    // 自定义服务
    $provide.provider('CustomService',function(){

        this.$get = function(){
            return {
                message : 'CustomService Message'
            }
        }
    });

    $provide.provider('CustomService2',function(){

        this.$get = function(){
            return {
                message : 'CustomService2 Message'
            }
        }
    });
});

myApp.controller('firstController',function(CustomService,$scope,CustomService2){
    $scope.name = '张三';

    console.log(CustomService2);
});


