$.validator.addMethod("zipcodeUS", function(value, element) {
	return this.optional(element) || /^\d{5***REMOVED***(-\d{4***REMOVED***)?$/.test(value);
***REMOVED***, "The specified US ZIP Code is invalid");
