

var myApp = angular.module('myApp',[],function($provide){

    // 自定义服务
    $provide.provider('CustomService',function(){

        this.$get = function(){
            return {
                message : 'CustomService Message'
            }
        }
    });

    // 自定义工厂
    $provide.factory('CustomFactory',function(){
        return [1,2,3,4,5,6,7];
    });

    // 自定义服务
    $provide.service('CustomService2',function(){
        return 'aaa';
    })

});

myApp.controller('firstController',function($scope,CustomFactory,CustomService2){
    $scope.name = '张三';

    console.log(CustomFactory);

    console.log(CustomService2);

});

//myApp.service();
//myApp.factory();
