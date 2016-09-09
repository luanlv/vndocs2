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
