angular.module('myApp',[])

.factory('Data',function(){
    // this.$get = function(){}
    return {
        message : '共享的数据'
    };
})

.controller('firstController',function($scope,Data){
   $scope.data  = {
       name : '张三'
   };

   $scope.Data = Data;
})

.controller('secondController',function($scope,Data){
   $scope.data = $scope.$$prevSibling.data;

   $scope.Data = Data;
});