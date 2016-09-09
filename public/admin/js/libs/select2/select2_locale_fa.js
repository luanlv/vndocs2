/**
 * Select2 Persian translation.
 * 
 * Author: Ali Choopan <choopan@arsh.co>
 * Author: Ebrahim Byagowi <ebrahim@gnu.org>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['fa'] = {
        formatMatches: function (matches) { return matches + " نتیجه موجود است، کلیدهای جهت بالا و پایین را برای گشتن استفاده کنید."; ***REMOVED***,
        formatNoMatches: function () { return "نتیجه‌ای یافت نشد."; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "لطفاً " + n + " نویسه بیشتر وارد نمایید"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "لطفاً " + n + " نویسه را حذف کنید."; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "شما فقط می‌توانید " + limit + " مورد را انتخاب کنید"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "در حال بارگیری موارد بیشتر…"; ***REMOVED***,
        formatSearching: function () { return "در حال جستجو…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['fa']);
***REMOVED***)(jQuery);
