/**
 * Select2 French translation
 */
(function ($) {
    "use strict";

    $.fn.select2.locales['fr'] = {
        formatMatches: function (matches) { return matches + " résultats sont disponibles, utilisez les flèches haut et bas pour naviguer."; ***REMOVED***,
        formatNoMatches: function () { return "Aucun résultat trouvé"; ***REMOVED***,
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Saisissez " + n + " caractère" + (n == 1? "" : "s") + " supplémentaire" + (n == 1? "" : "s") ; ***REMOVED***,
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Supprimez " + n + " caractère" + (n == 1? "" : "s"); ***REMOVED***,
        formatSelectionTooBig: function (limit) { return "Vous pouvez seulement sélectionner " + limit + " élément" + (limit == 1 ? "" : "s"); ***REMOVED***,
        formatLoadMore: function (pageNumber) { return "Chargement de résultats supplémentaires…"; ***REMOVED***,
        formatSearching: function () { return "Recherche en cours…"; ***REMOVED***
  ***REMOVED***;

    $.extend($.fn.select2.defaults, $.fn.select2.locales['fr']);
***REMOVED***)(jQuery);
