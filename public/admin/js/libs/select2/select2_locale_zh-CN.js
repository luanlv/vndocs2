/**
 * Select2 Chinese translation
 */
(function ($) {
    "use strict";
    $.fn.select2.locales['zh-CN'] = {
        formatNoMatches: function () { return "没有找到匹配项"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "请再输入" + n + "个字符";***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "请删掉" + n + "个字符";***REMOVED***,
        formatSelectionTooBig: function (limit) { return "你只能选择最多" + limit + "项"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "加载结果中…"; ***REMOVED***,
        formatSearching: function () { return "搜索中…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['zh-CN']);
***REMOVED***)(jQuery);
