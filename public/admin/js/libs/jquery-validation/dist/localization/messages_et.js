(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	***REMOVED*** else {
		factory( jQuery );
	***REMOVED***
***REMOVED***(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ET (Estonian; eesti, eesti keel)
 */
$.extend($.validator.messages, {
	required: "See väli peab olema täidetud.",
	maxlength: $.validator.format("Palun sisestage vähem kui {0***REMOVED*** tähemärki."),
	minlength: $.validator.format("Palun sisestage vähemalt {0***REMOVED*** tähemärki."),
	rangelength: $.validator.format("Palun sisestage väärtus vahemikus {0***REMOVED*** kuni {1***REMOVED*** tähemärki."),
	email: "Palun sisestage korrektne e-maili aadress.",
	url: "Palun sisestage korrektne URL.",
	date: "Palun sisestage korrektne kuupäev.",
	dateISO: "Palun sisestage korrektne kuupäev (YYYY-MM-DD).",
	number: "Palun sisestage korrektne number.",
	digits: "Palun sisestage ainult numbreid.",
	equalTo: "Palun sisestage sama väärtus uuesti.",
	range: $.validator.format("Palun sisestage väärtus vahemikus {0***REMOVED*** kuni {1***REMOVED***."),
	max: $.validator.format("Palun sisestage väärtus, mis on väiksem või võrdne arvuga {0***REMOVED***."),
	min: $.validator.format("Palun sisestage väärtus, mis on suurem või võrdne arvuga {0***REMOVED***."),
	creditcard: "Palun sisestage korrektne krediitkaardi number."
***REMOVED***);

***REMOVED***));