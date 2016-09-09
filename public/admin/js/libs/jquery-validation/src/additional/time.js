$.validator.addMethod("time", function(value, element) {
	return this.optional(element) || /^([01]\d|2[0-3])(:[0-5]\d){1,2***REMOVED***$/.test(value);
***REMOVED***, "Please enter a valid time, between 00:00 and 23:59");
