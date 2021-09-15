$(document).ready(function(){
    
    /*목록 클릭 시 상세 내용 보이기*/
    $('.qaa ol li:nth-child(2)').click(function(e){
        e.preventDefault();
        
        $(this).siblings('li:last-child').slideToggle();
        
        $(this).parent().toggleClass('on');
    });
    
    
    /*목록 클릭 시 해당 내용만 분류*/
    $('.list_menu ul li a').click(function(e){
        e.preventDefault();
        
        var matr = $(this).parent().attr('class');
        console.log('속성? '+matr);
        
        $('.qaa_menu ol').each(function(){
            if(!$(this).hasClass(matr)){
                $(this).addClass('nvis');
            }else{
                $(this).removeClass('nvis');
            }
        });
        
        
        
        
        
    });
    
}); //jQuery