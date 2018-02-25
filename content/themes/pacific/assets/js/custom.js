(function($) {

/*------------------------------------------------------
/* Tweet it Like a Pro
/* ---------------------------------------------------*/
	$(".post .post-body blockquote").each(function(){
		var completeurl = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search;
			completeurl = encodeURIComponent(completeurl);

		var entityMap = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': '&quot;',
			"'": '&#39;',
			";": '&#58;',
		};
		var tweetshare = "https://twitter.com/share?url=" + completeurl;
		var getquote = $(this).find("p").text().replace(/[&<>"';\/]/g, function (s) { return entityMap[s]; });

		$(this).append("<div class='tweetthis'><a target='_blank' title='Tweet this' href='" + tweetshare + "&amp;text=" + getquote + " - via '>Tweet</a></div>")
	});


/*------------------------------------------------------
/* Hide element if empty
/* ---------------------------------------------------*/
	str = $('.pagination').text();
	if($.trim(str) === "") {
		$('.pagination-outer').remove();
	}


/*------------------------------------------------------
/* Navigation Overlay
/* ---------------------------------------------------*/
	$(function() {
		$('.toggle-search').click(function() {
			$('.search-overlay').toggleClass('open');
			$('body').toggleClass('no-scroll');
		});
		$('.toggle-menu').click(function() {
			$('.menu-overlay').toggleClass('open');
			$('body').toggleClass('no-scroll');
		});
	});

	/**
	 * Rearrange close button
	 */
	var yAxis = $(".icon-search, .icon-nav").offset();
	var SearchCloseButton = yAxis.top; $('.overlay .toggle-search').css({top: SearchCloseButton});
	var MenuCloseButton = yAxis.top; $('.overlay .toggle-menu').css({top: MenuCloseButton});


/*------------------------------------------------------
/* Search function / ghostHunter.js
/* ---------------------------------------------------*/
	$("#search-field").ghostHunter({
		results: ".search-result-inner",
		onKeyUp: true,
		info_template: "<h3 class='title'>Articles: {{amount}}</h3>",
		result_template: "<div><a class='title' href='{{link}}'>{{title}}</a><small>{{pubDate}}</small></div>",
		onComplete: function( results ){
			$("#search-result").show();
			$("html, body").animate({ scrollTop: 0 }, "fast");
		},
	});

}(jQuery));