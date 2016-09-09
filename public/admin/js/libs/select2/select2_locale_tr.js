/**
 * Select2 Turkish translation.
 * 
 * Author: Salim KAYABAŞI <salim.kayabasi@gmail.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['tr'] = {
        formatNoMatches: function () { return "Sonuç bulunamadı"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "En az " + n + " karakter daha girmelisiniz"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return n + " karakter azaltmalısınız"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Sadece " + limit + " seçim yapabilirsiniz"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Daha fazla…"; ***REMOVED***,
        formatSearching: function () { return "Aranıyor…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['tr']);
***REMOVED***)(jQuery);
