$(document).ready(function(){
    
    /*지도 보이게 하기*/
    $('table button').click(function(){

        var bnum = $(this).attr('id').slice(3,4);
        
        $('.maps iframe').eq(bnum).addClass('on').siblings().removeClass('on');
        
        var mTop = $('.maps').offset().top;
        console.log(mTop);
        
        $('html,body').stop().animate({
            scrollTop: mTop-200
        }, 300);
    });
    
}); //jQuery