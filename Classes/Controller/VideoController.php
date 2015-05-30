<?php
namespace T3SBS\T3sbootstrap\Controller;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 1999-2013 Helmut Hackbarth (info@t3solution.de)
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
 *  A copy is found in the textfile GPL.txt and important notices to the license
 *  from the author is found in LICENSE.txt distributed with these scripts.
 *
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/


/**
 * Plugin class - instantiated from TypoScript.
 *
 */
class VideoController extends \TYPO3\CMS\Frontend\Plugin\AbstractPlugin {


	/**
	 * TypoScript configuration
	 */
	public $conf = array();


	/**
	 * Rendering the "Video" type content element, called from TypoScript (tt_content.t3sbs_video.20)
	 *
	 * @param array $conf TypoScript configuration
	 * @return string HTML output.
	 */
	public function render_video($conf) {

		$extPath = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::siteRelPath('t3sbootstrap');

		$videoJsPath = $extPath.'Resources/Public/Contrib/VideoJs/Video.js';
		$GLOBALS['TSFE']->getPageRenderer()->addJsFooterFile($videoJsPath);

		$videoCssPath = $extPath.'Resources/Public/Contrib/VideoJs/Video-js.css';
		$GLOBALS['TSFE']->getPageRenderer()->addCssFile($videoCssPath, 'stylesheet','all','', TRUE);

		$uid = $this->cObj->data['uid'];

		$this->pi_initPIflexForm();

		$source = $this->pi_getFFvalue($this->cObj->data['pi_flexform'], 'source');
		$ratio = $this->pi_getFFvalue($this->cObj->data['pi_flexform'], 'ratio');

		$centerPlayButton = $this->pi_getFFvalue($this->cObj->data['pi_flexform'], 'centerPlayButton');
		$centerPlayButton = $centerPlayButton ? 'vjs-big-play-centered' : '';

		$autoplay = $this->pi_getFFvalue($this->cObj->data['pi_flexform'], 'autoplay');
		$autoplay = $autoplay ? 'autoplay' : '';


		$preload = $this->pi_getFFvalue($this->cObj->data['pi_flexform'], 'preload');
		$preload = $preload ? 'preload' : '';

		$loop = $this->pi_getFFvalue($this->cObj->data['pi_flexform'], 'loop');
		$loop = $loop ? 'loop' : '';

		$video = '<div class="embed-responsive embed-responsive-'.$ratio.'">';

		if ( $source == 1 ) {
			# own video source
			$mp4 = trim($this->pi_getFFvalue($this->cObj->data['pi_flexform'], 'mp4'));
			$webm = trim($this->pi_getFFvalue($this->cObj->data['pi_flexform'], 'webm'));
			$ogg = trim($this->pi_getFFvalue($this->cObj->data['pi_flexform'], 'ogg'));

			$previewImage = $this->pi_getFFvalue($this->cObj->data['pi_flexform'], 'previewImage');
			$previewImage = $previewImage ? 'poster="'.$previewImage.'"' : '';

			$video .= '<video id="video_'.$uid.'" class="video-js vjs-default-skin" controls '.$previewImage.' data-setup '.$autoplay.' '.$preload.' '.$loop.'>';

			if ( $mp4 ) $video .= '<source src="'.$mp4.'" type="video/mp4" />';
			if ( $webm ) $video .= '<source src="'.$webm.'" type="video/webm" />';
			if ( $ogg ) $video .= '<source src="'.$ogg.'" type="video/ogg" />';


		} elseif ( $source == 2 ) {
			# youtube
			$youtube = trim($this->pi_getFFvalue($this->cObj->data['pi_flexform'], 'youtube'));
			$video .= '<video id="video_'.$uid.'" src="" class="video-js vjs-default-skin '.$centerPlayButton.'" controls data-setup=\'{ "techOrder": ["youtube"], "src": "http://www.youtube.com/watch?v='.$youtube.'" }\' '.$autoplay.' '.$preload.' '.$loop.'>';

			$youtubePath = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::siteRelPath('t3sbootstrap').'Resources/Public/Contrib/VideoJs/Youtube.js';
			$GLOBALS['TSFE']->getPageRenderer()->addJsFooterFile($youtubePath);

		} elseif ( $source == 3 ) {
			# vimeo
			$vimeo = trim($this->pi_getFFvalue($this->cObj->data['pi_flexform'], 'vimeo'));

			$video .= '<video id="vid1_'.$uid.'" src="" class="video-js vjs-default-skin" controls data-setup=\'{ "techOrder": ["vimeo"], "src": "https://vimeo.com/'.$vimeo.'" }\' '.$autoplay.' '.$preload.' '.$loop.'>';

			$vimeoPath = \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::siteRelPath('t3sbootstrap').'Resources/Public/Contrib/VideoJs/Vimeo.js';
			$GLOBALS['TSFE']->getPageRenderer()->addJsFooterFile($vimeoPath);

		}

		$video .= '</video></div>';


		return $video;

	}

}
