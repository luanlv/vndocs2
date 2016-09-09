(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	***REMOVED*** else {
		factory( jQuery );
	***REMOVED***
***REMOVED***(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: SR (Serbian - Latin alphabet; srpski jezik - latinica)
 */
$.extend($.validator.messages, {
	required: "Polje je obavezno.",
	remote: "Sredite ovo polje.",
	email: "Unesite ispravnu i-mejl adresu",
	url: "Unesite ispravan URL.",
	date: "Unesite ispravan datum.",
	dateISO: "Unesite ispravan datum (ISO).",
	number: "Unesite ispravan broj.",
	digits: "Unesite samo cife.",
	creditcard: "Unesite ispravan broj kreditne kartice.",
	equalTo: "Unesite istu vrednost ponovo.",
	extension: "Unesite vrednost sa odgovarajućom ekstenzijom.",
	maxlength: $.validator.format("Unesite manje od {0***REMOVED*** karaktera."),
	minlength: $.validator.format("Unesite barem {0***REMOVED*** karaktera."),
	rangelength: $.validator.format("Unesite vrednost dugačku između {0***REMOVED*** i {1***REMOVED*** karaktera."),
	range: $.validator.format("Unesite vrednost između {0***REMOVED*** i {1***REMOVED***."),
	max: $.validator.format("Unesite vrednost manju ili jednaku {0***REMOVED***."),
	min: $.validator.format("Unesite vrednost veću ili jednaku {0***REMOVED***.")
***REMOVED***);

***REMOVED***));