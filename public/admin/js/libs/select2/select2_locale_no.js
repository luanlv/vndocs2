/**
 * Select2 Norwegian translation.
 *
 * Author: Torgeir Veimo <torgeir.veimo@gmail.com>
 */
(function ($) {
    "use strict";

    $.extend($.fn.select2.defaults, {
        formatNoMatches: function () { return "Ingen treff"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Vennligst skriv inn " + n + (n>1 ? " flere tegn" : " tegn til"); ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Vennligst fjern " + n + " tegn"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Du kan velge maks " + limit + " elementer"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Laster flere resultater..."; ***REMOVED***,
        formatSearching: function () { return "Søker..."; ***REMOVED***
  ***REMOVED***);
***REMOVED***)(jQuery);

