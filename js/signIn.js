$(function(){
	// 月份切换
	$(".sign_content > h2").click(function(){
		if($(".h_chose").is(":hidden")){
			$(".h_chose").show();
			$(".h_chose li").click(function(){
				var txt = $(this).text();
				$(".sign_content > h2").find("span").text(txt);
				$(".h_chose").hide();
			})
		}else{
			$(".h_chose").hide();
		}
	})

	// 排行榜切换
	$(".ranktop_tabT li").click(function(){
		var ind=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent(".ranktop_tabT").siblings(".ranktop_tabC").find(".panel:eq("+$(this).index()+")").show().siblings().hide()
	})
})