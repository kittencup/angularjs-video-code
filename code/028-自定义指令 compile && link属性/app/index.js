var i = 0;

var myApp = angular.module('myApp', [])

    .directive('customTags',function(){
        return {
            restrict : 'ECAM',
            template : '<div>{{user.name}}</div>',
            replace : true,
            compile:function(tElement,tAttrs,transclude){

                tElement.append(angular.element('<div>{{user.name}}{{user.count}}</div>'));

                // 编译阶段...
                console.log('customTags compile 编译阶段...');

                return {
                    // 表示在编译阶段之后，指令连接到子元素之前运行
                    pre:function preLink(scope,iElement,iAttrs,controller){
                        console.log('customTags preLink..')
                    },
                    // 表示在所有子元素指令都连接之后才运行
                    post:function postLink(scope,iElement,iAttrs,controller){

                        iElement.on('click',function(){
                            scope.$apply(function(){
                                scope.user.name = 'click after';
                                scope.user.count = ++i;
                                // 进行一次 脏检查
                            });
                        })

                        console.log('customTags all child directive link..')
                    }
                }
                // 可以直接返回 postLink
                // return postLink function(){
                    // console.log('compile return fun');
                //}
            },
            // 此link表示的就是 postLink
            link:function(){
//                iElement.on('click',function(){
//                    scope.$apply(function(){
//                        scope.user.name = 'click after';
//                        scope.user.count = ++i;
//                        // 进行一次 脏检查
//                    });
//                })
            }
        }
    })

    .directive('customTags2',function(){
        return {
            restrict : 'ECAM',
            replace : true,
            compile:function(){
                // 编译阶段...
                console.log('customTags2 compile 编译阶段...');

                return {
                    // 表示在编译阶段之后，指令连接到子元素之前运行
                    pre:function preLink(){
                        console.log('customTags2 preLink..')
                    },
                    // 表示在所有子元素指令都连接之后才运行
                    post:function postLink(){
                        console.log('customTags2 all child directive link..')
                    }
                }

            }
        }
    })


    .directive('customTags3',function(){

       // return postLink;
       return function(){

       }
    })

    .controller('firstController', ['$scope', function ($scope) {
        $scope.users = [
            {
                id:10,
                name:'张三'
            },
            {
                id:20,
                name:'李四'
            }
        ];
    }]);