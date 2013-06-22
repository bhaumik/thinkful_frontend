$(document).ready(function () { 
	
	$("#basebox").on("mouseover",function() {
	$(".original").css("display","none");	
	$(".baseheader").css("display","block");
	})
	
	$("#basebox").on("mouseleave",function() {
	$(".original").css("display","block");	
	$(".baseheader").css("display","none");
	})
	
	$("#highbox").on("mouseover",function() {
	$(".original").css("display","none");	
	$(".highheader").css("display","block");
	})
	
	$("#highbox").on("mouseleave",function() {
	$(".original").css("display","block");	
	$(".highheader").css("display","none");
	})
	
	$("#campbox").on("mouseover",function() {
	$(".original").css("display","none");	
	$(".campheader").css("display","block");
	})
	
	$("#campbox").on("mouseleave",function() {
	$(".original").css("display","block");	
	$(".campheader").css("display","none");
	})
	
});	 