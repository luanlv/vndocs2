/**
 * Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

// This file contains style definitions that can be used by CKEditor plugins.
//
// The most common use for it is the "stylescombo" plugin, which shows a combo
// in the editor toolbar, containing all styles. Other plugins instead, like
// the div plugin, use a subset of the styles on their feature.
//
// If you don't have plugins that depend on this file, you can simply ignore it.
// Otherwise it is strongly recommended to customize this file to match your
// website requirements and design properly.

CKEDITOR.stylesSet.add( 'default', [
	/* Block Styles */

	// These styles are already available in the "Format" combo ("format" plugin),
	// so they are not needed here by default. You may enable them to avoid
	// placing the "Format" combo in the toolbar, maintaining the same features.
	/*
	{ name: 'Paragraph',		element: 'p' ***REMOVED***,
	{ name: 'Heading 1',		element: 'h1' ***REMOVED***,
	{ name: 'Heading 2',		element: 'h2' ***REMOVED***,
	{ name: 'Heading 3',		element: 'h3' ***REMOVED***,
	{ name: 'Heading 4',		element: 'h4' ***REMOVED***,
	{ name: 'Heading 5',		element: 'h5' ***REMOVED***,
	{ name: 'Heading 6',		element: 'h6' ***REMOVED***,
	{ name: 'Preformatted Text',element: 'pre' ***REMOVED***,
	{ name: 'Address',			element: 'address' ***REMOVED***,
	*/

	{ name: 'Italic Title',		element: 'h2', styles: { 'font-style': 'italic' ***REMOVED*** ***REMOVED***,
	{ name: 'Subtitle',			element: 'h3', styles: { 'color': '#aaa', 'font-style': 'italic' ***REMOVED*** ***REMOVED***,
	{
		name: 'Special Container',
		element: 'div',
		styles: {
			padding: '5px 10px',
			background: '#eee',
			border: '1px solid #ccc'
		***REMOVED***
	***REMOVED***,

	/* Inline Styles */

	// These are core styles available as toolbar buttons. You may opt enabling
	// some of them in the Styles combo, removing them from the toolbar.
	// (This requires the "stylescombo" plugin)
	/*
	{ name: 'Strong',			element: 'strong', overrides: 'b' ***REMOVED***,
	{ name: 'Emphasis',			element: 'em'	, overrides: 'i' ***REMOVED***,
	{ name: 'Underline',		element: 'u' ***REMOVED***,
	{ name: 'Strikethrough',	element: 'strike' ***REMOVED***,
	{ name: 'Subscript',		element: 'sub' ***REMOVED***,
	{ name: 'Superscript',		element: 'sup' ***REMOVED***,
	*/

	{ name: 'Marker',			element: 'span', attributes: { 'class': 'marker' ***REMOVED*** ***REMOVED***,

	{ name: 'Big',				element: 'big' ***REMOVED***,
	{ name: 'Small',			element: 'small' ***REMOVED***,
	{ name: 'Typewriter',		element: 'tt' ***REMOVED***,

	{ name: 'Computer Code',	element: 'code' ***REMOVED***,
	{ name: 'Keyboard Phrase',	element: 'kbd' ***REMOVED***,
	{ name: 'Sample Text',		element: 'samp' ***REMOVED***,
	{ name: 'Variable',			element: 'var' ***REMOVED***,

	{ name: 'Deleted Text',		element: 'del' ***REMOVED***,
	{ name: 'Inserted Text',	element: 'ins' ***REMOVED***,

	{ name: 'Cited Work',		element: 'cite' ***REMOVED***,
	{ name: 'Inline Quotation',	element: 'q' ***REMOVED***,

	{ name: 'Language: RTL',	element: 'span', attributes: { 'dir': 'rtl' ***REMOVED*** ***REMOVED***,
	{ name: 'Language: LTR',	element: 'span', attributes: { 'dir': 'ltr' ***REMOVED*** ***REMOVED***,

	/* Object Styles */

	{
		name: 'Styled image (left)',
		element: 'img',
		attributes: { 'class': 'left' ***REMOVED***
	***REMOVED***,

	{
		name: 'Styled image (right)',
		element: 'img',
		attributes: { 'class': 'right' ***REMOVED***
	***REMOVED***,

	{
		name: 'Compact table',
		element: 'table',
		attributes: {
			cellpadding: '5',
			cellspacing: '0',
			border: '1',
			bordercolor: '#ccc'
		***REMOVED***,
		styles: {
			'border-collapse': 'collapse'
		***REMOVED***
	***REMOVED***,

	{ name: 'Borderless Table',		element: 'table',	styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' ***REMOVED*** ***REMOVED***,
	{ name: 'Square Bulleted List',	element: 'ul',		styles: { 'list-style-type': 'square' ***REMOVED*** ***REMOVED***
]);

