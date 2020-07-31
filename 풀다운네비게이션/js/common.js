$("#gnb").on('mouseenter', function() {
  $("#wrap").stop().animate({ height: 450 }, 200)
})
$("#wrap").on('mouseleave', function() {
  $(this).stop().animate({ height: 120 }, 200)
})
$("#gnb > ul > li").on('mouseenter', function() {
  $(this).addClass('active')
})
$("#gnb > ul > li").on('mouseleave', function() {
  $(this).removeClass('active')
})
