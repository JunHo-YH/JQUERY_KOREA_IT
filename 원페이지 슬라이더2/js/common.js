// 각 li 클릭시 자식 a의 href속성 값을 이용하여 해당섹션으로 슬라이딩
$("html, body").animate({ scrollTop: 0 }, 10)
$("nav li").on('click', function() {
    $("nav li").removeClass('on');
    $(this).addClass('on');
    var idName = $(this).children('a').attr('href');
    var pos = $(idName).position().top
    $("html, body").stop().animate({ scrollTop: pos })
})
$("section").on('mousewheel', function(event, delta) {
  if ( delta > 0 ) {
    var prev = $(this).prev().position().top;
    var index = $(this).index() - 2;
    if ( index < 0 ) {
      return false;
    }
    else {
      $("html, body").stop().animate({ scrollTop: prev })
      $("nav li").removeClass('on')
      $("nav li:eq("+ index +")").addClass('on')
    }
    console.log(index)
  }
  else {
      var next = $(this).next().position().top;
      var index = $(this).index();
      if ( index > 2 ) {
        return false;
      }
      else {
        $("html, body").stop().animate({ scrollTop: next })
        $("nav li").removeClass('on')
        $("nav li:eq("+ index +")").addClass('on')
      }
      console.log(index)
  }
})

$("section").each(function() {
  var $bg = $(this);
  $(window).on('scroll', function() {
    var bgPos = "300px"
    $bg.css({ backgroundPositionY: bgPos})
  })
})
