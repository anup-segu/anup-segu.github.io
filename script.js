$(document).ready(function(){
	$('#about').css('order','1');
	$('#professional').css('order','2');
	$('#travel').css('order','3');
	$('#contact').css('order','4');

	//Navigation Animation
	var navToggle = 0;
	var aboutToggle = 0;
	var profToggle = 0;
	var travelToggle = 0;

	$('#contactnav').click(function(){
		contactFocus();
	});

	$('#profnav').click(function(){
		professionalFocus();
	});

	$('#travelnav').click(function(){
		travelFocus();
	});

	$('#aboutnav').click(function(){
		aboutFocus();
	});

	function contactFocus(){
		if(navToggle == 4){
			$('#contactnav').removeClass('navigationHover');
			$('#profnav').removeClass('navigationHover');
			$('#travelnav').removeClass('navigationHover');
			$('#aboutnav').removeClass('navigationHover');
			$('#about').css('order','1');
			$('#professional').css('order','2');
			$('#travel').css('order','3');
			$('#contact').css('order','4');
			navToggle = 0;
		}
		else {
			$('#contactnav').addClass('navigationHover');
			$('#profnav').removeClass('navigationHover');
			$('#travelnav').removeClass('navigationHover');
			$('#aboutnav').removeClass('navigationHover');
			if(navToggle == 1){
				aboutExpand();
			}
			if(navToggle == 2){
				profExpand();
			}
			if(navToggle == 3){
				travelExpand();
			}
			$('#about').css('order','2');
			$('#professional').css('order','3');
			$('#travel').css('order','4');
			$('#contact').css('order','1');
			navToggle = 4;
		}
	}

	function professionalFocus(){
		if(navToggle == 2){
			$('#contactnav').removeClass('navigationHover');
			$('#profnav').removeClass('navigationHover');
			$('#travelnav').removeClass('navigationHover');
			$('#aboutnav').removeClass('navigationHover');
			$('#about').css('order','1');
			$('#professional').css('order','2');
			$('#travel').css('order','3');
			$('#contact').css('order','4');
			profExpand();
			navToggle = 0;
		}
		else {
			$('#profnav').addClass('navigationHover');
			$('#contactnav').removeClass('navigationHover');
			$('#travelnav').removeClass('navigationHover');
			$('#aboutnav').removeClass('navigationHover');
			if(navToggle == 1){
				aboutExpand();
			}
			if(navToggle == 3){
				travelExpand();
			}
			$('#about').css('order','2');
			$('#professional').css('order','1');
			$('#travel').css('order','3');
			$('#contact').css('order','4');
			profExpand();
			navToggle = 2;
		}
	}

	function travelFocus(){
		if(navToggle == 3){
			$('#contactnav').removeClass('navigationHover');
			$('#profnav').removeClass('navigationHover');
			$('#travelnav').removeClass('navigationHover');
			$('#aboutnav').removeClass('navigationHover');
			$('#about').css('order','1');
			$('#professional').css('order','2');
			$('#travel').css('order','3');
			$('#contact').css('order','4');
			travelExpand();
			navToggle = 0;
		}
		else {
			$('#travelnav').addClass('navigationHover');
			$('#profnav').removeClass('navigationHover');
			$('#contactnav').removeClass('navigationHover');
			$('#aboutnav').removeClass('navigationHover');
			if(navToggle == 1){
				aboutExpand();
			}
			if(navToggle == 2){
				profExpand();
			}
			$('#about').css('order','2');
			$('#professional').css('order','3');
			$('#travel').css('order','1');
			$('#contact').css('order','4');
			travelExpand();
			navToggle = 3;
		}
	}

	function aboutFocus(){
		if(navToggle == 1){
			$('#contactnav').removeClass('navigationHover');
			$('#profnav').removeClass('navigationHover');
			$('#travelnav').removeClass('navigationHover');
			$('#aboutnav').removeClass('navigationHover');
			$('#about').css('order','1');
			$('#professional').css('order','2');
			$('#travel').css('order','3');
			$('#contact').css('order','4');
			aboutExpand();
			navToggle = 0;
		}
		else {
			$('#aboutnav').addClass('navigationHover');
			$('#travelnav').removeClass('navigationHover');
			$('#profnav').removeClass('navigationHover');
			$('#contactnav').removeClass('navigationHover');
			if(navToggle == 2){
				profExpand();
			}
			if(navToggle == 3){
				travelExpand();
			}
			$('#about').css('order','1');
			$('#professional').css('order','2');
			$('#travel').css('order','3');
			$('#contact').css('order','4');
			aboutExpand();
			navToggle = 1;
		}
	}

	function aboutExpand(){
		if(aboutToggle == 1){
			$('#about').animate({width: "48.5%"},100);
			aboutToggle = 0;
			$('#aboutinfo').css('width', "65%");
			$('.subtitle').css('width', "65%");
			$('.profilespace').css('width', "30%");
			$('#bio').removeClass('bioshow');
			$('#bio').addClass('biohide');
		}
		else {
			$('#about').animate({width: "99%"},300);
			aboutToggle = 1;
			$('#aboutinfo').css('width', "45%");
			$('.subtitle').css('width', "45%");
			$('.profilespace').css('width', "15%");
			$('#bio').removeClass('biohide');
			$('#bio').addClass('bioshow');
		}
	}

	function profExpand(){
		if(profToggle == 1){
			$('#professional').animate({width: "48.5%"},100);
			profToggle = 0;
			$('.resumebox').css('width', "100%");
			$('#skillsBox').removeClass('skillsShow');
			$('#skillsBox').addClass('skillsHide');
			$('#learnBox').removeClass('learnShow');
			$('#learnBox').addClass('learnHide');
		}
		else {
			$('#professional').animate({width: "99%"},300);
			profToggle = 1;
			$('.resumebox').css('width', "50%");
			$('#skillsBox').removeClass('skillsHide');
			$('#skillsBox').addClass('skillsShow');
			$('#learnBox').removeClass('learnHide');
			$('#learnBox').addClass('learnShow');
		}
	}

	function travelExpand(){
		if(travelToggle == 1){
			$('#travel').animate({width: "48.5%", height: "48.5%"},100);
			travelToggle = 0;
		}
		else {
			$('#travel').animate({width: "99%", height: "99%"},300);
			travelToggle = 1;
		}
	}


});
