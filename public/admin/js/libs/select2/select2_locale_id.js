/**
 * Select2 Indonesian translation.
 * 
 * Author: Ibrahim Yusuf <ibrahim7usuf@gmail.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['id'] = {
        formatNoMatches: function () { return "Tidak ada data yang sesuai"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Masukkan " + n + " huruf lagi" + (n == 1 ? "" : "s"); ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Hapus " + n + " huruf" + (n == 1 ? "" : "s"); ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Anda hanya dapat memilih " + limit + " pilihan" + (limit == 1 ? "" : "s"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Mengambil data…"; ***REMOVED***,
        formatSearching: function () { return "Mencari…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['id']);
***REMOVED***)(jQuery);
