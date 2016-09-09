/* Matches Italian postcode (CAP) */
$.validator.addMethod("postalcodeIT", function(value, element) {
	return this.optional(element) || /^\d{5***REMOVED***$/.test(value);
***REMOVED***, "Please specify a valid postal code");
