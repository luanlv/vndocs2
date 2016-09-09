/**
 * Select2 Galician translation
 * 
 * Author: Leandro Regueiro <leandro.regueiro@gmail.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['gl'] = {
        formatNoMatches: function () {
            return "Non se atoparon resultados";
      ***REMOVED***,
        formatInputTooShort: function (input, min) {
            var n = min - input.length;
            if (n === 1) {
                return "Engada un carácter";
          ***REMOVED*** else {
                return "Engada " + n + " caracteres";
          ***REMOVED***
      ***REMOVED***,
        formatInputTooLong: function (input, max) {
            var n = input.length - max;
            if (n === 1) {
                return "Elimine un carácter";
          ***REMOVED*** else {
                return "Elimine " + n + " caracteres";
          ***REMOVED***
      ***REMOVED***,
        formatSelectionTooBig: function (limit) {
            if (limit === 1 ) {
                return "Só pode seleccionar un elemento";
          ***REMOVED*** else {
                return "Só pode seleccionar " + limit + " elementos";
          ***REMOVED***
      ***REMOVED***,
        formatLoadMore: function (pageNumber) {
            return "Cargando máis resultados…";
      ***REMOVED***,
        formatSearching: function () {
            return "Buscando…";
      ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['gl']);
***REMOVED***)(jQuery);
