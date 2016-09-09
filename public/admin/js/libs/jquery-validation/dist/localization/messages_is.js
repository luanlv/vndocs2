(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	***REMOVED*** else {
		factory( jQuery );
	***REMOVED***
***REMOVED***(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: IS (Icelandic; íslenska)
 */
$.extend($.validator.messages, {
	required: "Þessi reitur er nauðsynlegur.",
	remote: "Lagaðu þennan reit.",
	maxlength: $.validator.format("Sláðu inn mest {0***REMOVED*** stafi."),
	minlength: $.validator.format("Sláðu inn minnst {0***REMOVED*** stafi."),
	rangelength: $.validator.format("Sláðu inn minnst {0***REMOVED*** og mest {1***REMOVED*** stafi."),
	email: "Sláðu inn gilt netfang.",
	url: "Sláðu inn gilda vefslóð.",
	date: "Sláðu inn gilda dagsetningu.",
	number: "Sláðu inn tölu.",
	digits: "Sláðu inn tölustafi eingöngu.",
	equalTo: "Sláðu sama gildi inn aftur.",
	range: $.validator.format("Sláðu inn gildi milli {0***REMOVED*** og {1***REMOVED***."),
	max: $.validator.format("Sláðu inn gildi sem er minna en eða jafnt og {0***REMOVED***."),
	min: $.validator.format("Sláðu inn gildi sem er stærra en eða jafnt og {0***REMOVED***."),
	creditcard: "Sláðu inn gilt greiðslukortanúmer."
***REMOVED***);

***REMOVED***));