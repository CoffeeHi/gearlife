/**
 * Created by 陈祥 on 2016/8/6.
 */
require.config({

    //baseUrl: "js/lib",

    paths: {
        "test2": "test/test2",
        "test1": "test/test1"
    }
});

require(['test2', 'test1'], function (a,b){

    // some code here

});