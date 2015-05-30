#-------------------------------------------------------------------------------
#	RTE  Konfiguration in Verbindung mit der Einstellung "Typical"
#-------------------------------------------------------------------------------

RTE.classes >
RTE.classes {

	small {
		name = Size: Small
	}
	lead {
		name = Size: Lead
	}
	text-muted {
		name = Color: Muted
		value = color:#999999;
	}
	text-primary {
		name = Color: Primary
		value = color: #428BCA;
	}
	text-success {
		name = Color: Success
		value = color: #3C763D;
	}
	text-info {
		name = Color: Info
		value = color: #31708F;
	}
	text-warning {
		name = Color: Warning
		value = color: #8A6D3B;
	}
	text-danger {
		name = Color: Danger
		value = color: #A94442;
	}
	text-left {
		name = Align: Left
	}
	text-center {
		name = Align: Center
	}
	text-right {
		name = Align: Right
	}
	text-justify {
		name = Align: Justify
	}
	text-lowercase {
		name = Transformation: Lowercase
	}
	text-uppercase {
		name = Transformation: Uppercase
	}
	text-capitalize {
		name = Transformation: Capitalize
	}
	center-block {
		name = Division: Center content blocks
	}
	list-unstyled {
		name = List: Unstyled
	}
	list-inline {
		name = List: Inline
	}
	pull-right {
		name = Pull-right
	}
	pull-left {
		name = Pull-left
	}
    label {
		name = Label: basis
    }
    label-default {
		name = Label: default
    }
    label-primary {
		name = Label: primary
    }
    label-success {
		name = Label: success
    }
    label-info {
		name = Label: info
    }
    label-warning {
		name = Label: warning
    }
    label-danger {
		name = Label: danger
    }
	
	
	alert {
		name = Alert basis
	}
	alert-success {
		name = Alert success
		value = color: #3C763D;
	}
	alert-info {
		name = Alert info
		value = color: #31708F;
	}
	alert-warning {
		name = Alert warning
		value = color: #8A6D3B;
	}
	alert-danger {
		name = Alert danger
		value = color: #A94442;
	}
	indent-1 {
		name = Indent-20px
	}
	indent-2 {
		name = Indent-40px
	}
	indent-3 {
		name = Indent-60px
	}
}

RTE.default {

	# Benutzerdefinierte Elemente
	# Damit die Tags im Frontend ausgegeben werden müssen zusätzlich im TypoScript des Templates noch folgendes hinzugefügt werden: "lib.parseFunc_RTE.allowTags := addToList(x,x,x,)"
	userElements.10 = Benutzerdefinierte Tags
	userElements.10 {
		1 = Gelöschter Text <mark>
		1.description = Zur Hervorhebung von Textpassagen soll das <mark> Element nur in Verbindung mit textuellen Inhalten genutzt werden und muss eine Relevanz zum Kontext besitzen.
		1.mode = wrap
		1.content = <mark>|</mark>

		2 = Durchgestrichener Text <s>
		2.description = Um nicht mehr relevante Textblöcke anzuzeigen, kann das Tag <s> verwenden werden.
		2.mode = wrap
		2.content = <s>|</s>
	}

	# Neu definiert als in "Typical" um das <u> Tag zu erhalten
	removeTags = center, font, strike, o:p, sdfield

	# ISO-Code der Standardsprache von Content Elementen.
	defaultContentLanguage = de

	# RTE Größe veränderbar.
	rteResize = 1

	# Style Definitionen, die dem zu bearbeiteten Inhalten angewendet werden.
	contentCSS = typo3conf/ext/t3sbootstrap/Resources/Public/Styles/Rte.css

	# Legt fest, ob Mozilla/Firefox die style attributes übernehmen soll oder nicht.
	useCSS = 0

	# Definiert die spezifizierten Farben die im color-selectors verfügbar sind.
	#colors =

	# Deaktiviert das Kontextmenü.
	contextMenu.disabled = 0

	# Hält die RTE Icons gegroupt zusammen
	keepButtonGroupTogether = 1

	# blendet Statusbar in htmlarea aus
	showStatusBar =  1

	# Buttons anzeigen. showButtons = * würde sämtliche Buttons vorab anzeigen.
	showButtons (
		formatblock
		, blockstyle
		, blockstylelabel
		, textstyle
		, textstylelabel
		, bold
		, strong
		, italic
		, emphasis
		, code
		, definition
		, keyboard
		, citation
		, quotation
		, sample
		, variable
		, small
		, underline
		, deletedtext
		, underline
		, insertedtext
		, bidioverride
		, subscript
		, superscript
		, insertparagraphbefore
		, insertparagraphafter
		, unorderedlist
		, orderedlist
		, insertcharacter
		, emoticon
		, line
		, blockquote
		, link
		, unlink
		, removeformat
		, copy
		, cut
		, paste
		, pastetoggle
		, pastebehaviour
		, findreplace
		, user
		, chMode
		, inserttag
		, undo
		, redo
	)

	# Buttons verstecken.
	hideButtons (
	showhelp
		, spellcheck
		, blockstylelabel
		, textstylelabel
		, language
		, showlanguagemarks
		, about
		, big
		, span
		, formattext
	)

	# Bestimmt die Anordnung der buttons in der RTE-tool-bar.
	toolbarOrder (
		formatblock
		, bar
		, blockstyle
		, blockstylelabel
		, linebreak
		, textstyle
		, textstylelabel
		, bold
		, strong
		, italic
		, emphasis
		, code
		, definition
		, keyboard
		, citation
		, quotation
		, sample
		, variable
		, small
		, underline
		, deletedtext
		, underline
		, insertedtext
		, bidioverride
		, subscript
		, superscript
		, linebreak
		, insertparagraphbefore
		, insertparagraphafter
		, unorderedlist
		, orderedlist
		, insertcharacter
		, emoticon
		, line
		, blockquote
		, link
		, unlink
		, removeformat
		, copy
		, cut
		, paste
		, pastetoggle
		, pastebehaviour
		, findreplace
		, user
		, chMode
		, inserttag
		, undo
		, redo
	)

  # FORMATBLOCK
  # Versteckt nicht benötigte Elemente i.d. Block Formatierung Dropdown-Liste.
	buttons.formatblock.removeItems = blockquote, h1, h2
  # Reihenfolge der Elemente anordnen
	buttons.formatblock.orderItems = p, h3, h4, h5, h6, div, pre, address, nav, article, section, aside, header, footer
  # Umbenennung der Format-Block-Labels: typo3\sysext\rtehtmlarea\extensions\BlockElements\locallang.xlf
  buttons.formatblock.items {
	div.label = Division
	h6.label = Überschrift 6
  }
  # Breite des formating-selectors.
  buttons.formatblock.width = 170
  # Wenn aktiviert, wird das Blocklabel in der Block Formatierung Dropdown-Liste dem TAG-Namen vorangestellt.
  buttons.formatblock.postfixLabelWithTag = 1

  # Button "Als einfachen Text einfuegen" automatisch aktiviert. Damit z.B. aus Word/Google keine Tags mitkopiert werden
  buttons.pastetoggle.setActiveOnRteOpen = 1

  # TEXTSTYLE
  buttons.textstyle.tags.span.allowedClasses := addToList(indent-1, indent-2, indent-3, badge, small, lead, text-muted, text-primary, text-success, text-info, text-warning, text-danger, alert)

  # BLOCKSTYLE TABLE, DIV ...
  buttons.blockstyle.tags.ul.allowedClasses := addToList(list-unstyled, list-inline)
  buttons.blockstyle.tags.blockquote.allowedClasses := addToList(pull-right, pull-left)
  buttons.blockstyle.tags.div.allowedClasses := addToList(alert, alert-success, alert-info, alert-warning, alert-danger, small, lead, text-muted, text-primary, text-success, text-info, text-warning, text-danger, text-center, text-left,t ext-right, text-justify, text-lowercase, text-uppercase, text-capitalize, center-block, pull-right, pull-left)
  buttons.blockstyle.tags.div.allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2, important, name-of-person, detail)
  buttons.blockstyle.tags.p.allowedClasses := addToList(indent-1, indent-2, indent-3, small, lead, text-muted, text-primary, text-success, text-info, text-warning, text-danger, text-center, text-left, text-right, text-justify, text-lowercase, text-uppercase, text-capitalize, pull-right, pull-left)
  #buttons.blockstyle.tags.all.allowedClasses =
  buttons.blockstyle.width = 200
  #buttons.blockstyle.showTagFreeClasses = 1

  # Standard RTE-Verarbeitungsregeln.
  # INFO zu "proc.allowedClasses"
  # z.B. "detail, name-of-person u. important" sind u. a. bereits vordefinierte KLASSEN aus der "Typical" Konfiguration u. müssen daher unter "proc.allowedClasses" nicht mehr hinzugefügt werden.
  # ACHTUNG: Wenn Klassen trotzdem ungewollt i. d. Listen angezeigt werden bzw. nicht übernommen werden, stehen diese wahrscheinlich i.d "RTE.css". Entweder aus der RTE.css entfernen, oder zur entsprechenden classe hinzufügen (allowedClasses:= addToList)!
  # Beispiel: "span.mono{background:#ccc}" aus der RTE.css zu "buttons.textstyle.tags.span.allowedClasses" hinzufügen.

	#################allowTags < RTE.default.proc.allowTags

	proc {
	# Anstatt der Schreibweise := addToList(sondertag) können natürlich auch alle Tags aufgeführt werden. Umständlicher, aber man sieht genau was erlaubt ist.
	# http://www.syndikus.eu/2012/06/typo3-weitere-html-tags-im-editor-htmlarea-rte-zulassen/
	# Damit die Tags im Frontend ausgegeben werden müssen zusätzlich im TypoScript des Templates noch folgendes hinzugefügt werden: "lib.parseFunc_RTE.allowTags := addToList(x,x,x,)"
	allowTags := addToList(mark,s)

	# Tags die nicht erlaubt sind. Besser ist es dies einfach festzulegen mit allowTags
	denyTags >

	# Erlaupte Tags ausserhalb von P & DIV . Anstatt der Schreibweise := addToList(sondertag) können natürlich auch alle Tags aufgeführt werden. Umständlicher, aber man sieht genau was erlaubt ist.
		allowTagsOutside := addToList(i)

	# Erlaupte Attributes in p und div tags
	keepPDIVattribs = class

	# Für diese Konfiguration folgende Tags nicht entfernen
	entryHTMLparser_db.removeTags := removeFromList(u)

	# Liste aller Klassen-Selectoren die auf den Weg zur Datenbank erlaubt sind. (Siehe auch i. d. RTE.css!!!!)
	allowedClasses := addToList(indent-1, indent-2, indent-3, alert, alert-success, alert-info, alert-warning, alert-danger, badge, error, small, lead, text-muted, text-primary, text-success, text-info, text-warning, text-danger, text-center, text-left, text-right, text-justify, text-lowercase, text-uppercase, text-capitalize, center-block, pull-right, pull-left, list-unstyled, list-inline)
	allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2, important, name-of-person, detail, align-left, align-center, align-right, align-justify, component-items, action-items, component-items-ordered, action-items-ordered, indent)

	# br wird nicht zu p konvertiert
	dontConvBRtoParagraph = 1

		entryHTMLparser_db {
			tags {
				b.remap = strong
				i.remap = em
			}
		}
		exitHTMLparser_db {
			tags.b.remap = strong
			tags.i.remap = em
		}
	}
}

RTE.mutuallyExclusiveClasses {
	10 = text-left, text-right, text-center, text-justify, text-lowercase, text-uppercase, text-capitalize
	20 = small, lead
	30 = text-muted, text-primary, text-success, text-info, text-warning, text-danger
	40 = list-unstyled, list-inline
	50 = alert-success, alert-info, alert-warning, alert-danger
	60 = indent-1, indent-2, indent-3
}

RTE.default.proc.entryHTMLparser_db.allowTags < RTE.default.proc.allowTags
RTE.default.FE.proc.allowedClasses < RTE.default.proc.allowedClasses
RTE.default.FE.proc.allowTagsOutside < RTE.default.proc.allowTagsOutside
RTE.default.FE.proc.allowTags < RTE.default.proc.allowTags
RTE.default.FE.proc.entryHTMLparser_db.allowTags < RTE.default.proc.entryHTMLparser_db.allowTags

# Breit des RTE in der Vollansicht.
TCEFORM.tt_content.bodytext.RTEfullScreenScreenWidth = 100%