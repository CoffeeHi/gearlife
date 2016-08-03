/**
 * Created by 陈祥 on 2016/8/2.
 */

/*
$(function () {
    $(".banner .sub .intro").click(function () {

        var index = $(this).parent().index();
        console.log(index)
        //console.log($(this).parent()[0].tagName)
        //console.log($(this).parent().children().eq(index))
        $(this).parent().toggleClass('extend').animate({duration:1000, easing:'easeOutBounce'})
        //alert($(this).parent().parent('ul').index()+1);
        //var a = $(this).parent(".sub")
        //console.log(a)

    })
})*/

angular.module('index',[])
    .controller('bannerController',['$scope', function ($scope) {
        $scope.getExtend = function (event) {
            if(event.target.nodeName === 'SPAN'){
                console.log('span_success ' + $scope.extend)

                $scope.extend = angular.element('.banner ul li').index(angular.element(event.target).parent().parent()) + 1;

                console.log('span_success ' + $scope.extend)
            }else if(event.target.nodeName === 'A'){
                console.log('a_success')
                $scope.extend = angular.element('.banner ul li').index(angular.element(event.target).parent()) + 1;
            }
        }
    }])
