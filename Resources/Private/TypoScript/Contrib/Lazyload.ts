page {
	includeJSFooter {
		lazyload = EXT:t3sbootstrap/Resources/Public/Contrib/Lazyload/jquery.lazyload.js
	}
}

lib.t3sbs.lazyload.jsFooterInline = TEXT
lib.t3sbs.lazyload.jsFooterInline.value (

	jQuery('img.img-responsive').lazyload({
	    effect : 'fadeIn',
	    skip_invisible : false
	});
	jQuery('.panel').on('shown.bs.collapse', function () {
		if ( !jQuery(this).hasClass('loaded') ) {
			jQuery('img.img-responsive').lazyload({
		    	effect : 'fadeIn',
				skip_invisible : false
			});
			jQuery(this).addClass('loaded');
		}
	});
	jQuery('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = jQuery(e.target).prop('hash');
		if ( !jQuery(e.target).hasClass('loaded') ) {
			jQuery(target +' img.img-responsive').lazyload({
		    	effect : 'fadeIn',
				skip_invisible : false
			});
			jQuery(e.target).addClass('loaded');
		}
	});

	jQuery('.modal').on('shown.bs.modal', function () {
		if ( !jQuery(this).hasClass('loaded') ) {
			jQuery('.modal img.img-responsive').lazyload({
		    	effect : 'fadeIn',
				skip_invisible : false
			});
			jQuery(this).addClass('loaded');
		}
	});

)

