$(function(){
    $('#header, .header_bg').mouseover(function(){
        $('#header').addClass('on');
        $('.header_bg').stop().slideDown(300);
    });

    $('#header, .header_bg').mouseout(function(){
        $('#header').removeClass('on');
        $('.header_bg').stop().slideUp(300);
    });
    var video = document.querySelector(".video video");
    var videoBtn = document.getElementById("video_control");
    var play = 1;
    videoBtn.onclick = function() {
      if ( play == 1 ) {
        video.pause();
        play = 0;
        videoBtn.style.backgroundPositionX = "0px";
      }
      else {
        video.play();
        play = 1;
        videoBtn.style.backgroundPositionX = "100%";
      }
    }
});
