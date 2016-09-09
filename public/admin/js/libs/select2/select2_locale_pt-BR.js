/**
 * Select2 Brazilian Portuguese translation
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['pt-BR'] = {
        formatNoMatches: function () { return "Nenhum resultado encontrado"; ***REMOVED***,
        formatAjaxError: function () { return "Erro na busca"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Digite " + (min == 1 ? "" : "mais") + " " + n + " caracter" + (n == 1? "" : "es"); ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Apague " + n + " caracter" + (n == 1? "" : "es"); ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Só é possível selecionar " + limit + " elemento" + (limit == 1 ? "" : "s"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Carregando mais resultados…"; ***REMOVED***,
        formatSearching: function () { return "Buscando…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['pt-BR']);
***REMOVED***)(jQuery);
