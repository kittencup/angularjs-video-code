angular.module('myApp', [])
    // 数据
    .factory('Data', function () {
        return [
            {
                title: 'no1',
                content: 'no1-content'
            },
            {
                title: 'no2',
                content: 'no2-content'
            },
            {
                title: 'no3',
                content: 'no3-content'
            }
        ];
    })
    // 控制器
    .controller('firstController', ['$scope','Data',function ($scope,Data) {
        $scope.data = Data;
    }])

    .directive('kittencupGroup',function(){
        return {
            restrict:'E',
            replace:true,
            template:'<div class="panel-group" ng-transclude></div>',
            transclude:true,
            controllerAs:'kittencupGroupContrller',
            controller:function(){
                this.groups = [];

                this.closeOtherCollapse = function(nowScope){
                    angular.forEach(this.groups,function(scope){
                        if(scope !== nowScope){
                            scope.isOpen = false;
                        }
                    })
                }
            }
        }
    })

    .directive('kittencupCollapse',function(){
        return {
            restrict:'E',
            replace:true,
            require:'^kittencupGroup',
            templateUrl:'app/tmp/kittencupCollapse.html',
            scope:{
                heading:'@'
            },
            link:function(scope,element,attrs,kittencupGroupContrller){
                scope.isOpen = false;

                scope.changeOpen = function(){
                    scope.isOpen = !scope.isOpen;

                    kittencupGroupContrller.closeOtherCollapse(scope);
                }


                kittencupGroupContrller.groups.push(scope);
            },
            transclude:true
        }
    })