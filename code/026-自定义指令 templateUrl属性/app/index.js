var myApp = angular.module('myApp', [])

    .directive('customTags', function () {
        return {
            restrict: 'ECAM',
            templateUrl: 'tmp/other.html',
            replace: true
        }
    })

    .directive('customTags2', function () {
        return {
            restrict: 'ECAM',
            templateUrl: 'customTags2',
            replace: true
        }
    })

    .controller('firstController', ['$scope', function ($scope) {
        $scope.name = '张三';
    }]);