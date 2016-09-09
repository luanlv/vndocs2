/**
 * Select2 Lithuanian translation.
 * 
 * @author  CRONUS Karmalakas <cronus dot karmalakas at gmail dot com>
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['lt'] = {
        formatNoMatches: function () { return "Atitikmenų nerasta"; ***REMOVED***,
        formatInputTooShort: function (input, min) { return "Įrašykite dar" + character(min - input.length); ***REMOVED***,
        formatInputTooLong: function (input, max) { return "Pašalinkite" + character(input.length - max); ***REMOVED***,
        formatSelectionTooBig: function (limit) {
        	return "Jūs galite pasirinkti tik " + limit + " element" + ((limit%100 > 9 && limit%100 < 21) || limit%10 == 0 ? "ų" : limit%10 > 1 ? "us" : "ą");
      ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Kraunama daugiau rezultatų…"; ***REMOVED***,
        formatSearching: function () { return "Ieškoma…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['lt']);

    function character (n) {
        return " " + n + " simbol" + ((n%100 > 9 && n%100 < 21) || n%10 == 0 ? "ių" : n%10 > 1 ? "ius" : "į");
  ***REMOVED***
***REMOVED***)(jQuery);
