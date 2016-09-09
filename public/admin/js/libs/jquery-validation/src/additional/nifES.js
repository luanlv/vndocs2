/*
 * The Número de Identificación Fiscal ( NIF ) is the way tax identification used in Spain for individuals
 */
$.validator.addMethod( "nifES", function( value ) {
	"use strict";

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match("((^[A-Z]{1***REMOVED***[0-9]{7***REMOVED***[A-Z0-9]{1***REMOVED***$|^[T]{1***REMOVED***[A-Z0-9]{8***REMOVED***$)|^[0-9]{8***REMOVED***[A-Z]{1***REMOVED***$)") ) {
		return false;
	***REMOVED***

	// Test NIF
	if ( /^[0-9]{8***REMOVED***[A-Z]{1***REMOVED***$/.test( value ) ) {
		return ( "TRWAGMYFPDXBNJZSQVHLCKE".charAt( value.substring( 8, 0 ) % 23 ) === value.charAt( 8 ) );
	***REMOVED***
	// Test specials NIF (starts with K, L or M)
	if ( /^[KLM]{1***REMOVED***/.test( value ) ) {
		return ( value[ 8 ] === String.fromCharCode( 64 ) );
	***REMOVED***

	return false;

***REMOVED***, "Please specify a valid NIF number." );
