/**
 * Select2 Russian translation.
 *
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ru'] = {
        formatNoMatches: function () { return "Совпадений не найдено"; ***REMOVED***,
        formatInputTooShort: function (input, min) { return "Пожалуйста, введите еще хотя бы" + character(min - input.length); ***REMOVED***,
        formatInputTooLong: function (input, max) { return "Пожалуйста, введите на" + character(input.length - max) + " меньше"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Вы можете выбрать не более " + limit + " элемент" + (limit%10 == 1 && limit%100 != 11 ? "а" : "ов"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Загрузка данных…"; ***REMOVED***,
        formatSearching: function () { return "Поиск…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ru']);

    function character (n) {
        return " " + n + " символ" + (n%10 < 5 && n%10 > 0 && (n%100 < 5 || n%100 > 20) ? n%10 > 1 ? "a" : "" : "ов");
  ***REMOVED***
***REMOVED***)(jQuery);
