/**
 * Select2 Romanian translation.
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ro'] = {
        formatNoMatches: function () { return "Nu a fost găsit nimic"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Vă rugăm să introduceți incă " + n + " caracter" + (n == 1 ? "" : "e"); ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Vă rugăm să introduceți mai puțin de " + n + " caracter" + (n == 1? "" : "e"); ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Aveți voie să selectați cel mult " + limit + " element" + (limit == 1 ? "" : "e"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Se încarcă…"; ***REMOVED***,
        formatSearching: function () { return "Căutare…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ro']);
***REMOVED***)(jQuery);
