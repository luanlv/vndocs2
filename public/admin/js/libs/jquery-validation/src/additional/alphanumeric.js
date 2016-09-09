$.validator.addMethod("alphanumeric", function(value, element) {
	return this.optional(element) || /^\w+$/i.test(value);
***REMOVED***, "Letters, numbers, and underscores only please");
