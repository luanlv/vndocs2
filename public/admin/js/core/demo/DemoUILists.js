(function(namespace, $) {
	"use strict";

	var DemoUILists = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = DemoUILists.prototype;
	
	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		this._initNestableLists();
	***REMOVED***;
	
	// =========================================================================
	// NESTABLE LISTS
	// =========================================================================

	p._initNestableLists = function() {
		if (!$.isFunction($.fn.nestable)) {
			return;
		***REMOVED***

		$('.nestable-list').nestable();
	***REMOVED***;

	// =========================================================================
	namespace.DemoUILists = new DemoUILists;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
