/**
 * Select2 Portuguese (Portugal) translation
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['pt-PT'] = {
        formatNoMatches: function () { return "Nenhum resultado encontrado"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Introduza " + n + " car" + (n == 1 ? "ácter" : "acteres"); ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Apague " + n + " car" + (n == 1 ? "ácter" : "acteres"); ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Só é possível selecionar " + limit + " elemento" + (limit == 1 ? "" : "s"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "A carregar mais resultados…"; ***REMOVED***,
        formatSearching: function () { return "A pesquisar…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['pt-PT']);
***REMOVED***)(jQuery);
