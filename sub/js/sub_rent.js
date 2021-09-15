//Gibson Rent

var aflow;

$(document).ready(function () {

    aflow = setInterval(flowG, 10);

    /*마우스 올리면 제품설명 보이기*/
    $('.flowbox ul li').hover(function () {
        $(this).children('.ibox').stop().animate({
            bottom: '-20%',
            opacity: '1'
        }, 300, 'easeOutCirc');
    }, function () {
        $(this).children('.ibox').stop().animate({
            bottom: 0,
            opacity: 0
        }, 100, 'easeOutCirc');
    }); //flowbox hover

    /*버튼 호버시*/
    $('.flow_btn a').mouseenter(function(){
        $(this).css({
            backgroundColor: '#fefea7'
        });
    }).mouseleave(function(){
        $(this).css({
            backgroundColor: '#fff'
        });
    });
    
    /*플레이&스탑 버튼*/
    $('.flow_btn a').click(function(e){
        e.preventDefault();
        
        var bwpos = $('.flow_btn').offset().left;
        var bpos = $('.flow_btn a').offset().left;
        console.log(bwpos);
        
        /*버튼 움직이기*/
        $(this).toggleClass('on').css({
            transition: 'all .3s ease-in-out'
        });
        
        /*인터벌 플레이/스탑*/
        if(bpos >= bwpos && bpos < bwpos+20){
            $(this).parent().css({
                backgroundColor: 'lightgray',
                border: '3px solid lightgray'
            });
            $(this).css({
                backgroundColor: '#fff'
            });
            $(this).parent().children('p').children('span:first').animate({
                opacity: 1
            });
            $(this).parent().children('p').children('span:last').animate({
                opacity: 0
            });
            
            clearInterval(aflow);
            
        }else{
            $(this).parent().css({
                backgroundColor: '#daa150',
                border: '3px solid #daa150'
            });
            $(this).css({
                backgroundColor: '#fff'
            });
            $(this).parent().children('p').children('span:first').animate({
                opacity: 0
            });
            $(this).parent().children('p').children('span:last').animate({
                opacity: 1
            });
            
            aflow = setInterval(flowG, 10);
        }
    });

}); //jQuery

/*플로우 함수*/
var fnum = 0;

function flowG() {

    fnum++;
    var gwth = $('.flowbox ul li').first().width();

    if (fnum > gwth) {
        $('.flowbox ul').append($('.flowbox ul li:first')).css({
            left: 0
        });
        fnum = 0;

    } else {
        $('.flowbox ul').css({
            left: -fnum + 'px'
        });
    }
}
