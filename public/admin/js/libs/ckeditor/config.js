/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here.
	// For the complete reference:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.
	config.toolbarGroups = [
		{ name: 'clipboard',   groups: [ 'clipboard', 'undo' ] ***REMOVED***,
		{ name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] ***REMOVED***,
		{ name: 'links' ***REMOVED***,
		{ name: 'insert' ***REMOVED***,
		{ name: 'forms' ***REMOVED***,
		{ name: 'tools' ***REMOVED***,
		{ name: 'document',	   groups: [ 'mode', 'document', 'doctools' ] ***REMOVED***,
		{ name: 'others' ***REMOVED***,
		'/',
		{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] ***REMOVED***,
		{ name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] ***REMOVED***,
		{ name: 'styles' ***REMOVED***,
		{ name: 'colors' ***REMOVED***,
		{ name: 'about' ***REMOVED***
	];

	// Remove some buttons, provided by the standard plugins, which we don't
	// need to have in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Subscript,Superscript';

	// Se the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Make dialogs simpler.
	config.removeDialogTabs = 'image:advanced;link:advanced';
***REMOVED***;
