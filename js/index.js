/**
 * Created by 陈祥 on 2016/8/2.
 */

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
})