/**
 * Select2 Uyghur translation
 */
(function ($) {
    "use strict";
    $.fn.select2.locales['ug-CN'] = {
        formatNoMatches: function () { return "ماس كېلىدىغان ئۇچۇر تېپىلمىدى"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "يەنە " + n + " ھەرپ كىرگۈزۈڭ";***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "" + n + "ھەرپ ئۆچۈرۈڭ";***REMOVED***,
        formatSelectionTooBig: function (limit) { return "ئەڭ كۆپ بولغاندا" + limit + " تال ئۇچۇر تاللىيالايسىز"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "ئۇچۇرلار ئوقۇلىۋاتىدۇ…"; ***REMOVED***,
        formatSearching: function () { return "ئىزدەۋاتىدۇ…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ug-CN']);
***REMOVED***)(jQuery);
