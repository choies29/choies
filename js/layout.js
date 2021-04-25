// choies' Script v_210425

// for Porfilo item json and size
// ----------------------------------------------------------------------------!
$(document).ready(function(){
				
	$.ajax({

		url:"js/portfilo.json",
    	type: 'GET',
    	dataType: 'json'

	}).done(function(json){
		
		var html = "";

		$(".project_content").html('');

		$.each(json, function(idx, row) {
			
			html = $("#portfolioItem").html()
			.replace(/{id}/gi, row.id)
			.replace(/{img}/gi, row.img[0])
			.replace(/{project}/gi, row.project)
			.replace(/{date}/gi, row.date);

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
	$('body').on('click', '.btn_modal', function(){
	
	});


	// for function
	visualPosition();
	index_ani();

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

	$('.project_content .item').height($('.item').width()); 

}

function index_ani(){

	portfolioHeight();
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

function modalDetail(id){
	console.log(id);
	$('.modal').fadeIn(300);
	$('body').css("overflow","hidden");
}

function modalClose(){

	$('.modal').fadeOut(300);
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

