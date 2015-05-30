# **********************************************************
# <title> - Tag
# **********************************************************

#user_pagetitle
config.titleTagFunction = T3SBS\T3sbootstrap\Utility\TitleTag->get
config.titleTagFunction {
	data = page:subtitle // page:title
	noTrimWrap = |{$plugin.t3sbootstrap_configuration.general.pageTitle.prefix} | {$plugin.t3sbootstrap_configuration.general.pageTitle.suffix}|
}

# **********************************************************
# <meta> - Tags
# *********************************************************
page.meta {
	description.data = levelfield :-1, description, slide
	description.override.field = description   	
	keywords.data = levelfield :-1, keywords, slide
	keywords.override.field = keywords      
	revisit-after = 7 days
	robots = index, follow
}
