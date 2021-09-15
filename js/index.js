//Gibson main.js

$(document).ready(function () {

    /*메인 이미지 효과*/
    $('main').css({
        transform: 'scale(1)',
        transition: 'all .4s',
        opacity: '1'
    });
    
    /*마우스 아이콘*/
    function mmove(){
        var MouseDown = $('.mouse').animate({
            bottom: '50'
        }, 800, 'easeInOutCirc');
        
        var MouseUp = $('.mouse').animate({
            bottom: '0'
        }, 1000, 'easeInOutCirc');
        
    }
    setInterval(mmove);
    
    
    /*비디오 박스 바깥에서 들어오기 효과*/
    function videoSet() {
        $('.video_inner').css({
            left: '-150%'
        });
        $('.video_txt').css({
            bottom: 300,
            opacity: 0
        });
    }
    videoSet();

    

    /*마우스 스크롤*/
    $(window).scroll(function () {

        var scTop = $(this).scrollTop();
        console.log(scTop);


        if (scTop >= 1760) {
            $('.musicians_img ul li:nth-of-type(2n-1)').css({
                transform: 'translateY(0)',
                opacity: 1
            });
            $('.musicians_img ul li:nth-of-type(2n)').css({
                transform: 'translateY(0)',
                opacity: 1
            });
        } else {
            $('.musicians_img ul li:nth-of-type(2n-1)').css({
                transform: 'translateY(-100%)',
                opacity: 0
            });
            $('.musicians_img ul li:nth-of-type(2n)').css({
                transform: 'translateY(100%)',
                opacity: 0
            });
        }


        var musTop = $('.musicians').offset().top;
        console.log('음악가들 위치' + musTop);

        /*배너 이미지*/
        var rentGuitar = $('.musicians_btn').offset().top - 400;
        console.log('기타배너' + rentGuitar);

        if (scTop >= rentGuitar) {
            $('.rent_guitar').animate({
                opacity: 1,
                right: 0,
                top: '150'
            }, 1200, 'easeOutBounce');

            function rentNotes() {
                $('.rent_notes').animate({
                    right: '-400px',
                    rotate: '-20deg'
                }, 2000, 'easeInOutCirc');

                $('.rent_notes').animate({
                    right: '-100px',
                    rotate: 0
                }, 2000, 'easeInOutCirc');
            }
            var rentEffect = setInterval(function () {
                rentNotes();
            }, 2000);

        } //렌트 이미지 아이콘 효과

        /*배너 기타 호버*/
        $('.rent_guitar').hover(function () {
            $(this).css({
                rotate: '-60deg',
                transition: 'all .3s'
            });
        }, function () {
            $(this).css({
                rotate: '0',
                transition: 'all .3s'
            });
        });


        /*비디오*/
        var videoOffset = $('.video_inner').offset().top - 400;

        if (scTop >= videoOffset) {
            $('.video_inner').animate({
                left: 0
            }, 1000, 'easeInOutCirc');
            $('.video_txt').animate({
                bottom: '-100',
                opacity: 1
            }, 1200, 'easeInOutCirc');
        }


    }); //window scroll


    /*메인 글씨 나타나기 효과*/
    function MainSet() {
        $('.main_txt').animate({
            opacity: 0,
            bottom: '200'
        });
    } //.main_txt 셋팅

    MainSet();
    $('.main_txt').animate({
        opacity: 1,
        bottom: 0
    }, 800); //.main_txt 등장


    /////.guitars slide/////////////////////////////////////////


    /*기타 버튼(5개) 클릭*/

    /*$('.btns ul li').click(function(){
         $(this).addClass('btn_on',300).siblings().removeClass();
        
        var idx = $(this).index();
        
        var cname = 'num' +(idx + 1);
        
        $('.guitar_img a img.'+cname).addClass('guitar_on').parent().siblings().children('img').removeClass('guitar_on');
        
        $('.guitar_txt ul li').eq(idx).addClass('txt_on').siblings().removeClass();
        
        var gidx = $('.guitar_img a').eq(idx);
        
    });*/ //.btns 버튼 클릭



    /*이전 버튼 클릭*/

    $('#prev').click(function (e) {
        e.preventDefault();

        $('.guitar_img a:last').prependTo('.guitar_img'); //기타 마지막 이미지 맨 앞으로 이동

        var gidx = $('.guitar_img a').eq(2);
        $(gidx).children('img').addClass('guitar_on').parent().siblings().children('img').removeClass('guitar_on'); //기타 중앙 이미지 클래스 추가

        var gnum = $('.guitar_img a:eq(2)').children('img').attr('src').split('/')[2].split('_')[1].split('.')[0];
        gnum = Number(gnum);
        //console.log('기타 중간이미지 번호? '+gnum);

        var bnum = gnum - 1;
        $('.btns ul li').eq(bnum).addClass('btn_on', 300).siblings().removeClass('btn_on'); //prev클릭>>버튼 클래스 추가

        $('.guitar_txt ul li').eq(bnum).addClass('txt_on').siblings().removeClass('txt_on');

    }); //#prev click


    /*다음 버튼 클릭*/

    $('#next').click(function (e) {
        e.preventDefault();

        $('.guitar_img a:first').appendTo('.guitar_img'); //기타 첫 이미지 마지막으로 이동

        var gidx = $('.guitar_img a').eq(2);
        $(gidx).children('img').addClass('guitar_on').parent().siblings().children('img').removeClass('guitar_on'); //기타 중앙 이미지 클래스 추가


        var gnum = $('.guitar_img a:eq(2)').children('img').attr('src').split('/')[2].split('_')[1].split('.')[0];
        gnum = Number(gnum);
        //console.log('기타 중간이미지 번호? '+gnum);

        var bnum = gnum - 1;
        $('.btns ul li').eq(bnum).addClass('btn_on', 300).siblings().removeClass('btn_on'); //next클릭>>버튼 클래스 추가

        $('.guitar_txt ul li').eq(bnum).addClass('txt_on').siblings().removeClass('txt_on');

    }); //#next click


    /*영상 플레이와 모달창*/

    var playIn = '<iframe id="player" width="830" height="467" src="https://www.youtube.com/embed/npOOEWaTadA?autohide=1&rel=0&showinfo=0&title=0&autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

    /*.video 호버*/
    $('.video_inner').mouseenter(function () {
        $('.cover').stop().fadeOut(200);
    }).mouseleave(function () {
        $('.cover').stop().fadeIn(100);
    });


    /*.video 플레이 버튼 클릭*/
    $('.video_inner').click(function (e) {
        e.preventDefault();

        $('#modal').fadeIn(600);

        $('#xbtn').click(function (e) {
            e.preventDefault();
            $(this).children('a:first').animate({
                rotate: '-45deg',
                opacity: '0.1'
            }, 600);
            $(this).children('a:last').animate({
                rotate: '45deg',
                opacity: '0.1'
            }, 600);
            $('#modal').delay(600).fadeOut(function () {
                $('.modal_wrap').empty();
            });

        }); //닫기 버튼 클릭 시

        $('.modal_wrap').fadeIn(400, function () {
            $('.modal_wrap').html(playIn);
        });
        $('#xbtn').children('a').stop().css({
            opacity: '1',
            rotate: '0deg'
        });
    }); //.play_btn click



}); //jQuery
