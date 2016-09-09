(function(namespace, $) {
	"use strict";

	var DemoPageContacts = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = DemoPageContacts.prototype;

	// =========================================================================
	// MEMBERS
	// =========================================================================

	p.map = null;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		this._initDuplicateSource();
		this._initSummernote();
		this._initDatetime();
		this._initMultiselect();
		this._initGMaps();
		this._initInputMask();
	***REMOVED***;

	// =========================================================================
	// DUPLICATE
	// =========================================================================

	p._initDuplicateSource = function(e) {
		var o = this;

		// Add event lsitener for duplication
		$('[data-duplicate]').on('click', function(e) {
			var item = $(this);
			var templateId = item.data('duplicate');
			var target = $(item.data('target'));
			o._duplicateTemplate(templateId, target);
		***REMOVED***);

		// Init dulicate function
		$('[data-duplicate]').each(function() {
			var item = $(this);
			var templateId = item.data('duplicate');
			var target = $(item.data('target'));
			o._duplicateTemplate(templateId, target);
		***REMOVED***);
	***REMOVED***;

	p._duplicateTemplate = function(templateId, target) {
		if (typeof tmpl === 'undefined') {
			return;
		***REMOVED***
		var o = this;

		var index = (target.data('index') > 0) ? target.data('index') : target.children().length + 1;
		target.data('index', index + 1);
		var clonedContent = tmpl(templateId, {index: index***REMOVED***);

		// Add cloned source to parent
		var newContent = $(clonedContent).appendTo(target).hide().slideDown('fast');

		// Init date component
		this._initDatetime(newContent, index);

		// Add delete event
		newContent.on('click', '.btn-delete', function(e) {
			newContent.slideUp('fast', function() {
				newContent.remove();
			***REMOVED***);
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// GMaps
	// =========================================================================

	p._initGMaps = function() {
		if (typeof GMaps === 'undefined') {
			return;
		***REMOVED***
		if ($('#map-canvas').length === 0) {
			return;
		***REMOVED***

		this.map = new GMaps({
			div: '#map-canvas',
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

		this._initGMapsEvents();
	***REMOVED***;

	p._initGMapsEvents = function() {
		var o = this;
		$('#street, #streetnumber, #city, #zip').on('change', function(e) {
			o._startGeocoding();
		***REMOVED***);
	***REMOVED***;

	p._startGeocoding = function() {
		var o = this;
		GMaps.geocode({
			address: o._formatAddress(),
			callback: function(results, status) {
				if (status === 'OK') {
					o._addMarker(results, status);
				***REMOVED***
			***REMOVED***
		***REMOVED***);
	***REMOVED***;
	p._addMarker = function(results, status) {
		this.map.removeMarkers();
		var latlng = results[0].geometry.location;
		this.map.setCenter(latlng.lat(), latlng.lng());
		this.map.addMarker({
			lat: latlng.lat(),
			lng: latlng.lng()
		***REMOVED***);
	***REMOVED***;

	p._formatAddress = function(results, status) {
		var address = [];
		var street = $('#street').val() + " " + $('#streetnumber').val();
		var city = $('#city').val();
		var zip = $('#zip').val();

		// Add values to array if not empty
		if ($.trim(street) !== '') {
			address.push(street);
		***REMOVED***
		if ($.trim(city) !== '') {
			address.push(city);
		***REMOVED***
		if ($.trim(zip) !== '') {
			address.push(zip);
		***REMOVED***

		// Format address to search string
		return address.join(',');
	***REMOVED***;


	// =========================================================================
	// SUMMERNOTE EDITOR
	// =========================================================================

	p._initSummernote = function() {
		if (!$.isFunction($.fn.summernote)) {
			return;
		***REMOVED***
		if ($('#summernote').length === 0) {
			return;
		***REMOVED***
		
		$('#summernote').summernote({
			height: $('#summernote').height(),
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

	p._initDatetime = function() {
		if (!$.isFunction($.fn.datepicker)) {
			return;
		***REMOVED***

		$('.input-daterange').datepicker({todayHighlight: true***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// InputMask
	// =========================================================================

	p._initInputMask = function() {
		if (!$.isFunction($.fn.inputmask)) {
			return;
		***REMOVED***
		$(":input").inputmask();
	***REMOVED***;

	// =========================================================================
	namespace.DemoPageContacts = new DemoPageContacts;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
