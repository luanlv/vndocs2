/**
 * Select2 Norwegian Bokmål translation.
 *
 * Author: Torgeir Veimo <torgeir.veimo@gmail.com>
 * Author: Bjørn Johansen <post@bjornjohansen.no>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['nb'] = {
        formatMatches: function (matches) { if (matches === 1) { return "Ett resultat er tilgjengelig, trykk enter for å velge det."; ***REMOVED*** return matches + " resultater er tilgjengelig. Bruk piltastene opp og ned for å navigere."; ***REMOVED***,
        formatNoMatches: function () { return "Ingen treff"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Vennligst skriv inn " + n + (n>1 ? " flere tegn" : " tegn til"); ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Vennligst fjern " + n + " tegn"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Du kan velge maks " + limit + " elementer"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Laster flere resultater …"; ***REMOVED***,
        formatSearching: function () { return "Søker …"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['no']);
***REMOVED***)(jQuery);

