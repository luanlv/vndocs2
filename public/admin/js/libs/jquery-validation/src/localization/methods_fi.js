/*
 * Localized default methods for the jQuery validation plugin.
 * Locale: FI
 */
$.extend($.validator.methods, {
	date: function(value, element) {
		return this.optional(element) || /^\d{1,2***REMOVED***\.\d{1,2***REMOVED***\.\d{4***REMOVED***$/.test(value);
	***REMOVED***,
	number: function(value, element) {
		return this.optional(element) || /^-?(?:\d+)(?:,\d+)?$/.test(value);
	***REMOVED***
***REMOVED***);
