/**
 * Select2 German translation
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['de'] = {
        formatNoMatches: function () { return "Keine Übereinstimmungen gefunden"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Bitte " + n + " Zeichen mehr eingeben"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Bitte " + n + " Zeichen weniger eingeben"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Sie können nur " + limit + " Eintr" + (limit === 1 ? "ag" : "äge") + " auswählen"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Lade mehr Ergebnisse…"; ***REMOVED***,
        formatSearching: function () { return "Suche…"; ***REMOVED***,
        formatMatches: function (matches) { return matches + " Ergebnis " + (matches > 1 ? "se" : "") + " verfügbar, zum Navigieren die Hoch-/Runter-Pfeiltasten verwenden."; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['de']);
***REMOVED***)(jQuery);