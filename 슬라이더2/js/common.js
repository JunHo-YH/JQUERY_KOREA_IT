// 좌우버튼으로 페이드
var n = 0;
var className;
function autoFade() {
  className = $("#sliderList li:eq(0)").attr('class')
  n = className.substr(6, 1);
  if ( n == 5 ) n = 0;
  // console.log(n)
  $("#btnNum span").removeClass('active')
  $("#btnNum span:eq("+n+")").addClass('active')

  $("#sliderList li:eq(1)").addClass('on')
                           .css({ opacity: 0 })
                           .animate({ opacity: 1 }, function() {
                             $("#sliderList").append($("#sliderList li:eq(0)"))
                             $("#sliderList li:last").removeClass('on')
                           })
}

var timer = setInterval(autoFade, 3000)
$("#btnPos span, #btnNum span").on('click', function(){
  clearInterval(timer)
})

$(".next").on('click', function() {
  className = $("#sliderList li:eq(0)").attr('class')
  n = className.substr(6, 1);
  if ( n == 5 ) n = 0;
  // console.log(n)
  $("#btnNum span").removeClass('active')
  $("#btnNum span:eq("+n+")").addClass('active')

  $("#sliderList li:eq(1)").addClass('on')
                           .css({ opacity: 0 })
                           .animate({ opacity: 1 }, function() {
                             $("#sliderList").append($("#sliderList li:eq(0)"))
                             $("#sliderList li:last").removeClass('on')
                           })
})
$(".prev").on('click', function() {
  className = $("#sliderList li:last").attr('class')
  n = className.substr(6, 1) - 1;
  if ( n == -1 ) n = 4;
  // console.log(n)
  $("#btnNum span").removeClass('active')
  $("#btnNum span:eq("+ n +")").addClass('active')

  $("#sliderList li:last").addClass('on')
                          .css({ opacity: 0 })
                          .animate({ opacity: 1 }, function() {
                            $("#sliderList").prepend($(this));
                            $("#sliderList li:eq(1)").removeClass('on')
                          })
})
var num;
var classNum;
var liLength = $("#sliderList li").length;
$("#btnNum span").on('click', function() {

  $("#btnNum span").removeClass("active");
  $(this).addClass('active');

  num = $(this).index() + 1;
  classNum = num;
  if ( $("#sliderList li.slider" + num).hasClass('on') ) {
      return false;
  }
  else {
    $(".slider"+num).addClass('on')
                    .css({ opacity: 0 })
                    .animate({ opacity: 1 }, function() {
                      $("#sliderList li").not($(".slider"+num)).removeClass('on');
                      for ( var i=0; i<liLength-1; i++ ) {
                        classNum++;
                        if ( classNum == 6 ) classNum = 1;
                        $("#sliderList").append($(".slider"+classNum))
                        // console.log(classNum)
                      }
                    })
  }
})
