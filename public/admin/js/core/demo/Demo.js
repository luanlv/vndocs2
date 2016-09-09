(function (namespace, $) {
	"use strict";

	var Demo = function () {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function () {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = Demo.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function () {
		this._enableEvents();

		this._initButtonStates();
		this._initIconSearch();
		this._initInversedTogglers();
		this._initChatMessage();
	***REMOVED***;

	// =========================================================================
	// EVENTS
	// =========================================================================

	// events
	p._enableEvents = function () {
		var o = this;

		$('.card-head .tools .btn-refresh').on('click', function (e) {
			o._handleCardRefresh(e);
		***REMOVED***);
		$('.card-head .tools .btn-collapse').on('click', function (e) {
			o._handleCardCollapse(e);
		***REMOVED***);
		$('.card-head .tools .btn-close').on('click', function (e) {
			o._handleCardClose(e);
		***REMOVED***);
		$('.card-head .tools .menu-card-styling a').on('click', function (e) {
			o._handleCardStyling(e);
		***REMOVED***);
		$('.theme-selector a').on('click', function (e) {
			o._handleThemeSwitch(e);
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// CARD ACTIONS
	// =========================================================================

	p._handleCardRefresh = function (e) {
		var o = this;
		var card = $(e.currentTarget).closest('.card');
		materialadmin.AppCard.addCardLoader(card);
		setTimeout(function () {
			materialadmin.AppCard.removeCardLoader(card);
		***REMOVED***, 1500);
	***REMOVED***;

	p._handleCardCollapse = function (e) {
		var card = $(e.currentTarget).closest('.card');
		materialadmin.AppCard.toggleCardCollapse(card);
	***REMOVED***;

	p._handleCardClose = function (e) {
		var card = $(e.currentTarget).closest('.card');
		materialadmin.AppCard.removeCard(card);
	***REMOVED***;

	p._handleCardStyling = function (e) {
		// Get selected style and active card
		var newStyle = $(e.currentTarget).data('style');
		var card = $(e.currentTarget).closest('.card');

		// Display the selected style in the dropdown menu
		$(e.currentTarget).closest('ul').find('li').removeClass('active');
		$(e.currentTarget).closest('li').addClass('active');

		// Find all cards with a 'style-' class
		var styledCard = card.closest('[class*="style-"]');

		if (styledCard.length > 0 && (!styledCard.hasClass('style-white') && !styledCard.hasClass('style-transparent'))) {
			// If a styled card is found, replace the style with the selected style
			// Exclude style-white and style-transparent
			styledCard.attr('class', function (i, c) {
				return c.replace(/\bstyle-\S+/g, newStyle);
			***REMOVED***);
		***REMOVED***
		else {
			// Create variable to check if a style is switched
			var styleSwitched = false;

			// When no cards are found with a style, look inside the card for styled headers or body
			card.find('[class*="style-"]').each(function () {
				// Replace the style with the selected style
				// Exclude style-white and style-transparent
				if (!$(this).hasClass('style-white') && !$(this).hasClass('style-transparent')) {
					$(this).attr('class', function (i, c) {
						return c.replace(/\bstyle-\S+/g, newStyle);
					***REMOVED***);
					styleSwitched = true;
				***REMOVED***
			***REMOVED***);

			// If no style is switched, add 1 to the main Card
			if (styleSwitched === false) {
				card.addClass(newStyle);
			***REMOVED***
		***REMOVED***
	***REMOVED***;

	// =========================================================================
	// COLOR SWITCHER
	// =========================================================================
	
	p._handleThemeSwitch = function (e) {
		e.preventDefault();
		var newTheme = $(e.currentTarget).attr('href');
		this.switchTheme(newTheme);
	***REMOVED***;
	
	p.switchTheme = function (theme) {
		$('link').each(function () {
			var href = $(this).attr('href');
			href = href.replace(/(assets\/css\/)(.*)(\/)/g, 'assets/css/' + theme + '/');
			$(this).attr('href', href);
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// CHAT MESSAGE
	// =========================================================================
	
	p._initChatMessage = function (e) {
		var o = this;
		$('#sidebarChatMessage').keydown(function (e) {
			o._handleChatMessage(e);
		***REMOVED***);
	***REMOVED***;
	
	p._handleChatMessage = function (e) {
		var input = $(e.currentTarget);
		
		// Detect enter
		if (e.keyCode === 13) {
			e.preventDefault();
			
			// Get chat message
			var demoTime = new Date().getHours() + ':' + new Date().getMinutes();
			var demoImage = $('.list-chats li img').attr('src');
			
			// Create html
			var html = '';
			html += '<li>';
			html += '	<div class="chat">';
			html += '		<div class="chat-avatar"><img class="img-circle" src="' + demoImage + '" alt=""></div>';
			html += '		<div class="chat-body">';
			html += '			' + input.val();
			html += '			<small>' + demoTime + '</small>';
			html += '		</div>';
			html += '	</div>';
			html += '</li>';
			var $new = $(html).hide();
			
			// Add to chat list
			$('.list-chats').prepend($new);
			
			// Animate new inserts
			$new.show('fast');
			
			// Reset chat input
			input.val('').trigger('autosize.resize');
			
			// Refresh for correct scroller size
			$('.offcanvas').trigger('refresh');
		***REMOVED***
	***REMOVED***;

	// =========================================================================
	// INVERSE UI TOGGLERS
	// =========================================================================
	
	p._initInversedTogglers = function () {
		var o = this;

		
		$('input[name="menubarInversed"]').on('change', function (e) {
			o._handleMenubarInversed(e);
		***REMOVED***);
		$('input[name="headerInversed"]').on('change', function (e) {
			o._handleHeaderInversed(e);
		***REMOVED***);
	***REMOVED***;
	
	p._handleMenubarInversed = function (e) {
		if($(e.currentTarget).val() === '1') {
			$('#menubar').addClass('menubar-inverse');
		***REMOVED***
		else {
			$('#menubar').removeClass('menubar-inverse');
		***REMOVED***
	***REMOVED***;
	p._handleHeaderInversed = function (e) {
		if($(e.currentTarget).val() === '1') {
			$('#header').addClass('header-inverse');
		***REMOVED***
		else {
			$('#header').removeClass('header-inverse');
		***REMOVED***
	***REMOVED***;
	
	// =========================================================================
	// BUTTON STATES (LOADING)
	// =========================================================================

	p._initButtonStates = function () {
		$('.btn-loading-state').click(function () {
			var btn = $(this);
			btn.button('loading');
			setTimeout(function () {
				btn.button('reset');
			***REMOVED***, 3000);
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// ICON SEARCH
	// =========================================================================

	p._initIconSearch = function () {
		if($('#iconsearch').length === 0) {
			return;
		***REMOVED***

		$('#iconsearch').focus();
		$('#iconsearch').on('keyup', function () {
			var val = $('#iconsearch').val();
			$('.col-md-3').hide();
			$('.col-md-3:contains("' + val + '")').each(function (e) {
				$(this).show();
			***REMOVED***);

			$('.card').hide();
			$('.card:contains("' + val + '")').each(function (e) {
				$(this).show();
			***REMOVED***);
		***REMOVED***);
	***REMOVED***;
		
	// =========================================================================
	namespace.Demo = new Demo;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
