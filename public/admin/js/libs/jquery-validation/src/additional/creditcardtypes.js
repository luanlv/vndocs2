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
