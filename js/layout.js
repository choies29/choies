// choies' Script v_210425

// for Porfilo item json
// ----------------------------------------------------------------------------!
$(document).ready(function(){
				
	$.ajax({

		url:"js/portfilo.json",
    	type: 'GET',
    	dataType: 'json'

	}).done(function(json){
		
		console.log('getJson!')
		var html = "";

		$(".project_content").html('');

		$.each(json, function(idx, row) {
			
			html = $("#portfolioItem").html()
			.replace(/{project}/gi, row.project)
			.replace(/{date}/gi, row.date)
			.replace(/{url}/gi, row.url)
			.replace(/{inDesign}/gi, row.inDesign)
			.replace(/{inPublishing}/gi, row.inPublishing)
			.replace(/{info}/gi, row.info)
			.replace(/{img_0}/gi, row.img[0])
			.replace(/{img_1}/gi, row.img)[1];


			$(".project_content").append(html);
		});
	})

});



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
	$('body').on('click', '.project_content .item', function(){
		var data = $(this).html();

		$('.modal').fadeIn(500);
		$('.madal_contnet').html(data);
		$('body').css('overflow','hidden');
	});


	// for function
	visualPosition();
	index_ani();
	portfolioHeight();

});



// Function Declarations
// ----------------------------------------------------------------------------!

// for visual margin-top
function visualPosition(){

	var visualHeight = $('.visual').height();
	var positionTo = visualHeight / 2;

	$('.visual').css({'margin-top': '-' + (positionTo + 20) + 'px'});

}

function portfolioHeight(){

	$('.project_content .item').height($('.project_content .item').width());

}

function index_ani(){

	scrollAni();

	$(window).scroll( function(){ scrollAni(); });

    function scrollAni(){

		var bottom_of_window = $(window).scrollTop() + $(window).height();

		$('.info_txt div, .able .item, .skill li').each( function(i){
			
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			
			if( bottom_of_window > bottom_of_object ){
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});

		// $('.able .item').each( function(i){
			
		// 	var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			
		// 	if( bottom_of_window > bottom_of_object / 1.2 ){
		// 		$(this).addClass('active');
		// 	} else {
		// 		$(this).removeClass('active');
		// 	}
		// });
	}
}

function modalDetail(){

	let detail = $(this).html();

	console.log(detail);

	$('.modal').fadeIn(300);
	$('.modal').html(modalImg);
	$('body').css("overflow","hidden");

}

function modalClose(){

	$('.modal').fadeOut(300);
	$('.madal_contnet').html('');
	$('body').css("overflow","overlay");
}

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

