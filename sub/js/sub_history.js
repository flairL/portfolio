// Gibson sub_history

$(document).ready(function(){
    
    /*등장효과*/
    $(window).scroll(function(){
        var scTop = $(this).scrollTop();
        console.log(y1top);
        
        if(scTop >= y1top-200 && scTop < y2top-200){
            $('.year1').css({
                transform: 'translateY(0)',
                opacity: 1
            });
        }else if(scTop >= y2top-200 && scTop < y3top-200){
            $('.year2').css({
                transform: 'translateY(0)',
                opacity: 1
            });
        }else if(scTop >= y3top-200 && scTop < y4top-200){
            $('.year3').css({
                transform: 'translateY(0)',
                opacity: 1
            });
        }else if(scTop >= y4top-200 && scTop < y5top-200){
            $('.year4').css({
                transform: 'translateY(0)',
                opacity: 1
            });
        }else if(scTop >= y5top-200 && scTop < y6top-200){
            $('.year5').css({
                transform: 'translateY(0)',
                opacity: 1
            });
        }else if(scTop >= y6top-200 && scTop < y7top-200){
            $('.year6').css({
                transform: 'translateY(0)',
                opacity: 1
            });
        }else if(scTop >= y7top-200 && scTop < y8top-200){
            $('.year7').css({
                transform: 'translateY(0)',
                opacity: 1
            });
        }else if(scTop >= y8top-200 && scTop < y9top-200){
            $('.year8').css({
                transform: 'translateY(0)',
                opacity: 1
            });
        }else if(scTop >= y9top-200 && scTop < nowtop-200){
            $('.year9').css({
                transform: 'translateY(0)',
                opacity: 1
            });
        }else if(scTop >= nowtop-200){
            $('.now h4').css({
                transform: 'translateY(0)',
                opacity: 1
            });
        }else{
            $('.year').css({
                transform: 'translateY(-50%)',
                opacity: 0
            });
        }
    });
    
    var y1top = $('.year1').offset().top;
    var y2top = $('.year2').offset().top;
    var y3top = $('.year3').offset().top;
    var y4top = $('.year4').offset().top;
    var y5top = $('.year5').offset().top;
    var y6top = $('.year6').offset().top;
    var y7top = $('.year7').offset().top;
    var y8top = $('.year8').offset().top;
    var y9top = $('.year9').offset().top;
    var nowtop = $('.now').offset().top;
    
}); //jQuery
