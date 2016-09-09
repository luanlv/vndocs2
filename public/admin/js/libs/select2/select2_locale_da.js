/**
 * Select2 Danish translation.
 *
 * Author: Anders Jenbo <anders@jenbo.dk>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['da'] = {
        formatNoMatches: function () { return "Ingen resultater fundet"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Angiv venligst " + n + " tegn mere"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Angiv venligst " + n + " tegn mindre"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Du kan kun vælge " + limit + " emne" + (limit === 1 ? "" : "r"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Indlæser flere resultater…"; ***REMOVED***,
        formatSearching: function () { return "Søger…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['da']);
***REMOVED***)(jQuery);
