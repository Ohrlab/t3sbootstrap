# **********************************************************
#	EXT:news
# **********************************************************

plugin.tx_news {
	view {
		templateRootPaths.200 = EXT:t3sbootstrap/Resources/Private/Extensions/News/Templates/
		partialRootPaths.200 = EXT:t3sbootstrap/Resources/Private/Extensions/News/Partials/
	}

	settings {
		thumbnail {
			# 2,3 or 4 columns
			columns = 3
			width = 400
			height = 250
		}
		mediaObject {
			width = 100
			height = 100
		}

		lazyload.enable = {$plugin.t3sbootstrap_configuration.extensions.lazyload.enable}
		lightbox.enable = {$plugin.t3sbootstrap_configuration.extensions.lightbox.enable}
		lightbox.slideshow = {$plugin.t3sbootstrap_configuration.extensions.lightbox.slideshow}
	}
}


