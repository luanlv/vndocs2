(function(namespace, $) {
	"use strict";

	var DemoUISkycons = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = DemoUISkycons.prototype;
	
	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		this._initSkycons();
	***REMOVED***;

	// =========================================================================
	// Skycons
	// =========================================================================

	p._initSkycons = function () {
		var skycons = new Skycons({"color": "black"***REMOVED***);
		$('canvas').each(function(){
			skycons.add($(this).get(0), Skycons[$(this).data('type')]);
		***REMOVED***);
		skycons.play();
	***REMOVED***;

	// =========================================================================
	namespace.DemoUISkycons = new DemoUISkycons;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
