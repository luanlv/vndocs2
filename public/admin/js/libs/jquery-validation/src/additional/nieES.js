/*
 * The número de identidad de extranjero ( NIE )is a code used to identify the non-nationals in Spain
 */
$.validator.addMethod( "nieES", function( value ) {
	"use strict";

	value = value.toUpperCase();

	// Basic format test
	if ( !value.match( "((^[A-Z]{1***REMOVED***[0-9]{7***REMOVED***[A-Z0-9]{1***REMOVED***$|^[T]{1***REMOVED***[A-Z0-9]{8***REMOVED***$)|^[0-9]{8***REMOVED***[A-Z]{1***REMOVED***$)" ) ) {
		return false;
	***REMOVED***

	// Test NIE
	//T
	if ( /^[T]{1***REMOVED***/.test( value ) ) {
		return ( value[ 8 ] === /^[T]{1***REMOVED***[A-Z0-9]{8***REMOVED***$/.test( value ) );
	***REMOVED***

	//XYZ
	if ( /^[XYZ]{1***REMOVED***/.test( value ) ) {
		return (
			value[ 8 ] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(
				value.replace( "X", "0" )
					.replace( "Y", "1" )
					.replace( "Z", "2" )
					.substring( 0, 8 ) % 23
			)
		);
	***REMOVED***

	return false;

***REMOVED***, "Please specify a valid NIE number." );
