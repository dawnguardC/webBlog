;(function($){
	$.fn.extend({
		"navlist":function(bgcolor,color){
			$(".nav").css({
				"display":"none"
			});
			$(".nav").children("li").css({
				"background":bgcolor,
				"color":color
			});
			$(".nav").parent().hover(function(){
				$(this).find(".nav").slideDown()
			},function(){
				$(this).find(".nav").stop().slideUp()
			});
          return this;
		}
	})
})(jQuery)  //将jQuery作为传递进去，就可以在内部使用$