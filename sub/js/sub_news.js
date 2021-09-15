$(document).ready(function(){
    
    $('.cbox1, .cbox2, .cbox3, .cbox4, .cbox5, .cbox6').hover(function(){
        $(this).children().children('p').stop().fadeIn();
    },function(){
        $(this).children().children('p').stop().fadeOut();
    
    });
    
    
    
    
}); //jQuery