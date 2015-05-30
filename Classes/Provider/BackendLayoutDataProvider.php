<?php
namespace T3SBS\T3sbootstrap\Provider;

/***************************************************************
 *
 *  The MIT License (MIT)
 *
 *  Copyright (c) 2014 Benjamin Kott, http://www.bk2k.info
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in
 *  all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 *  THE SOFTWARE.
 *
 ***************************************************************/

use \TYPO3\CMS\Backend\View\BackendLayout\BackendLayout;
use \TYPO3\CMS\Backend\View\BackendLayout\DataProviderContext;
use \TYPO3\CMS\Backend\View\BackendLayout\BackendLayoutCollection;
use \TYPO3\CMS\Backend\Utility\BackendUtility;

/**
 * @author Benjamin Kott <info@bk2k.info>
 * modified by Helmut Hackbarth <info@t3solution.de>
 */
class BackendLayoutDataProvider implements \TYPO3\CMS\Backend\View\BackendLayout\DataProviderInterface {

    /**
     * Default Backend Layouts for Bootstrap Theme
     *
     * @var array
     */
    protected $backendLayouts = array(
        '1' => array(
			'title' => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.oneCol',
            'config' => '
				backend_layout {
					colCount = 3
					rowCount = 2
					rows {
						1 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.content
									colspan = 3
									colPos = 0
								}
							}
						}
						2 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.footer
									colspan = 3
									colPos = 4
								}
							}
						}
					}
				}
            ',
            'icon' => 'EXT:t3sbootstrap/Resources/Public/Icons/Layouts/1col.png'
        ),
        '2' => array(
			'title' => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.twoCol_9-3',
            'config' => '
				backend_layout {
					colCount = 3
					rowCount = 2
					rows {
						1 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.content
									colspan = 2
									colPos = 0
								}
								2 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.sidebar
									colPos = 2
								}
							}
						}
						2 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.footer
									colspan = 3
									colPos = 4
								}
							}
						}
					}
				}
            ',
            'icon' => 'EXT:t3sbootstrap/Resources/Public/Icons/Layouts/2col-9-3.png'
        ),
        '3' => array(
			'title' => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.threeCol',
            'config' => '
				backend_layout {
					colCount = 4
					rowCount = 2
					rows {
						1 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.sidebar-left
									colPos = 1
								}
								2 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.content
									colspan = 2
									colPos = 0
								}
								3 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.sidebar-right
									colPos = 2
								}
							}
						}
						2 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.footer
									colspan = 4
									colPos = 4
								}
							}
						}
					}
				}
            ',
            'icon' => 'EXT:t3sbootstrap/Resources/Public/Icons/Layouts/3col.png'
        ),
        '4' => array(
            'title' => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.special-slider',
            'config' => '
				backend_layout {
					colCount = 3
					rowCount = 3
					rows {
						1 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.slider
									colspan = 3
									colPos = 3
								}
							}
						}
						2 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.content
									colspan = 3
									colPos = 0
								}

							}
						}
						3 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.footer
									colspan = 3
									colPos = 4
								}
							}
						}
					}
				}
            ',
            'icon' => 'EXT:t3sbootstrap/Resources/Public/Icons/Layouts/1col.png'
        ),
        '5' => array(
            'title' => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.twoCol_3-9',
            'config' => '
				backend_layout {
					colCount = 3
					rowCount = 2
					rows {
						1 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.sidebar
									colPos = 1
								}
								2 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.content
									colspan = 2
									colPos = 0
								}
							}
						}
						2 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.footer
									colspan = 3
									colPos = 4
								}
							}
						}
					}
				}
            ',
            'icon' => 'EXT:t3sbootstrap/Resources/Public/Icons/Layouts/2col-3-9.png'
        ),
        '6' => array(
            'title' => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.oneCol_jumbotron',
            'config' => '
				backend_layout {
					colCount = 3
					rowCount = 3
					rows {
						1 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.jumbotron
									colspan = 3
									colPos = 3
								}
							}
						}
						2 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.content
									colspan = 3
									colPos = 0
								}
							}
						}
						3 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.footer
									colspan = 3
									colPos = 4
								}
							}
						}
					}
				}
            ',
            'icon' => 'EXT:t3sbootstrap/Resources/Public/Icons/Layouts/1col-jumbotron.png'
        ),
        '7' => array(
            'title' => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.twoCol_9-3_jumbotron',
            'config' => '
				backend_layout {
					colCount = 3
					rowCount = 3
					rows {
						1 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.jumbotron
									colspan = 3
									colPos = 3
								}
							}
						}
						2 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.content
									colspan = 2
									colPos = 0
								}
								2 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.sidebar
									colPos = 2
								}
							}
						}
						3 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.footer
									colspan = 3
									colPos = 4
								}
							}
						}
					}
				}
            ',
            'icon' => 'EXT:t3sbootstrap/Resources/Public/Icons/Layouts/2col-9-3-jumbotron.png'
        ),


        '8' => array(
            'title' => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.threeCol_jumbotron',
            'config' => '
				backend_layout {
					colCount = 4
					rowCount = 3
					rows {
						1 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.jumbotron
									colspan = 4
									colPos = 3
								}
							}
						}
						2 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.sidebar-left
									colPos = 1
								}
								2 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.content
									colspan = 2
									colPos = 0
								}
								3 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.sidebar-right
									colPos = 2
								}
							}
						}
						3 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.footer
									colspan = 4
									colPos = 4
								}
							}
						}
					}
				}
            ',
            'icon' => 'EXT:t3sbootstrap/Resources/Public/Icons/Layouts/3col-jumbotron.png'
        ),

        '9' => array(
            'title' => 'LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.twoCol_3-9_jumbotron',
            'config' => '
				backend_layout {
					colCount = 3
					rowCount = 3
					rows {
						1 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.jumbotron
									colspan = 3
									colPos = 3
								}
							}
						}
						2 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.sidebar
									colPos = 1
								}
								2 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.content
									colspan = 2
									colPos = 0
								}
							}
						}
						3 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.footer
									colspan = 3
									colPos = 4
								}
							}
						}
					}
				}
            ',
            'icon' => 'EXT:t3sbootstrap/Resources/Public/Icons/Layouts/2col-3-9-jumbotron.png'
        ),

		'10' => array(
		    'title' => 'Grayscale one page theme',
		    'config' => '
				backend_layout {
					colCount = 1
					rowCount = 3
					rows {
						1 {
							columns {
								1 {
									name = Header
									colPos = 10
								}
							}
						}
						2 {
							columns {
								1 {
									name = Sections
									colPos = 11
								}
							}
						}
						3 {
							columns {
								1 {
									name = LLL:EXT:t3sbootstrap/Resources/Private/Language/locallang_be.xlf:backend_layout.footer
									colPos = 4
								}
							}
						}
					}
				}
		    ',
		    'icon' => 'EXT:t3sbootstrap/Resources/Public/Icons/Layouts/1col.png'
		),



    );


    /**
     * @param DataProviderContext $dataProviderContext
     * @param BackendLayoutCollection $backendLayoutCollection
     * @return void
     */
    public function addBackendLayouts(DataProviderContext $dataProviderContext, BackendLayoutCollection $backendLayoutCollection) {


        foreach ($this->backendLayouts as $key => $data) {
            $data['uid'] = $key;
            $backendLayout = $this->createBackendLayout($data);
            $backendLayoutCollection->add($backendLayout);
        }
    }

    /**
     * Gets a backend layout by (regular) identifier.
     *
     * @param string $identifier
     * @param integer $pageId
     * @return NULL|BackendLayout
     */
    public function getBackendLayout($identifier, $pageId){
        $backendLayout = NULL;
        if(array_key_exists($identifier,$this->backendLayouts)) {
            return $this->createBackendLayout($this->backendLayouts[$identifier]);
        }
        return $backendLayout;
    }

    /**
     * Creates a new backend layout using the given record data.
     *
     * @param array $data
     * @return BackendLayout
     */
    protected function createBackendLayout(array $data) {
        $backendLayout = BackendLayout::create($data['uid'], $data['title'], $data['config']);
        $backendLayout->setIconPath($this->getIconPath($data['icon']));
        $backendLayout->setData($data);
        return $backendLayout;
    }

    /**
     * Gets and sanitizes the icon path.
     *
     * @param string $icon Name of the icon file
     * @return string
     */
    protected function getIconPath($icon) {
        $iconPath = '';
        if (!empty($icon)) {
            $iconPath = $icon;
        }
        return $iconPath;
    }

}