<?php

if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

/***************
 * Extension configuration
 */
$_EXTCONF = unserialize($_EXTCONF);

/***************
 * Page TsConfig & Setup
 */

 # Default TSconfig
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/TsConfigDefaults.ts">');

 # Optional TSconfig - default CTypes
if (array_key_exists('default_CTypes', $_EXTCONF) && $_EXTCONF['default_CTypes'] === '1') {
	#removeItems Bsctype
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/Bsctype.ts">');
	# Optional TSconfig - default CTypes with Bootstrap Components
	if ( $_EXTCONF['default_BScTypes'] ) {
		 # Contstant - used in Tt_content.ts
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.bsctype = 1');
	}
} else {
	#removeItems CType
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/CType.ts">');
}

 # Optional TSconfig - default lang. label and flag
if (array_key_exists('default_Flag', $_EXTCONF) && $_EXTCONF['default_Flag'] === '1')
 \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/Flag.ts">');

 # Optional TSconfig - RTE
if (array_key_exists('rte_config', $_EXTCONF) && $_EXTCONF['rte_config'] === '1') {
	if (array_key_exists('rte_extend', $_EXTCONF) && $_EXTCONF['rte_extend'] === '1') {
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/RTE_extend.ts">');
	} else {
		\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Configuration/PageTS/RTE.ts">');
	}
}

 # Optional Font Awesome
if (array_key_exists('fontawesome', $_EXTCONF) && $_EXTCONF['fontawesome'] === '1') {
	 # Contstant
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.fontawesome = 1');
} else {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.fontawesome = 0');
}

 # if news is loaded
if ( \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('news') ) {
	 # TsConfig
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:' . $_EXTKEY . '/Resources/Private/Extensions/News/TsConfig.ts">');
	 # Setup
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript($_EXTKEY,
	    'setup','<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Resources/Private/Extensions/News/Setup.ts">',
	    defaultContentRendering
	);
}

 # if indexed_search is loaded
if ( \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('indexed_search') ) {
	 # Setup
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript($_EXTKEY,
	    'setup','<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Resources/Private/Extensions/indexed_search/Setup.ts">',
	    defaultContentRendering
	);
}

 # if powermail is loaded
if ( \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('powermail') ) {
	 # Setup
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript($_EXTKEY,
	    'setup','<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Resources/Private/Extensions/Powermail/Main.ts">',
	    defaultContentRendering
	);
}

 # if dyncss & dyncss_less is loaded
if ( \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss')
 && \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss_less')) {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.dyncss = 1');
} else {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.dyncss = 0');
}

 # Path to the flags by version
if ( \TYPO3\CMS\Core\Utility\VersionNumberUtility::convertVersionNumberToInteger(TYPO3_version) < 7001000 ) {
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.flags = ../typo3/sysext/t3skin/images/flags/');
} else {
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.flags = ../typo3/sysext/core/Resources/Public/Icons/Flags/');
}

/***************
 * Bootstrap table-classes
 */
$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['t3lib/class.t3lib_befunc.php']['getFlexFormDSClass'][$_EXTKEY] = 'T3SBS\T3sbootstrap\Hooks\T3libBefunc';

/***************
 * Add RootLine Fields: keywords & description
 */
$rootlinefields = &$GLOBALS["TYPO3_CONF_VARS"]["FE"]["addRootLineFields"];
if($rootlinefields != '') $rootlinefields .= ' , ';
$rootlinefields .= 'keywords,description';
