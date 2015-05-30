#-------------------------------------------------------------------------------
#	Constants of t3sbootstrap_configuration
#-------------------------------------------------------------------------------

# customcategory=t3sbootstrap=bootstrap
# customsubcategory=a-general=BOOTSTRAP COMPONENTS: Main Settings
# customsubcategory=b-pages=BOOTSTRAP COMPONENTS: Pages Settings
# customsubcategory=c-navigation=BOOTSTRAP COMPONENTS: Navigation Settings
# customsubcategory=d-bslanguage=BOOTSTRAP COMPONENTS: Language Settings
# customsubcategory=e-styles=BOOTSTRAP COMPONENTS: Styles Settings
# customsubcategory=f-extensions=BOOTSTRAP COMPONENTS: Extensions Settings

plugin.t3sbootstrap_configuration {
	general {
		# cat=t3sbootstrap/a-general/01; type=string; label=Company Name: is shown in the navbar and breadcrumb
		company.name =
		pageTitle {
			# cat=t3sbootstrap/a-general/02; type=string; label=Page Title Prefix: e.g.: Company -
			prefix =
			# cat=t3sbootstrap/a-general/03; type=string; label=Page Title Suffix:
			suffix =
		}
		# cat=t3sbootstrap/a-general/04; type=boolean; label=Tooltip: Enable bootstrap tooltip
		tooltip = 1
		# cat=t3sbootstrap/a-general/05; type=options[top, bottom, left, right, auto]; label=Tooltip placement:
		tooltip_placement = bottom
		# cat=t3sbootstrap/a-general/08; type=boolean; label=Sliding Content Elements: slide on top (enable) or on bottom (disable)
		slide.onTop = 0
 		# cat=t3sbootstrap/a-general/10; type=string; label=External Bootstrap Theme: include an external Bootstrap-Theme
		externalBootstrapTheme = https://netdna.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css
 		# cat=t3sbootstrap/a-general/11; type=string; label=Internal Bootstrap Theme: include an internal Bootstrap-Theme
		internalBootstrapTheme = EXT:t3sbootstrap/Resources/Public/Styles/T3sbootstrap.css
	}
	pages {
		# cat=t3sbootstrap/b-pages/01; type=int+; label=Homepage Uid:
		homepage.uid = 1
		# cat=t3sbootstrap/b-pages/02; type=small; label=Pages with Affix Nav: Comma-separated list of page ids. (data-target="#scrollspy" data-spy="scroll" is added to the body tag)
		affix.uidList =
		# cat=t3sbootstrap/b-pages/03; type=small; label=Pages with BOOTSTRAP Sitemap: Comma-separated list of page ids. (used for condition javaScript treed.js)		
		sitemap.uidList = 
	}
	navigation {
		# cat=t3sbootstrap/c-navigation/01; type=boolean; label=Shows the NavBar: Shows the navBar in the frontend
		navbar.enable = 1
		# cat=t3sbootstrap/c-navigation/02; type=int+; label=NavBar Entry Level:
		navbar.entryLevel = 0
		# cat=t3sbootstrap/c-navigation/03; type=small; label=NavBar Exclude: uid list of pages
		navbar.excludeUidList =
		# cat=t3sbootstrap/c-navigation/04; type=small; label=NavBar-Right Menu: uid list of pages
		navbar-right.uidList =
		# cat=t3sbootstrap/c-navigation/05; type=string; label=NavBar-Right Label:
		navbar-right.label = <span class="glyphicon glyphicon-info-sign"></span>

		# cat=t3sbootstrap/c-navigation/07; type=boolean; label=Dropdown opening on hover: and opening on click for collapsed navbar
		navbar.hover = 0
		# cat=t3sbootstrap/c-navigation/08; type=boolean; label=Breadcrumb Menu:
		breadcrumb.enable = 1
		# cat=t3sbootstrap/c-navigation/09; type=boolean; label=Submenu in Sidebar:
		sidebar-subMenu.enable = 1
		# cat=t3sbootstrap/c-navigation/10; type=small; label=Sidebar Submenu Exclude: uid list of pages
		sidebar-subMenu.excludeUidList =

		# cat=t3sbootstrap/f-extensions/15; type=boolean; label=Enable Search Form: in NavBar-Right - indexed_search should be loaded
		navbar.search.enable = 0
	}
	navigation_lang {
		# cat=t3sbootstrap/d-bslanguage/05; type=boolean; label=NavBar-Right Language Menu: enable language menu
		enable = 0
		# cat=t3sbootstrap/d-bslanguage/10; type=string; label=NavBar-Right Language Menu Label:
		navBarLabel = <span class="glyphicon glyphicon-globe"></span>
		# cat=t3sbootstrap/d-bslanguage/20; type=small; label=Languages: uid list of languages
		languages = 0,1
		# cat=t3sbootstrap/d-bslanguage/30; type=string; label=Language Labels: is shown in the language menu ( separate the labels ​​by || )
		labels = <img title="de" alt="de" src="{$plugin.t3sbootstrap_configuration.general.flags}de.png"> Deutsch || <img title="gb" alt="gb" src="{$plugin.t3sbootstrap_configuration.general.flags}gb.png"> Englisch
	}
	styles {
		# cat=t3sbootstrap/e-styles/01; type=boolean; label=Fluid Container: Use for a full width container, spanning the entire width of your viewport.
		container-fluid = 0
		# cat=t3sbootstrap/e-styles/05; type=boolean; label=Jumbotron Full Width:
		jumbotron.fullwidth = 1
		# cat=t3sbootstrap/e-styles/06; type=boolean; label=Jumbotron Background Image: First image from page:media is shown
		jumbotron.bgImg.enable = 0
		# cat=t3sbootstrap/e-styles/07; type=int+; label=Jumbotron Bg Image max. Width:
		jumbotron.bgImg.maxWidth = 1920
		# cat=t3sbootstrap/e-styles/08; type=int+; label=Jumbotron Bg Image max. Height:
		jumbotron.bgImg.maxHeight = 400
		# cat=t3sbootstrap/e-styles/10; type=boolean; label=Page-Header: Header (H1) with subheader (small) shown in the Jumbotron or on Top.
		bsHeader.enable = 1
		# cat=t3sbootstrap/e-styles/20; type=boolean; label=NavBar Inverted:
		navbar.style.inverse = 1
		# cat=t3sbootstrap/e-styles/21; type=boolean; label=NavBar Fixed to top:
		navbar.style.fixed.top = 1
		# cat=t3sbootstrap/e-styles/22; type=boolean; label=NavBar on top: If disabled, you have to disable "NavBar Fixed to top" also.
		navbar.onTop = 1
		# cat=t3sbootstrap/e-styles/23; type=int+; label=NavBar Height: Is used as padding-top in the body tag (in px)
		navbar.style.height = 50
		# cat=t3sbootstrap/e-styles/30; type=boolean; label=Shows the Footer: Shows the footer in the frontend
		footer.enable = 1
		# cat=t3sbootstrap/e-styles/31; type=boolean; label=Footer Full Width:
		navbar.footer.fullwidth = 0
		# cat=t3sbootstrap/e-styles/32; type=boolean; label=Sticky Footer: Use sticky footer
		footer.sticky =0
		# cat=t3sbootstrap/e-styles/33; type=int+; label=Sticky Footer - body padding: The fixed footer (navbar) will overlay your other content, unless you add padding to the bottom of the <body>. (in px)
		sticky.footer.body.padding.bottom = 200
	}
	extensions {
		# cat=t3sbootstrap/f-extensions/05; type=boolean; label=Lightbox: Include jquery-colorbox and configuration
		lightbox.enable = 1
		# cat=t3sbootstrap/f-extensions/06; type=boolean; label=Lightbox slideshow: Enable slideshow in the lightbox.
		lightbox.slideshow = 1
		# cat=t3sbootstrap/f-extensions/07; type=boolean; label=Lightbox max. width: Enable to disable the lightbox on screens smaller than 641px.
		lightbox.widthCheck = 0
		# cat=t3sbootstrap/f-extensions/10; type=boolean; label=Lazyload: Enable jQuery Lazyload (http://www.appelsiini.net/projects/lazyload).
		lazyload.enable = 0
		# cat=t3sbootstrap/f-extensions/16; type=int+; label=Search Result Uid: indexed_search should be loaded
		indexed_search.page =
		# cat=t3sbootstrap/f-extensions/20; type=int+; label=Powermail Form Page: Page ID with contact form
		powermail.formPid =
	}

	### Not in Constant Editor
	bootstrap.version = 3.3.4
	jquery.version = 1.11.2
	navigation.affix.data-offset-top = 160
	navigation.affix.data-offset-bottom = 100
	navigation.footer.uidList =
	navigation.footer.printButton.enable = 1
	navigation.scrollspy.data-offset = 100
	 # delimiter before title in navbar-collapse ( disable title in navbar-collapse: "lib.navbar-brand.20 >" )
	navigation.navbar.delimiter = :
	grayscale {
		google.map.latitude = 40.6700
		google.map.longitude = -73.9400
		 # CSS style for background-image in section colPos11
		background.attachment.fixed = 1
	}

}

[globalVar = GP:L = 1]
	plugin.t3sbootstrap_configuration.navigation_lang.labels = <img title="de" alt="de" src="{$plugin.t3sbootstrap_configuration.general.flags}de.png"> German || <img title="gb" alt="gb" src="{$plugin.t3sbootstrap_configuration.general.flags}gb.png"> English
[global]

plugin.tx_powermail.settings.javascript.addAdditionalJavaScript = 0
plugin.tx_news.settings.cssFile = EXT:t3sbootstrap/Resources/Public/Styles/News.css
