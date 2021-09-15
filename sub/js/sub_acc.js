$(document).ready(function () {

    $('.acc_box').mouseenter(function () {
        $(this).children('.acc_bg').stop().css({
            backgroundColor: 'rgba(218,161,80,0.7)',
            width: '285px',
            height: '285px',
            borderRadius: '50%'
        });

    }).mouseleave(function () {
        $(this).children('.acc_bg').stop().css({
            backgroundColor: '#eee',
            width: '100%',
            height: '100%',
            borderRadius: '30px'
        });
    });






    /*스크롤 이벤트*/
    $(window).scroll(function () {

        var mTop = $('.acc_menu').offset().top;

        var scTop = $(this).scrollTop();
        console.log(scTop);

        if (scTop > mTop - 80) {
            $('.acc_menu').css({
                position: 'fixed',
                top: '80px',
                zIndex: '999',
                backgroundColor: '#fff',
                borderBottom: '1px solid #eee'
            });

        } else {
            $('.acc_menu').css({
                position: 'static',
                backgroundColor: '#eee'
            });
        }


        if (scTop > strTop - 250 && scTop <= casTop - 400) {
            $('.acc_menu ul li:first').addClass('on').siblings().removeClass('on');
        } else if (scTop > casTop - 400 && scTop <= staTop - 400) {
            $('.acc_menu ul li:nth-child(2)').addClass('on').siblings().removeClass('on');
        } else if (scTop > staTop - 400 && scTop <= capTop - 400) {
            $('.acc_menu ul li:nth-child(3)').addClass('on').siblings().removeClass('on');
        } else if (scTop > capTop - 400 && scTop <= picTop - 400) {
            $('.acc_menu ul li:nth-child(4)').addClass('on').siblings().removeClass('on');
        } else if (scTop > picTop - 400 && scTop <= carTop - 400) {
            $('.acc_menu ul li:nth-child(5)').addClass('on').siblings().removeClass('on');
        } else {
            $('.acc_menu ul li').removeClass('on');

            $('.acc_menu').stop().css({
                position: 'static',
                backgroundColor: '#eee'
            });
        }

    }); //scroll


    var strTop = $('.straps').offset().top;
    var casTop = $('.cases').offset().top;
    var staTop = $('.stands').offset().top;
    var capTop = $('.capos').offset().top;
    var picTop = $('.picks').offset().top;
    var carTop = $('.care').offset().top;
    var bTop = $('footer').offset().top;

    $('.acc_menu ul li a').click(function (e) {
        e.preventDefault();

        var gidx = $(this).parent().index();
        var mmove = $('.acc_list>div').eq(gidx).offset().top;
        $('html,body').stop().animate({
            scrollTop: mmove - 120
        },300);
    });
}); //jQuery
