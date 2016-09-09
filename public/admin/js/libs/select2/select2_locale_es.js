/**
 * Select2 Spanish translation
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['es'] = {
    	formatMatches: function (matches) { if (matches === 1) { return "Un resultado disponible, presione enter para seleccionarlo."; ***REMOVED*** return matches + " resultados disponibles, use las teclas de dirección para navegar."; ***REMOVED***,
        formatNoMatches: function () { return "No se encontraron resultados"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Por favor, introduzca " + n + " car" + (n == 1? "ácter" : "acteres"); ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Por favor, elimine " + n + " car" + (n == 1? "ácter" : "acteres"); ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Sólo puede seleccionar " + limit + " elemento" + (limit == 1 ? "" : "s"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Cargando más resultados…"; ***REMOVED***,
        formatSearching: function () { return "Buscando…"; ***REMOVED***,
        formatAjaxError: function() { return "La carga falló"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['es']);
***REMOVED***)(jQuery);
