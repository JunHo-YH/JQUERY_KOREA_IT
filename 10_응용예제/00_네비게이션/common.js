// 초기설정
$(".snb").hide();
$("#gnb li").on('mouseenter', function() {
  $(this).children(".snb").fadeIn();
}).on('mouseleave', function() {
  $(this).children(".snb").fadeOut();
})
