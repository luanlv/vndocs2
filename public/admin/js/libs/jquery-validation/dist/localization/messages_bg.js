(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	***REMOVED*** else {
		factory( jQuery );
	***REMOVED***
***REMOVED***(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: BG (Bulgarian; български език)
 */
$.extend($.validator.messages, {
	required: "Полето е задължително.",
	remote: "Моля, въведете правилната стойност.",
	email: "Моля, въведете валиден email.",
	url: "Моля, въведете валидно URL.",
	date: "Моля, въведете валидна дата.",
	dateISO: "Моля, въведете валидна дата (ISO).",
	number: "Моля, въведете валиден номер.",
	digits: "Моля, въведете само цифри.",
	creditcard: "Моля, въведете валиден номер на кредитна карта.",
	equalTo: "Моля, въведете същата стойност отново.",
	extension: "Моля, въведете стойност с валидно разширение.",
	maxlength: $.validator.format("Моля, въведете повече от {0***REMOVED*** символа."),
	minlength: $.validator.format("Моля, въведете поне {0***REMOVED*** символа."),
	rangelength: $.validator.format("Моля, въведете стойност с дължина между {0***REMOVED*** и {1***REMOVED*** символа."),
	range: $.validator.format("Моля, въведете стойност между {0***REMOVED*** и {1***REMOVED***."),
	max: $.validator.format("Моля, въведете стойност по-малка или равна на {0***REMOVED***."),
	min: $.validator.format("Моля, въведете стойност по-голяма или равна на {0***REMOVED***.")
***REMOVED***);

***REMOVED***));