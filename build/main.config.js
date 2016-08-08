/**
 * Created by 陈祥 on 2016/8/6.
 */
require.config({

    //baseUrl: "js/lib",

    paths: {
        "test2": "test/test2",
        "test1": "test/test1",
        'an':'../vendor/angular/angularjs',
        'angular-route':'../vendor/angular/angular-route/angular-route',
        'angular':'angular'
    }
});

require(['an','angular-route','angular'], function (a,b){

    // some code here

});