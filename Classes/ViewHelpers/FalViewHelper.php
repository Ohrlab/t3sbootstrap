<?php
namespace T3SBS\T3sbootstrap\ViewHelpers;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2014 Helmut Hackbarth <typo3@t3solution.de>
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
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

/**
 *
 * @package TYPO3
 * @subpackage T3S\T3sbootstrap;
 */
class FalViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

	/**
	 * @var \TYPO3\CMS\Core\Resource\FileRepository
	 * @inject
	 */
	protected $fileRepository;

	/**
	 * Find FileReference objects by relation to other records
	 *
	 * @param int $uid The UID of the related record (needs to be the localized uid, as translated IRRE elements relate to them)
	 * @param string $as The alias to use for the found files
	 * @param string $tableName Table name of the related record
	 * @param string $fieldName Field name of the related record
	 *
	 * @return string The render template
	 */
	public function render($uid, $as = 'objects', $tableName = 'tt_content', $fieldName = 'image') {

		$filesFromRepository = $this->fileRepository->findByRelation($tableName, $fieldName, $uid);

		$this->templateVariableContainer->add($as, $filesFromRepository);
		$content = $this->renderChildren();
		$this->templateVariableContainer->remove($as);

		return $content;

	}

}
