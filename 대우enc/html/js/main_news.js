$(function(){
    $('.news_room h2 a').click(function(e){
        e.preventDefault();
        $('.news_room').toggleClass('open');
    });
});