angular.module('myApp', [])

    .directive('bookList', function () {
        return {
            restrict: 'ECAM',
            controller: function ($scope) {

                // &books
                // $scope.books = $scope.a();

                // =books;
                // $scope.books = $scope.b;
                // $scope.b.push({name:'nodejs'});

                console.log($scope.c);

            },
            // 创建一个有继承链的独立作用域
            // scope:true,

            // 当为对象的时候也会创建一个独立的作用域
            scope:{
                // 将父元素books封装成一个a函数
                // a:'&books'
                // 双向绑定 b = parentBooks属性对应的父作用域的表达式
                // b:'=parentBooks'

                // 使用简单数据类型的方法
                c:'@parentTitle'
            },
            controllerAs:'bookListController',
            template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul></div>',
            replace:true

        }

    })


    .controller('firstController', ['$scope', function ($scope) {
        console.log($scope);

        $scope.books = [
            {
                name: 'php'
            },
            {
                name: 'javascript'
            },
            {
                name: 'java'
            }
        ];

        $scope.title = '张三';

    }]);