(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	***REMOVED*** else {
		factory( jQuery );
	***REMOVED***
***REMOVED***(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: EL (Greek; ελληνικά)
 */
$.extend($.validator.messages, {
	required: "Αυτό το πεδίο είναι υποχρεωτικό.",
	remote: "Παρακαλώ διορθώστε αυτό το πεδίο.",
	email: "Παρακαλώ εισάγετε μια έγκυρη διεύθυνση email.",
	url: "Παρακαλώ εισάγετε ένα έγκυρο URL.",
	date: "Παρακαλώ εισάγετε μια έγκυρη ημερομηνία.",
	dateISO: "Παρακαλώ εισάγετε μια έγκυρη ημερομηνία (ISO).",
	number: "Παρακαλώ εισάγετε έναν έγκυρο αριθμό.",
	digits: "Παρακαλώ εισάγετε μόνο αριθμητικά ψηφία.",
	creditcard: "Παρακαλώ εισάγετε έναν έγκυρο αριθμό πιστωτικής κάρτας.",
	equalTo: "Παρακαλώ εισάγετε την ίδια τιμή ξανά.",
	extension: "Παρακαλώ εισάγετε μια τιμή με έγκυρη επέκταση αρχείου.",
	maxlength: $.validator.format("Παρακαλώ εισάγετε μέχρι και {0***REMOVED*** χαρακτήρες."),
	minlength: $.validator.format("Παρακαλώ εισάγετε τουλάχιστον {0***REMOVED*** χαρακτήρες."),
	rangelength: $.validator.format("Παρακαλώ εισάγετε μια τιμή με μήκος μεταξύ {0***REMOVED*** και {1***REMOVED*** χαρακτήρων."),
	range: $.validator.format("Παρακαλώ εισάγετε μια τιμή μεταξύ {0***REMOVED*** και {1***REMOVED***."),
	max: $.validator.format("Παρακαλώ εισάγετε μια τιμή μικρότερη ή ίση του {0***REMOVED***."),
	min: $.validator.format("Παρακαλώ εισάγετε μια τιμή μεγαλύτερη ή ίση του {0***REMOVED***.")
***REMOVED***);

***REMOVED***));