/**
 * Select2 Japanese translation.
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['ja'] = {
        formatNoMatches: function () { return "該当なし"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "後" + n + "文字入れてください"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "検索文字列が" + n + "文字長すぎます"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "最多で" + limit + "項目までしか選択できません"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "読込中･･･"; ***REMOVED***,
        formatSearching: function () { return "検索中･･･"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['ja']);
***REMOVED***)(jQuery);
