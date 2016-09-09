/*!
 * typeahead.js 0.10.5
 * https://github.com/twitter/typeahead.js
 * Copyright 2013-2014 Twitter, Inc. and other contributors; Licensed MIT
 */

(function($) {
    var _ = function() {
        "use strict";
        return {
            isMsie: function() {
                return /(msie|trident)/i.test(navigator.userAgent) ? navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2] : false;
          ***REMOVED***,
            isBlankString: function(str) {
                return !str || /^\s*$/.test(str);
          ***REMOVED***,
            escapeRegExChars: function(str) {
                return str.replace(/[\-\[\]\/\{\***REMOVED***\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          ***REMOVED***,
            isString: function(obj) {
                return typeof obj === "string";
          ***REMOVED***,
            isNumber: function(obj) {
                return typeof obj === "number";
          ***REMOVED***,
            isArray: $.isArray,
            isFunction: $.isFunction,
            isObject: $.isPlainObject,
            isUndefined: function(obj) {
                return typeof obj === "undefined";
          ***REMOVED***,
            toStr: function toStr(s) {
                return _.isUndefined(s) || s === null ? "" : s + "";
          ***REMOVED***,
            bind: $.proxy,
            each: function(collection, cb) {
                $.each(collection, reverseArgs);
                function reverseArgs(index, value) {
                    return cb(value, index);
              ***REMOVED***
          ***REMOVED***,
            map: $.map,
            filter: $.grep,
            every: function(obj, test) {
                var result = true;
                if (!obj) {
                    return result;
              ***REMOVED***
                $.each(obj, function(key, val) {
                    if (!(result = test.call(null, val, key, obj))) {
                        return false;
                  ***REMOVED***
              ***REMOVED***);
                return !!result;
          ***REMOVED***,
            some: function(obj, test) {
                var result = false;
                if (!obj) {
                    return result;
              ***REMOVED***
                $.each(obj, function(key, val) {
                    if (result = test.call(null, val, key, obj)) {
                        return false;
                  ***REMOVED***
              ***REMOVED***);
                return !!result;
          ***REMOVED***,
            mixin: $.extend,
            getUniqueId: function() {
                var counter = 0;
                return function() {
                    return counter++;
              ***REMOVED***;
          ***REMOVED***(),
            templatify: function templatify(obj) {
                return $.isFunction(obj) ? obj : template;
                function template() {
                    return String(obj);
              ***REMOVED***
          ***REMOVED***,
            defer: function(fn) {
                setTimeout(fn, 0);
          ***REMOVED***,
            debounce: function(func, wait, immediate) {
                var timeout, result;
                return function() {
                    var context = this, args = arguments, later, callNow;
                    later = function() {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                      ***REMOVED***
                  ***REMOVED***;
                    callNow = immediate && !timeout;
                    clearTimeout(timeout);
                    timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                  ***REMOVED***
                    return result;
              ***REMOVED***;
          ***REMOVED***,
            throttle: function(func, wait) {
                var context, args, timeout, result, previous, later;
                previous = 0;
                later = function() {
                    previous = new Date();
                    timeout = null;
                    result = func.apply(context, args);
              ***REMOVED***;
                return function() {
                    var now = new Date(), remaining = wait - (now - previous);
                    context = this;
                    args = arguments;
                    if (remaining <= 0) {
                        clearTimeout(timeout);
                        timeout = null;
                        previous = now;
                        result = func.apply(context, args);
                  ***REMOVED*** else if (!timeout) {
                        timeout = setTimeout(later, remaining);
                  ***REMOVED***
                    return result;
              ***REMOVED***;
          ***REMOVED***,
            noop: function() {***REMOVED***
      ***REMOVED***;
  ***REMOVED***();
    var VERSION = "0.10.5";
    var tokenizers = function() {
        "use strict";
        return {
            nonword: nonword,
            whitespace: whitespace,
            obj: {
                nonword: getObjTokenizer(nonword),
                whitespace: getObjTokenizer(whitespace)
          ***REMOVED***
      ***REMOVED***;
        function whitespace(str) {
            str = _.toStr(str);
            return str ? str.split(/\s+/) : [];
      ***REMOVED***
        function nonword(str) {
            str = _.toStr(str);
            return str ? str.split(/\W+/) : [];
      ***REMOVED***
        function getObjTokenizer(tokenizer) {
            return function setKey() {
                var args = [].slice.call(arguments, 0);
                return function tokenize(o) {
                    var tokens = [];
                    _.each(args, function(k) {
                        tokens = tokens.concat(tokenizer(_.toStr(o[k])));
                  ***REMOVED***);
                    return tokens;
              ***REMOVED***;
          ***REMOVED***;
      ***REMOVED***
  ***REMOVED***();
    var LruCache = function() {
        "use strict";
        function LruCache(maxSize) {
            this.maxSize = _.isNumber(maxSize) ? maxSize : 100;
            this.reset();
            if (this.maxSize <= 0) {
                this.set = this.get = $.noop;
          ***REMOVED***
      ***REMOVED***
        _.mixin(LruCache.prototype, {
            set: function set(key, val) {
                var tailItem = this.list.tail, node;
                if (this.size >= this.maxSize) {
                    this.list.remove(tailItem);
                    delete this.hash[tailItem.key];
              ***REMOVED***
                if (node = this.hash[key]) {
                    node.val = val;
                    this.list.moveToFront(node);
              ***REMOVED*** else {
                    node = new Node(key, val);
                    this.list.add(node);
                    this.hash[key] = node;
                    this.size++;
              ***REMOVED***
          ***REMOVED***,
            get: function get(key) {
                var node = this.hash[key];
                if (node) {
                    this.list.moveToFront(node);
                    return node.val;
              ***REMOVED***
          ***REMOVED***,
            reset: function reset() {
                this.size = 0;
                this.hash = {***REMOVED***;
                this.list = new List();
          ***REMOVED***
      ***REMOVED***);
        function List() {
            this.head = this.tail = null;
      ***REMOVED***
        _.mixin(List.prototype, {
            add: function add(node) {
                if (this.head) {
                    node.next = this.head;
                    this.head.prev = node;
              ***REMOVED***
                this.head = node;
                this.tail = this.tail || node;
          ***REMOVED***,
            remove: function remove(node) {
                node.prev ? node.prev.next = node.next : this.head = node.next;
                node.next ? node.next.prev = node.prev : this.tail = node.prev;
          ***REMOVED***,
            moveToFront: function(node) {
                this.remove(node);
                this.add(node);
          ***REMOVED***
      ***REMOVED***);
        function Node(key, val) {
            this.key = key;
            this.val = val;
            this.prev = this.next = null;
      ***REMOVED***
        return LruCache;
  ***REMOVED***();
    var PersistentStorage = function() {
        "use strict";
        var ls, methods;
        try {
            ls = window.localStorage;
            ls.setItem("~~~", "!");
            ls.removeItem("~~~");
      ***REMOVED*** catch (err) {
            ls = null;
      ***REMOVED***
        function PersistentStorage(namespace) {
            this.prefix = [ "__", namespace, "__" ].join("");
            this.ttlKey = "__ttl__";
            this.keyMatcher = new RegExp("^" + _.escapeRegExChars(this.prefix));
      ***REMOVED***
        if (ls && window.JSON) {
            methods = {
                _prefix: function(key) {
                    return this.prefix + key;
              ***REMOVED***,
                _ttlKey: function(key) {
                    return this._prefix(key) + this.ttlKey;
              ***REMOVED***,
                get: function(key) {
                    if (this.isExpired(key)) {
                        this.remove(key);
                  ***REMOVED***
                    return decode(ls.getItem(this._prefix(key)));
              ***REMOVED***,
                set: function(key, val, ttl) {
                    if (_.isNumber(ttl)) {
                        ls.setItem(this._ttlKey(key), encode(now() + ttl));
                  ***REMOVED*** else {
                        ls.removeItem(this._ttlKey(key));
                  ***REMOVED***
                    return ls.setItem(this._prefix(key), encode(val));
              ***REMOVED***,
                remove: function(key) {
                    ls.removeItem(this._ttlKey(key));
                    ls.removeItem(this._prefix(key));
                    return this;
              ***REMOVED***,
                clear: function() {
                    var i, key, keys = [], len = ls.length;
                    for (i = 0; i < len; i++) {
                        if ((key = ls.key(i)).match(this.keyMatcher)) {
                            keys.push(key.replace(this.keyMatcher, ""));
                      ***REMOVED***
                  ***REMOVED***
                    for (i = keys.length; i--; ) {
                        this.remove(keys[i]);
                  ***REMOVED***
                    return this;
              ***REMOVED***,
                isExpired: function(key) {
                    var ttl = decode(ls.getItem(this._ttlKey(key)));
                    return _.isNumber(ttl) && now() > ttl ? true : false;
              ***REMOVED***
          ***REMOVED***;
      ***REMOVED*** else {
            methods = {
                get: _.noop,
                set: _.noop,
                remove: _.noop,
                clear: _.noop,
                isExpired: _.noop
          ***REMOVED***;
      ***REMOVED***
        _.mixin(PersistentStorage.prototype, methods);
        return PersistentStorage;
        function now() {
            return new Date().getTime();
      ***REMOVED***
        function encode(val) {
            return JSON.stringify(_.isUndefined(val) ? null : val);
      ***REMOVED***
        function decode(val) {
            return JSON.parse(val);
      ***REMOVED***
  ***REMOVED***();
    var Transport = function() {
        "use strict";
        var pendingRequestsCount = 0, pendingRequests = {***REMOVED***, maxPendingRequests = 6, sharedCache = new LruCache(10);
        function Transport(o) {
            o = o || {***REMOVED***;
            this.cancelled = false;
            this.lastUrl = null;
            this._send = o.transport ? callbackToDeferred(o.transport) : $.ajax;
            this._get = o.rateLimiter ? o.rateLimiter(this._get) : this._get;
            this._cache = o.cache === false ? new LruCache(0) : sharedCache;
      ***REMOVED***
        Transport.setMaxPendingRequests = function setMaxPendingRequests(num) {
            maxPendingRequests = num;
      ***REMOVED***;
        Transport.resetCache = function resetCache() {
            sharedCache.reset();
      ***REMOVED***;
        _.mixin(Transport.prototype, {
            _get: function(url, o, cb) {
                var that = this, jqXhr;
                if (this.cancelled || url !== this.lastUrl) {
                    return;
              ***REMOVED***
                if (jqXhr = pendingRequests[url]) {
                    jqXhr.done(done).fail(fail);
              ***REMOVED*** else if (pendingRequestsCount < maxPendingRequests) {
                    pendingRequestsCount++;
                    pendingRequests[url] = this._send(url, o).done(done).fail(fail).always(always);
              ***REMOVED*** else {
                    this.onDeckRequestArgs = [].slice.call(arguments, 0);
              ***REMOVED***
                function done(resp) {
                    cb && cb(null, resp);
                    that._cache.set(url, resp);
              ***REMOVED***
                function fail() {
                    cb && cb(true);
              ***REMOVED***
                function always() {
                    pendingRequestsCount--;
                    delete pendingRequests[url];
                    if (that.onDeckRequestArgs) {
                        that._get.apply(that, that.onDeckRequestArgs);
                        that.onDeckRequestArgs = null;
                  ***REMOVED***
              ***REMOVED***
          ***REMOVED***,
            get: function(url, o, cb) {
                var resp;
                if (_.isFunction(o)) {
                    cb = o;
                    o = {***REMOVED***;
              ***REMOVED***
                this.cancelled = false;
                this.lastUrl = url;
                if (resp = this._cache.get(url)) {
                    _.defer(function() {
                        cb && cb(null, resp);
                  ***REMOVED***);
              ***REMOVED*** else {
                    this._get(url, o, cb);
              ***REMOVED***
                return !!resp;
          ***REMOVED***,
            cancel: function() {
                this.cancelled = true;
          ***REMOVED***
      ***REMOVED***);
        return Transport;
        function callbackToDeferred(fn) {
            return function customSendWrapper(url, o) {
                var deferred = $.Deferred();
                fn(url, o, onSuccess, onError);
                return deferred;
                function onSuccess(resp) {
                    _.defer(function() {
                        deferred.resolve(resp);
                  ***REMOVED***);
              ***REMOVED***
                function onError(err) {
                    _.defer(function() {
                        deferred.reject(err);
                  ***REMOVED***);
              ***REMOVED***
          ***REMOVED***;
      ***REMOVED***
  ***REMOVED***();
    var SearchIndex = function() {
        "use strict";
        function SearchIndex(o) {
            o = o || {***REMOVED***;
            if (!o.datumTokenizer || !o.queryTokenizer) {
                $.error("datumTokenizer and queryTokenizer are both required");
          ***REMOVED***
            this.datumTokenizer = o.datumTokenizer;
            this.queryTokenizer = o.queryTokenizer;
            this.reset();
      ***REMOVED***
        _.mixin(SearchIndex.prototype, {
            bootstrap: function bootstrap(o) {
                this.datums = o.datums;
                this.trie = o.trie;
          ***REMOVED***,
            add: function(data) {
                var that = this;
                data = _.isArray(data) ? data : [ data ];
                _.each(data, function(datum) {
                    var id, tokens;
                    id = that.datums.push(datum) - 1;
                    tokens = normalizeTokens(that.datumTokenizer(datum));
                    _.each(tokens, function(token) {
                        var node, chars, ch;
                        node = that.trie;
                        chars = token.split("");
                        while (ch = chars.shift()) {
                            node = node.children[ch] || (node.children[ch] = newNode());
                            node.ids.push(id);
                      ***REMOVED***
                  ***REMOVED***);
              ***REMOVED***);
          ***REMOVED***,
            get: function get(query) {
                var that = this, tokens, matches;
                tokens = normalizeTokens(this.queryTokenizer(query));
                _.each(tokens, function(token) {
                    var node, chars, ch, ids;
                    if (matches && matches.length === 0) {
                        return false;
                  ***REMOVED***
                    node = that.trie;
                    chars = token.split("");
                    while (node && (ch = chars.shift())) {
                        node = node.children[ch];
                  ***REMOVED***
                    if (node && chars.length === 0) {
                        ids = node.ids.slice(0);
                        matches = matches ? getIntersection(matches, ids) : ids;
                  ***REMOVED*** else {
                        matches = [];
                        return false;
                  ***REMOVED***
              ***REMOVED***);
                return matches ? _.map(unique(matches), function(id) {
                    return that.datums[id];
              ***REMOVED***) : [];
          ***REMOVED***,
            reset: function reset() {
                this.datums = [];
                this.trie = newNode();
          ***REMOVED***,
            serialize: function serialize() {
                return {
                    datums: this.datums,
                    trie: this.trie
              ***REMOVED***;
          ***REMOVED***
      ***REMOVED***);
        return SearchIndex;
        function normalizeTokens(tokens) {
            tokens = _.filter(tokens, function(token) {
                return !!token;
          ***REMOVED***);
            tokens = _.map(tokens, function(token) {
                return token.toLowerCase();
          ***REMOVED***);
            return tokens;
      ***REMOVED***
        function newNode() {
            return {
                ids: [],
                children: {***REMOVED***
          ***REMOVED***;
      ***REMOVED***
        function unique(array) {
            var seen = {***REMOVED***, uniques = [];
            for (var i = 0, len = array.length; i < len; i++) {
                if (!seen[array[i]]) {
                    seen[array[i]] = true;
                    uniques.push(array[i]);
              ***REMOVED***
          ***REMOVED***
            return uniques;
      ***REMOVED***
        function getIntersection(arrayA, arrayB) {
            var ai = 0, bi = 0, intersection = [];
            arrayA = arrayA.sort(compare);
            arrayB = arrayB.sort(compare);
            var lenArrayA = arrayA.length, lenArrayB = arrayB.length;
            while (ai < lenArrayA && bi < lenArrayB) {
                if (arrayA[ai] < arrayB[bi]) {
                    ai++;
              ***REMOVED*** else if (arrayA[ai] > arrayB[bi]) {
                    bi++;
              ***REMOVED*** else {
                    intersection.push(arrayA[ai]);
                    ai++;
                    bi++;
              ***REMOVED***
          ***REMOVED***
            return intersection;
            function compare(a, b) {
                return a - b;
          ***REMOVED***
      ***REMOVED***
  ***REMOVED***();
    var oParser = function() {
        "use strict";
        return {
            local: getLocal,
            prefetch: getPrefetch,
            remote: getRemote
      ***REMOVED***;
        function getLocal(o) {
            return o.local || null;
      ***REMOVED***
        function getPrefetch(o) {
            var prefetch, defaults;
            defaults = {
                url: null,
                thumbprint: "",
                ttl: 24 * 60 * 60 * 1e3,
                filter: null,
                ajax: {***REMOVED***
          ***REMOVED***;
            if (prefetch = o.prefetch || null) {
                prefetch = _.isString(prefetch) ? {
                    url: prefetch
              ***REMOVED*** : prefetch;
                prefetch = _.mixin(defaults, prefetch);
                prefetch.thumbprint = VERSION + prefetch.thumbprint;
                prefetch.ajax.type = prefetch.ajax.type || "GET";
                prefetch.ajax.dataType = prefetch.ajax.dataType || "json";
                !prefetch.url && $.error("prefetch requires url to be set");
          ***REMOVED***
            return prefetch;
      ***REMOVED***
        function getRemote(o) {
            var remote, defaults;
            defaults = {
                url: null,
                cache: true,
                wildcard: "%QUERY",
                replace: null,
                rateLimitBy: "debounce",
                rateLimitWait: 300,
                send: null,
                filter: null,
                ajax: {***REMOVED***
          ***REMOVED***;
            if (remote = o.remote || null) {
                remote = _.isString(remote) ? {
                    url: remote
              ***REMOVED*** : remote;
                remote = _.mixin(defaults, remote);
                remote.rateLimiter = /^throttle$/i.test(remote.rateLimitBy) ? byThrottle(remote.rateLimitWait) : byDebounce(remote.rateLimitWait);
                remote.ajax.type = remote.ajax.type || "GET";
                remote.ajax.dataType = remote.ajax.dataType || "json";
                delete remote.rateLimitBy;
                delete remote.rateLimitWait;
                !remote.url && $.error("remote requires url to be set");
          ***REMOVED***
            return remote;
            function byDebounce(wait) {
                return function(fn) {
                    return _.debounce(fn, wait);
              ***REMOVED***;
          ***REMOVED***
            function byThrottle(wait) {
                return function(fn) {
                    return _.throttle(fn, wait);
              ***REMOVED***;
          ***REMOVED***
      ***REMOVED***
  ***REMOVED***();
    (function(root) {
        "use strict";
        var old, keys;
        old = root.Bloodhound;
        keys = {
            data: "data",
            protocol: "protocol",
            thumbprint: "thumbprint"
      ***REMOVED***;
        root.Bloodhound = Bloodhound;
        function Bloodhound(o) {
            if (!o || !o.local && !o.prefetch && !o.remote) {
                $.error("one of local, prefetch, or remote is required");
          ***REMOVED***
            this.limit = o.limit || 5;
            this.sorter = getSorter(o.sorter);
            this.dupDetector = o.dupDetector || ignoreDuplicates;
            this.local = oParser.local(o);
            this.prefetch = oParser.prefetch(o);
            this.remote = oParser.remote(o);
            this.cacheKey = this.prefetch ? this.prefetch.cacheKey || this.prefetch.url : null;
            this.index = new SearchIndex({
                datumTokenizer: o.datumTokenizer,
                queryTokenizer: o.queryTokenizer
          ***REMOVED***);
            this.storage = this.cacheKey ? new PersistentStorage(this.cacheKey) : null;
      ***REMOVED***
        Bloodhound.noConflict = function noConflict() {
            root.Bloodhound = old;
            return Bloodhound;
      ***REMOVED***;
        Bloodhound.tokenizers = tokenizers;
        _.mixin(Bloodhound.prototype, {
            _loadPrefetch: function loadPrefetch(o) {
                var that = this, serialized, deferred;
                if (serialized = this._readFromStorage(o.thumbprint)) {
                    this.index.bootstrap(serialized);
                    deferred = $.Deferred().resolve();
              ***REMOVED*** else {
                    deferred = $.ajax(o.url, o.ajax).done(handlePrefetchResponse);
              ***REMOVED***
                return deferred;
                function handlePrefetchResponse(resp) {
                    that.clear();
                    that.add(o.filter ? o.filter(resp) : resp);
                    that._saveToStorage(that.index.serialize(), o.thumbprint, o.ttl);
              ***REMOVED***
          ***REMOVED***,
            _getFromRemote: function getFromRemote(query, cb) {
                var that = this, url, uriEncodedQuery;
                if (!this.transport) {
                    return;
              ***REMOVED***
                query = query || "";
                uriEncodedQuery = encodeURIComponent(query);
                url = this.remote.replace ? this.remote.replace(this.remote.url, query) : this.remote.url.replace(this.remote.wildcard, uriEncodedQuery);
                return this.transport.get(url, this.remote.ajax, handleRemoteResponse);
                function handleRemoteResponse(err, resp) {
                    err ? cb([]) : cb(that.remote.filter ? that.remote.filter(resp) : resp);
              ***REMOVED***
          ***REMOVED***,
            _cancelLastRemoteRequest: function cancelLastRemoteRequest() {
                this.transport && this.transport.cancel();
          ***REMOVED***,
            _saveToStorage: function saveToStorage(data, thumbprint, ttl) {
                if (this.storage) {
                    this.storage.set(keys.data, data, ttl);
                    this.storage.set(keys.protocol, location.protocol, ttl);
                    this.storage.set(keys.thumbprint, thumbprint, ttl);
              ***REMOVED***
          ***REMOVED***,
            _readFromStorage: function readFromStorage(thumbprint) {
                var stored = {***REMOVED***, isExpired;
                if (this.storage) {
                    stored.data = this.storage.get(keys.data);
                    stored.protocol = this.storage.get(keys.protocol);
                    stored.thumbprint = this.storage.get(keys.thumbprint);
              ***REMOVED***
                isExpired = stored.thumbprint !== thumbprint || stored.protocol !== location.protocol;
                return stored.data && !isExpired ? stored.data : null;
          ***REMOVED***,
            _initialize: function initialize() {
                var that = this, local = this.local, deferred;
                deferred = this.prefetch ? this._loadPrefetch(this.prefetch) : $.Deferred().resolve();
                local && deferred.done(addLocalToIndex);
                this.transport = this.remote ? new Transport(this.remote) : null;
                return this.initPromise = deferred.promise();
                function addLocalToIndex() {
                    that.add(_.isFunction(local) ? local() : local);
              ***REMOVED***
          ***REMOVED***,
            initialize: function initialize(force) {
                return !this.initPromise || force ? this._initialize() : this.initPromise;
          ***REMOVED***,
            add: function add(data) {
                this.index.add(data);
          ***REMOVED***,
            get: function get(query, cb) {
                var that = this, matches = [], cacheHit = false;
                matches = this.index.get(query);
                matches = this.sorter(matches).slice(0, this.limit);
                matches.length < this.limit ? cacheHit = this._getFromRemote(query, returnRemoteMatches) : this._cancelLastRemoteRequest();
                if (!cacheHit) {
                    (matches.length > 0 || !this.transport) && cb && cb(matches);
              ***REMOVED***
                function returnRemoteMatches(remoteMatches) {
                    var matchesWithBackfill = matches.slice(0);
                    _.each(remoteMatches, function(remoteMatch) {
                        var isDuplicate;
                        isDuplicate = _.some(matchesWithBackfill, function(match) {
                            return that.dupDetector(remoteMatch, match);
                      ***REMOVED***);
                        !isDuplicate && matchesWithBackfill.push(remoteMatch);
                        return matchesWithBackfill.length < that.limit;
                  ***REMOVED***);
                    cb && cb(that.sorter(matchesWithBackfill));
              ***REMOVED***
          ***REMOVED***,
            clear: function clear() {
                this.index.reset();
          ***REMOVED***,
            clearPrefetchCache: function clearPrefetchCache() {
                this.storage && this.storage.clear();
          ***REMOVED***,
            clearRemoteCache: function clearRemoteCache() {
                this.transport && Transport.resetCache();
          ***REMOVED***,
            ttAdapter: function ttAdapter() {
                return _.bind(this.get, this);
          ***REMOVED***
      ***REMOVED***);
        return Bloodhound;
        function getSorter(sortFn) {
            return _.isFunction(sortFn) ? sort : noSort;
            function sort(array) {
                return array.sort(sortFn);
          ***REMOVED***
            function noSort(array) {
                return array;
          ***REMOVED***
      ***REMOVED***
        function ignoreDuplicates() {
            return false;
      ***REMOVED***
  ***REMOVED***)(this);
***REMOVED***)(window.jQuery);