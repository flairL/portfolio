$(document).ready(function(){
    
    /*등장효과*/
    var m1top = $('.maintain01').offset().top;
    var m2top = $('.maintain02').offset().top;
    var m3top = $('.maintain03').offset().top;
    var m4top = $('.maintain04').offset().top;
    var m5top = $('.maintain05').offset().top;
    
    $(window).scroll(function(){
        var scTop = $(this).scrollTop();
        
        if(scTop >= m1top-200 && scTop < m2top-200){
            $('.maintain01 .left').css({
                transform: 'translateX(0)',
                opacity: 1
            });
            $('.maintain01 .right').css({
                transform: 'translateX(0)',
                opacity: 1
            });
        }else if(scTop >= m2top-200 && scTop < m3top-200){
            $('.maintain02 .left').css({
                transform: 'translateX(0)',
                opacity: 1
            });
            $('.maintain02 .right').css({
                transform: 'translateX(0)',
                opacity: 1
            });
        }else if(scTop >= m3top-200 && scTop < m4top-200){
            $('.maintain03 .left').css({
                transform: 'translateX(0)',
                opacity: 1
            });
            $('.maintain03 .right').css({
                transform: 'translateX(0)',
                opacity: 1
            });
        }else if(scTop >= m4top-200 && scTop < m5top-200){
            $('.maintain04 .left').css({
                transform: 'translateX(0)',
                opacity: 1
            });
            $('.maintain04 .right').css({
                transform: 'translateX(0)',
                opacity: 1
            });
        }else if(scTop >= m5top-200){
            $('.maintain05 .left').css({
                transform: 'translateX(0)',
                opacity: 1
            });
            $('.maintain05 .right').css({
                transform: 'translateX(0)',
                opacity: 1
            });
        }
    });
    
    
    /*비디오 클릭시 영상 변화*/
    $('.video_wrap ul li a').click(function(e){
        e.preventDefault();
        
        var sidx = $(this).parent().index();
        var vidx = $('.eplist ul li').eq(sidx).html();
        
        console.log(vidx);
        $('.video_b').html(vidx);
    });
    
    /*비디오 썸네일 호버*/
    $('.video_wrap ul li').hover(function(){
        $(this).children('a').children('p').stop().animate({
            opacity: 0
        },300);
        $(this).children('a').children('img').stop().fadeIn(300);
            
    },function(){
        $(this).children('a').children('p').stop().animate({
            opacity: 1
        },300);
        $(this).children('a').children('img').stop().fadeOut(300);
    },300);
    
    /*비디오 more 버튼*/
    function moreMove (){
        $('.m_more img').animate({
            right: '50'
        },400);
        $('.m_more img').animate({
            right: '15'
        },1000);
    }
    
    setInterval(moreMove);
    
    
    
}); //jQuery