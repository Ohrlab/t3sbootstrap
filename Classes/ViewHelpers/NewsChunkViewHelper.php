<?php
namespace T3SBS\T3sbootstrap\ViewHelpers;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2014 Helmut Hackbarth <info@t3solution.de>
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
 * @author Helmut Hackbarth <in>
 */
class NewsChunkViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

    /**
     * @param object $input
     * @param integer $size
     *
     * @return array
     */
    public function render( $input, $size ) {

    	$size = $size > 4 ? 4 : $size;

		if ( !is_array($input) ) $input = $this->object_to_array($input);

        return array_chunk($input, $size);

    }

    /**
     * @param object $data
     *
     * @return array
     */
    public function object_to_array($data) {

	        $result = array();
	        foreach ($data as $key => $value) {
	            $result[$key] = $value;
	        }
	        return $result;
	}


}
