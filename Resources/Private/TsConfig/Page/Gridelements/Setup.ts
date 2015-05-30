### frame: 1=red, 2=green, 3=blue

# **********************************************************
# BOOTSTAP: Grid system
# **********************************************************

# 2 columns
tx_gridelements.setup.two_columns {
  	title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.twoColumns.title
	description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.twoColumns.description
	frame = 2
	icon = EXT:t3sbootstrap/Resources/Public/Icons/GridElements/twoColumns.gif
	flexformDS = FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/Gridelements/TwoColumns.xml

	config {
		colCount = 2
		rowCount = 1
		rows {
			1 {
				columns {
					1 {
						name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.anyColumns.colPos.0
						colPos = 0
					}
					2 {
						name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.anyColumns.colPos.1
						colPos = 1
					}
				}
			}
		}
	}
}

# 3 columns
tx_gridelements.setup.three_columns {
  	title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.threeColumns.title
	description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.threeColumns.description
	frame = 2
	icon = EXT:t3sbootstrap/Resources/Public/Icons/GridElements/threeColumns.gif
	flexformDS = FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/Gridelements/ThreeColumns.xml

	config {
		colCount = 3
		rowCount = 1
		rows {
			1 {
				columns {
					1 {
						name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.anyColumns.colPos.0
						colPos = 0
					}
					2 {
						name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.anyColumns.colPos.1
						colPos = 1
					}
					3 {
						name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.anyColumns.colPos.2
						colPos = 2
					}
				}
			}
		}
	}
}

# 4 columns
tx_gridelements.setup.four_columns {
  	title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.fourColumns.title
	description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.fourColumns.description
	frame = 2
	icon = EXT:t3sbootstrap/Resources/Public/Icons/GridElements/fourColumns.gif
	flexformDS = FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/Gridelements/FourColumns.xml

	config {
		colCount = 4
		rowCount = 1
		rows {
			1 {
				columns {
					1 {
						name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.anyColumns.colPos.0
						colPos = 0
					}
					2 {
						name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.anyColumns.colPos.1
						colPos = 1
					}
					3 {
						name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.anyColumns.colPos.2
						colPos = 2
					}
					4 {
						name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.anyColumns.colPos.3
						colPos = 3
					}
				}
			}
		}
	}
}


# **********************************************************
# BOOTSTAP: TAP - (c) Stefan Schäfer www.merec.org/typo3/bootstrap3-tabs-mit-grid-elements-fuer-typo3
# **********************************************************

# Tab Container
tx_gridelements.setup.tabs_container {
  	title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.tabContainer.title
	description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.tabContainer.description
	icon = EXT:t3sbootstrap/Resources/Public/Icons/GridElements/tabContainer.gif
	frame = 3
	flexformDS = FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/Gridelements/Tabs.xml
	config {
		colCount = 1
		rowCount = 1
		rows {
			1 {
				columns {
					1 {
						name = Tab Container
						colPos = 0
						allowed = gridelements_pi1
					}
				}
			}
		}
	}
}

# Tab Element
tx_gridelements.setup.tabs_tab {
  	title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.tabElement.title
	description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.tabElement.description
	icon = EXT:t3sbootstrap/Resources/Public/Icons/GridElements/tabElement.gif
	frame = 2
	config {
		colCount = 1
		rowCount = 1
		rows {
			1 {
				columns {
					1 {
						name = Tab Element
						colPos = 0
					}
				}
			}
		}
	}
}


# **********************************************************
# BOOTSTAP: COLLAPSE - (c) Stefan Schäfer www.merec.org/typo3/bootstrap3-collapse-mit-grid-elements-fuer-typo3
# **********************************************************

# Collapsible Container
tx_gridelements.setup.collapsible_container {
  	title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.collapsibleContainer.title
	description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.collapsibleContainer.description
	icon = EXT:t3sbootstrap/Resources/Public/Icons/GridElements/collapseContainer.gif
	frame = 3
	config {
		colCount = 1
		rowCount = 1

		rows {
			1 {
				columns {
					1 {
						name = Collapsible Container
						colPos = 0
						allowed = gridelements_pi1
					}
				}
			}
		}
	}
}

# Collapsible Element
tx_gridelements.setup.collapsible_accordion {
   	title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.collapsibleElement.title
	description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.collapsibleElement.description
	icon = EXT:t3sbootstrap/Resources/Public/Icons/GridElements/collapseElement.gif
	flexformDS = FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/Gridelements/Collapse.xml
	frame = 2
	config {
		colCount = 1
		rowCount = 1
		rows {
			1 {
				columns {
					1 {
						name = Collapsible Element
						colPos = 0
					}
				}
			}
		}
	}
}


# **********************************************************
# BOOTSTAP: Thumbnail
# **********************************************************

# Thumbnail Container
tx_gridelements.setup.thumbnails_container {
   	title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.thumbnailsContainer.title
	description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.thumbnailsContainer.description
	icon = EXT:t3sbootstrap/Resources/Public/Icons/GridElements/thumbnails.gif
	frame = 1
	flexformDS = FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/Gridelements/Thumbnails.xml
	config {
		colCount = 1
		rowCount = 1
		rows {
			1 {
				columns {
					1 {
						name = Thumbnail Container
						colPos = 0
						allowed = t3sbs_thumbnails
					}
				}
			}
		}
	}
}

# **********************************************************
# BOOTSTAP: Modal
# **********************************************************

tx_gridelements.setup.modal {
	title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.modal.title
	description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.modal.description
	frame = 2
	icon = EXT:t3sbootstrap/Resources/Public/Icons/GridElements/carousel.gif
	flexformDS = FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/Gridelements/Modal.xml
	config {
		colCount = 1
		rowCount = 1
		rows {
			1 {
				columns {
					1 {
						name = Modal
						colPos = 0
					}
				}
			}
		}
	}
}

# **********************************************************
# BOOTSTAP: Carousel
# **********************************************************

# Carousel Container
tx_gridelements.setup.carousel_container {
   	title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.carouselContainer.title
	description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.carouselContainer.description
	icon = EXT:t3sbootstrap/Resources/Public/Icons/GridElements/carousel.gif
	frame = 1
	flexformDS = FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/Gridelements/Carousel.xml
	config {
		colCount = 1
		rowCount = 1
		rows {
			1 {
				columns {
					1 {
						name = Carousel Container
						colPos = 0
						allowed = t3sbs_carousel
					}
				}
			}
		}
	}
}



# **********************************************************
# BOOTSTAP: Sections for the grayscale theme
# **********************************************************

tx_gridelements.setup.section_container {
  	title = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.grayscaleSection.title
	description = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:gridelement.grayscaleSection.description
	frame = 2
	icon = EXT:t3sbootstrap/Resources/Public/Icons/GridElements/carousel.gif
	flexformDS = FILE:EXT:t3sbootstrap/Resources/Private/TsConfig/Page/Gridelements/Section.xml

	config {
		colCount = 1
		rowCount = 1
		rows {
			1 {
				columns {
					1 {
						name = Grayscale Section
						colPos = 11
					}
				}
			}
		}
	}
}
