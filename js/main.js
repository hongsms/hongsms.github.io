var hsm={};hsm.init=function(){hsm.events()};hsm.events=function(){hsm.common()};
hsm.common = function () {
// Gotop
$(window).scroll(function(){$(window).scrollTop()>500?$("#gotop").show():$("#gotop").hide()});$("#gotop").click(function(){$("body,html").animate({scrollTop:0},1000);return false});

}
$(function () {
  hsm.init();
});