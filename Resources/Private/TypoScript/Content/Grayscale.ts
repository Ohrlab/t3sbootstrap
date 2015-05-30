# **********************************************************
# BOOTSTAP: Grayscale theme
# **********************************************************

temp.bsheader < lib.bsheader
lib.bsheader >
lib.bsheader = CASE
lib.bsheader {
   key.field=colPos

   10 < lib.stdheader
   10.10.setCurrent.typolink >

   default < temp.bsheader
}

page.includeCSS {
	grayscale = EXT:t3sbootstrap/Resources/Public/Styles/Grayscale.css
	grayscale.excludeFromConcatenation = 1

	grayscale.if.value = t3sbootstrap__10
	grayscale.if.equals.field = backend_layout
}

page.includeJS {
	google_api_key = //maps.googleapis.com/maps/api/js?key=&sensor=false
	google_api_key.external = 1
	google_api_key.if.value = t3sbootstrap__10
	google_api_key.if.equals.field = backend_layout
}

page.includeJSFooter {
	jquery_easing = EXT:t3sbootstrap/Resources/Public/Scripts/Jquery.easing.min.js
	jquery_easing.if.value = t3sbootstrap__10
	jquery_easing.if.equals.field = backend_layout

	grayscale = EXT:t3sbootstrap/Resources/Public/Scripts/Grayscale.js
	grayscale.excludeFromConcatenation = 1
	grayscale.if.value = t3sbootstrap__10
	grayscale.if.equals.field = backend_layout
}


tt_content.stdWrap.innerWrap.cObject.default.10.cObject.default = CASE
tt_content.stdWrap.innerWrap.cObject.default.10.cObject.default {
   key.field=tx_gridelements_backend_layout

   section_container = TEXT
   section_container.value = <div

   default = TEXT
   default.value = <div id="c{field:uid}"
}


tt_content {
	stdWrap.outerWrap.cObject = CASE
	stdWrap.outerWrap.cObject {
		key.field = colPos

		default = TEXT
		default.value = |

		# colPos 10 - Header
		10 = COA
		10 {
			5 = LOAD_REGISTER
			5 {
				bgImg.cObject = FILES
				bgImg.cObject {
				    references {
				      data = levelmedia:-1, slide
				      listNum = 0
				    }
				    renderObj = COA
				    renderObj {
				      10 = IMG_RESOURCE
				      10 {
				        file.import.data = file:current:publicUrl
				      }
					  wrap = style="background: #000 url('/|')  no-repeat bottom center scroll; -webkit-background-size: cover; -moz-background-size: cover; background-size: cover; -o-background-size: cover;"
				    }
				    if.isTrue.data = levelmedia:-1, slide
				}
				sectionLink.cObject = TEXT
				sectionLink.cObject.field = header_link
				sectionLink.cObject.split {
				  token = #
				  returnKey = 1
				}
			}
			10 = TEXT
			10.value =  | <a class="btn btn-circle page-scroll" href="#c{register:sectionLink}"><i class="fa fa-angle-double-down animated"></i></a>
			10.outerWrap = <header class="intro" {register:bgImg}> | </header>
			10.wrap = <div class="intro-body"><div class="container"> | </div></div>
			10.innerWrap = <div class="row"><div class="col-md-8 col-md-offset-2"> | </div></div>
			10.insertData = 1

			99 = RESTORE_REGISTER
		}

		# colPos 11 - Sections
		11 = COA
		11 {
			5 = LOAD_REGISTER
			5 {
				bgSectionImg.cObject = FILES
				bgSectionImg.cObject {
				    references {
				    	field = flexform_bgImage
				    }
				    renderObj = COA
				    renderObj {
						10 = IMG_RESOURCE
						10 {
							file.import.data = file:current:publicUrl
						}

wrap.cObject = COA
wrap.cObject {
	10 = TEXT
	10.value = style="background-attachment: fixed !important; background: #000 url('/|')  no-repeat bottom center scroll; -webkit-background-size: cover; -moz-background-size: cover; background-size: cover; -o-background-size: cover;"
	10.if.isTrue = {$plugin.t3sbootstrap_configuration.grayscale.background.attachment.fixed}
	20 = TEXT
	20.value = style="background: #000 url('/|')  no-repeat bottom center scroll; -webkit-background-size: cover; -moz-background-size: cover; background-size: cover; -o-background-size: cover;"
	20.if.isFalse = {$plugin.t3sbootstrap_configuration.grayscale.background.attachment.fixed}


}
###						wrap = style="background-attachment: fixed !important; background: #000 url('/|')  no-repeat bottom center scroll; -webkit-background-size: cover; -moz-background-size: cover; background-size: cover; -o-background-size: cover;"


				    }
				    if.isTrue.field = flexform_bgImage
				}




			}
			10 = CASE
			10 {
				key.field = tx_gridelements_backend_layout

				section_container = COA
				section_container {

					10 = TEXT
					10.value = <div class="col-lg-8 col-lg-offset-2"> | </div>
					10.outerWrap = <section id="c{field:uid}" class="content-section content-row text-center"><div class="bgimg" {register:bgSectionImg}><div class="container"> | </div></div></section>
					10.insertData = 1
					10.if.isTrue.field = flexform_bgImage

					20 = TEXT
					20.value = <div class="col-lg-8 col-lg-offset-2"> | </div>
					20.outerWrap = <section id="c{field:uid}" class="container content-section content-row text-center"> | </section>
					20.wrap = <div class="row"> | </div>
					20.insertData = 1
					20.if.isFalse.field = flexform_bgImage

				}

				default = TEXT
				default.value = |
			}
			99 = RESTORE_REGISTER
		}

		# colPos 12 - Footer
		12 = TEXT
		12.value = <footer> | </footer>
	}
}

tt_content.gridelements_pi1.20.10.setup.section_container < lib.gridelements.defaultGridSetup


lib.navigation.section < tt_content.t3sbs_menu.20.3
lib.navigation.section {
	stdWrap.outerWrap >
	1 = TMENU
	1 {
		sectionIndex.includeHiddenHeaders = 1
		sectionIndex.useColPos = 11
		NO {
			before.cObject = LOAD_REGISTER
			before.cObject{
		        glyphicon.cObject=TEXT
				glyphicon.cObject.required = 1
		        glyphicon.cObject.data.dataWrap = DB:tt_content:{field:sectionIndex_uid}:tx_t3sbootstrap_glyphicon
		        glyphicon.cObject.noTrimWrap = |<span class="glyphicon glyphicon-|"></span> |
				glyphicon.cObject.if.isFalse = {$plugin.t3sbootstrap_configuration.general.fontawesome}
				fontawesome.cObject=TEXT
				fontawesome.cObject.required = 1
				fontawesome.cObject.data.dataWrap = DB:tt_content:{field:sectionIndex_uid}:tx_t3sbootstrap_fontawesome_icon
				fontawesome.cObject.noTrimWrap = | <i class="fa |"></i> |
				fontawesome.cObject.if.isTrue = {$plugin.t3sbootstrap_configuration.general.fontawesome}
			}
			ATagBeforeWrap = 1
			linkWrap = {register:glyphicon}{register:fontawesome}|
			allStdWrap.insertData = 1
			stdWrap.htmlSpecialChars = 1
			ATagParams = class="page-scroll"
		}
	}
}

page.jsFooterInline.33 = TEXT
page.jsFooterInline.33.if.value = t3sbootstrap__10
page.jsFooterInline.33.if.equals.field = backend_layout
page.jsFooterInline.33.value (

	jQuery(function() {
		google.maps.event.addDomListener(window, 'load', init);
		function init() {
		    var mapOptions = {
		        zoom: 15,
		        center: new google.maps.LatLng({$plugin.t3sbootstrap_configuration.grayscale.google.map.latitude}, {$plugin.t3sbootstrap_configuration.grayscale.google.map.longitude}),
		        disableDefaultUI: true,
		        scrollwheel: false,
		        draggable: false,
		        styles: [{
		            "featureType": "water",
		            "elementType": "geometry",
		            "stylers": [{
		                "color": "#000000"
		            }, {
		                "lightness": 17
		            }]
		        }, {
		            "featureType": "landscape",
		            "elementType": "geometry",
		            "stylers": [{
		                "color": "#000000"
		            }, {
		                "lightness": 20
		            }]
		        }, {
		            "featureType": "road.highway",
		            "elementType": "geometry.fill",
		            "stylers": [{
		                "color": "#000000"
		            }, {
		                "lightness": 17
		            }]
		        }, {
		            "featureType": "road.highway",
		            "elementType": "geometry.stroke",
		            "stylers": [{
		                "color": "#000000"
		            }, {
		                "lightness": 29
		            }, {
		                "weight": 0.2
		            }]
		        }, {
		            "featureType": "road.arterial",
		            "elementType": "geometry",
		            "stylers": [{
		                "color": "#000000"
		            }, {
		                "lightness": 18
		            }]
		        }, {
		            "featureType": "road.local",
		            "elementType": "geometry",
		            "stylers": [{
		                "color": "#000000"
		            }, {
		                "lightness": 16
		            }]
		        }, {
		            "featureType": "poi",
		            "elementType": "geometry",
		            "stylers": [{
		                "color": "#000000"
		            }, {
		                "lightness": 21
		            }]
		        }, {
		            "elementType": "labels.text.stroke",
		            "stylers": [{
		                "visibility": "on"
		            }, {
		                "color": "#000000"
		            }, {
		                "lightness": 16
		            }]
		        }, {
		            "elementType": "labels.text.fill",
		            "stylers": [{
		                "saturation": 36
		            }, {
		                "color": "#000000"
		            }, {
		                "lightness": 40
		            }]
		        }, {
		            "elementType": "labels.icon",
		            "stylers": [{
		                "visibility": "off"
		            }]
		        }, {
		            "featureType": "transit",
		            "elementType": "geometry",
		            "stylers": [{
		                "color": "#000000"
		            }, {
		                "lightness": 19
		            }]
		        }, {
		            "featureType": "administrative",
		            "elementType": "geometry.fill",
		            "stylers": [{
		                "color": "#000000"
		            }, {
		                "lightness": 20
		            }]
		        }, {
		            "featureType": "administrative",
		            "elementType": "geometry.stroke",
		            "stylers": [{
		                "color": "#000000"
		            }, {
		                "lightness": 17
		            }, {
		                "weight": 1.2
		            }]
		        }]
		    };
		    var mapElement = document.getElementById('map');
		    var map = new google.maps.Map(mapElement, mapOptions);
		    var image = 'typo3conf/ext/t3sbootstrap/Resources/Public/Images/Map-marker.png';
		    var myLatLng = new google.maps.LatLng({$plugin.t3sbootstrap_configuration.grayscale.google.map.latitude}, {$plugin.t3sbootstrap_configuration.grayscale.google.map.longitude});
		    var beachMarker = new google.maps.Marker({
		        position: myLatLng,
		        map: map,
		        icon: image
		    });
		}

 });

)
