$(function(){"use strict";new WOW({mobile:!1}).init();window.matchMedia("(max-width: 767px)");let a=window.matchMedia("(min-width: 768px)");function o(){if($(window).scrollTop()>$(this).offset().top-350){let a=$(this).attr("id");$(".navbar li").removeClass("active"),$(`.navbar li a[data-scroll='${a}']`).parent().addClass("active")}}function s(){a.matches?($(window).scrollTop()>30&&($("nav").addClass("sticky-nav"),$("nav").addClass("border-bottom"))):($("nav").removeClass("sticky-nav"),$("nav").addClass("border-bottom"))}$(window).on("load",function(){$(".block").each(o)}),s(),$(window).scroll(s=>{a.matches?$(window).scrollTop()>30?($("nav").addClass("sticky-nav"),$("nav").addClass("border-bottom")):($("nav").removeClass("sticky-nav"),$("nav").removeClass("border-bottom")):$("nav").addClass("border-bottom"),$(window).scrollTop()>=$(".skills").offset().top-400&&$(".progress-bar").each(function(){this.style.width=`${this.getAttribute("aria-valuenow")}%`}),$(".block").each(o)}),$(window).resize(o=>{s(),a.matches&&$(window).scrollTop()<30&&$("nav").removeClass("border-bottom")}),$(".container").mixItUp(),$(".shuffle li").on("click",a=>{$(this).addClass("active").siblings().removeClass("active")}),$("nav li a").on("click",function(a){a.preventDefault(),$(".navbar-collapse").removeClass("show");$("html, body").animate({scrollTop:$("#"+$(this).data("scroll")).offset().top-50},1e3),$(this).parent().addClass("active").siblings().removeClass("active")})});$(window).on('load',function(){$(".loading span").fadeOut(100, function(){$(this).parent().fadeOut(1500, function(){$(this).remove();$("body").css("overflow","auto")})});

$(".view-more").on("click", function() {
   
    $(".portfolio").toggleClass("closed");
    
    if ($(this).html() === "view more") {
        
        $(this).text("view less")
        
    } else {
        
        $(this).text("view more");
        
    }
    
});




});