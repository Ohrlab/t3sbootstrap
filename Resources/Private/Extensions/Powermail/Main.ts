plugin.tx_powermail {
	view {
		templateRootPath >
		templateRootPaths {
			100 = EXT:powermail/Resources/Private/Templates/
			200 = EXT:t3sbootstrap/Resources/Private/Extensions/Powermail/Templates/
		}
		partialRootPath >
		partialRootPaths {
			100 = EXT:powermail/Resources/Private/Partials/
			200 = EXT:t3sbootstrap/Resources/Private/Extensions/Powermail/Partials/
		}
		layoutRootPath >
		layoutRootPaths {
			100 = EXT:powermail/Resources/Private/Layouts/
		}
	}
}

[globalVar = TSFE:id = {$plugin.t3sbootstrap_configuration.extensions.powermail.formPid}]
page {
	# Inlude JavaScript files
	includeJSFooter {
		#powermailJQueryDatepicker = EXT:powermail/Resources/Public/JavaScripts/jquery.datetimepicker.js
		powermailJQueryFormValidation = EXT:powermail/Resources/Public/JavaScripts/parsley.min.js
		#powermailJQueryTabs = EXT:powermail/Resources/Public/JavaScripts/tabs.js
		#powermailForm = EXT:powermail/Resources/Public/JavaScripts/form.js
	}

	# Include CSS files
	includeCSS {
		powermail = EXT:t3sbootstrap/Resources/Public/Styles/Powermail.css
	}
}
[global]