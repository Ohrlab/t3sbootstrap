page {
	includeCSS {
		colorboxcss = EXT:t3sbootstrap/Resources/Public/Contrib/Colorbox/Colorbox.css
	}
	includeJSFooter {
		colorboxjs = EXT:t3sbootstrap/Resources/Public/Contrib/Colorbox/jquery.colorbox-min.js
	}
}

lib.t3sbs.colorbox.jsFooterInline = COA
lib.t3sbs.colorbox.jsFooterInline {
	10 = TEXT
	10.value (
		jQuery('a.gallery').colorbox({
			maxWidth:'95%',
			maxHeight:'95%',
			slideshow:true,
			current:' {current} / {total}',
			opacity:'0.80',
			transition:'none',
			speed:'550',
			slideshowSpeed:'5500',
			overlayClose:true,
			fixed:false,
			escKey:true,
			arrowKey:true,
			loop:true,
			title: function() { return $(this).data('original-title')},
			close:'<span class="glyphicon glyphicon-remove"></span>',
			previous:'<span class="glyphicon glyphicon-chevron-left"></span>',
			next:'<span class="glyphicon glyphicon-chevron-right"></span>',
			slideshowStart:'<span class="glyphicon glyphicon-play"></span>',
			slideshowStop:'<span class="glyphicon glyphicon-pause"></span>',
			rel: function() { return $(this).data('rel')}
		});
	)
	10.if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.slideshow}

	15 = TEXT
	15.value (
		jQuery('a.gallery').colorbox({
			close:'<span class="glyphicon glyphicon-remove"></span>',
			title: function() { return $(this).data('original-title')},
			maxWidth:'95%',
			maxHeight:'95%'
		});
	)
	15.if.isFalse = {$plugin.t3sbootstrap_configuration.extensions.lightbox.slideshow}

	20 = TEXT
	20.value (
	if (window.matchMedia) {
	    widthCheck = window.matchMedia("(max-width: 640px)");
	    if (widthCheck.matches){
	        $.colorbox.remove();
	    }
	}
	)
	20.if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.widthCheck}

}
