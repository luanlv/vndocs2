(function (namespace, $) {
	"use strict";

	var DemoFormComponents = function () {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function () {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = DemoFormComponents.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function () {
		this._initTypeahead();
		this._initAutocomplete();
		this._initSelect2();
		this._initMultiSelect();
		this._initInputMask();
		this._initDatePicker();
		this._initSliders();
		this._initSpinners();
		this._initColorPickers();
	***REMOVED***;

	// =========================================================================
	// TYPEAHEAD
	// =========================================================================

	p._initTypeahead = function () {
		if (!$.isFunction($.fn.typeahead)) {
			return;
		***REMOVED***
		var countries = new Bloodhound({
			datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
			queryTokenizer: Bloodhound.tokenizers.whitespace,
			limit: 10,
			prefetch: {
				// url points to a json file that contains an array of country names, see
				// https://github.com/twitter/typeahead.js/blob/gh-pages/data/countries.json
				url: $('#autocomplete1').data('source'),
				// the json file contains an array of strings, but the Bloodhound
				// suggestion engine expects JavaScript objects so this converts all of
				// those strings
				filter: function (list) {
					return $.map(list, function (country) {
						return {name: country***REMOVED***;
					***REMOVED***);
				***REMOVED***
			***REMOVED***
		***REMOVED***);
		countries.initialize();
		$('#autocomplete1').typeahead(null, {
			name: 'countries',
			displayKey: 'name',
			// `ttAdapter` wraps the suggestion engine in an adapter that
			// is compatible with the typeahead jQuery plugin
			source: countries.ttAdapter()
		***REMOVED***);
	***REMOVED***;
	
	// =========================================================================
	// AUTOCOMPLETE
	// =========================================================================

	p._initAutocomplete = function () {
		if (!$.isFunction($.fn.autocomplete)) {
			return;
		***REMOVED***

		$.ajax({
			url: $('#autocomplete2').data('source'),
			dataType: "json",
			success: function (countries) {
				$("#autocomplete2").autocomplete({
					source: function (request, response) {
						var results = $.ui.autocomplete.filter(countries, request.term);
						response(results.slice(0, 10));
					***REMOVED***
				***REMOVED***);
			***REMOVED***
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// COLORPICKER
	// =========================================================================

	p._initColorPickers = function () {
		if (!$.isFunction($.fn.colorpicker)) {
			return;
		***REMOVED***
		$('#cp1').colorpicker();
		$('#cp2').colorpicker();
		$('#cp3').colorpicker().on('changeColor', function (ev) {
			$(ev.currentTarget).closest('.card-body').css('background', ev.color.toHex());
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// SPINNERS
	// =========================================================================

	p._initSpinners = function () {
		if (!$.isFunction($.fn.spinner)) {
			return;
		***REMOVED***
		$("#spinner").spinner({min: 16***REMOVED***);
		$("#spinner-decimal").spinner({step: 0.01, numberFormat: "n", max: 1***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// SLIDERS
	// =========================================================================

	p._initSliders = function () {
		if (!$.isFunction($.fn.slider)) {
			return;
		***REMOVED***
		$("#slider").slider({range: "min", value: 50, min: 0, max: 100,
			slide: function (event, ui) {
				$('#slider-value').empty().append(ui.value);
			***REMOVED***
		***REMOVED***);
		$("#slider-step").slider({value: 100, min: 0, max: 500, step: 50,
			slide: function (event, ui) {
				$('#step-value').empty().append(ui.value);
			***REMOVED***
		***REMOVED***);
		$("#slider-range").slider({range: true, min: 0, max: 100, values: [25, 75],
			slide: function (event, ui) {
				$('#range-value1').empty().append(ui.values[ 0 ]);
				$('#range-value2').empty().append(ui.values[ 1 ]);
			***REMOVED***
		***REMOVED***);

		$("#eq > span").each(function () {
			var value = parseInt($(this).text(), 10);
			$(this).empty().slider({value: value, range: "min", animate: true, orientation: "vertical"***REMOVED***);
			$(this).css('height', '100px');
			$(this).css('margin-right', '30px');
			$(this).css('float', 'left');
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// SELECT2
	// =========================================================================

	p._initSelect2 = function () {
		if (!$.isFunction($.fn.select2)) {
			return;
		***REMOVED***
		$(".select2-list").select2({
			allowClear: true
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// MultiSelect
	// =========================================================================

	p._initMultiSelect = function () {
		if (!$.isFunction($.fn.multiSelect)) {
			return;
		***REMOVED***
		$('#optgroup').multiSelect({selectableOptgroup: true***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// InputMask
	// =========================================================================

	p._initInputMask = function () {
		if (!$.isFunction($.fn.inputmask)) {
			return;
		***REMOVED***
		$(":input").inputmask();
		$(".form-control.dollar-mask").inputmask('$ 999,999,999.99', {numericInput: true, rightAlignNumerics: false***REMOVED***);
		$(".form-control.euro-mask").inputmask('€ 999.999.999,99', {numericInput: true, rightAlignNumerics: false***REMOVED***);
		$(".form-control.time-mask").inputmask('h:s', {placeholder: 'hh:mm'***REMOVED***);
		$(".form-control.time12-mask").inputmask('hh:mm t', {placeholder: 'hh:mm xm', alias: 'time12', hourFormat: '12'***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// Date Picker
	// =========================================================================

	p._initDatePicker = function () {
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
	// DATATABLES
	// =========================================================================

	p.initDataTables = function (grid) {
		if (!$.isFunction($.fn.dataTable)) {
			return;
		***REMOVED***

		$.extend(jQuery.fn.dataTableExt.oSort, {
			"numeric-comma-pre": function (a) {
				var x = (a == "-") ? 0 : a.replace(/,/, ".");
				return parseFloat(x);
			***REMOVED***,
			"numeric-comma-asc": function (a, b) {
				return ((a < b) ? -1 : ((a > b) ? 1 : 0));
			***REMOVED***,
			"numeric-comma-desc": function (a, b) {
				return ((a < b) ? 1 : ((a > b) ? -1 : 0));
			***REMOVED***
		***REMOVED***);
		grid.dataTable({
			"sDom": 'lCfrtip',
			"sPaginationType": "full_numbers",
			"aaSorting": [],
			"aoColumns": [
				null,
				null,
				null,
				{"sType": "numeric-comma"***REMOVED***,
				null
			],
			"oColVis": {
				"buttonText": "Columns",
				"iOverlayFade": 0,
				"sAlign": "right"
			***REMOVED***,
			"oLanguage": {
				"sLengthMenu": '_MENU_ entries per page',
				"sSearch": '<i class="icon-search"></i>',
				"oPaginate": {
					"sPrevious": '<i class="fa fa-angle-left"></i>',
					"sNext": '<i class="fa fa-angle-right"></i>'
				***REMOVED***
			***REMOVED***
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	namespace.DemoFormComponents = new DemoFormComponents;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
