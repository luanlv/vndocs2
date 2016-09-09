/**
 * Select2 Greek translation.
 * 
 * @author  Uriy Efremochkin <efremochkin@uriy.me>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['el'] = {
        formatNoMatches: function () { return "Δεν βρέθηκαν αποτελέσματα"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Παρακαλούμε εισάγετε " + n + " περισσότερο" + (n > 1 ? "υς" : "") + " χαρακτήρ" + (n > 1 ? "ες" : "α"); ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Παρακαλούμε διαγράψτε " + n + " χαρακτήρ" + (n > 1 ? "ες" : "α"); ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Μπορείτε να επιλέξετε μόνο " + limit + " αντικείμεν" + (limit > 1 ? "α" : "ο"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Φόρτωση περισσότερων…"; ***REMOVED***,
        formatSearching: function () { return "Αναζήτηση…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['el']);
***REMOVED***)(jQuery);