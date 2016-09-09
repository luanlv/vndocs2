/*
* Valida CEPs do brasileiros:
*
* Formatos aceitos:
* 99999-999
* 99.999-999
* 99999999
*/
$.validator.addMethod("postalcodeBR", function(cep_value, element) {
	return this.optional(element) || /^\d{2***REMOVED***.\d{3***REMOVED***-\d{3***REMOVED***?$|^\d{5***REMOVED***-?\d{3***REMOVED***?$/.test( cep_value );
***REMOVED***, "Informe um CEP válido.");
