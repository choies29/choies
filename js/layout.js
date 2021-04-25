// choies' Script v_210425

// for item json and size
// ----------------------------------------------------------------------------!
$(document).ready(function(){
				
	$.ajax({
		url:"js/portfilo.json",
    	type: 'GET',
    	dataType: 'json',
	}).done(function(json){

		var html = "";

		$.each(json, function(idx, row) {
			
			html = $("#portfolioItem").html()
			.replace(/{img}/gi, row.img[0])
			.replace(/{project}/gi, row.project)
			.replace(/{date}/gi, row.date)
			.replace(/{category}/gi, row.category);

			$(".project_content").append(html);
		});

		console.log($('.item').width())
		imgHright();
	})

});


function imgHright(){

	$('.item').height($('.item').width()); 

}


// Function Declarations
// ----------------------------------------------------------------------------!

// for visual margin-top
function visualPosition(){
	var visualHeight = $('.visual').height();
	var positionTo = visualHeight / 2;

	$('.visual').css({'margin-top': '-' + (positionTo + 20) + 'px'});
}

// for mousewheel event
function mousewheel(){
	
	var windowHeight = $(window).height();

	if (windowHeight >= 600) {  
		$('section.full').each(function () {
			$(this).on('mousewheel DOMMouseScroll', function (e) {
				
				e.preventDefault();
				var delta = 0;

				if (!event) event = window.event;
				if (event.wheelDelta) {

					delta = event.wheelDelta / 120;
					if (window.opera) delta = -delta;

				} else if (event.detail) delta = -event.detail / 3;

				var moveTop = null;

				if (delta < 0) {

					if ($(this).next() != undefined) {
						moveTop = $(this).next().offset().top;
						
						$('.able .design').animate({paddingTop: '17rem'}, 1200, 'swing');
						$('.able .publishing').animate({paddingTop: '17rem'}, 1500, 'swing');
						$('.able .planning').animate({paddingTop: '17rem'}, 1800, 'swing');
					}

				} else {

					if ($(this).prev() != undefined) {
						moveTop = $(this).prev().offset().top;
					}
				}

				$('html,body').stop().animate({ 
					scrollTop: moveTop + 'px'
					}, { duration: 1000, complete: function (){}
				});
			});
		});
	}
}



// window ready
// ----------------------------------------------------------------------------!
$(document).ready(function(){
	
	// for nav click event
	$(document).on('click','nav a',function(){

		var targetmenu = $(this).attr('href');

		$('html, body').animate({
			scrollTop : $(targetmenu).offset().top
		},600, 'swing')
		
		$('section').removeClass('active');
		$(targetmenu).addClass('active');
	});


	//for modal
	$('body').on('click', '.btn_modal', function(){
		var modalImg = $(this).html();
		$('.modal').fadeIn(500);
		$('.modal_img').html(modalImg);
		$('body').css('overflow','hidden');
	});


	$('body').on('click', '.btn_close', function(){
		$(this).parent().parent('.modal').fadeOut(500);
		$('.modal_img').html('');
		$('body').css('overflow','overlay');
	});


	// for function
	visualPosition();
	//mousewheel();

});



// window resize
// ----------------------------------------------------------------------------!
$(window).resize(function() {

	//for windowHeight
	var windowHeight = $(window).height();

	if (windowHeight <= 599) { 
		$(window).off('mousewheel');
	}


	// for function
	visualPosition();


});



// window scroll top
// ----------------------------------------------------------------------------!
$(window).on('beforeunload', function() {
    
    $(window).scrollTop(0); 

});

