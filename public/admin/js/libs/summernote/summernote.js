/**
 * Super simple wysiwyg editor on Bootstrap v0.6.0
 * http://hackerwins.github.io/summernote/
 *
 * summernote.js
 * Copyright 2013-2014 Alan Hong. and other contributors
 * summernote may be freely distributed under the MIT license./
 *
 * Date: 2014-12-23T20:10Z
 */
(function (factory) {
  /* global define */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
***REMOVED*** else {
    // Browser globals: jQuery
    factory(window.jQuery);
***REMOVED***
***REMOVED***(function ($) {
  


  if ('function' !== typeof Array.prototype.reduce) {
    /**
     * Array.prototype.reduce fallback
     *
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
     */
    Array.prototype.reduce = function (callback, optInitialValue) {
      var idx, value, length = this.length >>> 0, isValueSet = false;
      if (1 < arguments.length) {
        value = optInitialValue;
        isValueSet = true;
    ***REMOVED***
      for (idx = 0; length > idx; ++idx) {
        if (this.hasOwnProperty(idx)) {
          if (isValueSet) {
            value = callback(value, this[idx], idx, this);
        ***REMOVED*** else {
            value = this[idx];
            isValueSet = true;
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
      if (!isValueSet) {
        throw new TypeError('Reduce of empty array with no initial value');
    ***REMOVED***
      return value;
  ***REMOVED***;
***REMOVED***

  if ('function' !== typeof Array.prototype.filter) {
    Array.prototype.filter = function (fun/*, thisArg*/) {
      if (this === void 0 || this === null) {
        throw new TypeError();
    ***REMOVED***
  
      var t = Object(this);
      var len = t.length >>> 0;
      if (typeof fun !== 'function') {
        throw new TypeError();
    ***REMOVED***
  
      var res = [];
      var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
      for (var i = 0; i < len; i++) {
        if (i in t) {
          var val = t[i];
          if (fun.call(thisArg, val, i, t)) {
            res.push(val);
        ***REMOVED***
      ***REMOVED***
    ***REMOVED***
  
      return res;
  ***REMOVED***;
***REMOVED***

  var isSupportAmd = typeof define === 'function' && define.amd;

  /**
   * returns whether font is installed or not.
   * @param {String***REMOVED*** fontName
   * @return {Boolean***REMOVED***
   */
  var isFontInstalled = function (fontName) {
    var testFontName = fontName === 'Comic Sans MS' ? 'Courier New' : 'Comic Sans MS';
    var $tester = $('<div>').css({
      position: 'absolute',
      left: '-9999px',
      top: '-9999px',
      fontSize: '200px'
  ***REMOVED***).text('mmmmmmmmmwwwwwww').appendTo(document.body);

    var originalWidth = $tester.css('fontFamily', testFontName).width();
    var width = $tester.css('fontFamily', fontName + ',' + testFontName).width();

    $tester.remove();

    return originalWidth !== width;
***REMOVED***;

  /**
   * Object which check platform and agent
   */
  var agent = {
    isMac: navigator.appVersion.indexOf('Mac') > -1,
    isMSIE: navigator.userAgent.indexOf('MSIE') > -1 || navigator.userAgent.indexOf('Trident') > -1,
    isFF: navigator.userAgent.indexOf('Firefox') > -1,
    jqueryVersion: parseFloat($.fn.jquery),
    isSupportAmd: isSupportAmd,
    hasCodeMirror: isSupportAmd ? require.specified('CodeMirror') : !!window.CodeMirror,
    isFontInstalled: isFontInstalled,
    isW3CRangeSupport: !!document.createRange
***REMOVED***;

  /**
   * func utils (for high-order func's arg)
   */
  var func = (function () {
    var eq = function (itemA) {
      return function (itemB) {
        return itemA === itemB;
    ***REMOVED***;
  ***REMOVED***;

    var eq2 = function (itemA, itemB) {
      return itemA === itemB;
  ***REMOVED***;

    var peq2 = function (propName) {
      return function (itemA, itemB) {
        return itemA[propName] === itemB[propName];
    ***REMOVED***;
  ***REMOVED***;

    var ok = function () {
      return true;
  ***REMOVED***;

    var fail = function () {
      return false;
  ***REMOVED***;

    var not = function (f) {
      return function () {
        return !f.apply(f, arguments);
    ***REMOVED***;
  ***REMOVED***;

    var and = function (fA, fB) {
      return function (item) {
        return fA(item) && fB(item);
    ***REMOVED***;
  ***REMOVED***;

    var self = function (a) {
      return a;
  ***REMOVED***;

    var idCounter = 0;

    /**
     * generate a globally-unique id
     *
     * @param {String***REMOVED*** [prefix]
     */
    var uniqueId = function (prefix) {
      var id = ++idCounter + '';
      return prefix ? prefix + id : id;
  ***REMOVED***;

    /**
     * returns bnd (bounds) from rect
     *
     * - IE Compatability Issue: http://goo.gl/sRLOAo
     * - Scroll Issue: http://goo.gl/sNjUc
     *
     * @param {Rect***REMOVED*** rect
     * @return {Object***REMOVED*** bounds
     * @return {Number***REMOVED*** bounds.top
     * @return {Number***REMOVED*** bounds.left
     * @return {Number***REMOVED*** bounds.width
     * @return {Number***REMOVED*** bounds.height
     */
    var rect2bnd = function (rect) {
      var $document = $(document);
      return {
        top: rect.top + $document.scrollTop(),
        left: rect.left + $document.scrollLeft(),
        width: rect.right - rect.left,
        height: rect.bottom - rect.top
    ***REMOVED***;
  ***REMOVED***;

    /**
     * returns a copy of the object where the keys have become the values and the values the keys.
     * @param {Object***REMOVED*** obj
     * @return {Object***REMOVED***
     */
    var invertObject = function (obj) {
      var inverted = {***REMOVED***;
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          inverted[obj[key]] = key;
      ***REMOVED***
    ***REMOVED***
      return inverted;
  ***REMOVED***;

    return {
      eq: eq,
      eq2: eq2,
      peq2: peq2,
      ok: ok,
      fail: fail,
      self: self,
      not: not,
      and: and,
      uniqueId: uniqueId,
      rect2bnd: rect2bnd,
      invertObject: invertObject
  ***REMOVED***;
***REMOVED***)();

  /**
   * list utils
   */
  var list = (function () {
    /**
     * returns the first item of an array.
     *
     * @param {Array***REMOVED*** array
     */
    var head = function (array) {
      return array[0];
  ***REMOVED***;

    /**
     * returns the last item of an array.
     *
     * @param {Array***REMOVED*** array
     */
    var last = function (array) {
      return array[array.length - 1];
  ***REMOVED***;

    /**
     * returns everything but the last entry of the array.
     *
     * @param {Array***REMOVED*** array
     */
    var initial = function (array) {
      return array.slice(0, array.length - 1);
  ***REMOVED***;

    /**
     * returns the rest of the items in an array.
     *
     * @param {Array***REMOVED*** array
     */
    var tail = function (array) {
      return array.slice(1);
  ***REMOVED***;

    /**
     * returns item of array
     */
    var find = function (array, pred) {
      for (var idx = 0, len = array.length; idx < len; idx ++) {
        var item = array[idx];
        if (pred(item)) {
          return item;
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;

    /**
     * returns true if all of the values in the array pass the predicate truth test.
     */
    var all = function (array, pred) {
      for (var idx = 0, len = array.length; idx < len; idx ++) {
        if (!pred(array[idx])) {
          return false;
      ***REMOVED***
    ***REMOVED***
      return true;
  ***REMOVED***;

    /**
     * returns true if the value is present in the list.
     */
    var contains = function (array, item) {
      return $.inArray(item, array) !== -1;
  ***REMOVED***;

    /**
     * get sum from a list
     *
     * @param {Array***REMOVED*** array - array
     * @param {Function***REMOVED*** fn - iterator
     */
    var sum = function (array, fn) {
      fn = fn || func.self;
      return array.reduce(function (memo, v) {
        return memo + fn(v);
    ***REMOVED***, 0);
  ***REMOVED***;
  
    /**
     * returns a copy of the collection with array type.
     * @param {Collection***REMOVED*** collection - collection eg) node.childNodes, ...
     */
    var from = function (collection) {
      var result = [], idx = -1, length = collection.length;
      while (++idx < length) {
        result[idx] = collection[idx];
    ***REMOVED***
      return result;
  ***REMOVED***;
  
    /**
     * cluster elements by predicate function.
     *
     * @param {Array***REMOVED*** array - array
     * @param {Function***REMOVED*** fn - predicate function for cluster rule
     * @param {Array[]***REMOVED***
     */
    var clusterBy = function (array, fn) {
      if (!array.length) { return []; ***REMOVED***
      var aTail = tail(array);
      return aTail.reduce(function (memo, v) {
        var aLast = last(memo);
        if (fn(last(aLast), v)) {
          aLast[aLast.length] = v;
      ***REMOVED*** else {
          memo[memo.length] = [v];
      ***REMOVED***
        return memo;
    ***REMOVED***, [[head(array)]]);
  ***REMOVED***;
  
    /**
     * returns a copy of the array with all falsy values removed
     *
     * @param {Array***REMOVED*** array - array
     * @param {Function***REMOVED*** fn - predicate function for cluster rule
     */
    var compact = function (array) {
      var aResult = [];
      for (var idx = 0, len = array.length; idx < len; idx ++) {
        if (array[idx]) { aResult.push(array[idx]); ***REMOVED***
    ***REMOVED***
      return aResult;
  ***REMOVED***;

    /**
     * produces a duplicate-free version of the array
     *
     * @param {Array***REMOVED*** array
     */
    var unique = function (array) {
      var results = [];

      for (var idx = 0, len = array.length; idx < len; idx ++) {
        if (!contains(results, array[idx])) {
          results.push(array[idx]);
      ***REMOVED***
    ***REMOVED***

      return results;
  ***REMOVED***;

    /**
     * returns next item.
     * @param {Array***REMOVED*** array
     */
    var next = function (array, item) {
      var idx = array.indexOf(item);
      if (idx === -1) { return null; ***REMOVED***

      return array[idx + 1];
  ***REMOVED***;

    /**
     * returns prev item.
     * @param {Array***REMOVED*** array
     */
    var prev = function (array, item) {
      var idx = array.indexOf(item);
      if (idx === -1) { return null; ***REMOVED***

      return array[idx - 1];
  ***REMOVED***;

  
    return { head: head, last: last, initial: initial, tail: tail,
             prev: prev, next: next, find: find, contains: contains,
             all: all, sum: sum, from: from,
             clusterBy: clusterBy, compact: compact, unique: unique ***REMOVED***;
***REMOVED***)();


  var NBSP_CHAR = String.fromCharCode(160);
  var ZERO_WIDTH_NBSP_CHAR = '\ufeff';

  /**
   * Dom functions
   */
  var dom = (function () {
    /**
     * returns whether node is `note-editable` or not.
     *
     * @param {Node***REMOVED*** node
     * @return {Boolean***REMOVED***
     */
    var isEditable = function (node) {
      return node && $(node).hasClass('note-editable');
  ***REMOVED***;

    /**
     * returns whether node is `note-control-sizing` or not.
     *
     * @param {Node***REMOVED*** node
     * @return {Boolean***REMOVED***
     */
    var isControlSizing = function (node) {
      return node && $(node).hasClass('note-control-sizing');
  ***REMOVED***;

    /**
     * build layoutInfo from $editor(.note-editor)
     *
     * @param {jQuery***REMOVED*** $editor
     * @return {Object***REMOVED***
     */
    var buildLayoutInfo = function ($editor) {
      var makeFinder;

      // air mode
      if ($editor.hasClass('note-air-editor')) {
        var id = list.last($editor.attr('id').split('-'));
        makeFinder = function (sIdPrefix) {
          return function () { return $(sIdPrefix + id); ***REMOVED***;
      ***REMOVED***;

        return {
          editor: function () { return $editor; ***REMOVED***,
          editable: function () { return $editor; ***REMOVED***,
          popover: makeFinder('#note-popover-'),
          handle: makeFinder('#note-handle-'),
          dialog: makeFinder('#note-dialog-')
      ***REMOVED***;

        // frame mode
    ***REMOVED*** else {
        makeFinder = function (sClassName) {
          return function () { return $editor.find(sClassName); ***REMOVED***;
      ***REMOVED***;
        return {
          editor: function () { return $editor; ***REMOVED***,
          dropzone: makeFinder('.note-dropzone'),
          toolbar: makeFinder('.note-toolbar'),
          editable: makeFinder('.note-editable'),
          codable: makeFinder('.note-codable'),
          statusbar: makeFinder('.note-statusbar'),
          popover: makeFinder('.note-popover'),
          handle: makeFinder('.note-handle'),
          dialog: makeFinder('.note-dialog')
      ***REMOVED***;
    ***REMOVED***
  ***REMOVED***;

    /**
     * returns predicate which judge whether nodeName is same
     *
     * @param {String***REMOVED*** nodeName
     * @return {String***REMOVED***
     */
    var makePredByNodeName = function (nodeName) {
      nodeName = nodeName.toUpperCase();
      return function (node) {
        return node && node.nodeName.toUpperCase() === nodeName;
    ***REMOVED***;
  ***REMOVED***;

    var isText = function (node) {
      return node && node.nodeType === 3;
  ***REMOVED***;

    /**
     * ex) br, col, embed, hr, img, input, ...
     * @see http://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
     */
    var isVoid = function (node) {
      return node && /^BR|^IMG|^HR/.test(node.nodeName.toUpperCase());
  ***REMOVED***;

    var isPara = function (node) {
      if (isEditable(node)) {
        return false;
    ***REMOVED***

      // Chrome(v31.0), FF(v25.0.1) use DIV for paragraph
      return node && /^DIV|^P|^LI|^H[1-7]/.test(node.nodeName.toUpperCase());
  ***REMOVED***;

    var isLi = makePredByNodeName('LI');

    var isPurePara = function (node) {
      return isPara(node) && !isLi(node);
  ***REMOVED***;

    var isInline = function (node) {
      return !isBodyContainer(node) && !isList(node) && !isPara(node);
  ***REMOVED***;

    var isList = function (node) {
      return node && /^UL|^OL/.test(node.nodeName.toUpperCase());
  ***REMOVED***;

    var isCell = function (node) {
      return node && /^TD|^TH/.test(node.nodeName.toUpperCase());
  ***REMOVED***;

    var isBlockquote = makePredByNodeName('BLOCKQUOTE');

    var isBodyContainer = function (node) {
      return isCell(node) || isBlockquote(node) || isEditable(node);
  ***REMOVED***;

    var isAnchor = makePredByNodeName('A');

    var isParaInline = function (node) {
      return isInline(node) && !!ancestor(node, isPara);
  ***REMOVED***;

    var isBodyInline = function (node) {
      return isInline(node) && !ancestor(node, isPara);
  ***REMOVED***;

    var isBody = makePredByNodeName('BODY');

    /**
     * blank HTML for cursor position
     */
    var blankHTML = agent.isMSIE ? '&nbsp;' : '<br>';

    /**
     * returns #text's text size or element's childNodes size
     *
     * @param {Node***REMOVED*** node
     */
    var nodeLength = function (node) {
      if (isText(node)) {
        return node.nodeValue.length;
    ***REMOVED***

      return node.childNodes.length;
  ***REMOVED***;

    /**
     * returns whether node is empty or not.
     *
     * @param {Node***REMOVED*** node
     * @return {Boolean***REMOVED***
     */
    var isEmpty = function (node) {
      var len = nodeLength(node);

      if (len === 0) {
        return true;
    ***REMOVED*** else if (!dom.isText(node) && len === 1 && node.innerHTML === blankHTML) {
        // ex) <p><br></p>, <span><br></span>
        return true;
    ***REMOVED***

      return false;
  ***REMOVED***;

    /**
     * padding blankHTML if node is empty (for cursor position)
     */
    var paddingBlankHTML = function (node) {
      if (!isVoid(node) && !nodeLength(node)) {
        node.innerHTML = blankHTML;
    ***REMOVED***
  ***REMOVED***;

    /**
     * find nearest ancestor predicate hit
     *
     * @param {Node***REMOVED*** node
     * @param {Function***REMOVED*** pred - predicate function
     */
    var ancestor = function (node, pred) {
      while (node) {
        if (pred(node)) { return node; ***REMOVED***
        if (isEditable(node)) { break; ***REMOVED***

        node = node.parentNode;
    ***REMOVED***
      return null;
  ***REMOVED***;

    /**
     * returns new array of ancestor nodes (until predicate hit).
     *
     * @param {Node***REMOVED*** node
     * @param {Function***REMOVED*** [optional] pred - predicate function
     */
    var listAncestor = function (node, pred) {
      pred = pred || func.fail;

      var ancestors = [];
      ancestor(node, function (el) {
        if (!isEditable(el)) {
          ancestors.push(el);
      ***REMOVED***

        return pred(el);
    ***REMOVED***);
      return ancestors;
  ***REMOVED***;

    /**
     * find farthest ancestor predicate hit
     */
    var lastAncestor = function (node, pred) {
      var ancestors = listAncestor(node);
      return list.last(ancestors.filter(pred));
  ***REMOVED***;

    /**
     * returns common ancestor node between two nodes.
     *
     * @param {Node***REMOVED*** nodeA
     * @param {Node***REMOVED*** nodeB
     */
    var commonAncestor = function (nodeA, nodeB) {
      var ancestors = listAncestor(nodeA);
      for (var n = nodeB; n; n = n.parentNode) {
        if ($.inArray(n, ancestors) > -1) { return n; ***REMOVED***
    ***REMOVED***
      return null; // difference document area
  ***REMOVED***;

    /**
     * listing all previous siblings (until predicate hit).
     *
     * @param {Node***REMOVED*** node
     * @param {Function***REMOVED*** [optional] pred - predicate function
     */
    var listPrev = function (node, pred) {
      pred = pred || func.fail;

      var nodes = [];
      while (node) {
        if (pred(node)) { break; ***REMOVED***
        nodes.push(node);
        node = node.previousSibling;
    ***REMOVED***
      return nodes;
  ***REMOVED***;

    /**
     * listing next siblings (until predicate hit).
     *
     * @param {Node***REMOVED*** node
     * @param {Function***REMOVED*** [pred] - predicate function
     */
    var listNext = function (node, pred) {
      pred = pred || func.fail;

      var nodes = [];
      while (node) {
        if (pred(node)) { break; ***REMOVED***
        nodes.push(node);
        node = node.nextSibling;
    ***REMOVED***
      return nodes;
  ***REMOVED***;

    /**
     * listing descendant nodes
     *
     * @param {Node***REMOVED*** node
     * @param {Function***REMOVED*** [pred] - predicate function
     */
    var listDescendant = function (node, pred) {
      var descendents = [];
      pred = pred || func.ok;

      // start DFS(depth first search) with node
      (function fnWalk(current) {
        if (node !== current && pred(current)) {
          descendents.push(current);
      ***REMOVED***
        for (var idx = 0, len = current.childNodes.length; idx < len; idx++) {
          fnWalk(current.childNodes[idx]);
      ***REMOVED***
    ***REMOVED***)(node);

      return descendents;
  ***REMOVED***;

    /**
     * wrap node with new tag.
     *
     * @param {Node***REMOVED*** node
     * @param {Node***REMOVED*** tagName of wrapper
     * @return {Node***REMOVED*** - wrapper
     */
    var wrap = function (node, wrapperName) {
      var parent = node.parentNode;
      var wrapper = $('<' + wrapperName + '>')[0];

      parent.insertBefore(wrapper, node);
      wrapper.appendChild(node);

      return wrapper;
  ***REMOVED***;

    /**
     * insert node after preceding
     *
     * @param {Node***REMOVED*** node
     * @param {Node***REMOVED*** preceding - predicate function
     */
    var insertAfter = function (node, preceding) {
      var next = preceding.nextSibling, parent = preceding.parentNode;
      if (next) {
        parent.insertBefore(node, next);
    ***REMOVED*** else {
        parent.appendChild(node);
    ***REMOVED***
      return node;
  ***REMOVED***;

    /**
     * append elements.
     *
     * @param {Node***REMOVED*** node
     * @param {Collection***REMOVED*** aChild
     */
    var appendChildNodes = function (node, aChild) {
      $.each(aChild, function (idx, child) {
        node.appendChild(child);
    ***REMOVED***);
      return node;
  ***REMOVED***;

    /**
     * returns whether boundaryPoint is left edge or not.
     *
     * @param {BoundaryPoint***REMOVED*** point
     * @return {Boolean***REMOVED***
     */
    var isLeftEdgePoint = function (point) {
      return point.offset === 0;
  ***REMOVED***;

    /**
     * returns whether boundaryPoint is right edge or not.
     *
     * @param {BoundaryPoint***REMOVED*** point
     * @return {Boolean***REMOVED***
     */
    var isRightEdgePoint = function (point) {
      return point.offset === nodeLength(point.node);
  ***REMOVED***;

    /**
     * returns whether boundaryPoint is edge or not.
     *
     * @param {BoundaryPoint***REMOVED*** point
     * @return {Boolean***REMOVED***
     */
    var isEdgePoint = function (point) {
      return isLeftEdgePoint(point) || isRightEdgePoint(point);
  ***REMOVED***;

    /**
     * returns wheter node is left edge of ancestor or not.
     *
     * @param {Node***REMOVED*** node
     * @param {Node***REMOVED*** ancestor
     * @return {Boolean***REMOVED***
     */
    var isLeftEdgeOf = function (node, ancestor) {
      while (node && node !== ancestor) {
        if (position(node) !== 0) {
          return false;
      ***REMOVED***
        node = node.parentNode;
    ***REMOVED***

      return true;
  ***REMOVED***;

    /**
     * returns whether node is right edge of ancestor or not.
     *
     * @param {Node***REMOVED*** node
     * @param {Node***REMOVED*** ancestor
     * @return {Boolean***REMOVED***
     */
    var isRightEdgeOf = function (node, ancestor) {
      while (node && node !== ancestor) {
        if (position(node) !== nodeLength(node.parentNode) - 1) {
          return false;
      ***REMOVED***
        node = node.parentNode;
    ***REMOVED***

      return true;
  ***REMOVED***;

    /**
     * returns offset from parent.
     *
     * @param {Node***REMOVED*** node
     */
    var position = function (node) {
      var offset = 0;
      while ((node = node.previousSibling)) {
        offset += 1;
    ***REMOVED***
      return offset;
  ***REMOVED***;

    var hasChildren = function (node) {
      return !!(node && node.childNodes && node.childNodes.length);
  ***REMOVED***;

    /**
     * returns previous boundaryPoint
     *
     * @param {BoundaryPoint***REMOVED*** point
     * @param {Boolean***REMOVED*** isSkipInnerOffset
     * @return {BoundaryPoint***REMOVED***
     */
    var prevPoint = function (point, isSkipInnerOffset) {
      var node, offset;

      if (point.offset === 0) {
        if (isEditable(point.node)) {
          return null;
      ***REMOVED***

        node = point.node.parentNode;
        offset = position(point.node);
    ***REMOVED*** else if (hasChildren(point.node)) {
        node = point.node.childNodes[point.offset - 1];
        offset = nodeLength(node);
    ***REMOVED*** else {
        node = point.node;
        offset = isSkipInnerOffset ? 0 : point.offset - 1;
    ***REMOVED***

      return {
        node: node,
        offset: offset
    ***REMOVED***;
  ***REMOVED***;

    /**
     * returns next boundaryPoint
     *
     * @param {BoundaryPoint***REMOVED*** point
     * @param {Boolean***REMOVED*** isSkipInnerOffset
     * @return {BoundaryPoint***REMOVED***
     */
    var nextPoint = function (point, isSkipInnerOffset) {
      var node, offset;

      if (nodeLength(point.node) === point.offset) {
        if (isEditable(point.node)) {
          return null;
      ***REMOVED***

        node = point.node.parentNode;
        offset = position(point.node) + 1;
    ***REMOVED*** else if (hasChildren(point.node)) {
        node = point.node.childNodes[point.offset];
        offset = 0;
    ***REMOVED*** else {
        node = point.node;
        offset = isSkipInnerOffset ? nodeLength(point.node) : point.offset + 1;
    ***REMOVED***

      return {
        node: node,
        offset: offset
    ***REMOVED***;
  ***REMOVED***;

    /**
     * returns whether pointA and pointB is same or not.
     *
     * @param {BoundaryPoint***REMOVED*** pointA
     * @param {BoundaryPoint***REMOVED*** pointB
     * @return {Boolean***REMOVED***
     */
    var isSamePoint = function (pointA, pointB) {
      return pointA.node === pointB.node && pointA.offset === pointB.offset;
  ***REMOVED***;

    /**
     * returns whether point is visible (can set cursor) or not.
     * 
     * @param {BoundaryPoint***REMOVED*** point
     * @return {Boolean***REMOVED***
     */
    var isVisiblePoint = function (point) {
      if (isText(point.node) || !hasChildren(point.node) || isEmpty(point.node)) {
        return true;
    ***REMOVED***

      var leftNode = point.node.childNodes[point.offset - 1];
      var rightNode = point.node.childNodes[point.offset];
      if ((!leftNode || isVoid(leftNode)) && (!rightNode || isVoid(rightNode))) {
        return true;
    ***REMOVED***

      return false;
  ***REMOVED***;

    /**
     * @param {BoundaryPoint***REMOVED*** point
     * @param {Function***REMOVED*** pred
     * @return {BoundaryPoint***REMOVED***
     */
    var prevPointUntil = function (point, pred) {
      while (point) {
        if (pred(point)) {
          return point;
      ***REMOVED***

        point = prevPoint(point);
    ***REMOVED***

      return null;
  ***REMOVED***;

    /**
     * @param {BoundaryPoint***REMOVED*** point
     * @param {Function***REMOVED*** pred
     * @return {BoundaryPoint***REMOVED***
     */
    var nextPointUntil = function (point, pred) {
      while (point) {
        if (pred(point)) {
          return point;
      ***REMOVED***

        point = nextPoint(point);
    ***REMOVED***

      return null;
  ***REMOVED***;

    /**
     * @param {BoundaryPoint***REMOVED*** startPoint
     * @param {BoundaryPoint***REMOVED*** endPoint
     * @param {Function***REMOVED*** handler
     * @param {Boolean***REMOVED*** isSkipInnerOffset
     */
    var walkPoint = function (startPoint, endPoint, handler, isSkipInnerOffset) {
      var point = startPoint;

      while (point) {
        handler(point);

        if (isSamePoint(point, endPoint)) {
          break;
      ***REMOVED***

        var isSkipOffset = isSkipInnerOffset &&
                           startPoint.node !== point.node &&
                           endPoint.node !== point.node;
        point = nextPoint(point, isSkipOffset);
    ***REMOVED***
  ***REMOVED***;

    /**
     * return offsetPath(array of offset) from ancestor
     *
     * @param {Node***REMOVED*** ancestor - ancestor node
     * @param {Node***REMOVED*** node
     */
    var makeOffsetPath = function (ancestor, node) {
      var ancestors = listAncestor(node, func.eq(ancestor));
      return $.map(ancestors, position).reverse();
  ***REMOVED***;

    /**
     * return element from offsetPath(array of offset)
     *
     * @param {Node***REMOVED*** ancestor - ancestor node
     * @param {array***REMOVED*** aOffset - offsetPath
     */
    var fromOffsetPath = function (ancestor, aOffset) {
      var current = ancestor;
      for (var i = 0, len = aOffset.length; i < len; i++) {
        if (current.childNodes.length <= aOffset[i]) {
          current = current.childNodes[current.childNodes.length - 1];
      ***REMOVED*** else {
          current = current.childNodes[aOffset[i]];
      ***REMOVED***
    ***REMOVED***
      return current;
  ***REMOVED***;

    /**
     * split element or #text
     *
     * @param {BoundaryPoint***REMOVED*** point
     * @param {Boolean***REMOVED*** [isSkipPaddingBlankHTML]
     * @return {Node***REMOVED*** right node of boundaryPoint
     */
    var splitNode = function (point, isSkipPaddingBlankHTML) {
      // split #text
      if (isText(point.node)) {
        // edge case
        if (isLeftEdgePoint(point)) {
          return point.node;
      ***REMOVED*** else if (isRightEdgePoint(point)) {
          return point.node.nextSibling;
      ***REMOVED***

        return point.node.splitText(point.offset);
    ***REMOVED***

      // split element
      var childNode = point.node.childNodes[point.offset];
      var clone = insertAfter(point.node.cloneNode(false), point.node);
      appendChildNodes(clone, listNext(childNode));

      if (!isSkipPaddingBlankHTML) {
        paddingBlankHTML(point.node);
        paddingBlankHTML(clone);
    ***REMOVED***

      return clone;
  ***REMOVED***;

    /**
     * split tree by point
     *
     * @param {Node***REMOVED*** root - split root
     * @param {BoundaryPoint***REMOVED*** point
     * @param {Boolean***REMOVED*** [isSkipPaddingBlankHTML]
     * @return {Node***REMOVED*** right node of boundaryPoint
     */
    var splitTree = function (root, point, isSkipPaddingBlankHTML) {
      // ex) [#text, <span>, <p>]
      var ancestors = listAncestor(point.node, func.eq(root));

      if (!ancestors.length) {
        return null;
    ***REMOVED*** else if (ancestors.length === 1) {
        return splitNode(point, isSkipPaddingBlankHTML);
    ***REMOVED***

      return ancestors.reduce(function (node, parent) {
        var clone = insertAfter(parent.cloneNode(false), parent);

        if (node === point.node) {
          node = splitNode(point, isSkipPaddingBlankHTML);
      ***REMOVED***

        appendChildNodes(clone, listNext(node));

        if (!isSkipPaddingBlankHTML) {
          paddingBlankHTML(parent);
          paddingBlankHTML(clone);
      ***REMOVED***
        return clone;
    ***REMOVED***);
  ***REMOVED***;

    var create = function (nodeName) {
      return document.createElement(nodeName);
  ***REMOVED***;

    var createText = function (text) {
      return document.createTextNode(text);
  ***REMOVED***;

    /**
     * remove node, (isRemoveChild: remove child or not)
     * @param {Node***REMOVED*** node
     * @param {Boolean***REMOVED*** isRemoveChild
     */
    var remove = function (node, isRemoveChild) {
      if (!node || !node.parentNode) { return; ***REMOVED***
      if (node.removeNode) { return node.removeNode(isRemoveChild); ***REMOVED***

      var parent = node.parentNode;
      if (!isRemoveChild) {
        var nodes = [];
        var i, len;
        for (i = 0, len = node.childNodes.length; i < len; i++) {
          nodes.push(node.childNodes[i]);
      ***REMOVED***

        for (i = 0, len = nodes.length; i < len; i++) {
          parent.insertBefore(nodes[i], node);
      ***REMOVED***
    ***REMOVED***

      parent.removeChild(node);
  ***REMOVED***;

    /**
     * @param {Node***REMOVED*** node
     * @param {Function***REMOVED*** pred
     */
    var removeWhile = function (node, pred) {
      while (node) {
        if (isEditable(node) || !pred(node)) {
          break;
      ***REMOVED***

        var parent = node.parentNode;
        remove(node);
        node = parent;
    ***REMOVED***
  ***REMOVED***;

    /**
     * replace node with provided nodeName
     *
     * @param {Node***REMOVED*** node
     * @param {String***REMOVED*** nodeName
     * @return {Node***REMOVED*** - new node
     */
    var replace = function (node, nodeName) {
      if (node.nodeName.toUpperCase() === nodeName.toUpperCase()) {
        return node;
    ***REMOVED***

      var newNode = create(nodeName);

      if (node.style.cssText) {
        newNode.style.cssText = node.style.cssText;
    ***REMOVED***

      appendChildNodes(newNode, list.from(node.childNodes));
      insertAfter(newNode, node);
      remove(node);

      return newNode;
  ***REMOVED***;

    var isTextarea = makePredByNodeName('TEXTAREA');

    /**
     * get the HTML contents of node 
     *
     * @param {jQuery***REMOVED*** $node
     * @param {Boolean***REMOVED*** [isNewlineOnBlock]
     */
    var html = function ($node, isNewlineOnBlock) {
      var markup = isTextarea($node[0]) ? $node.val() : $node.html();

      if (isNewlineOnBlock) {
        var regexTag = /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g;
        markup = markup.replace(regexTag, function (match, endSlash, name) {
          name = name.toUpperCase();
          var isEndOfInlineContainer = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(name) &&
                                       !!endSlash;
          var isBlockNode = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(name);

          return match + ((isEndOfInlineContainer || isBlockNode) ? '\n' : '');
      ***REMOVED***);
        markup = $.trim(markup);
    ***REMOVED***

      return markup;
  ***REMOVED***;

    var value = function ($textarea) {
      var val = $textarea.val();
      // strip line breaks
      return val.replace(/[\n\r]/g, '');
  ***REMOVED***;

    return {
      NBSP_CHAR: NBSP_CHAR,
      ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
      blank: blankHTML,
      emptyPara: '<p>' + blankHTML + '</p>',
      isEditable: isEditable,
      isControlSizing: isControlSizing,
      buildLayoutInfo: buildLayoutInfo,
      isText: isText,
      isPara: isPara,
      isPurePara: isPurePara,
      isInline: isInline,
      isBodyInline: isBodyInline,
      isBody: isBody,
      isParaInline: isParaInline,
      isList: isList,
      isTable: makePredByNodeName('TABLE'),
      isCell: isCell,
      isBlockquote: isBlockquote,
      isBodyContainer: isBodyContainer,
      isAnchor: isAnchor,
      isDiv: makePredByNodeName('DIV'),
      isLi: isLi,
      isSpan: makePredByNodeName('SPAN'),
      isB: makePredByNodeName('B'),
      isU: makePredByNodeName('U'),
      isS: makePredByNodeName('S'),
      isI: makePredByNodeName('I'),
      isImg: makePredByNodeName('IMG'),
      isTextarea: isTextarea,
      isEmpty: isEmpty,
      isEmptyAnchor: func.and(isAnchor, isEmpty),
      nodeLength: nodeLength,
      isLeftEdgePoint: isLeftEdgePoint,
      isRightEdgePoint: isRightEdgePoint,
      isEdgePoint: isEdgePoint,
      isLeftEdgeOf: isLeftEdgeOf,
      isRightEdgeOf: isRightEdgeOf,
      prevPoint: prevPoint,
      nextPoint: nextPoint,
      isSamePoint: isSamePoint,
      isVisiblePoint: isVisiblePoint,
      prevPointUntil: prevPointUntil,
      nextPointUntil: nextPointUntil,
      walkPoint: walkPoint,
      ancestor: ancestor,
      listAncestor: listAncestor,
      lastAncestor: lastAncestor,
      listNext: listNext,
      listPrev: listPrev,
      listDescendant: listDescendant,
      commonAncestor: commonAncestor,
      wrap: wrap,
      insertAfter: insertAfter,
      appendChildNodes: appendChildNodes,
      position: position,
      hasChildren: hasChildren,
      makeOffsetPath: makeOffsetPath,
      fromOffsetPath: fromOffsetPath,
      splitTree: splitTree,
      create: create,
      createText: createText,
      remove: remove,
      removeWhile: removeWhile,
      replace: replace,
      html: html,
      value: value
  ***REMOVED***;
***REMOVED***)();


  /**
   * Data structure
   *  - {BoundaryPoint***REMOVED***: a point of dom tree
   *  - {BoundaryPoints***REMOVED***: two boundaryPoints corresponding to the start and the end of the Range
   *
   *  @see http://www.w3.org/TR/DOM-Level-2-Traversal-Range/ranges.html#Level-2-Range-Position
   */
  var range = (function () {

    /**
     * return boundaryPoint from TextRange, inspired by Andy Na's HuskyRange.js
     *
     * @param {TextRange***REMOVED*** textRange
     * @param {Boolean***REMOVED*** isStart
     * @return {BoundaryPoint***REMOVED***
     *
     * @see http://msdn.microsoft.com/en-us/library/ie/ms535872(v=vs.85).aspx
     */
    var textRangeToPoint = function (textRange, isStart) {
      var container = textRange.parentElement(), offset;
  
      var tester = document.body.createTextRange(), prevContainer;
      var childNodes = list.from(container.childNodes);
      for (offset = 0; offset < childNodes.length; offset++) {
        if (dom.isText(childNodes[offset])) {
          continue;
      ***REMOVED***
        tester.moveToElementText(childNodes[offset]);
        if (tester.compareEndPoints('StartToStart', textRange) >= 0) {
          break;
      ***REMOVED***
        prevContainer = childNodes[offset];
    ***REMOVED***
  
      if (offset !== 0 && dom.isText(childNodes[offset - 1])) {
        var textRangeStart = document.body.createTextRange(), curTextNode = null;
        textRangeStart.moveToElementText(prevContainer || container);
        textRangeStart.collapse(!prevContainer);
        curTextNode = prevContainer ? prevContainer.nextSibling : container.firstChild;
  
        var pointTester = textRange.duplicate();
        pointTester.setEndPoint('StartToStart', textRangeStart);
        var textCount = pointTester.text.replace(/[\r\n]/g, '').length;
  
        while (textCount > curTextNode.nodeValue.length && curTextNode.nextSibling) {
          textCount -= curTextNode.nodeValue.length;
          curTextNode = curTextNode.nextSibling;
      ***REMOVED***
  
        /* jshint ignore:start */
        var dummy = curTextNode.nodeValue; // enforce IE to re-reference curTextNode, hack
        /* jshint ignore:end */
  
        if (isStart && curTextNode.nextSibling && dom.isText(curTextNode.nextSibling) &&
            textCount === curTextNode.nodeValue.length) {
          textCount -= curTextNode.nodeValue.length;
          curTextNode = curTextNode.nextSibling;
      ***REMOVED***
  
        container = curTextNode;
        offset = textCount;
    ***REMOVED***
  
      return {
        cont: container,
        offset: offset
    ***REMOVED***;
  ***REMOVED***;
    
    /**
     * return TextRange from boundary point (inspired by google closure-library)
     * @param {BoundaryPoint***REMOVED*** point
     * @return {TextRange***REMOVED***
     */
    var pointToTextRange = function (point) {
      var textRangeInfo = function (container, offset) {
        var node, isCollapseToStart;
  
        if (dom.isText(container)) {
          var prevTextNodes = dom.listPrev(container, func.not(dom.isText));
          var prevContainer = list.last(prevTextNodes).previousSibling;
          node =  prevContainer || container.parentNode;
          offset += list.sum(list.tail(prevTextNodes), dom.nodeLength);
          isCollapseToStart = !prevContainer;
      ***REMOVED*** else {
          node = container.childNodes[offset] || container;
          if (dom.isText(node)) {
            return textRangeInfo(node, 0);
        ***REMOVED***
  
          offset = 0;
          isCollapseToStart = false;
      ***REMOVED***
  
        return {
          node: node,
          collapseToStart: isCollapseToStart,
          offset: offset
      ***REMOVED***;
    ***REMOVED***;
  
      var textRange = document.body.createTextRange();
      var info = textRangeInfo(point.node, point.offset);
  
      textRange.moveToElementText(info.node);
      textRange.collapse(info.collapseToStart);
      textRange.moveStart('character', info.offset);
      return textRange;
  ***REMOVED***;
    
    /**
     * Wrapped Range
     *
     * @param {Node***REMOVED*** sc - start container
     * @param {Number***REMOVED*** so - start offset
     * @param {Node***REMOVED*** ec - end container
     * @param {Number***REMOVED*** eo - end offset
     */
    var WrappedRange = function (sc, so, ec, eo) {
      this.sc = sc;
      this.so = so;
      this.ec = ec;
      this.eo = eo;
  
      // nativeRange: get nativeRange from sc, so, ec, eo
      var nativeRange = function () {
        if (agent.isW3CRangeSupport) {
          var w3cRange = document.createRange();
          w3cRange.setStart(sc, so);
          w3cRange.setEnd(ec, eo);

          return w3cRange;
      ***REMOVED*** else {
          var textRange = pointToTextRange({
            node: sc,
            offset: so
        ***REMOVED***);

          textRange.setEndPoint('EndToEnd', pointToTextRange({
            node: ec,
            offset: eo
        ***REMOVED***));

          return textRange;
      ***REMOVED***
    ***REMOVED***;

      this.getPoints = function () {
        return {
          sc: sc,
          so: so,
          ec: ec,
          eo: eo
      ***REMOVED***;
    ***REMOVED***;

      this.getStartPoint = function () {
        return {
          node: sc,
          offset: so
      ***REMOVED***;
    ***REMOVED***;

      this.getEndPoint = function () {
        return {
          node: ec,
          offset: eo
      ***REMOVED***;
    ***REMOVED***;

      /**
       * select update visible range
       */
      this.select = function () {
        var nativeRng = nativeRange();
        if (agent.isW3CRangeSupport) {
          var selection = document.getSelection();
          if (selection.rangeCount > 0) {
            selection.removeAllRanges();
        ***REMOVED***
          selection.addRange(nativeRng);
      ***REMOVED*** else {
          nativeRng.select();
      ***REMOVED***
    ***REMOVED***;

      /**
       * @return {WrappedRange***REMOVED***
       */
      this.normalize = function () {
        var getVisiblePoint = function (point) {
          if (!dom.isVisiblePoint(point)) {
            if (dom.isLeftEdgePoint(point)) {
              point = dom.nextPointUntil(point, dom.isVisiblePoint);
          ***REMOVED*** else if (dom.isRightEdgePoint(point)) {
              point = dom.prevPointUntil(point, dom.isVisiblePoint);
          ***REMOVED***
        ***REMOVED***
          return point;
      ***REMOVED***;

        var startPoint = getVisiblePoint(this.getStartPoint());
        var endPoint = getVisiblePoint(this.getStartPoint());

        return new WrappedRange(
          startPoint.node,
          startPoint.offset,
          endPoint.node,
          endPoint.offset
        );
    ***REMOVED***;

      /**
       * returns matched nodes on range
       *
       * @param {Function***REMOVED*** [pred] - predicate function
       * @param {Object***REMOVED*** [options]
       * @param {Boolean***REMOVED*** [options.includeAncestor]
       * @param {Boolean***REMOVED*** [options.fullyContains]
       * @return {Node[]***REMOVED***
       */
      this.nodes = function (pred, options) {
        pred = pred || func.ok;

        var includeAncestor = options && options.includeAncestor;
        var fullyContains = options && options.fullyContains;

        // TODO compare points and sort
        var startPoint = this.getStartPoint();
        var endPoint = this.getEndPoint();

        var nodes = [];
        var leftEdgeNodes = [];

        dom.walkPoint(startPoint, endPoint, function (point) {
          if (dom.isEditable(point.node)) {
            return;
        ***REMOVED***

          var node;
          if (fullyContains) {
            if (dom.isLeftEdgePoint(point)) {
              leftEdgeNodes.push(point.node);
          ***REMOVED***
            if (dom.isRightEdgePoint(point) && list.contains(leftEdgeNodes, point.node)) {
              node = point.node;
          ***REMOVED***
        ***REMOVED*** else if (includeAncestor) {
            node = dom.ancestor(point.node, pred);
        ***REMOVED*** else {
            node = point.node;
        ***REMOVED***

          if (node && pred(node)) {
            nodes.push(node);
        ***REMOVED***
      ***REMOVED***, true);

        return list.unique(nodes);
    ***REMOVED***;

      /**
       * returns commonAncestor of range
       * @return {Element***REMOVED*** - commonAncestor
       */
      this.commonAncestor = function () {
        return dom.commonAncestor(sc, ec);
    ***REMOVED***;

      /**
       * returns expanded range by pred
       *
       * @param {Function***REMOVED*** pred - predicate function
       * @return {WrappedRange***REMOVED***
       */
      this.expand = function (pred) {
        var startAncestor = dom.ancestor(sc, pred);
        var endAncestor = dom.ancestor(ec, pred);

        if (!startAncestor && !endAncestor) {
          return new WrappedRange(sc, so, ec, eo);
      ***REMOVED***

        var boundaryPoints = this.getPoints();

        if (startAncestor) {
          boundaryPoints.sc = startAncestor;
          boundaryPoints.so = 0;
      ***REMOVED***

        if (endAncestor) {
          boundaryPoints.ec = endAncestor;
          boundaryPoints.eo = dom.nodeLength(endAncestor);
      ***REMOVED***

        return new WrappedRange(
          boundaryPoints.sc,
          boundaryPoints.so,
          boundaryPoints.ec,
          boundaryPoints.eo
        );
    ***REMOVED***;

      /**
       * @param {Boolean***REMOVED*** isCollapseToStart
       * @return {WrappedRange***REMOVED***
       */
      this.collapse = function (isCollapseToStart) {
        if (isCollapseToStart) {
          return new WrappedRange(sc, so, sc, so);
      ***REMOVED*** else {
          return new WrappedRange(ec, eo, ec, eo);
      ***REMOVED***
    ***REMOVED***;

      /**
       * splitText on range
       */
      this.splitText = function () {
        var isSameContainer = sc === ec;
        var boundaryPoints = this.getPoints();

        if (dom.isText(ec) && !dom.isEdgePoint(this.getEndPoint())) {
          ec.splitText(eo);
      ***REMOVED***

        if (dom.isText(sc) && !dom.isEdgePoint(this.getStartPoint())) {
          boundaryPoints.sc = sc.splitText(so);
          boundaryPoints.so = 0;

          if (isSameContainer) {
            boundaryPoints.ec = boundaryPoints.sc;
            boundaryPoints.eo = eo - so;
        ***REMOVED***
      ***REMOVED***

        return new WrappedRange(
          boundaryPoints.sc,
          boundaryPoints.so,
          boundaryPoints.ec,
          boundaryPoints.eo
        );
    ***REMOVED***;

      /**
       * delete contents on range
       * @return {WrappedRange***REMOVED***
       */
      this.deleteContents = function () {
        if (this.isCollapsed()) {
          return this;
      ***REMOVED***

        var rng = this.splitText();
        var nodes = rng.nodes(null, {
          fullyContains: true
      ***REMOVED***);

        var point = dom.prevPointUntil(rng.getStartPoint(), function (point) {
          return !list.contains(nodes, point.node);
      ***REMOVED***);

        var emptyParents = [];
        $.each(nodes, function (idx, node) {
          // find empty parents
          var parent = node.parentNode;
          if (point.node !== parent && dom.nodeLength(parent) === 1) {
            emptyParents.push(parent);
        ***REMOVED***
          dom.remove(node, false);
      ***REMOVED***);

        // remove empty parents
        $.each(emptyParents, function (idx, node) {
          dom.remove(node, false);
      ***REMOVED***);

        return new WrappedRange(
          point.node,
          point.offset,
          point.node,
          point.offset
        );
    ***REMOVED***;
      
      /**
       * makeIsOn: return isOn(pred) function
       */
      var makeIsOn = function (pred) {
        return function () {
          var ancestor = dom.ancestor(sc, pred);
          return !!ancestor && (ancestor === dom.ancestor(ec, pred));
      ***REMOVED***;
    ***REMOVED***;
  
      // isOnEditable: judge whether range is on editable or not
      this.isOnEditable = makeIsOn(dom.isEditable);
      // isOnList: judge whether range is on list node or not
      this.isOnList = makeIsOn(dom.isList);
      // isOnAnchor: judge whether range is on anchor node or not
      this.isOnAnchor = makeIsOn(dom.isAnchor);
      // isOnAnchor: judge whether range is on cell node or not
      this.isOnCell = makeIsOn(dom.isCell);

      /**
       * @param {Function***REMOVED*** pred
       * @return {Boolean***REMOVED***
       */
      this.isLeftEdgeOf = function (pred) {
        if (!dom.isLeftEdgePoint(this.getStartPoint())) {
          return false;
      ***REMOVED***

        var node = dom.ancestor(this.sc, pred);
        return node && dom.isLeftEdgeOf(this.sc, node);
    ***REMOVED***;

      /**
       * returns whether range was collapsed or not
       */
      this.isCollapsed = function () {
        return sc === ec && so === eo;
    ***REMOVED***;

      /**
       * wrap inline nodes which children of body with paragraph
       *
       * @return {WrappedRange***REMOVED***
       */
      this.wrapBodyInlineWithPara = function () {
        if (dom.isBodyContainer(sc) && dom.isEmpty(sc)) {
          sc.innerHTML = dom.emptyPara;
          return new WrappedRange(sc.firstChild, 0);
      ***REMOVED***

        if (dom.isParaInline(sc) || dom.isPara(sc)) {
          return this.normalize();
      ***REMOVED***

        // find inline top ancestor
        var topAncestor;
        if (dom.isInline(sc)) {
          var ancestors = dom.listAncestor(sc, func.not(dom.isInline));
          topAncestor = list.last(ancestors);
          if (!dom.isInline(topAncestor)) {
            topAncestor = ancestors[ancestors.length - 2] || sc.childNodes[so];
        ***REMOVED***
      ***REMOVED*** else {
          topAncestor = sc.childNodes[so - 1];
      ***REMOVED***

        // siblings not in paragraph
        var inlineSiblings = dom.listPrev(topAncestor, dom.isParaInline).reverse();
        inlineSiblings = inlineSiblings.concat(dom.listNext(topAncestor.nextSibling, dom.isParaInline));

        // wrap with paragraph
        if (inlineSiblings.length) {
          var para = dom.wrap(list.head(inlineSiblings), 'p');
          dom.appendChildNodes(para, list.tail(inlineSiblings));
      ***REMOVED***

        return this.normalize();
    ***REMOVED***;

      /**
       * insert node at current cursor
       *
       * @param {Node***REMOVED*** node
       * @param {Boolean***REMOVED*** [isInline]
       * @return {Node***REMOVED***
       */
      this.insertNode = function (node, isInline) {
        var rng = this.wrapBodyInlineWithPara();
        var point = rng.getStartPoint();

        var splitRoot, container, pivot;
        if (isInline) {
          container = dom.isPara(point.node) ? point.node : point.node.parentNode;
          if (dom.isPara(point.node)) {
            pivot = point.node.childNodes[point.offset];
        ***REMOVED*** else {
            pivot = dom.splitTree(point.node, point);
        ***REMOVED***
      ***REMOVED*** else {
          // splitRoot will be childNode of container
          var ancestors = dom.listAncestor(point.node, dom.isBodyContainer);
          var topAncestor = list.last(ancestors) || point.node;

          if (dom.isBodyContainer(topAncestor)) {
            splitRoot = ancestors[ancestors.length - 2];
            container = topAncestor;
        ***REMOVED*** else {
            splitRoot = topAncestor;
            container = splitRoot.parentNode;
        ***REMOVED***
          pivot = splitRoot && dom.splitTree(splitRoot, point);
      ***REMOVED***

        if (pivot) {
          pivot.parentNode.insertBefore(node, pivot);
      ***REMOVED*** else {
          container.appendChild(node);
      ***REMOVED***

        return node;
    ***REMOVED***;
  
      this.toString = function () {
        var nativeRng = nativeRange();
        return agent.isW3CRangeSupport ? nativeRng.toString() : nativeRng.text;
    ***REMOVED***;
  
      /**
       * create offsetPath bookmark
       * @param {Node***REMOVED*** editable
       */
      this.bookmark = function (editable) {
        return {
          s: {
            path: dom.makeOffsetPath(editable, sc),
            offset: so
        ***REMOVED***,
          e: {
            path: dom.makeOffsetPath(editable, ec),
            offset: eo
        ***REMOVED***
      ***REMOVED***;
    ***REMOVED***;

      /**
       * getClientRects
       * @return {Rect[]***REMOVED***
       */
      this.getClientRects = function () {
        var nativeRng = nativeRange();
        return nativeRng.getClientRects();
    ***REMOVED***;
  ***REMOVED***;
  
    return {
      /**
       * create Range Object From arguments or Browser Selection
       *
       * @param {Node***REMOVED*** sc - start container
       * @param {Number***REMOVED*** so - start offset
       * @param {Node***REMOVED*** ec - end container
       * @param {Number***REMOVED*** eo - end offset
       */
      create : function (sc, so, ec, eo) {
        if (!arguments.length) { // from Browser Selection
          if (agent.isW3CRangeSupport) {
            var selection = document.getSelection();
            if (selection.rangeCount === 0) {
              return null;
          ***REMOVED*** else if (dom.isBody(selection.anchorNode)) {
              // Firefox: returns entire body as range on initialization. We won't never need it.
              return null;
          ***REMOVED***
  
            var nativeRng = selection.getRangeAt(0);
            sc = nativeRng.startContainer;
            so = nativeRng.startOffset;
            ec = nativeRng.endContainer;
            eo = nativeRng.endOffset;
        ***REMOVED*** else { // IE8: TextRange
            var textRange = document.selection.createRange();
            var textRangeEnd = textRange.duplicate();
            textRangeEnd.collapse(false);
            var textRangeStart = textRange;
            textRangeStart.collapse(true);
  
            var startPoint = textRangeToPoint(textRangeStart, true),
            endPoint = textRangeToPoint(textRangeEnd, false);

            // same visible point case: range was collapsed.
            if (dom.isText(startPoint.node) && dom.isLeftEdgePoint(startPoint) &&
                dom.isTextNode(endPoint.node) && dom.isRightEdgePoint(endPoint) &&
                endPoint.node.nextSibling === startPoint.node) {
              startPoint = endPoint;
          ***REMOVED***

            sc = startPoint.cont;
            so = startPoint.offset;
            ec = endPoint.cont;
            eo = endPoint.offset;
        ***REMOVED***
      ***REMOVED*** else if (arguments.length === 2) { //collapsed
          ec = sc;
          eo = so;
      ***REMOVED***
        return new WrappedRange(sc, so, ec, eo);
    ***REMOVED***,

      /**
       * create WrappedRange from node
       *
       * @param {Node***REMOVED*** node
       * @return {WrappedRange***REMOVED***
       */
      createFromNode: function (node) {
        return this.create(node, 0, node, 1);
    ***REMOVED***,

      /**
       * create WrappedRange from Bookmark
       *
       * @param {Node***REMOVED*** editable
       * @param {Obkect***REMOVED*** bookmark
       * @return {WrappedRange***REMOVED***
       */
      createFromBookmark : function (editable, bookmark) {
        var sc = dom.fromOffsetPath(editable, bookmark.s.path);
        var so = bookmark.s.offset;
        var ec = dom.fromOffsetPath(editable, bookmark.e.path);
        var eo = bookmark.e.offset;
        return new WrappedRange(sc, so, ec, eo);
    ***REMOVED***
  ***REMOVED***;
***REMOVED***)();

  var settings = {
    // version
    version: '0.6.0',

    /**
     * options
     */
    options: {
      width: null,                  // set editor width
      height: null,                 // set editor height, ex) 300

      minHeight: null,              // set minimum height of editor
      maxHeight: null,              // set maximum height of editor

      focus: false,                 // set focus to editable area after initializing summernote

      tabsize: 4,                   // size of tab ex) 2 or 4
      styleWithSpan: true,          // style with span (Chrome and FF only)

      disableLinkTarget: false,     // hide link Target Checkbox
      disableDragAndDrop: false,    // disable drag and drop event
      disableResizeEditor: false,   // disable resizing editor

      shortcuts: true,              // enable keyboard shortcuts

      placeholder: false,           // enable placeholder text

      codemirror: {                 // codemirror options
        mode: 'text/html',
        htmlMode: true,
        lineNumbers: true
    ***REMOVED***,

      // language
      lang: 'en-US',                // language 'en-US', 'ko-KR', ...
      direction: null,              // text direction, ex) 'rtl'

      // toolbar
      toolbar: [
        ['style', ['style']],
        ['font', ['bold', 'italic', 'underline', 'clear']],
        ['fontname', ['fontname']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['table', ['table']],
        ['insert', ['link', 'picture', 'hr']],
        ['view', ['fullscreen', 'codeview']],
        ['help', ['help']]
    ***REMOVED***,

      // air mode: inline editor
      airMode: false,
      // airPopover: [
      //   ['style', ['style']],
      //   ['font', ['bold', 'italic', 'underline', 'clear']],
      //   ['fontname', ['fontname']],
      //   ['color', ['color']],
      //   ['para', ['ul', 'ol', 'paragraph']],
      //   ['height', ['height']],
      //   ['table', ['table']],
      //   ['insert', ['link', 'picture']],
      //   ['help', ['help']]
      // ],
      airPopover: [
        ['color', ['color']],
        ['font', ['bold', 'underline', 'clear']],
        ['para', ['ul', 'paragraph']],
        ['table', ['table']],
        ['insert', ['link', 'picture']]
    ***REMOVED***,

      // style tag
      styleTags: ['p', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

      // default fontName
      defaultFontName: 'Helvetica Neue',

      // fontName
      fontNames: [
        'Arial', 'Arial Black', 'Comic Sans MS', 'Courier New',
        'Helvetica Neue', 'Impact', 'Lucida Grande',
        'Tahoma', 'Times New Roman', 'Verdana'
    ***REMOVED***,

      // pallete colors(n x n)
      colors: [
        ['#000000', '#424242', '#636363', '#9C9C94', '#CEC6CE', '#EFEFEF', '#F7F7F7', '#FFFFFF'],
        ['#FF0000', '#FF9C00', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#9C00FF', '#FF00FF'],
        ['#F7C6CE', '#FFE7CE', '#FFEFC6', '#D6EFD6', '#CEDEE7', '#CEE7F7', '#D6D6E7', '#E7D6DE'],
        ['#E79C9C', '#FFC69C', '#FFE79C', '#B5D6A5', '#A5C6CE', '#9CC6EF', '#B5A5D6', '#D6A5BD'],
        ['#E76363', '#F7AD6B', '#FFD663', '#94BD7B', '#73A5AD', '#6BADDE', '#8C7BC6', '#C67BA5'],
        ['#CE0000', '#E79439', '#EFC631', '#6BA54A', '#4A7B8C', '#3984C6', '#634AA5', '#A54A7B'],
        ['#9C0000', '#B56308', '#BD9400', '#397B21', '#104A5A', '#085294', '#311873', '#731842'],
        ['#630000', '#7B3900', '#846300', '#295218', '#083139', '#003163', '#21104A', '#4A1031']
    ***REMOVED***,

      // lineHeight
      lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],

      // insertTable max size
      insertTableMaxSize: {
        col: 10,
        row: 10
    ***REMOVED***,

      // image
      maximumImageFileSize: null, // size in bytes, null = no limit

      // callbacks
      oninit: null,             // initialize
      onfocus: null,            // editable has focus
      onblur: null,             // editable out of focus
      onenter: null,            // enter key pressed
      onkeyup: null,            // keyup
      onkeydown: null,          // keydown
      onImageUpload: null,      // imageUpload
      onImageUploadError: null, // imageUploadError
      onToolbarClick: null,
      onsubmit: null,

      /**
       * manipulate link address when user create link
       * @param {String***REMOVED*** sLinkUrl
       * @return {String***REMOVED***
       */
      onCreateLink: function (sLinkUrl) {
        if (sLinkUrl.indexOf('@') !== -1 && sLinkUrl.indexOf(':') === -1) {
          sLinkUrl =  'mailto:' + sLinkUrl;
      ***REMOVED*** else if (sLinkUrl.indexOf('://') === -1) {
          sLinkUrl = 'http://' + sLinkUrl;
      ***REMOVED***

        return sLinkUrl;
    ***REMOVED***,

      keyMap: {
        pc: {
          'ENTER': 'insertParagraph',
          'CTRL+Z': 'undo',
          'CTRL+Y': 'redo',
          'TAB': 'tab',
          'SHIFT+TAB': 'untab',
          'CTRL+B': 'bold',
          'CTRL+I': 'italic',
          'CTRL+U': 'underline',
          'CTRL+SHIFT+S': 'strikethrough',
          'CTRL+BACKSLASH': 'removeFormat',
          'CTRL+SHIFT+L': 'justifyLeft',
          'CTRL+SHIFT+E': 'justifyCenter',
          'CTRL+SHIFT+R': 'justifyRight',
          'CTRL+SHIFT+J': 'justifyFull',
          'CTRL+SHIFT+NUM7': 'insertUnorderedList',
          'CTRL+SHIFT+NUM8': 'insertOrderedList',
          'CTRL+LEFTBRACKET': 'outdent',
          'CTRL+RIGHTBRACKET': 'indent',
          'CTRL+NUM0': 'formatPara',
          'CTRL+NUM1': 'formatH1',
          'CTRL+NUM2': 'formatH2',
          'CTRL+NUM3': 'formatH3',
          'CTRL+NUM4': 'formatH4',
          'CTRL+NUM5': 'formatH5',
          'CTRL+NUM6': 'formatH6',
          'CTRL+ENTER': 'insertHorizontalRule',
          'CTRL+K': 'showLinkDialog'
      ***REMOVED***,

        mac: {
          'ENTER': 'insertParagraph',
          'CMD+Z': 'undo',
          'CMD+SHIFT+Z': 'redo',
          'TAB': 'tab',
          'SHIFT+TAB': 'untab',
          'CMD+B': 'bold',
          'CMD+I': 'italic',
          'CMD+U': 'underline',
          'CMD+SHIFT+S': 'strikethrough',
          'CMD+BACKSLASH': 'removeFormat',
          'CMD+SHIFT+L': 'justifyLeft',
          'CMD+SHIFT+E': 'justifyCenter',
          'CMD+SHIFT+R': 'justifyRight',
          'CMD+SHIFT+J': 'justifyFull',
          'CMD+SHIFT+NUM7': 'insertUnorderedList',
          'CMD+SHIFT+NUM8': 'insertOrderedList',
          'CMD+LEFTBRACKET': 'outdent',
          'CMD+RIGHTBRACKET': 'indent',
          'CMD+NUM0': 'formatPara',
          'CMD+NUM1': 'formatH1',
          'CMD+NUM2': 'formatH2',
          'CMD+NUM3': 'formatH3',
          'CMD+NUM4': 'formatH4',
          'CMD+NUM5': 'formatH5',
          'CMD+NUM6': 'formatH6',
          'CMD+ENTER': 'insertHorizontalRule',
          'CMD+K': 'showLinkDialog'
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***,

    // default language: en-US
    lang: {
      'en-US': {
        font: {
          bold: 'Bold',
          italic: 'Italic',
          underline: 'Underline',
          clear: 'Remove Font Style',
          height: 'Line Height',
          name: 'Font Family'
      ***REMOVED***,
        image: {
          image: 'Picture',
          insert: 'Insert Image',
          resizeFull: 'Resize Full',
          resizeHalf: 'Resize Half',
          resizeQuarter: 'Resize Quarter',
          floatLeft: 'Float Left',
          floatRight: 'Float Right',
          floatNone: 'Float None',
          shapeRounded: 'Shape: Rounded',
          shapeCircle: 'Shape: Circle',
          shapeThumbnail: 'Shape: Thumbnail',
          shapeNone: 'Shape: None',
          dragImageHere: 'Drag image or text here',
          dropImage: 'Drop image or Text',
          selectFromFiles: 'Select from files',
          maximumFileSize: 'Maximum file size',
          maximumFileSizeError: 'Maximum file size exceeded.',
          url: 'Image URL',
          remove: 'Remove Image'
      ***REMOVED***,
        link: {
          link: 'Link',
          insert: 'Insert Link',
          unlink: 'Unlink',
          edit: 'Edit',
          textToDisplay: 'Text to display',
          url: 'To what URL should this link go?',
          openInNewWindow: 'Open in new window'
      ***REMOVED***,
        table: {
          table: 'Table'
      ***REMOVED***,
        hr: {
          insert: 'Insert Horizontal Rule'
      ***REMOVED***,
        style: {
          style: 'Style',
          normal: 'Normal',
          blockquote: 'Quote',
          pre: 'Code',
          h1: 'Header 1',
          h2: 'Header 2',
          h3: 'Header 3',
          h4: 'Header 4',
          h5: 'Header 5',
          h6: 'Header 6'
      ***REMOVED***,
        lists: {
          unordered: 'Unordered list',
          ordered: 'Ordered list'
      ***REMOVED***,
        options: {
          help: 'Help',
          fullscreen: 'Full Screen',
          codeview: 'Code View'
      ***REMOVED***,
        paragraph: {
          paragraph: 'Paragraph',
          outdent: 'Outdent',
          indent: 'Indent',
          left: 'Align left',
          center: 'Align center',
          right: 'Align right',
          justify: 'Justify full'
      ***REMOVED***,
        color: {
          recent: 'Recent Color',
          more: 'More Color',
          background: 'Background Color',
          foreground: 'Foreground Color',
          transparent: 'Transparent',
          setTransparent: 'Set transparent',
          reset: 'Reset',
          resetToDefault: 'Reset to default'
      ***REMOVED***,
        shortcut: {
          shortcuts: 'Keyboard shortcuts',
          close: 'Close',
          textFormatting: 'Text formatting',
          action: 'Action',
          paragraphFormatting: 'Paragraph formatting',
          documentStyle: 'Document Style',
          extraKeys: 'Extra keys'
      ***REMOVED***,
        history: {
          undo: 'Undo',
          redo: 'Redo'
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***
***REMOVED***;

  /**
   * Async functions which returns `Promise`
   */
  var async = (function () {
    /**
     * read contents of file as representing URL
     *
     * @param {File***REMOVED*** file
     * @return {Promise***REMOVED*** - then: sDataUrl
     */
    var readFileAsDataURL = function (file) {
      return $.Deferred(function (deferred) {
        $.extend(new FileReader(), {
          onload: function (e) {
            var sDataURL = e.target.result;
            deferred.resolve(sDataURL);
        ***REMOVED***,
          onerror: function () {
            deferred.reject(this);
        ***REMOVED***
      ***REMOVED***).readAsDataURL(file);
    ***REMOVED***).promise();
  ***REMOVED***;
  
    /**
     * create `<image>` from url string
     *
     * @param {String***REMOVED*** sUrl
     * @return {Promise***REMOVED*** - then: $image
     */
    var createImage = function (sUrl, filename) {
      return $.Deferred(function (deferred) {
        $('<img>').one('load', function () {
          deferred.resolve($(this));
      ***REMOVED***).one('error abort', function () {
          deferred.reject($(this).detach());
      ***REMOVED***).css({
          display: 'none'
      ***REMOVED***).appendTo(document.body)
          .attr('src', sUrl)
          .attr('data-filename', filename);
    ***REMOVED***).promise();
  ***REMOVED***;

    return {
      readFileAsDataURL: readFileAsDataURL,
      createImage: createImage
  ***REMOVED***;
***REMOVED***)();

  /**
   * Object for keycodes.
   */
  var key = {
    isEdit: function (keyCode) {
      return list.contains([8, 9, 13, 32], keyCode);
  ***REMOVED***,
    nameFromCode: {
      '8': 'BACKSPACE',
      '9': 'TAB',
      '13': 'ENTER',
      '32': 'SPACE',

      // Number: 0-9
      '48': 'NUM0',
      '49': 'NUM1',
      '50': 'NUM2',
      '51': 'NUM3',
      '52': 'NUM4',
      '53': 'NUM5',
      '54': 'NUM6',
      '55': 'NUM7',
      '56': 'NUM8',

      // Alphabet: a-z
      '66': 'B',
      '69': 'E',
      '73': 'I',
      '74': 'J',
      '75': 'K',
      '76': 'L',
      '82': 'R',
      '83': 'S',
      '85': 'U',
      '89': 'Y',
      '90': 'Z',

      '191': 'SLASH',
      '219': 'LEFTBRACKET',
      '220': 'BACKSLASH',
      '221': 'RIGHTBRACKET'
  ***REMOVED***
***REMOVED***;

  /**
   * Style
   * @class
   */
  var Style = function () {
    /**
     * passing an array of style properties to .css()
     * will result in an object of property-value pairs.
     * (compability with version < 1.9)
     *
     * @param  {jQuery***REMOVED*** $obj
     * @param  {Array***REMOVED*** propertyNames - An array of one or more CSS properties.
     * @returns {Object***REMOVED***
     */
    var jQueryCSS = function ($obj, propertyNames) {
      if (agent.jqueryVersion < 1.9) {
        var result = {***REMOVED***;
        $.each(propertyNames, function (idx, propertyName) {
          result[propertyName] = $obj.css(propertyName);
      ***REMOVED***);
        return result;
    ***REMOVED***
      return $obj.css.call($obj, propertyNames);
  ***REMOVED***;

    /**
     * paragraph level style
     *
     * @param {WrappedRange***REMOVED*** rng
     * @param {Object***REMOVED*** styleInfo
     */
    this.stylePara = function (rng, styleInfo) {
      $.each(rng.nodes(dom.isPara, {
        includeAncestor: true
    ***REMOVED***), function (idx, para) {
        $(para).css(styleInfo);
    ***REMOVED***);
  ***REMOVED***;

    /**
     * get current style on cursor
     *
     * @param {WrappedRange***REMOVED*** rng
     * @param {Node***REMOVED*** target - target element on event
     * @return {Object***REMOVED*** - object contains style properties.
     */
    this.current = function (rng, target) {
      var $cont = $(dom.isText(rng.sc) ? rng.sc.parentNode : rng.sc);
      var properties = ['font-family', 'font-size', 'text-align', 'list-style-type', 'line-height'];
      var styleInfo = jQueryCSS($cont, properties) || {***REMOVED***;

      styleInfo['font-size'] = parseInt(styleInfo['font-size'], 10);

      // document.queryCommandState for toggle state
      styleInfo['font-bold'] = document.queryCommandState('bold') ? 'bold' : 'normal';
      styleInfo['font-italic'] = document.queryCommandState('italic') ? 'italic' : 'normal';
      styleInfo['font-underline'] = document.queryCommandState('underline') ? 'underline' : 'normal';
      styleInfo['font-strikethrough'] = document.queryCommandState('strikeThrough') ? 'strikethrough' : 'normal';
      styleInfo['font-superscript'] = document.queryCommandState('superscript') ? 'superscript' : 'normal';
      styleInfo['font-subscript'] = document.queryCommandState('subscript') ? 'subscript' : 'normal';

      // list-style-type to list-style(unordered, ordered)
      if (!rng.isOnList()) {
        styleInfo['list-style'] = 'none';
    ***REMOVED*** else {
        var aOrderedType = ['circle', 'disc', 'disc-leading-zero', 'square'];
        var isUnordered = $.inArray(styleInfo['list-style-type'], aOrderedType) > -1;
        styleInfo['list-style'] = isUnordered ? 'unordered' : 'ordered';
    ***REMOVED***

      var para = dom.ancestor(rng.sc, dom.isPara);
      if (para && para.style['line-height']) {
        styleInfo['line-height'] = para.style.lineHeight;
    ***REMOVED*** else {
        var lineHeight = parseInt(styleInfo['line-height'], 10) / parseInt(styleInfo['font-size'], 10);
        styleInfo['line-height'] = lineHeight.toFixed(1);
    ***REMOVED***

      styleInfo.image = dom.isImg(target) && target;
      styleInfo.anchor = rng.isOnAnchor() && dom.ancestor(rng.sc, dom.isAnchor);
      styleInfo.ancestors = dom.listAncestor(rng.sc, dom.isEditable);
      styleInfo.range = rng;

      return styleInfo;
  ***REMOVED***;
***REMOVED***;


  var Typing = function () {

    /**
     * @param {jQuery***REMOVED*** $editable 
     * @param {WrappedRange***REMOVED*** rng
     * @param {Number***REMOVED*** tabsize
     */
    this.insertTab = function ($editable, rng, tabsize) {
      var tab = dom.createText(new Array(tabsize + 1).join(dom.NBSP_CHAR));
      rng = rng.deleteContents();
      rng.insertNode(tab, true);

      rng = range.create(tab, tabsize);
      rng.select();
  ***REMOVED***;

    /**
     * insert paragraph
     */
    this.insertParagraph = function () {
      var rng = range.create();

      // deleteContents on range.
      rng = rng.deleteContents();

      // Wrap range if it needs to be wrapped by paragraph
      rng = rng.wrapBodyInlineWithPara();

      // finding paragraph
      var splitRoot = dom.ancestor(rng.sc, dom.isPara);

      var nextPara;
      // on paragraph: split paragraph
      if (splitRoot) {
        nextPara = dom.splitTree(splitRoot, rng.getStartPoint());

        var emptyAnchors = dom.listDescendant(splitRoot, dom.isEmptyAnchor);
        emptyAnchors = emptyAnchors.concat(dom.listDescendant(nextPara, dom.isEmptyAnchor));

        $.each(emptyAnchors, function (idx, anchor) {
          dom.remove(anchor);
      ***REMOVED***);
      // no paragraph: insert empty paragraph
    ***REMOVED*** else {
        var next = rng.sc.childNodes[rng.so];
        nextPara = $(dom.emptyPara)[0];
        if (next) {
          rng.sc.insertBefore(nextPara, next);
      ***REMOVED*** else {
          rng.sc.appendChild(nextPara);
      ***REMOVED***
    ***REMOVED***

      range.create(nextPara, 0).normalize().select();
  ***REMOVED***;

***REMOVED***;

  /**
   * Table
   * @class
   */
  var Table = function () {
    /**
     * handle tab key
     *
     * @param {WrappedRange***REMOVED*** rng
     * @param {Boolean***REMOVED*** isShift
     */
    this.tab = function (rng, isShift) {
      var cell = dom.ancestor(rng.commonAncestor(), dom.isCell);
      var table = dom.ancestor(cell, dom.isTable);
      var cells = dom.listDescendant(table, dom.isCell);

      var nextCell = list[isShift ? 'prev' : 'next'](cells, cell);
      if (nextCell) {
        range.create(nextCell, 0).select();
    ***REMOVED***
  ***REMOVED***;

    /**
     * create empty table element
     *
     * @param {Number***REMOVED*** rowCount
     * @param {Number***REMOVED*** colCount
     * @return {Node***REMOVED***
     */
    this.createTable = function (colCount, rowCount) {
      var tds = [], tdHTML;
      for (var idxCol = 0; idxCol < colCount; idxCol++) {
        tds.push('<td>' + dom.blank + '</td>');
    ***REMOVED***
      tdHTML = tds.join('');

      var trs = [], trHTML;
      for (var idxRow = 0; idxRow < rowCount; idxRow++) {
        trs.push('<tr>' + tdHTML + '</tr>');
    ***REMOVED***
      trHTML = trs.join('');
      return $('<table class="table table-bordered">' + trHTML + '</table>')[0];
  ***REMOVED***;
***REMOVED***;


  var Bullet = function () {
    /**
     * toggle ordered list
     * @type command
     */
    this.insertOrderedList = function () {
      this.toggleList('OL');
  ***REMOVED***;

    /**
     * toggle unordered list
     * @type command
     */
    this.insertUnorderedList = function () {
      this.toggleList('UL');
  ***REMOVED***;

    /**
     * indent
     * @type command
     */
    this.indent = function () {
      var self = this;
      var rng = range.create().wrapBodyInlineWithPara();

      var paras = rng.nodes(dom.isPara, { includeAncestor: true ***REMOVED***);
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

      $.each(clustereds, function (idx, paras) {
        var head = list.head(paras);
        if (dom.isLi(head)) {
          self.wrapList(paras, head.parentNode.nodeName);
      ***REMOVED*** else {
          $.each(paras, function (idx, para) {
            $(para).css('marginLeft', function (idx, val) {
              return (parseInt(val, 10) || 0) + 25;
          ***REMOVED***);
        ***REMOVED***);
      ***REMOVED***
    ***REMOVED***);

      rng.select();
  ***REMOVED***;

    /**
     * outdent
     * @type command
     */
    this.outdent = function () {
      var self = this;
      var rng = range.create().wrapBodyInlineWithPara();

      var paras = rng.nodes(dom.isPara, { includeAncestor: true ***REMOVED***);
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

      $.each(clustereds, function (idx, paras) {
        var head = list.head(paras);
        if (dom.isLi(head)) {
          self.releaseList([paras]);
      ***REMOVED*** else {
          $.each(paras, function (idx, para) {
            $(para).css('marginLeft', function (idx, val) {
              val = (parseInt(val, 10) || 0);
              return val > 25 ? val - 25 : '';
          ***REMOVED***);
        ***REMOVED***);
      ***REMOVED***
    ***REMOVED***);

      rng.select();
  ***REMOVED***;

    /**
     * toggle list
     * @param {String***REMOVED*** listName - OL or UL
     */
    this.toggleList = function (listName) {
      var self = this;
      var rng = range.create().wrapBodyInlineWithPara();

      var paras = rng.nodes(dom.isPara, { includeAncestor: true ***REMOVED***);
      var clustereds = list.clusterBy(paras, func.peq2('parentNode'));

      // paragraph to list
      if (list.find(paras, dom.isPurePara)) {
        $.each(clustereds, function (idx, paras) {
          self.wrapList(paras, listName);
      ***REMOVED***);
      // list to paragraph or change list style
    ***REMOVED*** else {
        var diffLists = rng.nodes(dom.isList, {
          includeAncestor: true
      ***REMOVED***).filter(function (listNode) {
          return !$.nodeName(listNode, listName);
      ***REMOVED***);

        if (diffLists.length) {
          $.each(diffLists, function (idx, listNode) {
            dom.replace(listNode, listName);
        ***REMOVED***);
      ***REMOVED*** else {
          this.releaseList(clustereds, true);
      ***REMOVED***
    ***REMOVED***

      rng.select();
  ***REMOVED***;

    /**
     * @param {Node[]***REMOVED*** paras
     * @param {String***REMOVED*** listName
     */
    this.wrapList = function (paras, listName) {
      var head = list.head(paras);
      var last = list.last(paras);

      var prevList = dom.isList(head.previousSibling) && head.previousSibling;
      var nextList = dom.isList(last.nextSibling) && last.nextSibling;

      var listNode = prevList || dom.insertAfter(dom.create(listName || 'UL'), last);

      // P to LI
      paras = $.map(paras, function (para) {
        return dom.isPurePara(para) ? dom.replace(para, 'LI') : para;
    ***REMOVED***);

      // append to list(<ul>, <ol>)
      dom.appendChildNodes(listNode, paras);

      if (nextList) {
        dom.appendChildNodes(listNode, list.from(nextList.childNodes));
        dom.remove(nextList);
    ***REMOVED***
  ***REMOVED***;

    /**
     * @param {Array[]***REMOVED*** clustereds
     * @param {Boolean***REMOVED*** isEscapseToBody
     * @return {Node[]***REMOVED***
     */
    this.releaseList = function (clustereds, isEscapseToBody) {
      var releasedParas = [];

      $.each(clustereds, function (idx, paras) {
        var head = list.head(paras);
        var last = list.last(paras);

        var headList = isEscapseToBody ? dom.lastAncestor(head, dom.isList) :
                                         head.parentNode;
        var lastList = headList.childNodes.length > 1 ? dom.splitTree(headList, {
          node: last.parentNode,
          offset: dom.position(last) + 1
      ***REMOVED***, true) : null;

        var middleList = dom.splitTree(headList, {
          node: head.parentNode,
          offset: dom.position(head)
      ***REMOVED***, true);

        paras = isEscapseToBody ? dom.listDescendant(middleList, dom.isLi) :
                                  list.from(middleList.childNodes).filter(dom.isLi);

        // LI to P
        if (isEscapseToBody || !dom.isList(headList.parentNode)) {
          paras = $.map(paras, function (para) {
            return dom.replace(para, 'P');
        ***REMOVED***);
      ***REMOVED***

        $.each(list.from(paras).reverse(), function (idx, para) {
          dom.insertAfter(para, headList);
      ***REMOVED***);

        // remove empty lists
        var rootLists = list.compact([headList, middleList, lastList]);
        $.each(rootLists, function (idx, rootList) {
          var listNodes = [rootList].concat(dom.listDescendant(rootList, dom.isList));
          $.each(listNodes.reverse(), function (idx, listNode) {
            if (!dom.nodeLength(listNode)) {
              dom.remove(listNode, true);
          ***REMOVED***
        ***REMOVED***);
      ***REMOVED***);

        releasedParas = releasedParas.concat(paras);
    ***REMOVED***);

      return releasedParas;
  ***REMOVED***;
***REMOVED***;

  /**
   * Editor
   * @class
   */
  var Editor = function () {

    var style = new Style();
    var table = new Table();
    var typing = new Typing();
    var bullet = new Bullet();

    /**
     * create range
     */
    this.createRange = function ($editable) {
      $editable.focus();
      return range.create();
  ***REMOVED***;

    /**
     * save current range
     *
     * @param {jQuery***REMOVED*** $editable
     */
    this.saveRange = function ($editable, thenCollapse) {
      $editable.focus();
      $editable.data('range', range.create());
      if (thenCollapse) {
        range.create().collapse().select();
    ***REMOVED***
  ***REMOVED***;

    this.saveNode = function ($editable) {
      // copy child node reference
      var copy = [];
      for (var key  = 0, len = $editable[0].childNodes.length; key < len; key++) {
        copy.push($editable[0].childNodes[key]);
    ***REMOVED***
      $editable.data('childNodes', copy);
  ***REMOVED***;

    /**
     * restore lately range
     *
     * @param {jQuery***REMOVED*** $editable
     */
    this.restoreRange = function ($editable) {
      var rng = $editable.data('range');
      if (rng) {
        rng.select();
        $editable.focus();
    ***REMOVED***
  ***REMOVED***;

    this.restoreNode = function ($editable) {
      $editable.html('');
      var child = $editable.data('childNodes');
      for (var index = 0, len = child.length; index < len; index++) {
        $editable[0].appendChild(child[index]);
    ***REMOVED***
  ***REMOVED***;
    /**
     * current style
     * @param {Node***REMOVED*** target
     */
    this.currentStyle = function (target) {
      var rng = range.create();
      return rng ? rng.isOnEditable() && style.current(rng, target) : false;
  ***REMOVED***;

    var triggerOnChange = this.triggerOnChange = function ($editable) {
      var onChange = $editable.data('callbacks').onChange;
      if (onChange) {
        onChange($editable.html(), $editable);
    ***REMOVED***
  ***REMOVED***;

    /**
     * undo
     * @param {jQuery***REMOVED*** $editable
     */
    this.undo = function ($editable) {
      $editable.data('NoteHistory').undo();
      triggerOnChange($editable);
  ***REMOVED***;

    /**
     * redo
     * @param {jQuery***REMOVED*** $editable
     */
    this.redo = function ($editable) {
      $editable.data('NoteHistory').redo();
      triggerOnChange($editable);
  ***REMOVED***;

    /**
     * after command
     * @param {jQuery***REMOVED*** $editable
     */
    var afterCommand = this.afterCommand = function ($editable) {
      $editable.data('NoteHistory').recordUndo();
      triggerOnChange($editable);
  ***REMOVED***;

    /* jshint ignore:start */
    // native commands(with execCommand), generate function for execCommand
    var commands = ['bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript',
                    'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull',
                    'formatBlock', 'removeFormat',
                    'backColor', 'foreColor', 'insertHorizontalRule', 'fontName'];

    for (var idx = 0, len = commands.length; idx < len; idx ++) {
      this[commands[idx]] = (function (sCmd) {
        return function ($editable, value) {
          document.execCommand(sCmd, false, value);

          afterCommand($editable);
      ***REMOVED***;
    ***REMOVED***)(commands[idx]);
  ***REMOVED***
    /* jshint ignore:end */

    /**
     * handle tab key
     *
     * @param {jQuery***REMOVED*** $editable
     * @param {Object***REMOVED*** options
     */
    this.tab = function ($editable, options) {
      var rng = range.create();
      if (rng.isCollapsed() && rng.isOnCell()) {
        table.tab(rng);
    ***REMOVED*** else {
        typing.insertTab($editable, rng, options.tabsize);
        afterCommand($editable);
    ***REMOVED***
  ***REMOVED***;

    /**
     * handle shift+tab key
     */
    this.untab = function () {
      var rng = range.create();
      if (rng.isCollapsed() && rng.isOnCell()) {
        table.tab(rng, true);
    ***REMOVED***
  ***REMOVED***;

    /**
     * insert paragraph
     *
     * @param {Node***REMOVED*** $editable
     */
    this.insertParagraph = function ($editable) {
      typing.insertParagraph($editable);
      afterCommand($editable);
  ***REMOVED***;

    /**
     * @param {jQuery***REMOVED*** $editable
     */
    this.insertOrderedList = function ($editable) {
      bullet.insertOrderedList($editable);
      afterCommand($editable);
  ***REMOVED***;

    /**
     * @param {jQuery***REMOVED*** $editable
     */
    this.insertUnorderedList = function ($editable) {
      bullet.insertUnorderedList($editable);
      afterCommand($editable);
  ***REMOVED***;

    /**
     * @param {jQuery***REMOVED*** $editable
     */
    this.indent = function ($editable) {
      bullet.indent($editable);
      afterCommand($editable);
  ***REMOVED***;

    /**
     * @param {jQuery***REMOVED*** $editable
     */
    this.outdent = function ($editable) {
      bullet.outdent($editable);
      afterCommand($editable);
  ***REMOVED***;

    /**
     * insert image
     *
     * @param {jQuery***REMOVED*** $editable
     * @param {String***REMOVED*** sUrl
     */
    this.insertImage = function ($editable, sUrl, filename) {
      async.createImage(sUrl, filename).then(function ($image) {
        $image.css({
          display: '',
          width: Math.min($editable.width(), $image.width())
      ***REMOVED***);
        range.create().insertNode($image[0]);
        afterCommand($editable);
    ***REMOVED***).fail(function () {
        var callbacks = $editable.data('callbacks');
        if (callbacks.onImageUploadError) {
          callbacks.onImageUploadError();
      ***REMOVED***
    ***REMOVED***);
  ***REMOVED***;

    /**
     * insert node
     * @param {Node***REMOVED*** $editable
     * @param {Node***REMOVED*** node
     * @param {Boolean***REMOVED*** [isInline]
     */
    this.insertNode = function ($editable, node, isInline) {
      range.create().insertNode(node, isInline);
      afterCommand($editable);
  ***REMOVED***;

    /**
     * insert text
     * @param {Node***REMOVED*** $editable
     * @param {String***REMOVED*** text
     */
    this.insertText = function ($editable, text) {
      var textNode = this.createRange($editable).insertNode(dom.createText(text), true);
      range.create(textNode, dom.nodeLength(textNode)).select();
      afterCommand($editable);
  ***REMOVED***;

    /**
     * formatBlock
     *
     * @param {jQuery***REMOVED*** $editable
     * @param {String***REMOVED*** tagName
     */
    this.formatBlock = function ($editable, tagName) {
      tagName = agent.isMSIE ? '<' + tagName + '>' : tagName;
      document.execCommand('FormatBlock', false, tagName);
      afterCommand($editable);
  ***REMOVED***;

    this.formatPara = function ($editable) {
      this.formatBlock($editable, 'P');
      afterCommand($editable);
  ***REMOVED***;

    /* jshint ignore:start */
    for (var idx = 1; idx <= 6; idx ++) {
      this['formatH' + idx] = function (idx) {
        return function ($editable) {
          this.formatBlock($editable, 'H' + idx);
      ***REMOVED***;
    ***REMOVED***(idx);
  ***REMOVED***;
    /* jshint ignore:end */

    /**
     * fontsize
     * FIXME: Still buggy
     *
     * @param {jQuery***REMOVED*** $editable
     * @param {String***REMOVED*** value - px
     */
    this.fontSize = function ($editable, value) {
      document.execCommand('fontSize', false, 3);
      if (agent.isFF) {
        // firefox: <font size="3"> to <span style='font-size={value***REMOVED***px;'>, buggy
        $editable.find('font[size=3]').removeAttr('size').css('font-size', value + 'px');
    ***REMOVED*** else {
        // chrome: <span style="font-size: medium"> to <span style='font-size={value***REMOVED***px;'>
        $editable.find('span').filter(function () {
          return this.style.fontSize === 'medium';
      ***REMOVED***).css('font-size', value + 'px');
    ***REMOVED***

      afterCommand($editable);
  ***REMOVED***;

    /**
     * lineHeight
     * @param {jQuery***REMOVED*** $editable
     * @param {String***REMOVED*** value
     */
    this.lineHeight = function ($editable, value) {
      style.stylePara(range.create(), {
        lineHeight: value
    ***REMOVED***);
      afterCommand($editable);
  ***REMOVED***;

    /**
     * unlink
     *
     * @type command
     *
     * @param {jQuery***REMOVED*** $editable
     */
    this.unlink = function ($editable) {
      var rng = range.create();
      if (rng.isOnAnchor()) {
        var anchor = dom.ancestor(rng.sc, dom.isAnchor);
        rng = range.createFromNode(anchor);
        rng.select();
        document.execCommand('unlink');

        afterCommand($editable);
    ***REMOVED***
  ***REMOVED***;

    /**
     * create link
     *
     * @type command
     *
     * @param {jQuery***REMOVED*** $editable
     * @param {Object***REMOVED*** linkInfo
     * @param {Object***REMOVED*** options
     */
    this.createLink = function ($editable, linkInfo, options) {
      var linkUrl = linkInfo.url;
      var linkText = linkInfo.text;
      var isNewWindow = linkInfo.newWindow;
      var rng = linkInfo.range;

      if (options.onCreateLink) {
        linkUrl = options.onCreateLink(linkUrl);
    ***REMOVED***

      rng = rng.deleteContents();

      // Create a new link when there is no anchor on range.
      var anchor = rng.insertNode($('<A>' + linkText + '</A>')[0], true);
      $(anchor).attr({
        href: linkUrl,
        target: isNewWindow ? '_blank' : ''
    ***REMOVED***);

      range.createFromNode(anchor).select();
      afterCommand($editable);
  ***REMOVED***;

    /**
     * returns link info
     *
     * @return {Object***REMOVED***
     */
    this.getLinkInfo = function ($editable) {
      $editable.focus();

      var rng = range.create().expand(dom.isAnchor);

      // Get the first anchor on range(for edit).
      var $anchor = $(list.head(rng.nodes(dom.isAnchor)));

      return {
        range: rng,
        text: rng.toString(),
        isNewWindow: $anchor.length ? $anchor.attr('target') === '_blank' : true,
        url: $anchor.length ? $anchor.attr('href') : ''
    ***REMOVED***;
  ***REMOVED***;

    this.color = function ($editable, sObjColor) {
      var oColor = JSON.parse(sObjColor);
      var foreColor = oColor.foreColor, backColor = oColor.backColor;

      if (foreColor) { document.execCommand('foreColor', false, foreColor); ***REMOVED***
      if (backColor) { document.execCommand('backColor', false, backColor); ***REMOVED***

      afterCommand($editable);
  ***REMOVED***;

    this.insertTable = function ($editable, sDim) {
      var dimension = sDim.split('x');
      var rng = range.create();
      rng = rng.deleteContents();
      rng.insertNode(table.createTable(dimension[0], dimension[1]));
      afterCommand($editable);
  ***REMOVED***;

    /**
     * @param {jQuery***REMOVED*** $editable
     * @param {String***REMOVED*** value
     * @param {jQuery***REMOVED*** $target
     */
    this.floatMe = function ($editable, value, $target) {
      $target.css('float', value);
      afterCommand($editable);
  ***REMOVED***;

    this.imageShape = function ($editable, value, $target) {
      $target.removeClass('img-rounded img-circle img-thumbnail');

      if (value) {
        $target.addClass(value);
    ***REMOVED***

      afterCommand($editable);
  ***REMOVED***;

    /**
     * resize overlay element
     * @param {jQuery***REMOVED*** $editable
     * @param {String***REMOVED*** value
     * @param {jQuery***REMOVED*** $target - target element
     */
    this.resize = function ($editable, value, $target) {
      $target.css({
        width: value * 100 + '%',
        height: ''
    ***REMOVED***);

      afterCommand($editable);
  ***REMOVED***;

    /**
     * @param {Position***REMOVED*** pos
     * @param {jQuery***REMOVED*** $target - target element
     * @param {Boolean***REMOVED*** [bKeepRatio] - keep ratio
     */
    this.resizeTo = function (pos, $target, bKeepRatio) {
      var imageSize;
      if (bKeepRatio) {
        var newRatio = pos.y / pos.x;
        var ratio = $target.data('ratio');
        imageSize = {
          width: ratio > newRatio ? pos.x : pos.y / ratio,
          height: ratio > newRatio ? pos.x * ratio : pos.y
      ***REMOVED***;
    ***REMOVED*** else {
        imageSize = {
          width: pos.x,
          height: pos.y
      ***REMOVED***;
    ***REMOVED***

      $target.css(imageSize);
  ***REMOVED***;

    /**
     * remove media object
     *
     * @param {jQuery***REMOVED*** $editable
     * @param {String***REMOVED*** value - dummy argument (for keep interface)
     * @param {jQuery***REMOVED*** $target - target element
     */
    this.removeMedia = function ($editable, value, $target) {
      $target.detach();

      afterCommand($editable);
  ***REMOVED***;
***REMOVED***;

  /**
   * History
   * @class
   */
  var History = function ($editable) {
    var stack = [], stackOffset = -1;
    var editable = $editable[0];

    var makeSnapshot = function () {
      var rng = range.create();
      var emptyBookmark = {s: {path: [0], offset: 0***REMOVED***, e: {path: [0], offset: 0***REMOVED******REMOVED***;

      return {
        contents: $editable.html(),
        bookmark: (rng ? rng.bookmark(editable) : emptyBookmark)
    ***REMOVED***;
  ***REMOVED***;

    var applySnapshot = function (snapshot) {
      if (snapshot.contents !== null) {
        $editable.html(snapshot.contents);
    ***REMOVED***
      if (snapshot.bookmark !== null) {
        range.createFromBookmark(editable, snapshot.bookmark).select();
    ***REMOVED***
  ***REMOVED***;

    this.undo = function () {
      if (0 < stackOffset) {
        stackOffset--;
        applySnapshot(stack[stackOffset]);
    ***REMOVED***
  ***REMOVED***;

    this.redo = function () {
      if (stack.length - 1 > stackOffset) {
        stackOffset++;
        applySnapshot(stack[stackOffset]);
    ***REMOVED***
  ***REMOVED***;

    this.recordUndo = function () {
      stackOffset++;

      // Wash out stack after stackOffset
      if (stack.length > stackOffset) {
        stack = stack.slice(0, stackOffset);
    ***REMOVED***

      // Create new snapshot and push it to the end
      stack.push(makeSnapshot());
  ***REMOVED***;

    // Create first undo stack
    this.recordUndo();
***REMOVED***;

  /**
   * Button
   */
  var Button = function () {
    /**
     * update button status
     *
     * @param {jQuery***REMOVED*** $container
     * @param {Object***REMOVED*** styleInfo
     */
    this.update = function ($container, styleInfo) {
      /**
       * handle dropdown's check mark (for fontname, fontsize, lineHeight).
       * @param {jQuery***REMOVED*** $btn
       * @param {Number***REMOVED*** value
       */
      var checkDropdownMenu = function ($btn, value) {
        $btn.find('.dropdown-menu li a').each(function () {
          // always compare string to avoid creating another func.
          var isChecked = ($(this).data('value') + '') === (value + '');
          this.className = isChecked ? 'checked' : '';
      ***REMOVED***);
    ***REMOVED***;

      /**
       * update button state(active or not).
       *
       * @param {String***REMOVED*** selector
       * @param {Function***REMOVED*** pred
       */
      var btnState = function (selector, pred) {
        var $btn = $container.find(selector);
        $btn.toggleClass('active', pred());
    ***REMOVED***;

      // fontname
      var $fontname = $container.find('.note-fontname');
      if ($fontname.length) {
        var selectedFont = styleInfo['font-family'];
        if (!!selectedFont) {
          selectedFont = list.head(selectedFont.split(','));
          selectedFont = selectedFont.replace(/\'/g, '');
          $fontname.find('.note-current-fontname').text(selectedFont);
          checkDropdownMenu($fontname, selectedFont);
      ***REMOVED***
    ***REMOVED***

      // fontsize
      var $fontsize = $container.find('.note-fontsize');
      $fontsize.find('.note-current-fontsize').text(styleInfo['font-size']);
      checkDropdownMenu($fontsize, parseFloat(styleInfo['font-size']));

      // lineheight
      var $lineHeight = $container.find('.note-height');
      checkDropdownMenu($lineHeight, parseFloat(styleInfo['line-height']));

      btnState('button[data-event="bold"]', function () {
        return styleInfo['font-bold'] === 'bold';
    ***REMOVED***);
      btnState('button[data-event="italic"]', function () {
        return styleInfo['font-italic'] === 'italic';
    ***REMOVED***);
      btnState('button[data-event="underline"]', function () {
        return styleInfo['font-underline'] === 'underline';
    ***REMOVED***);
      btnState('button[data-event="strikethrough"]', function () {
        return styleInfo['font-strikethrough'] === 'strikethrough';
    ***REMOVED***);
      btnState('button[data-event="superscript"]', function () {
        return styleInfo['font-superscript'] === 'superscript';
    ***REMOVED***);
      btnState('button[data-event="subscript"]', function () {
        return styleInfo['font-subscript'] === 'subscript';
    ***REMOVED***);
      btnState('button[data-event="justifyLeft"]', function () {
        return styleInfo['text-align'] === 'left' || styleInfo['text-align'] === 'start';
    ***REMOVED***);
      btnState('button[data-event="justifyCenter"]', function () {
        return styleInfo['text-align'] === 'center';
    ***REMOVED***);
      btnState('button[data-event="justifyRight"]', function () {
        return styleInfo['text-align'] === 'right';
    ***REMOVED***);
      btnState('button[data-event="justifyFull"]', function () {
        return styleInfo['text-align'] === 'justify';
    ***REMOVED***);
      btnState('button[data-event="insertUnorderedList"]', function () {
        return styleInfo['list-style'] === 'unordered';
    ***REMOVED***);
      btnState('button[data-event="insertOrderedList"]', function () {
        return styleInfo['list-style'] === 'ordered';
    ***REMOVED***);
  ***REMOVED***;

    /**
     * update recent color
     *
     * @param {Node***REMOVED*** button
     * @param {String***REMOVED*** eventName
     * @param {value***REMOVED*** value
     */
    this.updateRecentColor = function (button, eventName, value) {
      var $color = $(button).closest('.note-color');
      var $recentColor = $color.find('.note-recent-color');
      var colorInfo = JSON.parse($recentColor.attr('data-value'));
      colorInfo[eventName] = value;
      $recentColor.attr('data-value', JSON.stringify(colorInfo));
      var sKey = eventName === 'backColor' ? 'background-color' : 'color';
      $recentColor.find('i').css(sKey, value);
  ***REMOVED***;
***REMOVED***;

  /**
   * Toolbar
   */
  var Toolbar = function () {
    var button = new Button();

    this.update = function ($toolbar, styleInfo) {
      button.update($toolbar, styleInfo);
  ***REMOVED***;

    /**
     * @param {Node***REMOVED*** button
     * @param {String***REMOVED*** eventName
     * @param {String***REMOVED*** value
     */
    this.updateRecentColor = function (buttonNode, eventName, value) {
      button.updateRecentColor(buttonNode, eventName, value);
  ***REMOVED***;

    /**
     * activate buttons exclude codeview
     * @param {jQuery***REMOVED*** $toolbar
     */
    this.activate = function ($toolbar) {
      $toolbar.find('button')
              .not('button[data-event="codeview"]')
              .removeClass('disabled');
  ***REMOVED***;

    /**
     * deactivate buttons exclude codeview
     * @param {jQuery***REMOVED*** $toolbar
     */
    this.deactivate = function ($toolbar) {
      $toolbar.find('button')
              .not('button[data-event="codeview"]')
              .addClass('disabled');
  ***REMOVED***;

    this.updateFullscreen = function ($container, bFullscreen) {
      var $btn = $container.find('button[data-event="fullscreen"]');
      $btn.toggleClass('active', bFullscreen);
  ***REMOVED***;

    this.updateCodeview = function ($container, isCodeview) {
      var $btn = $container.find('button[data-event="codeview"]');
      $btn.toggleClass('active', isCodeview);
  ***REMOVED***;
***REMOVED***;

  /**
   * Popover (http://getbootstrap.com/javascript/#popovers)
   */
  var Popover = function () {
    var button = new Button();

    /**
     * returns position from placeholder
     * @param {Node***REMOVED*** placeholder
     * @param {Boolean***REMOVED*** isAirMode
     */
    var posFromPlaceholder = function (placeholder, isAirMode) {
      var $placeholder = $(placeholder);
      var pos = isAirMode ? $placeholder.offset() : $placeholder.position();
      var height = $placeholder.outerHeight(true); // include margin

      // popover below placeholder.
      return {
        left: pos.left,
        top: pos.top + height
    ***REMOVED***;
  ***REMOVED***;

    /**
     * show popover
     * @param {jQuery***REMOVED*** popover
     * @param {Position***REMOVED*** pos
     */
    var showPopover = function ($popover, pos) {
      $popover.css({
        display: 'block',
        left: pos.left,
        top: pos.top
    ***REMOVED***);
  ***REMOVED***;

    var PX_POPOVER_ARROW_OFFSET_X = 20;

    /**
     * update current state
     * @param {jQuery***REMOVED*** $popover - popover container
     * @param {Object***REMOVED*** styleInfo - style object
     * @param {Boolean***REMOVED*** isAirMode
     */
    this.update = function ($popover, styleInfo, isAirMode) {
      button.update($popover, styleInfo);

      var $linkPopover = $popover.find('.note-link-popover');
      if (styleInfo.anchor) {
        var $anchor = $linkPopover.find('a');
        var href = $(styleInfo.anchor).attr('href');
        $anchor.attr('href', href).html(href);
        showPopover($linkPopover, posFromPlaceholder(styleInfo.anchor, isAirMode));
    ***REMOVED*** else {
        $linkPopover.hide();
    ***REMOVED***

      var $imagePopover = $popover.find('.note-image-popover');
      if (styleInfo.image) {
        showPopover($imagePopover, posFromPlaceholder(styleInfo.image, isAirMode));
    ***REMOVED*** else {
        $imagePopover.hide();
    ***REMOVED***

      var $airPopover = $popover.find('.note-air-popover');
      if (isAirMode && !styleInfo.range.isCollapsed()) {
        var bnd = func.rect2bnd(list.last(styleInfo.range.getClientRects()));
        showPopover($airPopover, {
          left: Math.max(bnd.left + bnd.width / 2 - PX_POPOVER_ARROW_OFFSET_X, 0),
          top: bnd.top + bnd.height
      ***REMOVED***);
    ***REMOVED*** else {
        $airPopover.hide();
    ***REMOVED***
  ***REMOVED***;

    /**
     * @param {Node***REMOVED*** button
     * @param {String***REMOVED*** eventName
     * @param {String***REMOVED*** value
     */
    this.updateRecentColor = function (button, eventName, value) {
      button.updateRecentColor(button, eventName, value);
  ***REMOVED***;

    /**
     * hide all popovers
     * @param {jQuery***REMOVED*** $popover - popover container
     */
    this.hide = function ($popover) {
      $popover.children().hide();
  ***REMOVED***;
***REMOVED***;

  /**
   * Handle
   */
  var Handle = function () {
    /**
     * update handle
     * @param {jQuery***REMOVED*** $handle
     * @param {Object***REMOVED*** styleInfo
     * @param {Boolean***REMOVED*** isAirMode
     */
    this.update = function ($handle, styleInfo, isAirMode) {
      var $selection = $handle.find('.note-control-selection');
      if (styleInfo.image) {
        var $image = $(styleInfo.image);
        var pos = isAirMode ? $image.offset() : $image.position();

        // include margin
        var imageSize = {
          w: $image.outerWidth(true),
          h: $image.outerHeight(true)
      ***REMOVED***;

        $selection.css({
          display: 'block',
          left: pos.left,
          top: pos.top,
          width: imageSize.w,
          height: imageSize.h
      ***REMOVED***).data('target', styleInfo.image); // save current image element.
        var sizingText = imageSize.w + 'x' + imageSize.h;
        $selection.find('.note-control-selection-info').text(sizingText);
    ***REMOVED*** else {
        $selection.hide();
    ***REMOVED***
  ***REMOVED***;

    this.hide = function ($handle) {
      $handle.children().hide();
  ***REMOVED***;
***REMOVED***;

  /**
   * Dialog 
   *
   * @class
   */
  var Dialog = function () {

    /**
     * toggle button status
     *
     * @param {jQuery***REMOVED*** $btn
     * @param {Boolean***REMOVED*** isEnable
     */
    var toggleBtn = function ($btn, isEnable) {
      $btn.toggleClass('disabled', !isEnable);
      $btn.attr('disabled', !isEnable);
  ***REMOVED***;

    /**
     * show image dialog
     *
     * @param {jQuery***REMOVED*** $editable
     * @param {jQuery***REMOVED*** $dialog
     * @return {Promise***REMOVED***
     */
    this.showImageDialog = function ($editable, $dialog) {
      return $.Deferred(function (deferred) {
        var $imageDialog = $dialog.find('.note-image-dialog');

        var $imageInput = $dialog.find('.note-image-input'),
            $imageUrl = $dialog.find('.note-image-url'),
            $imageBtn = $dialog.find('.note-image-btn');

        $imageDialog.one('shown.bs.modal', function () {
          // Cloning imageInput to clear element.
          $imageInput.replaceWith($imageInput.clone()
            .on('change', function () {
              deferred.resolve(this.files || this.value);
              $imageDialog.modal('hide');
          ***REMOVED***)
            .val('')
          );

          $imageBtn.click(function (event) {
            event.preventDefault();

            deferred.resolve($imageUrl.val());
            $imageDialog.modal('hide');
        ***REMOVED***);

          $imageUrl.on('keyup paste', function (event) {
            var url;
            
            if (event.type === 'paste') {
              url = event.originalEvent.clipboardData.getData('text');
          ***REMOVED*** else {
              url = $imageUrl.val();
          ***REMOVED***
            
            toggleBtn($imageBtn, url);
        ***REMOVED***).val('').trigger('focus');
      ***REMOVED***).one('hidden.bs.modal', function () {
          $imageInput.off('change');
          $imageUrl.off('keyup paste');
          $imageBtn.off('click');

          if (deferred.state() === 'pending') {
            deferred.reject();
        ***REMOVED***
      ***REMOVED***).modal('show');
    ***REMOVED***);
  ***REMOVED***;

    /**
     * Show link dialog and set event handlers on dialog controls.
     *
     * @param {jQuery***REMOVED*** $dialog
     * @param {Object***REMOVED*** linkInfo
     * @return {Promise***REMOVED***
     */
    this.showLinkDialog = function ($editable, $dialog, linkInfo) {
      return $.Deferred(function (deferred) {
        var $linkDialog = $dialog.find('.note-link-dialog');

        var $linkText = $linkDialog.find('.note-link-text'),
        $linkUrl = $linkDialog.find('.note-link-url'),
        $linkBtn = $linkDialog.find('.note-link-btn'),
        $openInNewWindow = $linkDialog.find('input[type=checkbox]');

        $linkDialog.one('shown.bs.modal', function () {
          $linkText.val(linkInfo.text);

          $linkText.on('input', function () {
            // if linktext was modified by keyup,
            // stop cloning text from linkUrl
            linkInfo.text = $linkText.val();
        ***REMOVED***);

          // if no url was given, copy text to url
          if (!linkInfo.url) {
            linkInfo.url = linkInfo.text;
            toggleBtn($linkBtn, linkInfo.text);
        ***REMOVED***

          $linkUrl.on('input', function () {
            toggleBtn($linkBtn, $linkUrl.val());
            // display same link on `Text to display` input
            // when create a new link
            if (!linkInfo.text) {
              $linkText.val($linkUrl.val());
          ***REMOVED***
        ***REMOVED***).val(linkInfo.url).trigger('focus').trigger('select');

          $openInNewWindow.prop('checked', linkInfo.newWindow);

          $linkBtn.one('click', function (event) {
            event.preventDefault();

            deferred.resolve({
              range: linkInfo.range,
              url: $linkUrl.val(),
              text: $linkText.val(),
              newWindow: $openInNewWindow.is(':checked')
          ***REMOVED***);
            $linkDialog.modal('hide');
        ***REMOVED***);
      ***REMOVED***).one('hidden.bs.modal', function () {
          // detach events
          $linkText.off('input');
          $linkUrl.off('input');
          $linkBtn.off('click');

          if (deferred.state() === 'pending') {
            deferred.reject();
        ***REMOVED***
      ***REMOVED***).modal('show');
    ***REMOVED***).promise();
  ***REMOVED***;

    /**
     * show help dialog
     *
     * @param {jQuery***REMOVED*** $dialog
     */
    this.showHelpDialog = function ($editable, $dialog) {
      return $.Deferred(function (deferred) {
        var $helpDialog = $dialog.find('.note-help-dialog');

        $helpDialog.one('hidden.bs.modal', function () {
          deferred.resolve();
      ***REMOVED***).modal('show');
    ***REMOVED***).promise();
  ***REMOVED***;
***REMOVED***;


  var CodeMirror;
  if (agent.hasCodeMirror) {
    if (agent.isSupportAmd) {
      require(['CodeMirror'], function (cm) {
        CodeMirror = cm;
    ***REMOVED***);
  ***REMOVED*** else {
      CodeMirror = window.CodeMirror;
  ***REMOVED***
***REMOVED***

  /**
   * EventHandler
   */
  var EventHandler = function () {
    var $window = $(window);
    var $document = $(document);
    var $scrollbar = $('html, body');

    var editor = new Editor();
    var toolbar = new Toolbar(), popover = new Popover();
    var handle = new Handle(), dialog = new Dialog();

    this.getEditor = function () {
      return editor;
  ***REMOVED***;

    /**
     * returns makeLayoutInfo from editor's descendant node.
     *
     * @param {Node***REMOVED*** descendant
     * @returns {Object***REMOVED***
     */
    var makeLayoutInfo = function (descendant) {
      var $target = $(descendant).closest('.note-editor, .note-air-editor, .note-air-layout');

      if (!$target.length) { return null; ***REMOVED***

      var $editor;
      if ($target.is('.note-editor, .note-air-editor')) {
        $editor = $target;
    ***REMOVED*** else {
        $editor = $('#note-editor-' + list.last($target.attr('id').split('-')));
    ***REMOVED***

      return dom.buildLayoutInfo($editor);
  ***REMOVED***;

    /**
     * insert Images from file array.
     *
     * @param {Object***REMOVED*** layoutInfo
     * @param {File[]***REMOVED*** files
     */
    var insertImages = function (layoutInfo, files) {
      var $editor = layoutInfo.editor(),
          $editable = layoutInfo.editable();

      var callbacks = $editable.data('callbacks');
      var options = $editor.data('options');

      // If onImageUpload options setted
      if (callbacks.onImageUpload) {
        callbacks.onImageUpload(files, editor, $editable);
      // else insert Image as dataURL
    ***REMOVED*** else {
        $.each(files, function (idx, file) {
          var filename = file.name;
          if (options.maximumImageFileSize && options.maximumImageFileSize < file.size) {
            if (callbacks.onImageUploadError) {
              callbacks.onImageUploadError(options.langInfo.image.maximumFileSizeError);
          ***REMOVED*** else {
              alert(options.langInfo.image.maximumFileSizeError);
          ***REMOVED***
        ***REMOVED*** else {
            async.readFileAsDataURL(file).then(function (sDataURL) {
              editor.insertImage($editable, sDataURL, filename);
          ***REMOVED***).fail(function () {
              if (callbacks.onImageUploadError) {
                callbacks.onImageUploadError();
            ***REMOVED***
          ***REMOVED***);
        ***REMOVED***
      ***REMOVED***);
    ***REMOVED***
  ***REMOVED***;

    var commands = {
      /**
       * @param {Object***REMOVED*** layoutInfo
       */
      showLinkDialog: function (layoutInfo) {
        var $editor = layoutInfo.editor(),
            $dialog = layoutInfo.dialog(),
            $editable = layoutInfo.editable(),
            linkInfo = editor.getLinkInfo($editable);

        var options = $editor.data('options');

        editor.saveRange($editable);
        dialog.showLinkDialog($editable, $dialog, linkInfo).then(function (linkInfo) {
          editor.restoreRange($editable);
          editor.createLink($editable, linkInfo, options);
          // hide popover after creating link
          popover.hide(layoutInfo.popover());
      ***REMOVED***).fail(function () {
          editor.restoreRange($editable);
      ***REMOVED***);
    ***REMOVED***,

      /**
       * @param {Object***REMOVED*** layoutInfo
       */
      showImageDialog: function (layoutInfo) {
        var $dialog = layoutInfo.dialog(),
            $editable = layoutInfo.editable();

        editor.saveRange($editable);
        dialog.showImageDialog($editable, $dialog).then(function (data) {
          editor.restoreRange($editable);

          if (typeof data === 'string') {
            // image url
            editor.insertImage($editable, data);
        ***REMOVED*** else {
            // array of files
            insertImages(layoutInfo, data);
        ***REMOVED***
      ***REMOVED***).fail(function () {
          editor.restoreRange($editable);
      ***REMOVED***);
    ***REMOVED***,

      /**
       * @param {Object***REMOVED*** layoutInfo
       */
      showHelpDialog: function (layoutInfo) {
        var $dialog = layoutInfo.dialog(),
            $editable = layoutInfo.editable();

        editor.saveRange($editable, true);
        dialog.showHelpDialog($editable, $dialog).then(function () {
          editor.restoreRange($editable);
      ***REMOVED***);
    ***REMOVED***,

      fullscreen: function (layoutInfo) {
        var $editor = layoutInfo.editor(),
        $toolbar = layoutInfo.toolbar(),
        $editable = layoutInfo.editable(),
        $codable = layoutInfo.codable();

        var resize = function (size) {
          $editable.css('height', size.h);
          $codable.css('height', size.h);
          if ($codable.data('cmeditor')) {
            $codable.data('cmeditor').setsize(null, size.h);
        ***REMOVED***
      ***REMOVED***;

        $editor.toggleClass('fullscreen');
        var isFullscreen = $editor.hasClass('fullscreen');
        if (isFullscreen) {
          $editable.data('orgheight', $editable.css('height'));

          $window.on('resize', function () {
            resize({
              h: $window.height() - $toolbar.outerHeight()
          ***REMOVED***);
        ***REMOVED***).trigger('resize');

          $scrollbar.css('overflow', 'hidden');
      ***REMOVED*** else {
          $window.off('resize');
          resize({
            h: $editable.data('orgheight')
        ***REMOVED***);
          $scrollbar.css('overflow', 'visible');
      ***REMOVED***

        toolbar.updateFullscreen($toolbar, isFullscreen);
    ***REMOVED***,

      codeview: function (layoutInfo) {
        var $editor = layoutInfo.editor(),
        $toolbar = layoutInfo.toolbar(),
        $editable = layoutInfo.editable(),
        $codable = layoutInfo.codable(),
        $popover = layoutInfo.popover(),
        $handle = layoutInfo.handle();

        var options = $editor.data('options');

        var cmEditor, server;

        $editor.toggleClass('codeview');

        var isCodeview = $editor.hasClass('codeview');
        if (isCodeview) {
          $codable.val(dom.html($editable, true));
          $codable.height($editable.height());
          toolbar.deactivate($toolbar);
          popover.hide($popover);
          handle.hide($handle);
          $codable.focus();

          // activate CodeMirror as codable
          if (agent.hasCodeMirror) {
            cmEditor = CodeMirror.fromTextArea($codable[0], options.codemirror);

            // CodeMirror TernServer
            if (options.codemirror.tern) {
              server = new CodeMirror.TernServer(options.codemirror.tern);
              cmEditor.ternServer = server;
              cmEditor.on('cursorActivity', function (cm) {
                server.updateArgHints(cm);
            ***REMOVED***);
          ***REMOVED***

            // CodeMirror hasn't Padding.
            cmEditor.setSize(null, $editable.outerHeight());
            $codable.data('cmEditor', cmEditor);
        ***REMOVED***
      ***REMOVED*** else {
          // deactivate CodeMirror as codable
          if (agent.hasCodeMirror) {
            cmEditor = $codable.data('cmEditor');
            $codable.val(cmEditor.getValue());
            cmEditor.toTextArea();
        ***REMOVED***

          $editable.html(dom.value($codable) || dom.emptyPara);
          $editable.height(options.height ? $codable.height() : 'auto');

          toolbar.activate($toolbar);
          $editable.focus();
      ***REMOVED***

        toolbar.updateCodeview(layoutInfo.toolbar(), isCodeview);
    ***REMOVED***
  ***REMOVED***;

    var hMousedown = function (event) {
      //preventDefault Selection for FF, IE8+
      if (dom.isImg(event.target)) {
        event.preventDefault();
    ***REMOVED***
  ***REMOVED***;

    var hToolbarAndPopoverUpdate = function (event) {
      // delay for range after mouseup
      setTimeout(function () {
        var layoutInfo = makeLayoutInfo(event.currentTarget || event.target);
        var styleInfo = editor.currentStyle(event.target);
        if (!styleInfo) { return; ***REMOVED***

        var isAirMode = layoutInfo.editor().data('options').airMode;
        if (!isAirMode) {
          toolbar.update(layoutInfo.toolbar(), styleInfo);
      ***REMOVED***

        popover.update(layoutInfo.popover(), styleInfo, isAirMode);
        handle.update(layoutInfo.handle(), styleInfo, isAirMode);
    ***REMOVED***, 0);
  ***REMOVED***;

    var hScroll = function (event) {
      var layoutInfo = makeLayoutInfo(event.currentTarget || event.target);
      //hide popover and handle when scrolled
      popover.hide(layoutInfo.popover());
      handle.hide(layoutInfo.handle());
  ***REMOVED***;

    /**
     * paste clipboard image
     *
     * @param {Event***REMOVED*** event
     */
    var hPasteClipboardImage = function (event) {
      var clipboardData = event.originalEvent.clipboardData;
      var layoutInfo = makeLayoutInfo(event.currentTarget || event.target);
      var $editable = layoutInfo.editable();

      if (!clipboardData || !clipboardData.items || !clipboardData.items.length) {
        var callbacks = $editable.data('callbacks');
        // only can run if it has onImageUpload method
        if (!callbacks.onImageUpload) {
          return;
      ***REMOVED***

        // save cursor
        editor.saveNode($editable);
        editor.saveRange($editable);

        $editable.html('');

        setTimeout(function () {
          var $img = $editable.find('img');
          var datauri = $img[0].src;

          var data = atob(datauri.split(',')[1]);
          var array = new Uint8Array(data.length);
          for (var i = 0; i < data.length; i++) {
            array[i] = data.charCodeAt(i);
        ***REMOVED***

          var blob = new Blob([array], { type : 'image/png'***REMOVED***);
          blob.name = 'clipboard.png';

          editor.restoreNode($editable);
          editor.restoreRange($editable);
          insertImages(layoutInfo, [blob]);

          editor.afterCommand($editable);
      ***REMOVED***, 0);

        return;
    ***REMOVED***

      var item = list.head(clipboardData.items);
      var isClipboardImage = item.kind === 'file' && item.type.indexOf('image/') !== -1;

      if (isClipboardImage) {
        insertImages(layoutInfo, [item.getAsFile()]);
    ***REMOVED***

      editor.afterCommand($editable);
  ***REMOVED***;

    /**
     * `mousedown` event handler on $handle
     *  - controlSizing: resize image
     *
     * @param {MouseEvent***REMOVED*** event
     */
    var hHandleMousedown = function (event) {
      if (dom.isControlSizing(event.target)) {
        event.preventDefault();
        event.stopPropagation();

        var layoutInfo = makeLayoutInfo(event.target),
            $handle = layoutInfo.handle(), $popover = layoutInfo.popover(),
            $editable = layoutInfo.editable(),
            $editor = layoutInfo.editor();

        var target = $handle.find('.note-control-selection').data('target'),
            $target = $(target), posStart = $target.offset(),
            scrollTop = $document.scrollTop();

        var isAirMode = $editor.data('options').airMode;

        $document.on('mousemove', function (event) {
          editor.resizeTo({
            x: event.clientX - posStart.left,
            y: event.clientY - (posStart.top - scrollTop)
        ***REMOVED***, $target, !event.shiftKey);

          handle.update($handle, {image: target***REMOVED***, isAirMode);
          popover.update($popover, {image: target***REMOVED***, isAirMode);
      ***REMOVED***).one('mouseup', function () {
          $document.off('mousemove');
          editor.afterCommand($editable);
      ***REMOVED***);

        if (!$target.data('ratio')) { // original ratio.
          $target.data('ratio', $target.height() / $target.width());
      ***REMOVED***
    ***REMOVED***
  ***REMOVED***;

    var hToolbarAndPopoverMousedown = function (event) {
      // prevent default event when insertTable (FF, Webkit)
      var $btn = $(event.target).closest('[data-event]');
      if ($btn.length) {
        event.preventDefault();
    ***REMOVED***
  ***REMOVED***;

    var hToolbarAndPopoverClick = function (event) {
      var $btn = $(event.target).closest('[data-event]');

      if ($btn.length) {
        var eventName = $btn.attr('data-event'),
            value = $btn.attr('data-value'),
            hide = $btn.attr('data-hide');

        var layoutInfo = makeLayoutInfo(event.target);

        event.preventDefault();

        // before command: detect control selection element($target)
        var $target;
        if ($.inArray(eventName, ['resize', 'floatMe', 'removeMedia', 'imageShape']) !== -1) {
          var $selection = layoutInfo.handle().find('.note-control-selection');
          $target = $($selection.data('target'));
      ***REMOVED***

        // If requested, hide the popover when the button is clicked.
        // Useful for things like showHelpDialog.
        if (hide) {
          $btn.parents('.popover').hide();
      ***REMOVED***

        if (editor[eventName]) { // on command
          var $editable = layoutInfo.editable();
          $editable.trigger('focus');
          editor[eventName]($editable, value, $target);
      ***REMOVED*** else if (commands[eventName]) {
          commands[eventName].call(this, layoutInfo);
      ***REMOVED*** else if ($.isFunction($.summernote.pluginEvents[eventName])) {
          $.summernote.pluginEvents[eventName](layoutInfo, value, $target);
      ***REMOVED***

        // after command
        if ($.inArray(eventName, ['backColor', 'foreColor']) !== -1) {
          var options = layoutInfo.editor().data('options', options);
          var module = options.airMode ? popover : toolbar;
          module.updateRecentColor(list.head($btn), eventName, value);
      ***REMOVED***

        hToolbarAndPopoverUpdate(event);
    ***REMOVED***
  ***REMOVED***;

    var EDITABLE_PADDING = 24;
    /**
     * `mousedown` event handler on statusbar
     *
     * @param {MouseEvent***REMOVED*** event
     */
    var hStatusbarMousedown = function (event) {
      event.preventDefault();
      event.stopPropagation();

      var $editable = makeLayoutInfo(event.target).editable();
      var nEditableTop = $editable.offset().top - $document.scrollTop();

      var layoutInfo = makeLayoutInfo(event.currentTarget || event.target);
      var options = layoutInfo.editor().data('options');

      $document.on('mousemove', function (event) {
        var nHeight = event.clientY - (nEditableTop + EDITABLE_PADDING);

        nHeight = (options.minHeight > 0) ? Math.max(nHeight, options.minHeight) : nHeight;
        nHeight = (options.maxHeight > 0) ? Math.min(nHeight, options.maxHeight) : nHeight;

        $editable.height(nHeight);
    ***REMOVED***).one('mouseup', function () {
        $document.off('mousemove');
    ***REMOVED***);
  ***REMOVED***;

    var PX_PER_EM = 18;
    var hDimensionPickerMove = function (event, options) {
      var $picker = $(event.target.parentNode); // target is mousecatcher
      var $dimensionDisplay = $picker.next();
      var $catcher = $picker.find('.note-dimension-picker-mousecatcher');
      var $highlighted = $picker.find('.note-dimension-picker-highlighted');
      var $unhighlighted = $picker.find('.note-dimension-picker-unhighlighted');

      var posOffset;
      // HTML5 with jQuery - e.offsetX is undefined in Firefox
      if (event.offsetX === undefined) {
        var posCatcher = $(event.target).offset();
        posOffset = {
          x: event.pageX - posCatcher.left,
          y: event.pageY - posCatcher.top
      ***REMOVED***;
    ***REMOVED*** else {
        posOffset = {
          x: event.offsetX,
          y: event.offsetY
      ***REMOVED***;
    ***REMOVED***

      var dim = {
        c: Math.ceil(posOffset.x / PX_PER_EM) || 1,
        r: Math.ceil(posOffset.y / PX_PER_EM) || 1
    ***REMOVED***;

      $highlighted.css({ width: dim.c + 'em', height: dim.r + 'em' ***REMOVED***);
      $catcher.attr('data-value', dim.c + 'x' + dim.r);

      if (3 < dim.c && dim.c < options.insertTableMaxSize.col) {
        $unhighlighted.css({ width: dim.c + 1 + 'em'***REMOVED***);
    ***REMOVED***

      if (3 < dim.r && dim.r < options.insertTableMaxSize.row) {
        $unhighlighted.css({ height: dim.r + 1 + 'em'***REMOVED***);
    ***REMOVED***

      $dimensionDisplay.html(dim.c + ' x ' + dim.r);
  ***REMOVED***;

    /**
     * Drag and Drop Events
     *
     * @param {Object***REMOVED*** layoutInfo - layout Informations
     * @param {Object***REMOVED*** options
     */
    var handleDragAndDropEvent = function (layoutInfo, options) {
      if (options.disableDragAndDrop) {
        // prevent default drop event
        $document.on('drop', function (e) {
          e.preventDefault();
      ***REMOVED***);
    ***REMOVED*** else {
        attachDragAndDropEvent(layoutInfo, options);
    ***REMOVED***
  ***REMOVED***;

    /**
     * attach Drag and Drop Events
     *
     * @param {Object***REMOVED*** layoutInfo - layout Informations
     * @param {Object***REMOVED*** options
     */
    var attachDragAndDropEvent = function (layoutInfo, options) {
      var collection = $(),
          $dropzone = layoutInfo.dropzone,
          $dropzoneMessage = layoutInfo.dropzone.find('.note-dropzone-message');

      // show dropzone on dragenter when dragging a object to document.
      $document.on('dragenter', function (e) {
        var isCodeview = layoutInfo.editor.hasClass('codeview');
        if (!isCodeview && !collection.length) {
          layoutInfo.editor.addClass('dragover');
          $dropzone.width(layoutInfo.editor.width());
          $dropzone.height(layoutInfo.editor.height());
          $dropzoneMessage.text(options.langInfo.image.dragImageHere);
      ***REMOVED***
        collection = collection.add(e.target);
    ***REMOVED***).on('dragleave', function (e) {
        collection = collection.not(e.target);
        if (!collection.length) {
          layoutInfo.editor.removeClass('dragover');
      ***REMOVED***
    ***REMOVED***).on('drop', function () {
        collection = $();
        layoutInfo.editor.removeClass('dragover');
    ***REMOVED***);

      // change dropzone's message on hover.
      $dropzone.on('dragenter', function () {
        $dropzone.addClass('hover');
        $dropzoneMessage.text(options.langInfo.image.dropImage);
    ***REMOVED***).on('dragleave', function () {
        $dropzone.removeClass('hover');
        $dropzoneMessage.text(options.langInfo.image.dragImageHere);
    ***REMOVED***);

      // attach dropImage
      $dropzone.on('drop', function (event) {
        event.preventDefault();

        var dataTransfer = event.originalEvent.dataTransfer;
        var text = dataTransfer.getData('text/plain');
        var layoutInfo = makeLayoutInfo(event.currentTarget || event.target);
        layoutInfo.editable().focus();
        if (dataTransfer && dataTransfer.files && dataTransfer.files.length) {
          insertImages(layoutInfo, dataTransfer.files);
      ***REMOVED*** else if (text) {
          editor.insertText(layoutInfo.editable(), text);
      ***REMOVED***
    ***REMOVED***).on('dragover', false); // prevent default dragover event
  ***REMOVED***;


    /**
     * bind KeyMap on keydown
     *
     * @param {Object***REMOVED*** layoutInfo
     * @param {Object***REMOVED*** keyMap
     */
    this.bindKeyMap = function (layoutInfo, keyMap) {
      var $editor = layoutInfo.editor;
      var $editable = layoutInfo.editable;

      layoutInfo = makeLayoutInfo($editable);

      $editable.on('keydown', function (event) {
        var aKey = [];

        // modifier
        if (event.metaKey) { aKey.push('CMD'); ***REMOVED***
        if (event.ctrlKey && !event.altKey) { aKey.push('CTRL'); ***REMOVED***
        if (event.shiftKey) { aKey.push('SHIFT'); ***REMOVED***

        // keycode
        var keyName = key.nameFromCode[event.keyCode];
        if (keyName) { aKey.push(keyName); ***REMOVED***

        var eventName = keyMap[aKey.join('+')];
        if (eventName) {
          event.preventDefault();

          if (editor[eventName]) {
            editor[eventName]($editable, $editor.data('options'));
        ***REMOVED*** else if (commands[eventName]) {
            commands[eventName].call(this, layoutInfo);
        ***REMOVED*** else if ($.summernote.plugins[eventName]) {
            var plugin = $.summernote.plugins[eventName];
            if ($.isFunction(plugin.event)) {
              plugin.event(event, editor, layoutInfo);
          ***REMOVED***
        ***REMOVED***
      ***REMOVED*** else if (key.isEdit(event.keyCode)) {
          editor.afterCommand($editable);
      ***REMOVED***
    ***REMOVED***);
  ***REMOVED***;

    /**
     * attach eventhandler
     *
     * @param {Object***REMOVED*** layoutInfo - layout Informations
     * @param {Object***REMOVED*** options - user options include custom event handlers
     * @param {Function***REMOVED*** options.enter - enter key handler
     */
    this.attach = function (layoutInfo, options) {
      // handlers for editable
      if (options.shortcuts) {
        this.bindKeyMap(layoutInfo, options.keyMap[agent.isMac ? 'mac' : 'pc']);
    ***REMOVED***
      layoutInfo.editable.on('mousedown', hMousedown);
      layoutInfo.editable.on('keyup mouseup', hToolbarAndPopoverUpdate);
      layoutInfo.editable.on('scroll', hScroll);
      layoutInfo.editable.on('paste', hPasteClipboardImage);

      // handler for handle and popover
      layoutInfo.handle.on('mousedown', hHandleMousedown);
      layoutInfo.popover.on('click', hToolbarAndPopoverClick);
      layoutInfo.popover.on('mousedown', hToolbarAndPopoverMousedown);

      // handlers for frame mode (toolbar, statusbar)
      if (!options.airMode) {
        // handler for drag and drop
        handleDragAndDropEvent(layoutInfo, options);

        // handler for toolbar
        layoutInfo.toolbar.on('click', hToolbarAndPopoverClick);
        layoutInfo.toolbar.on('mousedown', hToolbarAndPopoverMousedown);

        // handler for statusbar
        if (!options.disableResizeEditor) {
          layoutInfo.statusbar.on('mousedown', hStatusbarMousedown);
      ***REMOVED***
    ***REMOVED***

      // handler for table dimension
      var $catcherContainer = options.airMode ? layoutInfo.popover :
                                                layoutInfo.toolbar;
      var $catcher = $catcherContainer.find('.note-dimension-picker-mousecatcher');
      $catcher.css({
        width: options.insertTableMaxSize.col + 'em',
        height: options.insertTableMaxSize.row + 'em'
    ***REMOVED***).on('mousemove', function (event) {
        hDimensionPickerMove(event, options);
    ***REMOVED***);

      // save options on editor
      layoutInfo.editor.data('options', options);

      // ret styleWithCSS for backColor / foreColor clearing with 'inherit'.
      if (!agent.isMSIE) {
        // protect FF Error: NS_ERROR_FAILURE: Failure
        setTimeout(function () {
          document.execCommand('styleWithCSS', 0, options.styleWithSpan);
      ***REMOVED***, 0);
    ***REMOVED***

      // History
      var history = new History(layoutInfo.editable);
      layoutInfo.editable.data('NoteHistory', history);

      // basic event callbacks (lowercase)
      // enter, focus, blur, keyup, keydown
      if (options.onenter) {
        layoutInfo.editable.keypress(function (event) {
          if (event.keyCode === key.ENTER) { options.onenter(event); ***REMOVED***
      ***REMOVED***);
    ***REMOVED***

      if (options.onfocus) { layoutInfo.editable.focus(options.onfocus); ***REMOVED***
      if (options.onblur) { layoutInfo.editable.blur(options.onblur); ***REMOVED***
      if (options.onkeyup) { layoutInfo.editable.keyup(options.onkeyup); ***REMOVED***
      if (options.onkeydown) { layoutInfo.editable.keydown(options.onkeydown); ***REMOVED***
      if (options.onpaste) { layoutInfo.editable.on('paste', options.onpaste); ***REMOVED***

      // callbacks for advanced features (camel)
      if (options.onToolbarClick) { layoutInfo.toolbar.click(options.onToolbarClick); ***REMOVED***
      if (options.onChange) {
        var hChange = function () {
          editor.triggerOnChange(layoutInfo.editable);
      ***REMOVED***;

        if (agent.isMSIE) {
          var sDomEvents = 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted';
          layoutInfo.editable.on(sDomEvents, hChange);
      ***REMOVED*** else {
          layoutInfo.editable.on('input', hChange);
      ***REMOVED***
    ***REMOVED***

      // All editor status will be saved on editable with jquery's data
      // for support multiple editor with singleton object.
      layoutInfo.editable.data('callbacks', {
        onChange: options.onChange,
        onAutoSave: options.onAutoSave,
        onImageUpload: options.onImageUpload,
        onImageUploadError: options.onImageUploadError,
        onFileUpload: options.onFileUpload,
        onFileUploadError: options.onFileUpload
    ***REMOVED***);
  ***REMOVED***;

    this.detach = function (layoutInfo, options) {
      layoutInfo.editable.off();

      layoutInfo.popover.off();
      layoutInfo.handle.off();
      layoutInfo.dialog.off();

      if (!options.airMode) {
        layoutInfo.dropzone.off();
        layoutInfo.toolbar.off();
        layoutInfo.statusbar.off();
    ***REMOVED***
  ***REMOVED***;
***REMOVED***;

  /**
   * renderer
   *
   * rendering toolbar and editable
   */
  var Renderer = function () {

    /**
     * bootstrap button template
     *
     * @param {String***REMOVED*** label
     * @param {Object***REMOVED*** [options]
     * @param {String***REMOVED*** [options.event]
     * @param {String***REMOVED*** [options.value]
     * @param {String***REMOVED*** [options.title]
     * @param {String***REMOVED*** [options.dropdown]
     * @param {String***REMOVED*** [options.hide]
     */
    var tplButton = function (label, options) {
      var event = options.event;
      var value = options.value;
      var title = options.title;
      var className = options.className;
      var dropdown = options.dropdown;
      var hide = options.hide;

      return '<button type="button"' +
                 ' class="btn btn-default btn-sm btn-small' +
                   (className ? ' ' + className : '') +
                   (dropdown ? ' dropdown-toggle' : '') +
                 '"' +
                 (dropdown ? ' data-toggle="dropdown"' : '') +
                 (title ? ' title="' + title + '"' : '') +
                 (event ? ' data-event="' + event + '"' : '') +
                 (value ? ' data-value=\'' + value + '\'' : '') +
                 (hide ? ' data-hide=\'' + hide + '\'' : '') +
                 ' tabindex="-1">' +
               label +
               (dropdown ? ' <span class="caret"></span>' : '') +
             '</button>' +
             (dropdown || '');
  ***REMOVED***;

    /**
     * bootstrap icon button template
     *
     * @param {String***REMOVED*** iconClassName
     * @param {Object***REMOVED*** [options]
     * @param {String***REMOVED*** [options.event]
     * @param {String***REMOVED*** [options.value]
     * @param {String***REMOVED*** [options.title]
     * @param {String***REMOVED*** [options.dropdown]
     */
    var tplIconButton = function (iconClassName, options) {
      var label = '<i class="' + iconClassName + '"></i>';
      return tplButton(label, options);
  ***REMOVED***;

    /**
     * bootstrap popover template
     *
     * @param {String***REMOVED*** className
     * @param {String***REMOVED*** content
     */
    var tplPopover = function (className, content) {
      return '<div class="' + className + ' popover bottom in" style="display: none;">' +
               '<div class="arrow"></div>' +
               '<div class="popover-content">' +
                 content +
               '</div>' +
             '</div>';
  ***REMOVED***;

    /**
     * bootstrap dialog template
     *
     * @param {String***REMOVED*** className
     * @param {String***REMOVED*** [title]
     * @param {String***REMOVED*** body
     * @param {String***REMOVED*** [footer]
     */
    var tplDialog = function (className, title, body, footer) {
      return '<div class="' + className + ' modal" aria-hidden="false">' +
               '<div class="modal-dialog">' +
                 '<div class="modal-content">' +
                   (title ?
                   '<div class="modal-header">' +
                     '<button type="button" class="close" aria-hidden="true" tabindex="-1">&times;</button>' +
                     '<h4 class="modal-title">' + title + '</h4>' +
                   '</div>' : ''
                   ) +
                   '<form class="note-modal-form">' +
                     '<div class="modal-body">' + body + '</div>' +
                     (footer ?
                     '<div class="modal-footer">' + footer + '</div>' : ''
                     ) +
                   '</form>' +
                 '</div>' +
               '</div>' +
             '</div>';
  ***REMOVED***;

    var tplButtonInfo = {
      picture: function (lang) {
        return tplIconButton('fa fa-picture-o', {
          event: 'showImageDialog',
          title: lang.image.image,
          hide: true
      ***REMOVED***);
    ***REMOVED***,
      link: function (lang) {
        return tplIconButton('fa fa-link', {
          event: 'showLinkDialog',
          title: lang.link.link,
          hide: true
      ***REMOVED***);
    ***REMOVED***,
      table: function (lang) {
        var dropdown = '<ul class="note-table dropdown-menu">' +
                         '<div class="note-dimension-picker">' +
                           '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>' +
                           '<div class="note-dimension-picker-highlighted"></div>' +
                           '<div class="note-dimension-picker-unhighlighted"></div>' +
                         '</div>' +
                         '<div class="note-dimension-display"> 1 x 1 </div>' +
                       '</ul>';
        return tplIconButton('fa fa-table', {
          title: lang.table.table,
          dropdown: dropdown
      ***REMOVED***);
    ***REMOVED***,
      style: function (lang, options) {
        var items = options.styleTags.reduce(function (memo, v) {
          var label = lang.style[v === 'p' ? 'normal' : v];
          return memo + '<li><a data-event="formatBlock" href="#" data-value="' + v + '">' +
                   (
                     (v === 'p' || v === 'pre') ? label :
                     '<' + v + '>' + label + '</' + v + '>'
                   ) +
                 '</a></li>';
      ***REMOVED***, '');

        return tplIconButton('fa fa-magic', {
          title: lang.style.style,
          dropdown: '<ul class="dropdown-menu">' + items + '</ul>'
      ***REMOVED***);
    ***REMOVED***,
      fontname: function (lang, options) {
        var items = options.fontNames.reduce(function (memo, v) {
          if (!agent.isFontInstalled(v)) { return memo; ***REMOVED***
          return memo + '<li><a data-event="fontName" href="#" data-value="' + v + '">' +
                          '<i class="fa fa-check"></i> ' + v +
                        '</a></li>';
      ***REMOVED***, '');
        var label = '<span class="note-current-fontname">' +
                       options.defaultFontName +
                     '</span>';
        return tplButton(label, {
          title: lang.font.name,
          dropdown: '<ul class="dropdown-menu">' + items + '</ul>'
      ***REMOVED***);
    ***REMOVED***,
      color: function (lang) {
        var colorButtonLabel = '<i class="fa fa-font" style="color:black;background-color:yellow;"></i>';
        var colorButton = tplButton(colorButtonLabel, {
          className: 'note-recent-color',
          title: lang.color.recent,
          event: 'color',
          value: '{"backColor":"yellow"***REMOVED***'
      ***REMOVED***);

        var dropdown = '<ul class="dropdown-menu">' +
                         '<li>' +
                           '<div class="btn-group">' +
                             '<div class="note-palette-title">' + lang.color.background + '</div>' +
                             '<div class="note-color-reset" data-event="backColor"' +
                               ' data-value="inherit" title="' + lang.color.transparent + '">' +
                               lang.color.setTransparent +
                             '</div>' +
                             '<div class="note-color-palette" data-target-event="backColor"></div>' +
                           '</div>' +
                           '<div class="btn-group">' +
                             '<div class="note-palette-title">' + lang.color.foreground + '</div>' +
                             '<div class="note-color-reset" data-event="foreColor" data-value="inherit" title="' + lang.color.reset + '">' +
                               lang.color.resetToDefault +
                             '</div>' +
                             '<div class="note-color-palette" data-target-event="foreColor"></div>' +
                           '</div>' +
                         '</li>' +
                       '</ul>';

        var moreButton = tplButton('', {
          title: lang.color.more,
          dropdown: dropdown
      ***REMOVED***);

        return colorButton + moreButton;
    ***REMOVED***,
      bold: function (lang) {
        return tplIconButton('fa fa-bold', {
          event: 'bold',
          title: lang.font.bold
      ***REMOVED***);
    ***REMOVED***,
      italic: function (lang) {
        return tplIconButton('fa fa-italic', {
          event: 'italic',
          title: lang.font.italic
      ***REMOVED***);
    ***REMOVED***,
      underline: function (lang) {
        return tplIconButton('fa fa-underline', {
          event: 'underline',
          title: lang.font.underline
      ***REMOVED***);
    ***REMOVED***,
      clear: function (lang) {
        return tplIconButton('fa fa-eraser', {
          event: 'removeFormat',
          title: lang.font.clear
      ***REMOVED***);
    ***REMOVED***,
      ul: function (lang) {
        return tplIconButton('fa fa-list-ul', {
          event: 'insertUnorderedList',
          title: lang.lists.unordered
      ***REMOVED***);
    ***REMOVED***,
      ol: function (lang) {
        return tplIconButton('fa fa-list-ol', {
          event: 'insertOrderedList',
          title: lang.lists.ordered
      ***REMOVED***);
    ***REMOVED***,
      paragraph: function (lang) {
        var leftButton = tplIconButton('fa fa-align-left', {
          title: lang.paragraph.left,
          event: 'justifyLeft'
      ***REMOVED***);
        var centerButton = tplIconButton('fa fa-align-center', {
          title: lang.paragraph.center,
          event: 'justifyCenter'
      ***REMOVED***);
        var rightButton = tplIconButton('fa fa-align-right', {
          title: lang.paragraph.right,
          event: 'justifyRight'
      ***REMOVED***);
        var justifyButton = tplIconButton('fa fa-align-justify', {
          title: lang.paragraph.justify,
          event: 'justifyFull'
      ***REMOVED***);

        var outdentButton = tplIconButton('fa fa-outdent', {
          title: lang.paragraph.outdent,
          event: 'outdent'
      ***REMOVED***);
        var indentButton = tplIconButton('fa fa-indent', {
          title: lang.paragraph.indent,
          event: 'indent'
      ***REMOVED***);

        var dropdown = '<div class="dropdown-menu">' +
                         '<div class="note-align btn-group">' +
                           leftButton + centerButton + rightButton + justifyButton +
                         '</div>' +
                         '<div class="note-list btn-group">' +
                           indentButton + outdentButton +
                         '</div>' +
                       '</div>';

        return tplIconButton('fa fa-align-left', {
          title: lang.paragraph.paragraph,
          dropdown: dropdown
      ***REMOVED***);
    ***REMOVED***,
      height: function (lang, options) {
        var items = options.lineHeights.reduce(function (memo, v) {
          return memo + '<li><a data-event="lineHeight" href="#" data-value="' + parseFloat(v) + '">' +
                          '<i class="fa fa-check"></i> ' + v +
                        '</a></li>';
      ***REMOVED***, '');

        return tplIconButton('fa fa-text-height', {
          title: lang.font.height,
          dropdown: '<ul class="dropdown-menu">' + items + '</ul>'
      ***REMOVED***);

    ***REMOVED***,
      help: function (lang) {
        return tplIconButton('fa fa-question', {
          event: 'showHelpDialog',
          title: lang.options.help,
          hide: true
      ***REMOVED***);
    ***REMOVED***,
      fullscreen: function (lang) {
        return tplIconButton('fa fa-arrows-alt', {
          event: 'fullscreen',
          title: lang.options.fullscreen
      ***REMOVED***);
    ***REMOVED***,
      codeview: function (lang) {
        return tplIconButton('fa fa-code', {
          event: 'codeview',
          title: lang.options.codeview
      ***REMOVED***);
    ***REMOVED***,
      undo: function (lang) {
        return tplIconButton('fa fa-undo', {
          event: 'undo',
          title: lang.history.undo
      ***REMOVED***);
    ***REMOVED***,
      redo: function (lang) {
        return tplIconButton('fa fa-repeat', {
          event: 'redo',
          title: lang.history.redo
      ***REMOVED***);
    ***REMOVED***,
      hr: function (lang) {
        return tplIconButton('fa fa-minus', {
          event: 'insertHorizontalRule',
          title: lang.hr.insert
      ***REMOVED***);
    ***REMOVED***
  ***REMOVED***;

    var tplPopovers = function (lang, options) {
      var tplLinkPopover = function () {
        var linkButton = tplIconButton('fa fa-edit', {
          title: lang.link.edit,
          event: 'showLinkDialog',
          hide: true
      ***REMOVED***);
        var unlinkButton = tplIconButton('fa fa-unlink', {
          title: lang.link.unlink,
          event: 'unlink'
      ***REMOVED***);
        var content = '<a href="http://www.google.com" target="_blank">www.google.com</a>&nbsp;&nbsp;' +
                      '<div class="note-insert btn-group">' +
                        linkButton + unlinkButton +
                      '</div>';
        return tplPopover('note-link-popover', content);
    ***REMOVED***;

      var tplImagePopover = function () {
        var fullButton = tplButton('<span class="note-fontsize-10">100%</span>', {
          title: lang.image.resizeFull,
          event: 'resize',
          value: '1'
      ***REMOVED***);
        var halfButton = tplButton('<span class="note-fontsize-10">50%</span>', {
          title: lang.image.resizeHalf,
          event: 'resize',
          value: '0.5'
      ***REMOVED***);
        var quarterButton = tplButton('<span class="note-fontsize-10">25%</span>', {
          title: lang.image.resizeQuarter,
          event: 'resize',
          value: '0.25'
      ***REMOVED***);

        var leftButton = tplIconButton('fa fa-align-left', {
          title: lang.image.floatLeft,
          event: 'floatMe',
          value: 'left'
      ***REMOVED***);
        var rightButton = tplIconButton('fa fa-align-right', {
          title: lang.image.floatRight,
          event: 'floatMe',
          value: 'right'
      ***REMOVED***);
        var justifyButton = tplIconButton('fa fa-align-justify', {
          title: lang.image.floatNone,
          event: 'floatMe',
          value: 'none'
      ***REMOVED***);

        var roundedButton = tplIconButton('fa fa-square', {
          title: lang.image.shapeRounded,
          event: 'imageShape',
          value: 'img-rounded'
      ***REMOVED***);
        var circleButton = tplIconButton('fa fa-circle-o', {
          title: lang.image.shapeCircle,
          event: 'imageShape',
          value: 'img-circle'
      ***REMOVED***);
        var thumbnailButton = tplIconButton('fa fa-picture-o', {
          title: lang.image.shapeThumbnail,
          event: 'imageShape',
          value: 'img-thumbnail'
      ***REMOVED***);
        var noneButton = tplIconButton('fa fa-times', {
          title: lang.image.shapeNone,
          event: 'imageShape',
          value: ''
      ***REMOVED***);

        var removeButton = tplIconButton('fa fa-trash-o', {
          title: lang.image.remove,
          event: 'removeMedia',
          value: 'none'
      ***REMOVED***);

        var content = '<div class="btn-group">' + fullButton + halfButton + quarterButton + '</div>' +
                      '<div class="btn-group">' + leftButton + rightButton + justifyButton + '</div>' +
                      '<div class="btn-group">' + roundedButton + circleButton + thumbnailButton + noneButton + '</div>' +
                      '<div class="btn-group">' + removeButton + '</div>';
        return tplPopover('note-image-popover', content);
    ***REMOVED***;

      var tplAirPopover = function () {
        var content = '';
        for (var idx = 0, len = options.airPopover.length; idx < len; idx ++) {
          var group = options.airPopover[idx];
          content += '<div class="note-' + group[0] + ' btn-group">';
          for (var i = 0, lenGroup = group[1].length; i < lenGroup; i++) {
            content += tplButtonInfo[group[1][i]](lang, options);
        ***REMOVED***
          content += '</div>';
      ***REMOVED***

        return tplPopover('note-air-popover', content);
    ***REMOVED***;

      return '<div class="note-popover">' +
               tplLinkPopover() +
               tplImagePopover() +
               (options.airMode ?  tplAirPopover() : '') +
             '</div>';
  ***REMOVED***;

    var tplHandles = function () {
      return '<div class="note-handle">' +
               '<div class="note-control-selection">' +
                 '<div class="note-control-selection-bg"></div>' +
                 '<div class="note-control-holder note-control-nw"></div>' +
                 '<div class="note-control-holder note-control-ne"></div>' +
                 '<div class="note-control-holder note-control-sw"></div>' +
                 '<div class="note-control-sizing note-control-se"></div>' +
                 '<div class="note-control-selection-info"></div>' +
               '</div>' +
             '</div>';
  ***REMOVED***;

    /**
     * shortcut table template
     * @param {String***REMOVED*** title
     * @param {String***REMOVED*** body
     */
    var tplShortcut = function (title, keys) {
      var keyClass = 'note-shortcut-col col-xs-6 note-shortcut-';
      var body = [];

      for (var i in keys) {
        body.push(
          '<div class="' + keyClass + 'key">' + keys[i].kbd + '</div>' +
          '<div class="' + keyClass + 'name">' + keys[i].text + '</div>'
          );
    ***REMOVED***

      return '<div class="note-shortcut-row row"><div class="' + keyClass + 'title col-xs-offset-6">' + title + '</div></div>' +
             '<div class="note-shortcut-row row">' + body.join('</div><div class="note-shortcut-row row">') + '</div>';
  ***REMOVED***;

    var tplShortcutText = function (lang) {
      var keys = [
        { kbd: '⌘ + B', text: lang.font.bold ***REMOVED***,
        { kbd: '⌘ + I', text: lang.font.italic ***REMOVED***,
        { kbd: '⌘ + U', text: lang.font.underline ***REMOVED***,
        { kbd: '⌘ + \\', text: lang.font.clear ***REMOVED***
    ***REMOVED***;

      return tplShortcut(lang.shortcut.textFormatting, keys);
  ***REMOVED***;

    var tplShortcutAction = function (lang) {
      var keys = [
        { kbd: '⌘ + Z', text: lang.history.undo ***REMOVED***,
        { kbd: '⌘ + ⇧ + Z', text: lang.history.redo ***REMOVED***,
        { kbd: '⌘ + ]', text: lang.paragraph.indent ***REMOVED***,
        { kbd: '⌘ + [', text: lang.paragraph.outdent ***REMOVED***,
        { kbd: '⌘ + ENTER', text: lang.hr.insert ***REMOVED***
    ***REMOVED***;

      return tplShortcut(lang.shortcut.action, keys);
  ***REMOVED***;

    var tplShortcutPara = function (lang) {
      var keys = [
        { kbd: '⌘ + ⇧ + L', text: lang.paragraph.left ***REMOVED***,
        { kbd: '⌘ + ⇧ + E', text: lang.paragraph.center ***REMOVED***,
        { kbd: '⌘ + ⇧ + R', text: lang.paragraph.right ***REMOVED***,
        { kbd: '⌘ + ⇧ + J', text: lang.paragraph.justify ***REMOVED***,
        { kbd: '⌘ + ⇧ + NUM7', text: lang.lists.ordered ***REMOVED***,
        { kbd: '⌘ + ⇧ + NUM8', text: lang.lists.unordered ***REMOVED***
    ***REMOVED***;

      return tplShortcut(lang.shortcut.paragraphFormatting, keys);
  ***REMOVED***;

    var tplShortcutStyle = function (lang) {
      var keys = [
        { kbd: '⌘ + NUM0', text: lang.style.normal ***REMOVED***,
        { kbd: '⌘ + NUM1', text: lang.style.h1 ***REMOVED***,
        { kbd: '⌘ + NUM2', text: lang.style.h2 ***REMOVED***,
        { kbd: '⌘ + NUM3', text: lang.style.h3 ***REMOVED***,
        { kbd: '⌘ + NUM4', text: lang.style.h4 ***REMOVED***,
        { kbd: '⌘ + NUM5', text: lang.style.h5 ***REMOVED***,
        { kbd: '⌘ + NUM6', text: lang.style.h6 ***REMOVED***
    ***REMOVED***;

      return tplShortcut(lang.shortcut.documentStyle, keys);
  ***REMOVED***;

    var tplExtraShortcuts = function (lang, options) {
      var extraKeys = options.extraKeys;
      var keys = [];

      for (var key in extraKeys) {
        if (extraKeys.hasOwnProperty(key)) {
          keys.push({ kbd: key, text: extraKeys[key] ***REMOVED***);
      ***REMOVED***
    ***REMOVED***

      return tplShortcut(lang.shortcut.extraKeys, keys);
  ***REMOVED***;

    var tplShortcutTable = function (lang, options) {
      var colClass = 'class="note-shortcut note-shortcut-col col-sm-6 col-xs-12"';
      var template = [
        '<div ' + colClass + '>' + tplShortcutAction(lang, options) + '</div>' +
        '<div ' + colClass + '>' + tplShortcutText(lang, options) + '</div>',
        '<div ' + colClass + '>' + tplShortcutStyle(lang, options) + '</div>' +
        '<div ' + colClass + '>' + tplShortcutPara(lang, options) + '</div>'
    ***REMOVED***;

      if (options.extraKeys) {
        template.push('<div ' + colClass + '>' + tplExtraShortcuts(lang, options) + '</div>');
    ***REMOVED***

      return '<div class="note-shortcut-row row">' +
               template.join('</div><div class="note-shortcut-row row">') +
             '</div>';
  ***REMOVED***;

    var replaceMacKeys = function (sHtml) {
      return sHtml.replace(/⌘/g, 'Ctrl').replace(/⇧/g, 'Shift');
  ***REMOVED***;

    var tplDialogInfo = {
      image: function (lang, options) {
        var imageLimitation = '';
        if (options.maximumImageFileSize) {
          var unit = Math.floor(Math.log(options.maximumImageFileSize) / Math.log(1024));
          var readableSize = (options.maximumImageFileSize / Math.pow(1024, unit)).toFixed(2) * 1 +
                             ' ' + ' KMGTP'[unit] + 'B';
          imageLimitation = '<small>' + lang.image.maximumFileSize + ' : ' + readableSize + '</small>';
      ***REMOVED***

        var body = '<div class="form-group row-fluid note-group-select-from-files">' +
                     '<label>' + lang.image.selectFromFiles + '</label>' +
                     '<input class="note-image-input" type="file" name="files" accept="image/*" multiple="multiple" />' +
                     imageLimitation +
                   '</div>' +
                   '<div class="form-group row-fluid">' +
                     '<label>' + lang.image.url + '</label>' +
                     '<input class="note-image-url form-control span12" type="text" />' +
                   '</div>';
        var footer = '<button href="#" class="btn btn-primary note-image-btn disabled" disabled>' + lang.image.insert + '</button>';
        return tplDialog('note-image-dialog', lang.image.insert, body, footer);
    ***REMOVED***,

      link: function (lang, options) {
        var body = '<div class="form-group row-fluid">' +
                     '<label>' + lang.link.textToDisplay + '</label>' +
                     '<input class="note-link-text form-control span12" type="text" />' +
                   '</div>' +
                   '<div class="form-group row-fluid">' +
                     '<label>' + lang.link.url + '</label>' +
                     '<input class="note-link-url form-control span12" type="text" />' +
                   '</div>' +
                   (!options.disableLinkTarget ?
                     '<div class="checkbox">' +
                       '<label>' + '<input type="checkbox" checked> ' +
                         lang.link.openInNewWindow +
                       '</label>' +
                     '</div>' : ''
                   );
        var footer = '<button href="#" class="btn btn-primary note-link-btn disabled" disabled>' + lang.link.insert + '</button>';
        return tplDialog('note-link-dialog', lang.link.insert, body, footer);
    ***REMOVED***,

      help: function (lang, options) {
        var body = '<a class="modal-close pull-right" aria-hidden="true" tabindex="-1">' + lang.shortcut.close + '</a>' +
                   '<div class="title">' + lang.shortcut.shortcuts + '</div>' +
                   (agent.isMac ? tplShortcutTable(lang, options) : replaceMacKeys(tplShortcutTable(lang, options))) +
                   '<p class="text-center">' +
                     '<a href="//hackerwins.github.io/summernote/" target="_blank">Summernote 0.6.0</a> · ' +
                     '<a href="//github.com/HackerWins/summernote" target="_blank">Project</a> · ' +
                     '<a href="//github.com/HackerWins/summernote/issues" target="_blank">Issues</a>' +
                   '</p>';
        return tplDialog('note-help-dialog', '', body, '');
    ***REMOVED***
  ***REMOVED***;

    var tplDialogs = function (lang, options) {
      var dialogs = '';

      $.each(tplDialogInfo, function (idx, tplDialog) {
        dialogs += tplDialog(lang, options);
    ***REMOVED***);

      return '<div class="note-dialog">' + dialogs + '</div>';
  ***REMOVED***;

    var tplStatusbar = function () {
      return '<div class="note-resizebar">' +
               '<div class="note-icon-bar"></div>' +
               '<div class="note-icon-bar"></div>' +
               '<div class="note-icon-bar"></div>' +
             '</div>';
  ***REMOVED***;

    var representShortcut = function (str) {
      if (agent.isMac) {
        str = str.replace('CMD', '⌘').replace('SHIFT', '⇧');
    ***REMOVED***

      return str.replace('BACKSLASH', '\\')
                .replace('SLASH', '/')
                .replace('LEFTBRACKET', '[')
                .replace('RIGHTBRACKET', ']');
  ***REMOVED***;

    /**
     * createTooltip
     *
     * @param {jQuery***REMOVED*** $container
     * @param {Object***REMOVED*** keyMap
     * @param {String***REMOVED*** [sPlacement]
     */
    var createTooltip = function ($container, keyMap, sPlacement) {
      var invertedKeyMap = func.invertObject(keyMap);
      var $buttons = $container.find('button');

      $buttons.each(function (i, elBtn) {
        var $btn = $(elBtn);
        var sShortcut = invertedKeyMap[$btn.data('event')];
        if (sShortcut) {
          $btn.attr('title', function (i, v) {
            return v + ' (' + representShortcut(sShortcut) + ')';
        ***REMOVED***);
      ***REMOVED***
      // bootstrap tooltip on btn-group bug
      // https://github.com/twbs/bootstrap/issues/5687
    ***REMOVED***).tooltip({
        container: 'body',
        trigger: 'hover',
        placement: sPlacement || 'top'
    ***REMOVED***).on('click', function () {
        $(this).tooltip('hide');
    ***REMOVED***);
  ***REMOVED***;

    // createPalette
    var createPalette = function ($container, options) {
      var colorInfo = options.colors;
      $container.find('.note-color-palette').each(function () {
        var $palette = $(this), eventName = $palette.attr('data-target-event');
        var paletteContents = [];
        for (var row = 0, lenRow = colorInfo.length; row < lenRow; row++) {
          var colors = colorInfo[row];
          var buttons = [];
          for (var col = 0, lenCol = colors.length; col < lenCol; col++) {
            var color = colors[col];
            buttons.push(['<button type="button" class="note-color-btn" style="background-color:', color,
                           ';" data-event="', eventName,
                           '" data-value="', color,
                           '" title="', color,
                           '" data-toggle="button" tabindex="-1"></button>'].join(''));
        ***REMOVED***
          paletteContents.push('<div class="note-color-row">' + buttons.join('') + '</div>');
      ***REMOVED***
        $palette.html(paletteContents.join(''));
    ***REMOVED***);
  ***REMOVED***;

    /**
     * create summernote layout (air mode)
     *
     * @param {jQuery***REMOVED*** $holder
     * @param {Object***REMOVED*** options
     */
    this.createLayoutByAirMode = function ($holder, options) {
      var langInfo = options.langInfo;
      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
      var id = func.uniqueId();

      $holder.addClass('note-air-editor note-editable');
      $holder.attr({
        'id': 'note-editor-' + id,
        'contentEditable': true
    ***REMOVED***);

      var body = document.body;

      // create Popover
      var $popover = $(tplPopovers(langInfo, options));
      $popover.addClass('note-air-layout');
      $popover.attr('id', 'note-popover-' + id);
      $popover.appendTo(body);
      createTooltip($popover, keyMap);
      createPalette($popover, options);

      // create Handle
      var $handle = $(tplHandles());
      $handle.addClass('note-air-layout');
      $handle.attr('id', 'note-handle-' + id);
      $handle.appendTo(body);

      // create Dialog
      var $dialog = $(tplDialogs(langInfo, options));
      $dialog.addClass('note-air-layout');
      $dialog.attr('id', 'note-dialog-' + id);
      $dialog.find('button.close, a.modal-close').click(function () {
        $(this).closest('.modal').modal('hide');
    ***REMOVED***);
      $dialog.appendTo(body);
  ***REMOVED***;

    /**
     * create summernote layout (normal mode)
     *
     * @param {jQuery***REMOVED*** $holder
     * @param {Object***REMOVED*** options
     */
    this.createLayoutByFrame = function ($holder, options) {
      var langInfo = options.langInfo;

      //01. create Editor
      var $editor = $('<div class="note-editor"></div>');
      if (options.width) {
        $editor.width(options.width);
    ***REMOVED***

      //02. statusbar (resizebar)
      if (options.height > 0) {
        $('<div class="note-statusbar">' + (options.disableResizeEditor ? '' : tplStatusbar()) + '</div>').prependTo($editor);
    ***REMOVED***

      //03. create Editable
      var isContentEditable = !$holder.is(':disabled');
      var $editable = $('<div class="note-editable" contentEditable="' + isContentEditable + '"></div>')
          .prependTo($editor);
      if (options.height) {
        $editable.height(options.height);
    ***REMOVED***
      if (options.direction) {
        $editable.attr('dir', options.direction);
    ***REMOVED***
      if (options.placeholder) {
        $editable.attr('data-placeholder', options.placeholder);
    ***REMOVED***

      $editable.html(dom.html($holder));

      //031. create codable
      $('<textarea class="note-codable"></textarea>').prependTo($editor);

      //04. create Toolbar
      var toolbarHTML = '';
      for (var idx = 0, len = options.toolbar.length; idx < len; idx ++) {
        var groupName = options.toolbar[idx][0];
        var groupButtons = options.toolbar[idx][1];

        toolbarHTML += '<div class="note-' + groupName + ' btn-group">';
        for (var i = 0, btnLength = groupButtons.length; i < btnLength; i++) {
          var buttonInfo = tplButtonInfo[groupButtons[i]];
          // continue creating toolbar even if a button doesn't exist
          if (!$.isFunction(buttonInfo)) { continue; ***REMOVED***
          toolbarHTML += buttonInfo(langInfo, options);
      ***REMOVED***
        toolbarHTML += '</div>';
    ***REMOVED***

      toolbarHTML = '<div class="note-toolbar btn-toolbar">' + toolbarHTML + '</div>';

      var $toolbar = $(toolbarHTML).prependTo($editor);
      var keyMap = options.keyMap[agent.isMac ? 'mac' : 'pc'];
      createPalette($toolbar, options);
      createTooltip($toolbar, keyMap, 'bottom');

      //05. create Popover
      var $popover = $(tplPopovers(langInfo, options)).prependTo($editor);
      createPalette($popover, options);
      createTooltip($popover, keyMap);

      //06. handle(control selection, ...)
      $(tplHandles()).prependTo($editor);

      //07. create Dialog
      var $dialog = $(tplDialogs(langInfo, options)).prependTo($editor);
      $dialog.find('button.close, a.modal-close').click(function () {
        $(this).closest('.modal').modal('hide');
    ***REMOVED***);

      //08. create Dropzone
      $('<div class="note-dropzone"><div class="note-dropzone-message"></div></div>').prependTo($editor);

      //09. Editor/Holder switch
      $editor.insertAfter($holder);
      $holder.hide();
  ***REMOVED***;

    this.noteEditorFromHolder = function ($holder) {
      if ($holder.hasClass('note-air-editor')) {
        return $holder;
    ***REMOVED*** else if ($holder.next().hasClass('note-editor')) {
        return $holder.next();
    ***REMOVED*** else {
        return $();
    ***REMOVED***
  ***REMOVED***;

    /**
     * create summernote layout
     *
     * @param {jQuery***REMOVED*** $holder
     * @param {Object***REMOVED*** options
     */
    this.createLayout = function ($holder, options) {
      if (this.noteEditorFromHolder($holder).length) {
        return;
    ***REMOVED***

      if (options.airMode) {
        this.createLayoutByAirMode($holder, options);
    ***REMOVED*** else {
        this.createLayoutByFrame($holder, options);
    ***REMOVED***
  ***REMOVED***;

    /**
     * returns layoutInfo from holder
     *
     * @param {jQuery***REMOVED*** $holder - placeholder
     * @returns {Object***REMOVED***
     */
    this.layoutInfoFromHolder = function ($holder) {
      var $editor = this.noteEditorFromHolder($holder);
      if (!$editor.length) { return; ***REMOVED***

      var layoutInfo = dom.buildLayoutInfo($editor);
      // cache all properties.
      for (var key in layoutInfo) {
        if (layoutInfo.hasOwnProperty(key)) {
          layoutInfo[key] = layoutInfo[key].call();
      ***REMOVED***
    ***REMOVED***
      return layoutInfo;
  ***REMOVED***;

    /**
     * removeLayout
     *
     * @param {jQuery***REMOVED*** $holder - placeholder
     * @param {Object***REMOVED*** layoutInfo
     * @param {Object***REMOVED*** options
     *
     */
    this.removeLayout = function ($holder, layoutInfo, options) {
      if (options.airMode) {
        $holder.removeClass('note-air-editor note-editable')
               .removeAttr('id contentEditable');

        layoutInfo.popover.remove();
        layoutInfo.handle.remove();
        layoutInfo.dialog.remove();
    ***REMOVED*** else {
        $holder.html(layoutInfo.editable.html());

        layoutInfo.editor.remove();
        $holder.show();
    ***REMOVED***
  ***REMOVED***;

    this.getTemplate = function () {
      return {
        button: tplButton,
        iconButton: tplIconButton,
        dialog: tplDialog
    ***REMOVED***;
  ***REMOVED***;

    this.addButtonInfo = function (name, buttonInfo) {
      tplButtonInfo[name] = buttonInfo;
  ***REMOVED***;

    this.addDialogInfo = function (name, dialogInfo) {
      tplDialogInfo[name] = dialogInfo;
  ***REMOVED***;
***REMOVED***;

  // jQuery namespace for summernote
  $.summernote = $.summernote || {***REMOVED***;

  // extends default `settings`
  $.extend($.summernote, settings);

  var renderer = new Renderer();
  var eventHandler = new EventHandler();

  $.extend($.summernote, {
    renderer: renderer,
    eventHandler: eventHandler,
    core: {
      agent: agent,
      dom: dom,
      range: range
  ***REMOVED***,
    pluginEvents: {***REMOVED***
***REMOVED***);

  /**
   * addPlugin
   *
   * @param {Object***REMOVED*** plugin
   */
  $.summernote.addPlugin = function (plugin) {
    if (plugin.buttons) {
      $.each(plugin.buttons, function (name, button) {
        renderer.addButtonInfo(name, button);
    ***REMOVED***);
  ***REMOVED***

    if (plugin.dialogs) {
      $.each(plugin.dialogs, function (name, dialog) {
        renderer.addDialogInfo(name, dialog);
    ***REMOVED***);
  ***REMOVED***

    if (plugin.events) {
      $.each(plugin.events, function (name, event) {
        $.summernote.pluginEvents[name] = event;
    ***REMOVED***);
  ***REMOVED***

    if (plugin.langs) {
      $.each(plugin.langs, function (locale, lang) {
        if ($.summernote.lang[locale]) {
          $.extend($.summernote.lang[locale], lang);
      ***REMOVED***
    ***REMOVED***);
  ***REMOVED***

    if (plugin.options) {
      $.extend($.summernote.options, plugin.options);
  ***REMOVED***
***REMOVED***;

  /**
   * extend jquery fn
   */
  $.fn.extend({
    /**
     * initialize summernote
     *  - create editor layout and attach Mouse and keyboard events.
     *
     * @param {Object***REMOVED*** options
     * @returns {this***REMOVED***
     */
    summernote: function (options) {
      // extend default options
      options = $.extend({***REMOVED***, $.summernote.options, options);

      // Include langInfo in options for later use, e.g. for image drag-n-drop
      // Setup language info with en-US as default
      options.langInfo = $.extend(true, {***REMOVED***, $.summernote.lang['en-US'], $.summernote.lang[options.lang]);

      this.each(function (idx, holder) {
        var $holder = $(holder);

        // createLayout with options
        renderer.createLayout($holder, options);

        var info = renderer.layoutInfoFromHolder($holder);
        eventHandler.attach(info, options);

        // Textarea: auto filling the code before form submit.
        if (dom.isTextarea($holder[0])) {
          $holder.closest('form').submit(function () {
            var contents = $holder.code();
            $holder.val(contents);

            // callback on submit
            if (options.onsubmit) {
              options.onsubmit(contents);
          ***REMOVED***
        ***REMOVED***);
      ***REMOVED***
    ***REMOVED***);

      // focus on first editable element
      if (this.first().length && options.focus) {
        var info = renderer.layoutInfoFromHolder(this.first());
        info.editable.focus();
    ***REMOVED***

      // callback on init
      if (this.length && options.oninit) {
        options.oninit();
    ***REMOVED***

      return this;
  ***REMOVED***,
    //

    /**
     * get the HTML contents of note or set the HTML contents of note.
     *
     * @param {String***REMOVED*** [sHTML] - HTML contents(optional, set)
     * @returns {this|String***REMOVED*** - context(set) or HTML contents of note(get).
     */
    code: function (sHTML) {
      // get the HTML contents of note
      if (sHTML === undefined) {
        var $holder = this.first();
        if (!$holder.length) { return; ***REMOVED***
        var info = renderer.layoutInfoFromHolder($holder);
        if (!!(info && info.editable)) {
          var isCodeview = info.editor.hasClass('codeview');
          if (isCodeview && agent.hasCodeMirror) {
            info.codable.data('cmEditor').save();
        ***REMOVED***
          return isCodeview ? info.codable.val() : info.editable.html();
      ***REMOVED***
        return dom.isTextarea($holder[0]) ? $holder.val() : $holder.html();
    ***REMOVED***

      // set the HTML contents of note
      this.each(function (i, holder) {
        var info = renderer.layoutInfoFromHolder($(holder));
        if (info && info.editable) { info.editable.html(sHTML); ***REMOVED***
    ***REMOVED***);

      return this;
  ***REMOVED***,

    /**
     * destroy Editor Layout and detach Key and Mouse Event
     *
     * @returns {this***REMOVED***
     */
    destroy: function () {
      this.each(function (idx, holder) {
        var $holder = $(holder);

        var info = renderer.layoutInfoFromHolder($holder);
        if (!info || !info.editable) { return; ***REMOVED***

        var options = info.editor.data('options');

        eventHandler.detach(info, options);
        renderer.removeLayout($holder, info, options);
    ***REMOVED***);

      return this;
  ***REMOVED***
***REMOVED***);
***REMOVED***));