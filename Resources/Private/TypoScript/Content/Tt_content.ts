
# copy of tt_content ...
tt_content.t3sbs_header < tt_content.header
tt_content.t3sbs_header.10 = < lib.bsheader

tt_content.t3sbs_text < tt_content.text
tt_content.t3sbs_text.10 = < lib.bsheader

tt_content.t3sbs_image < tt_content.image
tt_content.t3sbs_image.10 = < lib.bsheader

tt_content.t3sbs_textpic < tt_content.textpic
tt_content.t3sbs_textpic.10.10 = < lib.bsheader
tt_content.t3sbs_textpic.20 = < tt_content.t3sbs_image.20
tt_content.t3sbs_textpic.20.text.10.10 = < lib.bsheader

tt_content.t3sbs_bullets < tt_content.bullets
tt_content.t3sbs_bullets.10 = < lib.bsheader

tt_content.t3sbs_table < tt_content.table
tt_content.t3sbs_table.10 = < lib.bsheader

tt_content.t3sbs_menu < tt_content.menu
tt_content.t3sbs_menu.10 = < lib.bsheader


# **********************************************************
# BOOTSTAP: Changes of content element rendering (section_frame)
# **********************************************************
tt_content {
	stdWrap.innerWrap {
		cObject = CASE
		cObject {
			key.field = section_frame

			26 =< tt_content.stdWrap.innerWrap.cObject.default
			26.20.10.value = hidden
			27 =< tt_content.stdWrap.innerWrap.cObject.default
			27.20.10.value = hidden-xs hidden-sm
			28 =< tt_content.stdWrap.innerWrap.cObject.default
			28.20.10.value = visible-xs visible-sm
			29 =< tt_content.stdWrap.innerWrap.cObject.default
			29.20.10.value = hidden-lg hidden-md
			30 =< tt_content.stdWrap.innerWrap.cObject.default
			30.20.10.value = visible-lg visible-md
			40 =< tt_content.stdWrap.innerWrap.cObject.default
			40.20.10.value = well
			41 =< tt_content.stdWrap.innerWrap.cObject.default
			41.20.10.value = well well-lg
			42 =< tt_content.stdWrap.innerWrap.cObject.default
			42.20.10.value = well well-sm
			45 =< tt_content.stdWrap.innerWrap.cObject.default
			45.20.10.value = alert alert-success
			46 =< tt_content.stdWrap.innerWrap.cObject.default
			46.20.10.value = alert alert-info
			47 =< tt_content.stdWrap.innerWrap.cObject.default
			47.20.10.value = alert alert-warning
			48 =< tt_content.stdWrap.innerWrap.cObject.default
			48.20.10.value = alert alert-danger
			48 =< tt_content.stdWrap.innerWrap.cObject.default
			48.20.10.value = alert alert-danger
			50 =< tt_content.stdWrap.innerWrap.cObject.default
			50.20.10.value = bs-callout bs-callout-danger
			51 =< tt_content.stdWrap.innerWrap.cObject.default
			51.20.10.value = bs-callout bs-callout-warning
			52 =< tt_content.stdWrap.innerWrap.cObject.default
			52.20.10.value = bs-callout bs-callout-info
		}
	}
}

# **********************************************************
# BOOTSTAP: Image & Textpic
# **********************************************************

tt_content.t3sbs_image.20.1.params = class="img-responsive"
tt_content.t3sbs_image.20.1.params.cObject = CASE
tt_content.t3sbs_image.20.1.params.cObject {
	key.field = tx_t3sbootstrap_imagestyle

	default = TEXT
	default.value = class="img-responsive" style="width:100%;"
	default.override =  class="img-responsive"
	default.override.if.isInList.field = imageorient
	default.override.if.value = 25,26

	img-rounded < .default
	img-rounded.value = class="img-responsive img-rounded" style="width:100%;"
	img-rounded.override =  class="img-responsive img-rounded"

	img-circle < .default
	img-circle.value = class="img-responsive img-circle" style="width:100%;"
	img-circle.override =  class="img-responsive img-circle"

	img-thumbnail < .default
	img-thumbnail.value = class="img-responsive img-thumbnail" style="width:100%;"
	img-thumbnail.override =  class="img-responsive img-thumbnail"
}

# intext-right-nowrap
tt_content.t3sbs_image.20.layout.25.override = <div class="csc-textpic-responsive csc-textpic-intext-right-nowrap###CLASSES###">###IMAGES######TEXT###</div>
# intext-left-nowrap
tt_content.t3sbs_image.20.layout.26.override = <div class="csc-textpic-responsive csc-textpic-intext-left-nowrap###CLASSES###">###IMAGES######TEXT###</div>

tt_content.t3sbs_textpic.20.text.wrap.cObject = CASE
tt_content.t3sbs_textpic.20.text.wrap.cObject {
	key.field = imageorient
	default = TEXT
	default.value = <div class="csc-textpic-text"> | </div>
	# intext-right-nowrap
	25 = TEXT
	25.value = <div class="col-md-6 col-md-pull-6"> | </div></div>
	# intext-left-nowrap
	26 = TEXT
	26.value = <div class="col-md-6"> | </div></div>
}

tt_content.t3sbs_image.20.rendering.singleNoCaption.allStdWrap.dataWrap.override.cObject = CASE
tt_content.t3sbs_image.20.rendering.singleNoCaption.allStdWrap.dataWrap.override.cObject {
	key.field = imageorient
	default = TEXT
	default.value = <div class="csc-textpic-imagewrap" data-csc-images="{register:imageCount}" data-csc-cols="{field:imagecols}"> | </div>
	# intext-right-nowrap
	25 = TEXT
	25.value = <div class="row"><div class="col-md-6 col-md-push-6" data-csc-images="{register:imageCount}" data-csc-cols="{field:imagecols}"> | </div>
	25.insertData = 1
	# intext-left-nowrap
	26 = TEXT
	26.value = <div class="row"><div class="col-md-6" data-csc-images="{register:imageCount}" data-csc-cols="{field:imagecols}"> | </div>
	26.insertData = 1
	override.cObject.if {
		value = html5
		equals.data = TSFE:config|config|doctype
	}
}

# sourceCollection
tt_content.t3sbs_image.20.1.sourceCollection {
	small >
	smallRetina >
	small-smartphones {
		# max width of the image for the viewport
		maxW = 320px
		# width descriptor of the srcset attribute. In this case, up to a viewport size of 320px. After that, the next larger image appears (breakpoint).
		srcsetCandidate = 320w
	}
	smartphones {
		maxW.cObject = COA
		maxW.cObject {
			10 = TEXT
			10 {
			if.value = image
			if.equals.field = CType
			value = 480px
			}
			20 = TEXT
			20 {
				if.value = textpic
				if.equals.field = CType
				value = (480 / {field:imagecols}) * 0.44
				stdWrap.insertData = 1
				prioriCalc = 1
				wrap = |px
			}
		}
		srcsetCandidate = 480w
	}
	small-tablets {
		maxW.cObject = COA
		maxW.cObject {
			10 = TEXT
			10 {
				if.value = image
				if.equals.field = CType
				value = 768px
			}
			20 = TEXT
			20 {
				if.value = textpic
				if.equals.field = CType
				value = (768 / {field:imagecols}) * 0.44
				stdWrap.insertData = 1
				prioriCalc = 1
				wrap = |px
			}
		}
		srcsetCandidate = 768w
	}
	tablets {
		maxW.cObject = COA
		maxW.cObject {
			10 = TEXT
			10 {
				if.value = image
				if.equals.field = CType
				value = 992px
			}
			20 = TEXT
			20 {
				if.value = textpic
				if.equals.field = CType
				value = (992 / {field:imagecols}) * 0.44
				stdWrap.insertData = 1
				prioriCalc = 1
				wrap = |px
			}
		}
		srcsetCandidate = 992w
	}
	tablets-netbooks {
		maxW.cObject = COA
		maxW.cObject {
			10 = TEXT
			10 {
				if.value = image
				if.equals.field = CType
				value = 1024px
			}
			20 = TEXT
			20 {
				if.value = textpic
				if.equals.field = CType
				value = (1024 / {field:imagecols}) * 0.44
				stdWrap.insertData = 1
				prioriCalc = 1
				wrap = |px
			}
		}
		srcsetCandidate = 1024w
	}
	netbooks-desktops {
		maxW.cObject = COA
		maxW.cObject {
			10 = TEXT
			10 {
				if.value = image
				if.equals.field = CType
				value = 1280px
			}
			20 = TEXT
			20 {
				if.value = textpic
				if.equals.field = CType
				value = (1280 / {field:imagecols}) * 0.43
				stdWrap.insertData = 1
				prioriCalc = 1
				wrap = |px
			}
		}
		srcsetCandidate = 1280w
	}
	desktops {
		maxW.cObject = COA
		maxW.cObject {
			10 = TEXT
			10 {
				if.value = image
				if.equals.field = CType
				value = 1680px
			}
			20 = TEXT
			20 {
				if.value = textpic
				if.equals.field = CType
				value = (1680 / {field:imagecols}) * 0.39
				stdWrap.insertData = 1
				prioriCalc = 1
				wrap = |px
			}
		}
		srcsetCandidate = 1680w
	}
	desktops-widesreen {
		maxW.cObject = COA
		maxW.cObject {
			10 = TEXT
			10 {
				if.value = image
				if.equals.field = CType
				value = 1920px
			}
			20 = TEXT
			20 {
				if.value = textpic
				if.equals.field = CType
				value = (1920 / {field:imagecols}) * 0.29
				stdWrap.insertData = 1
				prioriCalc = 1
				wrap = |px
			}
		}
		srcsetCandidate = 1920w
	}
}

# if lightbox
tt_content.t3sbs_image.20.1.imageLinkWrap {
	JSwindow = 0
	directImageLink = 1
	linkParams.ATagParams.stdWrap.cObject = COA
	linkParams.ATagParams.stdWrap.cObject {
		10 = TEXT
		10.value = class="gallery"
		20 = TEXT
		20.field = uid
		20.noTrimWrap = | data-rel="gallery|"|
		30 = TEXT
		30.data = file:current:description
		30.htmlSpecialChars = 1
		30.noTrimWrap = | data-original-title="|"|
	}
	linkParams.ATagParams.dataWrap >
	if.isTrue = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}
}

# if lazyload
tt_content.t3sbs_image.20.1.layout.default.element.cObject = CASE
tt_content.t3sbs_image.20.1.layout.default.element.cObject {
	key = {$plugin.t3sbootstrap_configuration.extensions.lazyload.enable}
	1 = TEXT
	1.value = <img src="typo3conf/ext/t3sbootstrap/Resources/Public/Images/Placeholder.png" data-original="###SRC###" width="###WIDTH###" height="###HEIGHT###"###PARAMS######ALTPARAMS######BORDER######SELFCLOSINGTAGSLASH###>
	default = TEXT
	default.value = <img src="###SRC###" width="###WIDTH###" height="###HEIGHT###"###PARAMS######ALTPARAMS######BORDER######SELFCLOSINGTAGSLASH###>
}
tt_content.t3sbs_image.20.1.layout.srcset.element.cObject = CASE
tt_content.t3sbs_image.20.1.layout.srcset.element.cObject {
	key = {$plugin.t3sbootstrap_configuration.extensions.lazyload.enable}
	1 = TEXT
	1.value = <img src="typo3conf/ext/t3sbootstrap/Resources/Public/Images/Placeholder.png" data-original="###SRC###" srcset="###SOURCECOLLECTION###"###PARAMS######ALTPARAMS######SELFCLOSINGTAGSLASH###>
	default = TEXT
	default.value = <img src="###SRC###" srcset="###SOURCECOLLECTION###"###PARAMS######ALTPARAMS######SELFCLOSINGTAGSLASH###>
}
tt_content.t3sbs_image.20.1.layout.picture.element.cObject = CASE
tt_content.t3sbs_image.20.1.layout.picture.element.cObject {
	key = {$plugin.t3sbootstrap_configuration.extensions.lazyload.enable}
	1 = TEXT
	1.value = <picture>###SOURCECOLLECTION###<img src="typo3conf/ext/t3sbootstrap/Resources/Public/Images/Placeholder.png" data-original="###SRC###"###PARAMS######ALTPARAMS######SELFCLOSINGTAGSLASH###></picture>
	default = TEXT
	default.value = <picture>###SOURCECOLLECTION###<img src="###SRC###"###PARAMS######ALTPARAMS######SELFCLOSINGTAGSLASH###></picture>
}
tt_content.t3sbs_image.20.1.layout.data.element.cObject = CASE
tt_content.t3sbs_image.20.1.layout.data.element.cObject {
	key = {$plugin.t3sbootstrap_configuration.extensions.lazyload.enable}
	1 = TEXT
	1.value = <img src="typo3conf/ext/t3sbootstrap/Resources/Public/Images/Placeholder.png" data-original="###SRC###"###SOURCECOLLECTION######PARAMS######ALTPARAMS######SELFCLOSINGTAGSLASH###>
	default = TEXT
	default.value = <img src="###SRC###"###SOURCECOLLECTION######PARAMS######ALTPARAMS######SELFCLOSINGTAGSLASH###>
}


# **********************************************************
# BOOTSTAP: List & List group
# **********************************************************
tt_content.t3sbs_bullets = COA
tt_content.t3sbs_bullets {
	20 = FLUIDTEMPLATE
	20 {
		file = EXT:t3sbootstrap/Resources/Private/Templates/BootstrapComponents/ListGroup.html
		partialRootPaths {
			0 = EXT:t3sbootstrap/Resources/Private/Partials/
			10 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
		}
	}
}


# **********************************************************
# BOOTSTAP: Table
# **********************************************************
tt_content.t3sbs_table.20.userFunc = T3SBS\T3sbootstrap\Controller\CssStyledContentController->render_table
tt_content.t3sbs_table.20.stdWrap.wrap = <div class="table-responsive">|</div>


# **********************************************************
# BOOTSTAP: Nav
# **********************************************************
tt_content.t3sbs_menu.20.default.stdWrap.outerWrap = <ul class="nav nav-pills nav-stacked">|</ul>
tt_content.t3sbs_menu.20.1.stdWrap.outerWrap = <ul class="nav nav-pills nav-stacked">|</ul>
tt_content.t3sbs_menu.20.3.stdWrap.outerWrap = <ul class="nav nav-pills nav-stacked">|</ul>
tt_content.t3sbs_menu.20.4.stdWrap.outerWrap = <dl class="dl-horizontal">|</dl>
tt_content.t3sbs_menu.20.5.stdWrap.outerWrap = <ul class="nav nav-pills nav-stacked">|</ul>
tt_content.t3sbs_menu.20.6.stdWrap.outerWrap = <ul class="nav nav-pills nav-stacked">|</ul>
tt_content.t3sbs_menu.20.7.stdWrap.outerWrap = <ul class="nav nav-pills nav-stacked">|</ul>
tt_content.t3sbs_menu.20.7.2.wrap = <ul class="nav nav-pills nav-stacked" style="padding-left:10px;">|</ul>


# **********************************************************
# BOOTSTAP: Affix
# **********************************************************
tt_content.t3sbs_menu.20.9 >
tt_content.t3sbs_menu.20.9 = CONTENT
tt_content.t3sbs_menu.20.9 {
	wrap = <div id="scrollspy" class="bs-affix hidden-xs hidden-sm"><ul class="nav nav-tabs nav-stacked" data-spy="affix" data-offset-top="{$plugin.t3sbootstrap_configuration.navigation.affix.data-offset-top}" data-offset-bottom="{$plugin.t3sbootstrap_configuration.navigation.affix.data-offset-bottom}" role="tablist">|</ul></div>
	table = tt_content
	select {
		pidInList = this
		orderBy = sorting
		where= ( colPos = 0 )
		where = ( sectionIndex!=0 )
		languageField = sys_language_uid
	}
	renderObj = TEXT
	renderObj {
		required = 1
		field = header
		htmlSpecialChars = 1
		typolink.parameter.field = pid
		typolink.section.field = uid
		typolink.ATagParams.dataWrap = data-target="#c{field:uid}"
		wrap = <li>|</li>
	}
}


# **********************************************************
# BOOTSTAP: Menue/Sitemap
# **********************************************************
tt_content.t3sbs_menu.20.2 {
	1.wrap = <ul class="tree">|</ul>
	1.NO.ATagTitle.data = field : abstract // field : description // field : subtitle
}
tt_content.t3sbs_menu.20.8 {
	1.wrap = <ul class="tree">|</ul>
	1.NO.ATagTitle.data = field : abstract // field : description // field : subtitle
}


# **********************************************************
# BOOTSTAP: Panel
# **********************************************************
tt_content.t3sbs_panel = COA
tt_content.t3sbs_panel {
	20 = FLUIDTEMPLATE
	20 {
		file = EXT:t3sbootstrap/Resources/Private/Templates/BootstrapComponents/Panel.html
		partialRootPaths {
			0 = EXT:t3sbootstrap/Resources/Private/Partials/
			10 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
		}	
		variables {
			headerIcon = TEXT
			headerIcon.field = tx_t3sbootstrap_fontawesome_icon
			headerIcon.required = 1
			headerIcon.noTrimWrap = | <i class="fa |"></i> |
			headerIcon.if.isTrue = {$plugin.t3sbootstrap_configuration.general.fontawesome}
		}
	}
}


# **********************************************************
# BOOTSTAP: Mediaobject
# **********************************************************
tt_content.t3sbs_mediaobject = COA
tt_content.t3sbs_mediaobject {

	20 = FLUIDTEMPLATE
	20 {
		file = EXT:t3sbootstrap/Resources/Private/Templates/BootstrapComponents/Mediaobject.html
		partialRootPaths {
			0 = EXT:t3sbootstrap/Resources/Private/Partials/
			10 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
		}	
		variables {
			lazyload = TEXT
			lazyload.value = {$plugin.t3sbootstrap_configuration.extensions.lazyload.enable}
			headerIcon = TEXT
			headerIcon.field = tx_t3sbootstrap_fontawesome_icon
			headerIcon.required = 1
			headerIcon.noTrimWrap = | <i class="fa |"></i> |
			headerIcon.if.isTrue = {$plugin.t3sbootstrap_configuration.general.fontawesome}
			header =< lib.bsheader
			mediaPosition = TEXT
			mediaPosition.field = tx_t3sbootstrap_media_position
			mediaAlignment = TEXT
			mediaAlignment.field = tx_t3sbootstrap_media_alignment

		}
	}
}


# **********************************************************
# Fluidtemplate
# **********************************************************
tt_content.t3sbs_fluidtemplate = COA
tt_content.t3sbs_fluidtemplate {
	20 = FLUIDTEMPLATE
	20 {
		file.stdWrap.cObject = TEXT
		file.stdWrap.cObject.field = subheader
		file.stdWrap.cObject.ifEmpty {
			cObject = TEXT
			cObject.value = {$plugin.tx_t3sbootstrap.view.templateRootPath}FluidTemplate.html
		}
	}
}


# **********************************************************
# BOOTSTAP: Thumbnail
# **********************************************************
tt_content.gridelements_pi1.20.10.setup.thumbnails_container {
	innerWrap.cObject = < lib.bsheader
	cObject = FLUIDTEMPLATE
	cObject {
		file = EXT:t3sbootstrap/Resources/Private/Templates/BootstrapComponents/Thumbnails.html
		partialRootPaths {
			0 = EXT:t3sbootstrap/Resources/Private/Partials/
			10 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
		}	
		variables {
			lazyload = TEXT
			lazyload.value = {$plugin.t3sbootstrap_configuration.extensions.lazyload.enable}
			headerIcon = TEXT
			headerIcon.value = {$plugin.t3sbootstrap_configuration.general.fontawesome}
			header =< lib.bsheader
		}
	}
}

# **********************************************************
# BOOTSTAP: Modal
# **********************************************************
tt_content.gridelements_pi1.20.10.setup {
	modal < lib.gridelements.defaultGridSetup
	modal {
		cObject = FLUIDTEMPLATE
		cObject {
			file = EXT:t3sbootstrap/Resources/Private/Templates/BootstrapComponents/Modal.html
			partialRootPaths {
				0 = EXT:t3sbootstrap/Resources/Private/Partials/
				10 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
			}
		}
	}
}

# **********************************************************
# BOOTSTAP: Carousel
# **********************************************************
tt_content.gridelements_pi1.20.10.setup.carousel_container {
	innerWrap.cObject = COA
	innerWrap.cObject.10 < lib.bsheader
	cObject = FLUIDTEMPLATE
	cObject {
		file = EXT:t3sbootstrap/Resources/Private/Templates/BootstrapComponents/Carousel.html
		partialRootPaths {
			0 = EXT:t3sbootstrap/Resources/Private/Partials/
			10 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
		}	
		variables {
			headerIcon = TEXT
			headerIcon.value = {$plugin.t3sbootstrap_configuration.general.fontawesome}
		}
	}
}


# **********************************************************
# BOOTSTAP: Responsive embed video
# **********************************************************
tt_content.t3sbs_video = COA
tt_content.t3sbs_video {
	10 = < lib.bsheader
	20 = USER
	20.userFunc = T3SBS\T3sbootstrap\Controller\VideoController->render_video
}


# **********************************************************
# BOOTSTAP: Grid system
# **********************************************************
tt_content.gridelements_pi1.20.10.setup {
	two_columns < lib.gridelements.defaultGridSetup
	two_columns {
		innerWrap.cObject = < lib.bsheader
		cObject = FLUIDTEMPLATE
		cObject {
			file = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/TwoColumns.html
			partialRootPaths {
				0 = EXT:t3sbootstrap/Resources/Private/Partials/
				10 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
			}	
		}

	}
	three_columns < lib.gridelements.defaultGridSetup
	three_columns {
		innerWrap.cObject = < lib.bsheader
		cObject = FLUIDTEMPLATE
		cObject {
			file = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/ThreeColumns.html
			partialRootPaths {
				0 = EXT:t3sbootstrap/Resources/Private/Partials/
				10 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
			}	
		}
	}
	four_columns < lib.gridelements.defaultGridSetup
	four_columns {
		innerWrap.cObject = < lib.bsheader
		cObject = FLUIDTEMPLATE
		cObject {
			file = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/FourColumns.html
			partialRootPaths {
				0 = EXT:t3sbootstrap/Resources/Private/Partials/
				10 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
			}	
		}
	}
}


# **********************************************************
# BOOTSTAP: Tap - (c) Stefan Schäfer www.merec.org/typo3/bootstrap3-tabs-mit-grid-elements-fuer-typo3
# **********************************************************
# First define the tab cObject, we want this in the container
tt_content.gridelements_pi1.20.10.setup.tabs_tab {
	innerWrap.cObject = < lib.bsheader
	# Add the ID and the Class to the tab container
	preCObject = LOAD_REGISTER
	preCObject {
		containerId.cObject = COA
		containerId.cObject {
			wrap = id="|"
			10 = TEXT
			10.wrap = tab-content-|
			10.field = uid
		}
		containerClasses.cObject = COA
		containerClasses.cObject {
			wrap = class="tab-pane |"
			# fade or empty
			10 = TEXT
			10.field = parentgrid_flexform_switch_effect
			10.noTrimWrap = | | |
			# We want the active flag on the first child
			20 = TEXT
			20.value = active in
			20.noTrimWrap = | | |
			20.if {
				 value = 1
				 equals.data = cObj:parentRecordNumber
				 equals.prioriCalc = 1
			}
		}
	}
	outerWrap = <div {register: containerId} {register: containerClasses}>|</div>
	outerWrap.insertData = 1
	# Render the children the default way
	columns.0 {
		renderObj = < tt_content
	}
}

# Define the Tab Container
tt_content.gridelements_pi1.20.10.setup.tabs_container {
	innerWrap.cObject = < lib.bsheader
	# Render navigation using fluid
	cObject = FLUIDTEMPLATE
	cObject {
		file = EXT:t3sbootstrap/Resources/Private/Templates/Gridelements/Tab.html
		partialRootPaths {
			0 = EXT:t3sbootstrap/Resources/Private/Partials/
			10 = {$plugin.tx_t3sbootstrap.view.partialRootPath}
		}	
	}
	# Add the renderObj of the tab directly, this prevents the "csc-default"-wrap
	columns.0 {
		renderObj = < tt_content.gridelements_pi1
	}
}


# **********************************************************
# BOOTSTAP: Collapse - (c) Stefan Schäfer www.merec.org/typo3/bootstrap3-collapse-mit-grid-elements-fuer-typo3
# modified Helmut Hackbarth
# **********************************************************
tt_content.gridelements_pi1.20.10.setup.collapsible_accordion {

  # Build: <div class="panel-heading">|</div>
	innerWrap.cObject < lib.bsheader
	innerWrap.cObject {
		wrap = <div class="panel-heading">|</div>
		3.headerClass.cObject.928374 = TEXT
		3.headerClass.cObject.928374 {
			value = panel-title
			noTrimWrap = | | |
		}
		10.setCurrent.typolink {
			parameter >
			parameter = #c{field: uid}
			parameter.insertData = 1
			ATagParams = class="accordion-toggle" data-toggle="collapse" data-parent="#collapsible-{field: parentgrid_uid}"
			ATagParams.insertData = 1
		}
		stdWrap.dataWrap = |
	}

	# Build: <div class="panel panel-[default,primary,success,...]">|</div>
	outerWrap = <div class="panel {field: flexform_style}">|</div>
	outerWrap.insertData = 1

	# Build: <div id="collapse-[panel-uid]" class="panel-collapse collapse [in]">|</div>
	columns.0 {
		renderObj = < tt_content

		wrap.cObject = COA
		wrap.cObject {

			10 = COA
			10 {
				10 = TEXT
				10.wrap = <div id="c|"
				10.field = uid

				20 = TEXT
				20.value = class="panel-collapse collapse
				20.noTrimWrap = | ||

				30 = TEXT
				30.value = in
				30.noTrimWrap = | ||
				30.if {
					value = 1
					equals.field = flexform_active
				}

				40 = TEXT
				40.value = ">
			}

			20 = TEXT
			20.value = <div class="panel-body">|</div></div>
		}

	}
}

tt_content.gridelements_pi1.20.10.setup.collapsible_container {
	# Wrap collapsible
	# Build: <div class="panel-group" id="collapsible-[container-uid]">|</div>
	outerWrap = <div class="panel-group" id="collapsible-{field: uid}">|</div>
	outerWrap.insertData = 1

	innerWrap.cObject = COA
	innerWrap.cObject.10 < lib.bsheader

	# Direct rendering of the collapsible elements, prevents "csc-default"-wrap
	columns.0 {
		renderObj = < tt_content.gridelements_pi1
	}

}

[globalVar = LIT:1 = {$plugin.t3sbootstrap_configuration.general.bsctype}]
	tt_content.header < tt_content.t3sbs_header
	tt_content.text < tt_content.t3sbs_text
	tt_content.image < tt_content.t3sbs_image
	tt_content.textpic < tt_content.t3sbs_textpic
	tt_content.bullets < tt_content.t3sbs_bullets
	tt_content.table < tt_content.t3sbs_table
	tt_content.menu < tt_content.t3sbs_menu
	tt_content.list.10 = < lib.bsheader
	tt_content.login.10 = < lib.bsheader
	tt_content.multimedia.10 = < lib.bsheader
	tt_content.swfobject.10 = < lib.bsheader
	tt_content.qtobject.10 = < lib.bsheader
	tt_content.media.10 = < lib.bsheader
	tt_content.mailform.10 = < lib.bsheader
	tt_content.search.10 = < lib.bsheader
	tt_content.menu.10 = < lib.bsheader
[global]

