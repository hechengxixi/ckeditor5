/**
 * @license Copyright (c) 2003-2025, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-licensing-options
 */

/* globals window */

import { Bold, Italic, Code, Strikethrough, Underline, Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';
import { RemoveFormat } from '@ckeditor/ckeditor5-remove-format';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Font } from '@ckeditor/ckeditor5-font';
import { CKBox, CKBoxImageEdit } from '@ckeditor/ckeditor5-ckbox';
import { PictureEditing, ImageInsert, ImageResize, AutoImage } from '@ckeditor/ckeditor5-image';
import { LinkImage } from '@ckeditor/ckeditor5-link';

// Umberto combines all `packages/*/docs` into the `docs/` directory. The import path must be valid after merging all directories.
import ClassicEditor from '../build-classic.js';

ClassicEditor.builtinPlugins.push(
	Alignment,
	Font,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Subscript,
	Superscript,
	Code,
	RemoveFormat,
	PictureEditing,
	ImageInsert,
	ImageResize,
	AutoImage,
	LinkImage,
	CKBox,
	CKBoxImageEdit );

window.ClassicEditor = ClassicEditor;
