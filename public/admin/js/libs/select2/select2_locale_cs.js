/**
 * Select2 Czech translation.
 * 
 * Author: Michal Marek <ahoj@michal-marek.cz>
 * Author - sklonovani: David Vallner <david@vallner.net>
 */
(function ($) {
    "use strict";
    // use text for the numbers 2 through 4
    var smallNumbers = {
        2: function(masc) { return (masc ? "dva" : "dvě"); ***REMOVED***,
        3: function() { return "tři"; ***REMOVED***,
        4: function() { return "čtyři"; ***REMOVED***
  ***REMOVED***
    $.fn.select2.locales['cs'] = {
        formatNoMatches: function () { return "Nenalezeny žádné položky"; ***REMOVED***,
        formatInputTooShort: function (input, min) {
            var n = min - input.length;
            if (n == 1) {
                return "Prosím zadejte ještě jeden znak";
          ***REMOVED*** else if (n <= 4) {
                return "Prosím zadejte ještě další "+smallNumbers[n](true)+" znaky";
          ***REMOVED*** else {
                return "Prosím zadejte ještě dalších "+n+" znaků";
          ***REMOVED***
      ***REMOVED***,
        formatInputTooLong: function (input, max) {
            var n = input.length - max;
            if (n == 1) {
                return "Prosím zadejte o jeden znak méně";
          ***REMOVED*** else if (n <= 4) {
                return "Prosím zadejte o "+smallNumbers[n](true)+" znaky méně";
          ***REMOVED*** else {
                return "Prosím zadejte o "+n+" znaků méně";
          ***REMOVED***
      ***REMOVED***,
        formatSelectionTooBig: function (limit) {
            if (limit == 1) {
                return "Můžete zvolit jen jednu položku";
          ***REMOVED*** else if (limit <= 4) {
                return "Můžete zvolit maximálně "+smallNumbers[limit](false)+" položky";
          ***REMOVED*** else {
                return "Můžete zvolit maximálně "+limit+" položek";
          ***REMOVED***
      ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Načítají se další výsledky…"; ***REMOVED***,
        formatSearching: function () { return "Vyhledávání…"; ***REMOVED***
  ***REMOVED***;

	$.extend($.fn.select2.defaults, $.fn.select2.locales['cs']);
***REMOVED***)(jQuery);
