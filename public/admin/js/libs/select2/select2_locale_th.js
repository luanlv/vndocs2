/**
 * Select2 Thai translation.
 *
 * Author: Atsawin Chaowanakritsanakul <joke@nakhon.net>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['th'] = {
        formatNoMatches: function () { return "ไม่พบข้อมูล"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "โปรดพิมพ์เพิ่มอีก " + n + " ตัวอักษร"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "โปรดลบออก " + n + " ตัวอักษร"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "คุณสามารถเลือกได้ไม่เกิน " + limit + " รายการ"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "กำลังค้นข้อมูลเพิ่ม…"; ***REMOVED***,
        formatSearching: function () { return "กำลังค้นข้อมูล…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['th']);
***REMOVED***)(jQuery);
