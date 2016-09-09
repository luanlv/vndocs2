/**
 * Select2 Catalan translation.
 * 
 * Author: David Planella <david.planella@gmail.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ca'] = {
        formatNoMatches: function () { return "No s'ha trobat cap coincidència"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Introduïu " + n + " caràcter" + (n == 1 ? "" : "s") + " més"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Introduïu " + n + " caràcter" + (n == 1? "" : "s") + "menys"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Només podeu seleccionar " + limit + " element" + (limit == 1 ? "" : "s"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "S'estan carregant més resultats…"; ***REMOVED***,
        formatSearching: function () { return "S'està cercant…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ca']);
***REMOVED***)(jQuery);
