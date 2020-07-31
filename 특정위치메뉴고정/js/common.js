// 각 메뉴리스트를 누르며 해당 섹션으로 슬라이딩 이동
$("nav li").on('click', function() {
  var num = $(this).index()+1;
  $("html, body").animate({ scrollTop: $("#content"+num).position().top })
  event.preventDefault();
})
// btnGo를 누르면 첫번째 섹션으로 슬라이딩 이동
$("#btnGo").on('click', function() {
  $("html, body").animate({ scrollTop: $("#content1").position().top })
  event.preventDefault();
})

// 스크롤 이벤트가 발생될 때 첫번째 섹션 위치에서 nav 고정되도록
$(window).on('scroll', function(){
  if ( $(window).scrollTop() >= $("header").height() ) {
      $("nav").addClass("navScroll")
  }
  else {
      $("nav").removeClass("navScroll")
  }
})
