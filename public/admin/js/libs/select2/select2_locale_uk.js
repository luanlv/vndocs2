/**
 * Select2 Ukrainian translation.
 * 
 * @author  bigmihail <bigmihail@bigmir.net>
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['uk'] = {
        formatMatches: function (matches) { return character(matches, "результат") + " знайдено, використовуйте клавіші зі стрілками вверх та вниз для навігації."; ***REMOVED***,
        formatNoMatches: function () { return "Нічого не знайдено"; ***REMOVED***,
        formatInputTooShort: function (input, min) { return "Введіть буль ласка ще " + character(min - input.length, "символ"); ***REMOVED***,
        formatInputTooLong: function (input, max) { return "Введіть буль ласка на " + character(input.length - max, "символ") + " менше"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Ви можете вибрати лише " + character(limit, "елемент"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Завантаження даних…"; ***REMOVED***,
        formatSearching: function () { return "Пошук…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['uk']);

    function character (n, word) {
        return n + " " + word + (n%10 < 5 && n%10 > 0 && (n%100 < 5 || n%100 > 19) ? n%10 > 1 ? "и" : "" : "ів");
  ***REMOVED***
***REMOVED***)(jQuery);
