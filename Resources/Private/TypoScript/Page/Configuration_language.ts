# **********************************************************
# Multilanguage configuration
# **********************************************************

# Default language - here German
config {
	sys_language_uid = 0
	language = de
	locale_all = de_DE.UTF-8
	htmlTag_langKey = de
	sys_language_mode = content_fallback ; 1,0
    sys_language_overlay = 1
}

# English
[globalVar = GP:L = 1]
	config {
		sys_language_uid = 1
		language = en
		locale_all = en_UK.UTF-8
		htmlTag_langKey = en
	}
[global]
