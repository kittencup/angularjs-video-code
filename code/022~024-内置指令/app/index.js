var myApp = angular.module('myApp', [])

    .controller('firstController', function ($scope) {
        $scope.status = false;

        $scope.changeStatus = function (event) {
            // 通过element转换成 jquery对象
            angular.element(event.target).html('切换状态为:' + $scope.status);

            $scope.status = !$scope.status;

        }

        $scope.defaultStyle = {
            color: 'red',
            'margin-top': '50px'
        };

        $scope.src = 'http://www.angularjs.org/img/AngularJS-large.png';
    })