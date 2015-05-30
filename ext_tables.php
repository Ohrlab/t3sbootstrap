<?php
if (!defined('TYPO3_MODE')) {
	die ('Access denied.');
}

$_EXTCONF = unserialize($_EXTCONF);

/***************
 * Include TypoScript
 */
if (array_key_exists('autoTS', $_EXTCONF) && $_EXTCONF['autoTS'] === '1') {	
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/TypoScript/Bootstrap/setup.txt">');
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:t3sbootstrap/Configuration/TypoScript/Bootstrap/constants.txt">');
} else {
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile($_EXTKEY, 'Configuration/TypoScript/Bootstrap', 'Bootstrap Components');
}

/***************
 * Disable "new element button" for tx_gridelements_children
 */
$GLOBALS['TCA']['tt_content']['columns']['tx_gridelements_children']['config']['appearance']['levelLinksPosition'] = 'none';


/***************
 * BackendLayoutDataProvider
 */
if (array_key_exists('optionalContent', $_EXTCONF) && $_EXTCONF['optionalContent'] === '1') {
	# with optional content on top and bottom
	$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutDataProvider'][$_EXTKEY] = 'T3SBS\T3sbootstrap\Provider\ExtendedBackendLayoutDataProvider';
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.optionalContent = 1');
} else {
	$GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['BackendLayoutDataProvider'][$_EXTKEY] = 'T3SBS\T3sbootstrap\Provider\BackendLayoutDataProvider';
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptConstants('plugin.t3sbootstrap_configuration.general.optionalContent = 0');
}

/**
 * Include Backend Module
 */
if ( \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss')
 && \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('dyncss_less')
 && TYPO3_MODE === 'BE') {
	\TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerModule(
		'T3SBS.' . $_EXTKEY,
		'tools',
		'm1',
		'',
		array(
			'Less' => 'index,create,reset,copy',
		),
		array(
			'access' => 'admin',
			'icon'   => 'EXT:' . $_EXTKEY . '/ext_icon.gif',
			'labels'  => 'LLL:EXT:' . $_EXTKEY . '/Resources/Private/Language/locallang_mod.xlf',
		)
	);
}