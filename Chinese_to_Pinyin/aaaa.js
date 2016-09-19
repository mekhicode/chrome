/**
 * Created by mekhitang on 16/5/26.
 */

$(function(){$(".btn").click(function(){

    $.ajax({
        url:"http://localhost:8008/pinyin",
        type:"post",
        data:{temp:$(".qweasd").val()},
        success:function(msg){
            $(".asdqwe").val(msg);
        }
    });

});});
