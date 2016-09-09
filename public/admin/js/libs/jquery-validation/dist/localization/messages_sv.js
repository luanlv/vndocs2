(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	***REMOVED*** else {
		factory( jQuery );
	***REMOVED***
***REMOVED***(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: SV (Swedish; Svenska)
 */
$.extend($.validator.messages, {
	required: "Detta f&auml;lt &auml;r obligatoriskt.",
	maxlength: $.validator.format("Du f&aring;r ange h&ouml;gst {0***REMOVED*** tecken."),
	minlength: $.validator.format("Du m&aring;ste ange minst {0***REMOVED*** tecken."),
	rangelength: $.validator.format("Ange minst {0***REMOVED*** och max {1***REMOVED*** tecken."),
	email: "Ange en korrekt e-postadress.",
	url: "Ange en korrekt URL.",
	date: "Ange ett korrekt datum.",
	dateISO: "Ange ett korrekt datum (&Aring;&Aring;&Aring;&Aring;-MM-DD).",
	number: "Ange ett korrekt nummer.",
	digits: "Ange endast siffror.",
	equalTo: "Ange samma v&auml;rde igen.",
	range: $.validator.format("Ange ett v&auml;rde mellan {0***REMOVED*** och {1***REMOVED***."),
	max: $.validator.format("Ange ett v&auml;rde som &auml;r mindre eller lika med {0***REMOVED***."),
	min: $.validator.format("Ange ett v&auml;rde som &auml;r st&ouml;rre eller lika med {0***REMOVED***."),
	creditcard: "Ange ett korrekt kreditkortsnummer."
***REMOVED***);

***REMOVED***));