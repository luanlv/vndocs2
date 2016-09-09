/**
 * Select2 Malay translation.
 * 
 * Author: Kepoweran <kepoweran@gmail.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ms'] = {
        formatNoMatches: function () { return "Tiada padanan yang ditemui"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Sila masukkan " + n + " aksara lagi"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Sila hapuskan " + n + " aksara"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Anda hanya boleh memilih " + limit + " pilihan"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Sedang memuatkan keputusan…"; ***REMOVED***,
        formatSearching: function () { return "Mencari…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ms']);
***REMOVED***)(jQuery);
