var hsm={};hsm.init=function(){hsm.events()};hsm.events=function(){hsm.common();};
hsm.common = function () {
  // Tab
  $('.tab-wrap .tab-head li').click(function(){$(this).addClass('cur').siblings().removeClass('cur');$(this).parents('.tab-wrap').find('.tab-body').children('li').eq($(this).index()).addClass('cur').siblings().removeClass('cur')});
  // Animation-s
  $(".main .slideInUp,.i-news li").each(function(index){$(this).css({"animation-delay":(index/10)+"s"})});
  // Header
  $(window).scroll(function(){var a=$(".header .logo").height();if($(window).scrollTop()>a){$("body").addClass("min-header")}else{$("body").removeClass("min-header")}});
  // Menu
  $(".menu-btn").click(function(){$("html").toggleClass("active");$("header").removeClass("active")});
  // Fix-btn
  $(".i-video a,.news-banner a,.car-info .item3 .btn").click(function(){$(".fix-wrap").fadeIn();});
  $(".i-video a,.news-banner a,.car-info .item3 .btn").click(function(){var viurl=$(this).attr("viurl");$(".fix-wrap .video-w").html('<video autoplay controls><source src="'+viurl+'" type="video/mp4">您的浏览器不支持 video 标签。</video>')});
  // Fix-hide
  $(".fix-wrap .hide").click(function(){$(this).parents(".fix-wrap").fadeOut();$(this).siblings(".video-w").find("video").get(0).pause()});
  // Procedure
  $(".hsm-procedure .item2 li").click(function(){$(this).find("a").addClass("cur").parent("li").siblings().find("a").removeClass("cur");$(".tabs-body li").eq($(this).index()).addClass("cur").siblings("li").removeClass("cur");$(this).parents(".item2").find("i").text($(this).find(".title-t").text());$(this).parents(".item2").find(".box-con").slideUp().siblings(".title").fadeIn();$(this).parents(".item2").next().addClass("active");document.getElementById("item2").scrollIntoView({behavior:"smooth",block:"start",inline:"start",})});$(".item2 .title").click(function(){$(this).siblings(".box-con").slideDown()});$(".hsm-procedure .item3 a").click(function(){$(this).addClass("cur").siblings().removeClass("cur");var txt=$(this).text();$(this).parents(".item3").find("i").text(txt).text();$(this).parents(".item3").find(".box-con").slideUp().siblings(".title").fadeIn();$(this).parents(".item3").next().addClass("active");document.getElementById("item3").scrollIntoView({behavior:"smooth",block:"start",inline:"start",})});$(".item3 .title").click(function(){$(this).siblings(".box-con").slideDown()});$(".hsm-procedure .item44 a").click(function(){$(this).addClass("cur").siblings().removeClass("cur");var txt=$(this).text();$(this).parents(".item44").find("i").text(txt).text();$(this).parents(".item44").find(".box-con").slideUp().siblings(".title").slideDown();$(this).parents(".item44").next().addClass("active");document.getElementById("item44").scrollIntoView({behavior:"smooth",block:"start",inline:"start",})});$(".item44 .title").click(function(){$(this).siblings(".box-con").slideDown()});$(".hsm-procedure .item4 a").click(function(){$(this).toggleClass("cur");$(this).parents(".item4").next().addClass("active")});function resize(){if($(window).width()>767){$(".hsm-procedure .item4 a").click(function(){document.getElementById("item4").scrollIntoView({behavior:"smooth",block:"start",inline:"start",})})}}resize();$(window).resize(function(){resize()});
}

$(function () {
  hsm.init();
});