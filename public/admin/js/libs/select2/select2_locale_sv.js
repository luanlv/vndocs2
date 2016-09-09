/**
 * Select2 Swedish translation.
 *
 * Author: Jens Rantil <jens.rantil@telavox.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['sv'] = {
        formatNoMatches: function () { return "Inga träffar"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Var god skriv in " + n + (n>1 ? " till tecken" : " tecken till"); ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Var god sudda ut " + n + " tecken"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Du kan max välja " + limit + " element"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Laddar fler resultat…"; ***REMOVED***,
        formatSearching: function () { return "Söker…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['sv']);
***REMOVED***)(jQuery);
