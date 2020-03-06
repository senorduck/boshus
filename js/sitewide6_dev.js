var backOn=false;
function setupSix(){
	$("#bestDay").attr("src","img/beach_IE6.jpg");
	$("#bestDay").attr("width","1000");
	$("#bestDay").css("left",0);
	$("#boshus").css("border","1px solid #FFF");
	$("#copyr").css("display","block");
	$("#logo").attr("src","img/logo.gif");
	$("#logo1").fadeOut(1000);
	$("#logo").css("cursor","pointer");
	$("#topNav").show();
	$("#images").children("a").children("img").attr("src","img/medianav_images.gif");
	$("#audio").children("a").children("img").attr("src","img/medianav_audio.gif");
	$("#video").children("a").children("img").attr("src","img/medianav_video.gif");
	$(document).pngFix();
	setLinks6();
	$("#view").fadeIn(1000);
}
function infoLoad6(){
	$("#infoContent").load("infoContent.html",function(){
		$("#infoContent").fadeIn(1000);
	});
}
function linksLoad6(){
	$("#linksContent").load("linksContent.html",function(){
		$("#linksContent").fadeIn(1000);
	});
}
function showsLoad6(){
	$("#showsContent").load("showsContent.html",function(){
		$("#showsContent").fadeIn(1000);													 
	});
}
function mediaLoad6(){
	$("#mediaContent #inner").load("imageContent.html",function(){
		loadImages6();
	});
}
function loadImages6(){
	$("#mediaContent #inner").load("imageContent.html",function(){
		var theImages=$("#mediaContent #inner img");
		$("#lastNum").html($(theImages).length);
		$(theImages[imgIndex]).show();
		$("#imgPagination").show();
		$("#mediaContent").fadeIn(1000,function(){
			$("#mediaNav li").show();
		});
		$("#mediaContent #inner img").click(function(){
			changeImg('right');											 
		});
	});
}
function loadVideo6(){
	$("#mediaContent #inner").load("videoContent.html",function(){
		$("#imgPagination").hide();
		$("#mediaContent").fadeIn(1000);												
	});
}
function loadAudio6(){
	$("#mediaContent #inner").load("musicContent.html", function(){
		$("#imgPagination").hide();
		$("#mediaContent").fadeIn(1000);					 
	});
}
function setLinks6(){
	$("#logo").click(function(){
		$(".content").hide();
		if(backOn==true){
			$("#load").hide();
			backOn=false;
		}
	});
	$("#info").click(function(){
		$(".content").hide();
		infoLoad6();
		if(backOn==false){
			$("#load").show();	
			backOn=true;
		}
	});
	$("#links").click(function(){
		$(".content").hide();
		linksLoad6();
		if(backOn==false){
			$("#load").show();	
			backOn=true;
		}
	});
	$("#show").click(function(){
		$(".content").hide();
		showsLoad6();
		if(backOn==false){
			$("#load").show();	
			backOn=true;
		}
	});
	$("#media").click(function(){
		$(".content").hide();
		mediaLoad6();
		if(backOn==false){
			$("#load").show();	
			backOn=true;
		}
	});
	$("#mediaNav #images").click(function(){
		loadImages6();									 
	});
	$("#mediaNav #audio").click(function(){
		loadAudio6();		
	});
	$("#mediaNav #video").click(function(){
		loadVideo6();								
	});
	$("#mediaContent #leftarrow").click(function(){
		changeImg('left');				 
	});
	$("#mediaContent #rightarrow").click(function(){
		changeImg('right');				 
	});
}