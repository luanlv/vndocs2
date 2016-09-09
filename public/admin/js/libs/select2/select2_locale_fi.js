/**
 * Select2 Finnish translation
 */
(function ($) {
    "use strict";
    $.fn.select2.locales['fi'] = {
        formatNoMatches: function () {
            return "Ei tuloksia";
      ***REMOVED***,
        formatInputTooShort: function (input, min) {
            var n = min - input.length;
            return "Ole hyvä ja anna " + n + " merkkiä lisää";
      ***REMOVED***,
        formatInputTooLong: function (input, max) {
            var n = input.length - max;
            return "Ole hyvä ja anna " + n + " merkkiä vähemmän";
      ***REMOVED***,
        formatSelectionTooBig: function (limit) {
            return "Voit valita ainoastaan " + limit + " kpl";
      ***REMOVED***,
        formatLoadMore: function (pageNumber) {
            return "Ladataan lisää tuloksia…";
      ***REMOVED***,
        formatSearching: function () {
            return "Etsitään…";
      ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['fi']);
***REMOVED***)(jQuery);
