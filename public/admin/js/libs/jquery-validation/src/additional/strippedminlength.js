// TODO check if value starts with <, otherwise don't try stripping anything
$.validator.addMethod("strippedminlength", function(value, element, param) {
	return $(value).text().length >= param;
***REMOVED***, $.validator.format("Please enter at least {0***REMOVED*** characters"));
