// JavaScript Document
/*  
	*@Description: 云南大学中文首页
	*@Author:wp.huang
	*@Update:2012-11-06
*/
$(function(){
	//站内搜索
	searchFuc();
	//导航栏
	navFuc();	
	//通知公告
	if($("#demo")[0] && $("#demo1")[0] && $("#demo2")[0]){
	noteScroll();}	
	//tab切换
	slideTab();
})
//站内搜索
function searchFuc(){
	$("#searchTxt").focus(function(){
		if($(this).val()=="站内搜索"){
			$(this).val("");
		}
		$(this).css("color","#333");	
	})
	$("#searchTxt").blur(function(){
		if(!$(this).val()){
			$(this).css("color","#c5c5c5");
			$(this).val("站内搜索");
		}else{
			$(this).css("color","#333");
		}
	})
}
//导航栏
function navFuc(){
	if($("#mainNav")){
		$("#mainNav li").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
		)	
	}
}
//通知公告
function noteScroll(){
	var demo = document.getElementById("demo");
	var demo1 = document.getElementById("demo1");
	var demo2 = document.getElementById("demo2");
	var speed = 36000000;    //滚动速度值，值越大速度越慢
	var nnn=200/demo1.offsetHeight;
	for(var i=0;i<nnn;i++){demo1.innerHTML+=demo1.innerHTML}
	demo2.innerHTML = demo1.innerHTML    //克隆demo2为demo1
	function Marquee(){
		if(demo2.offsetTop-demo.scrollTop<=0)    //当滚动至demo1与demo2交界时
			demo.scrollTop-=demo1.offsetHeight    //demo跳到最顶端
		else{
			demo.scrollTop++
		}
	}
	var MyMar = setInterval(Marquee,speed);        //设置定时器
	demo.onmouseover = function(){clearInterval(MyMar)}    //鼠标经过时清除定时器达到滚动停止的目的
	demo.onmouseout = function(){MyMar = setInterval(Marquee,speed)}    //鼠标移开时重设定时器	
}
//tab切换
function slideTab(){
	$("#tabList li").mouseover(function(){//如要点击切换，把mouseover改为click
		var ind=$(this).index();//获取li索引，从0开始
		//alert(ind);
		$(this).addClass("active").siblings().removeClass("active");//当前li增加active样式，其他li删除active样式
		//以下两步实现内容区域显示隐藏，先将所有div隐藏，再将鼠标所在li对应的div显示出来
		$(".tab_cont").hide();
		$("#tabCont"+ind).show();	
	})
}
