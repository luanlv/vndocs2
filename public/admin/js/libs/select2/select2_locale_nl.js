/**
 * Select2 Dutch translation
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['nl'] = {
        formatNoMatches: function () { return "Geen resultaten gevonden"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Vul nog " + n + " karakter" + (n == 1? "" : "s") + " in"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Haal " + n + " karakter" + (n == 1? "" : "s") + " weg"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Maximaal " + limit + " item" + (limit == 1 ? "" : "s") + " toegestaan"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Meer resultaten laden…"; ***REMOVED***,
        formatSearching: function () { return "Zoeken…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['nl']);
***REMOVED***)(jQuery);
