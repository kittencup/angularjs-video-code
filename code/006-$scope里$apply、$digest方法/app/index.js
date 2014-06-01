

var firstController = function($scope){

    $scope.date = new Date();

//    setInterval(function(){
//        // 这里虽然变 但是并没有触发 脏检查
//        $scope.date = new Date();
//
//    },1000)

    setInterval(function(){
        $scope.$apply(function(){
            $scope.date = new Date();
            //....会去触发脏检查
        })
    },1000)


    // 触发一次脏检查
}
