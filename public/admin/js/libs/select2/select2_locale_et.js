/**
 * Select2 Estonian translation.
 *
 * Author: Kuldar Kalvik <kuldar@kalvik.ee>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['et'] = {
        formatNoMatches: function () { return "Tulemused puuduvad"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Sisesta " + n + " täht" + (n == 1 ? "" : "e") + " rohkem"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Sisesta " + n + " täht" + (n == 1? "" : "e") + " vähem"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Saad vaid " + limit + " tulemus" + (limit == 1 ? "e" : "t") + " valida"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Laen tulemusi.."; ***REMOVED***,
        formatSearching: function () { return "Otsin.."; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['et']);
***REMOVED***)(jQuery);
