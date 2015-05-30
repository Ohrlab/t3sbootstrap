<?php
namespace T3SBS\T3sbootstrap\ViewHelpers\BE;

use \TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use \TYPO3\CMS\Core\Utility\GeneralUtility;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2015 Helmut Hackbarth <info@t3solution.de>
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
 * @author Helmut Hackbarth <nfo@t3solution.de>
 */
class LessViewHelper extends \TYPO3\CMS\Fluid\Core\ViewHelper\AbstractViewHelper {

	/**
	 * Extension key.
	 *
	 */
	public $extKey = 't3sbootstrap';


    /**
     *
	 * @param array $args
	 *
     * @return array
     */
    public function render($args) {

		$extDir = ExtensionManagementUtility::extPath($this->extKey);
		$filename = $extDir.'Resources/Public/Contrib/Bootstrap/less/variables.less';
		if ( $args['reset'] || !file_get_contents($filename) ) {
			$filename = $extDir.'Resources/Public/Contrib/Bootstrap/reset/variables.less';
		}
		if ( $args['myReset'] ) {
			$copyPath = GeneralUtility::getFileAbsFileName('fileadmin/BootstrapLessConfig/');
			$filename = $copyPath.'variables_copy.less';
		}
		if ( $args['startWith'] ) {
$bootswatchTheme = $args['bootswatch'] ? $args['bootswatch'] : 'cerulean';
			$filename = $extDir.'Resources/Public/Contrib/Bootswatch/'.$bootswatchTheme.'/variables.less';
		}
		$content = '<h2>Colors</h2>';
		$content .= '<p>Gray and brand colors for use across Bootstrap.</p>';
		$content .= '<div class="row">';

		$fileContent = file_get_contents($filename);

		if (substr($fileContent, 0, 1) == '@') {
			// saved file
			$fileArr = GeneralUtility::trimExplode(';', $fileContent, 1);
		} else {
			// original file
			$fileArr = file($filename);
		}
		
		$index = 1;
		foreach ($fileArr as $style) {
			 // disable glyphicons = @icon-font (didn't work with dyncss currently)
			if (substr($style, 0, 1) == '@' && substr($style, 0, 10) !== '@icon-font') {

				if (substr($style, 0, 7) == '@import' ) {
					$content .= '<input type="hidden" value="'.str_replace('"',"'",$style).'" name="tx_t3sbootstrap_tools_t3sbootstrapm1[fontimport]" />';
				} else {
					$styleArr = GeneralUtility::trimExplode(':', $style, 1);
					$value = GeneralUtility::trimExplode(';', $styleArr[1], 1);
					$content .= self::_header($styleArr[0]);
					if ($styleArr[0]) {
						$content .= '<div class="col-xs-4">';
						$content .= '<label for="'.$styleArr[0].'">'.$styleArr[0].'</label>';
						$content .= '<input type="text" value="'.str_replace('"',"'",$value[0]).'" name="tx_t3sbootstrap_tools_t3sbootstrapm1['.$styleArr[0].']" id="'.$styleArr[0].'" class="form-control" />';
						$content .= self::_helperText($styleArr[0]);
						$content .= '</div>';
						if (self::_header($styleArr[0])) $index = 1;
						if ($index == 3) {
							$content .= '<div class="clearfix"></div>';
							$index = 0;
						}
						$index++;
					}
				}
			}
		}
		$content .= '</div>';

        return $content;
    }


	/**
	* Get helper text
	* @param string $style
	*/
	private function _helperText($style) {

		if ($style == '@body-bg') $content = '<p class="help-block" id="help-block-@body-bg">Background color for <code>&lt;body&gt;</code>.</p>';
		if ($style == '@text-color') $content = '<p class="help-block" id="help-block-@text-color">Global text color on <code>&lt;body&gt;</code>.</p>';
		if ($style == '@link-color') $content = '<p class="help-block" id="help-block-@link-color">Global textual link color.</p>';
		if ($style == '@link-hover-color') $content = '<p class="help-block" id="help-block-@link-hover-color">Link hover color set via <code>darken()</code> function.</p>';
		if ($style == '@link-hover-decoration') $content = '<p class="help-block" id="help-block-@link-hover-decoration">Link hover decoration.</p>';
		if ($style == '@font-family-monospace') $content = '<p class="help-block" id="help-block-@font-family-monospace">Default monospace fonts for <code>&lt;code&gt;</code>, <code>&lt;kbd&gt;</code>, and <code>&lt;pre&gt;</code>.</p>';
		if ($style == '@line-height-base') $content = '<p class="help-block" id="help-block-@line-height-base">Unit-less <code>line-height</code> for use in components like buttons.</p>';
		if ($style == '@line-height-computed') $content = '<p class="help-block" id="help-block-@line-height-computed">Computed "line-height" (<code>font-size</code> * <code>line-height</code>) for use with <code>margin</code>, <code>padding</code>, etc.</p>';
		if ($style == '@headings-font-family') $content = '<p class="help-block" id="help-block-@headings-font-family">By default, this inherits from the <code>&lt;body&gt;</code>.</p>';
		if ($style == '@icon-font-path') $content = '<p class="help-block" id="help-block-@icon-font-path">Load fonts from this directory.</p>';
		if ($style == '@icon-font-name') $content = '<p class="help-block" id="help-block-@icon-font-name">File name for all font files.</p>';
		if ($style == '@icon-font-svg-id') $content = '<p class="help-block" id="help-block-@icon-font-svg-id">Element ID within SVG icon file.</p>';
		if ($style == '@component-active-color') $content = '<p class="help-block" id="help-block-@component-active-color">Global color for active items (e.g., navs or dropdowns).</p>';
		if ($style == '@component-active-bg') $content = '<p class="help-block" id="help-block-@component-active-bg">Global background color for active items (e.g., navs or dropdowns).</p>';
		if ($style == '@caret-width-base') $content = '<p class="help-block" id="help-block-@caret-width-base">Width of the <code>border</code> for generating carets that indicator dropdowns.</p>';
		if ($style == '@caret-width-large') $content = '<p class="help-block" id="help-block-@caret-width-large">Carets increase slightly in size for larger components.</p>';
		if ($style == '@table-cell-padding') $content = '<p class="help-block" id="help-block-@table-cell-padding">Padding for <code>&lt;th&gt;</code>s and <code>&lt;td&gt;</code>s.</p>';
		if ($style == '@table-condensed-cell-padding') $content = '<p class="help-block" id="help-block-@table-condensed-cell-padding">Padding for cells in <code>.table-condensed</code>.</p>';
		if ($style == '@table-bg') $content = '<p class="help-block" id="help-block-@table-bg">Default background color used for all tables.</p>';
		if ($style == '@table-bg-accent') $content = '<p class="help-block" id="help-block-@table-bg-accent">Background color used for <code>.table-striped</code>.</p>';
		if ($style == '@table-bg-hover') $content = '<p class="help-block" id="help-block-@table-bg-hover">Background color used for <code>.table-hover</code>.</p>';
		if ($style == '@table-border-color') $content = '<p class="help-block" id="help-block-@table-border-color">Border color for table and cell borders.</p>';
		if ($style == '@input-bg') $content = '<p class="help-block" id="help-block-@input-bg"><code>&lt;input&gt;</code> background color</p>';
		if ($style == '@input-bg-disabled') $content = '<p class="help-block" id="help-block-@input-bg-disabled"><code>&lt;input disabled&gt;</code> background color</p>';
		if ($style == '@input-color') $content = '<p class="help-block" id="help-block-@input-color">Text color for <code>&lt;input&gt;</code>s</p>';
		if ($style == '@input-border') $content = '<p class="help-block" id="help-block-@input-border"><code>&lt;input&gt;</code> border color</p>';
		if ($style == '@input-border-radius') $content = '<p class="help-block" id="help-block-@input-border-radius">Default <code>.form-control</code> border radius</p>';
		if ($style == '@input-border-radius-large') $content = '<p class="help-block" id="help-block-@input-border-radius-large">Large <code>.form-control</code> border radius</p>';
		if ($style == '@input-border-radius-small') $content = '<p class="help-block" id="help-block-@input-border-radius-small">Small <code>.form-control</code> border radius</p>';
		if ($style == '@input-border-focus') $content = '<p class="help-block" id="help-block-@input-border-focus">Border color for inputs on focus</p>';
		if ($style == '@input-color-placeholder') $content = '<p class="help-block" id="help-block-@input-color-placeholder">Placeholder text color</p>';
		if ($style == '@input-height-base') $content = '<p class="help-block" id="help-block-@input-height-base">Default <code>.form-control</code> height</p>';
		if ($style == '@input-height-large') $content = '<p class="help-block" id="help-block-@input-height-large">Large <code>.form-control</code> height</p>';
		if ($style == '@input-height-small') $content = '<p class="help-block" id="help-block-@input-height-small">Small <code>.form-control</code> height</p>';
		if ($style == '@form-group-margin-bottom') $content = '<p class="help-block" id="help-block-@form-group-margin-bottom"><code>.form-group</code> margin</p>';
		if ($style == '@input-group-addon-bg') $content = '<p class="help-block" id="help-block-@input-group-addon-bg">Background color for textual input addons</p>';
		if ($style == '@input-group-addon-border-color') $content = '<p class="help-block" id="help-block-@input-group-addon-border-color">Border color for textual input addons</p>';
		if ($style == '@cursor-disabled') $content = '<p class="help-block" id="help-block-@cursor-disabled">Disabled cursor for form controls and buttons.</p>';
		if ($style == '@dropdown-bg') $content = '<p class="help-block" id="help-block-@dropdown-bg">Background for the dropdown menu.</p>';
		if ($style == '@dropdown-border') $content = '<p class="help-block" id="help-block-@dropdown-border">Dropdown menu <code>border-color</code>.</p>';
		if ($style == '@dropdown-fallback-border') $content = '<p class="help-block" id="help-block-@dropdown-fallback-border">Dropdown menu <code>border-color</code> <strong>for IE8</strong>.</p>';
		if ($style == '@dropdown-divider-bg') $content = '<p class="help-block" id="help-block-@dropdown-divider-bg">Divider color for between dropdown items.</p>';
		if ($style == '@dropdown-link-color') $content = '<p class="help-block" id="help-block-@dropdown-link-color">Dropdown link text color.</p>';
		if ($style == '@dropdown-link-hover-color') $content = '<p class="help-block" id="help-block-@dropdown-link-hover-color">Hover color for dropdown links.</p>';
		if ($style == '@dropdown-link-hover-bg') $content = '<p class="help-block" id="help-block-@dropdown-link-hover-bg">Hover background for dropdown links.</p>';
		if ($style == '@dropdown-link-active-color') $content = '<p class="help-block" id="help-block-@dropdown-link-active-color">Active dropdown menu item text color.</p>';
		if ($style == '@dropdown-link-active-bg') $content = '<p class="help-block" id="help-block-@dropdown-link-active-bg">Active dropdown menu item background color.</p>';
		if ($style == '@dropdown-link-disabled-color') $content = '<p class="help-block" id="help-block-@dropdown-link-disabled-color">Disabled dropdown menu item background color.</p>';
		if ($style == '@dropdown-header-color') $content = '<p class="help-block" id="help-block-@dropdown-header-color">Text color for headers within dropdown menus.</p>';
		if ($style == '@dropdown-caret-color') $content = '<p class="help-block" id="help-block-@dropdown-caret-color">Deprecated <code>@dropdown-caret-color</code> as of v3.1.0</p>';
		if ($style == '@screen-xs') $content = '<p class="help-block" id="help-block-@screen-xs">Deprecated <code>@screen-xs</code> as of v3.0.1</p>';
		if ($style == '@screen-xs-min') $content = '<p class="help-block" id="help-block-@screen-xs-min">Deprecated <code>@screen-xs-min</code> as of v3.2.0</p>';
		if ($style == '@screen-phone') $content = '<p class="help-block" id="help-block-@screen-phone">Deprecated <code>@screen-phone</code> as of v3.0.1</p>';
		if ($style == '@screen-sm') $content = '<p class="help-block" id="help-block-@screen-sm">Deprecated <code>@screen-sm</code> as of v3.0.1</p>';
		if ($style == '@screen-tablet') $content = '<p class="help-block" id="help-block-@screen-tablet">Deprecated <code>@screen-tablet</code> as of v3.0.1</p>';
		if ($style == '@screen-md') $content = '<p class="help-block" id="help-block-@screen-md">Deprecated <code>@screen-md</code> as of v3.0.1</p>';
		if ($style == '@screen-desktop') $content = '<p class="help-block" id="help-block-@screen-desktop">Deprecated <code>@screen-desktop</code> as of v3.0.1</p>';
		if ($style == '@screen-lg') $content = '<p class="help-block" id="help-block-@screen-lg">Deprecated <code>@screen-lg</code> as of v3.0.1</p>';
		if ($style == '@screen-lg-desktop') $content = '<p class="help-block" id="help-block-@screen-lg-desktop">Deprecated <code>@screen-lg-desktop</code> as of v3.0.1</p>';
		if ($style == '@grid-columns') $content = '<p class="help-block" id="help-block-@grid-columns">Number of columns in the grid.</p>';
		if ($style == '@grid-gutter-width') $content = '<p class="help-block" id="help-block-@grid-gutter-width">Padding between columns. Gets divided in half for the left and right.</p>';
		if ($style == '@grid-float-breakpoint') $content = '<p class="help-block" id="help-block-@grid-float-breakpoint">Point at which the navbar becomes uncollapsed.</p>';
		if ($style == '@grid-float-breakpoint-max') $content = '<p class="help-block" id="help-block-@grid-float-breakpoint-max">Point at which the navbar begins collapsing.</p>';
		if ($style == '@container-sm') $content = '<p class="help-block" id="help-block-@container-sm">For <code>@screen-sm-min</code> and up.</p>';
		if ($style == '@container-md') $content = '<p class="help-block" id="help-block-@container-md">For <code>@screen-md-min</code> and up.</p>';
		if ($style == '@container-lg') $content = '<p class="help-block" id="help-block-@container-lg">For <code>@screen-lg-min</code> and up.</p>';
		if ($style == '@tooltip-max-width') $content = '<p class="help-block" id="help-block-@tooltip-max-width">Tooltip max width</p>';
		if ($style == '@tooltip-color') $content = '<p class="help-block" id="help-block-@tooltip-color">Tooltip text color</p>';
		if ($style == '@tooltip-bg') $content = '<p class="help-block" id="help-block-@tooltip-bg">Tooltip background color</p>';
		if ($style == '@tooltip-arrow-width') $content = '<p class="help-block" id="help-block-@tooltip-arrow-width">Tooltip arrow width</p>';
		if ($style == '@tooltip-arrow-color') $content = '<p class="help-block" id="help-block-@tooltip-arrow-color">Tooltip arrow color</p>';
		if ($style == '@popover-bg') $content = '<p class="help-block" id="help-block-@popover-bg">Popover body background color</p>';
		if ($style == '@popover-max-width') $content = '<p class="help-block" id="help-block-@popover-max-width">Popover maximum width</p>';
		if ($style == '@popover-border-color') $content = '<p class="help-block" id="help-block-@popover-border-color">Popover border color</p>';
		if ($style == '@popover-fallback-border-color') $content = '<p class="help-block" id="help-block-@popover-fallback-border-color">Popover fallback border color</p>';
		if ($style == '@popover-title-bg') $content = '<p class="help-block" id="help-block-@popover-title-bg">Popover title background color</p>';
		if ($style == '@popover-arrow-width') $content = '<p class="help-block" id="help-block-@popover-arrow-width">Popover arrow width</p>';
		if ($style == '@popover-arrow-color') $content = '<p class="help-block" id="help-block-@popover-arrow-color">Popover arrow color</p>';
		if ($style == '@popover-arrow-outer-width') $content = '<p class="help-block" id="help-block-@popover-arrow-outer-width">Popover outer arrow width</p>';
		if ($style == '@popover-arrow-outer-color') $content = '<p class="help-block" id="help-block-@popover-arrow-outer-color">Popover outer arrow color</p>';
		if ($style == '@popover-arrow-outer-fallback-color') $content = '<p class="help-block" id="help-block-@popover-arrow-outer-fallback-color">Popover outer arrow fallback color</p>';
		if ($style == '@label-default-bg') $content = '<p class="help-block" id="help-block-@label-default-bg">Default label background color</p>';
		if ($style == '@label-primary-bg') $content = '<p class="help-block" id="help-block-@label-primary-bg">Primary label background color</p>';
		if ($style == '@label-success-bg') $content = '<p class="help-block" id="help-block-@label-success-bg">Success label background color</p>';
		if ($style == '@label-info-bg') $content = '<p class="help-block" id="help-block-@label-info-bg">Info label background color</p>';
		if ($style == '@label-warning-bg') $content = '<p class="help-block" id="help-block-@label-warning-bg">Warning label background color</p>';
		if ($style == '@label-danger-bg') $content = '<p class="help-block" id="help-block-@label-danger-bg">Danger label background color</p>';
		if ($style == '@label-color') $content = '<p class="help-block" id="help-block-@label-color">Default label text color</p>';
		if ($style == '@label-link-hover-color') $content = '<p class="help-block" id="help-block-@label-link-hover-color">Default text color of a linked label</p>';
		if ($style == '@modal-inner-padding') $content = '<p class="help-block" id="help-block-@modal-inner-padding">Padding applied to the modal body</p>';
		if ($style == '@modal-title-padding') $content = '<p class="help-block" id="help-block-@modal-title-padding">Padding applied to the modal title</p>';
		if ($style == '@modal-title-line-height') $content = '<p class="help-block" id="help-block-@modal-title-line-height">Modal title line-height</p>';
		if ($style == '@modal-content-bg') $content = '<p class="help-block" id="help-block-@modal-content-bg">Background color of modal content area</p>';
		if ($style == '@modal-content-border-color') $content = '<p class="help-block" id="help-block-@modal-content-border-color">Modal content border color</p>';
		if ($style == '@modal-content-fallback-border-color') $content = '<p class="help-block" id="help-block-@modal-content-fallback-border-color">Modal content border color <strong>for IE8</strong></p>';
		if ($style == '@modal-backdrop-bg') $content = '<p class="help-block" id="help-block-@modal-backdrop-bg">Modal backdrop background color</p>';
		if ($style == '@modal-backdrop-opacity') $content = '<p class="help-block" id="help-block-@modal-backdrop-opacity">Modal backdrop opacity</p>';
		if ($style == '@modal-header-border-color') $content = '<p class="help-block" id="help-block-@modal-header-border-color">Modal header border color</p>';
		if ($style == '@modal-footer-border-color') $content = '<p class="help-block" id="help-block-@modal-footer-border-color">Modal footer border color</p>';
		if ($style == '@progress-bg') $content = '<p class="help-block" id="help-block-@progress-bg">Background color of the whole progress component</p>';
		if ($style == '@progress-bar-color') $content = '<p class="help-block" id="help-block-@progress-bar-color">Progress bar text color</p>';
		if ($style == '@progress-border-radius') $content = '<p class="help-block" id="help-block-@progress-border-radius">Variable for setting rounded corners on progress bar.</p>';
		if ($style == '@progress-bar-bg') $content = '<p class="help-block" id="help-block-@progress-bar-bg">Default progress bar color</p>';
		if ($style == '@progress-bar-success-bg') $content = '<p class="help-block" id="help-block-@progress-bar-success-bg">Success progress bar color</p>';
		if ($style == '@progress-bar-warning-bg') $content = '<p class="help-block" id="help-block-@progress-bar-warning-bg">Warning progress bar color</p>';
		if ($style == '@progress-bar-danger-bg') $content = '<p class="help-block" id="help-block-@progress-bar-danger-bg">Danger progress bar color</p>';
		if ($style == '@progress-bar-info-bg') $content = '<p class="help-block" id="help-block-@progress-bar-info-bg">Info progress bar color</p>';
		if ($style == '@list-group-bg') $content = '<p class="help-block" id="help-block-@list-group-bg">Background color on <code>.list-group-item</code></p>';
		if ($style == '@list-group-border') $content = '<p class="help-block" id="help-block-@list-group-border"><code>.list-group-item</code> border color</p>';
		if ($style == '@list-group-border-radius') $content = '<p class="help-block" id="help-block-@list-group-border-radius">List group border radius</p>';
		if ($style == '@list-group-hover-bg') $content = '<p class="help-block" id="help-block-@list-group-hover-bg">Background color of single list items on hover</p>';
		if ($style == '@list-group-active-color') $content = '<p class="help-block" id="help-block-@list-group-active-color">Text color of active list items</p>';
		if ($style == '@list-group-active-bg') $content = '<p class="help-block" id="help-block-@list-group-active-bg">Background color of active list items</p>';
		if ($style == '@list-group-active-border') $content = '<p class="help-block" id="help-block-@list-group-active-border">Border color of active list elements</p>';
		if ($style == '@list-group-active-text-color') $content = '<p class="help-block" id="help-block-@list-group-active-text-color">Text color for content within active list items</p>';
		if ($style == '@list-group-disabled-color') $content = '<p class="help-block" id="help-block-@list-group-disabled-color">Text color of disabled list items</p>';
		if ($style == '@list-group-disabled-bg') $content = '<p class="help-block" id="help-block-@list-group-disabled-bg">Background color of disabled list items</p>';
		if ($style == '@list-group-disabled-text-color') $content = '<p class="help-block" id="help-block-@list-group-disabled-text-color">Text color for content within disabled list items</p>';
		if ($style == '@panel-inner-border') $content = '<p class="help-block" id="help-block-@panel-inner-border">Border color for elements within panels</p>';
		if ($style == '@thumbnail-padding') $content = '<p class="help-block" id="help-block-@thumbnail-padding">Padding around the thumbnail image</p>';
		if ($style == '@thumbnail-bg') $content = '<p class="help-block" id="help-block-@thumbnail-bg">Thumbnail background color</p>';
		if ($style == '@thumbnail-border') $content = '<p class="help-block" id="help-block-@thumbnail-border">Thumbnail border color</p>';
		if ($style == '@thumbnail-border-radius') $content = '<p class="help-block" id="help-block-@thumbnail-border-radius">Thumbnail border radius</p>';
		if ($style == '@thumbnail-caption-color') $content = '<p class="help-block" id="help-block-@thumbnail-caption-color">Custom text color for thumbnail captions</p>';
		if ($style == '@thumbnail-caption-padding') $content = '<p class="help-block" id="help-block-@thumbnail-caption-padding">Padding around the thumbnail caption</p>';
		if ($style == '@badge-link-hover-color') $content = '<p class="help-block" id="help-block-@badge-link-hover-color">Linked badge text color on hover</p>';
		if ($style == '@badge-active-color') $content = '<p class="help-block" id="help-block-@badge-active-color">Badge text color in active nav link</p>';
		if ($style == '@badge-active-bg') $content = '<p class="help-block" id="help-block-@badge-active-bg">Badge background color in active nav link</p>';
		if ($style == '@breadcrumb-bg') $content = '<p class="help-block" id="help-block-@breadcrumb-bg">Breadcrumb background color</p>';
		if ($style == '@breadcrumb-color') $content = '<p class="help-block" id="help-block-@breadcrumb-color">Breadcrumb text color</p>';
		if ($style == '@breadcrumb-active-color') $content = '<p class="help-block" id="help-block-@breadcrumb-active-color">Text color of current page in the breadcrumb</p>';
		if ($style == '@breadcrumb-separator') $content = '<p class="help-block" id="help-block-@breadcrumb-separator">Textual separator for between breadcrumb elements</p>';
		if ($style == '@component-offset-horizontal') $content = '<p class="help-block" id="help-block-@component-offset-horizontal">Horizontal offset for forms and lists.</p>';
		if ($style == '@text-muted') $content = '<p class="help-block" id="help-block-@text-muted">Text muted color</p>';
		if ($style == '@abbr-border-color') $content = '<p class="help-block" id="help-block-@abbr-border-color">Abbreviations and acronyms border color</p>';
		if ($style == '@headings-small-color') $content = '<p class="help-block" id="help-block-@headings-small-color">Headings small color</p>';
		if ($style == '@blockquote-small-color') $content = '<p class="help-block" id="help-block-@blockquote-small-color">Blockquote small color</p>';
		if ($style == '@blockquote-font-size') $content = '<p class="help-block" id="help-block-@blockquote-font-size">Blockquote font size</p>';
		if ($style == '@blockquote-border-color') $content = '<p class="help-block" id="help-block-@blockquote-border-color">Blockquote border color</p>';
		if ($style == '@page-header-border-color') $content = '<p class="help-block" id="help-block-@page-header-border-color">Page header border color</p>';
		if ($style == '@dl-horizontal-offset') $content = '<p class="help-block" id="help-block-@dl-horizontal-offset">Width of horizontal description list titles</p>';
		if ($style == '@hr-border') $content = '<p class="help-block" id="help-block-@hr-border">Horizontal line color.</p>';

	return $content;
	}


	/**
	* Get the header
	* @param string $style
	*/
	private function _header($style) {

		if ($style == '@body-bg') {
			$content = '</div>';
			$content .= '<h2>Scaffolding</h2>';
			$content .= '<p>Settings for some of the most global styles.</p>';
			$content .= '<div class="row">';
		}
		if ($style == '@font-family-sans-serif') {
			$content = '</div>';
			$content .= '<h2>Typography</h2>';
			$content .= '<p>Font, line-height, and color for body text, headings, and more.</p>';
			$content .= '<div class="row">';
		}
		if ($style == '@icon-font-path') {
			$content = '</div>';
			$content .= '<h2>Iconography</h2>';
			$content .= '<p>Specify custom location and filename of the included Glyphicons icon font. Useful for those including Bootstrap via Bower.</p>';
			$content .= '<div class="row">';
		}
		if ($style == '@padding-base-vertical') {
			$content = '</div>';
			$content .= '<h2>Components</h2>';
			$content .= '<p>Define common padding and border radius sizes and more. Values based on 14px text and 1.428 line-height (~20px to start).</p>';
			$content .= '<div class="row">';
		}
		if ($style == '@table-cell-padding') {
			$content = '</div>';
			$content .= '<h2>Tables</h2>';
			$content .= '<p>Customizes the <code>.table</code> component with basic values, each used across all table variations.</p>';
			$content .= '<div class="row">';
		}
		if ($style == '@btn-font-weight') {
			$content = '</div>';
			$content .= '<h2>Buttons</h2>';
			$content .= '<p>For each of Bootstrap\'s buttons, define text, background and border color.</p>';
			$content .= '<div class="row">';
		}
		if ($style == '@input-bg') {
			$content = '</div>';
			$content .= '<h2>Forms</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@dropdown-bg') {
			$content = '</div>';
			$content .= '<h2>Dropdowns</h2>';
			$content .= '<p>Dropdown menu container and contents.</p>';
			$content .= '<div class="row">';
		}
		if ($style == '@screen-xs') {
			$content = '</div>';
			$content .= '<h2>Media queries breakpoints</h2>';
			$content .= '<p>Define the breakpoints at which your layout will change, adapting to different screen sizes.</p>';
			$content .= '<div class="row">';
		}
		if ($style == '@grid-columns') {
			$content = '</div>';
			$content .= '<h2 id="grid-system">Grid system</h2>';
			$content .= '<p>Define your custom responsive grid.</p>';
			$content .= '<div class="row">';
		}
		if ($style == '@container-tablet') {
			$content = '</div>';
			$content .= '<h2>Container sizes</h2>';
			$content .= '<p>Define the maximum width of <code>.container</code> for different screen sizes.</p>';
			$content .= '<div class="row">';
		}
		if ($style == '@navbar-height') {
			$content = '</div>';
			$content .= '<h2>Navbar</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@nav-link-padding') {
			$content = '</div>';
			$content .= '<h2>Navs</h2>';
			$content .= '<h3 id="shared-nav-styles">Shared nav styles</h3>';
			$content .= '<div class="row">';
		}
		if ($style == '@nav-tabs-border-color') {
			$content = '</div>';
			$content .= '<h2>Tabs</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@nav-pills-border-radius') {
			$content = '</div>';
			$content .= '<h2 id="pills">Pills</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@pagination-color') {
			$content = '</div>';
			$content .= '<h2>Pagination</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@pager-bg') {
			$content = '</div>';
			$content .= '<h2>Pager</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@jumbotron-padding') {
			$content = '</div>';
			$content .= '<h2>Jumbotron</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@state-success-text') {
			$content = '</div>';
			$content .= '<h2>Form states and alerts</h2>';
			$content .= '<p>Define colors for form feedback states and, by default, alerts.</p>';
			$content .= '<div class="row">';
		}
		if ($style == '@tooltip-max-width') {
			$content = '</div>';
			$content .= '<h2>Tooltips</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@popover-bg') {
			$content = '</div>';
			$content .= '<h2>Popovers</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@label-default-bg') {
			$content = '</div>';
			$content .= '<h2>Labels</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@modal-inner-padding') {
			$content = '</div>';
			$content .= '<h2>Modals</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@alert-padding') {
			$content = '</div>';
			$content .= '<h2>Alerts</h2>';
			$content .= '<p>Define alert colors, border radius, and padding.</p>';
			$content .= '<div class="row">';
		}
		if ($style == '@progress-bg') {
			$content = '</div>';
			$content .= '<h2>Progress bars</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@list-group-bg') {
			$content = '</div>';
			$content .= '<h2>List group</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@panel-bg') {
			$content = '</div>';
			$content .= '<h2>Panels</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@thumbnail-padding') {
			$content = '</div>';
			$content .= '<h2>Thumbnails</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@well-bg') {
			$content = '</div>';
			$content .= '<h2>Wells</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@badge-color') {
			$content = '</div>';
			$content .= '<h2>Badges</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@breadcrumb-padding-vertical') {
			$content = '</div>';
			$content .= '<h2>Breadcrumbs</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@carousel-text-shadow') {
			$content = '</div>';
			$content .= '<h2>Carousel</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@close-font-weight') {
			$content = '</div>';
			$content .= '<h2>Close</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@code-color') {
			$content = '</div>';
			$content .= '<h2>Code</h2>';
			$content .= '<div class="row">';
		}
		if ($style == '@component-offset-horizontal') {
			$content = '</div>';
			$content .= '<h2>Type</h2>';
			$content .= '<div class="row">';
		}

		return $content;
	}

}
