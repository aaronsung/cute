function validSession(callback){
	$.post('/dynamic/validSession', function (result) {
		result = eval("(" + result + ")");
		var session = result.session;
		if(session==1){
			if(window.location.protocol=='file:'){
				$('#forbidTip').show();
			}else{
				$('#forbidTip').hide();
				if(callback!=null){callback();}
			}
		}else{
			$('#forbidTip').show();
		}
	}).error(
		function(){
			$('#forbidTip').show();
		}
	);
}

function getScore() {
	$.post('/webgame/getWebgameScore/gid/36', function (result) {
		result = eval("(" + result + ")");
		var easy_average_score = result.average_score.level_1;
		if (easy_average_score == 0) {
			easy_average_score = "0.00";
		}
		var easy_global_score = result.global_average.level_1;
		if (easy_global_score == 0) {
			easy_global_score = "0.00";
		}
		var medium_average_score = result.average_score.level_2;
		if (medium_average_score == 0) {
			medium_average_score = "0.00";
		}
		var medium_global_score = result.global_average.level_2;
		if (medium_global_score == 0) {
			medium_global_score = "0.00";
		}
		var hard_average_score = result.average_score.level_3;
		if (hard_average_score == 0) {
			hard_average_score = "0.00";
		}
		var hard_global_score = result.global_average.level_3;
		if (hard_global_score == 0) {
			hard_global_score = "0.00";
		}

		$('.easy_average_score').html(easy_average_score + "%");
		$('.easy_global_score').html(easy_global_score + "%");
		$('.medium_average_score').html(medium_average_score + "%");
		$('.medium_global_score').html(medium_global_score + "%");
		$('.hard_average_score').html(hard_average_score + "%");
		$('.hard_global_score').html(hard_global_score + "%");

		if (easy_average_score == 0) {
			$('.easy_average_score').css('color', '#000000');
		} else if (easy_average_score < 70) {
			$('.easy_average_score').css('color', '#FF0000');
		} else {
			$('.easy_average_score').css('color', '#0c7f12');
		}
		if (easy_global_score == 0) {
			$('.easy_global_score').css('color', '#000000');
		} else if (easy_global_score < 70) {
			$('.easy_global_score').css('color', '#FF0000');
		} else {
			$('.easy_global_score').css('color', '#0c7f12');
		}

		if (medium_average_score == 0) {
			$('.medium_average_score').css('color', '#000000');
		} else if (medium_average_score < 70) {
			$('.medium_average_score').css('color', '#FF0000');
		} else {
			$('.medium_average_score').css('color', '#0c7f12');
		}

		if (medium_global_score == 0) {
			$('.medium_global_score').css('color', '#000000');
		} else if (medium_global_score < 70) {
			$('.medium_global_score').css('color', '#FF0000');
		} else {
			$('.medium_global_score').css('color', '#0c7f12');
		}

		if (hard_average_score == 0) {
			$('.hard_average_score').css('color', '#000000');
		} else if (hard_average_score < 70) {
			$('.hard_average_score').css('color', '#FF0000');
		} else {
			$('.hard_average_score').css('color', '#0c7f12');
		}

		if (hard_global_score == 0) {
			$('.hard_global_score').css('color', '#000000');
		} else if (hard_global_score < 70) {
			$('.hard_global_score').css('color', '#FF0000');
		} else {
			$('.hard_global_score').css('color', '#0c7f12');
		}

	});
}
$(document).ready(function(){
	validSession(null);
	getScore();
var level = "easy";
	var level_mode=1;

$('.modech .ch1').click(function(){
    level = "easy";
	level_mode=1;
    $('.modech .ch1 .rb1').hide();
    $('.modech .ch1 .rb2').show();
    $('.modech .ch2 .rb1').show();
    $('.modech .ch2 .rb2').hide();
    $('.modech .ch3 .rb1').show();
    $('.modech .ch3 .rb2').hide();
});
$('.modech .ch2').click(function(){
    level = "medium";
	level_mode=2;
    $('.modech .ch2 .rb1').hide();
    $('.modech .ch2 .rb2').show();
    $('.modech .ch1 .rb1').show();
    $('.modech .ch1 .rb2').hide();
    $('.modech .ch3 .rb1').show();
    $('.modech .ch3 .rb2').hide();
});
$('.modech .ch3').click(function(){
    level = "hard";
	level_mode=3;
    $('.modech .ch3 .rb1').hide();
    $('.modech .ch3 .rb2').show();
    $('.modech .ch1 .rb1').show();
    $('.modech .ch1 .rb2').hide();
    $('.modech .ch2 .rb1').show();
    $('.modech .ch2 .rb2').hide();
});

//// FUNCTIONS

function playSound(sid) {
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var audio = document.getElementById(sid);
        audio.volume = 1;
	audio.currentTime = 0;
        audio.play();    
    } else {
        jQuery("#" + sid)[0].volume = 1;
        jQuery("#" + sid)[0].load();
        jQuery("#" + sid)[0].play();
    }
}


function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}


var wWth; // Window Width
var wHgh; // Window Height
var wW2; // Window Width center
var wH2; // Window Height Center
var scrRatio; // Window W / Window H
var scrDif; // Difference between template screen W and on the stage

var matchList = new Array(); // List of 1 and 0 randomly choosed
var icon1 = new Array();
var icon2 = new Array();
for (var i= 1; i<251; i++) {
    icon1.push(i);
	icon2.push(i);
}
    
function prepareAll(){
	level = "easy";
	$('.modech .ch1 .rb1').hide();
    $('.modech .ch1 .rb2').show();
    $('.modech .ch2 .rb1').show();
    $('.modech .ch2 .rb2').hide();
    $('.modech .ch3 .rb1').show();
    $('.modech .ch3 .rb2').hide();
    usedQholder = "";
    $('.introScreen').fadeIn();
    $('.results').hide();
    $('.testContent').hide();
	shuffle(icon1);
	shuffle(icon2);
	matchList.length = 0;
	for (var i= 0; i<250; i++) {
		matchList.push(Math.round(Math.random()));
	}
    resize();
}
prepareAll();

function resize() {
    
    wWth = $(window).width();
    wHgh = $(window).height();
    
     /// Screen Center
    wW2 = wWth / 2;
    wH2 = wHgh / 2;
    
    scrRatio = wWth / wHgh;
    scrDif = 1280 / $(window).width();

	
    
    var introCTop = $('.introContent').css('margin-top');
    var introCTopN = parseInt(introCTop.substring(0,introCTop.length - 2));
    if (wWth > 840) {
	$('.introScreen  .scrolling').css({
	    'height': wHgh - (introCTopN * 3.2) - $('.introScreen h1').height()
	});
    } else  if (wWth < 841 && wWth > 760) {
   
	$('.introScreen  .scrolling').css({
	    'height': wHgh - (introCTopN * 4.5) - $('.introScreen h1').height() - $('.introScreen .introButton .startBt').height()
	});
    } else  if (wWth < 761 && wWth > 440) {
	$('.introScreen  .scrolling').css({
	    'height': wHgh - (introCTopN * 4.5) - ($('.introScreen h1').height() + 90)
	});
    } else  if (wWth < 441) {
	$('.introScreen  .scrolling').css({
	    'height': wHgh - (introCTopN * 4.5) - ($('.introScreen h1').height() + 100)
	});
    }
	
	//$('#practice .box .opts .icn').height($('#practice .box .opts .icn').width());
	//$('#test .box .opts .icn').height($('#test .box .opts .icn').width());
    
    if (navigator.appName == 'Microsoft Internet Explorer' ||  !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv 11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1))
    {
		if (wWth < 1040) {
			$('.img1').css({'width': '80%'});
		}
		if (wWth < 940) {
			$('.results').css({
				'margin-top': '0px',
				'margin-bottom': '0px'
			});
			$('.results .screenSh').css({
				'background-color': '#a8a698',
				'margin-bottom': '0px',
				'padding-bottom': '0px',
				'width': '100%',
				'margin-left': '0%',
				'height': '100%',
				'margin-top': '0px'
			});
		}
		if (wWth < 860) {
			$('.introScreen').css({'height': '100%'});
			$('.introScreen .introContent').css({
				'margin': '2% 3%',
				'float': 'none',
				'width': '94%'
			});
			$('.introScreen .scrolling').css({'min-height': '200px'});
			$('.introScreen .introButton .modech').css({
				'bottom': '12px',
				'height': '34px',
				'position': 'absolute',
				'text-align': 'left',
				'padding-bottom': '0px',
				'border-bottom': 'none'
			});
			$('.introScreen .introButton .modech h3').css({
				'margin': '0px',
				'float': 'left'
			});
			$('.introScreen .introButton .modech h3 span').css({'display': 'inline'});
			$('.introScreen .introButton .modech .ch').css({
				'float': 'left',
				'margin-left': '15px',
				'margin-top': '5px'
			});
			$('.introScreen .introButton').css({
				'float': 'none',
				'text-align': 'right',
				'margin': '10px 3%',
				'width': '94%'
			});
			$('.introScreen .introButton .practiceBt').css({
				'bottom': '15px',
				'right': '150px',
				'cursor': 'pointer',
				'height': '34px',
				'position': 'absolute',
				'width': '110px'
			});
			$('.introScreen .introButton .startBt').css({
				'bottom': '15px',
				'right': '20px',
				'cursor': 'pointer',
				'height': '34px',
				'position': 'absolute',
				'width': '110px'
			});
			$('.testContent .box').css({
				'border': '0px',
				'border-radius': '0px',
				'width': '100%',
				'height': '100%',
				'top': '0',
				'left': '0'
			});
			$('.optionsBox').css({
			  'float': 'none',
			  'width': '98%',
			  'padding': '10px 1%',
			  'border-right': '0px',
			  'height': 'auto'
			});
			$('.testContent .box .quest').css({
				'font-size': '20px',
				'margin-top': '80px'
			});
			$('.testContent .box .opts').css({
				'position': 'static',
				'margin': '20px auto 0'
			});
			
			$('.results').css({'padding-top': '0'}); 
		}
		if (wWth < 860 && wHgh < 600) {
			$('.introScreen .scrolling').css({
				'min-height': '100px'
			});
			$('.testContent .opt .tx').css({
				'float': 'left',
				'width': '5%'
			});
			$('.testContent .opt .answ').css({
				'float': 'left',
				'margin-left': '5%',
				'margin-top': '0',
				'width': '40%'
			});
			$('.testContent .box .quest').css({
				'margin-top': '0px'
			});
			$('.testContent .box .opts').css({'margin-top': '30px'});
			$('.testContent .opt').css({'margin-top': '20px'});
		}
		if (wWth > 750) {
			$('.results .screenSh h2').css({'font-size': '22px'});
			$('.introScreen .introButton .modech').css({'bottom': '60px'});
			$('.introScreen .introButton .practiceBt').css({'right': 'auto'});
			$('.introScreen .introButton .startBt').css({
				'right': 'auto',
				'left': '30px'
			});
			$('.testContent .box .opts').css({
				'width': '400px'
			});
			$('.testContent .box .opts .icn').css({
				'width': '80px',
				'height': '80px'
			});
			$('.testContent .box .opts .sliderMain').css({
				'width': '224px',
				'margin': '0 5px'
			});
		}
		if (wWth > 600 && wHgh < 400) {
			$('.testContent .box .opts .questImage').css({
				'margin-bottom': '10px',
				'margin-top': '10px'
			});
			$('.testContent .opt .tx').css({'width': '5%'});
			$('.testContent .box .quest').css({'font-size': '16px'});
			$('.testContent .box .opts .questImage').css({'width': '220px'});
		}
		if (wWth > 540) {
			$('.img1').css({'width': '100%'});
			$('.testContent .opt').css({'font-size': '18px'});
			$('.testContent .opt .im').css({'width': '10%'});
			$('.testContent .opt .tx').css({'width': '90%'});
			$('.testContent .opt .answ').css({
				'margin-top': '5px',
				'width': '90%'
			});
			$('.testContent .box .quest').css({'font-size': '16px'});
			$('.testContent .opt .tx').css({'width': '100%'});
			$('.results .im').css({'width': '10%'});
			$('.results .tx').css({'width': '90%'});
			$('.results .screenSh .cont').css({'padding': '15px 5px'});
			$('.results .screenSh .contLast').css({'padding': '20px 5px'});
			$('.block').css({
				'margin-left': '2%',
				'width': '40%'
			});
			$('.results .screenSh h1').css({'font-size': '26px'});
			$('.blockData').css({
				'margin-right': '0',
				'width': '56%'
			});
			$('.results .qList .sect').css({'padding': '10px 1%'});
			$('.results .qList .sect .qnumber').css({'width': '6%'});
			$('.results .qList .sect .ropt').css({
				'margin-left': '1%',
				'width': '22%'
			});
			$('.results .qList .sect .ransw').css({'width': '80%'});
			$('.results .qList .sect .ropt .markb').css({'width': '20%'});
		}
		if (wWth > 440 && wHgh < 320) {
			$('.optionsBox').css({'padding': '5px 1% 0'});
			$('.testContent .box .opts .questImage').css({
				'margin-bottom': '0px',
				'margin-top': '0px'
			});
			$('.testContent .box .opts').css({'margin-top': '20px'});
			$('.testContent .opt, .testContent .box .opts .questImage').css({'margin-top': '10px'});
			$('.testContent .box .opts .questImage').css({'width': '260px'});
		}
		if (wWth > 440) {
			$('#practice .box .quest').css({'width': '100%'});
			$('#test .box .quest').css({'width': '70%'});
			$('.testContent .box .opts').css({'top': '120px'});
			$('#practice .opt .markb').css({
				'width': '90%',
				'text-align': 'center'
			});
		}
		if (wWth > 380) {
			$('.introScreen .introButton .modech').css({
				'bottom': '80px',
				'font-size': '13px'
			});
			$('.introScreen .introButton .modech h3').css({
				'font-size': '13px',
				'float': 'none',
				'margin': '3px 0'
			});
			$('.introScreen .introButton .modech .ch').css({
				'margin-left': '0',
				'margin-right': '10px',
				'margin-top': '0px'
			});
			$('.testContent .box .quest').css({'margin-top': '0px'});
			$('.testContent .box .circ').css({'margin-top': '5px'});
			$('.testContent .c4btn, .testContent .markb4').css({'width': '28%'});
			$('.testContent .btnSame, .testContent .markSame').css({'margin-left': '20%'});
			$('.testContent .box .timer').css({
				'margin-top': '0',
				'right': '8px'
			});
		}
    }

};


$( window ).resize(function() {
	resize();
});

var qTime = 1000; // Time in miliseconds for visibility question duration
var mode = 0; // 0 is practice, 1 is test

$('.introScreen .introButton .practiceBt').click(function(){
	mode = 0;
	$('.introScreen').hide();
    $('#test').show();
    game();
    resize();
});

$('.introScreen .introButton .startBt').click(function(){
	mode = 1;
    $('.introScreen').hide();
    $('#test').show();
    game();
	resize();
});

    


var cIm = 0; // Current Image counter ... 0, 1, 2, 3


var matchImAr = new Array(); // 0 and 1 Values for not match and match
var corrects = 0; // Correct Answers
var clickedQuestions = new Array(); // Array of questions which user has click
var wrongChoosed = new Array(); // Array of wrong Choosed Option

function game() {
    cIm = 0;
	corrects = 0; 
	matchImAr.length = 0;
	clickedQuestions.length = 0;
    wrongChoosed.length = 0;
	
	$('.testContent .timer').html("02:00");
	qtimer();
	if (mode == 0) {
		if( /Android|webOS|iPad|Opera Mini/i.test(navigator.userAgent) ) {
			qTime = 1200;
		} else {
			qTime = 1000;
		}
	} else {
		if (level == "easy") {
			if( /Android|webOS|iPad|Opera Mini/i.test(navigator.userAgent) ) {
				qTime = 1200;
			} else {
				qTime = 1000;
			}
		} else if (level == "medium") {
			if( /Android|webOS|iPad|Opera Mini/i.test(navigator.userAgent) ) {
				qTime = 900;
			} else {
				qTime = 750;
			}
		} else if (level == "hard") {
			if( /Android|webOS|iPad|Opera Mini/i.test(navigator.userAgent) ) {
				qTime = 650;
			} else {
				qTime = 500;
			}
			
		}
	}
	$('#test').show();
    $('#test .box').show();
    question();
	
};  // Game function end



var ind; // Current Selected index 0, 1, 2
var clickCheck = 0; // Prevent double click per one question
var qInt; // Set timeout variable for question duration
var qInterv; // setInterval Variable
var correctCurrent = 0;
var secsT = ""; // Text variable to display seconds
var isTouch =  !!("ontouchstart" in window) || window.navigator.msMaxTouchPoints > 0; // Check if the device have touchScreen

function question() {
	clickCheck = 0;
	$('#test .eqBtn').blur();
	$('.practiceInfo').hide();
	$('.practiceInfo').html("");
   	
	if (matchList[cIm] == 0) { // If its the same
		$('#test .optionsBox .opts .icn1').html("<img class='icm1' src='/css/ReactionSpeedTest/shapes1/"+icon1[cIm]+".png'>");
		$('#test .optionsBox .opts .icn2').html("<img class='icm2' src='/css/ReactionSpeedTest/shapes1/"+icon1[cIm]+".png'>");
		matchImAr.push(cIm);
	} else { // If its different ...
		$('#test .optionsBox .opts .icn1').html("<img class='icm1' src='/css/ReactionSpeedTest/shapes1/"+icon1[cIm]+".png'>");
		$('#test .optionsBox .opts .icn2').html("<img class='icm2' src='/css/ReactionSpeedTest/shapes2/"+icon2[cIm]+".png'>");
	}

	$('#test .optionsBox .opts .icm2').on("load", function() {
		qInt = setTimeout(function(){
			cIm++;			
			question();			
		}, qTime);	
	});
}

$('#test .eqBtn').click(function(){
	if (clickCheck == 0) {
				
		if (matchList[cIm] == 0) { /// Correct
			corrects++;
			if (mode == 0) {
				$('.practiceInfo').html("CORRECT !");
				$('.practiceInfo').show();
			}
		} else {
			corrects--;
			if (mode == 0) {
				$('.practiceInfo').html("INCORRECT !");
				$('.practiceInfo').show();
			}
		}
	}
	clickCheck++;	
	
});

$(document).keydown(function(key) {

	if (key.which == 32) {
		if (clickCheck == 0) {		
			if (matchList[cIm] == 0) { /// Correct
				corrects++;
				if (mode == 0) {
					$('.practiceInfo').html("CORRECT !");
					$('.practiceInfo').show();
				}
			} else {
				corrects--;
				if (mode == 0) {
					$('.practiceInfo').html("INCORRECT !");
					$('.practiceInfo').show();
				}
			}
		}
	    clickCheck++;
	}
	
})


var counter = 0; // count seconds

function qtimer() {
	clearInterval(qInterv);
	$('#test .timer').html("02:00");
	counter = 120; 
	var tmin = 1; // 1
	var tSec = 60;
	qInterv = setInterval(function(){
		counter--;
		tSec--;
		if (tSec < 0) {
			tSec = 60;
			tmin--;
			if (tmin < 0) {
				clearTimeout(qInt);
				clearInterval(qInterv);
				$('#test .timer').html("00:00");
				if (mode == 0) {
					prepareAll();
				} else {
					gameEnd();
				}
			}
		}
		
		if (tSec < 10) {
			secsT = "0" + tSec;
		} else {
			secsT = tSec;
		}
		$('#test .timer').html("0"+ tmin +":" + secsT);

	}, 1000);
}

$('.results .screenSh .retakeBt').click(function(){
    prepareAll();
});

var usedQholder = "";
var optionsHolder;

function gameEnd(){
	clearTimeout(qInt);
    clearInterval(qInterv);
	
    $('#test .timer').html("00:00");
    $('.results .lvl').html(level + " Level");
	if (corrects < 0) {
		corrects = 0;
	}
    var percentResults = parseInt((corrects / matchImAr.length) * 100);
    $('.results #totalPerc').html(percentResults + "%");
	$.post('/webgame/htmlFlash', {
		"module": "36",
		"score" : percentResults,
		"level" : level_mode
	}, function (result) {
		getScore();
	});

	$('#test .box').fadeOut(function(){
	$('#test').hide();
	$('.results').fadeIn();
    });
    
}



   
});



