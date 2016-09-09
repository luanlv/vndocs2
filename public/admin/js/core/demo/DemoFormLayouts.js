(function(namespace, $) {
	"use strict";

	var DemoFormLayouts = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = DemoFormLayouts.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		this._initDatePicker();
	***REMOVED***;
	
	//======================================================================
	// Date Picker
	// =========================================================================

	p._initDatePicker = function() {
		if (!$.isFunction($.fn.datepicker)) {
			return;
		***REMOVED***

		$('#demo-date').datepicker({autoclose: true, todayHighlight: true***REMOVED***);
		$('#demo-date-month').datepicker({autoclose: true, todayHighlight: true, minViewMode: 1***REMOVED***);
		$('#demo-date-format').datepicker({autoclose: true, todayHighlight: true, format: "yyyy/mm/dd"***REMOVED***);
		$('#demo-date-range').datepicker({todayHighlight: true***REMOVED***);
		$('#demo-date-inline').datepicker({todayHighlight: true***REMOVED***);
	***REMOVED***;

	// =========================================================================
	namespace.DemoFormLayouts = new DemoFormLayouts;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
