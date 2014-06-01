

var firstController = function($scope){

    $scope.name = '张三';
    $scope.data = {
        name :'李四',
        count:20
    }
    $scope.count = 0;

    // 监听一个model 当一个model每次改变时 都会触发第2个函数
    $scope.$watch('name',function(newValue,oldValue){

        ++$scope.count;

        if($scope.count > 30){
            $scope.name = '已经大于30次了';
        }
    });


    $scope.$watch('data',function(){

    },true)
}