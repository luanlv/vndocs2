$.validator.addMethod("ziprange", function(value, element) {
	return this.optional(element) || /^90[2-5]\d\{2\***REMOVED***-\d{4***REMOVED***$/.test(value);
***REMOVED***, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx");
