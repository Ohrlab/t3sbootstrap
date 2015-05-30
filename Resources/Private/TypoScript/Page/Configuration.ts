# **********************************************************
# General configuration of a page
# **********************************************************

page {
	meta.viewport = width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no
#	meta.X-UA-Compatible = IE=edge
#	meta.X-UA-Compatible.httpEquivalent = 1
}

page.headerData.5 = TEXT
page.headerData.5.value (
<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
<![endif]-->
)

config {
	doctype = html5
	xmlprologue = none
	linkVars = L, print
	xhtml_cleaning = all
	disablePrefixComment = 1
}