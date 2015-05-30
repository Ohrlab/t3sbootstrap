<?php
namespace T3SBS\T3sbootstrap\Hooks;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2013 Georg Ringer <georg.ringer@cyberhouse.at>
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/*
 * modified 2014 by Helmut Hackbarth <typo3@t3solution.de>
 */

class T3libBefunc {




	/**
	 * Hook function of t3lib_befunc
	 * It is used to change the flexform rendering
	 *
	 * @param array &$dataStructure Flexform structure
	 * @param array $conf some strange configuration
	 * @param array $row row of current record
	 * @param string $table table name
	 * @param string $fieldName some strange field name
	 * @return void
	 */
	public function getFlexFormDS_postProcessDS(&$dataStructure, $conf, $row, $table, $fieldName) {

		/** @var string */
		$_EXTKEY = 't3sbootstrap';

		/***************
		 * Extension configuration
		 */
		if(!is_array($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY])){
			$GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY] = unserialize($GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]);
		}

		if ( $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]['default_BScTypes'] && $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf'][$_EXTKEY]['default_CTypes'] ) {

			if ($table === 'tt_content' && $row['CType'] === 'table' && is_array($dataStructure)) {
				$this->updateFlexforms($dataStructure, $row);
			}

		} else {

			if ($table === 'tt_content' && $row['CType'] === 't3sbs_table' && is_array($dataStructure)) {
				$this->updateFlexforms($dataStructure, $row);
			}

		}

	}

	/**
	 * Update flexform configuration if a action is selected
	 *
	 * @param array|string &$dataStructure flexform structure
	 * @param array $row row of current record
	 * @return void
	 */
	protected function updateFlexforms(array &$dataStructure, array $row) {

		$dataStructure['sheets']['sDEF']['ROOT']['el']['acctables_tableclass']['TCEforms']['config'] = array(
			'type' => 'select',
			'items' => array(
				array('LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tableclasses.default', 'table'),
				array('LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tableclasses.striped', 'table table-striped'),
				array('LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tableclasses.bordered', 'table table-bordered'),
				array('LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tableclasses.hover', 'table table-hover'),
				array('LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tableclasses.condensed', 'table table-condensed'),
			),
			'size' => 1,
			'maxitems' => 1,
		);

		$dataStructure['sheets']['sDEF']['ROOT']['el']['acctables_tablewidth']['TCEforms']['label'] = 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tablewidth';
		$dataStructure['sheets']['sDEF']['ROOT']['el']['acctables_tablewidth']['TCEforms']['config'] = array(
			'type' => 'check',
			'items' => array(
				array('', 1),
			),
		);

		$dataStructure['sheets']['sDEF']['ROOT']['el']['acctables_tablecolwidth']['TCEforms']['label'] = 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tablecolwidth';
		$dataStructure['sheets']['sDEF']['ROOT']['el']['acctables_tablecolwidth']['TCEforms']['config'] = array(
            'type' => 'input',
            'size' => '40',
            'eval' => 'trim',
            'max' => '80'
        );

		$dataStructure['sheets']['sDEF']['ROOT']['el']['acctables_tablerowcontext']['TCEforms']['label'] = 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:tablerowcontext';
		$dataStructure['sheets']['sDEF']['ROOT']['el']['acctables_tablerowcontext']['TCEforms']['config'] = array(
            'type' => 'input',
            'size' => '40',
            'eval' => 'trim',
            'max' => '80'
        );

	}

}