
#-------------------------------------------------------------------------------
#	GENERAL: header -> Bootstrap subheader
#-------------------------------------------------------------------------------
lib.bsheader < lib.stdheader
lib.bsheader.3 {
	 # 3 = LOAD_REGISTER
	subheader = TEXT
	subheader {
		field = subheader
		required = 1
		noTrimWrap = | <small>|</small>|
	}
	headerIcon = TEXT
	headerIcon.field = tx_t3sbootstrap_fontawesome_icon
	headerIcon.required = 1
	headerIcon.noTrimWrap = | <i class="fa |"></i> |
	headerIcon.if.isTrue = {$plugin.t3sbootstrap_configuration.general.fontawesome}
}

lib.bsheader.10.1.dataWrap >
lib.bsheader.10.1.noTrimWrap = |<div class="page-header"><h1{register:headerClass}>{register:headerIcon} | {register:subheader}</h1></div>|
lib.bsheader.10.1.insertData = 1
lib.bsheader.10.2.dataWrap >
lib.bsheader.10.2.noTrimWrap = |<h2{register:headerClass}>{register:headerIcon} | {register:subheader}</h2>|
lib.bsheader.10.2.insertData = 1
lib.bsheader.10.3.dataWrap >
lib.bsheader.10.3.noTrimWrap = |<h3{register:headerClass}>{register:headerIcon} | {register:subheader}</h3>|
lib.bsheader.10.3.insertData = 1
lib.bsheader.10.4.dataWrap >
lib.bsheader.10.4.noTrimWrap = |<h4{register:headerClass}>{register:headerIcon} | {register:subheader}</h4>|
lib.bsheader.10.4.insertData = 1
lib.bsheader.10.5.dataWrap >
lib.bsheader.10.5.noTrimWrap = |<h5{register:headerClass}>{register:headerIcon} | {register:subheader}</h5>|
lib.bsheader.10.5.insertData = 1
lib.bsheader.10.6 < lib.bsheader.10.1
lib.bsheader.10.6.noTrimWrap = |<div class="page-header"><h2{register:headerClass}>{register:headerIcon} | {register:subheader}</h2></div>|
lib.bsheader.10.6.insertData = 1
lib.bsheader.10.7 < lib.bsheader.10.1
lib.bsheader.10.7.noTrimWrap = |<h6{register:headerClass}>{register:headerIcon} | {register:subheader}</h6>|
lib.bsheader.10.7.insertData = 1
lib.bsheader.20 >

#-------------------------------------------------------------------------------
#	GENERAL: Page Title/Header
#-------------------------------------------------------------------------------
lib.bs_header = COA
lib.bs_header {
	wrap = <div class="bs-header"><h1>|</h1></div>
	10 = COA
	10 {
		10 = TEXT
		10 {
			dataWrap = <i class="fa {page:tx_t3sbootstrap_fontawesome_icon}"></i> {page:title}
			if.isTrue.data = page:tx_t3sbootstrap_fontawesome_icon
		}
		20 = TEXT
		20 {
			data =  page:title
			if.isFalse.data = page:tx_t3sbootstrap_fontawesome_icon
		}
		if.isTrue = {$plugin.t3sbootstrap_configuration.general.fontawesome}
	}
	20 = COA
	20 {
		10 = TEXT
		10 {
			data = page:title
		}
		if.isFalse = {$plugin.t3sbootstrap_configuration.general.fontawesome}
	}
	30 = TEXT
	30 {
		data = page:subtitle
		required = 1
		noTrimWrap = | <small>|</small>|
	}
}

#-------------------------------------------------------------------------------
#	GENERAL: Logo / preassigned
#-------------------------------------------------------------------------------
lib.general.logo =

#-------------------------------------------------------------------------------
#	GENERAL: htmlarea and lib.parseFunc_RTE configuration
#-------------------------------------------------------------------------------

lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines.addAttributes.P.class >
lib.parseFunc_RTE.externalBlocks := addToList(address)
lib.parseFunc_RTE.externalBlocks.blockquote.callRecursive.tagStdWrap.HTMLparser.tags.blockquote.overrideAttribs >
lib.parseFunc_RTE.externalBlocks.address.stripNL=1
lib.parseFunc_RTE.externalBlocks.address.stdWrap.parseFunc = < lib.parseFunc
lib.parseFunc_RTE.allowTags := addToList(mark,s)
lib.parseFunc.allowTags := addToList(mark,s)

#-------------------------------------------------------------------------------
#	GENERAL: Background image for jambotron from page:media
#-------------------------------------------------------------------------------
lib.jumbotronBgImgDiv = COA
lib.jumbotronBgImgDiv {
  10 = TEXT
  10 {
    value = <div class="jumbotron hidden-xs">
    if.isFalse.data = levelmedia:-1, slide
  }
  20 = FILES
  20 {
    references {
      data = levelmedia:-1, slide
      listNum = 0
    }
    renderObj = COA
    renderObj {
      10 = IMG_RESOURCE
      10 {
        file.import.data = file:current:publicUrl
        file.width = {$plugin.t3sbootstrap_configuration.styles.jumbotron.bgImg.maxWidth}c
        file.height = {$plugin.t3sbootstrap_configuration.styles.jumbotron.bgImg.maxHeight}c
      }
	  wrap = <div class="jumbotron" style="background: url('/|') no-repeat center top; display: block; height: auto; max-width: 100%;">
    }
    if.isTrue.data = levelmedia:-1, slide

  }
}

#-------------------------------------------------------------------------------
#	General: Print Button
#-------------------------------------------------------------------------------
lib.printButton = COA
lib.printButton {
	10 = TEXT
	10.value = <span class="glyphicon glyphicon-print"></span>
	stdWrap.wrap = <div class="print-button">|</div>
	stdWrap.typolinkno_cache = 1
	stdWrap.typolink.target = print
	stdWrap.typolink.ATagParams = target = _blank
	stdWrap.typolink.parameter.cObject = COA
	stdWrap.typolink.parameter.cObject {

        5 = TEXT
        5.data = page:uid
        5.wrap = index.php?id=|
        5.required = 1

        10 = TEXT
        10.value = &no_cache=1

        20 = TEXT
        20.data = GP:L
        20.wrap = &L=|
        20.required = 1

        30 = TEXT
        30.data = GP:tx_news_pi1 | news
        30.wrap = &tx_news_pi1[news]=|
        30.required = 1

        40 = TEXT
        40.data = GP:tx_news_pi1 | controller
        40.wrap = &tx_news_pi1[controller]=|
        40.required = 1

        50 = TEXT
        50.data = GP:tx_news_pi1 | action
        50.wrap = &tx_news_pi1[action]=|
        50.required = 1

        60 = TEXT
        60.data = GP:cHash
        60.wrap = &cHash=|
        60.required = 1

        70 = TEXT
        70.value = &type=98
    }
}

