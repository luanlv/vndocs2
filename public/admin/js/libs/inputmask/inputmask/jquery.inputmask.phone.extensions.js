/*!
* jquery.inputmask.phone.extensions.js
* http://github.com/RobinHerbots/jquery.inputmask
* Copyright (c) 2010 - 2014 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.1.49
*/
!function(factory) {
    "function" == typeof define && define.amd ? define([ "jquery", "./jquery.inputmask" ], factory) : factory(jQuery);
***REMOVED***(function($) {
    return $.extend($.inputmask.defaults.aliases, {
        phone: {
            url: "phone-codes/phone-codes.js",
            maskInit: "+pp(pp)pppppppp",
            countrycode: "",
            mask: function(opts) {
                opts.definitions = {
                    p: {
                        validator: function() {
                            return !1;
                      ***REMOVED***,
                        cardinality: 1
                  ***REMOVED***,
                    "#": {
                        validator: "[0-9]",
                        cardinality: 1
                  ***REMOVED***
              ***REMOVED***;
                var maskList = [];
                return $.ajax({
                    url: opts.url,
                    async: !1,
                    dataType: "json",
                    success: function(response) {
                        maskList = response;
                  ***REMOVED***,
                    error: function(xhr, ajaxOptions, thrownError) {
                        alert(thrownError + " - " + opts.url);
                  ***REMOVED***
              ***REMOVED***), maskList = maskList.sort(function(a, b) {
                    return (a.mask || a) < (b.mask || b) ? -1 : 1;
              ***REMOVED***), "" != opts.countrycode && (opts.maskInit = "+" + opts.countrycode + opts.maskInit.substring(3)), 
                maskList.splice(0, 0, opts.maskInit), maskList;
          ***REMOVED***,
            nojumps: !0,
            nojumpsThreshold: 1,
            onBeforeMask: function(value, opts) {
                var processedValue = value.replace(/^0/g, "");
                return (processedValue.indexOf(opts.countrycode) > 1 || -1 == processedValue.indexOf(opts.countrycode)) && (processedValue = "+" + opts.countrycode + processedValue), 
                processedValue;
          ***REMOVED***
      ***REMOVED***,
        phonebe: {
            alias: "phone",
            url: "phone-codes/phone-be.js",
            countrycode: "32",
            nojumpsThreshold: 4
      ***REMOVED***
  ***REMOVED***), $.fn.inputmask;
***REMOVED***);