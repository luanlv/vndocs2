/**
 * Select2 Italian translation
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['it'] = {
        formatNoMatches: function () { return "Nessuna corrispondenza trovata"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Inserisci ancora " + n + " caratter" + (n == 1? "e" : "i"); ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Inserisci " + n + " caratter" + (n == 1? "e" : "i") + " in meno"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Puoi selezionare solo " + limit + " element" + (limit == 1 ? "o" : "i"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Caricamento in corso…"; ***REMOVED***,
        formatSearching: function () { return "Ricerca…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['it']);
***REMOVED***)(jQuery);