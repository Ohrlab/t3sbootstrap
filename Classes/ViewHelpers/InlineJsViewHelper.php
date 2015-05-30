<?php
namespace T3SBS\T3sbootstrap\ViewHelpers;

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

/**
 * ViewHelper to include inlineJs
 *
 * @package TYPO3
 * @subpackage T3S\T3sbootstrap;
 */
class InlineJsViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

	/**
	 * include inlineJs
	 *
	 * @param string $inlineJS
	 * @param int $currentCeUid
	 * @return void
	*/
	public function render( $inlineJS, $currentRow ) {

	    $block = 'jQuery(function(){'.$inlineJS.'});';
	    $name='t3sbootstrap-thumbnailrow-'.$currentRow;

	    $GLOBALS['TSFE']->getPageRenderer()->addJsFooterInlineCode($name,$block);

	}

}
