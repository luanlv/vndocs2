(function(namespace, $) {
	"use strict";

	var DemoFormWizard = function() {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function() {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = DemoFormWizard.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function() {
		this._initWizard1();
		this._initWizard2();
	***REMOVED***;

	// =========================================================================
	// WIZARD 1
	// =========================================================================

	p._initWizard1 = function() {
		var o = this;
		$('#rootwizard1').bootstrapWizard({
			onTabShow: function(tab, navigation, index) {
				o._handleTabShow(tab, navigation, index, $('#rootwizard1'));
			***REMOVED***
		***REMOVED***);
	***REMOVED***;

	p._handleTabShow = function(tab, navigation, index, wizard){
		var total = navigation.find('li').length;
		var current = index + 0;
		var percent = (current / (total - 1)) * 100;
		var percentWidth = 100 - (100 / total) + '%';
		
		navigation.find('li').removeClass('done');
		navigation.find('li.active').prevAll().addClass('done');
		
		wizard.find('.progress-bar').css({width: percent + '%'***REMOVED***);
		$('.form-wizard-horizontal').find('.progress').css({'width': percentWidth***REMOVED***);
	***REMOVED***;
	
	// =========================================================================
	// WIZARD 1
	// =========================================================================

	p._initWizard2 = function() {
		var o = this;
		$('#rootwizard2').bootstrapWizard({
			onTabShow: function(tab, navigation, index) {
				o._handleTabShow(tab, navigation, index, $('#rootwizard2'));
			***REMOVED***,
	  		onNext: function(tab, navigation, index) {
				var form = $('#rootwizard2').find('.form-validation');
	  			var valid = form.valid();
	  			if(!valid) {
	  				form.data('validator').focusInvalid();
	  				return false;
	  			***REMOVED***
	  		***REMOVED***
		***REMOVED***);
	***REMOVED***;

	p._handleTabShow = function(tab, navigation, index, wizard){
		var total = navigation.find('li').length;
		var current = index + 0;
		var percent = (current / (total - 1)) * 100;
		var percentWidth = 100 - (100 / total) + '%';
		
		navigation.find('li').removeClass('done');
		navigation.find('li.active').prevAll().addClass('done');
		
		wizard.find('.progress-bar').css({width: percent + '%'***REMOVED***);
		$('.form-wizard-horizontal').find('.progress').css({'width': percentWidth***REMOVED***);
	***REMOVED***;
	
	// =========================================================================
	namespace.DemoFormWizard = new DemoFormWizard;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
