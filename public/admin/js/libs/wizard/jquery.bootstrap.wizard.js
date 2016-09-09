/*!
 * jQuery twitter bootstrap wizard plugin
 * Examples and documentation at: http://github.com/VinceG/twitter-bootstrap-wizard
 * version 1.0
 * Requires jQuery v1.3.2 or later
 * Supports Bootstrap 2.2.x, 2.3.x, 3.0
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Authors: Vadim Vincent Gabriel (http://vadimg.com), Jason Gill (www.gilluminate.com)
 */
;(function($) {
var bootstrapWizardCreate = function(element, options) {
	var element = $(element);
	var obj = this;
	
	// selector skips any 'li' elements that do not contain a child with a tab data-toggle
	var baseItemSelector = 'li:has([data-toggle="tab"])';

	// Merge options with defaults
	var $settings = $.extend({***REMOVED***, $.fn.bootstrapWizard.defaults, options);
	var $activeTab = null;
	var $navigation = null;
	
	this.rebindClick = function(selector, fn)
	{
		selector.unbind('click', fn).bind('click', fn);
	***REMOVED***

	this.fixNavigationButtons = function() {
		// Get the current active tab
		if(!$activeTab.length) {
			// Select first one
			$navigation.find('a:first').tab('show');
			$activeTab = $navigation.find(baseItemSelector + ':first');
		***REMOVED***

		// See if we're currently in the first/last then disable the previous and last buttons
		$($settings.previousSelector, element).toggleClass('disabled', (obj.firstIndex() >= obj.currentIndex()));
		$($settings.nextSelector, element).toggleClass('disabled', (obj.currentIndex() >= obj.navigationLength()));

		// We are unbinding and rebinding to ensure single firing and no double-click errors
		obj.rebindClick($($settings.nextSelector, element), obj.next);
		obj.rebindClick($($settings.previousSelector, element), obj.previous);
		obj.rebindClick($($settings.lastSelector, element), obj.last);
		obj.rebindClick($($settings.firstSelector, element), obj.first);

		if($settings.onTabShow && typeof $settings.onTabShow === 'function' && $settings.onTabShow($activeTab, $navigation, obj.currentIndex())===false){
			return false;
		***REMOVED***
	***REMOVED***;

	this.next = function(e) {

		// If we clicked the last then dont activate this
		if(element.hasClass('last')) {
			return false;
		***REMOVED***

		if($settings.onNext && typeof $settings.onNext === 'function' && $settings.onNext($activeTab, $navigation, obj.nextIndex())===false){
			return false;
		***REMOVED***

		// Did we click the last button
		$index = obj.nextIndex();
		if($index > obj.navigationLength()) {
		***REMOVED*** else {
			$navigation.find(baseItemSelector + ':eq('+$index+') a').tab('show');
		***REMOVED***
	***REMOVED***;

	this.previous = function(e) {

		// If we clicked the first then dont activate this
		if(element.hasClass('first')) {
			return false;
		***REMOVED***

		if($settings.onPrevious && typeof $settings.onPrevious === 'function' && $settings.onPrevious($activeTab, $navigation, obj.previousIndex())===false){
			return false;
		***REMOVED***

		$index = obj.previousIndex();
		if($index < 0) {
		***REMOVED*** else {
			$navigation.find(baseItemSelector + ':eq('+$index+') a').tab('show');
		***REMOVED***
	***REMOVED***;

	this.first = function(e) {
		if($settings.onFirst && typeof $settings.onFirst === 'function' && $settings.onFirst($activeTab, $navigation, obj.firstIndex())===false){
			return false;
		***REMOVED***

		// If the element is disabled then we won't do anything
		if(element.hasClass('disabled')) {
			return false;
		***REMOVED***
		$navigation.find(baseItemSelector + ':eq(0) a').tab('show');

	***REMOVED***;
	this.last = function(e) {
		if($settings.onLast && typeof $settings.onLast === 'function' && $settings.onLast($activeTab, $navigation, obj.lastIndex())===false){
			return false;
		***REMOVED***

		// If the element is disabled then we won't do anything
		if(element.hasClass('disabled')) {
			return false;
		***REMOVED***
		$navigation.find(baseItemSelector + ':eq('+obj.navigationLength()+') a').tab('show');
	***REMOVED***;
	this.currentIndex = function() {
		return $navigation.find(baseItemSelector).index($activeTab);
	***REMOVED***;
	this.firstIndex = function() {
		return 0;
	***REMOVED***;
	this.lastIndex = function() {
		return obj.navigationLength();
	***REMOVED***;
	this.getIndex = function(e) {
		return $navigation.find(baseItemSelector).index(e);
	***REMOVED***;
	this.nextIndex = function() {
		return $navigation.find(baseItemSelector).index($activeTab) + 1;
	***REMOVED***;
	this.previousIndex = function() {
		return $navigation.find(baseItemSelector).index($activeTab) - 1;
	***REMOVED***;
	this.navigationLength = function() {
		return $navigation.find(baseItemSelector).length - 1;
	***REMOVED***;
	this.activeTab = function() {
		return $activeTab;
	***REMOVED***;
	this.nextTab = function() {
		return $navigation.find(baseItemSelector + ':eq('+(obj.currentIndex()+1)+')').length ? $navigation.find(baseItemSelector + ':eq('+(obj.currentIndex()+1)+')') : null;
	***REMOVED***;
	this.previousTab = function() {
		if(obj.currentIndex() <= 0) {
			return null;
		***REMOVED***
		return $navigation.find(baseItemSelector + ':eq('+parseInt(obj.currentIndex()-1)+')');
	***REMOVED***;
	this.show = function(index) {
		return element.find(baseItemSelector + ':eq(' + index + ') a').tab('show');
	***REMOVED***;
	this.disable = function(index) {
		$navigation.find(baseItemSelector + ':eq('+index+')').addClass('disabled');
	***REMOVED***;
	this.enable = function(index) {
		$navigation.find(baseItemSelector + ':eq('+index+')').removeClass('disabled');
	***REMOVED***;
	this.hide = function(index) {
		$navigation.find(baseItemSelector + ':eq('+index+')').hide();
	***REMOVED***;
	this.display = function(index) {
		$navigation.find(baseItemSelector + ':eq('+index+')').show();
	***REMOVED***;
	this.remove = function(args) {
		var $index = args[0];
		var $removeTabPane = typeof args[1] != 'undefined' ? args[1] : false;
		var $item = $navigation.find(baseItemSelector + ':eq('+$index+')');

		// Remove the tab pane first if needed
		if($removeTabPane) {
			var $href = $item.find('a').attr('href');
			$($href).remove();
		***REMOVED***

		// Remove menu item
		$item.remove();
	***REMOVED***;
	
	var innerTabClick = function (e) {
		// Get the index of the clicked tab
		var clickedIndex = $navigation.find(baseItemSelector).index($(e.currentTarget).parent(baseItemSelector));
		if($settings.onTabClick && typeof $settings.onTabClick === 'function' && $settings.onTabClick($activeTab, $navigation, obj.currentIndex(), clickedIndex)===false){
			return false;
		***REMOVED***
	***REMOVED***;
	
	var innerTabShown = function (e) {  // use shown instead of show to help prevent double firing
		$element = $(e.target).parent();
		var nextTab = $navigation.find(baseItemSelector).index($element);

		// If it's disabled then do not change
		if($element.hasClass('disabled')) {
			return false;
		***REMOVED***

		if($settings.onTabChange && typeof $settings.onTabChange === 'function' && $settings.onTabChange($activeTab, $navigation, obj.currentIndex(), nextTab)===false){
				return false;
		***REMOVED***

		$activeTab = $element; // activated tab
		obj.fixNavigationButtons();
	***REMOVED***;
	
	this.resetWizard = function() {
		
		// remove the existing handlers
		$('a[data-toggle="tab"]', $navigation).off('click', innerTabClick);
		$('a[data-toggle="tab"]', $navigation).off('shown shown.bs.tab', innerTabShown);
		
		// reset elements based on current state of the DOM
		$navigation = element.find('ul:first', element);
		$activeTab = $navigation.find(baseItemSelector + '.active', element);
		
		// re-add handlers
		$('a[data-toggle="tab"]', $navigation).on('click', innerTabClick);
		$('a[data-toggle="tab"]', $navigation).on('shown shown.bs.tab', innerTabShown);
		
		obj.fixNavigationButtons();
	***REMOVED***;

	$navigation = element.find('ul:first', element);
	$activeTab = $navigation.find(baseItemSelector + '.active', element);

	if(!$navigation.hasClass($settings.tabClass)) {
		$navigation.addClass($settings.tabClass);
	***REMOVED***

	// Load onInit
	if($settings.onInit && typeof $settings.onInit === 'function'){
		$settings.onInit($activeTab, $navigation, 0);
	***REMOVED***

	// Load onShow
	if($settings.onShow && typeof $settings.onShow === 'function'){
		$settings.onShow($activeTab, $navigation, obj.nextIndex());
	***REMOVED***

	$('a[data-toggle="tab"]', $navigation).on('click', innerTabClick);

	// attach to both shown and shown.bs.tab to support Bootstrap versions 2.3.2 and 3.0.0
	$('a[data-toggle="tab"]', $navigation).on('shown shown.bs.tab', innerTabShown);
***REMOVED***;
$.fn.bootstrapWizard = function(options) {
	//expose methods
	if (typeof options == 'string') {
		var args = Array.prototype.slice.call(arguments, 1)
		if(args.length === 1) {
			args.toString();
		***REMOVED***
		return this.data('bootstrapWizard')[options](args);
	***REMOVED***
	return this.each(function(index){
		var element = $(this);
		// Return early if this element already has a plugin instance
		if (element.data('bootstrapWizard')) return;
		// pass options to plugin constructor
		var wizard = new bootstrapWizardCreate(element, options);
		// Store plugin object in this element's data
		element.data('bootstrapWizard', wizard);
	***REMOVED***);
***REMOVED***;

// expose options
$.fn.bootstrapWizard.defaults = {
	tabClass:         'nav nav-pills',
	nextSelector:     '.wizard li.next',
	previousSelector: '.wizard li.previous',
	firstSelector:    '.wizard li.first',
	lastSelector:     '.wizard li.last',
	onShow:           null,
	onInit:           null,
	onNext:           null,
	onPrevious:       null,
	onLast:           null,
	onFirst:          null,
	onTabChange:      null, 
	onTabClick:       null,
	onTabShow:        null
***REMOVED***;

***REMOVED***)(jQuery);
