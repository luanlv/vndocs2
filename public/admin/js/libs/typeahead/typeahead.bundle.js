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
    var html = function() {
        return {
            wrapper: '<span class="twitter-typeahead"></span>',
            dropdown: '<span class="tt-dropdown-menu"></span>',
            dataset: '<div class="tt-dataset-%CLASS%"></div>',
            suggestions: '<span class="tt-suggestions"></span>',
            suggestion: '<div class="tt-suggestion"></div>'
      ***REMOVED***;
  ***REMOVED***();
    var css = function() {
        "use strict";
        var css = {
            wrapper: {
                position: "relative",
                display: "inline-block"
          ***REMOVED***,
            hint: {
                position: "absolute",
                top: "0",
                left: "0",
                borderColor: "transparent",
                boxShadow: "none",
                opacity: "1"
          ***REMOVED***,
            input: {
                position: "relative",
                verticalAlign: "top",
                backgroundColor: "transparent"
          ***REMOVED***,
            inputWithNoHint: {
                position: "relative",
                verticalAlign: "top"
          ***REMOVED***,
            dropdown: {
                position: "absolute",
                top: "100%",
                left: "0",
                zIndex: "100",
                display: "none"
          ***REMOVED***,
            suggestions: {
                display: "block"
          ***REMOVED***,
            suggestion: {
                whiteSpace: "nowrap",
                cursor: "pointer"
          ***REMOVED***,
            suggestionChild: {
                whiteSpace: "normal"
          ***REMOVED***,
            ltr: {
                left: "0",
                right: "auto"
          ***REMOVED***,
            rtl: {
                left: "auto",
                right: " 0"
          ***REMOVED***
      ***REMOVED***;
        if (_.isMsie()) {
            _.mixin(css.input, {
                backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
          ***REMOVED***);
      ***REMOVED***
        if (_.isMsie() && _.isMsie() <= 7) {
            _.mixin(css.input, {
                marginTop: "-1px"
          ***REMOVED***);
      ***REMOVED***
        return css;
  ***REMOVED***();
    var EventBus = function() {
        "use strict";
        var namespace = "typeahead:";
        function EventBus(o) {
            if (!o || !o.el) {
                $.error("EventBus initialized without el");
          ***REMOVED***
            this.$el = $(o.el);
      ***REMOVED***
        _.mixin(EventBus.prototype, {
            trigger: function(type) {
                var args = [].slice.call(arguments, 1);
                this.$el.trigger(namespace + type, args);
          ***REMOVED***
      ***REMOVED***);
        return EventBus;
  ***REMOVED***();
    var EventEmitter = function() {
        "use strict";
        var splitter = /\s+/, nextTick = getNextTick();
        return {
            onSync: onSync,
            onAsync: onAsync,
            off: off,
            trigger: trigger
      ***REMOVED***;
        function on(method, types, cb, context) {
            var type;
            if (!cb) {
                return this;
          ***REMOVED***
            types = types.split(splitter);
            cb = context ? bindContext(cb, context) : cb;
            this._callbacks = this._callbacks || {***REMOVED***;
            while (type = types.shift()) {
                this._callbacks[type] = this._callbacks[type] || {
                    sync: [],
                    async: []
              ***REMOVED***;
                this._callbacks[type][method].push(cb);
          ***REMOVED***
            return this;
      ***REMOVED***
        function onAsync(types, cb, context) {
            return on.call(this, "async", types, cb, context);
      ***REMOVED***
        function onSync(types, cb, context) {
            return on.call(this, "sync", types, cb, context);
      ***REMOVED***
        function off(types) {
            var type;
            if (!this._callbacks) {
                return this;
          ***REMOVED***
            types = types.split(splitter);
            while (type = types.shift()) {
                delete this._callbacks[type];
          ***REMOVED***
            return this;
      ***REMOVED***
        function trigger(types) {
            var type, callbacks, args, syncFlush, asyncFlush;
            if (!this._callbacks) {
                return this;
          ***REMOVED***
            types = types.split(splitter);
            args = [].slice.call(arguments, 1);
            while ((type = types.shift()) && (callbacks = this._callbacks[type])) {
                syncFlush = getFlush(callbacks.sync, this, [ type ].concat(args));
                asyncFlush = getFlush(callbacks.async, this, [ type ].concat(args));
                syncFlush() && nextTick(asyncFlush);
          ***REMOVED***
            return this;
      ***REMOVED***
        function getFlush(callbacks, context, args) {
            return flush;
            function flush() {
                var cancelled;
                for (var i = 0, len = callbacks.length; !cancelled && i < len; i += 1) {
                    cancelled = callbacks[i].apply(context, args) === false;
              ***REMOVED***
                return !cancelled;
          ***REMOVED***
      ***REMOVED***
        function getNextTick() {
            var nextTickFn;
            if (window.setImmediate) {
                nextTickFn = function nextTickSetImmediate(fn) {
                    setImmediate(function() {
                        fn();
                  ***REMOVED***);
              ***REMOVED***;
          ***REMOVED*** else {
                nextTickFn = function nextTickSetTimeout(fn) {
                    setTimeout(function() {
                        fn();
                  ***REMOVED***, 0);
              ***REMOVED***;
          ***REMOVED***
            return nextTickFn;
      ***REMOVED***
        function bindContext(fn, context) {
            return fn.bind ? fn.bind(context) : function() {
                fn.apply(context, [].slice.call(arguments, 0));
          ***REMOVED***;
      ***REMOVED***
  ***REMOVED***();
    var highlight = function(doc) {
        "use strict";
        var defaults = {
            node: null,
            pattern: null,
            tagName: "strong",
            className: null,
            wordsOnly: false,
            caseSensitive: false
      ***REMOVED***;
        return function hightlight(o) {
            var regex;
            o = _.mixin({***REMOVED***, defaults, o);
            if (!o.node || !o.pattern) {
                return;
          ***REMOVED***
            o.pattern = _.isArray(o.pattern) ? o.pattern : [ o.pattern ];
            regex = getRegex(o.pattern, o.caseSensitive, o.wordsOnly);
            traverse(o.node, hightlightTextNode);
            function hightlightTextNode(textNode) {
                var match, patternNode, wrapperNode;
                if (match = regex.exec(textNode.data)) {
                    wrapperNode = doc.createElement(o.tagName);
                    o.className && (wrapperNode.className = o.className);
                    patternNode = textNode.splitText(match.index);
                    patternNode.splitText(match[0].length);
                    wrapperNode.appendChild(patternNode.cloneNode(true));
                    textNode.parentNode.replaceChild(wrapperNode, patternNode);
              ***REMOVED***
                return !!match;
          ***REMOVED***
            function traverse(el, hightlightTextNode) {
                var childNode, TEXT_NODE_TYPE = 3;
                for (var i = 0; i < el.childNodes.length; i++) {
                    childNode = el.childNodes[i];
                    if (childNode.nodeType === TEXT_NODE_TYPE) {
                        i += hightlightTextNode(childNode) ? 1 : 0;
                  ***REMOVED*** else {
                        traverse(childNode, hightlightTextNode);
                  ***REMOVED***
              ***REMOVED***
          ***REMOVED***
      ***REMOVED***;
        function getRegex(patterns, caseSensitive, wordsOnly) {
            var escapedPatterns = [], regexStr;
            for (var i = 0, len = patterns.length; i < len; i++) {
                escapedPatterns.push(_.escapeRegExChars(patterns[i]));
          ***REMOVED***
            regexStr = wordsOnly ? "\\b(" + escapedPatterns.join("|") + ")\\b" : "(" + escapedPatterns.join("|") + ")";
            return caseSensitive ? new RegExp(regexStr) : new RegExp(regexStr, "i");
      ***REMOVED***
  ***REMOVED***(window.document);
    var Input = function() {
        "use strict";
        var specialKeyCodeMap;
        specialKeyCodeMap = {
            9: "tab",
            27: "esc",
            37: "left",
            39: "right",
            13: "enter",
            38: "up",
            40: "down"
      ***REMOVED***;
        function Input(o) {
            var that = this, onBlur, onFocus, onKeydown, onInput;
            o = o || {***REMOVED***;
            if (!o.input) {
                $.error("input is missing");
          ***REMOVED***
            onBlur = _.bind(this._onBlur, this);
            onFocus = _.bind(this._onFocus, this);
            onKeydown = _.bind(this._onKeydown, this);
            onInput = _.bind(this._onInput, this);
            this.$hint = $(o.hint);
            this.$input = $(o.input).on("blur.tt", onBlur).on("focus.tt", onFocus).on("keydown.tt", onKeydown);
            if (this.$hint.length === 0) {
                this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = _.noop;
          ***REMOVED***
            if (!_.isMsie()) {
                this.$input.on("input.tt", onInput);
          ***REMOVED*** else {
                this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function($e) {
                    if (specialKeyCodeMap[$e.which || $e.keyCode]) {
                        return;
                  ***REMOVED***
                    _.defer(_.bind(that._onInput, that, $e));
              ***REMOVED***);
          ***REMOVED***
            this.query = this.$input.val();
            this.$overflowHelper = buildOverflowHelper(this.$input);
      ***REMOVED***
        Input.normalizeQuery = function(str) {
            return (str || "").replace(/^\s*/g, "").replace(/\s{2,***REMOVED***/g, " ");
      ***REMOVED***;
        _.mixin(Input.prototype, EventEmitter, {
            _onBlur: function onBlur() {
                this.resetInputValue();
                this.trigger("blurred");
          ***REMOVED***,
            _onFocus: function onFocus() {
                this.trigger("focused");
          ***REMOVED***,
            _onKeydown: function onKeydown($e) {
                var keyName = specialKeyCodeMap[$e.which || $e.keyCode];
                this._managePreventDefault(keyName, $e);
                if (keyName && this._shouldTrigger(keyName, $e)) {
                    this.trigger(keyName + "Keyed", $e);
              ***REMOVED***
          ***REMOVED***,
            _onInput: function onInput() {
                this._checkInputValue();
          ***REMOVED***,
            _managePreventDefault: function managePreventDefault(keyName, $e) {
                var preventDefault, hintValue, inputValue;
                switch (keyName) {
                  case "tab":
                    hintValue = this.getHint();
                    inputValue = this.getInputValue();
                    preventDefault = hintValue && hintValue !== inputValue && !withModifier($e);
                    break;

                  case "up":
                  case "down":
                    preventDefault = !withModifier($e);
                    break;

                  default:
                    preventDefault = false;
              ***REMOVED***
                preventDefault && $e.preventDefault();
          ***REMOVED***,
            _shouldTrigger: function shouldTrigger(keyName, $e) {
                var trigger;
                switch (keyName) {
                  case "tab":
                    trigger = !withModifier($e);
                    break;

                  default:
                    trigger = true;
              ***REMOVED***
                return trigger;
          ***REMOVED***,
            _checkInputValue: function checkInputValue() {
                var inputValue, areEquivalent, hasDifferentWhitespace;
                inputValue = this.getInputValue();
                areEquivalent = areQueriesEquivalent(inputValue, this.query);
                hasDifferentWhitespace = areEquivalent ? this.query.length !== inputValue.length : false;
                this.query = inputValue;
                if (!areEquivalent) {
                    this.trigger("queryChanged", this.query);
              ***REMOVED*** else if (hasDifferentWhitespace) {
                    this.trigger("whitespaceChanged", this.query);
              ***REMOVED***
          ***REMOVED***,
            focus: function focus() {
                this.$input.focus();
          ***REMOVED***,
            blur: function blur() {
                this.$input.blur();
          ***REMOVED***,
            getQuery: function getQuery() {
                return this.query;
          ***REMOVED***,
            setQuery: function setQuery(query) {
                this.query = query;
          ***REMOVED***,
            getInputValue: function getInputValue() {
                return this.$input.val();
          ***REMOVED***,
            setInputValue: function setInputValue(value, silent) {
                this.$input.val(value);
                silent ? this.clearHint() : this._checkInputValue();
          ***REMOVED***,
            resetInputValue: function resetInputValue() {
                this.setInputValue(this.query, true);
          ***REMOVED***,
            getHint: function getHint() {
                return this.$hint.val();
          ***REMOVED***,
            setHint: function setHint(value) {
                this.$hint.val(value);
          ***REMOVED***,
            clearHint: function clearHint() {
                this.setHint("");
          ***REMOVED***,
            clearHintIfInvalid: function clearHintIfInvalid() {
                var val, hint, valIsPrefixOfHint, isValid;
                val = this.getInputValue();
                hint = this.getHint();
                valIsPrefixOfHint = val !== hint && hint.indexOf(val) === 0;
                isValid = val !== "" && valIsPrefixOfHint && !this.hasOverflow();
                !isValid && this.clearHint();
          ***REMOVED***,
            getLanguageDirection: function getLanguageDirection() {
                return (this.$input.css("direction") || "ltr").toLowerCase();
          ***REMOVED***,
            hasOverflow: function hasOverflow() {
                var constraint = this.$input.width() - 2;
                this.$overflowHelper.text(this.getInputValue());
                return this.$overflowHelper.width() >= constraint;
          ***REMOVED***,
            isCursorAtEnd: function() {
                var valueLength, selectionStart, range;
                valueLength = this.$input.val().length;
                selectionStart = this.$input[0].selectionStart;
                if (_.isNumber(selectionStart)) {
                    return selectionStart === valueLength;
              ***REMOVED*** else if (document.selection) {
                    range = document.selection.createRange();
                    range.moveStart("character", -valueLength);
                    return valueLength === range.text.length;
              ***REMOVED***
                return true;
          ***REMOVED***,
            destroy: function destroy() {
                this.$hint.off(".tt");
                this.$input.off(".tt");
                this.$hint = this.$input = this.$overflowHelper = null;
          ***REMOVED***
      ***REMOVED***);
        return Input;
        function buildOverflowHelper($input) {
            return $('<pre aria-hidden="true"></pre>').css({
                position: "absolute",
                visibility: "hidden",
                whiteSpace: "pre",
                fontFamily: $input.css("font-family"),
                fontSize: $input.css("font-size"),
                fontStyle: $input.css("font-style"),
                fontVariant: $input.css("font-variant"),
                fontWeight: $input.css("font-weight"),
                wordSpacing: $input.css("word-spacing"),
                letterSpacing: $input.css("letter-spacing"),
                textIndent: $input.css("text-indent"),
                textRendering: $input.css("text-rendering"),
                textTransform: $input.css("text-transform")
          ***REMOVED***).insertAfter($input);
      ***REMOVED***
        function areQueriesEquivalent(a, b) {
            return Input.normalizeQuery(a) === Input.normalizeQuery(b);
      ***REMOVED***
        function withModifier($e) {
            return $e.altKey || $e.ctrlKey || $e.metaKey || $e.shiftKey;
      ***REMOVED***
  ***REMOVED***();
    var Dataset = function() {
        "use strict";
        var datasetKey = "ttDataset", valueKey = "ttValue", datumKey = "ttDatum";
        function Dataset(o) {
            o = o || {***REMOVED***;
            o.templates = o.templates || {***REMOVED***;
            if (!o.source) {
                $.error("missing source");
          ***REMOVED***
            if (o.name && !isValidName(o.name)) {
                $.error("invalid dataset name: " + o.name);
          ***REMOVED***
            this.query = null;
            this.highlight = !!o.highlight;
            this.name = o.name || _.getUniqueId();
            this.source = o.source;
            this.displayFn = getDisplayFn(o.display || o.displayKey);
            this.templates = getTemplates(o.templates, this.displayFn);
            this.$el = $(html.dataset.replace("%CLASS%", this.name));
      ***REMOVED***
        Dataset.extractDatasetName = function extractDatasetName(el) {
            return $(el).data(datasetKey);
      ***REMOVED***;
        Dataset.extractValue = function extractDatum(el) {
            return $(el).data(valueKey);
      ***REMOVED***;
        Dataset.extractDatum = function extractDatum(el) {
            return $(el).data(datumKey);
      ***REMOVED***;
        _.mixin(Dataset.prototype, EventEmitter, {
            _render: function render(query, suggestions) {
                if (!this.$el) {
                    return;
              ***REMOVED***
                var that = this, hasSuggestions;
                this.$el.empty();
                hasSuggestions = suggestions && suggestions.length;
                if (!hasSuggestions && this.templates.empty) {
                    this.$el.html(getEmptyHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
              ***REMOVED*** else if (hasSuggestions) {
                    this.$el.html(getSuggestionsHtml()).prepend(that.templates.header ? getHeaderHtml() : null).append(that.templates.footer ? getFooterHtml() : null);
              ***REMOVED***
                this.trigger("rendered");
                function getEmptyHtml() {
                    return that.templates.empty({
                        query: query,
                        isEmpty: true
                  ***REMOVED***);
              ***REMOVED***
                function getSuggestionsHtml() {
                    var $suggestions, nodes;
                    $suggestions = $(html.suggestions).css(css.suggestions);
                    nodes = _.map(suggestions, getSuggestionNode);
                    $suggestions.append.apply($suggestions, nodes);
                    that.highlight && highlight({
                        className: "tt-highlight",
                        node: $suggestions[0],
                        pattern: query
                  ***REMOVED***);
                    return $suggestions;
                    function getSuggestionNode(suggestion) {
                        var $el;
                        $el = $(html.suggestion).append(that.templates.suggestion(suggestion)).data(datasetKey, that.name).data(valueKey, that.displayFn(suggestion)).data(datumKey, suggestion);
                        $el.children().each(function() {
                            $(this).css(css.suggestionChild);
                      ***REMOVED***);
                        return $el;
                  ***REMOVED***
              ***REMOVED***
                function getHeaderHtml() {
                    return that.templates.header({
                        query: query,
                        isEmpty: !hasSuggestions
                  ***REMOVED***);
              ***REMOVED***
                function getFooterHtml() {
                    return that.templates.footer({
                        query: query,
                        isEmpty: !hasSuggestions
                  ***REMOVED***);
              ***REMOVED***
          ***REMOVED***,
            getRoot: function getRoot() {
                return this.$el;
          ***REMOVED***,
            update: function update(query) {
                var that = this;
                this.query = query;
                this.canceled = false;
                this.source(query, render);
                function render(suggestions) {
                    if (!that.canceled && query === that.query) {
                        that._render(query, suggestions);
                  ***REMOVED***
              ***REMOVED***
          ***REMOVED***,
            cancel: function cancel() {
                this.canceled = true;
          ***REMOVED***,
            clear: function clear() {
                this.cancel();
                this.$el.empty();
                this.trigger("rendered");
          ***REMOVED***,
            isEmpty: function isEmpty() {
                return this.$el.is(":empty");
          ***REMOVED***,
            destroy: function destroy() {
                this.$el = null;
          ***REMOVED***
      ***REMOVED***);
        return Dataset;
        function getDisplayFn(display) {
            display = display || "value";
            return _.isFunction(display) ? display : displayFn;
            function displayFn(obj) {
                return obj[display];
          ***REMOVED***
      ***REMOVED***
        function getTemplates(templates, displayFn) {
            return {
                empty: templates.empty && _.templatify(templates.empty),
                header: templates.header && _.templatify(templates.header),
                footer: templates.footer && _.templatify(templates.footer),
                suggestion: templates.suggestion || suggestionTemplate
          ***REMOVED***;
            function suggestionTemplate(context) {
                return "<p>" + displayFn(context) + "</p>";
          ***REMOVED***
      ***REMOVED***
        function isValidName(str) {
            return /^[_a-zA-Z0-9-]+$/.test(str);
      ***REMOVED***
  ***REMOVED***();
    var Dropdown = function() {
        "use strict";
        function Dropdown(o) {
            var that = this, onSuggestionClick, onSuggestionMouseEnter, onSuggestionMouseLeave;
            o = o || {***REMOVED***;
            if (!o.menu) {
                $.error("menu is required");
          ***REMOVED***
            this.isOpen = false;
            this.isEmpty = true;
            this.datasets = _.map(o.datasets, initializeDataset);
            onSuggestionClick = _.bind(this._onSuggestionClick, this);
            onSuggestionMouseEnter = _.bind(this._onSuggestionMouseEnter, this);
            onSuggestionMouseLeave = _.bind(this._onSuggestionMouseLeave, this);
            this.$menu = $(o.menu).on("click.tt", ".tt-suggestion", onSuggestionClick).on("mouseenter.tt", ".tt-suggestion", onSuggestionMouseEnter).on("mouseleave.tt", ".tt-suggestion", onSuggestionMouseLeave);
            _.each(this.datasets, function(dataset) {
                that.$menu.append(dataset.getRoot());
                dataset.onSync("rendered", that._onRendered, that);
          ***REMOVED***);
      ***REMOVED***
        _.mixin(Dropdown.prototype, EventEmitter, {
            _onSuggestionClick: function onSuggestionClick($e) {
                this.trigger("suggestionClicked", $($e.currentTarget));
          ***REMOVED***,
            _onSuggestionMouseEnter: function onSuggestionMouseEnter($e) {
                this._removeCursor();
                this._setCursor($($e.currentTarget), true);
          ***REMOVED***,
            _onSuggestionMouseLeave: function onSuggestionMouseLeave() {
                this._removeCursor();
          ***REMOVED***,
            _onRendered: function onRendered() {
                this.isEmpty = _.every(this.datasets, isDatasetEmpty);
                this.isEmpty ? this._hide() : this.isOpen && this._show();
                this.trigger("datasetRendered");
                function isDatasetEmpty(dataset) {
                    return dataset.isEmpty();
              ***REMOVED***
          ***REMOVED***,
            _hide: function() {
                this.$menu.hide();
          ***REMOVED***,
            _show: function() {
                this.$menu.css("display", "block");
          ***REMOVED***,
            _getSuggestions: function getSuggestions() {
                return this.$menu.find(".tt-suggestion");
          ***REMOVED***,
            _getCursor: function getCursor() {
                return this.$menu.find(".tt-cursor").first();
          ***REMOVED***,
            _setCursor: function setCursor($el, silent) {
                $el.first().addClass("tt-cursor");
                !silent && this.trigger("cursorMoved");
          ***REMOVED***,
            _removeCursor: function removeCursor() {
                this._getCursor().removeClass("tt-cursor");
          ***REMOVED***,
            _moveCursor: function moveCursor(increment) {
                var $suggestions, $oldCursor, newCursorIndex, $newCursor;
                if (!this.isOpen) {
                    return;
              ***REMOVED***
                $oldCursor = this._getCursor();
                $suggestions = this._getSuggestions();
                this._removeCursor();
                newCursorIndex = $suggestions.index($oldCursor) + increment;
                newCursorIndex = (newCursorIndex + 1) % ($suggestions.length + 1) - 1;
                if (newCursorIndex === -1) {
                    this.trigger("cursorRemoved");
                    return;
              ***REMOVED*** else if (newCursorIndex < -1) {
                    newCursorIndex = $suggestions.length - 1;
              ***REMOVED***
                this._setCursor($newCursor = $suggestions.eq(newCursorIndex));
                this._ensureVisible($newCursor);
          ***REMOVED***,
            _ensureVisible: function ensureVisible($el) {
                var elTop, elBottom, menuScrollTop, menuHeight;
                elTop = $el.position().top;
                elBottom = elTop + $el.outerHeight(true);
                menuScrollTop = this.$menu.scrollTop();
                menuHeight = this.$menu.height() + parseInt(this.$menu.css("paddingTop"), 10) + parseInt(this.$menu.css("paddingBottom"), 10);
                if (elTop < 0) {
                    this.$menu.scrollTop(menuScrollTop + elTop);
              ***REMOVED*** else if (menuHeight < elBottom) {
                    this.$menu.scrollTop(menuScrollTop + (elBottom - menuHeight));
              ***REMOVED***
          ***REMOVED***,
            close: function close() {
                if (this.isOpen) {
                    this.isOpen = false;
                    this._removeCursor();
                    this._hide();
                    this.trigger("closed");
              ***REMOVED***
          ***REMOVED***,
            open: function open() {
                if (!this.isOpen) {
                    this.isOpen = true;
                    !this.isEmpty && this._show();
                    this.trigger("opened");
              ***REMOVED***
          ***REMOVED***,
            setLanguageDirection: function setLanguageDirection(dir) {
                this.$menu.css(dir === "ltr" ? css.ltr : css.rtl);
          ***REMOVED***,
            moveCursorUp: function moveCursorUp() {
                this._moveCursor(-1);
          ***REMOVED***,
            moveCursorDown: function moveCursorDown() {
                this._moveCursor(+1);
          ***REMOVED***,
            getDatumForSuggestion: function getDatumForSuggestion($el) {
                var datum = null;
                if ($el.length) {
                    datum = {
                        raw: Dataset.extractDatum($el),
                        value: Dataset.extractValue($el),
                        datasetName: Dataset.extractDatasetName($el)
                  ***REMOVED***;
              ***REMOVED***
                return datum;
          ***REMOVED***,
            getDatumForCursor: function getDatumForCursor() {
                return this.getDatumForSuggestion(this._getCursor().first());
          ***REMOVED***,
            getDatumForTopSuggestion: function getDatumForTopSuggestion() {
                return this.getDatumForSuggestion(this._getSuggestions().first());
          ***REMOVED***,
            update: function update(query) {
                _.each(this.datasets, updateDataset);
                function updateDataset(dataset) {
                    dataset.update(query);
              ***REMOVED***
          ***REMOVED***,
            empty: function empty() {
                _.each(this.datasets, clearDataset);
                this.isEmpty = true;
                function clearDataset(dataset) {
                    dataset.clear();
              ***REMOVED***
          ***REMOVED***,
            isVisible: function isVisible() {
                return this.isOpen && !this.isEmpty;
          ***REMOVED***,
            destroy: function destroy() {
                this.$menu.off(".tt");
                this.$menu = null;
                _.each(this.datasets, destroyDataset);
                function destroyDataset(dataset) {
                    dataset.destroy();
              ***REMOVED***
          ***REMOVED***
      ***REMOVED***);
        return Dropdown;
        function initializeDataset(oDataset) {
            return new Dataset(oDataset);
      ***REMOVED***
  ***REMOVED***();
    var Typeahead = function() {
        "use strict";
        var attrsKey = "ttAttrs";
        function Typeahead(o) {
            var $menu, $input, $hint;
            o = o || {***REMOVED***;
            if (!o.input) {
                $.error("missing input");
          ***REMOVED***
            this.isActivated = false;
            this.autoselect = !!o.autoselect;
            this.minLength = _.isNumber(o.minLength) ? o.minLength : 1;
            this.$node = buildDom(o.input, o.withHint);
            $menu = this.$node.find(".tt-dropdown-menu");
            $input = this.$node.find(".tt-input");
            $hint = this.$node.find(".tt-hint");
            $input.on("blur.tt", function($e) {
                var active, isActive, hasActive;
                active = document.activeElement;
                isActive = $menu.is(active);
                hasActive = $menu.has(active).length > 0;
                if (_.isMsie() && (isActive || hasActive)) {
                    $e.preventDefault();
                    $e.stopImmediatePropagation();
                    _.defer(function() {
                        $input.focus();
                  ***REMOVED***);
              ***REMOVED***
          ***REMOVED***);
            $menu.on("mousedown.tt", function($e) {
                $e.preventDefault();
          ***REMOVED***);
            this.eventBus = o.eventBus || new EventBus({
                el: $input
          ***REMOVED***);
            this.dropdown = new Dropdown({
                menu: $menu,
                datasets: o.datasets
          ***REMOVED***).onSync("suggestionClicked", this._onSuggestionClicked, this).onSync("cursorMoved", this._onCursorMoved, this).onSync("cursorRemoved", this._onCursorRemoved, this).onSync("opened", this._onOpened, this).onSync("closed", this._onClosed, this).onAsync("datasetRendered", this._onDatasetRendered, this);
            this.input = new Input({
                input: $input,
                hint: $hint
          ***REMOVED***).onSync("focused", this._onFocused, this).onSync("blurred", this._onBlurred, this).onSync("enterKeyed", this._onEnterKeyed, this).onSync("tabKeyed", this._onTabKeyed, this).onSync("escKeyed", this._onEscKeyed, this).onSync("upKeyed", this._onUpKeyed, this).onSync("downKeyed", this._onDownKeyed, this).onSync("leftKeyed", this._onLeftKeyed, this).onSync("rightKeyed", this._onRightKeyed, this).onSync("queryChanged", this._onQueryChanged, this).onSync("whitespaceChanged", this._onWhitespaceChanged, this);
            this._setLanguageDirection();
      ***REMOVED***
        _.mixin(Typeahead.prototype, {
            _onSuggestionClicked: function onSuggestionClicked(type, $el) {
                var datum;
                if (datum = this.dropdown.getDatumForSuggestion($el)) {
                    this._select(datum);
              ***REMOVED***
          ***REMOVED***,
            _onCursorMoved: function onCursorMoved() {
                var datum = this.dropdown.getDatumForCursor();
                this.input.setInputValue(datum.value, true);
                this.eventBus.trigger("cursorchanged", datum.raw, datum.datasetName);
          ***REMOVED***,
            _onCursorRemoved: function onCursorRemoved() {
                this.input.resetInputValue();
                this._updateHint();
          ***REMOVED***,
            _onDatasetRendered: function onDatasetRendered() {
                this._updateHint();
          ***REMOVED***,
            _onOpened: function onOpened() {
                this._updateHint();
                this.eventBus.trigger("opened");
          ***REMOVED***,
            _onClosed: function onClosed() {
                this.input.clearHint();
                this.eventBus.trigger("closed");
          ***REMOVED***,
            _onFocused: function onFocused() {
                this.isActivated = true;
                this.dropdown.open();
          ***REMOVED***,
            _onBlurred: function onBlurred() {
                this.isActivated = false;
                this.dropdown.empty();
                this.dropdown.close();
          ***REMOVED***,
            _onEnterKeyed: function onEnterKeyed(type, $e) {
                var cursorDatum, topSuggestionDatum;
                cursorDatum = this.dropdown.getDatumForCursor();
                topSuggestionDatum = this.dropdown.getDatumForTopSuggestion();
                if (cursorDatum) {
                    this._select(cursorDatum);
                    $e.preventDefault();
              ***REMOVED*** else if (this.autoselect && topSuggestionDatum) {
                    this._select(topSuggestionDatum);
                    $e.preventDefault();
              ***REMOVED***
          ***REMOVED***,
            _onTabKeyed: function onTabKeyed(type, $e) {
                var datum;
                if (datum = this.dropdown.getDatumForCursor()) {
                    this._select(datum);
                    $e.preventDefault();
              ***REMOVED*** else {
                    this._autocomplete(true);
              ***REMOVED***
          ***REMOVED***,
            _onEscKeyed: function onEscKeyed() {
                this.dropdown.close();
                this.input.resetInputValue();
          ***REMOVED***,
            _onUpKeyed: function onUpKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorUp();
                this.dropdown.open();
          ***REMOVED***,
            _onDownKeyed: function onDownKeyed() {
                var query = this.input.getQuery();
                this.dropdown.isEmpty && query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.moveCursorDown();
                this.dropdown.open();
          ***REMOVED***,
            _onLeftKeyed: function onLeftKeyed() {
                this.dir === "rtl" && this._autocomplete();
          ***REMOVED***,
            _onRightKeyed: function onRightKeyed() {
                this.dir === "ltr" && this._autocomplete();
          ***REMOVED***,
            _onQueryChanged: function onQueryChanged(e, query) {
                this.input.clearHintIfInvalid();
                query.length >= this.minLength ? this.dropdown.update(query) : this.dropdown.empty();
                this.dropdown.open();
                this._setLanguageDirection();
          ***REMOVED***,
            _onWhitespaceChanged: function onWhitespaceChanged() {
                this._updateHint();
                this.dropdown.open();
          ***REMOVED***,
            _setLanguageDirection: function setLanguageDirection() {
                var dir;
                if (this.dir !== (dir = this.input.getLanguageDirection())) {
                    this.dir = dir;
                    this.$node.css("direction", dir);
                    this.dropdown.setLanguageDirection(dir);
              ***REMOVED***
          ***REMOVED***,
            _updateHint: function updateHint() {
                var datum, val, query, escapedQuery, frontMatchRegEx, match;
                datum = this.dropdown.getDatumForTopSuggestion();
                if (datum && this.dropdown.isVisible() && !this.input.hasOverflow()) {
                    val = this.input.getInputValue();
                    query = Input.normalizeQuery(val);
                    escapedQuery = _.escapeRegExChars(query);
                    frontMatchRegEx = new RegExp("^(?:" + escapedQuery + ")(.+$)", "i");
                    match = frontMatchRegEx.exec(datum.value);
                    match ? this.input.setHint(val + match[1]) : this.input.clearHint();
              ***REMOVED*** else {
                    this.input.clearHint();
              ***REMOVED***
          ***REMOVED***,
            _autocomplete: function autocomplete(laxCursor) {
                var hint, query, isCursorAtEnd, datum;
                hint = this.input.getHint();
                query = this.input.getQuery();
                isCursorAtEnd = laxCursor || this.input.isCursorAtEnd();
                if (hint && query !== hint && isCursorAtEnd) {
                    datum = this.dropdown.getDatumForTopSuggestion();
                    datum && this.input.setInputValue(datum.value);
                    this.eventBus.trigger("autocompleted", datum.raw, datum.datasetName);
              ***REMOVED***
          ***REMOVED***,
            _select: function select(datum) {
                this.input.setQuery(datum.value);
                this.input.setInputValue(datum.value, true);
                this._setLanguageDirection();
                this.eventBus.trigger("selected", datum.raw, datum.datasetName);
                this.dropdown.close();
                _.defer(_.bind(this.dropdown.empty, this.dropdown));
          ***REMOVED***,
            open: function open() {
                this.dropdown.open();
          ***REMOVED***,
            close: function close() {
                this.dropdown.close();
          ***REMOVED***,
            setVal: function setVal(val) {
                val = _.toStr(val);
                if (this.isActivated) {
                    this.input.setInputValue(val);
              ***REMOVED*** else {
                    this.input.setQuery(val);
                    this.input.setInputValue(val, true);
              ***REMOVED***
                this._setLanguageDirection();
          ***REMOVED***,
            getVal: function getVal() {
                return this.input.getQuery();
          ***REMOVED***,
            destroy: function destroy() {
                this.input.destroy();
                this.dropdown.destroy();
                destroyDomStructure(this.$node);
                this.$node = null;
          ***REMOVED***
      ***REMOVED***);
        return Typeahead;
        function buildDom(input, withHint) {
            var $input, $wrapper, $dropdown, $hint;
            $input = $(input);
            $wrapper = $(html.wrapper).css(css.wrapper);
            $dropdown = $(html.dropdown).css(css.dropdown);
            $hint = $input.clone().css(css.hint).css(getBackgroundStyles($input));
            $hint.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly", true).attr({
                autocomplete: "off",
                spellcheck: "false",
                tabindex: -1
          ***REMOVED***);
            $input.data(attrsKey, {
                dir: $input.attr("dir"),
                autocomplete: $input.attr("autocomplete"),
                spellcheck: $input.attr("spellcheck"),
                style: $input.attr("style")
          ***REMOVED***);
            $input.addClass("tt-input").attr({
                autocomplete: "off",
                spellcheck: false
          ***REMOVED***).css(withHint ? css.input : css.inputWithNoHint);
            try {
                !$input.attr("dir") && $input.attr("dir", "auto");
          ***REMOVED*** catch (e) {***REMOVED***
            return $input.wrap($wrapper).parent().prepend(withHint ? $hint : null).append($dropdown);
      ***REMOVED***
        function getBackgroundStyles($el) {
            return {
                backgroundAttachment: $el.css("background-attachment"),
                backgroundClip: $el.css("background-clip"),
                backgroundColor: $el.css("background-color"),
                backgroundImage: $el.css("background-image"),
                backgroundOrigin: $el.css("background-origin"),
                backgroundPosition: $el.css("background-position"),
                backgroundRepeat: $el.css("background-repeat"),
                backgroundSize: $el.css("background-size")
          ***REMOVED***;
      ***REMOVED***
        function destroyDomStructure($node) {
            var $input = $node.find(".tt-input");
            _.each($input.data(attrsKey), function(val, key) {
                _.isUndefined(val) ? $input.removeAttr(key) : $input.attr(key, val);
          ***REMOVED***);
            $input.detach().removeData(attrsKey).removeClass("tt-input").insertAfter($node);
            $node.remove();
      ***REMOVED***
  ***REMOVED***();
    (function() {
        "use strict";
        var old, typeaheadKey, methods;
        old = $.fn.typeahead;
        typeaheadKey = "ttTypeahead";
        methods = {
            initialize: function initialize(o, datasets) {
                datasets = _.isArray(datasets) ? datasets : [].slice.call(arguments, 1);
                o = o || {***REMOVED***;
                return this.each(attach);
                function attach() {
                    var $input = $(this), eventBus, typeahead;
                    _.each(datasets, function(d) {
                        d.highlight = !!o.highlight;
                  ***REMOVED***);
                    typeahead = new Typeahead({
                        input: $input,
                        eventBus: eventBus = new EventBus({
                            el: $input
                      ***REMOVED***),
                        withHint: _.isUndefined(o.hint) ? true : !!o.hint,
                        minLength: o.minLength,
                        autoselect: o.autoselect,
                        datasets: datasets
                  ***REMOVED***);
                    $input.data(typeaheadKey, typeahead);
              ***REMOVED***
          ***REMOVED***,
            open: function open() {
                return this.each(openTypeahead);
                function openTypeahead() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.open();
                  ***REMOVED***
              ***REMOVED***
          ***REMOVED***,
            close: function close() {
                return this.each(closeTypeahead);
                function closeTypeahead() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.close();
                  ***REMOVED***
              ***REMOVED***
          ***REMOVED***,
            val: function val(newVal) {
                return !arguments.length ? getVal(this.first()) : this.each(setVal);
                function setVal() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.setVal(newVal);
                  ***REMOVED***
              ***REMOVED***
                function getVal($input) {
                    var typeahead, query;
                    if (typeahead = $input.data(typeaheadKey)) {
                        query = typeahead.getVal();
                  ***REMOVED***
                    return query;
              ***REMOVED***
          ***REMOVED***,
            destroy: function destroy() {
                return this.each(unattach);
                function unattach() {
                    var $input = $(this), typeahead;
                    if (typeahead = $input.data(typeaheadKey)) {
                        typeahead.destroy();
                        $input.removeData(typeaheadKey);
                  ***REMOVED***
              ***REMOVED***
          ***REMOVED***
      ***REMOVED***;
        $.fn.typeahead = function(method) {
            var tts;
            if (methods[method] && method !== "initialize") {
                tts = this.filter(function() {
                    return !!$(this).data(typeaheadKey);
              ***REMOVED***);
                return methods[method].apply(tts, [].slice.call(arguments, 1));
          ***REMOVED*** else {
                return methods.initialize.apply(this, arguments);
          ***REMOVED***
      ***REMOVED***;
        $.fn.typeahead.noConflict = function noConflict() {
            $.fn.typeahead = old;
            return this;
      ***REMOVED***;
  ***REMOVED***)();
***REMOVED***)(window.jQuery);