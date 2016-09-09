/**
 * Dutch giro account numbers (not bank numbers) have max 7 digits
 */
$.validator.addMethod("giroaccountNL", function(value, element) {
	return this.optional(element) || /^[0-9]{1,7***REMOVED***$/.test(value);
***REMOVED***, "Please specify a valid giro account number");
