/**
* Select2 Hebrew translation.
*
* Author: Yakir Sitbon <http://www.yakirs.net/>
*/
(function ($) {
    "use strict";

    $.fn.select2.locales['he'] = {
        formatNoMatches: function () { return "לא נמצאו התאמות"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "נא להזין עוד " + n + " תווים נוספים"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "נא להזין פחות " + n + " תווים"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "ניתן לבחור " + limit + " פריטים"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "טוען תוצאות נוספות…"; ***REMOVED***,
        formatSearching: function () { return "מחפש…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['he']);
***REMOVED***)(jQuery);
