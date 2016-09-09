(function (namespace, $) {
	"use strict";

	var DemoFormEditors = function () {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function () {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = DemoFormEditors.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function () {
		this._initSummernote();
		this._initCKEditor();
	***REMOVED***;

	// =========================================================================
	// SUMMERNOTE EDITOR
	// =========================================================================

	p._initSummernote = function () {
		if (!$.isFunction($.fn.summernote)) {
			return;
		***REMOVED***

		// Full toolbar
		$('#summernote').summernote();
		
		// Simple toolbar
		$('#simple-summernote').summernote({
			height: $('#simple-summernote').height(),
			toolbar: [
				['style', ['bold', 'italic', 'underline', 'clear']],
				['fontsize', ['fontsize']],
				['color', ['color']],
				['para', ['ul', 'ol', 'paragraph']],
				['height', ['height']]
			]
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// CKEDITOR
	// =========================================================================

	p._initCKEditor = function () {
		$('#ckeditor').ckeditor();

		// By default, CKEditor add a WYSIWEG editor to all content with the contenteditable set to true
		// To be able to demo Summernote on this page, this function is disabled.
		CKEDITOR.disableAutoInline = true;
		if ($('#inlineContent1').length > 0)
			CKEDITOR.inline('inlineContent1');
		if ($('#inlineContent2').length > 0)
			CKEDITOR.inline('inlineContent2');
	***REMOVED***;

	// =========================================================================
	namespace.DemoFormEditors = new DemoFormEditors;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
