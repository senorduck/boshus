var theSection="home";
var prevSection="home";
var imgIndex=0;
function monkeyTime(){
	if(!($.browser.msie==true&&$.browser.version<7)){
		setSky();	
		setLinks();
		moveBalloon();
		$("#elephant").draggable({axis: 'x'});
		$("#girl1").draggable({axis: 'x'});
		$("#annete").draggable({axis: 'x'});
		$("#goat").draggable({axis: 'x'});
		$("#ball").draggable({axis: 'x'});
		$("#balloon").draggable({containment: [0, 0, 1000, 73]});
	}
}
function setSky(){
	var today=new Date();
	var h=today.getHours();
	if(h>=19||h<6){
		$("#bestDay").attr("src","img/night.jpg");
	}
	checkHash();
	setTimeout(showBoshus,1500);
//	setTimeout(showBoshus,2);
}
function showBoshus(){
	$("#logo1").hide();
	$("#view").fadeIn(1000, function(){
		$("#boshus").css("border","1px solid #FFF");
		$("#copyr").css("display","block");
		$("#logo").css("cursor","pointer");
	});
	attachLogo();
}
function attachLogo(){
	$("#logo").click(function(){
		pageTracker._trackEvent('Pages', 'Click', 'Home');
		$("#bestDay").animate({"left": -100},1000,"linear");
		$(".content").fadeOut(1000);
		resetSection(theSection);
		prevSection=theSection;
		theSection="home";
		$("#girl1").animate({left: "78px"},1000);
		$("#elephant").animate({left: "222px"},1000);
		$("#annete").animate({left: "666px"},1000);
		$("#goat").animate({left: "865px"},1000);
		$("#ball").animate({left: "13px"},1000);
		if(prevSection=="links"){
			if($.browser.msie){
				$("#annete").show();	
			} else {
				$("#annete").fadeIn(500);
			}
		}
		if(prevSection=="media"){
			if($.browser.msie){
				$("#elephant").show();	
			} else {
				$("#elephant").fadeIn(500);
			}
		}
	});
}
function setLinks(){
	$("#info").click(function(){
		loadInfo(this);
	});
	$("#links").click(function(){
		loadLinks(this);
	});
	$("#show").click(function(){
		loadShow(this);
	});
	$("#media").click(function(){
		loadMedia(this);
	});
	$("#mediaNav #images").click(function(){
		loadImages();									 
	});
	$("#mediaNav #audio").click(function(){
		loadAudio();		
	});
	$("#mediaNav #video").click(function(){
		loadVideo();								
	});
	$("#mediaContent #leftarrow").click(function(){
		changeImg('left');				 
	});
	$("#mediaContent #rightarrow").click(function(){
		changeImg('right');				 
	});
}
function resetSection(section){
	$(".content").fadeOut(1000);						
	$("#topNav li").removeClass("on");
	switch(section) {
		case "info":
			$("#info img").css("cursor","pointer");
			if($.browser.msie){
				$("#infoDots").hide();	
				$("#infoback").hide();	
			} else {
				$("#infoDots").fadeOut(500);
				$("#infoback").fadeOut(1000);
			}
			break;
		case "links":
			if($.browser.msie){
				$("#linksDots").hide();	
				$("#linksback").hide();
			} else {
				$("#linksDots").fadeOut(500);
				$("#linksback").fadeOut(500);
			}
			$("#links img").css("cursor","pointer");
			break;
		case "shows":
			if($.browser.msie){
				$("#showsback").hide();	
			} else {
				$("#showsback").fadeOut(500);
			}
			$("#show img").css("cursor","pointer");
			break;
		case "media":
			$("#media img").css("cursor","pointer");
			break;
		default:
			break;
	}
}
function loadInfo(obj){
	if(theSection!="info"){
		$("#info img").css("cursor","default");
		resetSection(theSection);
		$(obj).addClass("on");
		prevSection=theSection;
		theSection="info";
		$("#bestDay").animate({"left": 0},1000,"linear");
		$("#girl1").animate({left: "553px"},1000, function(){
			$("#infoContent").load("infoContent.html",function(){
			$("#infoContent").fadeIn(1000);
			if($.browser.msie){
				$("#infoback").show();	
			} else {
				$("#infoback").fadeIn(400);
			}
			});							   
		});
		$("#elephant").animate({left: "272px"},1000);
		$("#ball").animate({left: "432px"},1000);
		$("#annete").animate({left: "666px"},1000);
		$("#goat").animate({left: "865px"},1000);
		if($.browser.msie){
			$("#infoDots").show();
			if(prevSection=="links"){
				$("#annete").show();
			}
			if(prevSection=="media"){
				$("#elephant").show();	
			}
		} else {
			$("#infoDots").fadeIn(500);
			if(prevSection=="links"){
				$("#annete").fadeIn(500);
			}
			if(prevSection=="media"){
				$("#elephant").fadeIn(500);
			}
		}
	}
}
function loadLinks(obj){
	if(theSection!="links"){
		$("#links img").css("cursor","default");
		resetSection(theSection);
		prevSection=theSection;
		theSection="links";
		$(obj).addClass("on");
		$("#bestDay").animate({"left":-1048},1000,"linear");
		$("#annete").hide();	
		$("#goat").animate({left: "553px"},1000, function(){
			$("#linksContent").load("linksContent.html",function(){
				if($.browser.msie){
					$("#linksback").show();	
				} else {
					$("#linksback").fadeIn(1000);
				}
				$("#linksContent").fadeIn(1000);													 
			});												  
		});
		$("#ball").animate({left: "13px"},1000);
		$("#girl1").animate({left: "78px"},1000);
		$("#elephant").animate({left: "222px"},1000);
		if(prevSection=="media"){
			if($.browser.msie){
				$("#elephant").show();	
			} else {
				$("#elephant").fadeIn(500);
			}
		}
		if($.browser.msie){
			$("#linksDots").show();	
		} else {
			$("#linksDots").fadeIn(500);
		}
	}
}
function loadShow(obj){
	if(theSection!="shows"){
		$("#show img").css("cursor","default");
		resetSection(theSection);
		prevSection=theSection;
		theSection="shows";
		$(obj).addClass("on");
		$("#bestDay").animate({"left":-430},1000,"linear");
		$("#goat").animate({left: "885px"},1000);
		$("#annete").animate({left: "794px"},1000, function(){
			$("#showsContent").load("showsContent.html",function(){
				if($.browser.msie){
					$("#showsback").show();	
				} else {
					$("#showsback").fadeIn(1000);
				}
				$("#showsContent").fadeIn(1000);													 
			});													
		});
		$("#ball").animate({left: "13px"},1000);
		$("#girl1").animate({left: "78px"},1000);
		$("#elephant").animate({left: "222px"},1000);
		if(prevSection=="links"){
			if($.browser.msie){
				$("#annete").show();	
			} else {
				$("#annete").fadeIn(500);
			}
		}
		if(prevSection=="media"){
			if($.browser.msie){
				$("#elephant").show();	
			} else {
				$("#elephant").fadeIn(500);
			}
		}
	}
}
function loadMedia(obj){
	if(theSection!="media"){
		$("#media img").css("cursor","default");
		resetSection(theSection);
		prevSection=theSection;
		theSection="media";
		$(obj).addClass("on");
		$("#bestDay").animate({"left":-850},1000,"linear");
		$("#elephant").hide();
		$("#girl1").animate({left: "33px"},1000);
		$("#ball").animate({left: "-20px"},1000);
		$("#annete").animate({left: "794px"},1000);
		$("#goat").animate({left: "865px"},1000);
		if(prevSection=="links"){
			if($.browser.msie){
				$("#annete").show();	
			} else {
				$("#annete").fadeIn(500);
			}
		}
		if(prevSection=="media"){
			if($.browser.msie){
				$("#elephant").show();	
			} else {
				$("#elephant").fadeIn(500);
			}
		}
		loadImages();
	}
}
function moveBalloon(){
	var thePosition=Math.floor(Math.random()*6);
	switch(thePosition){
		case 1:
			$("#balloon").css("left","760px");			
			break;
		case 2:
			$("#balloon").attr("width","44");
			$("#balloon").attr("height","93");
			$("#balloon").css("left","280px");
			$("#balloon").css("top","40px");
			break;
		case 3:
			$("#balloon").css("top","25px");
			$("#balloon").css("left","640px");
			break;
		case 4:
			$("#balloon").css("top","25px");
			$("#balloon").css("left","120px");
		case 5:
			$("#balloon").css("top","45px");
			$("#balloon").css("left","25px");
			$("#balloon").attr("width","40");
			$("#balloon").attr("height","83");
		default:
			break;
	}
	$("#balloon").show();
}
function loadImages(){
	$("#mediaContent #inner").load("imageContent.html",function(){
		var theImages=$("#mediaContent #inner img");
		$("#lastNum").html($(theImages).length);
		$(theImages[imgIndex]).show();
		$("#imgPagination").show();
		$("#mediaContent").fadeIn(1000,function(){
			if($.browser.msie){
				$("#mediaNav li").show();
			} else {
				$("#mediaNav li").fadeIn(500);
			}
		});
		$("#mediaContent #inner img").click(function(){
			changeImg('right');											 
		});
	});
}
function loadVideo(){
	$("#mediaContent #inner").load("videoContent.html",function(){
		$("#imgPagination").hide();
		$("#mediaContent").fadeIn(1000);												
	});
}
function loadAudio(){
	$("#mediaContent #inner").load("musicContent.html", function(){
		$("#imgPagination").hide();
		$("#mediaContent").fadeIn(1000);					 
	});
}
function changeImg(dir){
	var theImgs=$("#mediaContent #inner img");
	$(theImgs[imgIndex]).fadeOut(500,function(){
		if(dir=="left"){
			if(imgIndex==0){
				imgIndex=$(theImgs).length-1;
			} else {
				imgIndex--;	
			}
		} else {
			if(imgIndex==$(theImgs).length-1){
				imgIndex=0;
			} else {
				imgIndex++;
			}
		}
		$("#firstNum").html(imgIndex+1);
		$(theImgs[imgIndex]).fadeIn(500);
	});
}
function checkHash(){
	var hashArry=new Array("infopage","showpage","mediapage","linkspage");
	var theHash=document.location.toString();
	for(var i=0;i<hashArry.length;i++){
		if(theHash.indexOf(hashArry[i])>-1){
			loadSection(hashArry[i]);
		}
	}
}
function loadSection(theHash){
	switch(theHash){
		case "infopage":
			loadInfo($("#info"));
			break;
		case "showpage":
			loadShow($("#show"));
			break;
		case "mediapage":
			loadMedia($("#media"));
			break;
		case "linkspage":
			loadLinks($("#links"));
			break;
	}
}