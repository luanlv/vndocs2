/**
 * Select2 Bulgarian translation.
 * 
 * @author  Lubomir Vikev <lubomirvikev@gmail.com>
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['bg'] = {
        formatNoMatches: function () { return "Няма намерени съвпадения"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Моля въведете още " + n + " символ" + (n > 1 ? "а" : ""); ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Моля въведете с " + n + " по-малко символ" + (n > 1 ? "а" : ""); ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Можете да направите до " + limit + (limit > 1 ? " избора" : " избор"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Зареждат се още…"; ***REMOVED***,
        formatSearching: function () { return "Търсене…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['bg']);
***REMOVED***)(jQuery);
