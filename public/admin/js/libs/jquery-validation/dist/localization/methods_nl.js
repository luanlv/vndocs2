(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	***REMOVED*** else {
		factory( jQuery );
	***REMOVED***
***REMOVED***(function( $ ) {

/*
 * Localized default methods for the jQuery validation plugin.
 * Locale: NL
 */
$.extend($.validator.methods, {
	date: function(value, element) {
		return this.optional(element) || /^\d\d?[\.\/\-]\d\d?[\.\/\-]\d\d\d?\d?$/.test(value);
	***REMOVED***
***REMOVED***);

***REMOVED***));