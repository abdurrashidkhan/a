function openManu(){document.getElementById("myNav").style.width="100%"}function closeManu(){document.getElementById("myNav").style.width="0%"}$(document).ready(function(){$("svg.radial-progress").each(function(e,t){$(this).find($("circle.complete")).removeAttr("style")}),$(window).scroll(function(){$("svg.radial-progress").each(function(e,t){$(window).scrollTop()>$(this).offset().top-.75*$(window).height()&&$(window).scrollTop()<$(this).offset().top+$(this).height()-.25*$(window).height()&&(percent=$(t).data("percentage"),radius=$(this).find($("circle.complete")).attr("r"),circumference=2*Math.PI*radius,strokeDashOffset=circumference-percent*circumference/100,$(this).find($("circle.complete")).animate({"stroke-dashoffset":strokeDashOffset},1250))})}).trigger("scroll"),$(".owl-carousel").owlCarousel({margin:20,items:3,loop:!0,autoplayHoverPause:!0,autoplay:!0,autoplayTimeout:3e3,responseresponsiveRefreshRate:!0,responsive:{0:{items:1},575.98:{items:2},767.98:{items:3},991.98:{items:3},1199.98:{items:3},1919.98:{items:3}}});new Typed("#typingNow",{strings:["I am Web Designer And Developer ..."],typeSpeed:50,startDelay:300,backSpeed:50,backDelay:1800,loop:!0,smartBackspace:!0});AOS.init({duration:900});mixitup(".mixitUp");$(".js--services-section").waypoint(function(e){"down"==e?$("nav").addClass("sticky"):$("nav").removeClass("sticky")}),$("a").on("click",function(e){if(""!==this.hash){e.preventDefault();var t=this.hash;$("html, body").animate({scrollTop:$(t).offset().top},500,function(){window.location.hash=t})}})});
