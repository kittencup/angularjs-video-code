angular.module('myApp', [])

    .directive('bookList', function () {
        return {
            restrict: 'ECAM',
            controller: function ($scope) {
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

                this.addBook = function(){

                    $scope.$apply(function(){
                        $scope.books.push({
                            name:'Angularjs'
                        })
                    });
                }
            },
            controllerAs:'bookListController',
            template: '<div><ul><li ng-repeat="book in books">{{book.name}}</li></ul><book-add></book-add></div>',
            replace:true

        }

    })

    .directive('bookAdd',function(){
        return {
            restrict:'ECAM',
            require:'^bookList',
            template:'<button type="button">添加</button>',
            replace:true,
            link:function(scope,iElement,iAttrs,bookListController){
                iElement.on('click',bookListController.addBook);
            }
        }
    })

    .controller('firstController', ['$scope', function ($scope) {
        // console.log($scope);


    }]);