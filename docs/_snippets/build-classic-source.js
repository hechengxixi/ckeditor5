/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/* globals window */

import { AutoImage, ImageInsert } from '@ckeditor/ckeditor5-image';
import { Bookmark } from '@ckeditor/ckeditor5-bookmark';
import ClassicEditor from './build-classic.js';

window.ClassicEditor = ClassicEditor;

ClassicEditor.builtinPlugins.push( ImageInsert );
ClassicEditor.builtinPlugins.push( AutoImage );
ClassicEditor.builtinPlugins.push( Bookmark );
