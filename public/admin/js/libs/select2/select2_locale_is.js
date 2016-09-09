/**
 * Select2 Icelandic translation.
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['is'] = {
        formatNoMatches: function () { return "Ekkert fannst"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Vinsamlegast skrifið " + n + " staf" + (n > 1 ? "i" : "") + " í viðbót"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Vinsamlegast styttið texta um " + n + " staf" + (n > 1 ? "i" : ""); ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Þú getur aðeins valið " + limit + " atriði"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Sæki fleiri niðurstöður…"; ***REMOVED***,
        formatSearching: function () { return "Leita…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['is']);
***REMOVED***)(jQuery);
