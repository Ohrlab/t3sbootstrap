#-------------------------------------------------------------------------------
#	New Content Element Wizard
#-------------------------------------------------------------------------------

<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/ModWizards.ts">

#-------------------------------------------------------------------------------
#	Gridelements
#-------------------------------------------------------------------------------
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/Gridelements/Setup.ts">

#-------------------------------------------------------------------------------
#	Content
#-------------------------------------------------------------------------------
TCEFORM.tt_content {

	linkToTop.disabled = 1

	section_frame {
		removeItems = 1,11,12,20,21,66
		addItems {
			26 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.hidden
			27 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.hidden-phone
			28 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.visible-phone
			29 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.hidden-desktop
			30 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.visible-desktop

			40 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.well
			41 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.well-lg
			42 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.well-sm

			45 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-success
			46 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-info
			47 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-warning
			48 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-danger

			46 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-info
			47 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-warning
			48 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.alert-danger

			50 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.callout-danger
			51 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.callout-warning
			52 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.section.callout-info

		}
	}

	imageorient.types.t3sbs_image.removeItems = 8,9,10,17,18,25,26

	# New menu type
    menu_type.addItems.9 = BOOTSTRAP: Affix
    menu_type.altLabels.2 = BOOTSTRAP: Sitemap
    menu_type.altLabels.8 = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.menu_type.8

}

