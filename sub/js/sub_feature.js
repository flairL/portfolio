$(document).ready(function(){
    
    /*드래그바 구현*/
    $('#bar').draggable({
        axis: 'y',
        containment: 'parent'
    });
    
    var barmax = 447; //바의 최대 이동값 (전체너비-bar크기)
    var barpos; //바의 이동값
    var conmax = 404; //사진 최대 이동값(이미지크기-보여지는 영역)
    var conpos; //사진 이동값
    var dragpos = $('.dbar').offset().top;
    
    $('#bar').on('drag',function(){
        
        barpos = $(this).offset().top;
        
        conpos = (barpos-dragpos) * conmax / barmax;
        
        $('.s_frame ul').css({
            top: -conpos + 'px'
        });
    });
    
    /*드래그바 자동 움직임 함수*/
    function bmove(){
        var barDown = $('#bar').animate({
            marginTop: '50'
        }, 800, 'easeInOutCirc');
        
        var barUp = $('#bar').animate({
            marginTop: 0
        }, 1000, 'easeInOutCirc');
    }
    
    
    var psTop = $('.process').offset().top;
    /*드래그바 움직임 없애기*/
    $(window).scroll(function(){
        var scTop = $(this).scrollTop();
        
        if(scTop > psTop && scTop < psTop+10){
            var barAuto = setTimeout(bmove);
        }
    });
    var dbTop = $('.dbar').offset().top;
    var barTop = $('#bar').offset().top;
    console.log(barTop);
    if(barTop != dbTop){
        clearTimeout(barAuto);
    }
    
    
    /*클릭하면 영상 바꾸기*/
    $('.s_frame ul li a').click(function(e){
        e.preventDefault();
        
        var vinfo = $(this).children('span').html();
        $('.b_frame').html(vinfo);
    });
    
    
    /*비디오 more 버튼*/
    function moreMove (){
        $('.process_btn img').animate({
            right: 10
        },700);
        $('.process_btn img').animate({
            right: 35
        },1000);
    }
    
    setInterval(moreMove);
    
}); //jQuery

var barAuto;
