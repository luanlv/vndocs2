/**
 * Select2 Azerbaijani translation.
 *
 * Author: Farhad Safarov <farhad.safarov@gmail.com>
 */
(function ($) {
    "use strict";

     $.fn.select2.locales['az'] = {
        formatMatches: function (matches) { return matches + " nəticə mövcuddur, hərəkət etdirmək üçün yuxarı və aşağı düymələrindən istifadə edin."; ***REMOVED***,
        formatNoMatches: function () { return "Nəticə tapılmadı"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return n + " simvol daxil edin"; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return n + " simvol silin"; ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Sadəcə " + limit + " element seçə bilərsiniz"; ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Daha çox nəticə yüklənir…"; ***REMOVED***,
        formatSearching: function () { return "Axtarılır…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['az']);
***REMOVED***)(jQuery);
