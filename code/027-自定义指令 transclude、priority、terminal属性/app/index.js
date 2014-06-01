var myApp = angular.module('myApp', [])

    .directive('customTags', function () {
        return {
            restrict: 'ECAM',
            template:'<div>新数据 <span ng-transclude></span></div>',
            replace: true,
            transclude:true
        }
    })

    .directive('customTags2', function () {
        return {
            restrict: 'ECAM',
            template:'<div>2</div>',
            replace: true,
            priority:-1
        }
    })

    .directive('customTags3', function () {
        return {
            restrict: 'ECAM',
            template:'<div>3</div>',
            replace: true,
            priority: 0,
            // 小于0的directive 都不会执行
            terminal:true
        }
    })

    .controller('firstController', ['$scope', function ($scope) {
        $scope.name = '张三';
    }]);