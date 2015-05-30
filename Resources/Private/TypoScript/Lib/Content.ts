# **********************************************************
# Rendering of all content columns
# **********************************************************

#-------------------------------------------------------------------------------
#	CONTENT: Main Content (colPos = 0)
#-------------------------------------------------------------------------------
lib.content.main = COA
lib.content.main {
	stdWrap.wrap = |
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->

	5 = CONTENT
	5 {
		table = tt_content
		select.orderBy = sorting
		select.where = colPos=0 AND tx_t3sbootstrap_content_slide=1
		select.languageField = sys_language_uid
		slide = -1
		if.isTrue = {$plugin.t3sbootstrap_configuration.general.slide.onTop}
	}

	10 = CONTENT
	10 {
		table = tt_content
		select.orderBy = sorting
		select.where = colPos=0 AND tx_t3sbootstrap_content_slide=0
		select.languageField = sys_language_uid
		if.isTrue = {$plugin.t3sbootstrap_configuration.general.slide.onTop}
	}

	15 = CONTENT
	15 {
		table = tt_content
		select.orderBy = sorting
		select.where = colPos=0 AND tx_t3sbootstrap_content_slide=0
		select.languageField = sys_language_uid
		if.isFalse = {$plugin.t3sbootstrap_configuration.general.slide.onTop}
	}

	20 = CONTENT
	20 {
		table = tt_content
		select.orderBy = sorting
		select.where = colPos=0 AND tx_t3sbootstrap_content_slide=1
		select.languageField = sys_language_uid
		slide = -1
		if.isFalse = {$plugin.t3sbootstrap_configuration.general.slide.onTop}
	}

}
lib.content.0 < lib.content.main


#-------------------------------------------------------------------------------
#	CONTENT: Left Content (colPos = 1)
#-------------------------------------------------------------------------------
lib.content.left < lib.content.main
lib.content.left.5.select.where = colPos=1 AND tx_t3sbootstrap_content_slide=1
lib.content.left.10.select.where = colPos=1 AND tx_t3sbootstrap_content_slide=0
lib.content.left.15.select.where = colPos=1 AND tx_t3sbootstrap_content_slide=0
lib.content.left.20.select.where = colPos=1 AND tx_t3sbootstrap_content_slide=1
lib.content.1 < lib.content.left


#-------------------------------------------------------------------------------
#	CONTENT: Right Content (colPos = 2)
#-------------------------------------------------------------------------------
lib.content.right < lib.content.main
lib.content.right.5.select.where = colPos=2 AND tx_t3sbootstrap_content_slide=1
lib.content.right.10.select.where = colPos=2 AND tx_t3sbootstrap_content_slide=0
lib.content.right.15.select.where = colPos=2 AND tx_t3sbootstrap_content_slide=0
lib.content.right.20.select.where = colPos=2 AND tx_t3sbootstrap_content_slide=1
lib.content.2 < lib.content.right


#-------------------------------------------------------------------------------
#	CONTENT: Jumbotron Content (colPos = 3)
#-------------------------------------------------------------------------------
lib.content.jumbotron < lib.content.main
lib.content.jumbotron.5.select.where = colPos=3 AND tx_t3sbootstrap_content_slide=1
lib.content.jumbotron.10.select.where = colPos=3 AND tx_t3sbootstrap_content_slide=0
lib.content.jumbotron.15.select.where = colPos=3 AND tx_t3sbootstrap_content_slide=0
lib.content.jumbotron.20.select.where = colPos=3 AND tx_t3sbootstrap_content_slide=1
lib.content.3 < lib.content.jumbotron


#-------------------------------------------------------------------------------
#	CONTENT: Footer Content (colPos = 4)
#-------------------------------------------------------------------------------
lib.content.footer < lib.content.main
lib.content.footer.5.select.where = colPos=4 AND tx_t3sbootstrap_content_slide=1
lib.content.footer.10.select.where = colPos=4 AND tx_t3sbootstrap_content_slide=0
lib.content.footer.15.select.where = colPos=4 AND tx_t3sbootstrap_content_slide=0
lib.content.footer.20.select.where = colPos=4 AND tx_t3sbootstrap_content_slide=1
lib.content.4 < lib.content.footer


#-------------------------------------------------------------------------------
#	CONTENT: More Content (colPos = 5 - 9)
#-------------------------------------------------------------------------------
lib.content.5 < lib.content.main
lib.content.5.5.select.where = colPos=5 AND tx_t3sbootstrap_content_slide=1
lib.content.5.10.select.where = colPos=5 AND tx_t3sbootstrap_content_slide=0
lib.content.5.15.select.where = colPos=5 AND tx_t3sbootstrap_content_slide=0
lib.content.5.20.select.where = colPos=5 AND tx_t3sbootstrap_content_slide=1

lib.content.6 < lib.content.main
lib.content.6.5.select.where = colPos=6 AND tx_t3sbootstrap_content_slide=1
lib.content.6.10.select.where = colPos=6 AND tx_t3sbootstrap_content_slide=0
lib.content.6.15.select.where = colPos=6 AND tx_t3sbootstrap_content_slide=0
lib.content.6.20.select.where = colPos=6 AND tx_t3sbootstrap_content_slide=1

lib.content.7 < lib.content.main
lib.content.7.5.select.where = colPos=7 AND tx_t3sbootstrap_content_slide=1
lib.content.7.10.select.where = colPos=7 AND tx_t3sbootstrap_content_slide=0
lib.content.7.15.select.where = colPos=7 AND tx_t3sbootstrap_content_slide=0
lib.content.7.20.select.where = colPos=7 AND tx_t3sbootstrap_content_slide=1

lib.content.8 < lib.content.main
lib.content.8.5.select.where = colPos=8 AND tx_t3sbootstrap_content_slide=1
lib.content.8.10.select.where = colPos=8 AND tx_t3sbootstrap_content_slide=0
lib.content.8.15.select.where = colPos=8 AND tx_t3sbootstrap_content_slide=0
lib.content.8.20.select.where = colPos=8 AND tx_t3sbootstrap_content_slide=1

lib.content.9 < lib.content.main
lib.content.9.5.select.where = colPos=9 AND tx_t3sbootstrap_content_slide=1
lib.content.9.10.select.where = colPos=9 AND tx_t3sbootstrap_content_slide=0
lib.content.9.15.select.where = colPos=9 AND tx_t3sbootstrap_content_slide=0
lib.content.9.20.select.where = colPos=9 AND tx_t3sbootstrap_content_slide=1


#-------------------------------------------------------------------------------
#	CONTENT: Grayscale theme (colPos = 10 + 11)
#-------------------------------------------------------------------------------
lib.grayscale.header = COA
lib.grayscale.header {
	stdWrap.wrap = |
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->

	10 < styles.content.get
	10.select.where = colPos=10

}
lib.grayscale.section = COA
lib.grayscale.section {
	stdWrap.wrap = |
	stdWrap.innerWrap = <!--TYPO3SEARCH_begin-->|<!--TYPO3SEARCH_end-->

	10 < styles.content.get
	10.select.where = colPos=11

}


#-------------------------------------------------------------------------------
#	CONTENT: Optional top and bottom (colPos = 20 + 21)
#-------------------------------------------------------------------------------

lib.content.20 < lib.content.main
lib.content.20.stdWrap.innerWrap = |
lib.content.20.5.select.where = colPos=20 AND tx_t3sbootstrap_content_slide=1
lib.content.20.10.select.where = colPos=20 AND tx_t3sbootstrap_content_slide=0
lib.content.20.15.select.where = colPos=20 AND tx_t3sbootstrap_content_slide=0
lib.content.20.20.select.where = colPos=20 AND tx_t3sbootstrap_content_slide=1
lib.content.top < lib.content.20

lib.content.21 < lib.content.main
lib.content.21.stdWrap.innerWrap = |
lib.content.21.5.select.where = colPos=21 AND tx_t3sbootstrap_content_slide=1
lib.content.21.10.select.where = colPos=21 AND tx_t3sbootstrap_content_slide=0
lib.content.21.15.select.where = colPos=21 AND tx_t3sbootstrap_content_slide=0
lib.content.21.20.select.where = colPos=21 AND tx_t3sbootstrap_content_slide=1
lib.content.bottom < lib.content.21


