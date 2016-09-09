$.validator.addMethod("postalcodeNL", function(value, element) {
	return this.optional(element) || /^[1-9][0-9]{3***REMOVED***\s?[a-zA-Z]{2***REMOVED***$/.test(value);
***REMOVED***, "Please specify a valid postal code");
