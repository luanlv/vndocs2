/**
 * Select2 Hungarian translation
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['hu'] = {
        formatNoMatches: function () { return "Nincs találat."; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Túl rövid. Még " + n + " karakter hiányzik."; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Túl hosszú. " + n + " karakterrel több, mint kellene."; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Csak " + limit + " elemet lehet kiválasztani."; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Töltés…"; ***REMOVED***,
        formatSearching: function () { return "Keresés…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['hu']);
***REMOVED***)(jQuery);
