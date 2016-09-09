(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	***REMOVED*** else {
		factory( jQuery );
	***REMOVED***
***REMOVED***(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES (Spanish; Español)
 */
$.extend($.validator.messages, {
	required: "Este campo es obligatorio.",
	remote: "Por favor, rellena este campo.",
	email: "Por favor, escribe una dirección de correo válida.",
	url: "Por favor, escribe una URL válida.",
	date: "Por favor, escribe una fecha válida.",
	dateISO: "Por favor, escribe una fecha (ISO) válida.",
	number: "Por favor, escribe un número válido.",
	digits: "Por favor, escribe sólo dígitos.",
	creditcard: "Por favor, escribe un número de tarjeta válido.",
	equalTo: "Por favor, escribe el mismo valor de nuevo.",
	extension: "Por favor, escribe un valor con una extensión aceptada.",
	maxlength: $.validator.format("Por favor, no escribas más de {0***REMOVED*** caracteres."),
	minlength: $.validator.format("Por favor, no escribas menos de {0***REMOVED*** caracteres."),
	rangelength: $.validator.format("Por favor, escribe un valor entre {0***REMOVED*** y {1***REMOVED*** caracteres."),
	range: $.validator.format("Por favor, escribe un valor entre {0***REMOVED*** y {1***REMOVED***."),
	max: $.validator.format("Por favor, escribe un valor menor o igual a {0***REMOVED***."),
	min: $.validator.format("Por favor, escribe un valor mayor o igual a {0***REMOVED***."),
	nifES: "Por favor, escribe un NIF válido.",
	nieES: "Por favor, escribe un NIE válido.",
	cifES: "Por favor, escribe un CIF válido."
***REMOVED***);

***REMOVED***));