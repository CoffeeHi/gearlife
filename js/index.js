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
               /* angular.forEach(angular.element('.banner ul li img'), function (item) {
                    //console.log(item.src)
                    var jqItem = angular.element(item);
                    if(jqItem.next() === angular.element(event.target).parent()){
                        jqItem.css('width','100%');
                    }else{
                        jqItem.removeAttr('width');
                    }
                });*/
                angular.forEach(angular.element('.banner ul li img'), function (item) {
                    //console.log(item.src)
                    //console.log(angular.element(event.target).parent().prev()[0].currentSrc)
                    if(item.src === angular.element(event.target).parent().prev()[0].currentSrc){
                        angular.element(item).css('width','100%');
                    }else{
                        angular.element(item).css('width','');
                    }
                });
                console.log('span_success ' + $scope.extend)
            }else if(event.target.nodeName === 'A'){
                console.log('a_success')
                $scope.extend = angular.element('.banner ul li').index(angular.element(event.target).parent()) + 1;
                /*angular.forEach(angular.element('.banner ul li img'), function (item) {
                    var jqItem = angular.element(item);
                    //console.log(item.src)
                    if(jqItem.next() === angular.element(event.target)){
                        jqItem.css('width','100%');
                    }else{
                        jqItem.removeAttr('width');
                    }
                });*/
                angular.forEach(angular.element('.banner ul li img'), function (item) {
                    if(item.src === angular.element(event.target).prev()[0].currentSrc){
                        angular.element(item).css('width','100%');
                    }else{
                        angular.element(item).css('width','');
                    }
                });
            }
        }
    }])
