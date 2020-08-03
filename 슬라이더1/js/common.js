// 좌우버튼 눌러서 슬라이더
$(".next").on('click', function() {
  $("#sliderList:not(:animated)").animate({ marginLeft: "-100%"}, function() {
    $(this).append($("> li:first", this)).css({ marginLeft: 0 })
  })
})
$(".prev").on('click', function() {
  $("#sliderList").prepend($("#sliderList li:last"))
                  .css({ marginLeft: "-100%" })
                  .animate({ marginLeft: 0 })

})
// 번호버튼 눌러서 슬라이더

$("#btnNum span").on('click', function() {
    var liLength = $("#sliderList li").length
    var num = $(this).index() + 1;
    var pos = $(".slider" + num).position().left
    
    $("#sliderList").animate({ marginLeft: -pos }, function() {
        for( var i = 0; i < liLength -1; i++) {
            num++;
            if(num == liLength + 1) {
                num = 1;
            }
            $("#sliderList").append($(".slider" + num))
           
        } 
        $("#sliderList").css({marginLeft: 0})
    })
})


// $("#btnNum span:eq(0)").on('click', function() {
//   $("#sliderList").animate({ marginLeft: -$(".slider1").position().left }, function() {
//     $("#sliderList").append($("#sliderList > li.slider2"))
//                     .append($("#sliderList > li.slider3"))
//                     .css({marginLeft: 0})
//   })
// })
// $("#btnNum span:eq(1)").on('click', function() {
//   $("#sliderList").animate({ marginLeft: -$(".slider2").position().left }, function() {
//     $("#sliderList").append($("#sliderList > li.slider3"))
//                     .append($("#sliderList > li.slider1"))
//                     .css({marginLeft: 0})
//   })
// })
// $("#btnNum span:eq(2)").on('click', function() {
//   $("#sliderList").animate({ marginLeft: -$(".slider3").position().left }, function() {
//     $("#sliderList").append($("#sliderList > li.slider1"))
//                     .append($("#sliderList > li.slider2"))
//                     .css({ marginLeft: 0 })
//   })
// })




