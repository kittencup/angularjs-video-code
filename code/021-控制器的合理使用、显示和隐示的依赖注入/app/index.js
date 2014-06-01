var myApp = angular.module('myApp', [], ['$filterProvider', '$provide', '$controllerProvider', function (a, b, c) {
    console.log(a, b, c);
}])

.
factory('CustomService', ['$window', function (a) {
    console.log(a);
}])

// 隐示的依赖注入
    .controller('firstController', function ($scope, CustomService) {
        console.log(CustomService);
    })

// 显示的依赖注入
    .controller('secondController', ['$scope', '$filter', function (a, b) {
        console.log(b('json')([1, 2, 3, 4, 5]));
    }]);

function otherController(a) {
    console.log(a);
}

otherController.$inject = ['$scope'];