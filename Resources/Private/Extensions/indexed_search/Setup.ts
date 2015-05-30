# **********************************************************
# Library for indexed_search
# **********************************************************


# put this in your root-template to use a better search-form-template:
# plugin.tx_indexedsearch.templateFile = EXT:t3sbootstrap/Resources/Private/Extensions/indexed_search/indexed_search.tmpl
# plugin.tx_indexedsearch._CSS_DEFAULT_STYLE >

#-------------------------------------------------------------------------------
#	EXT:indexed_search Searchbox
#-------------------------------------------------------------------------------

lib.extensions.indexed_search.searchbox = COA_INT
lib.extensions.indexed_search.searchbox {
	wrap = <li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown"> <span class="glyphicon glyphicon-search"></span> </a>|</li>
	10 = COA
	10 {
		wrap = <div class="dropdown-menu" style="padding: 0 15px; min-width: 260px;">|</div>
		10 = TEXT
		10 {
			wrap = <form style="width:100%;" class="navbar-form" role="search" action="|" method="post"><div class="input-group">
			typolink {
				parameter = {$plugin.t3sbootstrap_configuration.extensions.indexed_search.page}
				returnLast = url
			}
		}
		15 = TEXT
		15 {
			value (
				<input type="hidden" name="tx_indexedsearch[_sections]" value="0">
				<input type="hidden" name="tx_indexedsearch[group]" value="flat">
				<input type="hidden" name="tx_indexedsearch[lang]" value="-1">
			)
		}
		20 = TEXT
		20 {
			insertData = 1
			value (
				<input name="tx_indexedsearch[sword]" type="text" class="form-control" placeholder="{LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang.xlf:search-placeholder}">
					<span class="input-group-btn">
						<button class="btn btn-default" type="submit"><span class="glyphicon glyphicon-search"></span></button>
					</span>
				</div>
				</form>
			)
		}
	}
}

