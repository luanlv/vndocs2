/*!
 * jQuery Validation Plugin v1.13.1
 *
 * http://jqueryvalidation.org/
 *
 * Copyright (c) 2014 Jörn Zaefferer
 * Released under the MIT license
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "./jquery.validate"], factory );
	***REMOVED*** else {
		factory( jQuery );
	***REMOVED***
***REMOVED***(function( $ ) {

(function() {

	function stripHtml(value) {
		// remove html tags and space chars
		return value.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ")
		// remove punctuation
		.replace(/[.(),;:!?%#$'\"_+=\/\-“”’]*/g, "");
	***REMOVED***

	$.validator.addMethod("maxWords", function(value, element, params) {
		return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length <= params;
	***REMOVED***, $.validator.format("Please enter {0***REMOVED*** words or less."));

	$.validator.addMethod("minWords", function(value, element, params) {
		return this.optional(element) || stripHtml(value).match(/\b\w+\b/g).length >= params;
	***REMOVED***, $.validator.format("Please enter at least {0***REMOVED*** words."));

	$.validator.addMethod("rangeWords", function(value, element, params) {
		var valueStripped = stripHtml(value),
			regex = /\b\w+\b/g;
		return this.optional(element) || valueStripped.match(regex).length >= params[0] && valueStripped.match(regex).length <= params[1];
	***REMOVED***, $.validator.format("Please enter between {0***REMOVED*** and {1***REMOVED*** words."));

***REMOVED***());

// Accept a value from a file input based on a required mimetype
$.validator.addMethod("accept", function(value, element, param) {
	// Split mime on commas in case we have multiple types we can accept
	var typeParam = typeof param === "string" ? param.replace(/\s/g, "").replace(/,/g, "|") : "image/*",
	optionalValue = this.optional(element),
	i, file;

	// Element is optional
	if (optionalValue) {
		return optionalValue;
	***REMOVED***

	if ($(element).attr("type") === "file") {
		// If we are using a wildcard, make it regex friendly
		typeParam = typeParam.replace(/\*/g, ".*");

		// Check if the element has a FileList before checking each file
		if (element.files && element.files.length) {
			for (i = 0; i < element.files.length; i++) {
				file = element.files[i];

				// Grab the mimetype from the loaded file, verify it matches
				if (!file.type.match(new RegExp( ".?(" + typeParam + ")$", "i"))) {
					return false;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// Either return true because we've validated each file, or because the
	// browser does not support element.files and the FileList feature
	return true;
***REMOVED***, $.validator.format("Please enter a value with a valid mimetype."));

$.validator.addMethod("alphanumeric", function(value, element) {
	return this.optional(element) || /^\w+$/i.test(value);
***REMOVED***, "Letters, numbers, and underscores only please");

/*
 * Dutch bank account numbers (not 'giro' numbers) have 9 digits
 * and pass the '11 check'.
 * We accept the notation with spaces, as that is common.
 * acceptable: 123456789 or 12 34 56 789
 */
$.validator.addMethod("bankaccountNL", function(value, element) {
	if (this.optional(element)) {
		return true;
	***REMOVED***
	if (!(/^[0-9]{9***REMOVED***|([0-9]{2***REMOVED*** ){3***REMOVED***[0-9]{3***REMOVED***$/.test(value))) {
		return false;
	***REMOVED***
	// now '11 check'
	var account = value.replace(/ /g, ""), // remove spaces
		sum = 0,
		len = account.length,
		pos, factor, digit;
	for ( pos = 0; pos < len; pos++ ) {
		factor = len - pos;
		digit = account.substring(pos, pos + 1);
		sum = sum + factor * digit;
	***REMOVED***
	return sum % 11 === 0;
***REMOVED***, "Please specify a valid bank account number");

$.validator.addMethod("bankorgiroaccountNL", function(value, element) {
	return this.optional(element) ||
			($.validator.methods.bankaccountNL.call(this, value, element)) ||
			($.validator.methods.giroaccountNL.call(this, value, element));
***REMOVED***, "Please specify a valid bank or giro account number");

/**
 * BIC is the business identifier code (ISO 9362). This BIC check is not a guarantee for authenticity.
 *
 * BIC pattern: BBBBCCLLbbb (8 or 11 characters long; bbb is optional)
 *
 * BIC definition in detail:
 * - First 4 characters - bank code (only letters)
 * - Next 2 characters - ISO 3166-1 alpha-2 country code (only letters)
 * - Next 2 characters - location code (letters and digits)
 *   a. shall not start with '0' or '1'
 *   b. second character must be a letter ('O' is not allowed) or one of the following digits ('0' for test (therefore not allowed), '1' for passive participant and '2' for active participant)
 * - Last 3 characters - branch code, optional (shall not start with 'X' except in case of 'XXX' for primary office) (letters and digits)
 */
$.validator.addMethod("bic", function(value, element) {
    return this.optional( element ) || /^([A-Z]{6***REMOVED***[A-Z2-9][A-NP-Z1-2])(X{3***REMOVED***|[A-WY-Z0-9][A-Z0-9]{2***REMOVED***)?$/.test( value );
***REMOVED***, "Please specify a valid BIC code");

/*
 * Código de identificación fiscal ( CIF ) is the tax identification code for Spanish legal entities
 * Further rules can be found in Spanish on http://es.wikipedia.org/wiki/C%C3%B3digo_de_identificaci%C3%B3n_fiscal
 */
$.validator.addMethod( "cifES", function( value ) {
	"use strict";

	var num = [],
		controlDigit, sum, i, count, tmp, secondDigit;

	value = value.toUpperCase();

	// Quick format test
	if ( !value.match( "((^[A-Z]{1***REMOVED***[0-9]{7***REMOVED***[A-Z0-9]{1***REMOVED***$|^[T]{1***REMOVED***[A-Z0-9]{8***REMOVED***$)|^[0-9]{8***REMOVED***[A-Z]{1***REMOVED***$)" ) ) {
		return false;
	***REMOVED***

	for ( i = 0; i < 9; i++ ) {
		num[ i ] = parseInt( value.charAt( i ), 10 );
	***REMOVED***

	// Algorithm for checking CIF codes
	sum = num[ 2 ] + num[ 4 ] + num[ 6 ];
	for ( count = 1; count < 8; count += 2 ) {
		tmp = ( 2 * num[ count ] ).toString();
		secondDigit = tmp.charAt( 1 );

		sum += parseInt( tmp.charAt( 0 ), 10 ) + ( secondDigit === "" ? 0 : parseInt( secondDigit, 10 ) );
	***REMOVED***

	/* The first (position 1) is a letter following the following criteria:
	 *	A. Corporations
	 *	B. LLCs
	 *	C. General partnerships
	 *	D. Companies limited partnerships
	 *	E. Communities of goods
	 *	F. Cooperative Societies
	 *	G. Associations
	 *	H. Communities of homeowners in horizontal property regime
	 *	J. Civil Societies
	 *	K. Old format
	 *	L. Old format
	 *	M. Old format
	 *	N. Nonresident entities
	 *	P. Local authorities
	 *	Q. Autonomous bodies, state or not, and the like, and congregations and religious institutions
	 *	R. Congregations and religious institutions (since 2008 ORDER EHA/451/2008)
	 *	S. Organs of State Administration and regions
	 *	V. Agrarian Transformation
	 *	W. Permanent establishments of non-resident in Spain
	 */
	if ( /^[ABCDEFGHJNPQRSUVW]{1***REMOVED***/.test( value ) ) {
		sum += "";
		controlDigit = 10 - parseInt( sum.charAt( sum.length - 1 ), 10 );
		value += controlDigit;
		return ( num[ 8 ].toString() === String.fromCharCode( 64 + controlDigit ) || num[ 8 ].toString() === value.charAt( value.length - 1 ) );
	***REMOVED***

	return false;

***REMOVED***, "Please specify a valid CIF number." );

/* NOTICE: Modified version of Castle.Components.Validator.CreditCardValidator
 * Redistributed under the the Apache License 2.0 at http://www.apache.org/licenses/LICENSE-2.0
 * Valid Types: mastercard, visa, amex, dinersclub, enroute, discover, jcb, unknown, all (overrides all other settings)
 */
$.validator.addMethod("creditcardtypes", function(value, element, param) {
	if (/[^0-9\-]+/.test(value)) {
		return false;
	***REMOVED***

	value = value.replace(/\D/g, "");

	var validTypes = 0x0000;

	if (param.mastercard) {
		validTypes |= 0x0001;
	***REMOVED***
	if (param.visa) {
		validTypes |= 0x0002;
	***REMOVED***
	if (param.amex) {
		validTypes |= 0x0004;
	***REMOVED***
	if (param.dinersclub) {
		validTypes |= 0x0008;
	***REMOVED***
	if (param.enroute) {
		validTypes |= 0x0010;
	***REMOVED***
	if (param.discover) {
		validTypes |= 0x0020;
	***REMOVED***
	if (param.jcb) {
		validTypes |= 0x0040;
	***REMOVED***
	if (param.unknown) {
		validTypes |= 0x0080;
	***REMOVED***
	if (param.all) {
		validTypes = 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0020 | 0x0040 | 0x0080;
	***REMOVED***
	if (validTypes & 0x0001 && /^(5[12345])/.test(value)) { //mastercard
		return value.length === 16;
	***REMOVED***
	if (validTypes & 0x0002 && /^(4)/.test(value)) { //visa
		return value.length === 16;
	***REMOVED***
	if (validTypes & 0x0004 && /^(3[47])/.test(value)) { //amex
		return value.length === 15;
	***REMOVED***
	if (validTypes & 0x0008 && /^(3(0[012345]|[68]))/.test(value)) { //dinersclub
		return value.length === 14;
	***REMOVED***
	if (validTypes & 0x0010 && /^(2(014|149))/.test(value)) { //enroute
		return value.length === 15;
	***REMOVED***
	if (validTypes & 0x0020 && /^(6011)/.test(value)) { //discover
		return value.length === 16;
	***REMOVED***
	if (validTypes & 0x0040 && /^(3)/.test(value)) { //jcb
		return value.length === 16;
	***REMOVED***
	if (validTypes & 0x0040 && /^(2131|1800)/.test(value)) { //jcb
		return value.length === 15;
	***REMOVED***
	if (validTypes & 0x0080) { //unknown
		return true;
	***REMOVED***
	return false;
***REMOVED***, "Please enter a valid credit card number.");

/**
 * Validates currencies with any given symbols by @jameslouiz
 * Symbols can be optional or required. Symbols required by default
 *
 * Usage examples:
 *  currency: ["£", false] - Use false for soft currency validation
 *  currency: ["$", false]
 *  currency: ["RM", false] - also works with text based symbols such as "RM" - Malaysia Ringgit etc
 *
 *  <input class="currencyInput" name="currencyInput">
 *
 * Soft symbol checking
 *  currencyInput: {
 *     currency: ["$", false]
 ****REMOVED***
 *
 * Strict symbol checking (default)
 *  currencyInput: {
 *     currency: "$"
 *     //OR
 *     currency: ["$", true]
 ****REMOVED***
 *
 * Multiple Symbols
 *  currencyInput: {
 *     currency: "$,£,¢"
 ****REMOVED***
 */
$.validator.addMethod("currency", function(value, element, param) {
    var isParamString = typeof param === "string",
        symbol = isParamString ? param : param[0],
        soft = isParamString ? true : param[1],
        regex;

    symbol = symbol.replace(/,/g, "");
    symbol = soft ? symbol + "]" : symbol + "]?";
    regex = "^[" + symbol + "([1-9]{1***REMOVED***[0-9]{0,2***REMOVED***(\\,[0-9]{3***REMOVED***)*(\\.[0-9]{0,2***REMOVED***)?|[1-9]{1***REMOVED***[0-9]{0,***REMOVED***(\\.[0-9]{0,2***REMOVED***)?|0(\\.[0-9]{0,2***REMOVED***)?|(\\.[0-9]{1,2***REMOVED***)?)$";
    regex = new RegExp(regex);
    return this.optional(element) || regex.test(value);

***REMOVED***, "Please specify a valid currency");

$.validator.addMethod("dateFA", function(value, element) {
	return this.optional(element) || /^[1-4]\d{3***REMOVED***\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(value);
***REMOVED***, "Please enter a correct date");

/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example $.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example $.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example $.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true***REMOVED***" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name $.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod("dateITA", function(value, element) {
	var check = false,
		re = /^\d{1,2***REMOVED***\/\d{1,2***REMOVED***\/\d{4***REMOVED***$/,
		adata, gg, mm, aaaa, xdata;
	if ( re.test(value)) {
		adata = value.split("/");
		gg = parseInt(adata[0], 10);
		mm = parseInt(adata[1], 10);
		aaaa = parseInt(adata[2], 10);
		xdata = new Date(aaaa, mm - 1, gg, 12, 0, 0, 0);
		if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth () === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
			check = true;
		***REMOVED*** else {
			check = false;
		***REMOVED***
	***REMOVED*** else {
		check = false;
	***REMOVED***
	return this.optional(element) || check;
***REMOVED***, "Please enter a correct date");

$.validator.addMethod("dateNL", function(value, element) {
	return this.optional(element) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(value);
***REMOVED***, "Please enter a correct date");

// Older "accept" file extension method. Old docs: http://docs.jquery.com/Plugins/Validation/Methods/accept
$.validator.addMethod("extension", function(value, element, param) {
	param = typeof param === "string" ? param.replace(/,/g, "|") : "png|jpe?g|gif";
	return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
***REMOVED***, $.validator.format("Please enter a value with a valid extension."));

/**
 * Dutch giro account numbers (not bank numbers) have max 7 digits
 */
$.validator.addMethod("giroaccountNL", function(value, element) {
	return this.optional(element) || /^[0-9]{1,7***REMOVED***$/.test(value);
***REMOVED***, "Please specify a valid giro account number");

/**
 * IBAN is the international bank account number.
 * It has a country - specific format, that is checked here too
 */
$.validator.addMethod("iban", function(value, element) {
	// some quick simple tests to prevent needless work
	if (this.optional(element)) {
		return true;
	***REMOVED***

	// remove spaces and to upper case
	var iban = value.replace(/ /g, "").toUpperCase(),
		ibancheckdigits = "",
		leadingZeroes = true,
		cRest = "",
		cOperator = "",
		countrycode, ibancheck, charAt, cChar, bbanpattern, bbancountrypatterns, ibanregexp, i, p;

	if (!(/^([a-zA-Z0-9]{4***REMOVED*** ){2,8***REMOVED***[a-zA-Z0-9]{1,4***REMOVED***|[a-zA-Z0-9]{12,34***REMOVED***$/.test(iban))) {
		return false;
	***REMOVED***

	// check the country code and find the country specific format
	countrycode = iban.substring(0, 2);
	bbancountrypatterns = {
		"AL": "\\d{8***REMOVED***[\\dA-Z]{16***REMOVED***",
		"AD": "\\d{8***REMOVED***[\\dA-Z]{12***REMOVED***",
		"AT": "\\d{16***REMOVED***",
		"AZ": "[\\dA-Z]{4***REMOVED***\\d{20***REMOVED***",
		"BE": "\\d{12***REMOVED***",
		"BH": "[A-Z]{4***REMOVED***[\\dA-Z]{14***REMOVED***",
		"BA": "\\d{16***REMOVED***",
		"BR": "\\d{23***REMOVED***[A-Z][\\dA-Z]",
		"BG": "[A-Z]{4***REMOVED***\\d{6***REMOVED***[\\dA-Z]{8***REMOVED***",
		"CR": "\\d{17***REMOVED***",
		"HR": "\\d{17***REMOVED***",
		"CY": "\\d{8***REMOVED***[\\dA-Z]{16***REMOVED***",
		"CZ": "\\d{20***REMOVED***",
		"DK": "\\d{14***REMOVED***",
		"DO": "[A-Z]{4***REMOVED***\\d{20***REMOVED***",
		"EE": "\\d{16***REMOVED***",
		"FO": "\\d{14***REMOVED***",
		"FI": "\\d{14***REMOVED***",
		"FR": "\\d{10***REMOVED***[\\dA-Z]{11***REMOVED***\\d{2***REMOVED***",
		"GE": "[\\dA-Z]{2***REMOVED***\\d{16***REMOVED***",
		"DE": "\\d{18***REMOVED***",
		"GI": "[A-Z]{4***REMOVED***[\\dA-Z]{15***REMOVED***",
		"GR": "\\d{7***REMOVED***[\\dA-Z]{16***REMOVED***",
		"GL": "\\d{14***REMOVED***",
		"GT": "[\\dA-Z]{4***REMOVED***[\\dA-Z]{20***REMOVED***",
		"HU": "\\d{24***REMOVED***",
		"IS": "\\d{22***REMOVED***",
		"IE": "[\\dA-Z]{4***REMOVED***\\d{14***REMOVED***",
		"IL": "\\d{19***REMOVED***",
		"IT": "[A-Z]\\d{10***REMOVED***[\\dA-Z]{12***REMOVED***",
		"KZ": "\\d{3***REMOVED***[\\dA-Z]{13***REMOVED***",
		"KW": "[A-Z]{4***REMOVED***[\\dA-Z]{22***REMOVED***",
		"LV": "[A-Z]{4***REMOVED***[\\dA-Z]{13***REMOVED***",
		"LB": "\\d{4***REMOVED***[\\dA-Z]{20***REMOVED***",
		"LI": "\\d{5***REMOVED***[\\dA-Z]{12***REMOVED***",
		"LT": "\\d{16***REMOVED***",
		"LU": "\\d{3***REMOVED***[\\dA-Z]{13***REMOVED***",
		"MK": "\\d{3***REMOVED***[\\dA-Z]{10***REMOVED***\\d{2***REMOVED***",
		"MT": "[A-Z]{4***REMOVED***\\d{5***REMOVED***[\\dA-Z]{18***REMOVED***",
		"MR": "\\d{23***REMOVED***",
		"MU": "[A-Z]{4***REMOVED***\\d{19***REMOVED***[A-Z]{3***REMOVED***",
		"MC": "\\d{10***REMOVED***[\\dA-Z]{11***REMOVED***\\d{2***REMOVED***",
		"MD": "[\\dA-Z]{2***REMOVED***\\d{18***REMOVED***",
		"ME": "\\d{18***REMOVED***",
		"NL": "[A-Z]{4***REMOVED***\\d{10***REMOVED***",
		"NO": "\\d{11***REMOVED***",
		"PK": "[\\dA-Z]{4***REMOVED***\\d{16***REMOVED***",
		"PS": "[\\dA-Z]{4***REMOVED***\\d{21***REMOVED***",
		"PL": "\\d{24***REMOVED***",
		"PT": "\\d{21***REMOVED***",
		"RO": "[A-Z]{4***REMOVED***[\\dA-Z]{16***REMOVED***",
		"SM": "[A-Z]\\d{10***REMOVED***[\\dA-Z]{12***REMOVED***",
		"SA": "\\d{2***REMOVED***[\\dA-Z]{18***REMOVED***",
		"RS": "\\d{18***REMOVED***",
		"SK": "\\d{20***REMOVED***",
		"SI": "\\d{15***REMOVED***",
		"ES": "\\d{20***REMOVED***",
		"SE": "\\d{20***REMOVED***",
		"CH": "\\d{5***REMOVED***[\\dA-Z]{12***REMOVED***",
		"TN": "\\d{20***REMOVED***",
		"TR": "\\d{5***REMOVED***[\\dA-Z]{17***REMOVED***",
		"AE": "\\d{3***REMOVED***\\d{16***REMOVED***",
		"GB": "[A-Z]{4***REMOVED***\\d{14***REMOVED***",
		"VG": "[\\dA-Z]{4***REMOVED***\\d{16***REMOVED***"
	***REMOVED***;

	bbanpattern = bbancountrypatterns[countrycode];
	// As new countries will start using IBAN in the
	// future, we only check if the countrycode is known.
	// This prevents false negatives, while almost all
	// false positives introduced by this, will be caught
	// by the checksum validation below anyway.
	// Strict checking should return FALSE for unknown
	// countries.
	if (typeof bbanpattern !== "undefined") {
		ibanregexp = new RegExp("^[A-Z]{2***REMOVED***\\d{2***REMOVED***" + bbanpattern + "$", "");
		if (!(ibanregexp.test(iban))) {
			return false; // invalid country specific format
		***REMOVED***
	***REMOVED***

	// now check the checksum, first convert to digits
	ibancheck = iban.substring(4, iban.length) + iban.substring(0, 4);
	for (i = 0; i < ibancheck.length; i++) {
		charAt = ibancheck.charAt(i);
		if (charAt !== "0") {
			leadingZeroes = false;
		***REMOVED***
		if (!leadingZeroes) {
			ibancheckdigits += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(charAt);
		***REMOVED***
	***REMOVED***

	// calculate the result of: ibancheckdigits % 97
	for (p = 0; p < ibancheckdigits.length; p++) {
		cChar = ibancheckdigits.charAt(p);
		cOperator = "" + cRest + "" + cChar;
		cRest = cOperator % 97;
	***REMOVED***
	return cRest === 1;
***REMOVED***, "Please specify a valid IBAN");

$.validator.addMethod("integer", function(value, element) {
	return this.optional(element) || /^-?\d+$/.test(value);
***REMOVED***, "A positive or negative non-decimal number please");

$.validator.addMethod("ipv4", function(value, element) {
	return this.optional(element) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(value);
***REMOVED***, "Please enter a valid IP v4 address.");

$.validator.addMethod("ipv6", function(value, element) {
	return this.optional(element) || /^((([0-9A-Fa-f]{1,4***REMOVED***:){7***REMOVED***[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){6***REMOVED***:[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){5***REMOVED***:([0-9A-Fa-f]{1,4***REMOVED***:)?[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){4***REMOVED***:([0-9A-Fa-f]{1,4***REMOVED***:){0,2***REMOVED***[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){3***REMOVED***:([0-9A-Fa-f]{1,4***REMOVED***:){0,3***REMOVED***[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){2***REMOVED***:([0-9A-Fa-f]{1,4***REMOVED***:){0,4***REMOVED***[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){6***REMOVED***((\b((25[0-5])|(1\d{2***REMOVED***)|(2[0-4]\d)|(\d{1,2***REMOVED***))\b)\.){3***REMOVED***(\b((25[0-5])|(1\d{2***REMOVED***)|(2[0-4]\d)|(\d{1,2***REMOVED***))\b))|(([0-9A-Fa-f]{1,4***REMOVED***:){0,5***REMOVED***:((\b((25[0-5])|(1\d{2***REMOVED***)|(2[0-4]\d)|(\d{1,2***REMOVED***))\b)\.){3***REMOVED***(\b((25[0-5])|(1\d{2***REMOVED***)|(2[0-4]\d)|(\d{1,2***REMOVED***))\b))|(::([0-9A-Fa-f]{1,4***REMOVED***:){0,5***REMOVED***((\b((25[0-5])|(1\d{2***REMOVED***)|(2[0-4]\d)|(\d{1,2***REMOVED***))\b)\.){3***REMOVED***(\b((25[0-5])|(1\d{2***REMOVED***)|(2[0-4]\d)|(\d{1,2***REMOVED***))\b))|([0-9A-Fa-f]{1,4***REMOVED***::([0-9A-Fa-f]{1,4***REMOVED***:){0,5***REMOVED***[0-9A-Fa-f]{1,4***REMOVED***)|(::([0-9A-Fa-f]{1,4***REMOVED***:){0,6***REMOVED***[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){1,7***REMOVED***:))$/i.test(value);
***REMOVED***, "Please enter a valid IP v6 address.");

$.validator.addMethod("lettersonly", function(value, element) {
	return this.optional(element) || /^[a-z]+$/i.test(value);
***REMOVED***, "Letters only please");

$.validator.addMethod("letterswithbasicpunc", function(value, element) {
	return this.optional(element) || /^[a-z\-.,()'"\s]+$/i.test(value);
***REMOVED***, "Letters or punctuation only please");

$.validator.addMethod("mobileNL", function(value, element) {
	return this.optional(element) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8***REMOVED***$/.test(value);
***REMOVED***, "Please specify a valid mobile number");

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4***REMOVED***\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod("mobileUK", function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2***REMOVED***|624)\s?\d{3***REMOVED***\s?\d{3***REMOVED***)$/);
***REMOVED***, "Please specify a valid mobile number");

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

$.validator.addMethod("nowhitespace", function(value, element) {
	return this.optional(element) || /^\S+$/i.test(value);
***REMOVED***, "No white space please");

/**
* Return true if the field value matches the given format RegExp
*
* @example $.validator.methods.pattern("AR1004",element,/^AR\d{4***REMOVED***$/)
* @result true
*
* @example $.validator.methods.pattern("BR1004",element,/^AR\d{4***REMOVED***$/)
* @result false
*
* @name $.validator.methods.pattern
* @type Boolean
* @cat Plugins/Validate/Methods
*/
$.validator.addMethod("pattern", function(value, element, param) {
	if (this.optional(element)) {
		return true;
	***REMOVED***
	if (typeof param === "string") {
		param = new RegExp("^(?:" + param + ")$");
	***REMOVED***
	return param.test(value);
***REMOVED***, "Invalid format.");

/**
 * Dutch phone numbers have 10 digits (or 11 and start with +31).
 */
$.validator.addMethod("phoneNL", function(value, element) {
	return this.optional(element) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8***REMOVED***$/.test(value);
***REMOVED***, "Please specify a valid phone number.");

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4***REMOVED***\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
$.validator.addMethod("phoneUK", function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2***REMOVED***\)?\s?\d{4***REMOVED***\s?\d{4***REMOVED***|\d{3***REMOVED***\)?\s?\d{3***REMOVED***\s?\d{3,4***REMOVED***|\d{4***REMOVED***\)?\s?(?:\d{5***REMOVED***|\d{3***REMOVED***\s?\d{3***REMOVED***)|\d{5***REMOVED***\)?\s?\d{4,5***REMOVED***)$/);
***REMOVED***, "Please specify a valid phone number");

/**
 * matches US phone number format
 *
 * where the area code may not start with 1 and the prefix may not start with 1
 * allows '-' or ' ' as a separator and allows parens around area code
 * some people may want to put a '1' in front of their number
 *
 * 1(212)-999-2345 or
 * 212 999 2344 or
 * 212-999-0983
 *
 * but not
 * 111-123-5434
 * and not
 * 212 123 4567
 */
$.validator.addMethod("phoneUS", function(phone_number, element) {
	phone_number = phone_number.replace(/\s+/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4***REMOVED***$/);
***REMOVED***, "Please specify a valid phone number");

/* For UK phone functions, do the following server side processing:
 * Compare original input with this RegEx pattern:
 * ^\(?(?:(?:00\)?[\s\-]?\(?|\+)(44)\)?[\s\-]?\(?(?:0\)?[\s\-]?\(?)?|0)([1-9]\d{1,4***REMOVED***\)?[\s\d\-]+)$
 * Extract $1 and set $prefix to '+44<space>' if $1 is '44', otherwise set $prefix to '0'
 * Extract $2 and remove hyphens, spaces and parentheses. Phone number is combined $prefix and $2.
 * A number of very detailed GB telephone number RegEx patterns can also be found at:
 * http://www.aa-asterisk.org.uk/index.php/Regular_Expressions_for_Validating_and_Formatting_GB_Telephone_Numbers
 */
//Matches UK landline + mobile, accepting only 01-3 for landline or 07 for mobile to exclude many premium numbers
$.validator.addMethod("phonesUK", function(phone_number, element) {
	phone_number = phone_number.replace(/\(|\)|\s+|-/g, "");
	return this.optional(element) || phone_number.length > 9 &&
		phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9***REMOVED***|[23]\d{9***REMOVED***|7(?:[1345789]\d{8***REMOVED***|624\d{6***REMOVED***)))$/);
***REMOVED***, "Please specify a valid uk phone number");

/**
 * Matches a valid Canadian Postal Code
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H 0H0", element )
 * @result true
 *
 * @example jQuery.validator.methods.postalCodeCA( "H0H0H0", element )
 * @result false
 *
 * @name jQuery.validator.methods.postalCodeCA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod( "postalCodeCA", function( value, element ) {
	return this.optional( element ) || /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test( value );
***REMOVED***, "Please specify a valid postal code" );

/*
* Valida CEPs do brasileiros:
*
* Formatos aceitos:
* 99999-999
* 99.999-999
* 99999999
*/
$.validator.addMethod("postalcodeBR", function(cep_value, element) {
	return this.optional(element) || /^\d{2***REMOVED***.\d{3***REMOVED***-\d{3***REMOVED***?$|^\d{5***REMOVED***-?\d{3***REMOVED***?$/.test( cep_value );
***REMOVED***, "Informe um CEP válido.");

/* Matches Italian postcode (CAP) */
$.validator.addMethod("postalcodeIT", function(value, element) {
	return this.optional(element) || /^\d{5***REMOVED***$/.test(value);
***REMOVED***, "Please specify a valid postal code");

$.validator.addMethod("postalcodeNL", function(value, element) {
	return this.optional(element) || /^[1-9][0-9]{3***REMOVED***\s?[a-zA-Z]{2***REMOVED***$/.test(value);
***REMOVED***, "Please specify a valid postal code");

// Matches UK postcode. Does not match to UK Channel Islands that have their own postcodes (non standard UK)
$.validator.addMethod("postcodeUK", function(value, element) {
	return this.optional(element) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2***REMOVED***)|(GIR)\s?(0AA))$/i.test(value);
***REMOVED***, "Please specify a valid UK postcode");

/*
 * Lets you say "at least X inputs that match selector Y must be filled."
 *
 * The end result is that neither of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *
 *	...will validate unless at least one of them is filled.
 *
 * partnumber:	{require_from_group: [1,".productinfo"]***REMOVED***,
 * description: {require_from_group: [1,".productinfo"]***REMOVED***
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 */
$.validator.addMethod("require_from_group", function(value, element, options) {
	var $fields = $(options[1], element.form),
		$fieldsFirst = $fields.eq(0),
		validator = $fieldsFirst.data("valid_req_grp") ? $fieldsFirst.data("valid_req_grp") : $.extend({***REMOVED***, this),
		isValid = $fields.filter(function() {
			return validator.elementValue(this);
		***REMOVED***).length >= options[0];

	// Store the cloned validator for future validation
	$fieldsFirst.data("valid_req_grp", validator);

	// If element isn't being validated, run each require_from_group field's validation rules
	if (!$(element).data("being_validated")) {
		$fields.data("being_validated", true);
		$fields.each(function() {
			validator.element(this);
		***REMOVED***);
		$fields.data("being_validated", false);
	***REMOVED***
	return isValid;
***REMOVED***, $.validator.format("Please fill at least {0***REMOVED*** of these fields."));

/*
 * Lets you say "either at least X inputs that match selector Y must be filled,
 * OR they must all be skipped (left blank)."
 *
 * The end result, is that none of these inputs:
 *
 *	<input class="productinfo" name="partnumber">
 *	<input class="productinfo" name="description">
 *	<input class="productinfo" name="color">
 *
 *	...will validate unless either at least two of them are filled,
 *	OR none of them are.
 *
 * partnumber:	{skip_or_fill_minimum: [2,".productinfo"]***REMOVED***,
 * description: {skip_or_fill_minimum: [2,".productinfo"]***REMOVED***,
 * color:		{skip_or_fill_minimum: [2,".productinfo"]***REMOVED***
 *
 * options[0]: number of fields that must be filled in the group
 * options[1]: CSS selector that defines the group of conditionally required fields
 *
 */
$.validator.addMethod("skip_or_fill_minimum", function(value, element, options) {
	var $fields = $(options[1], element.form),
		$fieldsFirst = $fields.eq(0),
		validator = $fieldsFirst.data("valid_skip") ? $fieldsFirst.data("valid_skip") : $.extend({***REMOVED***, this),
		numberFilled = $fields.filter(function() {
			return validator.elementValue(this);
		***REMOVED***).length,
		isValid = numberFilled === 0 || numberFilled >= options[0];

	// Store the cloned validator for future validation
	$fieldsFirst.data("valid_skip", validator);

	// If element isn't being validated, run each skip_or_fill_minimum field's validation rules
	if (!$(element).data("being_validated")) {
		$fields.data("being_validated", true);
		$fields.each(function() {
			validator.element(this);
		***REMOVED***);
		$fields.data("being_validated", false);
	***REMOVED***
	return isValid;
***REMOVED***, $.validator.format("Please either skip these fields or fill at least {0***REMOVED*** of them."));

/* Validates US States and/or Territories by @jdforsythe
 * Can be case insensitive or require capitalization - default is case insensitive
 * Can include US Territories or not - default does not
 * Can include US Military postal abbreviations (AA, AE, AP) - default does not
 *
 * Note: "States" always includes DC (District of Colombia)
 *
 * Usage examples:
 *
 *  This is the default - case insensitive, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false,
 *     includeTerritories: false,
 *     includeMilitary: false
 ****REMOVED***
 *
 *  Only allow capital letters, no territories, no military zones
 *  stateInput: {
 *     caseSensitive: false
 ****REMOVED***
 *
 *  Case insensitive, include territories but not military zones
 *  stateInput: {
 *     includeTerritories: true
 ****REMOVED***
 *
 *  Only allow capital letters, include territories and military zones
 *  stateInput: {
 *     caseSensitive: true,
 *     includeTerritories: true,
 *     includeMilitary: true
 ****REMOVED***
 *
 *
 *
 */

jQuery.validator.addMethod("stateUS", function(value, element, options) {
	var isDefault = typeof options === "undefined",
		caseSensitive = ( isDefault || typeof options.caseSensitive === "undefined" ) ? false : options.caseSensitive,
		includeTerritories = ( isDefault || typeof options.includeTerritories === "undefined" ) ? false : options.includeTerritories,
		includeMilitary = ( isDefault || typeof options.includeMilitary === "undefined" ) ? false : options.includeMilitary,
		regex;

	if (!includeTerritories && !includeMilitary) {
		regex = "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	***REMOVED*** else if (includeTerritories && includeMilitary) {
		regex = "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	***REMOVED*** else if (includeTerritories) {
		regex = "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$";
	***REMOVED*** else {
		regex = "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$";
	***REMOVED***

	regex = caseSensitive ? new RegExp(regex) : new RegExp(regex, "i");
	return this.optional(element) || regex.test(value);
***REMOVED***,
"Please specify a valid state");

// TODO check if value starts with <, otherwise don't try stripping anything
$.validator.addMethod("strippedminlength", function(value, element, param) {
	return $(value).text().length >= param;
***REMOVED***, $.validator.format("Please enter at least {0***REMOVED*** characters"));

$.validator.addMethod("time", function(value, element) {
	return this.optional(element) || /^([01]\d|2[0-3])(:[0-5]\d){1,2***REMOVED***$/.test(value);
***REMOVED***, "Please enter a valid time, between 00:00 and 23:59");

$.validator.addMethod("time12h", function(value, element) {
	return this.optional(element) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2***REMOVED***(\ ?[AP]M))$/i.test(value);
***REMOVED***, "Please enter a valid time in 12-hour am/pm format");

// same as url, but TLD is optional
$.validator.addMethod("url2", function(value, element) {
	return this.optional(element) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2***REMOVED***)|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2***REMOVED***)|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2***REMOVED***)|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2***REMOVED***)|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2***REMOVED***)|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
***REMOVED***, $.validator.messages.url);

/**
 * Return true, if the value is a valid vehicle identification number (VIN).
 *
 * Works with all kind of text inputs.
 *
 * @example <input type="text" size="20" name="VehicleID" class="{required:true,vinUS:true***REMOVED***" />
 * @desc Declares a required input element whose value must be a valid vehicle identification number.
 *
 * @name $.validator.methods.vinUS
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod("vinUS", function(v) {
	if (v.length !== 17) {
		return false;
	***REMOVED***

	var LL = [ "A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
		VL = [ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9 ],
		FL = [ 8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2 ],
		rs = 0,
		i, n, d, f, cd, cdv;

	for (i = 0; i < 17; i++) {
		f = FL[i];
		d = v.slice(i, i + 1);
		if (i === 8) {
			cdv = d;
		***REMOVED***
		if (!isNaN(d)) {
			d *= f;
		***REMOVED*** else {
			for (n = 0; n < LL.length; n++) {
				if (d.toUpperCase() === LL[n]) {
					d = VL[n];
					d *= f;
					if (isNaN(cdv) && n === 8) {
						cdv = LL[n];
					***REMOVED***
					break;
				***REMOVED***
			***REMOVED***
		***REMOVED***
		rs += d;
	***REMOVED***
	cd = rs % 11;
	if (cd === 10) {
		cd = "X";
	***REMOVED***
	if (cd === cdv) {
		return true;
	***REMOVED***
	return false;
***REMOVED***, "The specified vehicle identification number (VIN) is invalid.");

$.validator.addMethod("zipcodeUS", function(value, element) {
	return this.optional(element) || /^\d{5***REMOVED***(-\d{4***REMOVED***)?$/.test(value);
***REMOVED***, "The specified US ZIP Code is invalid");

$.validator.addMethod("ziprange", function(value, element) {
	return this.optional(element) || /^90[2-5]\d\{2\***REMOVED***-\d{4***REMOVED***$/.test(value);
***REMOVED***, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx");

***REMOVED***));