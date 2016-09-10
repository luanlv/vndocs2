/*
 * Toastr
 * Copyright 2012-2014 
 * Authors: John Papa, Hans Fjällemark, and Tim Ferrell.
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * ARIA Support: Greta Krafsig
 *
 * Project: https://github.com/CodeSeven/toastr
 */
; (function (define) {
    define(['jquery'], function ($) {
        return (function () {
            var $container;
            var listener;
            var toastId = 0;
            var toastType = {
                error: 'error',
                info: 'info',
                success: 'success',
                warning: 'warning'
          ***REMOVED***;

            var toastr = {
                clear: clear,
                remove: remove,
                error: error,
                getContainer: getContainer,
                info: info,
                options: {***REMOVED***,
                subscribe: subscribe,
                success: success,
                version: '2.1.0',
                warning: warning
          ***REMOVED***;

            var previousToast;

            return toastr;

            //#region Accessible Methods
            function error(message, title, optionsOverride) {
                return notify({
                    type: toastType.error,
                    iconClass: getOptions().iconClasses.error,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
              ***REMOVED***);
          ***REMOVED***

            function getContainer(options, create) {
                if (!options) { options = getOptions(); ***REMOVED***
                $container = $('#' + options.containerId);
                if ($container.length) {
                    return $container;
              ***REMOVED***
                if (create) {
                    $container = createContainer(options);
              ***REMOVED***
                return $container;
          ***REMOVED***

            function info(message, title, optionsOverride) {
                return notify({
                    type: toastType.info,
                    iconClass: getOptions().iconClasses.info,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
              ***REMOVED***);
          ***REMOVED***

            function subscribe(callback) {
                listener = callback;
          ***REMOVED***

            function success(message, title, optionsOverride) {
                return notify({
                    type: toastType.success,
                    iconClass: getOptions().iconClasses.success,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
              ***REMOVED***);
          ***REMOVED***

            function warning(message, title, optionsOverride) {
                return notify({
                    type: toastType.warning,
                    iconClass: getOptions().iconClasses.warning,
                    message: message,
                    optionsOverride: optionsOverride,
                    title: title
              ***REMOVED***);
          ***REMOVED***

            function clear($toastElement) {
                var options = getOptions();
                if (!$container) { getContainer(options); ***REMOVED***
                if (!clearToast($toastElement, options)) {
                    clearContainer(options);
              ***REMOVED***
          ***REMOVED***

            function remove($toastElement) {
                var options = getOptions();
                if (!$container) { getContainer(options); ***REMOVED***
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    removeToast($toastElement);
                    return;
              ***REMOVED***
                if ($container.children().length) {
                    $container.remove();
              ***REMOVED***
          ***REMOVED***
            //#endregion

            //#region Internal Methods

            function clearContainer (options) {
                var toastsToClear = $container.children();
                for (var i = toastsToClear.length - 1; i >= 0; i--) {
                    clearToast($(toastsToClear[i]), options);
              ***REMOVED***
          ***REMOVED***

            function clearToast ($toastElement, options) {
                if ($toastElement && $(':focus', $toastElement).length === 0) {
                    $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () { removeToast($toastElement); ***REMOVED***
                  ***REMOVED***);
                    return true;
              ***REMOVED***
                return false;
          ***REMOVED***

            function createContainer(options) {
                $container = $('<div/>')
                    .attr('id', options.containerId)
                    .addClass(options.positionClass)
                    .attr('aria-live', 'polite')
                    .attr('role', 'alert');

                $container.appendTo($(options.target));
                return $container;
          ***REMOVED***

            function getDefaults() {
                return {
                    tapToDismiss: true,
                    toastClass: 'toast',
                    containerId: 'toast-container',
                    debug: false,

                    showMethod: 'fadeIn', //fadeIn, slideDown, and show are built into jQuery
                    showDuration: 300,
                    showEasing: 'swing', //swing and linear are built into jQuery
                    onShown: undefined,
                    hideMethod: 'fadeOut',
                    hideDuration: 1000,
                    hideEasing: 'swing',
                    onHidden: undefined,

                    extendedTimeOut: 1000,
                    iconClasses: {
                        error: 'toast-error',
                        info: 'toast-info',
                        success: 'toast-success',
                        warning: 'toast-warning'
                  ***REMOVED***,
                    iconClass: 'toast-info',
                    positionClass: 'toast-top-right',
                    timeOut: 5000, // Set timeOut and extendedTimeOut to 0 to make it sticky
                    titleClass: 'toast-title',
                    messageClass: 'toast-message',
                    target: 'body',
                    closeHtml: '<button type="button">&times;</button>',
                    newestOnTop: true,
                    preventDuplicates: false,
                    progressBar: false
              ***REMOVED***;
          ***REMOVED***

            function publish(args) {
                if (!listener) { return; ***REMOVED***
                listener(args);
          ***REMOVED***

            function notify(map) {
                var options = getOptions(),
                    iconClass = map.iconClass || options.iconClass;

                if (typeof (map.optionsOverride) !== 'undefined') {
                    options = $.extend(options, map.optionsOverride);
                    iconClass = map.optionsOverride.iconClass || iconClass;
              ***REMOVED***
                
                if (options.preventDuplicates) {
                    if (map.message === previousToast) {
                        return;
                  ***REMOVED*** else {
                        previousToast = map.message;
                  ***REMOVED***
              ***REMOVED***

                toastId++;

                $container = getContainer(options, true);
                var intervalId = null,
                    $toastElement = $('<div/>'),
                    $titleElement = $('<div/>'),
                    $messageElement = $('<div/>'),
                    $progressElement = $('<div/>'),
                    $closeElement = $(options.closeHtml),
                    progressBar = {
                        intervalId: null,
                        hideEta: null,
                        maxHideTime: null
                  ***REMOVED***,
                    response = {
                        toastId: toastId,
                        state: 'visible',
                        startTime: new Date(),
                        options: options,
                        map: map
                  ***REMOVED***;

                if (map.iconClass) {
                    $toastElement.addClass(options.toastClass).addClass(iconClass);
              ***REMOVED***

                if (map.title) {
                    $titleElement.append(map.title).addClass(options.titleClass);
                    $toastElement.append($titleElement);
              ***REMOVED***

                if (map.message) {
                    $messageElement.append(map.message).addClass(options.messageClass);
                    $toastElement.append($messageElement);
              ***REMOVED***

                if (options.closeButton) {
                    $closeElement.addClass('toast-close-button').attr('role', 'button');
                    $toastElement.prepend($closeElement);
              ***REMOVED***

                if (options.progressBar) {
                    $progressElement.addClass('toast-progress');
                    $toastElement.prepend($progressElement);
              ***REMOVED***

                $toastElement.hide();
                if (options.newestOnTop) {
                    $container.prepend($toastElement);
              ***REMOVED*** else {
                    $container.append($toastElement);
              ***REMOVED***
                $toastElement[options.showMethod](
                    {duration: options.showDuration, easing: options.showEasing, complete: options.onShown***REMOVED***
                );

                if (options.timeOut > 0) {
                    intervalId = setTimeout(hideToast, options.timeOut);
                    progressBar.maxHideTime = parseFloat(options.timeOut);
                    progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                    if (options.progressBar) {
                        progressBar.intervalId = setInterval(updateProgress, 10);
                  ***REMOVED***
              ***REMOVED***

                $toastElement.hover(stickAround, delayedHideToast);
                if (!options.onclick && options.tapToDismiss) {
                    $toastElement.click(hideToast);
              ***REMOVED***

                if (options.closeButton && $closeElement) {
                    $closeElement.click(function (event) {
                        if (event.stopPropagation) {
                            event.stopPropagation();
                      ***REMOVED*** else if (event.cancelBubble !== undefined && event.cancelBubble !== true) {
                            event.cancelBubble = true;
                      ***REMOVED***
                        hideToast(true);
                  ***REMOVED***);
              ***REMOVED***

                if (options.onclick) {
                    $toastElement.click(function () {
                        options.onclick();
                        hideToast();
                  ***REMOVED***);
              ***REMOVED***

                publish(response);

                if (options.debug && console) {
                    console.log(response);
              ***REMOVED***

                return $toastElement;

                function hideToast(override) {
                    if ($(':focus', $toastElement).length && !override) {
                        return;
                  ***REMOVED***
                    clearTimeout(progressBar.intervalId);
                    return $toastElement[options.hideMethod]({
                        duration: options.hideDuration,
                        easing: options.hideEasing,
                        complete: function () {
                            removeToast($toastElement);
                            if (options.onHidden && response.state !== 'hidden') {
                                options.onHidden();
                          ***REMOVED***
                            response.state = 'hidden';
                            response.endTime = new Date();
                            publish(response);
                      ***REMOVED***
                  ***REMOVED***);
              ***REMOVED***

                function delayedHideToast() {
                    if (options.timeOut > 0 || options.extendedTimeOut > 0) {
                        intervalId = setTimeout(hideToast, options.extendedTimeOut);
                        progressBar.maxHideTime = parseFloat(options.extendedTimeOut);
                        progressBar.hideEta = new Date().getTime() + progressBar.maxHideTime;
                  ***REMOVED***
              ***REMOVED***

                function stickAround() {
                    clearTimeout(intervalId);
                    progressBar.hideEta = 0;
                    $toastElement.stop(true, true)[options.showMethod](
                        {duration: options.showDuration, easing: options.showEasing***REMOVED***
                    );
              ***REMOVED***

                function updateProgress() {
                    var percentage = ((progressBar.hideEta - (new Date().getTime())) / progressBar.maxHideTime) * 100;
                    $progressElement.width(percentage + '%');
              ***REMOVED***
          ***REMOVED***

            function getOptions() {
                return $.extend({***REMOVED***, getDefaults(), toastr.options);
          ***REMOVED***

            function removeToast($toastElement) {
                if (!$container) { $container = getContainer(); ***REMOVED***
                if ($toastElement.is(':visible')) {
                    return;
              ***REMOVED***
                $toastElement.remove();
                $toastElement = null;
                if ($container.children().length === 0) {
                    $container.remove();
                    previousToast = undefined;
              ***REMOVED***
          ***REMOVED***
            //#endregion

      ***REMOVED***)();
  ***REMOVED***);
***REMOVED***(typeof define === 'function' && define.amd ? define : function (deps, factory) {
    if (typeof module !== 'undefined' && module.exports) { //Node
        module.exports = factory(require('jquery'));
  ***REMOVED*** else {
        window['toastr'] = factory(window['jQuery']);
  ***REMOVED***
***REMOVED***));