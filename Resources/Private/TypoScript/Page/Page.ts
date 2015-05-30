# **********************************************************
# General PAGE setup
#
# including template, CSS + JS files
# **********************************************************

temp.globalSettings {

	company = {$plugin.t3sbootstrap_configuration.general.company.name}

	styles {
		navbar.onTop = {$plugin.t3sbootstrap_configuration.styles.navbar.onTop}
		navbar.style.inverse = {$plugin.t3sbootstrap_configuration.styles.navbar.style.inverse}
		navbar.style.fixed.top = {$plugin.t3sbootstrap_configuration.styles.navbar.style.fixed.top}
		navbar.footer.fullwidth = {$plugin.t3sbootstrap_configuration.styles.navbar.footer.fullwidth}
		jumbotron.fullwidth = {$plugin.t3sbootstrap_configuration.styles.jumbotron.fullwidth}
		jumbotron.bgImg.enable = {$plugin.t3sbootstrap_configuration.styles.jumbotron.bgImg.enable}
		bsHeader.enable = {$plugin.t3sbootstrap_configuration.styles.bsHeader.enable}
		footer.enable = {$plugin.t3sbootstrap_configuration.styles.footer.enable}
		footer.sticky = {$plugin.t3sbootstrap_configuration.styles.footer.sticky}
		container-fluid = {$plugin.t3sbootstrap_configuration.styles.container-fluid}
	}

	navigation {
		breadcrumb.enable = {$plugin.t3sbootstrap_configuration.navigation.breadcrumb.enable}
		navbar.enable = {$plugin.t3sbootstrap_configuration.navigation.navbar.enable}
		navbar.right.uidList = {$plugin.t3sbootstrap_configuration.navigation.navbar-right.uidList}
		navbar.search.enable = {$plugin.t3sbootstrap_configuration.navigation.navbar.search.enable}
		navbar_lang.enable = {$plugin.t3sbootstrap_configuration.navigation_lang.enable}
		navbar_lang.languages = {$plugin.t3sbootstrap_configuration.navigation_lang.languages}
		sidebar-subMenu.enable = {$plugin.t3sbootstrap_configuration.navigation.sidebar-subMenu.enable}
	}
	# enable/disable in EMconfig
	optionalContent = {$plugin.t3sbootstrap_configuration.general.optionalContent}
}

temp.jsFooterInline = COA
temp.jsFooterInline {
	1 = TEXT
	1.value = jQuery(function() {
#	20 = TEXT
#	20.value = jQuery(this).scrollTop(0);
	# link to top
	25 = TEXT
	25.value (
		var offset = 220;
		var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.back-to-top').fadeIn(duration);
			} else {
				jQuery('.back-to-top').fadeOut(duration);
			}
		});
		jQuery('.back-to-top').click(function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		});
	)
	25.if.isTrue.field = tx_t3sbootstrap_linkToTop
	# tooltip
	30 = TEXT
	30.value = jQuery('.content-row .csc-default a').tooltip({placement:'{$plugin.t3sbootstrap_configuration.general.tooltip_placement}'});
	30.if.isTrue = {$plugin.t3sbootstrap_configuration.general.tooltip}
	# colorbox (lightbox)
	50 < lib.t3sbs.colorbox.jsFooterInline
	50.if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}
	# lazyload
	60 < lib.t3sbs.lazyload.jsFooterInline
	60.if.isTrue =  {$plugin.t3sbootstrap_configuration.extensions.lazyload.enable}
	# navBar hover
	70 = TEXT
	70.value (
	    function toggleNavbarMethod() {
	        if (jQuery(window).width() > 768) {
				jQuery('ul.nav li.dropdown').hover(function() {
					$(this).find(' > .dropdown-menu').stop(true, true).delay(200).fadeIn();
				}, function() {
					$(this).find(' > .dropdown-menu').stop(true, true).delay(200).fadeOut();
				});
	        }
	    }
	    toggleNavbarMethod();
	)
	70.if.isTrue = {$plugin.t3sbootstrap_configuration.navigation.navbar.hover}
	# sitemap
	73 = TEXT
	#73.value = $('.tree').treed();
	73.value = $('.tree').treed({openedClass : 'glyphicon-folder-close', closedClass : 'glyphicon-folder-open'});
	73.if.isInList.data = TSFE:id
	73.if.value = {$plugin.t3sbootstrap_configuration.pages.sitemap.uidList}
	80 = TEXT
	80.value = if (location.hash) $(location.hash).collapse('show');
	# closing 1.
	99 = TEXT
	99.value = });
	# Back-Link in news detail view
	100 = TEXT
	100.value = function goBack() {window.history.back()}
	100.if.isTrue.data = GP:tx_news_pi1|news
}


page = PAGE
page {
	# Page template
	10 = FLUIDTEMPLATE
	10 {
		file = {$plugin.tx_t3sbootstrap.view.templateRootPath}Main.html

		partialRootPaths {
			0 = EXT:t3sbootstrap/Resources/Private/Partials/
			10 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
		}
		layoutRootPaths {
			0 = EXT:t3sbootstrap/Resources/Private/Layouts/
			10 = {$plugin.tx_t3sbootstrap.view.layoutRootPath}
		}

		variables {
			jumbotron_variable < lib.t3sheaderslider
		    subnav = TEXT
		    subnav.value = 1
		    subnav.if.isTrue.numRows {
		      table = pages
		      select.pidInList.data = leveluid:1
		      select.where = nav_hide!=1
		    }
			be_layout = TEXT
			be_layout.data = page:backend_layout // levelfield:-2, backend_layout_next_level, slide
		}
		settings < temp.globalSettings		
	}
	
	# CSS files to be included
	includeCSS {
		bootstrap = //netdna.bootstrapcdn.com/bootstrap/{$plugin.t3sbootstrap_configuration.bootstrap.version}/css/bootstrap.min.css
		bootstrap.external = 1
		bootstrap.excludeFromConcatenation = 1
		bootstrap.disableCompression = 1
		bootstrap.forceOnTop = 1
		bootstrap.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

		bootstrapTheme = {$plugin.t3sbootstrap_configuration.general.externalBootstrapTheme}
		bootstrapTheme.external = 1
		bootstrapTheme.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

		bootstrapt3s = {$plugin.t3sbootstrap_configuration.general.internalBootstrapTheme}
		bootstrapt3s.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

		bootstrapLess = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/less/bootstrap.less
		bootstrapLess.forceOnTop = 1
		bootstrapLess.if.isTrue = {$plugin.t3sbootstrap_configuration.general.dyncss}

		bootstrapGlyphicons = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/css/Glyphicons.css
		bootstrapGlyphicons.if.isTrue = {$plugin.t3sbootstrap_configuration.general.dyncss}

		fontAwesome = //maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css
		fontAwesome.external = 1
		fontAwesome.excludeFromConcatenation = 1
		fontAwesome.disableCompression = 1
		fontAwesome.if.isTrue = {$plugin.t3sbootstrap_configuration.general.fontawesome}
	}

	# JS to be included
	includeJS {
		srcset = EXT:t3sbootstrap/Resources/Public/Contrib/Srcset/srcset.min.js
		srcset.if.value = srcset
		srcset.if.equals = {$styles.content.imgtext.layoutKey}
	}
	includeJSFooterlibs {
		bootstrap = //netdna.bootstrapcdn.com/bootstrap/{$plugin.t3sbootstrap_configuration.bootstrap.version}/js/bootstrap.min.js
		bootstrap.external = 1
		bootstrap.excludeFromConcatenation = 1
		bootstrap.disableCompression = 1
		jquery = //ajax.googleapis.com/ajax/libs/jquery/{$plugin.t3sbootstrap_configuration.jquery.version}/jquery.min.js
		jquery.external = 1
		jquery.forceOnTop = 1
		jquery.excludeFromConcatenation = 1
		jquery.disableCompression = 1
	}
	includeJSFooter {
		treed = EXT:t3sbootstrap/Resources/Public/Scripts/Treed.js
		treed.if.isInList.data = TSFE:id
		treed.if.value = {$plugin.t3sbootstrap_configuration.pages.sitemap.uidList}
	}

	jsFooterInline.5 < temp.jsFooterInline

	# Add some classes to the bodytag
	bodyTagCObject >
	bodyTagCObject = COA
	bodyTagCObject {
		wrap = <body | >
		10 = COA
		10 {
		    stdWrap.noTrimWrap = | style="|" |
		    stdWrap.required = 1
			10 = TEXT
			10 {
				value = padding-top:{$plugin.t3sbootstrap_configuration.styles.navbar.style.height}px;
				if.isTrue = {$plugin.t3sbootstrap_configuration.styles.navbar.style.fixed.top}
			}

			20 = TEXT
			20 {
				noTrimWrap = | ||
				value = padding-bottom:{$plugin.t3sbootstrap_configuration.styles.sticky.footer.body.padding.bottom}px;
				if.isTrue = {$plugin.t3sbootstrap_configuration.styles.footer.sticky}
			}
		}
		20 = COA
		20 {
			stdWrap.noTrimWrap = | class="|"  id="page-top"|
			10 = TEXT
			10.data = page:uid
			10.wrap = page-|
			20 = TEXT
			20 {
				stdWrap.noTrimWrap = | template-||
				data = levelfield:-1, backend_layout_next_level, slide
				override.field = backend_layout
			}
			30 = TEXT
			30 {
				fieldRequired = layout
				value = layout-{field:layout}
				insertData = 1
				noTrimWrap = | ||
			}
			40 = TEXT
			40 {
				value = affixmenu
				if.isInList.data = TSFE:id
				if.value = {$plugin.t3sbootstrap_configuration.pages.affix.uidList}
				noTrimWrap = | ||
			}
		}
		# use scrollspy with affix
		30 = TEXT
		30 {
			value = data-spy="scroll" data-target="#scrollspy" data-offset="{$plugin.t3sbootstrap_configuration.navigation.scrollspy.data-offset}"
			noTrimWrap = | ||
			if.isInList.data = TSFE:id
			if.value = {$plugin.t3sbootstrap_configuration.pages.affix.uidList}
		}

		# use Grayscale theme
		40 = TEXT
		40 {
			value = data-spy="scroll" data-target=".navbar-fixed-top"
			noTrimWrap = | ||
			# t3sbootstrap__10 = greyscale
			if.value = t3sbootstrap__10
			if.equals.field = backend_layout
		}
	}
}


# printversion
print = PAGE
print {
	typeNum = 98
	bodyTag = <body onload="javascript:window.print()">

	config.index_enable = 0

	headerData.123 = TEXT
	headerData.123.value = <meta name="robots" content="noindex, nofollow" />
	headerData.124 = TEXT
	headerData.124 {
		field = title
		noTrimWrap = |<title>{$plugin.t3sbootstrap_configuration.general.company.name}: | - (printversion)</title>|
	}

	includeCSS.fileBootstrap = //netdna.bootstrapcdn.com/bootstrap/{$plugin.t3sbootstrap_configuration.bootstrap.version}/css/bootstrap.min.css
	includeCSS.fileBootstrap.external = 1
	includeCSS.fileBootstrap.excludeFromConcatenation = 1
	includeCSS.fileBootstrap.disableCompression = 1
	includeCSS.fileBootstrap.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

	includeCSS.bootstrapt3s = {$plugin.t3sbootstrap_configuration.general.internalBootstrapTheme}
	includeCSS.bootstrapt3s.media = print
	includeCSS.bootstrapt3s.excludeFromConcatenation = 1
	includeCSS.bootstrapt3s.disableCompression = 1
	includeCSS.bootstrapt3s.if.isFalse = {$plugin.t3sbootstrap_configuration.general.dyncss}

	includeCSS.fileDefault = EXT:t3sbootstrap/Resources/Public/Styles/Print.css
	includeCSS.fileDefault.media = print
	includeCSS.fileDefault.excludeFromConcatenation = 1
	includeCSS.fileDefault.disableCompression = 1

	includeCSS.fileBootstrapLess = EXT:t3sbootstrap/Resources/Public/Contrib/Bootstrap/less/bootstrap.less
	includeCSS.fileBootstrapLess.if.isTrue = {$plugin.t3sbootstrap_configuration.general.dyncss}

	10 = FLUIDTEMPLATE
	10 {
		template = FILE
		template.file = {$plugin.tx_t3sbootstrap.view.templateRootPath}Print.html
		variables {
			content < styles.content.get
		}
	}
}
