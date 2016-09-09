/**
 * Return true, if the value is a valid date, also making this formal check dd/mm/yyyy.
 *
 * @example $.validator.methods.date("01/01/1900")
 * @result true
 *
 * @example $.validator.methods.date("01/13/1990")
 * @result false
 *
 * @example $.validator.methods.date("01.01.1900")
 * @result false
 *
 * @example <input name="pippo" class="{dateITA:true***REMOVED***" />
 * @desc Declares an optional input element whose value must be a valid date.
 *
 * @name $.validator.methods.dateITA
 * @type Boolean
 * @cat Plugins/Validate/Methods
 */
$.validator.addMethod("dateITA", function(value, element) {
	var check = false,
		re = /^\d{1,2***REMOVED***\/\d{1,2***REMOVED***\/\d{4***REMOVED***$/,
		adata, gg, mm, aaaa, xdata;
	if ( re.test(value)) {
		adata = value.split("/");
		gg = parseInt(adata[0], 10);
		mm = parseInt(adata[1], 10);
		aaaa = parseInt(adata[2], 10);
		xdata = new Date(aaaa, mm - 1, gg, 12, 0, 0, 0);
		if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth () === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
			check = true;
		***REMOVED*** else {
			check = false;
		***REMOVED***
	***REMOVED*** else {
		check = false;
	***REMOVED***
	return this.optional(element) || check;
***REMOVED***, "Please enter a correct date");
