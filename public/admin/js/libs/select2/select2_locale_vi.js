/**
 * Select2 Vietnamese translation.
 * 
 * Author: Long Nguyen <olragon@gmail.com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['vi'] = {
        formatNoMatches: function () { return "Không tìm thấy kết quả"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Vui lòng nhập nhiều hơn " + n + " ký tự" + (n == 1 ? "" : "s"); ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Vui lòng nhập ít hơn " + n + " ký tự" + (n == 1? "" : "s"); ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Chỉ có thể chọn được " + limit + " tùy chọn" + (limit == 1 ? "" : "s"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Đang lấy thêm kết quả…"; ***REMOVED***,
        formatSearching: function () { return "Đang tìm…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['vi']);
***REMOVED***)(jQuery);

