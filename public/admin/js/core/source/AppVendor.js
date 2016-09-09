(function(namespace, $) {
	"use strict";

	var AppVendor = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = AppVendor.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		this._initScroller();
		this._initTabs();
		this._initTooltips();
		this._initPopover();
		this._initSortables();
	***REMOVED***;

	// =========================================================================
	// SCROLLER
	// =========================================================================

	p._initScroller = function () {
		if (!$.isFunction($.fn.nanoScroller)) {
			return;
		***REMOVED***

		$.each($('.scroll'), function (e) {
			var holder = $(this);
			materialadmin.AppVendor.addScroller(holder);
		***REMOVED***);

		materialadmin.App.callOnResize(function () {
			$.each($('.scroll-xs'), function (e) {
				var holder = $(this);
				if(!holder.is(":visible")) return;
				
				if (materialadmin.App.minBreakpoint('xs')) {
					materialadmin.AppVendor.removeScroller(holder);
				***REMOVED***
				else {
					materialadmin.AppVendor.addScroller(holder);
				***REMOVED***
			***REMOVED***);

			$.each($('.scroll-sm'), function (e) {
				var holder = $(this);
				if(!holder.is(":visible")) return;
				
				if (materialadmin.App.minBreakpoint('sm')) {
					materialadmin.AppVendor.removeScroller(holder);
				***REMOVED***
				else {
					materialadmin.AppVendor.addScroller(holder);
				***REMOVED***
			***REMOVED***);

			$.each($('.scroll-md'), function (e) {
				var holder = $(this);
				if(!holder.is(":visible")) return;
				
				if (materialadmin.App.minBreakpoint('md')) {
					materialadmin.AppVendor.removeScroller(holder);
				***REMOVED***
				else {
					materialadmin.AppVendor.addScroller(holder);
				***REMOVED***
			***REMOVED***);

			$.each($('.scroll-lg'), function (e) {
				var holder = $(this);
				if(!holder.is(":visible")) return;
				
				if (materialadmin.App.minBreakpoint('lg')) {
					materialadmin.AppVendor.removeScroller(holder);
				***REMOVED***
				else {
					materialadmin.AppVendor.addScroller(holder);
				***REMOVED***
			***REMOVED***);
		***REMOVED***);
	***REMOVED***;

	p.addScroller = function (holder) {
		holder.wrap('<div class="nano"><div class="nano-content"></div></div>');

		var scroller = holder.closest('.nano');
		scroller.css({height: holder.outerHeight()***REMOVED***);
		scroller.nanoScroller();

		holder.css({height: 'auto'***REMOVED***);
	***REMOVED***;

	p.removeScroller = function (holder) {
		if (holder.parent().parent().hasClass('nano') === false) {
			return;
		***REMOVED***

		holder.parent().parent().nanoScroller({destroy: true***REMOVED***);

		holder.parent('.nano-content').replaceWith(holder);
		holder.parent('.nano').replaceWith(holder);
		holder.attr('style', '');
	***REMOVED***;
	
	// =========================================================================
	// SORTABLE
	// =========================================================================

	p._initSortables = function () {
		if (!$.isFunction($.fn.sortable)) {
			return;
		***REMOVED***

		$('[data-sortable="true"]').sortable({
			placeholder: "ui-state-highlight",
			delay: 100,
			start: function (e, ui) {
				ui.placeholder.height(ui.item.outerHeight() - 1);
			***REMOVED***
		***REMOVED***);

	***REMOVED***;
	
	// =========================================================================
	// TABS
	// =========================================================================

	p._initTabs = function () {
		if (!$.isFunction($.fn.tab)) {
			return;
		***REMOVED***
		$('[data-toggle="tabs"] a').click(function (e) {
			e.preventDefault();
			$(this).tab('show');
		***REMOVED***);
	***REMOVED***;
	
	// =========================================================================
	// TOOLTIPS
	// =========================================================================

	p._initTooltips = function () {
		if (!$.isFunction($.fn.tooltip)) {
			return;
		***REMOVED***
		$('[data-toggle="tooltip"]').tooltip({container: 'body'***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// POPOVER
	// =========================================================================

	p._initPopover = function () {
		if (!$.isFunction($.fn.popover)) {
			return;
		***REMOVED***
		$('[data-toggle="popover"]').popover({container: 'body'***REMOVED***);
	***REMOVED***;
	
	// =========================================================================
	// DEFINE NAMESPACE
	// =========================================================================

	window.materialadmin.AppVendor = new AppVendor;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
