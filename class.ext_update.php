<?php
/***************************************************************
 *  Copyright notice
 *
 *  (c) 2014 Helmut Hackbarth <typo3@t3solution.de>
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

use TYPO3\CMS\Core\Messaging\FlashMessage;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * Update class for the extension manager.
 *
 * @package TYPO3
 * @subpackage tx_news
 */
class ext_update {

	/**
	 * Array of flash messages (params) array[][status,title,message]
	 *
	 * @var array
	 */
	protected $messageArray = array();

	/**
	 * @var \TYPO3\CMS\Core\Database\DatabaseConnection
	 */
	protected $databaseConnection;


	/**
	 * Constructor
	 */
	public function __construct() {
		$this->databaseConnection = $GLOBALS['TYPO3_DB'];

	}

	/**
	 * Main update function called by the extension manager.
	 *
	 * @return string
	 */
	public function main() {
		$this->processUpdates();
		return $this->generateOutput();
	}

	/**
	 * Called by the extension manager to determine if the update menu entry
	 * should by showed.
	 *
	 * @return bool
	 * @todo find a better way to determine if update is needed or not.
	 */
	public function access() {
		return TRUE;
	}

	/**
	 * The actual update function. Add your update task in here.
	 *
	 * @return void
	 */
	protected function processUpdates() {

		$this->updateDatabaseTableField('pages', 'tx_t3sbootstrap_linkToTop', 'tinyint(4) NOT NULL DEFAULT \'0\'');
		$this->updateDatabaseTableField('pages_language_overlay', 'tx_t3sbootstrap_linkToTop', 'tinyint(4) NOT NULL DEFAULT \'0\'');

		$this->updateDatabaseTableField('tt_content', 'tx_t3sbootstrap_media_position', 'int(11) DEFAULT \'0\'');
		$this->updateDatabaseTableField('tt_content', 'tx_t3sbootstrap_media_alignment', 'varchar(100) NOT NULL DEFAULT \'0\'');
	}

	/**
	 * Update a tabled field.
	 *
	 * @param  string $table
	 * @param  string $fieldName
	 * @return int
	 */
	protected function updateDatabaseTableField( $table, $fieldName, $fieldType ) {
		$title = 'Update "' . $table . ':' . $fieldName . '"';

		$currentTableFields = $this->databaseConnection->admin_get_fields($table);

		if ($currentTableFields[$fieldName]) {
			$message = 'Field ' . $table . ':' . $fieldName . ' already exists.';
			$status = FlashMessage::OK;
		} else {

			$sql = 'ALTER TABLE ' . $table . ' ADD ' . $fieldName .' '. $fieldType;

			if ($this->databaseConnection->admin_query($sql) === FALSE) {
				$message = ' SQL ERROR: ' . $this->databaseConnection->sql_error();
				$status = FlashMessage::ERROR;
			} else {
				$message = 'everything is ok!';
				$status = FlashMessage::OK;
			}
		}

		$this->messageArray[] = array($status, $title, $message);
		return $status;
	}

	/**
	 * Generates output by using flash messages
	 *
	 * @return string
	 */
	protected function generateOutput() {
		$output = '';
		foreach ($this->messageArray as $messageItem) {
			/** @var \TYPO3\CMS\Core\Messaging\FlashMessage $flashMessage */
			$flashMessage = GeneralUtility::makeInstance(
				'TYPO3\\CMS\\Core\\Messaging\\FlashMessage',
				$messageItem[2],
				$messageItem[1],
				$messageItem[0]);
			$output .= $flashMessage->render();
		}
		return $output;
	}

}
