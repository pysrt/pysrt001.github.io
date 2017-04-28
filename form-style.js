
                                                            /* модальные окна */
                
$(document).ready(function(){
    $('#BG_modal_window,.modal_window,.privacy_policy').css({                 /* заказать звонок */
        'display':'none'});   
    
    
    $('.call_buttom').click(function(){             /* при клике на кнопку 'заказать звонок' */
        
        $('#BG_modal_window,.mw_text_zvon').css({
            'display':'block'});
        
        $('.modal_window').css({
        'display':'block',
        'top':'190px'});
        
        $('.mw_text_buy,.mw_text_consultat,.privacy_policy').css({
        'display':'none'});
          
    });
     
    
    $('.buy_buttom').click(function(){             /* при клике на кнопку 'заказать звонок' */
        
        $('#BG_modal_window,.mw_text_buy').css({
            'display':'block'});
        
        $('.modal_window').css({
        'display':'block',
        'top':'780px'});
        
        $('.mw_text_zvon,.mw_text_consultat,.privacy_policy').css({
        'display':'none'});
          
    });
    
  
    
    $('.buttom_consultat').click(function(){             /* при клике на кнопку 'Получить консультацию специалиста' */
        
        $('#BG_modal_window,.mw_text_consultat').css({
            'display':'block'});
        
        $('.modal_window').css({
        'display':'block',
        'top':'1520px'});
        
        $('.mw_text_zvon,.mw_text_buy,.privacy_policy').css({
        'display':'none'});
          
    });
    
 
                                                /* при клике на кнопку 'политика канфиденциальности' */
    
    $('.md_pol_priv').click(function(){             
        
        $('#BG_modal_window,.mw_text_buy').css({
            'display':'block'});
        
        $('.privacy_policy').css({
        'display':'block',
        'top':'2451px'});
        
        $('.mw_text_zvon,.mw_text_consultat,.mw_text_consultat').css({
        'display':'none'});
          
    });
    
 
    $('#BG_modal_window').click(function(){
           
        $('#BG_modal_window').css({
            'display':'none'});
        
        $('.modal_window,.privacy_policy').css({
        'display':'none'});
        
     });
});