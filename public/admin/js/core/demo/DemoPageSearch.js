(function(namespace, $) {
	"use strict";

	var DemoPageSearch = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = DemoPageSearch.prototype;

	// =========================================================================
	// MEMBERS
	// =========================================================================

	p.map = null;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		this._initDatePicker();
		this._initMultiselect();
	***REMOVED***;

	// =========================================================================
	// MULTISELECT
	// =========================================================================

	p._initMultiselect = function() {
		if (!$.isFunction($.fn.multiselect)) {
			return;
		***REMOVED***

		$('select[name="category"]').multiselect({
			buttonClass: 'form-control',
			buttonContainer: '<div class="btn-group btn-group-justified" />'
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// DATETIME
	// =========================================================================

	p._initDatePicker = function() {
		if (!$.isFunction($.fn.datepicker)) {
			return;
		***REMOVED***

		$('.input-daterange').datepicker({todayHighlight: true***REMOVED***);
	***REMOVED***;

	// =========================================================================
	namespace.DemoPageSearch = new DemoPageSearch;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
