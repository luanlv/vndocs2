/**
 * Validates currencies with any given symbols by @jameslouiz
 * Symbols can be optional or required. Symbols required by default
 *
 * Usage examples:
 *  currency: ["£", false] - Use false for soft currency validation
 *  currency: ["$", false]
 *  currency: ["RM", false] - also works with text based symbols such as "RM" - Malaysia Ringgit etc
 *
 *  <input class="currencyInput" name="currencyInput">
 *
 * Soft symbol checking
 *  currencyInput: {
 *     currency: ["$", false]
 ****REMOVED***
 *
 * Strict symbol checking (default)
 *  currencyInput: {
 *     currency: "$"
 *     //OR
 *     currency: ["$", true]
 ****REMOVED***
 *
 * Multiple Symbols
 *  currencyInput: {
 *     currency: "$,£,¢"
 ****REMOVED***
 */
$.validator.addMethod("currency", function(value, element, param) {
    var isParamString = typeof param === "string",
        symbol = isParamString ? param : param[0],
        soft = isParamString ? true : param[1],
        regex;

    symbol = symbol.replace(/,/g, "");
    symbol = soft ? symbol + "]" : symbol + "]?";
    regex = "^[" + symbol + "([1-9]{1***REMOVED***[0-9]{0,2***REMOVED***(\\,[0-9]{3***REMOVED***)*(\\.[0-9]{0,2***REMOVED***)?|[1-9]{1***REMOVED***[0-9]{0,***REMOVED***(\\.[0-9]{0,2***REMOVED***)?|0(\\.[0-9]{0,2***REMOVED***)?|(\\.[0-9]{1,2***REMOVED***)?)$";
    regex = new RegExp(regex);
    return this.optional(element) || regex.test(value);

***REMOVED***, "Please specify a valid currency");
