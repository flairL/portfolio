$(document).ready(function(){
    
    /*레전드 동영상*/
    $('.legend_list ul li a').click(function(e){
        e.preventDefault();
        
        var lidx = $(this).parent().index();
        var vhtml = $('.vbox ul li').eq(lidx).html();
        
        $('.frame').html(vhtml);
        
        var lTop = $('.frame').offset().top;
        $('html, body').stop().animate({
            scrollTop: lTop -180
        },200);
    });
    

    /*아이콘 동영상*/
    $('.icon_list ul li a').click(function(e){
        e.preventDefault();
        
        var iidx = $(this).parent().index();
        var ivhtml = $('.ivbox ul li').eq(iidx).html();
        
        $('.icon_video').html(ivhtml);
        
        var iTop = $('.icon_video').offset().top;
        $('html, body').stop().animate({
            scrollTop: iTop - 200
        },500);
    });
    
    
    /*스크롤 이벤트*/
    $(window).scroll(function(){
        var scTop = $(this).scrollTop();
        var lxTop = $('.legend_list ul').offset().top;
        console.log(lxTop);
        /*등장효과*/
        if(scTop >= lxTop-200){
            $('.legend_list ul li').css({
                transform: 'translateY(0%)',
                opacity: 1
            });
        }
        
        /*아이콘 이미지 회전효과*/
        var ipos = $('.icons').offset().top;        
        if(scTop > ipos-120 && scTop < ipos){
            $('.icon_pic').stop().animate({
                rotate: '360deg'
            });
        }
    });
    
    /*더보기 아이콘*/
    function moreMove (){
        $('.icon_list>a img').animate({
            right: '-50px'
        },700);
        $('.icon_list>a img').animate({
            right: '-80px'
        },1000);
    }
    
    setInterval(moreMove);
    
    
}); //jQuery