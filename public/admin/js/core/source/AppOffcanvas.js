(function (namespace, $) {
	"use strict";

	var AppOffcanvas = function () {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function () {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = AppOffcanvas.prototype;
	// =========================================================================
	// MEMBERS
	// =========================================================================

	p._timer = null;
	p._useBackdrop = null;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function () {
		this._enableEvents();
	***REMOVED***;

	// =========================================================================
	// EVENTS
	// =========================================================================

	p._enableEvents = function () {
		var o = this;

		// Window events
		$(window).on('resize', function (e) {
			o._handleScreenSize(e);
		***REMOVED***);

		// Offcanvas events
		$('.offcanvas').on('refresh', function (e) {
			o.evalScrollbar(e);
		***REMOVED***);
		$('[data-toggle="offcanvas"]').on('click', function (e) {
			e.preventDefault();
			o._handleOffcanvasOpen($(e.currentTarget));
		***REMOVED***);$('[data-dismiss="offcanvas"]').on('click', function (e) {
			o._handleOffcanvasClose();
		***REMOVED***);
		// $('#base').on('click', '> .backdrop', function (e) {
		// 	o._handleOffcanvasClose();
		// ***REMOVED***);

		// Open active offcanvas buttons
		$('[data-toggle="offcanvas-left"].active').each(function () {
			o._handleOffcanvasOpen($(this));
		***REMOVED***);
		$('[data-toggle="offcanvas-right"].active').each(function () {
			o._handleOffcanvasOpen($(this));
		***REMOVED***);
	***REMOVED***;

	// handlers
	p._handleScreenSize = function (e) {
		this.evalScrollbar(e);
	***REMOVED***;

	// =========================================================================
	// HANDLERS
	// =========================================================================

	p._handleOffcanvasOpen = function (btn) {
		// When the button is active, the off-canvas is already open and sould be closed
		if (btn.hasClass('active')) {
			this._handleOffcanvasClose();
			return;
		***REMOVED***

		var id = btn.attr('href');

		// Set data variables
		this._useBackdrop = (btn.data('backdrop') === undefined) ? true : btn.data('backdrop');

		// Open off-canvas
		this.openOffcanvas(id);
		this.invalidate();
	***REMOVED***;

	p._handleOffcanvasClose = function (e) {
		this.closeOffcanvas();
		this.invalidate();
	***REMOVED***;

	// =========================================================================
	// OPEN OFFCANVAS
	// =========================================================================

	p.openOffcanvas = function (id) {
		// First close all offcanvas panes
		this.closeOffcanvas();

		// Activate selected offcanvas pane
		$(id).addClass('active');

		// Check if the offcanvas is on the left
		var leftOffcanvas = ($(id).closest('.offcanvas:first').length > 0);

		// Remove offcanvas-expanded to enable body scrollbar
		if (this._useBackdrop)
			$('body').addClass('offcanvas-expanded');

		// Define the width
		var width = $(id).width();
		if (width > $(document).width()) {
			width = $(document).width() - 8;
			$(id + '.active').css({'width': width***REMOVED***);
		***REMOVED***
		width = (leftOffcanvas) ? width : '-' + width;

		// Translate position offcanvas pane
		var translate = 'translate(' + width + 'px, 0)';
		$(id + '.active').css({
			'-webkit-transform': translate,
			'-ms-transform': translate,
			'-o-transform': translate,
			'transform': translate
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// CLOSE OFFCANVAS
	// =========================================================================

	p.closeOffcanvas = function () {
		// Remove expanded on all offcanvas buttons
		$('[data-toggle="offcanvas"]').removeClass('expanded');

		// Remove offcanvas active state
		$('.offcanvas-pane').removeClass('active');//.removeAttr('style');
		$('.offcanvas-pane').css({
			'-webkit-transform': '',
			'-ms-transform': '',
			'-o-transform': '',
			'transform': ''
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// OFFCANVAS BUTTONS
	// =========================================================================

	p.toggleButtonState = function () {
		// Activate the active offcanvas pane
		var id = $('.offcanvas-pane.active').attr('id');
		$('[data-toggle="offcanvas"]').removeClass('active');
		$('[href="#' + id + '"]').addClass('active');
	***REMOVED***;

	// =========================================================================
	// BACKDROP
	// =========================================================================

	p.toggleBackdropState = function () {
		// Clear the timer that removes the keyword
		if ($('.offcanvas-pane.active').length > 0 && this._useBackdrop) {
			this._addBackdrop();
		***REMOVED***
		else {
			this._removeBackdrop();
		***REMOVED***
	***REMOVED***;

	p._addBackdrop = function () {
		if ($('#base > .backdrop').length === 0 && $('#base').data('backdrop') !== 'hidden') {
			$('<div class="backdrop"></div>').hide().appendTo('#base').fadeIn();
		***REMOVED***
	***REMOVED***;

	p._removeBackdrop = function () {
		$('#base > .backdrop').fadeOut(function () {
			$(this).remove();
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// BODY SCROLLING
	// =========================================================================

	p.toggleBodyScrolling = function () {
		clearTimeout(this._timer);
		if ($('.offcanvas-pane.active').length > 0 && this._useBackdrop) {
			// Add body padding to prevent visual jumping
			var scrollbarWidth = this.measureScrollbar();
			var bodyPad = parseInt(($('body').css('padding-right') || 0), 10);
			if (scrollbarWidth !== bodyPad) {
				$('body').css('padding-right', bodyPad + scrollbarWidth);
				$('.headerbar').css('padding-right', bodyPad + scrollbarWidth);
			***REMOVED***
		***REMOVED***
		else {
			this._timer = setTimeout(function () {
				// Remove offcanvas-expanded to enable body scrollbar
				$('body').removeClass('offcanvas-expanded');
				$('body').css('padding-right', '');
				$('.headerbar').removeClass('offcanvas-expanded');
				$('.headerbar').css('padding-right', '');
			***REMOVED***, 330);
		***REMOVED***
	***REMOVED***;

	// =========================================================================
	// INVALIDATE
	// =========================================================================

	p.invalidate = function () {
		this.toggleButtonState();
		this.toggleBackdropState();
		this.toggleBodyScrolling();
		this.evalScrollbar();
	***REMOVED***;

	// =========================================================================
	// SCROLLBAR
	// =========================================================================

	p.evalScrollbar = function () {
		if (!$.isFunction($.fn.nanoScroller)) {
			return;
		***REMOVED***
		
		// Check if there is a menu
		var menu = $('.offcanvas-pane.active');
		if (menu.length === 0)
			return;

		// Get scrollbar elements
		var menuScroller = $('.offcanvas-pane.active .offcanvas-body');
		var parent = menuScroller.parent();

		// Add the scroller wrapper
		if (parent.hasClass('nano-content') === false) {
			menuScroller.wrap('<div class="nano"><div class="nano-content"></div></div>');
		***REMOVED***
		
		// Set the correct height
		var height = $(window).height() - menu.find('.nano').position().top;
		var scroller = menuScroller.closest('.nano');
		scroller.css({height: height***REMOVED***);

		// Add the nanoscroller
		scroller.nanoScroller({preventPageScrolling: true***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// UTILS
	// =========================================================================

	p.measureScrollbar = function () {
		var scrollDiv = document.createElement('div');
		scrollDiv.className = 'modal-scrollbar-measure';
		$('body').append(scrollDiv);
		var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
		$('body')[0].removeChild(scrollDiv);
		return scrollbarWidth;
	***REMOVED***;

	// =========================================================================
	// DEFINE NAMESPACE
	// =========================================================================

	window.materialadmin.AppOffcanvas = new AppOffcanvas;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
