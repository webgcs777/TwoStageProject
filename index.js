$(".header-a-color a").mousemove(function() {
	//找到a的爹的孩子的下一个元素  
	$(this).parent().children().next().show();
	// console.log("456")
});

$(".header-a-color ul").mousemove(function() {
	//放到要隐藏的那个元素  身上时  显示
	$(this).show();
});

$(".header-a-color ul").mouseout(function() {
	//移出要隐藏的那个元素  身上时  隐藏
	$(this).hide();
});

$(".header-a-color").mouseout(function() {
	//移出要隐藏的那个元素  身上时  隐藏
	$(".header-a-color ul").hide();
});

// 文字变色
$(".header-a-color a").mouseover(function() {
	$(this).css({
		color: "#666666"
	});
	$(".yanse").css({
		color: "#666666"
	});
});

$(".header-a-color a").mouseout(function() {
	$(this).css({
		color: "#b2b2b2"
	});
	$(".yanse").css({
		color: "#666666"
	});
});







// 尾部文字变色
$(".footer-ul a").mouseover(function() {
	$(this).css({
		color: "#666666"
	});


});
$(".footer-ul a").mouseout(function() {
	$(this).css({
		color: "#b2b2b2"
	});

});






/* 吸顶 */
$(function() {
	$(window).scroll(function() {
		if ($(window).scrollTop() > 180) {
			$(".xiding").css({
				"display": "block",
				"position": "fixed",
				"top": 0,
				"width": "100%",
				"z-index": 55
			});
		} else {
			$(".xiding").css({
				"position": "static",
				"display": "none"
			});
		}
	});
});

//跳转到购物车
$(".gouwuche").click(() => {
	location.href = "http://127.0.0.1/2008/Project/TheShoppingCart.html"
})

//跳转到  首页
$(".Dshouye").click(() => {
	location.href = "http://127.0.0.1/2008/Project/index.html"
})
//放大镜的页面
$(".fangda").click(() => {
	location.href = "http://127.0.0.1/2008/Project/index_subpage.html"
})
//跳转到  登陆
$(".login").click(() => {
	location.href = "http://127.0.0.1/2008/Project/login.html"
})
//跳转到 注册
$(".registered").click(() => {
	location.href = "http://127.0.0.1/2008/Project/registered.html"
})
//调到 关于嘉木
$(".guanyu").click(() => {
	location.href = "http://127.0.0.1/2008/Project/About.html"
})
//调用  联系我们
$(".lianxi").click(() => {
	location.href = "http://127.0.0.1/2008/Project/League.html"

})
//调用   加盟方式
$(".jiameng").click(() => {
	location.href = "http://127.0.0.1/2008/Project/Contact.html"

})
//调用   节气故事
$(".yan").click(() => {
	location.href = "http://127.0.0.1/2008/Project/SolarTerms.html"

})
//调用   支付方式
$(".zhifufangshi").click(() => {
	location.href = "http://127.0.0.1/2008/Project/pay.html"
})
//调用   商品分类
$(".classification").click(() => {
	location.href = "http://127.0.0.1/2008/Project/classification.html"
})

// 搜索
$(".suosou").click(() => {
	location.href = "http://127.0.0.1/2008/Project/search.html"
})




