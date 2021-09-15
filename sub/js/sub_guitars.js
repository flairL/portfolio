$(document).ready(function () {

    $('.guitar_box').mouseenter(function () {
        $(this).children('.guitar_bg').stop().css({
            backgroundColor: 'rgba(218,161,80,0.7)',
            width: '285px',
            height: '285px',
            borderRadius: '50%',
            top: '150px'
        });

    }).mouseleave(function () {
        $(this).children('.guitar_bg').stop().css({
            backgroundColor: '#eee',
            width: '100%',
            height: '100%',
            borderRadius: '30px',
            top: 0
        });
    });






    /*스크롤 이벤트*/
    $(window).scroll(function () {

    var mTop = $('.guitar_menu').offset().top;

    var scTop = $(this).scrollTop();
    console.log(scTop);

    if (scTop > mTop - 80) {
        $('.guitar_menu').css({
            position: 'fixed',
            top: '80px',
            zIndex: '999',
            backgroundColor: '#fff',
            borderBottom: '1px solid #eee'
        });

    } else {
        $('.guitar_menu').css({
            position: 'static',
            backgroundColor: '#eee'
        });
    }
    

    if (scTop > lesTop - 250 && scTop <= sgTop - 400) {
        $('.guitar_menu ul li:first').addClass('on').siblings().removeClass('on');
    } else if (scTop > sgTop - 400 && scTop <= esTop - 400) {
        $('.guitar_menu ul li:nth-child(2)').addClass('on').siblings().removeClass('on');
    } else if (scTop > esTop - 400 && scTop <= dsTop - 400) {
        $('.guitar_menu ul li:nth-child(3)').addClass('on').siblings().removeClass('on');
    } else if (scTop > dsTop - 400 && scTop <= bTop-400) {
        $('.guitar_menu ul li:last').addClass('on').siblings().removeClass('on');
    } else {
        $('.guitar_menu ul li').removeClass('on');
        
        $('.guitar_menu').stop().css({
            position: 'static',
            backgroundColor: '#eee'
        });
    }
 
}); //scroll

    
    var lesTop = $('.lespaul').offset().top;
    var sgTop = $('.sg').offset().top;
    var esTop = $('.es').offset().top;
    var dsTop = $('.designers').offset().top;
    var bTop = $('footer').offset().top;
    
    $('.guitar_menu ul li a').click(function(e){
        e.preventDefault();
        
        var gidx = $(this).parent().index();

        $('html,body').stop().animate({
            scrollTop: $('.guitar_list>div').eq(gidx).offset().top -120
        });
    });
}); //jQuery

