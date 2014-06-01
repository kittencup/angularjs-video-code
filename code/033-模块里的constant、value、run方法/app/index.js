angular.module('myApp',[],['$provide',function($provide){
        console.log('config');
    // $provide.factory
    // $provide.service

    // $provide.constant
    // $provide.value;

}])

.config(function(APIKEY){
    console.log(APIKEY);
        console.log('config');
})

    // 在config之后controller等其他服务之前。。
.run(function(){
    console.log('run');
})
    // 它只是可以注入任何方法
.constant('APIKEY','xxxx')

    // 只能注入controller...service factory
.value('vension','1.0.0')

.controller('firstController',['APIKEY','vension',function(APIKEY,vension){
    console.log(APIKEY);
        console.log(vension);
        console.log('controller');


}]);
