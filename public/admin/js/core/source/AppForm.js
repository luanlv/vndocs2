(function(namespace, $) {
	"use strict";

	var AppForm = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = AppForm.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		// Init events
		this._enableEvents();
		
		this._initRadioAndCheckbox();
		this._initFloatingLabels();
		this._initValidation();
	***REMOVED***;
	
	// =========================================================================
	// EVENTS
	// =========================================================================

	// events
	p._enableEvents = function () {
		var o = this;

		// Link submit function
		$('[data-submit="form"]').on('click', function (e) {
			e.preventDefault();
			var formId = $(e.currentTarget).attr('href');
			$(formId).submit();
		***REMOVED***);
		
		// Init textarea autosize
		$('textarea.autosize').on('focus', function () {
			$(this).autosize({append: ''***REMOVED***);
		***REMOVED***);
	***REMOVED***;
	
	// =========================================================================
	// RADIO AND CHECKBOX LISTENERS
	// =========================================================================

	p._initRadioAndCheckbox = function () {
		// Add a span class the styled checkboxes and radio buttons for correct styling
		$('.checkbox-styled input, .radio-styled input').each(function () {
			if ($(this).next('span').length === 0) {
				$(this).after('<span></span>');
			***REMOVED***
		***REMOVED***);
	***REMOVED***;
	
	// =========================================================================
	// FLOATING LABELS
	// =========================================================================

	p._initFloatingLabels = function () {
		var o = this;

		$('.floating-label .form-control').on('keyup change', function (e) {
			var input = $(e.currentTarget);

			if ($.trim(input.val()) !== '') {
				input.addClass('dirty').removeClass('static');
			***REMOVED*** else {
				input.removeClass('dirty').removeClass('static');
			***REMOVED***
		***REMOVED***);

		$('.floating-label .form-control').each(function () {
			var input = $(this);

			if ($.trim(input.val()) !== '') {
				input.addClass('static').addClass('dirty');
			***REMOVED***
		***REMOVED***);

		$('.form-horizontal .form-control').each(function () {
			$(this).after('<div class="form-control-line"></div>');
		***REMOVED***);
	***REMOVED***;
	
	// =========================================================================
	// VALIDATION
	// =========================================================================

	p._initValidation = function () {
		if (!$.isFunction($.fn.validate)) {
			return;
		***REMOVED***
		$.validator.setDefaults({
			highlight: function (element) {
				$(element).closest('.form-group').addClass('has-error');
			***REMOVED***,
			unhighlight: function (element) {
				$(element).closest('.form-group').removeClass('has-error');
			***REMOVED***,
			errorElement: 'span',
			errorClass: 'help-block',
			errorPlacement: function (error, element) {
				if (element.parent('.input-group').length) {
					error.insertAfter(element.parent());
				***REMOVED***
				else if (element.parent('label').length) {
					error.insertAfter(element.parent());
				***REMOVED***
				else {
					error.insertAfter(element);
				***REMOVED***
			***REMOVED***
		***REMOVED***);

		$('.form-validate').each(function () {
			var validator = $(this).validate();
			$(this).data('validator', validator);
		***REMOVED***);
	***REMOVED***;
	
	// =========================================================================
	// DEFINE NAMESPACE
	// =========================================================================

	window.materialadmin.AppForm = new AppForm;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
