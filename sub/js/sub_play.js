$(document).ready(function(){
    
    $(window).scroll(function(){
        
        var scTop = $(this).scrollTop();
        var codTop = $('.code').offset().top;
        var posTop = $('.posture').offset().top;
        var ltTop = $('.left_hand').offset().top;
        var rtTop = $('.right_hand').offset().top;
        var strTop = $('.stroke').offset().top;
        var calTop = $('.calypso').offset().top;
        var goTop = $('.gogo').offset().top;
        var moTop = $('.modern').offset().top;
        
        /*code부분*/
        if(scTop>= codTop-140){
            $('.code>img').css({
                transform: 'scaleX(1)',
                transition: 'all .8s'
            });
        }
        if(scTop>= codTop+500){
            $('.fret img').css({
                transform: 'scaleX(1)',
                transition: 'all .8s'
            });
        }
        
        /*pose 등장*/
        if(scTop>= posTop-200){
            $('.posture .left, .posture .right').css({
                transform: 'translateX(0)',
                opacity: 1
            });
        }
        if(scTop>= ltTop-200){
            $('.left_hand .left, .left_hand .right').css({
                transform: 'translateX(0)',
                opacity: 1
            });
        }
        if(scTop>= rtTop-200){
            $('.right_hand .left, .right_hand .right').css({
                transform: 'translateX(0)',
                opacity: 1
            });
        }
        
        /*stroke 등장*/
        if(scTop>= strTop-200){
            $('.stroke .left, .stroke .right').css({
                transform: 'translateX(0)',
                opacity: 1
            });
        }
        if(scTop>= calTop-200){
            $('.calypso .left, .calypso .right').css({
                transform: 'translateX(0)',
                opacity: 1
            });
        }
        if(scTop>= goTop-200){
            $('.gogo .left, .gogo .right').css({
                transform: 'translateX(0)',
                opacity: 1
            });
        }
        if(scTop>= moTop-200){
            $('.modern .left, .modern .right').css({
                transform: 'translateX(0)',
                opacity: 1
            });
        }
        
        
        
    }); //scroll
    
    
    
    
    
    
    
    
    
    
}); //jQuery