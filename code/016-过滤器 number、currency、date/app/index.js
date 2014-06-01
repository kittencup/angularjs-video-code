angular.module('myApp',[])

.factory('Data',function(){

    return {
        message : '共享的数据'
    };
})

.controller('firstController',function($scope,Data,$filter){
   $scope.data = Data;

   $scope.today = new Date;

})

