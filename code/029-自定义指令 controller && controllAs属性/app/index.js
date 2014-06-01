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
                $scope.addBook = function(){

                }
                this.addBook = function(){
                    // ...
                }
            },
            controllerAs:'bookListController',
            template: '<ul><li ng-repeat="book in books">{{book.name}}</li></ul>',
            replace:true,
            link:function(scope,iEelement,iAttrs,bookListController){
                iEelement.on('click',bookListController.addBook)
            }
        }

    })

    .controller('firstController', ['$scope', function ($scope) {
        // console.log($scope);


    }]);