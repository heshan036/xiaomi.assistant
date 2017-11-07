$(function(){

	// 活跃度数据、入/退群数据切换
	$(".statistics_tabT li").click(function(){
		var ind=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent(".statistics_tabT").siblings(".statistics_tabC").find(".panel:eq("+$(this).index()+")").show().siblings().hide()
	})

	$(".inout_memberT li").click(function(){
		var ind=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent(".inout_memberT").siblings(".inout_memberC").find(".panel:eq("+$(this).index()+")").show().siblings().hide()
	})


	$(".groupspace_memberT li").click(function(){
		var ind=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(this).parent(".groupspace_memberT").siblings(".groupspace_memberC").find(".panel:eq("+$(this).index()+")").show().siblings().hide()
	})
})