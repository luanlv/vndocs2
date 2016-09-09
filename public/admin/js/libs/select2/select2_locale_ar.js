/**
 * Select2 Arabic translation.
 *
 * Author: Adel KEDJOUR <adel@kedjour.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ar'] = {
        formatNoMatches: function () { return "لم يتم العثور على مطابقات"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; if (n == 1){ return "الرجاء إدخال حرف واحد على الأكثر"; ***REMOVED*** return n == 2 ? "الرجاء إدخال حرفين على الأكثر" : "الرجاء إدخال " + n + " على الأكثر"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; if (n == 1){ return "الرجاء إدخال حرف واحد على الأقل"; ***REMOVED*** return n == 2 ? "الرجاء إدخال حرفين على الأقل" : "الرجاء إدخال " + n + " على الأقل "; ***REMOVED***,
        formatSelectionTooBig: function (limit) { if (limit == 1){ return "يمكنك أن تختار إختيار واحد فقط"; ***REMOVED*** return limit == 2 ? "يمكنك أن تختار إختيارين فقط" : "يمكنك أن تختار " + limit + " إختيارات فقط"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "تحميل المزيد من النتائج…"; ***REMOVED***,
        formatSearching: function () { return "البحث…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ar']);
***REMOVED***)(jQuery);
