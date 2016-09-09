/**
 * Select2 Georgian (Kartuli) translation.
 * 
 * Author: Dimitri Kurashvili dimakura@gmail.com
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ka'] = {
        formatNoMatches: function () { return "ვერ მოიძებნა"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "გთხოვთ შეიყვანოთ კიდევ " + n + " სიმბოლო"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "გთხოვთ წაშალოთ " + n + " სიმბოლო"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "თქვენ შეგიძლიათ მხოლოდ " + limit + " ჩანაწერის მონიშვნა"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "შედეგის ჩატვირთვა…"; ***REMOVED***,
        formatSearching: function () { return "ძებნა…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ka']);
***REMOVED***)(jQuery);
