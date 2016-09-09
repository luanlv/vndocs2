/**
 * Select2 Basque translation.
 *
 * Author: Julen Ruiz Aizpuru <julenx at gmail dot com>
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['eu'] = {
        formatNoMatches: function () {
          return "Ez da bat datorrenik aurkitu";
      ***REMOVED***,
        formatInputTooShort: function (input, min) {
          var n = min - input.length;
          if (n === 1) {
            return "Idatzi karaktere bat gehiago";
        ***REMOVED*** else {
            return "Idatzi " + n + " karaktere gehiago";
        ***REMOVED***
      ***REMOVED***,
        formatInputTooLong: function (input, max) {
          var n = input.length - max;
          if (n === 1) {
            return "Idatzi karaktere bat gutxiago";
        ***REMOVED*** else {
            return "Idatzi " + n + " karaktere gutxiago";
        ***REMOVED***
      ***REMOVED***,
        formatSelectionTooBig: function (limit) {
          if (limit === 1 ) {
            return "Elementu bakarra hauta dezakezu";
        ***REMOVED*** else {
            return limit + " elementu hauta ditzakezu soilik";
        ***REMOVED***
      ***REMOVED***,
        formatLoadMore: function (pageNumber) {
          return "Emaitza gehiago kargatzen…";
      ***REMOVED***,
        formatSearching: function () {
          return "Bilatzen…";
      ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['eu']);
***REMOVED***)(jQuery);
