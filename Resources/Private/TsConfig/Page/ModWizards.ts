# **********************************************************
# New Content Element Wizard
# **********************************************************
mod.wizards {
	newContentElement {

		wizardItems {
			t3sbs {
				header = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_contentelements
				elements {

					t3sbsheader {
						icon = ../typo3/gfx/c_wiz/regular_header.gif
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_header.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_header.description
						tt_content_defValues.CType = t3sbs_header
					}
					t3sbstext {
						icon = sysext/t3skin/icons/gfx/c_wiz/regular_text.gif
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_text.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_text.description
						tt_content_defValues {
							CType = t3sbs_text
							imageorient = 17
						}
					}
					t3sbstextpic {
						icon = sysext/t3skin/icons/gfx/c_wiz/text_image_right.gif
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_textpic.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_textpic.description
						tt_content_defValues.CType = t3sbs_textpic
					}
					t3sbsimages {
						icon = sysext/t3skin/icons/gfx/c_wiz/images_only.gif
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_images.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_images.description
						tt_content_defValues.CType = t3sbs_image
					}
					t3sbsbullets {
						icon = sysext/t3skin/icons/gfx/c_wiz/bullet_list.gif
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_bullets.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_bullets.description
						tt_content_defValues.CType = t3sbs_bullets
					}
					t3sbstable {
						icon = sysext/t3skin/icons/gfx/c_wiz/table.gif
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_table.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_table.description
						tt_content_defValues.CType = t3sbs_table
					}
					t3sbsmenu {
						icon = sysext/t3skin/icons/gfx/c_wiz/sitemap.gif
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_menu.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_menu.description
						tt_content_defValues.CType = t3sbs_menu
					}
					t3sbspanel {
						icon = ../typo3conf/ext/t3sbootstrap/Resources/Public/Icons/bootstrap-3_24x24.png
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_panel.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_panel.description
						tt_content_defValues.CType = t3sbs_panel
					}
					t3sbsmediaobject {
						icon = ../typo3conf/ext/t3sbootstrap/Resources/Public/Icons/bootstrap-3_24x24.png
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_mediaobject.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_mediaobject.description
						tt_content_defValues.CType = t3sbs_mediaobject
					}
					t3sbsthumbnails {
						icon = ../typo3conf/ext/t3sbootstrap/Resources/Public/Icons/bootstrap-3_24x24.png
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_thumbnails.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_thumbnails.description
						tt_content_defValues.CType = t3sbs_thumbnails
					}
					t3sbscarousel {
						icon = ../typo3conf/ext/t3sbootstrap/Resources/Public/Icons/bootstrap-3_24x24.png
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_carousel.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_carousel.description
						tt_content_defValues.CType = t3sbs_carousel
					}
					t3sbsvideo {
						icon = ../typo3conf/ext/t3sbootstrap/Resources/Public/Icons/bootstrap-3_24x24.png
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_video.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_video.description
						tt_content_defValues.CType = t3sbs_video
					}
					t3sbsfluidtemplate {
						icon = sysext/t3skin/icons/gfx/c_wiz/user_defined.gif
						title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_fluidtemplate.title
						description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:t3sbs_fluidtemplate.description
						tt_content_defValues.CType = t3sbs_fluidtemplate
					}

				}
				show = *
			}
		}
	}
}

