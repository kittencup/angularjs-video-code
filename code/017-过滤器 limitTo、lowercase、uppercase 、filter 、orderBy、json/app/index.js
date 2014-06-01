angular.module('myApp',[])

.factory('Data',function(){

    return {
        message : 'Hello World',
        city : [
            {
                name:'上海11212',
                py : 'shanghai'
            },
            {
                name:'北京',
                py : 'beijing'
            },
            {
                name:'四川',
                py : 'sichuan'
            }
        ]
    };
})

.controller('firstController',function($scope,Data,$filter){
   $scope.data = Data;

   $scope.today = new Date;


   // 过滤器
   var number = $filter('number')(3000);

   var jsonString = $filter('json')($scope.data);

        console.log(jsonString);
        console.log($scope.data);

   $scope.checkName = function(obj){
        if(obj.py.indexOf('h') === -1)
            return false;
        return true;
   }

})

