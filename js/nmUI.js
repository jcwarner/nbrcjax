nmUI=function(){return{animateMenu:function(a,b){switch(a){case "slideDown":$(".menu>li").hover(function(){$(this).children("ul").stop(!0,!0).slideUp(0).slideDown(250)},function(){$(this).children("ul").stop(!0,!0).css({display:"none"})});break;case "fadeIn":$(".menu>li").hover(function(){$(this).children("ul").stop(!0,!0).fadeOut(0).fadeIn(250)},function(){$(this).children("ul").stop(!0,!0).css({display:"none"})});break;default:alert("topLevelAnimate bad value")}switch(b){case "slideDown":$(".menu li ul li").hover(function(){$(this).children("ul").stop(!0,
!0).slideUp(0).slideDown(250)},function(){$(this).children("ul").stop(!0,!0).css({display:"none"})});break;case "fadeIn":$(".menu li ul li").hover(function(){$(this).children("ul").stop(!0,!0).fadeOut(0).fadeIn(250)},function(){$(this).children("ul").stop(!0,!0).css({display:"none"})});break;default:alert("subLevelAnimate bad value")}},stickyNav:function(a,b,c,e,d){var f=$(a).outerHeight();$(".fe_toolbar").length||$(window).scroll(function(){var g=$(window).scrollTop(),h=$(b).outerHeight(),k=$(c).outerHeight(),
l=$(e).outerHeight();g>=h+k+l+d?($(a).css({position:"fixed","z-index":9999}).addClass("navbar_container_fixed"),$(".left_side_menu",b).css({"margin-top":f})):($(a).css({position:"static"}).removeClass("navbar_container_fixed"),$(".left_side_menu",b).css({"margin-top":0}))})},contentTicker:function(a,b,c){function e(a){var d=a.height();duration=(d+1)/c;a.animate({marginTop:-d},duration,"linear",function(){a.appendTo(a.parent()).css("marginTop",0);e(a.parent().children().first().delay(b))})}var d=$(a);
1<d.find("li").length&&(e(d.children().first().delay(b)),d.hover(function(){d.children().stop(!0,!1)},function(){e(d.children().first())}))},animateImageLinks:function(a,b,c,e){switch(b){case "1":$(a).hover(function(){$(this).siblings().stop().animate({opacity:c},e)},function(){$(this).siblings().stop().animate({opacity:1},e)});break;case "2":$(a).hover(function(){$(this).parent().siblings().children().stop().animate({opacity:c},e)},function(){$(this).parent().siblings().children().stop().animate({opacity:1},
e)});break;default:alert("imageLinkNestedLevel bad value")}},slidePanel:function(){$("#open").click(function(){$("div#panel").slideDown("slow")});$("#close").click(function(){$("div#panel").slideUp("slow")});$("#toggle a").click(function(){$("#toggle a").toggle()})},tabs:function(a,b,c,e,d){$(a).children("div").not(a).hide();$(b+" li:nth-child("+c+")").addClass("active");$(b+" .active").each(function(){activeTab=$(this).find("a").attr("href");$(activeTab).show();$(this).siblings().removeClass("default")});
$(b+" li a").click(function(){$(this).closest(a).children("ul").children("li").removeClass("active");$(this).parent().addClass("active");$(this).closest(a).children("div").not(a).hide();var b=$(this).attr("href");switch(e){case "slideDown":$(b).slideDown(d);break;case "fadeIn":$(b).fadeIn(d);break;case "show":$(b).show(d);break;default:alert("tabsAnimation bad value")}0!=$("#tabs #map").length&&$("#tabs #map").is(":visible")&&gmap_initialize();return!1})},tabsFlexible:function(a,b,c){$(a).children("div").not(a).css({position:"absolute",
left:"-9999em",top:"0"});$(b+" li:nth-child("+c+")").addClass("active");$(b+" .active").each(function(){activeTab=$(this).find("a").attr("href");$(activeTab).css({position:"relative",left:"0",top:"0"});$(this).siblings().removeClass("default")});$(b+" li a").click(function(){$(this).closest(a).children("ul").children("li").removeClass("active");$(this).parent().addClass("active");$(this).closest(a).children("div").not(a).css({position:"absolute",left:"-9999em",top:"0"});var b=$(this).attr("href");
$(b).css({position:"relative",left:"0",top:"0"});0!=$("#tabs #map").length&&$("#tabs #map").is(":visible")&&gmap_initialize();return!1})},selectBoxMenu:function(){var a=$("ul.menu a");$('<select class="menu_select_box"/>').appendTo("#navbar");$("<option />",{selected:"selected",value:"",text:"Navigation..."}).appendTo("#navbar select");var b=0,c="";a.each(function(){var a=$(this);c="";if(!1==$(a).hasClass("cssnavlevelone")){b=$(a).parentsUntil(".cssnavlevelone","ul").length;for(var d=1;d<b;d++)c+=
"%A0%A0%A0%A0%A0"}$('<option value="'+a.attr("href")+'">'+unescape(c)+a.text().replace(/[^a-z0-9\s]/gi,"")+"</option>").appendTo("#navbar select")});$("#navbar select").change(function(){window.location=$(this).find("option:selected").val()})},animateInSearch:function(a,b,c){var e=$(a),d=$(b);$("button#search_toggle").toggle(function(){d.fadeOut(150);e.delay(150).animate({width:c},300);$(this).addClass("pressed")},function(){e.delay(150).animate({width:0},300);d.delay(450).fadeIn(150);$(this).removeClass("pressed")})},
branchFooterEqualColumns:function(){var a=-1;$("#mini_site_map ul").each(function(){a=a>$(this).height()?a:$(this).height();$(this).height(a)});$("#mini_site_map").css({height:a,overflow:"hidden"})},fluidVideo:function(){$("iframe[src*='vimeo.com'], iframe[src*='youtube.com']").each(function(){"video-container"!=$(this).closest("div").attr("class")&&$(this).removeAttr("height").removeAttr("width").wrap('<div class="video-container" />');var a=$(this).attr("src");-1==$(this).attr("src").indexOf("?wmode=transparent")&&
$(this).attr("src",a+"?wmode=transparent")});$("div.video-container").css({height:0,"max-width":"100%",overflow:"hidden",position:"relative","padding-bottom":"56.25%","z-index":1});$("div.video-container iframe, div.video-container object").css({height:"100%",width:"100%",position:"absolute",top:0,left:0,"z-index":1});$("#marquee > div.video-container").css({position:"absolute"})},fluidMarquee:function(a){var b=$(a);a=b.outerHeight();var c=b.outerWidth()/a;b.children("img").length?b.children("img").css({height:"auto",
width:"100%"}):(b.css({"max-width":"100%"}),a=b.outerWidth(),b.css({height:a/c}),$(window).resize(function(){var a=b.outerWidth();b.css({height:a/c})}))},fluidMarquee100:function(a){var b=$(a);a=b.outerHeight();var c=b.outerWidth()/a;b.children("img").length?b.children("img").css({height:"auto",width:"100%"}):(b.css({width:"100%"}),a=b.outerWidth(),b.css({height:a/c}),$(window).resize(function(){var a=b.outerWidth();b.css({height:a/c})}))},fluidImages:function(a,b,c){$.browser.msie&&"8.0"==$.browser.version||
($(a+","+b+","+c).find("table img").attr("data-noresize","true"),$(a+","+b+","+c).find("img").each(function(){$(this).attr("data-noresize")?$(this).css({"max-width":"inherit",height:"inherit"}):$(this).not(".iconlink")&&$(this).css({"max-width":"100%",height:"auto"})}))},contentCarousel:function(a,b,c,e){a=$("#"+a);a.data("carouselItemCount",a.find(".carousel-item").length);a.data("carouselItemWidth",a.find(".carousel-item:first-child").outerWidth(!0));a.data("carouselItemWrapWidth",a.data("carouselItemCount")*
a.data("carouselItemWidth"));a.data("carouselItemVisible",b);a.find(".carousel").css("width",a.data("carouselItemWidth")*a.data("carouselItemVisible"));a.find(".carousel-item-wrap").css("width",a.data("carouselItemWrapWidth"));a.find(".carousel-item").first().addClass("carousel-item-first");a.find(".carousel-item").last().addClass("carousel-item-last");a.find(".next").click(function(){var a=$(this).closest(".carousel-wrap"),b=Math.abs(parseInt(a.find(".carousel-item-wrap").css("marginLeft")));if(a.find(".carousel-item-wrap:animated").length)return!1;
a.data("carouselItemWrapWidth")-a.data("carouselItemVisible")*a.data("carouselItemWidth")<=b||a.find(".carousel-item-wrap").stop().animate({marginLeft:"-="+a.data("carouselItemWidth")*c+"px"},e)});a.find(".prev").click(function(){var a=$(this).closest(".carousel-wrap"),b=Math.abs(parseInt(a.find(".carousel-item-wrap").css("marginLeft")));if(a.find(".carousel-item-wrap:animated").length)return!1;0!=b&&a.find(".carousel-item-wrap").stop(!0,!0).animate({marginLeft:"+="+a.data("carouselItemWidth")*c+
"px"},e)})},widgetCarousel:function(a,b,c){a=$("#"+a);a.data("carouselItemCount",a.find("a").length);a.data("carouselItemWidth",a.find("a:first-child").outerWidth(!0));a.data("carouselItemWrapWidth",a.data("carouselItemCount")*a.data("carouselItemWidth"));a.data("carouselItemVisible",b);a.find(".carousel_window").css("width",a.data("carouselItemWidth")*a.data("carouselItemVisible"));a.find(".list_widget").css("width",a.data("carouselItemWrapWidth"));a.find(".next").click(function(){var a=$(this).closest(".carousel_wrap"),
b=Math.abs(parseInt(a.find(".list_widget").css("marginLeft")));if(a.find(".list_widget:animated").length)return!1;a.data("carouselItemWrapWidth")-a.data("carouselItemVisible")*a.data("carouselItemWidth")==b?a.find(".list_widget").stop().animate({"margin-left":0},c):a.find(".list_widget").stop().animate({marginLeft:"-="+a.data("carouselItemWidth")+"px"},c)});a.find(".prev").click(function(){var a=$(this).closest(".carousel_wrap"),b=Math.abs(parseInt(a.find(".list_widget").css("marginLeft")));if(a.find(".list_widget:animated").length)return!1;
0==b?a.find(".list_widget").stop(!0,!0).animate({marginLeft:"-"+(a.data("carouselItemWrapWidth")-a.data("carouselItemVisible")*a.data("carouselItemWidth"))+"px"},c):a.find(".list_widget").stop(!0,!0).animate({marginLeft:"+="+a.data("carouselItemWidth")+"px"},c)})}}}();