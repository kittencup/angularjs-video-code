    angular.module('product', [])

    .service('productData', function () {
        return [
            {
                id:3333,
                name:'iphone',
                price : 5400
            },
            {
                id:885,
                name:'ipad',
                price : 3420
            },
            {
                id:980,
                name:'imac',
                price : 15400
            },
            {
                id:1212,
                name:'ipad air',
                price : 2340
            },
            {
                id:3424,
                name:'ipad mini',
                price : 2200
            }
        ];
    })

    .controller('productController', function ($scope,productData) {
        $scope.productData = productData;

        $scope.orderType = 'id';

        $scope.order = '-';

        $scope.changeOrder = function(type){

            $scope.orderType = type;

            if($scope.order === ''){
                $scope.order = '-';
            }else{
                $scope.order = '';
            }
        }
    });