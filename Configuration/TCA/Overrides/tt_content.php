<?php
if (!defined('TYPO3_MODE')) {
	die('Access denied.');
}

/** @var string */
$_EXTKEY = 't3sbootstrap';


/***************
 * Extension configuration
 */
$_EXTCONF = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]);


/***************
 * Add Content Elements to List
 */
$defaultCTypeItems = $GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'];

$GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'] = array(
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_contentelements',
	    '--div--'
	),
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_header.title',
	    't3sbs_header',
	    'sysext/t3skin/icons/gfx/i/tt_content_header.gif'
	),
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_text.title',
	    't3sbs_text',
	    'sysext/t3skin/icons/gfx/i/tt_content.gif'
	),
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_textpic.title',
	    't3sbs_textpic',
	    'sysext/t3skin/icons/gfx/i/tt_content_textpic.gif'
	),
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_images.title',
	    't3sbs_image',
	    'sysext/t3skin/icons/gfx/i/tt_content_image.gif'
	),
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_bullets.title',
	    't3sbs_bullets',
	    'sysext/t3skin/icons/gfx/i/tt_content_bullets.gif'
	),
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_table.title',
	    't3sbs_table',
	    'sysext/t3skin/icons/gfx/i/tt_content_table.gif'
	),
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_menu.title',
	    't3sbs_menu',
	    'sysext/t3skin/icons/gfx/i/tt_content_menu.gif'
	),
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_panel.title',
	    't3sbs_panel',
	    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . '/Resources/Public/Icons/ext_icon.gif'
	),
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_mediaobject.title',
	    't3sbs_mediaobject',
	    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . '/Resources/Public/Icons/ext_icon.gif'
	),
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_thumbnails.title',
	    't3sbs_thumbnails',
	    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . '/Resources/Public/Icons/ext_icon.gif'
	),
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_carousel.title',
	    't3sbs_carousel',
	    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . '/Resources/Public/Icons/ext_icon.gif'
	),
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_video.title',
	    't3sbs_video',
	    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::extRelPath($_EXTKEY) . '/Resources/Public/Icons/ext_icon.gif'
	),
	array(
	    'LLL:EXT:'.$_EXTKEY.'/Resources/Private/Language/locallang_be.xlf:t3sbs_fluidtemplate.title',
	    't3sbs_fluidtemplate',
	    'sysext/t3skin/icons/gfx/i/template.gif'
	),
);
foreach($defaultCTypeItems as $key => $value){
    $GLOBALS['TCA']['tt_content']['columns']['CType']['config']['items'][] = $value;
}
unset($key);
unset($value);
unset($defaultCTypeItems);

/***************
 * New fields in table:tt_content
 */
$tempContentColumns = array (
	'tx_t3sbootstrap_panel_state' => array (
		'exclude' => 0,
		'label' => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_panel_state',
		'config' => array (
			'type' => 'select',
			'items' => array(
				array('Default', 'default'),
				array('Primary', 'primary'),
				array('Success', 'success'),
				array('Info', 'info'),
				array('Warning', 'warning'),
				array('Danger', 'danger'),
			),
			'size' => 1,
			'maxitems' => 1,
			'eval' => 'required'
		)
	),
	'tx_t3sbootstrap_list_group' => array (
		'exclude' => 0,
		'label' => 'Bootstrap:',
		'config' => array (
			'type' => 'select',
			'items' => array(
				array('Unordered', 'list-unordered'),
				array('Ordered', 'ordered'),
				array('List group', 'list-group'),
				array('Unstyled list', 'list-unstyled'),
				array('Inline list', 'list-inline'),
			),
			'size' => 1,
			'maxitems' => 1,
			'eval' => 'required'
		)
	),
	'tx_t3sbootstrap_imagestyle' => array (
		'exclude' => 0,
		'label' => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_image_style',
		'config' => array (
			'type' => 'select',
			'items' => array(
				array('Default', '0'),
				array('Rounded', 'img-rounded'),
				array('Circle', 'img-circle'),
				array('Thumbnail', 'img-thumbnail'),
			),
			'size' => 1,
			'maxitems' => 1,
			'eval' => 'required'
		)
	),
    'tx_t3sbootstrap_media_position' => array (
		'exclude' => 0,
		'label' => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_media_position',
		'config' => array (
			'type' => 'select',
			'items' => array(
				array('LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_media_position_left', '1'),
				array('LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_media_position_right', '2'),
			),
			'size' => 1,
			'maxitems' => 1,
			'eval' => 'required'
		)
    ),
	'tx_t3sbootstrap_media_alignment' => array (
		'exclude' => 0,
		'label' => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_media_alignment',
		'config' => array (
			'type' => 'select',
			'items' => array(
				array('LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_media_alignment_top', '0'),
				array('LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_media_alignment_middle', 'media-middle'),
				array('LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_media_alignment_bottom', 'media-bottom'),
			),
			'size' => 1,
			'maxitems' => 1,
			'eval' => 'required'
		)
	),
	'tx_t3sbootstrap_content_slide' => array(
	        'exclude' => 0,
	        'label' => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:tt_content.tx_t3sbootstrap_content_slide',
	        'config' => array(
	                'type' => 'check',
	                'default' => '0'
	        )
	),
	'tx_t3sbootstrap_fontawesome_icon' => array(
		'label'   => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_db.xlf:pages.tx_t3sbootstrap_fontawesome_icon',
        'config' => array(
	        'type' => 'input',
	        'size' => '20',
        )
	),

);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content',$tempContentColumns);
unset($tempContentColumns);


/***************
 * Header Layout sorting
 */
$GLOBALS['TCA']['tt_content']['columns']['header_layout']['config']['items'] = Array (
	array('LLL:EXT:lang/locallang_general.xlf:LGL.default_value', '0'),
	array('LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.header_layout.ph1', '1'),
	array('LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.header_layout.ph2', '6'),
	array('LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.header_layout.2', '2'),
	array('LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.header_layout.3', '3'),
	array('LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.header_layout.4', '4'),
	array('LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.header_layout.5', '5'),
	array('LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tt_content.header_layout.6', '7'),
	array('LLL:EXT:cms/locallang_ttc.xlf:header_layout.I.6', '100')
);


/***************
 * BS Text and BS Menu
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_text']['showitem'] = $GLOBALS['TCA']['tt_content']['types']['text']['showitem'];
$GLOBALS['TCA']['tt_content']['types']['t3sbs_menu']['showitem'] = $GLOBALS['TCA']['tt_content']['types']['menu']['showitem'];


/***************
 * BS Video
 */
 // Add flexform
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue('*', 'FILE:EXT:t3sbootstrap/Configuration/FlexForms/video.xml', 't3sbs_video');

$GLOBALS['TCA']['tt_content']['types']['t3sbs_video']['showitem'] = '
--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.general;general,
--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.header;header,
--div--;HTML5 Video,pi_flexform,
--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.appearance,
--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.frames;frames,
--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.access,
--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.visibility;visibility,
--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.access;access,
--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended,
--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories,
tx_gridelements_container, tx_gridelements_columns
';

/***************
 * BS Header
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_header']['showitem'] = '
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.general;general,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.header;header,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.appearance,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.frames;frames,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.access,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.visibility;visibility,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.access;access,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended,
	--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories,
	tx_gridelements_container, tx_gridelements_columns
';

/***************
 * BS Images
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_image']['showitem'] = '
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.general;general,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.header;header,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.images, image,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.imagelinks;imagelinks,
	tx_t3sbootstrap_imagestyle,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.appearance,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.frames;frames,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.image_settings;image_settings,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.imageblock;imageblock,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.access,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.visibility;visibility,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.access;access,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended,
	--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories,
	tx_gridelements_container, tx_gridelements_columns
';
if ($_EXTCONF['default_BScTypes'] && $_EXTCONF['default_CTypes'])
$GLOBALS['TCA']['tt_content']['types']['image']['showitem'] = $GLOBALS['TCA']['tt_content']['types']['t3sbs_image']['showitem'];

/***************
 * BS Text & Images
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_textpic']['showitem'] = '
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.general;general,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.header;header,
	bodytext;Text;;richtext:rte_transform[flag=rte_enabled|mode=ts_css], rte_enabled;LLL:EXT:cms/locallang_ttc.xlf:rte_enabled_formlabel,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.images, image,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.imagelinks;imagelinks,
	tx_t3sbootstrap_imagestyle,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.appearance,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.frames;frames,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.image_settings;image_settings,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.imageblock;imageblock,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.access,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.visibility;visibility,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.access;access,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended,
	--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories,
	tx_gridelements_container, tx_gridelements_columns
';
if ($_EXTCONF['default_BScTypes'] && $_EXTCONF['default_CTypes'])
$GLOBALS['TCA']['tt_content']['types']['textpic']['showitem'] = $GLOBALS['TCA']['tt_content']['types']['t3sbs_textpic']['showitem'];

/***************
 * BS Bullets
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_bullets']['showitem'] = '
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.general;general,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.header;header,
	tx_t3sbootstrap_list_group, bodytext;LLL:EXT:cms/locallang_ttc.xlf:bodytext.ALT.bulletlist_formlabel;;nowrap,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.appearance,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.frames;frames,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.access,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.visibility;visibility,
	--palette--;LLL:EXT:cms/locallang_ttc.xlf:palette.access;access,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended,
	--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories,
	tx_gridelements_container, tx_gridelements_columns
';
if ($_EXTCONF['default_BScTypes'] && $_EXTCONF['default_CTypes'])
$GLOBALS['TCA']['tt_content']['types']['bullets']['showitem'] = $GLOBALS['TCA']['tt_content']['types']['t3sbs_bullets']['showitem'];

/***************
 * BS Table
 */
// Add flexform
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue('*', 'FILE:EXT:css_styled_content/flexform_ds.xml', 't3sbs_table');

$GLOBALS['TCA']['tt_content']['types']['t3sbs_table']['showitem'] = '
	CType;;4;;1-1-1, hidden, header;;3;;2-2-2, linkToTop;;;;4-4-4, tx_t3sbootstrap_fontawesome_icon,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:CType.I.5, layout;;10;;3-3-3, cols, bodytext;;9;nowrap:wizards[table], pi_flexform,
	--div--;LLL:EXT:cms/locallang_tca.xlf:pages.tabs.access, starttime, endtime, fe_group
';
if ($_EXTCONF['default_BScTypes'] && $_EXTCONF['default_CTypes'])
$GLOBALS['TCA']['tt_content']['types']['table']['showitem'] = $GLOBALS['TCA']['tt_content']['types']['t3sbs_table']['showitem'];


/***************
 * BS Panels
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_panel']['showitem'] = '
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,
	header, subheader, tx_t3sbootstrap_fontawesome_icon, tx_t3sbootstrap_panel_state,bodytext;LLL:EXT:cms/locallang_ttc.xml:bodytext_formlabel;;richtext:rte_transform[flag=rte_enabled|mode=ts_css],
	rte_enabled;LLL:EXT:cms/locallang_ttc.xml:rte_enabled_formlabel,
	--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.appearance,
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.frames;frames,
	--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access,
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility,
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended,
	--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories,
	tx_gridelements_container, tx_gridelements_columns
';

/***************
 * BS Media object
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_mediaobject']['showitem'] = '
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,image,
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.image_settings;image_settings,
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.imagelinks;imagelinks,tx_t3sbootstrap_media_position,tx_t3sbootstrap_media_alignment,header,header_link,
	subheader, tx_t3sbootstrap_fontawesome_icon, bodytext;LLL:EXT:cms/locallang_ttc.xml:bodytext_formlabel;;richtext:rte_transform[flag=rte_enabled|mode=ts_css], r
	te_enabled;LLL:EXT:cms/locallang_ttc.xml:rte_enabled_formlabel,
	--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.appearance,
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.frames;frames,
	--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access,
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility,
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended,
	--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories,
	tx_gridelements_container, tx_gridelements_columns
';

/***************
 * BS Carousel
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_carousel']['showitem'] = '
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,
	image,header, subheader, tx_t3sbootstrap_fontawesome_icon, bodytext;LLL:EXT:cms/locallang_ttc.xml:bodytext_formlabel;;richtext:rte_transform[flag=rte_enabled|mode=ts_css],rte_enabled;LLL:EXT:cms/locallang_ttc.xml:rte_enabled_formlabel,
	--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access,
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility,
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended,
	--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories,
	tx_gridelements_container, tx_gridelements_columns
';

/***************
 * BS Thumbnails
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_thumbnails']['showitem'] = '
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,
	image,
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.imagelinks;imagelinks,
	header, header_link, subheader, tx_t3sbootstrap_fontawesome_icon,
	bodytext;LLL:EXT:cms/locallang_ttc.xml:bodytext_formlabel;;richtext:rte_transform[flag=rte_enabled|mode=ts_css],rte_enabled;LLL:EXT:cms/locallang_ttc.xml:rte_enabled_formlabel,
	--div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access,
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility,
	--palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access,
	--div--;LLL:EXT:cms/locallang_ttc.xlf:tabs.extended,
	--div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories,
	tx_gridelements_container, tx_gridelements_columns
';

/***************
 * FluidTemplate
 */
$GLOBALS['TCA']['tt_content']['types']['t3sbs_fluidtemplate']['showitem'] = '
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.general;general,
    header;LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_be.xlf:t3sbs_nonvisible_header,
    subheader;FluidTemplate,
    --div--;LLL:EXT:cms/locallang_ttc.xml:tabs.appearance,
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.frames;frames,
    --div--;LLL:EXT:cms/locallang_ttc.xml:tabs.access,
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.visibility;visibility,
    --palette--;LLL:EXT:cms/locallang_ttc.xml:palette.access;access,
    --div--;LLL:EXT:cms/locallang_ttc.xml:tabs.extended,
    --div--;LLL:EXT:lang/locallang_tca.xlf:sys_category.tabs.category, categories,
    tx_gridelements_container, tx_gridelements_columns
';


# add subheader to palette header
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'tt_content',
    'header',
    '--linebreak--,subheader',
    'after:header'
);

# add tx_t3sbootstrap_content_slide
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
    'tt_content',
    'frames',
    'tx_t3sbootstrap_content_slide,--linebreak--',
    'before:layout'
);


if ($_EXTCONF['fontawesome']) {
	# add tx_t3sbootstrap_fontawesome_icon
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addFieldsToPalette(
		'tt_content',
		'header',
		'--linebreak--,tx_t3sbootstrap_fontawesome_icon',
		'after:subheader'
	);
}


