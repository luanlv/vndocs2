(function(namespace, $) {
	"use strict";

	var DemoPageTimeline = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = DemoPageTimeline.prototype;

	// =========================================================================
	// MEMBERS
	// =========================================================================

	p.map = null;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		this._initGMaps1();
		this._initGMaps2();
	***REMOVED***;

	// =========================================================================
	// GMaps
	// =========================================================================

	p._initGMaps1 = function() {
		if (typeof GMaps === 'undefined') {
			return;
		***REMOVED***
		if ($('#map-canvas1').length === 0) {
			return;
		***REMOVED***

		this.map = new GMaps({
			div: '#map-canvas1',
			lat: 52.376950,
			lng: 4.898365,
			zoom: 11,
			disableDefaultUI: true
		***REMOVED***);

		this.map.addMarker({
			lat: 52.37050,
			lng: 4.90454,
			title: 'Amsterdam',
			click: function(e) {
				alert('You clicked in this marker');
			***REMOVED***
		***REMOVED***);
	***REMOVED***;
	
	p._initGMaps2 = function() {
		if (typeof GMaps === 'undefined') {
			return;
		***REMOVED***
		if ($('#map-canvas2').length === 0) {
			return;
		***REMOVED***

		this.map = new GMaps({
			div: '#map-canvas2',
			lat: 52.376950,
			lng: 4.898365,
			zoom: 11,
			disableDefaultUI: true
		***REMOVED***);

		this.map.addMarker({
			lat: 52.37050,
			lng: 4.90454,
			title: 'Amsterdam',
			click: function(e) {
				alert('You clicked in this marker');
			***REMOVED***
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	namespace.DemoPageTimeline = new DemoPageTimeline;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
