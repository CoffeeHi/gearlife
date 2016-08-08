/**
 * Created by 陈祥 on 2016/8/8.
 */
var aMailService = angular.module('myApp',['ngRoute'], function ($provide) {
    $provide.service('CustomService2', function () {
        console.log($routeProvider)
    })
});

aMailService
    .controller('RestaurantController',['$scope', function ($scope) {
    $scope.directory = [
        {name:'name1',cuisine:'BBQ'},
        {name:'name2',cuisine:'Salads'},
        {name:'name3',cuisine:'Seafood'}
    ];
    $scope.selectRestaurant = function (row) {
        $scope.selectedRow = row;
    }
}])
    .controller('ListController',['$scope', function ($scope) {
        $scope.messages = messages;
    }])
    .controller('DetailController',['$scope','$routeParams', function ($scope,$routeParams) {
        $scope.message = messages[$routeParams.id];
    }])
    .directive('ngbkFocus', function () {
        //restrict : 'ECAM',
        return {
            link: function (scope,element,attrs,controller) {
                element[0].focus();
            }
        }
    })
    .controller('SomeController',['$scope', function (scope) {
        scope.message = { text : 'nothing clicked yet'};

        scope.clickUnfocused = function () {
            scope.message.text = 'unfocused button clicked';
        };

        scope.clickFocused = function () {
            scope.message.text = 'focus button clicked';
        }
    }])

/*function emailRouteConfig($routeProvider){
    $routeProvider.
        when('/',{
            controller: 'ListController',
            templateUrl: 'test/list.html'
        })
        .when('/view:id',{
            controller: 'DetailController',
            templateUrl: 'test/detail.html'
        })
        .otherwise({
            redirectTo: '/'
        })
}
aMailService.config(emailRouteConfig);*/
aMailService.config(function ($routeProvider){
    console.log($routeProvider);
    $routeProvider.
        when('/',{
            controller: 'ListController',
            templateUrl: 'test/list.html'
        })
        .when('/view/:id',{
            controller: 'DetailController',
            templateUrl: 'test/detail.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

messages = [
    {
        id: 0,
        sender: '12@sina.com',
        subject: 'Hi,baby!',
        date: 'Dec 7, 2013 12:32:00',
        recipients: ['34@sina.com'],
        message: 'Hey,we should get together for lunch sometime and catch up.'+
            'There are many things we should collaborate on this year.'
    },
    {
        id: 1,
        sender: '56@sina.com',
        subject: 'Hi,baby!',
        date: 'Jun 7, 2016 12:32:00',
        recipients: ['78@sina.com'],
        message: 'Hey,we should get together for fuck sometime and catch up.'+
            'There are many things we should collaborate on this year.'
    }
];

