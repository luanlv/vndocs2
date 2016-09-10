(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['d3'], function (d3) {
            return (root.Rickshaw = factory(d3));
      ***REMOVED***);
  ***REMOVED*** else if (typeof exports === 'object') {
        module.exports = factory(require('d3'));
  ***REMOVED*** else {
        root.Rickshaw = factory(d3);
  ***REMOVED***
***REMOVED***(this, function (d3) {
/* jshint -W079 */ 

var Rickshaw = {

	namespace: function(namespace, obj) {

		var parts = namespace.split('.');

		var parent = Rickshaw;

		for(var i = 1, length = parts.length; i < length; i++) {
			var currentPart = parts[i];
			parent[currentPart] = parent[currentPart] || {***REMOVED***;
			parent = parent[currentPart];
		***REMOVED***
		return parent;
	***REMOVED***,

	keys: function(obj) {
		var keys = [];
		for (var key in obj) keys.push(key);
		return keys;
	***REMOVED***,

	extend: function(destination, source) {

		for (var property in source) {
			destination[property] = source[property];
		***REMOVED***
		return destination;
	***REMOVED***,

	clone: function(obj) {
		return JSON.parse(JSON.stringify(obj));
	***REMOVED***
***REMOVED***;
/* Adapted from https://github.com/Jakobo/PTClass */

/*
Copyright (c) 2005-2010 Sam Stephenson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
/* Based on Alex Arnell's inheritance implementation. */
/** section: Language
 * class Class
 *
 *  Manages Prototype's class-based OOP system.
 *
 *  Refer to Prototype's web site for a [tutorial on classes and
 *  inheritance](http://prototypejs.org/learn/class-inheritance).
**/
(function(globalContext) {
/* ------------------------------------ */
/* Import from object.js                */
/* ------------------------------------ */
var _toString = Object.prototype.toString,
    NULL_TYPE = 'Null',
    UNDEFINED_TYPE = 'Undefined',
    BOOLEAN_TYPE = 'Boolean',
    NUMBER_TYPE = 'Number',
    STRING_TYPE = 'String',
    OBJECT_TYPE = 'Object',
    FUNCTION_CLASS = '[object Function]';
function isFunction(object) {
  return _toString.call(object) === FUNCTION_CLASS;
***REMOVED***
function extend(destination, source) {
  for (var property in source) if (source.hasOwnProperty(property)) // modify protect primitive slaughter
    destination[property] = source[property];
  return destination;
***REMOVED***
function keys(object) {
  if (Type(object) !== OBJECT_TYPE) { throw new TypeError(); ***REMOVED***
  var results = [];
  for (var property in object) {
    if (object.hasOwnProperty(property)) {
      results.push(property);
  ***REMOVED***
***REMOVED***
  return results;
***REMOVED***
function Type(o) {
  switch(o) {
    case null: return NULL_TYPE;
    case (void 0): return UNDEFINED_TYPE;
***REMOVED***
  var type = typeof o;
  switch(type) {
    case 'boolean': return BOOLEAN_TYPE;
    case 'number':  return NUMBER_TYPE;
    case 'string':  return STRING_TYPE;
***REMOVED***
  return OBJECT_TYPE;
***REMOVED***
function isUndefined(object) {
  return typeof object === "undefined";
***REMOVED***
/* ------------------------------------ */
/* Import from Function.js              */
/* ------------------------------------ */
var slice = Array.prototype.slice;
function argumentNames(fn) {
  var names = fn.toString().match(/^[\s\(]*function[^(]*\(([^)]*)\)/)[1]
    .replace(/\/\/.*?[\r\n]|\/\*(?:.|[\r\n])*?\*\//g, '')
    .replace(/\s+/g, '').split(',');
  return names.length == 1 && !names[0] ? [] : names;
***REMOVED***
function wrap(fn, wrapper) {
  var __method = fn;
  return function() {
    var a = update([bind(__method, this)], arguments);
    return wrapper.apply(this, a);
***REMOVED***
***REMOVED***
function update(array, args) {
  var arrayLength = array.length, length = args.length;
  while (length--) array[arrayLength + length] = args[length];
  return array;
***REMOVED***
function merge(array, args) {
  array = slice.call(array, 0);
  return update(array, args);
***REMOVED***
function bind(fn, context) {
  if (arguments.length < 2 && isUndefined(arguments[0])) return this;
  var __method = fn, args = slice.call(arguments, 2);
  return function() {
    var a = merge(args, arguments);
    return __method.apply(context, a);
***REMOVED***
***REMOVED***

/* ------------------------------------ */
/* Import from Prototype.js             */
/* ------------------------------------ */
var emptyFunction = function(){***REMOVED***;

var Class = (function() {
  
  // Some versions of JScript fail to enumerate over properties, names of which 
  // correspond to non-enumerable properties in the prototype chain
  var IS_DONTENUM_BUGGY = (function(){
    for (var p in { toString: 1 ***REMOVED***) {
      // check actual property name, so that it works with augmented Object.prototype
      if (p === 'toString') return false;
  ***REMOVED***
    return true;
***REMOVED***)();
  
  function subclass() {***REMOVED***;
  function create() {
    var parent = null, properties = [].slice.apply(arguments);
    if (isFunction(properties[0]))
      parent = properties.shift();

    function klass() {
      this.initialize.apply(this, arguments);
  ***REMOVED***

    extend(klass, Class.Methods);
    klass.superclass = parent;
    klass.subclasses = [];

    if (parent) {
      subclass.prototype = parent.prototype;
      klass.prototype = new subclass;
      try { parent.subclasses.push(klass) ***REMOVED*** catch(e) {***REMOVED***
  ***REMOVED***

    for (var i = 0, length = properties.length; i < length; i++)
      klass.addMethods(properties[i]);

    if (!klass.prototype.initialize)
      klass.prototype.initialize = emptyFunction;

    klass.prototype.constructor = klass;
    return klass;
***REMOVED***

  function addMethods(source) {
    var ancestor   = this.superclass && this.superclass.prototype,
        properties = keys(source);

    // IE6 doesn't enumerate `toString` and `valueOf` (among other built-in `Object.prototype`) properties,
    // Force copy if they're not Object.prototype ones.
    // Do not copy other Object.prototype.* for performance reasons
    if (IS_DONTENUM_BUGGY) {
      if (source.toString != Object.prototype.toString)
        properties.push("toString");
      if (source.valueOf != Object.prototype.valueOf)
        properties.push("valueOf");
  ***REMOVED***

    for (var i = 0, length = properties.length; i < length; i++) {
      var property = properties[i], value = source[property];
      if (ancestor && isFunction(value) &&
          argumentNames(value)[0] == "$super") {
        var method = value;
        value = wrap((function(m) {
          return function() { return ancestor[m].apply(this, arguments); ***REMOVED***;
      ***REMOVED***)(property), method);

        value.valueOf = bind(method.valueOf, method);
        value.toString = bind(method.toString, method);
    ***REMOVED***
      this.prototype[property] = value;
  ***REMOVED***

    return this;
***REMOVED***

  return {
    create: create,
    Methods: {
      addMethods: addMethods
  ***REMOVED***
***REMOVED***;
***REMOVED***)();

if (globalContext.exports) {
  globalContext.exports.Class = Class;
***REMOVED***
else {
  globalContext.Class = Class;
***REMOVED***
***REMOVED***)(Rickshaw);
Rickshaw.namespace('Rickshaw.Compat.ClassList');

Rickshaw.Compat.ClassList = function() {

	/* adapted from http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

	if (typeof document !== "undefined" && !("classList" in document.createElement("a"))) {

	(function (view) {

	"use strict";

	var
		  classListProp = "classList"
		, protoProp = "prototype"
		, elemCtrProto = (view.HTMLElement || view.Element)[protoProp]
		, objCtr = Object
		, strTrim = String[protoProp].trim || function () {
			return this.replace(/^\s+|\s+$/g, "");
		***REMOVED***
		, arrIndexOf = Array[protoProp].indexOf || function (item) {
			var
				  i = 0
				, len = this.length
			;
			for (; i < len; i++) {
				if (i in this && this[i] === item) {
					return i;
				***REMOVED***
			***REMOVED***
			return -1;
		***REMOVED***
		// Vendors: please allow content code to instantiate DOMExceptions
		, DOMEx = function (type, message) {
			this.name = type;
			this.code = DOMException[type];
			this.message = message;
		***REMOVED***
		, checkTokenAndGetIndex = function (classList, token) {
			if (token === "") {
				throw new DOMEx(
					  "SYNTAX_ERR"
					, "An invalid or illegal string was specified"
				);
			***REMOVED***
			if (/\s/.test(token)) {
				throw new DOMEx(
					  "INVALID_CHARACTER_ERR"
					, "String contains an invalid character"
				);
			***REMOVED***
			return arrIndexOf.call(classList, token);
		***REMOVED***
		, ClassList = function (elem) {
			var
				  trimmedClasses = strTrim.call(elem.className)
				, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
				, i = 0
				, len = classes.length
			;
			for (; i < len; i++) {
				this.push(classes[i]);
			***REMOVED***
			this._updateClassName = function () {
				elem.className = this.toString();
			***REMOVED***;
		***REMOVED***
		, classListProto = ClassList[protoProp] = []
		, classListGetter = function () {
			return new ClassList(this);
		***REMOVED***
	;
	// Most DOMException implementations don't allow calling DOMException's toString()
	// on non-DOMExceptions. Error's toString() is sufficient here.
	DOMEx[protoProp] = Error[protoProp];
	classListProto.item = function (i) {
		return this[i] || null;
	***REMOVED***;
	classListProto.contains = function (token) {
		token += "";
		return checkTokenAndGetIndex(this, token) !== -1;
	***REMOVED***;
	classListProto.add = function (token) {
		token += "";
		if (checkTokenAndGetIndex(this, token) === -1) {
			this.push(token);
			this._updateClassName();
		***REMOVED***
	***REMOVED***;
	classListProto.remove = function (token) {
		token += "";
		var index = checkTokenAndGetIndex(this, token);
		if (index !== -1) {
			this.splice(index, 1);
			this._updateClassName();
		***REMOVED***
	***REMOVED***;
	classListProto.toggle = function (token) {
		token += "";
		if (checkTokenAndGetIndex(this, token) === -1) {
			this.add(token);
		***REMOVED*** else {
			this.remove(token);
		***REMOVED***
	***REMOVED***;
	classListProto.toString = function () {
		return this.join(" ");
	***REMOVED***;

	if (objCtr.defineProperty) {
		var classListPropDesc = {
			  get: classListGetter
			, enumerable: true
			, configurable: true
		***REMOVED***;
		try {
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		***REMOVED*** catch (ex) { // IE 8 doesn't support enumerable:true
			if (ex.number === -0x7FF5EC54) {
				classListPropDesc.enumerable = false;
				objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
			***REMOVED***
		***REMOVED***
	***REMOVED*** else if (objCtr[protoProp].__defineGetter__) {
		elemCtrProto.__defineGetter__(classListProp, classListGetter);
	***REMOVED***

	***REMOVED***(window));

	***REMOVED***
***REMOVED***;

if ( (typeof RICKSHAW_NO_COMPAT !== "undefined" && !RICKSHAW_NO_COMPAT) || typeof RICKSHAW_NO_COMPAT === "undefined") {
	new Rickshaw.Compat.ClassList();
***REMOVED***
Rickshaw.namespace('Rickshaw.Graph');

Rickshaw.Graph = function(args) {

	var self = this;

	this.initialize = function(args) {

		if (!args.element) throw "Rickshaw.Graph needs a reference to an element";
		if (args.element.nodeType !== 1) throw "Rickshaw.Graph element was defined but not an HTML element";

		this.element = args.element;
		this.series = args.series;
		this.window = {***REMOVED***;

		this.updateCallbacks = [];
		this.configureCallbacks = [];

		this.defaults = {
			interpolation: 'cardinal',
			offset: 'zero',
			min: undefined,
			max: undefined,
			preserve: false,
			xScale: undefined,
			yScale: undefined,
			stack: true
		***REMOVED***;

		this._loadRenderers();
		this.configure(args);
		this.validateSeries(args.series);

		this.series.active = function() { return self.series.filter( function(s) { return !s.disabled ***REMOVED*** ) ***REMOVED***;
		this.setSize({ width: args.width, height: args.height ***REMOVED***);
		this.element.classList.add('rickshaw_graph');

		this.vis = d3.select(this.element)
			.append("svg:svg")
			.attr('width', this.width)
			.attr('height', this.height);

		this.discoverRange();
	***REMOVED***;

	this._loadRenderers = function() {

		for (var name in Rickshaw.Graph.Renderer) {
			if (!name || !Rickshaw.Graph.Renderer.hasOwnProperty(name)) continue;
			var r = Rickshaw.Graph.Renderer[name];
			if (!r || !r.prototype || !r.prototype.render) continue;
			self.registerRenderer(new r( { graph: self ***REMOVED*** ));
		***REMOVED***
	***REMOVED***;

	this.validateSeries = function(series) {

		if (!Array.isArray(series) && !(series instanceof Rickshaw.Series)) {
			var seriesSignature = Object.prototype.toString.apply(series);
			throw "series is not an array: " + seriesSignature;
		***REMOVED***

		var pointsCount;

		series.forEach( function(s) {

			if (!(s instanceof Object)) {
				throw "series element is not an object: " + s;
			***REMOVED***
			if (!(s.data)) {
				throw "series has no data: " + JSON.stringify(s);
			***REMOVED***
			if (!Array.isArray(s.data)) {
				throw "series data is not an array: " + JSON.stringify(s.data);
			***REMOVED***
			
			if (s.data.length > 0) {
				var x = s.data[0].x;
				var y = s.data[0].y;

				if (typeof x != 'number' || ( typeof y != 'number' && y !== null ) ) {
					throw "x and y properties of points should be numbers instead of " +
						(typeof x) + " and " + (typeof y);
				***REMOVED***
			***REMOVED***

			if (s.data.length >= 3) {
				// probe to sanity check sort order
				if (s.data[2].x < s.data[1].x || s.data[1].x < s.data[0].x || s.data[s.data.length - 1].x < s.data[0].x) {
					throw "series data needs to be sorted on x values for series name: " + s.name;
				***REMOVED***
			***REMOVED***

		***REMOVED***, this );
	***REMOVED***;

	this.dataDomain = function() {

		var data = this.series.map( function(s) { return s.data ***REMOVED*** );

		var min = d3.min( data.map( function(d) { return d[0].x ***REMOVED*** ) );
		var max = d3.max( data.map( function(d) { return d[d.length - 1].x ***REMOVED*** ) );

		return [min, max];
	***REMOVED***;

	this.discoverRange = function() {

		var domain = this.renderer.domain();

		// this.*Scale is coming from the configuration dictionary
		// which may be referenced by the Graph creator, or shared
		// with other Graphs. We need to ensure we copy the scale
		// so that our mutations do not change the object given to us.
		// Hence the .copy()
		this.x = (this.xScale || d3.scale.linear()).copy().domain(domain.x).range([0, this.width]);
		this.y = (this.yScale || d3.scale.linear()).copy().domain(domain.y).range([this.height, 0]);

		this.x.magnitude = d3.scale.linear()
			.domain([domain.x[0] - domain.x[0], domain.x[1] - domain.x[0]])
			.range([0, this.width]);

		this.y.magnitude = d3.scale.linear()
			.domain([domain.y[0] - domain.y[0], domain.y[1] - domain.y[0]])
			.range([0, this.height]);
	***REMOVED***;

	this.render = function() {

		var stackedData = this.stackData();
		this.discoverRange();

		this.renderer.render();

		this.updateCallbacks.forEach( function(callback) {
			callback();
		***REMOVED*** );

	***REMOVED***;

	this.update = this.render;

	this.stackData = function() {

		var data = this.series.active()
			.map( function(d) { return d.data ***REMOVED*** )
			.map( function(d) { return d.filter( function(d) { return this._slice(d) ***REMOVED***, this ) ***REMOVED***, this);

		var preserve = this.preserve;
		if (!preserve) {
			this.series.forEach( function(series) {
				if (series.scale) {
					// data must be preserved when a scale is used
					preserve = true;
				***REMOVED***
			***REMOVED*** );
		***REMOVED***

		data = preserve ? Rickshaw.clone(data) : data;

		this.series.active().forEach( function(series, index) {
			if (series.scale) {
				// apply scale to each series
				var seriesData = data[index];
				if(seriesData) {
					seriesData.forEach( function(d) {
						d.y = series.scale(d.y);
					***REMOVED*** );
				***REMOVED***
			***REMOVED***
		***REMOVED*** );

		this.stackData.hooks.data.forEach( function(entry) {
			data = entry.f.apply(self, [data]);
		***REMOVED*** );

		var stackedData;

		if (!this.renderer.unstack) {

			this._validateStackable();

			var layout = d3.layout.stack();
			layout.offset( self.offset );
			stackedData = layout(data);
		***REMOVED***

		stackedData = stackedData || data;

		if (this.renderer.unstack) {
			stackedData.forEach( function(seriesData) {
				seriesData.forEach( function(d) {
					d.y0 = d.y0 === undefined ? 0 : d.y0;
				***REMOVED*** );
			***REMOVED*** );
		***REMOVED***

		this.stackData.hooks.after.forEach( function(entry) {
			stackedData = entry.f.apply(self, [data]);
		***REMOVED*** );

		var i = 0;
		this.series.forEach( function(series) {
			if (series.disabled) return;
			series.stack = stackedData[i++];
		***REMOVED*** );

		this.stackedData = stackedData;
		return stackedData;
	***REMOVED***;

	this._validateStackable = function() {

		var series = this.series;
		var pointsCount;

		series.forEach( function(s) {

			pointsCount = pointsCount || s.data.length;

			if (pointsCount && s.data.length != pointsCount) {
				throw "stacked series cannot have differing numbers of points: " +
					pointsCount + " vs " + s.data.length + "; see Rickshaw.Series.fill()";
			***REMOVED***

		***REMOVED***, this );
	***REMOVED***;

	this.stackData.hooks = { data: [], after: [] ***REMOVED***;

	this._slice = function(d) {

		if (this.window.xMin || this.window.xMax) {

			var isInRange = true;

			if (this.window.xMin && d.x < this.window.xMin) isInRange = false;
			if (this.window.xMax && d.x > this.window.xMax) isInRange = false;

			return isInRange;
		***REMOVED***

		return true;
	***REMOVED***;

	this.onUpdate = function(callback) {
		this.updateCallbacks.push(callback);
	***REMOVED***;

	this.onConfigure = function(callback) {
		this.configureCallbacks.push(callback);
	***REMOVED***;

	this.registerRenderer = function(renderer) {
		this._renderers = this._renderers || {***REMOVED***;
		this._renderers[renderer.name] = renderer;
	***REMOVED***;

	this.configure = function(args) {

		this.config = this.config || {***REMOVED***;

		if (args.width || args.height) {
			this.setSize(args);
		***REMOVED***

		Rickshaw.keys(this.defaults).forEach( function(k) {
			this.config[k] = k in args ? args[k]
				: k in this ? this[k]
				: this.defaults[k];
		***REMOVED***, this );

		Rickshaw.keys(this.config).forEach( function(k) {
			this[k] = this.config[k];
		***REMOVED***, this );

		if ('stack' in args) args.unstack = !args.stack;

		var renderer = args.renderer || (this.renderer && this.renderer.name) || 'stack';
		this.setRenderer(renderer, args);

		this.configureCallbacks.forEach( function(callback) {
			callback(args);
		***REMOVED*** );
	***REMOVED***;

	this.setRenderer = function(r, args) {
		if (typeof r == 'function') {
			this.renderer = new r( { graph: self ***REMOVED*** );
			this.registerRenderer(this.renderer);
		***REMOVED*** else {
			if (!this._renderers[r]) {
				throw "couldn't find renderer " + r;
			***REMOVED***
			this.renderer = this._renderers[r];
		***REMOVED***

		if (typeof args == 'object') {
			this.renderer.configure(args);
		***REMOVED***
	***REMOVED***;

	this.setSize = function(args) {

		args = args || {***REMOVED***;

		if (typeof window !== undefined) {
			var style = window.getComputedStyle(this.element, null);
			var elementWidth = parseInt(style.getPropertyValue('width'), 10);
			var elementHeight = parseInt(style.getPropertyValue('height'), 10);
		***REMOVED***

		this.width = args.width || elementWidth || 400;
		this.height = args.height || elementHeight || 250;

		this.vis && this.vis
			.attr('width', this.width)
			.attr('height', this.height);
	***REMOVED***;

	this.initialize(args);
***REMOVED***;
Rickshaw.namespace('Rickshaw.Fixtures.Color');

Rickshaw.Fixtures.Color = function() {

	this.schemes = {***REMOVED***;

	this.schemes.spectrum14 = [
		'#ecb796',
		'#dc8f70',
		'#b2a470',
		'#92875a',
		'#716c49',
		'#d2ed82',
		'#bbe468',
		'#a1d05d',
		'#e7cbe6',
		'#d8aad6',
		'#a888c2',
		'#9dc2d3',
		'#649eb9',
		'#387aa3'
	].reverse();

	this.schemes.spectrum2000 = [
		'#57306f',
		'#514c76',
		'#646583',
		'#738394',
		'#6b9c7d',
		'#84b665',
		'#a7ca50',
		'#bfe746',
		'#e2f528',
		'#fff726',
		'#ecdd00',
		'#d4b11d',
		'#de8800',
		'#de4800',
		'#c91515',
		'#9a0000',
		'#7b0429',
		'#580839',
		'#31082b'
	];

	this.schemes.spectrum2001 = [
		'#2f243f',
		'#3c2c55',
		'#4a3768',
		'#565270',
		'#6b6b7c',
		'#72957f',
		'#86ad6e',
		'#a1bc5e',
		'#b8d954',
		'#d3e04e',
		'#ccad2a',
		'#cc8412',
		'#c1521d',
		'#ad3821',
		'#8a1010',
		'#681717',
		'#531e1e',
		'#3d1818',
		'#320a1b'
	];

	this.schemes.classic9 = [
		'#423d4f',
		'#4a6860',
		'#848f39',
		'#a2b73c',
		'#ddcb53',
		'#c5a32f',
		'#7d5836',
		'#963b20',
		'#7c2626',
		'#491d37',
		'#2f254a'
	].reverse();

	this.schemes.httpStatus = {
		503: '#ea5029',
		502: '#d23f14',
		500: '#bf3613',
		410: '#efacea',
		409: '#e291dc',
		403: '#f457e8',
		408: '#e121d2',
		401: '#b92dae',
		405: '#f47ceb',
		404: '#a82a9f',
		400: '#b263c6',
		301: '#6fa024',
		302: '#87c32b',
		307: '#a0d84c',
		304: '#28b55c',
		200: '#1a4f74',
		206: '#27839f',
		201: '#52adc9',
		202: '#7c979f',
		203: '#a5b8bd',
		204: '#c1cdd1'
	***REMOVED***;

	this.schemes.colorwheel = [
		'#b5b6a9',
		'#858772',
		'#785f43',
		'#96557e',
		'#4682b4',
		'#65b9ac',
		'#73c03a',
		'#cb513a'
	].reverse();

	this.schemes.cool = [
		'#5e9d2f',
		'#73c03a',
		'#4682b4',
		'#7bc3b8',
		'#a9884e',
		'#c1b266',
		'#a47493',
		'#c09fb5'
	];

	this.schemes.munin = [
		'#00cc00',
		'#0066b3',
		'#ff8000',
		'#ffcc00',
		'#330099',
		'#990099',
		'#ccff00',
		'#ff0000',
		'#808080',
		'#008f00',
		'#00487d',
		'#b35a00',
		'#b38f00',
		'#6b006b',
		'#8fb300',
		'#b30000',
		'#bebebe',
		'#80ff80',
		'#80c9ff',
		'#ffc080',
		'#ffe680',
		'#aa80ff',
		'#ee00cc',
		'#ff8080',
		'#666600',
		'#ffbfff',
		'#00ffcc',
		'#cc6699',
		'#999900'
	];
***REMOVED***;
Rickshaw.namespace('Rickshaw.Fixtures.RandomData');

Rickshaw.Fixtures.RandomData = function(timeInterval) {

	var addData;
	timeInterval = timeInterval || 1;

	var lastRandomValue = 200;

	var timeBase = Math.floor(new Date().getTime() / 1000);

	this.addData = function(data) {

		var randomValue = Math.random() * 100 + 15 + lastRandomValue;
		var index = data[0].length;

		var counter = 1;

		data.forEach( function(series) {
			var randomVariance = Math.random() * 20;
			var v = randomValue / 25  + counter++ +
				(Math.cos((index * counter * 11) / 960) + 2) * 15 +
				(Math.cos(index / 7) + 2) * 7 +
				(Math.cos(index / 17) + 2) * 1;

			series.push( { x: (index * timeInterval) + timeBase, y: v + randomVariance ***REMOVED*** );
		***REMOVED*** );

		lastRandomValue = randomValue * 0.85;
	***REMOVED***;

	this.removeData = function(data) {
		data.forEach( function(series) {
			series.shift();
		***REMOVED*** );
		timeBase += timeInterval;
	***REMOVED***;
***REMOVED***;

Rickshaw.namespace('Rickshaw.Fixtures.Time');

Rickshaw.Fixtures.Time = function() {

	var self = this;

	this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	this.units = [
		{
			name: 'decade',
			seconds: 86400 * 365.25 * 10,
			formatter: function(d) { return (parseInt(d.getUTCFullYear() / 10, 10) * 10) ***REMOVED***
		***REMOVED***, {
			name: 'year',
			seconds: 86400 * 365.25,
			formatter: function(d) { return d.getUTCFullYear() ***REMOVED***
		***REMOVED***, {
			name: 'month',
			seconds: 86400 * 30.5,
			formatter: function(d) { return self.months[d.getUTCMonth()] ***REMOVED***
		***REMOVED***, {
			name: 'week',
			seconds: 86400 * 7,
			formatter: function(d) { return self.formatDate(d) ***REMOVED***
		***REMOVED***, {
			name: 'day',
			seconds: 86400,
			formatter: function(d) { return d.getUTCDate() ***REMOVED***
		***REMOVED***, {
			name: '6 hour',
			seconds: 3600 * 6,
			formatter: function(d) { return self.formatTime(d) ***REMOVED***
		***REMOVED***, {
			name: 'hour',
			seconds: 3600,
			formatter: function(d) { return self.formatTime(d) ***REMOVED***
		***REMOVED***, {
			name: '15 minute',
			seconds: 60 * 15,
			formatter: function(d) { return self.formatTime(d) ***REMOVED***
		***REMOVED***, {
			name: 'minute',
			seconds: 60,
			formatter: function(d) { return d.getUTCMinutes() ***REMOVED***
		***REMOVED***, {
			name: '15 second',
			seconds: 15,
			formatter: function(d) { return d.getUTCSeconds() + 's' ***REMOVED***
		***REMOVED***, {
			name: 'second',
			seconds: 1,
			formatter: function(d) { return d.getUTCSeconds() + 's' ***REMOVED***
		***REMOVED***, {
			name: 'decisecond',
			seconds: 1/10,
			formatter: function(d) { return d.getUTCMilliseconds() + 'ms' ***REMOVED***
		***REMOVED***, {
			name: 'centisecond',
			seconds: 1/100,
			formatter: function(d) { return d.getUTCMilliseconds() + 'ms' ***REMOVED***
		***REMOVED***
	];

	this.unit = function(unitName) {
		return this.units.filter( function(unit) { return unitName == unit.name ***REMOVED*** ).shift();
	***REMOVED***;

	this.formatDate = function(d) {
		return d3.time.format('%b %e')(d);
	***REMOVED***;

	this.formatTime = function(d) {
		return d.toUTCString().match(/(\d+:\d+):/)[1];
	***REMOVED***;

	this.ceil = function(time, unit) {

		var date, floor, year;

		if (unit.name == 'month') {

			date = new Date(time * 1000);

			floor = Date.UTC(date.getUTCFullYear(), date.getUTCMonth()) / 1000;
			if (floor == time) return time;

			year = date.getUTCFullYear();
			var month = date.getUTCMonth();

			if (month == 11) {
				month = 0;
				year = year + 1;
			***REMOVED*** else {
				month += 1;
			***REMOVED***

			return Date.UTC(year, month) / 1000;
		***REMOVED***

		if (unit.name == 'year') {

			date = new Date(time * 1000);

			floor = Date.UTC(date.getUTCFullYear(), 0) / 1000;
			if (floor == time) return time;

			year = date.getUTCFullYear() + 1;

			return Date.UTC(year, 0) / 1000;
		***REMOVED***

		return Math.ceil(time / unit.seconds) * unit.seconds;
	***REMOVED***;
***REMOVED***;
Rickshaw.namespace('Rickshaw.Fixtures.Time.Local');

Rickshaw.Fixtures.Time.Local = function() {

	var self = this;

	this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

	this.units = [
		{
			name: 'decade',
			seconds: 86400 * 365.25 * 10,
			formatter: function(d) { return (parseInt(d.getFullYear() / 10, 10) * 10) ***REMOVED***
		***REMOVED***, {
			name: 'year',
			seconds: 86400 * 365.25,
			formatter: function(d) { return d.getFullYear() ***REMOVED***
		***REMOVED***, {
			name: 'month',
			seconds: 86400 * 30.5,
			formatter: function(d) { return self.months[d.getMonth()] ***REMOVED***
		***REMOVED***, {
			name: 'week',
			seconds: 86400 * 7,
			formatter: function(d) { return self.formatDate(d) ***REMOVED***
		***REMOVED***, {
			name: 'day',
			seconds: 86400,
			formatter: function(d) { return d.getDate() ***REMOVED***
		***REMOVED***, {
			name: '6 hour',
			seconds: 3600 * 6,
			formatter: function(d) { return self.formatTime(d) ***REMOVED***
		***REMOVED***, {
			name: 'hour',
			seconds: 3600,
			formatter: function(d) { return self.formatTime(d) ***REMOVED***
		***REMOVED***, {
			name: '15 minute',
			seconds: 60 * 15,
			formatter: function(d) { return self.formatTime(d) ***REMOVED***
		***REMOVED***, {
			name: 'minute',
			seconds: 60,
			formatter: function(d) { return d.getMinutes() ***REMOVED***
		***REMOVED***, {
			name: '15 second',
			seconds: 15,
			formatter: function(d) { return d.getSeconds() + 's' ***REMOVED***
		***REMOVED***, {
			name: 'second',
			seconds: 1,
			formatter: function(d) { return d.getSeconds() + 's' ***REMOVED***
		***REMOVED***, {
			name: 'decisecond',
			seconds: 1/10,
			formatter: function(d) { return d.getMilliseconds() + 'ms' ***REMOVED***
		***REMOVED***, {
			name: 'centisecond',
			seconds: 1/100,
			formatter: function(d) { return d.getMilliseconds() + 'ms' ***REMOVED***
		***REMOVED***
	];

	this.unit = function(unitName) {
		return this.units.filter( function(unit) { return unitName == unit.name ***REMOVED*** ).shift();
	***REMOVED***;

	this.formatDate = function(d) {
		return d3.time.format('%b %e')(d);
	***REMOVED***;

	this.formatTime = function(d) {
		return d.toString().match(/(\d+:\d+):/)[1];
	***REMOVED***;

	this.ceil = function(time, unit) {

		var date, floor, year;

		if (unit.name == 'day') {

			var nearFuture = new Date((time + unit.seconds - 1) * 1000);

			var rounded = new Date(0);
			rounded.setMilliseconds(0);
			rounded.setSeconds(0);
			rounded.setMinutes(0);
			rounded.setHours(0);
			rounded.setDate(nearFuture.getDate());
			rounded.setMonth(nearFuture.getMonth());
			rounded.setFullYear(nearFuture.getFullYear());

			return rounded.getTime() / 1000;
		***REMOVED***

		if (unit.name == 'month') {

			date = new Date(time * 1000);

			floor = new Date(date.getFullYear(), date.getMonth()).getTime() / 1000;
			if (floor == time) return time;

			year = date.getFullYear();
			var month = date.getMonth();

			if (month == 11) {
				month = 0;
				year = year + 1;
			***REMOVED*** else {
				month += 1;
			***REMOVED***

			return new Date(year, month).getTime() / 1000;
		***REMOVED***

		if (unit.name == 'year') {

			date = new Date(time * 1000);

			floor = new Date(date.getUTCFullYear(), 0).getTime() / 1000;
			if (floor == time) return time;

			year = date.getFullYear() + 1;

			return new Date(year, 0).getTime() / 1000;
		***REMOVED***

		return Math.ceil(time / unit.seconds) * unit.seconds;
	***REMOVED***;
***REMOVED***;
Rickshaw.namespace('Rickshaw.Fixtures.Number');

Rickshaw.Fixtures.Number.formatKMBT = function(y) {
	var abs_y = Math.abs(y);
	if (abs_y >= 1000000000000)   { return y / 1000000000000 + "T" ***REMOVED***
	else if (abs_y >= 1000000000) { return y / 1000000000 + "B" ***REMOVED***
	else if (abs_y >= 1000000)    { return y / 1000000 + "M" ***REMOVED***
	else if (abs_y >= 1000)       { return y / 1000 + "K" ***REMOVED***
	else if (abs_y < 1 && y > 0)  { return y.toFixed(2) ***REMOVED***
	else if (abs_y === 0)         { return '' ***REMOVED***
	else                      { return y ***REMOVED***
***REMOVED***;

Rickshaw.Fixtures.Number.formatBase1024KMGTP = function(y) {
    var abs_y = Math.abs(y);
    if (abs_y >= 1125899906842624)  { return y / 1125899906842624 + "P" ***REMOVED***
    else if (abs_y >= 1099511627776){ return y / 1099511627776 + "T" ***REMOVED***
    else if (abs_y >= 1073741824)   { return y / 1073741824 + "G" ***REMOVED***
    else if (abs_y >= 1048576)      { return y / 1048576 + "M" ***REMOVED***
    else if (abs_y >= 1024)         { return y / 1024 + "K" ***REMOVED***
    else if (abs_y < 1 && y > 0)    { return y.toFixed(2) ***REMOVED***
    else if (abs_y === 0)           { return '' ***REMOVED***
    else                        { return y ***REMOVED***
***REMOVED***;
Rickshaw.namespace("Rickshaw.Color.Palette");

Rickshaw.Color.Palette = function(args) {

	var color = new Rickshaw.Fixtures.Color();

	args = args || {***REMOVED***;
	this.schemes = {***REMOVED***;

	this.scheme = color.schemes[args.scheme] || args.scheme || color.schemes.colorwheel;
	this.runningIndex = 0;
	this.generatorIndex = 0;

	if (args.interpolatedStopCount) {
		var schemeCount = this.scheme.length - 1;
		var i, j, scheme = [];
		for (i = 0; i < schemeCount; i++) {
			scheme.push(this.scheme[i]);
			var generator = d3.interpolateHsl(this.scheme[i], this.scheme[i + 1]);
			for (j = 1; j < args.interpolatedStopCount; j++) {
				scheme.push(generator((1 / args.interpolatedStopCount) * j));
			***REMOVED***
		***REMOVED***
		scheme.push(this.scheme[this.scheme.length - 1]);
		this.scheme = scheme;
	***REMOVED***
	this.rotateCount = this.scheme.length;

	this.color = function(key) {
		return this.scheme[key] || this.scheme[this.runningIndex++] || this.interpolateColor() || '#808080';
	***REMOVED***;

	this.interpolateColor = function() {
		if (!Array.isArray(this.scheme)) return;
		var color;
		if (this.generatorIndex == this.rotateCount * 2 - 1) {
			color = d3.interpolateHsl(this.scheme[this.generatorIndex], this.scheme[0])(0.5);
			this.generatorIndex = 0;
			this.rotateCount *= 2;
		***REMOVED*** else {
			color = d3.interpolateHsl(this.scheme[this.generatorIndex], this.scheme[this.generatorIndex + 1])(0.5);
			this.generatorIndex++;
		***REMOVED***
		this.scheme.push(color);
		return color;
	***REMOVED***;

***REMOVED***;
Rickshaw.namespace('Rickshaw.Graph.Ajax');

Rickshaw.Graph.Ajax = Rickshaw.Class.create( {

	initialize: function(args) {

		this.dataURL = args.dataURL;

		this.onData = args.onData || function(d) { return d ***REMOVED***;
		this.onComplete = args.onComplete || function() {***REMOVED***;
		this.onError = args.onError || function() {***REMOVED***;

		this.args = args; // pass through to Rickshaw.Graph

		this.request();
	***REMOVED***,

	request: function() {

		jQuery.ajax( {
			url: this.dataURL,
			dataType: 'json',
			success: this.success.bind(this),
			error: this.error.bind(this)
		***REMOVED*** );
	***REMOVED***,

	error: function() {

		console.log("error loading dataURL: " + this.dataURL);
		this.onError(this);
	***REMOVED***,

	success: function(data, status) {

		data = this.onData(data);
		this.args.series = this._splice({ data: data, series: this.args.series ***REMOVED***);

		this.graph = this.graph || new Rickshaw.Graph(this.args);
		this.graph.render();

		this.onComplete(this);
	***REMOVED***,

	_splice: function(args) {

		var data = args.data;
		var series = args.series;

		if (!args.series) return data;

		series.forEach( function(s) {

			var seriesKey = s.key || s.name;
			if (!seriesKey) throw "series needs a key or a name";

			data.forEach( function(d) {

				var dataKey = d.key || d.name;
				if (!dataKey) throw "data needs a key or a name";

				if (seriesKey == dataKey) {
					var properties = ['color', 'name', 'data'];
					properties.forEach( function(p) {
						if (d[p]) s[p] = d[p];
					***REMOVED*** );
				***REMOVED***
			***REMOVED*** );
		***REMOVED*** );

		return series;
	***REMOVED***
***REMOVED*** );

Rickshaw.namespace('Rickshaw.Graph.Annotate');

Rickshaw.Graph.Annotate = function(args) {

	var graph = this.graph = args.graph;
	this.elements = { timeline: args.element ***REMOVED***;
	
	var self = this;

	this.data = {***REMOVED***;

	this.elements.timeline.classList.add('rickshaw_annotation_timeline');

	this.add = function(time, content, end_time) {
		self.data[time] = self.data[time] || {'boxes': []***REMOVED***;
		self.data[time].boxes.push({content: content, end: end_time***REMOVED***);
	***REMOVED***;

	this.update = function() {

		Rickshaw.keys(self.data).forEach( function(time) {

			var annotation = self.data[time];
			var left = self.graph.x(time);

			if (left < 0 || left > self.graph.x.range()[1]) {
				if (annotation.element) {
					annotation.line.classList.add('offscreen');
					annotation.element.style.display = 'none';
				***REMOVED***

				annotation.boxes.forEach( function(box) {
					if ( box.rangeElement ) box.rangeElement.classList.add('offscreen');
				***REMOVED***);

				return;
			***REMOVED***

			if (!annotation.element) {
				var element = annotation.element = document.createElement('div');
				element.classList.add('annotation');
				this.elements.timeline.appendChild(element);
				element.addEventListener('click', function(e) {
					element.classList.toggle('active');
					annotation.line.classList.toggle('active');
					annotation.boxes.forEach( function(box) {
						if ( box.rangeElement ) box.rangeElement.classList.toggle('active');
					***REMOVED***);
				***REMOVED***, false);
					
			***REMOVED***

			annotation.element.style.left = left + 'px';
			annotation.element.style.display = 'block';

			annotation.boxes.forEach( function(box) {


				var element = box.element;

				if (!element) {
					element = box.element = document.createElement('div');
					element.classList.add('content');
					element.innerHTML = box.content;
					annotation.element.appendChild(element);

					annotation.line = document.createElement('div');
					annotation.line.classList.add('annotation_line');
					self.graph.element.appendChild(annotation.line);

					if ( box.end ) {
						box.rangeElement = document.createElement('div');
						box.rangeElement.classList.add('annotation_range');
						self.graph.element.appendChild(box.rangeElement);
					***REMOVED***

				***REMOVED***

				if ( box.end ) {

					var annotationRangeStart = left;
					var annotationRangeEnd   = Math.min( self.graph.x(box.end), self.graph.x.range()[1] );

					// annotation makes more sense at end
					if ( annotationRangeStart > annotationRangeEnd ) {
						annotationRangeEnd   = left;
						annotationRangeStart = Math.max( self.graph.x(box.end), self.graph.x.range()[0] );
					***REMOVED***

					var annotationRangeWidth = annotationRangeEnd - annotationRangeStart;

					box.rangeElement.style.left  = annotationRangeStart + 'px';
					box.rangeElement.style.width = annotationRangeWidth + 'px';

					box.rangeElement.classList.remove('offscreen');
				***REMOVED***

				annotation.line.classList.remove('offscreen');
				annotation.line.style.left = left + 'px';
			***REMOVED*** );
		***REMOVED***, this );
	***REMOVED***;

	this.graph.onUpdate( function() { self.update() ***REMOVED*** );
***REMOVED***;
Rickshaw.namespace('Rickshaw.Graph.Axis.Time');

Rickshaw.Graph.Axis.Time = function(args) {

	var self = this;

	this.graph = args.graph;
	this.elements = [];
	this.ticksTreatment = args.ticksTreatment || 'plain';
	this.fixedTimeUnit = args.timeUnit;

	var time = args.timeFixture || new Rickshaw.Fixtures.Time();

	this.appropriateTimeUnit = function() {

		var unit;
		var units = time.units;

		var domain = this.graph.x.domain();
		var rangeSeconds = domain[1] - domain[0];

		units.forEach( function(u) {
			if (Math.floor(rangeSeconds / u.seconds) >= 2) {
				unit = unit || u;
			***REMOVED***
		***REMOVED*** );

		return (unit || time.units[time.units.length - 1]);
	***REMOVED***;

	this.tickOffsets = function() {

		var domain = this.graph.x.domain();

		var unit = this.fixedTimeUnit || this.appropriateTimeUnit();
		var count = Math.ceil((domain[1] - domain[0]) / unit.seconds);

		var runningTick = domain[0];

		var offsets = [];

		for (var i = 0; i < count; i++) {

			var tickValue = time.ceil(runningTick, unit);
			runningTick = tickValue + unit.seconds / 2;

			offsets.push( { value: tickValue, unit: unit ***REMOVED*** );
		***REMOVED***

		return offsets;
	***REMOVED***;

	this.render = function() {

		this.elements.forEach( function(e) {
			e.parentNode.removeChild(e);
		***REMOVED*** );

		this.elements = [];

		var offsets = this.tickOffsets();

		offsets.forEach( function(o) {
			
			if (self.graph.x(o.value) > self.graph.x.range()[1]) return;
	
			var element = document.createElement('div');
			element.style.left = self.graph.x(o.value) + 'px';
			element.classList.add('x_tick');
			element.classList.add(self.ticksTreatment);

			var title = document.createElement('div');
			title.classList.add('title');
			title.innerHTML = o.unit.formatter(new Date(o.value * 1000));
			element.appendChild(title);

			self.graph.element.appendChild(element);
			self.elements.push(element);

		***REMOVED*** );
	***REMOVED***;

	this.graph.onUpdate( function() { self.render() ***REMOVED*** );
***REMOVED***;

Rickshaw.namespace('Rickshaw.Graph.Axis.X');

Rickshaw.Graph.Axis.X = function(args) {

	var self = this;
	var berthRate = 0.10;

	this.initialize = function(args) {

		this.graph = args.graph;
		this.orientation = args.orientation || 'top';

		this.pixelsPerTick = args.pixelsPerTick || 75;
		if (args.ticks) this.staticTicks = args.ticks;
		if (args.tickValues) this.tickValues = args.tickValues;

		this.tickSize = args.tickSize || 4;
		this.ticksTreatment = args.ticksTreatment || 'plain';

		if (args.element) {

			this.element = args.element;
			this._discoverSize(args.element, args);

			this.vis = d3.select(args.element)
				.append("svg:svg")
				.attr('height', this.height)
				.attr('width', this.width)
				.attr('class', 'rickshaw_graph x_axis_d3');

			this.element = this.vis[0][0];
			this.element.style.position = 'relative';

			this.setSize({ width: args.width, height: args.height ***REMOVED***);

		***REMOVED*** else {
			this.vis = this.graph.vis;
		***REMOVED***

		this.graph.onUpdate( function() { self.render() ***REMOVED*** );
	***REMOVED***;

	this.setSize = function(args) {

		args = args || {***REMOVED***;
		if (!this.element) return;

		this._discoverSize(this.element.parentNode, args);

		this.vis
			.attr('height', this.height)
			.attr('width', this.width * (1 + berthRate));

		var berth = Math.floor(this.width * berthRate / 2);
		this.element.style.left = -1 * berth + 'px';
	***REMOVED***;

	this.render = function() {

		if (this._renderWidth !== undefined && this.graph.width !== this._renderWidth) this.setSize({ auto: true ***REMOVED***);

		var axis = d3.svg.axis().scale(this.graph.x).orient(this.orientation);
		axis.tickFormat( args.tickFormat || function(x) { return x ***REMOVED*** );
		if (this.tickValues) axis.tickValues(this.tickValues);

		this.ticks = this.staticTicks || Math.floor(this.graph.width / this.pixelsPerTick);

		var berth = Math.floor(this.width * berthRate / 2) || 0;
		var transform;

		if (this.orientation == 'top') {
			var yOffset = this.height || this.graph.height;
			transform = 'translate(' + berth + ',' + yOffset + ')';
		***REMOVED*** else {
			transform = 'translate(' + berth + ', 0)';
		***REMOVED***

		if (this.element) {
			this.vis.selectAll('*').remove();
		***REMOVED***

		this.vis
			.append("svg:g")
			.attr("class", ["x_ticks_d3", this.ticksTreatment].join(" "))
			.attr("transform", transform)
			.call(axis.ticks(this.ticks).tickSubdivide(0).tickSize(this.tickSize));

		var gridSize = (this.orientation == 'bottom' ? 1 : -1) * this.graph.height;

		this.graph.vis
			.append("svg:g")
			.attr("class", "x_grid_d3")
			.call(axis.ticks(this.ticks).tickSubdivide(0).tickSize(gridSize))
			.selectAll('text')
			.each(function() { this.parentNode.setAttribute('data-x-value', this.textContent) ***REMOVED***);

		this._renderHeight = this.graph.height;
	***REMOVED***;

	this._discoverSize = function(element, args) {

		if (typeof window !== 'undefined') {

			var style = window.getComputedStyle(element, null);
			var elementHeight = parseInt(style.getPropertyValue('height'), 10);

			if (!args.auto) {
				var elementWidth = parseInt(style.getPropertyValue('width'), 10);
			***REMOVED***
		***REMOVED***

		this.width = (args.width || elementWidth || this.graph.width) * (1 + berthRate);
		this.height = args.height || elementHeight || 40;
	***REMOVED***;

	this.initialize(args);
***REMOVED***;

Rickshaw.namespace('Rickshaw.Graph.Axis.Y');

Rickshaw.Graph.Axis.Y = Rickshaw.Class.create( {

	initialize: function(args) {

		this.graph = args.graph;
		this.orientation = args.orientation || 'right';

		this.pixelsPerTick = args.pixelsPerTick || 75;
		if (args.ticks) this.staticTicks = args.ticks;
		if (args.tickValues) this.tickValues = args.tickValues;

		this.tickSize = args.tickSize || 4;
		this.ticksTreatment = args.ticksTreatment || 'plain';

		this.tickFormat = args.tickFormat || function(y) { return y ***REMOVED***;

		this.berthRate = 0.10;

		if (args.element) {

			this.element = args.element;
			this.vis = d3.select(args.element)
				.append("svg:svg")
				.attr('class', 'rickshaw_graph y_axis');

			this.element = this.vis[0][0];
			this.element.style.position = 'relative';

			this.setSize({ width: args.width, height: args.height ***REMOVED***);

		***REMOVED*** else {
			this.vis = this.graph.vis;
		***REMOVED***

		var self = this;
		this.graph.onUpdate( function() { self.render() ***REMOVED*** );
	***REMOVED***,

	setSize: function(args) {

		args = args || {***REMOVED***;

		if (!this.element) return;

		if (typeof window !== 'undefined') {

			var style = window.getComputedStyle(this.element.parentNode, null);
			var elementWidth = parseInt(style.getPropertyValue('width'), 10);

			if (!args.auto) {
				var elementHeight = parseInt(style.getPropertyValue('height'), 10);
			***REMOVED***
		***REMOVED***

		this.width = args.width || elementWidth || this.graph.width * this.berthRate;
		this.height = args.height || elementHeight || this.graph.height;

		this.vis
			.attr('width', this.width)
			.attr('height', this.height * (1 + this.berthRate));

		var berth = this.height * this.berthRate;

		if (this.orientation == 'left') {
			this.element.style.top = -1 * berth + 'px';
		***REMOVED***
	***REMOVED***,

	render: function() {

		if (this._renderHeight !== undefined && this.graph.height !== this._renderHeight) this.setSize({ auto: true ***REMOVED***);

		this.ticks = this.staticTicks || Math.floor(this.graph.height / this.pixelsPerTick);

		var axis = this._drawAxis(this.graph.y);

		this._drawGrid(axis);

		this._renderHeight = this.graph.height;
	***REMOVED***,

	_drawAxis: function(scale) {
		var axis = d3.svg.axis().scale(scale).orient(this.orientation);
		axis.tickFormat(this.tickFormat);
		if (this.tickValues) axis.tickValues(this.tickValues);

		if (this.orientation == 'left') {
			var berth = this.height * this.berthRate;
			var transform = 'translate(' + this.width + ', ' + berth + ')';
		***REMOVED***

		if (this.element) {
			this.vis.selectAll('*').remove();
		***REMOVED***

		this.vis
			.append("svg:g")
			.attr("class", ["y_ticks", this.ticksTreatment].join(" "))
			.attr("transform", transform)
			.call(axis.ticks(this.ticks).tickSubdivide(0).tickSize(this.tickSize));

		return axis;
	***REMOVED***,

	_drawGrid: function(axis) {
		var gridSize = (this.orientation == 'right' ? 1 : -1) * this.graph.width;

		this.graph.vis
			.append("svg:g")
			.attr("class", "y_grid")
			.call(axis.ticks(this.ticks).tickSubdivide(0).tickSize(gridSize))
			.selectAll('text')
			.each(function() { this.parentNode.setAttribute('data-y-value', this.textContent) ***REMOVED***);
	***REMOVED***
***REMOVED*** );
Rickshaw.namespace('Rickshaw.Graph.Axis.Y.Scaled');

Rickshaw.Graph.Axis.Y.Scaled = Rickshaw.Class.create( Rickshaw.Graph.Axis.Y, {

  initialize: function($super, args) {

    if (typeof(args.scale) === 'undefined') {
      throw new Error('Scaled requires scale');
  ***REMOVED***

    this.scale = args.scale;

    if (typeof(args.grid) === 'undefined') {
      this.grid = true;
  ***REMOVED*** else {
      this.grid = args.grid;
  ***REMOVED***

    $super(args);

***REMOVED***,

  _drawAxis: function($super, scale) {
    // Adjust scale's domain to compensate for adjustments to the
    // renderer's domain (e.g. padding).
    var domain = this.scale.domain();
    var renderDomain = this.graph.renderer.domain().y;

    var extents = [
      Math.min.apply(Math, domain),
      Math.max.apply(Math, domain)];

    // A mapping from the ideal render domain [0, 1] to the extent
    // of the original scale's domain.  This is used to calculate
    // the extents of the adjusted domain.
    var extentMap = d3.scale.linear().domain([0, 1]).range(extents);

    var adjExtents = [
      extentMap(renderDomain[0]),
      extentMap(renderDomain[1])];

    // A mapping from the original domain to the adjusted domain.
    var adjustment = d3.scale.linear().domain(extents).range(adjExtents);

    // Make a copy of the custom scale, apply the adjusted domain, and
    // copy the range to match the graph's scale.
    var adjustedScale = this.scale.copy()
      .domain(domain.map(adjustment))
      .range(scale.range());

    return $super(adjustedScale);
***REMOVED***,

  _drawGrid: function($super, axis) {
    if (this.grid) {
      // only draw the axis if the grid option is true
      $super(axis);
  ***REMOVED***
***REMOVED***
***REMOVED*** );
Rickshaw.namespace('Rickshaw.Graph.Behavior.Series.Highlight');

Rickshaw.Graph.Behavior.Series.Highlight = function(args) {

	this.graph = args.graph;
	this.legend = args.legend;

	var self = this;

	var colorSafe = {***REMOVED***;
	var activeLine = null;

	var disabledColor = args.disabledColor || function(seriesColor) {
		return d3.interpolateRgb(seriesColor, d3.rgb('#d8d8d8'))(0.8).toString();
	***REMOVED***;

	this.addHighlightEvents = function (l) {

		l.element.addEventListener( 'mouseover', function(e) {

			if (activeLine) return;
			else activeLine = l;

			self.legend.lines.forEach( function(line) {

				if (l === line) {

					// if we're not in a stacked renderer bring active line to the top
					if (self.graph.renderer.unstack && (line.series.renderer ? line.series.renderer.unstack : true)) {

						var seriesIndex = self.graph.series.indexOf(line.series);
						line.originalIndex = seriesIndex;

						var series = self.graph.series.splice(seriesIndex, 1)[0];
						self.graph.series.push(series);
					***REMOVED***
					return;
				***REMOVED***

				colorSafe[line.series.name] = colorSafe[line.series.name] || line.series.color;
				line.series.color = disabledColor(line.series.color);

			***REMOVED*** );

			self.graph.update();

		***REMOVED***, false );

		l.element.addEventListener( 'mouseout', function(e) {

			if (!activeLine) return;
			else activeLine = null;

			self.legend.lines.forEach( function(line) {

				// return reordered series to its original place
				if (l === line && line.hasOwnProperty('originalIndex')) {

					var series = self.graph.series.pop();
					self.graph.series.splice(line.originalIndex, 0, series);
					delete line.originalIndex;
				***REMOVED***

				if (colorSafe[line.series.name]) {
					line.series.color = colorSafe[line.series.name];
				***REMOVED***
			***REMOVED*** );

			self.graph.update();

		***REMOVED***, false );
	***REMOVED***;

	if (this.legend) {
		this.legend.lines.forEach( function(l) {
			self.addHighlightEvents(l);
		***REMOVED*** );
	***REMOVED***

***REMOVED***;
Rickshaw.namespace('Rickshaw.Graph.Behavior.Series.Order');

Rickshaw.Graph.Behavior.Series.Order = function(args) {

	this.graph = args.graph;
	this.legend = args.legend;

	var self = this;

	if (typeof window.jQuery == 'undefined') {
		throw "couldn't find jQuery at window.jQuery";
	***REMOVED***

	if (typeof window.jQuery.ui == 'undefined') {
		throw "couldn't find jQuery UI at window.jQuery.ui";
	***REMOVED***

	jQuery(function() {
		jQuery(self.legend.list).sortable( {
			containment: 'parent',
			tolerance: 'pointer',
			update: function( event, ui ) {
				var series = [];
				jQuery(self.legend.list).find('li').each( function(index, item) {
					if (!item.series) return;
					series.push(item.series);
				***REMOVED*** );

				for (var i = self.graph.series.length - 1; i >= 0; i--) {
					self.graph.series[i] = series.shift();
				***REMOVED***

				self.graph.update();
			***REMOVED***
		***REMOVED*** );
		jQuery(self.legend.list).disableSelection();
	***REMOVED***);

	//hack to make jquery-ui sortable behave
	this.graph.onUpdate( function() { 
		var h = window.getComputedStyle(self.legend.element).height;
		self.legend.element.style.height = h;
	***REMOVED*** );
***REMOVED***;
Rickshaw.namespace('Rickshaw.Graph.Behavior.Series.Toggle');

Rickshaw.Graph.Behavior.Series.Toggle = function(args) {

	this.graph = args.graph;
	this.legend = args.legend;

	var self = this;

	this.addAnchor = function(line) {

		var anchor = document.createElement('a');
		anchor.innerHTML = '&#10004;';
		anchor.classList.add('action');
		line.element.insertBefore(anchor, line.element.firstChild);

		anchor.onclick = function(e) {
			if (line.series.disabled) {
				line.series.enable();
				line.element.classList.remove('disabled');
			***REMOVED*** else { 
				if (this.graph.series.filter(function(s) { return !s.disabled ***REMOVED***).length <= 1) return;
				line.series.disable();
				line.element.classList.add('disabled');
			***REMOVED***

		***REMOVED***.bind(this);
		
                var label = line.element.getElementsByTagName('span')[0];
                label.onclick = function(e){

                        var disableAllOtherLines = line.series.disabled;
                        if ( ! disableAllOtherLines ) {
                                for ( var i = 0; i < self.legend.lines.length; i++ ) {
                                        var l = self.legend.lines[i];
                                        if ( line.series === l.series ) {
                                                // noop
                                      ***REMOVED*** else if ( l.series.disabled ) {
                                                // noop
                                      ***REMOVED*** else {
                                                disableAllOtherLines = true;
                                                break;
                                      ***REMOVED***
                              ***REMOVED***
                      ***REMOVED***

                        // show all or none
                        if ( disableAllOtherLines ) {

                                // these must happen first or else we try ( and probably fail ) to make a no line graph
                                line.series.enable();
                                line.element.classList.remove('disabled');

                                self.legend.lines.forEach(function(l){
                                        if ( line.series === l.series ) {
                                                // noop
                                      ***REMOVED*** else {
                                                l.series.disable();
                                                l.element.classList.add('disabled');
                                      ***REMOVED***
                              ***REMOVED***);

                      ***REMOVED*** else {

                                self.legend.lines.forEach(function(l){
                                        l.series.enable();
                                        l.element.classList.remove('disabled');
                              ***REMOVED***);

                      ***REMOVED***

              ***REMOVED***;

	***REMOVED***;

	if (this.legend) {

		var $ = jQuery;
		if (typeof $ != 'undefined' && $(this.legend.list).sortable) {

			$(this.legend.list).sortable( {
				start: function(event, ui) {
					ui.item.bind('no.onclick',
						function(event) {
							event.preventDefault();
						***REMOVED***
					);
				***REMOVED***,
				stop: function(event, ui) {
					setTimeout(function(){
						ui.item.unbind('no.onclick');
					***REMOVED***, 250);
				***REMOVED***
			***REMOVED***);
		***REMOVED***

		this.legend.lines.forEach( function(l) {
			self.addAnchor(l);
		***REMOVED*** );
	***REMOVED***

	this._addBehavior = function() {

		this.graph.series.forEach( function(s) {
			
			s.disable = function() {

				if (self.graph.series.length <= 1) {
					throw('only one series left');
				***REMOVED***
				
				s.disabled = true;
				self.graph.update();
			***REMOVED***;

			s.enable = function() {
				s.disabled = false;
				self.graph.update();
			***REMOVED***;
		***REMOVED*** );
	***REMOVED***;
	this._addBehavior();

	this.updateBehaviour = function () { this._addBehavior() ***REMOVED***;

***REMOVED***;
Rickshaw.namespace('Rickshaw.Graph.HoverDetail');

Rickshaw.Graph.HoverDetail = Rickshaw.Class.create({

	initialize: function(args) {

		var graph = this.graph = args.graph;

		this.xFormatter = args.xFormatter || function(x) {
			return new Date( x * 1000 ).toUTCString();
		***REMOVED***;

		this.yFormatter = args.yFormatter || function(y) {
			return y === null ? y : y.toFixed(2);
		***REMOVED***;

		var element = this.element = document.createElement('div');
		element.className = 'detail';

		this.visible = true;
		graph.element.appendChild(element);

		this.lastEvent = null;
		this._addListeners();

		this.onShow = args.onShow;
		this.onHide = args.onHide;
		this.onRender = args.onRender;

		this.formatter = args.formatter || this.formatter;

	***REMOVED***,

	formatter: function(series, x, y, formattedX, formattedY, d) {
		return series.name + ':&nbsp;' + formattedY;
	***REMOVED***,

	update: function(e) {

		e = e || this.lastEvent;
		if (!e) return;
		this.lastEvent = e;

		if (!e.target.nodeName.match(/^(path|svg|rect|circle)$/)) return;

		var graph = this.graph;

		var eventX = e.offsetX || e.layerX;
		var eventY = e.offsetY || e.layerY;

		var j = 0;
		var points = [];
		var nearestPoint;

		this.graph.series.active().forEach( function(series) {

			var data = this.graph.stackedData[j++];

			if (!data.length)
				return;

			var domainX = graph.x.invert(eventX);

			var domainIndexScale = d3.scale.linear()
				.domain([data[0].x, data.slice(-1)[0].x])
				.range([0, data.length - 1]);

			var approximateIndex = Math.round(domainIndexScale(domainX));
			if (approximateIndex == data.length - 1) approximateIndex--;

			var dataIndex = Math.min(approximateIndex || 0, data.length - 1);

			for (var i = approximateIndex; i < data.length - 1;) {

				if (!data[i] || !data[i + 1]) break;

				if (data[i].x <= domainX && data[i + 1].x > domainX) {
					dataIndex = Math.abs(domainX - data[i].x) < Math.abs(domainX - data[i + 1].x) ? i : i + 1;
					break;
				***REMOVED***

				if (data[i + 1].x <= domainX) { i++ ***REMOVED*** else { i-- ***REMOVED***
			***REMOVED***

			if (dataIndex < 0) dataIndex = 0;
			var value = data[dataIndex];

			var distance = Math.sqrt(
				Math.pow(Math.abs(graph.x(value.x) - eventX), 2) +
				Math.pow(Math.abs(graph.y(value.y + value.y0) - eventY), 2)
			);

			var xFormatter = series.xFormatter || this.xFormatter;
			var yFormatter = series.yFormatter || this.yFormatter;

			var point = {
				formattedXValue: xFormatter(value.x),
				formattedYValue: yFormatter(series.scale ? series.scale.invert(value.y) : value.y),
				series: series,
				value: value,
				distance: distance,
				order: j,
				name: series.name
			***REMOVED***;

			if (!nearestPoint || distance < nearestPoint.distance) {
				nearestPoint = point;
			***REMOVED***

			points.push(point);

		***REMOVED***, this );

		if (!nearestPoint)
			return;

		nearestPoint.active = true;

		var domainX = nearestPoint.value.x;
		var formattedXValue = nearestPoint.formattedXValue;

		this.element.innerHTML = '';
		this.element.style.left = graph.x(domainX) + 'px';

		this.visible && this.render( {
			points: points,
			detail: points, // for backwards compatibility
			mouseX: eventX,
			mouseY: eventY,
			formattedXValue: formattedXValue,
			domainX: domainX
		***REMOVED*** );
	***REMOVED***,

	hide: function() {
		this.visible = false;
		this.element.classList.add('inactive');

		if (typeof this.onHide == 'function') {
			this.onHide();
		***REMOVED***
	***REMOVED***,

	show: function() {
		this.visible = true;
		this.element.classList.remove('inactive');

		if (typeof this.onShow == 'function') {
			this.onShow();
		***REMOVED***
	***REMOVED***,

	render: function(args) {

		var graph = this.graph;
		var points = args.points;
		var point = points.filter( function(p) { return p.active ***REMOVED*** ).shift();

		if (point.value.y === null) return;

		var formattedXValue = point.formattedXValue;
		var formattedYValue = point.formattedYValue;

		this.element.innerHTML = '';
		this.element.style.left = graph.x(point.value.x) + 'px';

		var xLabel = document.createElement('div');

		xLabel.className = 'x_label';
		xLabel.innerHTML = formattedXValue;
		this.element.appendChild(xLabel);

		var item = document.createElement('div');

		item.className = 'item';

		// invert the scale if this series displays using a scale
		var series = point.series;
		var actualY = series.scale ? series.scale.invert(point.value.y) : point.value.y;

		item.innerHTML = this.formatter(series, point.value.x, actualY, formattedXValue, formattedYValue, point);
		item.style.top = this.graph.y(point.value.y0 + point.value.y) + 'px';

		this.element.appendChild(item);

		var dot = document.createElement('div');

		dot.className = 'dot';
		dot.style.top = item.style.top;
		dot.style.borderColor = series.color;

		this.element.appendChild(dot);

		if (point.active) {
			item.classList.add('active');
			dot.classList.add('active');
		***REMOVED***

		// Assume left alignment until the element has been displayed and
		// bounding box calculations are possible.
		var alignables = [xLabel, item];
		alignables.forEach(function(el) {
			el.classList.add('left');
		***REMOVED***);

		this.show();

		// If left-alignment results in any error, try right-alignment.
		var leftAlignError = this._calcLayoutError(alignables);
		if (leftAlignError > 0) {
			alignables.forEach(function(el) {
				el.classList.remove('left');
				el.classList.add('right');
			***REMOVED***);

			// If right-alignment is worse than left alignment, switch back.
			var rightAlignError = this._calcLayoutError(alignables);
			if (rightAlignError > leftAlignError) {
				alignables.forEach(function(el) {
					el.classList.remove('right');
					el.classList.add('left');
				***REMOVED***);
			***REMOVED***
		***REMOVED***

		if (typeof this.onRender == 'function') {
			this.onRender(args);
		***REMOVED***
	***REMOVED***,

	_calcLayoutError: function(alignables) {
		// Layout error is calculated as the number of linear pixels by which
		// an alignable extends past the left or right edge of the parent.
		var parentRect = this.element.parentNode.getBoundingClientRect();

		var error = 0;
		var alignRight = alignables.forEach(function(el) {
			var rect = el.getBoundingClientRect();
			if (!rect.width) {
				return;
			***REMOVED***

			if (rect.right > parentRect.right) {
				error += rect.right - parentRect.right;
			***REMOVED***

			if (rect.left < parentRect.left) {
				error += parentRect.left - rect.left;
			***REMOVED***
		***REMOVED***);
		return error;
	***REMOVED***,

	_addListeners: function() {

		this.graph.element.addEventListener(
			'mousemove',
			function(e) {
				this.visible = true;
				this.update(e);
			***REMOVED***.bind(this),
			false
		);

		this.graph.onUpdate( function() { this.update() ***REMOVED***.bind(this) );

		this.graph.element.addEventListener(
			'mouseout',
			function(e) {
				if (e.relatedTarget && !(e.relatedTarget.compareDocumentPosition(this.graph.element) & Node.DOCUMENT_POSITION_CONTAINS)) {
					this.hide();
				***REMOVED***
			***REMOVED***.bind(this),
			false
		);
	***REMOVED***
***REMOVED***);
Rickshaw.namespace('Rickshaw.Graph.JSONP');

Rickshaw.Graph.JSONP = Rickshaw.Class.create( Rickshaw.Graph.Ajax, {

	request: function() {

		jQuery.ajax( {
			url: this.dataURL,
			dataType: 'jsonp',
			success: this.success.bind(this),
			error: this.error.bind(this)
		***REMOVED*** );
	***REMOVED***
***REMOVED*** );
Rickshaw.namespace('Rickshaw.Graph.Legend');

Rickshaw.Graph.Legend = Rickshaw.Class.create( {

	className: 'rickshaw_legend',

	initialize: function(args) {
		this.element = args.element;
		this.graph = args.graph;
		this.naturalOrder = args.naturalOrder;

		this.element.classList.add(this.className);

		this.list = document.createElement('ul');
		this.element.appendChild(this.list);

		this.render();

		// we could bind this.render.bind(this) here
		// but triggering the re-render would lose the added
		// behavior of the series toggle
		this.graph.onUpdate( function() {***REMOVED*** );
	***REMOVED***,

	render: function() {
		var self = this;

		while ( this.list.firstChild ) {
			this.list.removeChild( this.list.firstChild );
		***REMOVED***
		this.lines = [];

		var series = this.graph.series
			.map( function(s) { return s ***REMOVED*** );

		if (!this.naturalOrder) {
			series = series.reverse();
		***REMOVED***

		series.forEach( function(s) {
			self.addLine(s);
		***REMOVED*** );


	***REMOVED***,

	addLine: function (series) {
		var line = document.createElement('li');
		line.className = 'line';
		if (series.disabled) {
			line.className += ' disabled';
		***REMOVED***
		if (series.className) {
			d3.select(line).classed(series.className, true);
		***REMOVED***
		var swatch = document.createElement('div');
		swatch.className = 'swatch';
		swatch.style.backgroundColor = series.color;

		line.appendChild(swatch);

		var label = document.createElement('span');
		label.className = 'label';
		label.innerHTML = series.name;

		line.appendChild(label);
		this.list.appendChild(line);

		line.series = series;

		if (series.noLegend) {
			line.style.display = 'none';
		***REMOVED***

		var _line = { element: line, series: series ***REMOVED***;
		if (this.shelving) {
			this.shelving.addAnchor(_line);
			this.shelving.updateBehaviour();
		***REMOVED***
		if (this.highlighter) {
			this.highlighter.addHighlightEvents(_line);
		***REMOVED***
		this.lines.push(_line);
		return line;
	***REMOVED***
***REMOVED*** );

Rickshaw.namespace('Rickshaw.Graph.RangeSlider');

Rickshaw.Graph.RangeSlider = Rickshaw.Class.create({

	initialize: function(args) {

		var element = this.element = args.element;
		var graph = this.graph = args.graph;

		this.slideCallbacks = [];

		this.build();

		graph.onUpdate( function() { this.update() ***REMOVED***.bind(this) );
	***REMOVED***,

	build: function() {

		var element = this.element;
		var graph = this.graph;
		var $ = jQuery;

		var domain = graph.dataDomain();
		var self = this;

		$( function() {
			$(element).slider( {
				range: true,
				min: domain[0],
				max: domain[1],
				values: [ 
					domain[0],
					domain[1]
				],
				slide: function( event, ui ) {

					if (ui.values[1] <= ui.values[0]) return;

					graph.window.xMin = ui.values[0];
					graph.window.xMax = ui.values[1];
					graph.update();

					var domain = graph.dataDomain();

					// if we're at an extreme, stick there
					if (domain[0] == ui.values[0]) {
						graph.window.xMin = undefined;
					***REMOVED***

					if (domain[1] == ui.values[1]) {
						graph.window.xMax = undefined;
					***REMOVED***

					self.slideCallbacks.forEach(function(callback) {
						callback(graph, graph.window.xMin, graph.window.xMax);
					***REMOVED***);
				***REMOVED***
			***REMOVED*** );
		***REMOVED*** );

		$(element)[0].style.width = graph.width + 'px';

	***REMOVED***,

	update: function() {

		var element = this.element;
		var graph = this.graph;
		var $ = jQuery;

		var values = $(element).slider('option', 'values');

		var domain = graph.dataDomain();

		$(element).slider('option', 'min', domain[0]);
		$(element).slider('option', 'max', domain[1]);

		if (graph.window.xMin == null) {
			values[0] = domain[0];
		***REMOVED***
		if (graph.window.xMax == null) {
			values[1] = domain[1];
		***REMOVED***

		$(element).slider('option', 'values', values);
	***REMOVED***,

	onSlide: function(callback) {
		this.slideCallbacks.push(callback);
	***REMOVED***
***REMOVED***);

Rickshaw.namespace('Rickshaw.Graph.RangeSlider.Preview');

Rickshaw.Graph.RangeSlider.Preview = Rickshaw.Class.create({

	initialize: function(args) {

		if (!args.element) throw "Rickshaw.Graph.RangeSlider.Preview needs a reference to an element";
		if (!args.graph && !args.graphs) throw "Rickshaw.Graph.RangeSlider.Preview needs a reference to an graph or an array of graphs";

		this.element = args.element;
		this.element.style.position = 'relative';

		this.graphs = args.graph ? [ args.graph ] : args.graphs;

		this.defaults = {
			height: 75,
			width: 400,
			gripperColor: undefined,
			frameTopThickness: 3,
			frameHandleThickness: 10,
			frameColor: "#d4d4d4",
			frameOpacity: 1,
			minimumFrameWidth: 0,
			heightRatio: 0.2
		***REMOVED***;

		this.heightRatio = args.heightRatio || this.defaults.heightRatio;
		this.defaults.gripperColor = d3.rgb(this.defaults.frameColor).darker().toString(); 

		this.configureCallbacks = [];
		this.slideCallbacks = [];

		this.previews = [];

		if (!args.width) this.widthFromGraph = true;
		if (!args.height) this.heightFromGraph = true;

		if (this.widthFromGraph || this.heightFromGraph) {
			this.graphs[0].onConfigure(function () {
				this.configure(args); this.render();
			***REMOVED***.bind(this));
		***REMOVED***

		args.width = args.width || this.graphs[0].width || this.defaults.width;
		args.height = args.height || this.graphs[0].height * this.heightRatio || this.defaults.height;

		this.configure(args);
		this.render();
	***REMOVED***,

	onSlide: function(callback) {
		this.slideCallbacks.push(callback);
	***REMOVED***,

	onConfigure: function(callback) {
		this.configureCallbacks.push(callback);
	***REMOVED***,

	configure: function(args) {

		this.config = this.config || {***REMOVED***;

		this.configureCallbacks.forEach(function(callback) {
			callback(args);
		***REMOVED***);

		Rickshaw.keys(this.defaults).forEach(function(k) {
			this.config[k] = k in args ? args[k]
				: k in this.config ? this.config[k]
				: this.defaults[k];
		***REMOVED***, this);

		if ('width' in args || 'height' in args) {

			if (this.widthFromGraph) {
				this.config.width = this.graphs[0].width;
			***REMOVED***

			if (this.heightFromGraph) {
				this.config.height = this.graphs[0].height * this.heightRatio;
				this.previewHeight = this.config.height;
			***REMOVED***

			this.previews.forEach(function(preview) {

				var height = this.previewHeight / this.graphs.length - this.config.frameTopThickness * 2;
				var width = this.config.width - this.config.frameHandleThickness * 2;
				preview.setSize({ width: width, height: height ***REMOVED***);

				if (this.svg) {
					var svgHeight = height + this.config.frameHandleThickness * 2;
					var svgWidth = width + this.config.frameHandleThickness * 2;
					this.svg.style("width", svgWidth + "px");
					this.svg.style("height", svgHeight + "px");
				***REMOVED***
			***REMOVED***, this);
		***REMOVED***
	***REMOVED***,

	render: function() {

		var self = this;

		this.svg = d3.select(this.element)
			.selectAll("svg.rickshaw_range_slider_preview")
			.data([null]);

		this.previewHeight = this.config.height - (this.config.frameTopThickness * 2);
		this.previewWidth = this.config.width - (this.config.frameHandleThickness * 2);

		this.currentFrame = [0, this.previewWidth];

		var buildGraph = function(parent, index) {

			var graphArgs = Rickshaw.extend({***REMOVED***, parent.config);
			var height = self.previewHeight / self.graphs.length;
			var renderer = parent.renderer.name;

			Rickshaw.extend(graphArgs, {
				element: this.appendChild(document.createElement("div")),
				height: height,
				width: self.previewWidth,
				series: parent.series,
				renderer: renderer
			***REMOVED***);

			var graph = new Rickshaw.Graph(graphArgs);
			self.previews.push(graph);

			parent.onUpdate(function() { graph.render(); self.render() ***REMOVED***);

			parent.onConfigure(function(args) { 
				// don't propagate height
				delete args.height;
				args.width = args.width - self.config.frameHandleThickness * 2;
				graph.configure(args);
				graph.render();
			***REMOVED***);

			graph.render();
		***REMOVED***;

		var graphContainer = d3.select(this.element)
			.selectAll("div.rickshaw_range_slider_preview_container")
			.data(this.graphs);

		var translateCommand = "translate(" +
			this.config.frameHandleThickness + "px, " +
			this.config.frameTopThickness + "px)";

		graphContainer.enter()
			.append("div")
			.classed("rickshaw_range_slider_preview_container", true)
			.style("-webkit-transform", translateCommand)
			.style("-moz-transform", translateCommand)
			.style("-ms-transform", translateCommand)
			.style("transform", translateCommand)
			.each(buildGraph);

		graphContainer.exit()
			.remove();

		// Use the first graph as the "master" for the frame state
		var masterGraph = this.graphs[0];

		var domainScale = d3.scale.linear()
			.domain([0, this.previewWidth])
			.range(masterGraph.dataDomain());

		var currentWindow = [masterGraph.window.xMin, masterGraph.window.xMax];

		this.currentFrame[0] = currentWindow[0] === undefined ? 
			0 : Math.round(domainScale.invert(currentWindow[0]));

		if (this.currentFrame[0] < 0) this.currentFrame[0] = 0;

		this.currentFrame[1] = currentWindow[1] === undefined ?
			this.previewWidth : domainScale.invert(currentWindow[1]);

		if (this.currentFrame[1] - this.currentFrame[0] < self.config.minimumFrameWidth) {
			this.currentFrame[1] = (this.currentFrame[0] || 0) + self.config.minimumFrameWidth;
		***REMOVED***

		this.svg.enter()
			.append("svg")
			.classed("rickshaw_range_slider_preview", true)
			.style("height", this.config.height + "px")
			.style("width", this.config.width + "px")
			.style("position", "absolute")
			.style("top", 0);

		this._renderDimming();
		this._renderFrame();
		this._renderGrippers();
		this._renderHandles();
		this._renderMiddle();

		this._registerMouseEvents();
	***REMOVED***,

	_renderDimming: function() {

		var element = this.svg
			.selectAll("path.dimming")
			.data([null]);

		element.enter()
			.append("path")
			.attr("fill", "white")
			.attr("fill-opacity", "0.7")
			.attr("fill-rule", "evenodd")
			.classed("dimming", true);

		var path = "";
		path += " M " + this.config.frameHandleThickness + " " + this.config.frameTopThickness;
		path += " h " + this.previewWidth;
		path += " v " + this.previewHeight;
		path += " h " + -this.previewWidth;
		path += " z ";
		path += " M " + Math.max(this.currentFrame[0], this.config.frameHandleThickness) + " " + this.config.frameTopThickness;
		path += " H " + Math.min(this.currentFrame[1] + this.config.frameHandleThickness * 2, this.previewWidth + this.config.frameHandleThickness);
		path += " v " + this.previewHeight;
		path += " H " + Math.max(this.currentFrame[0], this.config.frameHandleThickness);
		path += " z";

		element.attr("d", path);
	***REMOVED***,

	_renderFrame: function() {

		var element = this.svg
			.selectAll("path.frame")
			.data([null]);

		element.enter()
			.append("path")
			.attr("stroke", "white")
			.attr("stroke-width", "1px")
			.attr("stroke-linejoin", "round")
			.attr("fill", this.config.frameColor)
			.attr("fill-opacity", this.config.frameOpacity)
			.attr("fill-rule", "evenodd")
			.classed("frame", true);

		var path = "";
		path += " M " + this.currentFrame[0] + " 0";
		path += " H " + (this.currentFrame[1] + (this.config.frameHandleThickness * 2));
		path += " V " + this.config.height;
		path += " H " + (this.currentFrame[0]);
		path += " z";
		path += " M " + (this.currentFrame[0] + this.config.frameHandleThickness) + " " + this.config.frameTopThickness;
		path += " H " + (this.currentFrame[1] + this.config.frameHandleThickness);
		path += " v " + this.previewHeight;
		path += " H " + (this.currentFrame[0] + this.config.frameHandleThickness);
		path += " z";

		element.attr("d", path);
	***REMOVED***,

	_renderGrippers: function() {

		var gripper = this.svg.selectAll("path.gripper")
			.data([null]);

		gripper.enter()
			.append("path")
			.attr("stroke", this.config.gripperColor)
			.classed("gripper", true);

		var path = "";

		[0.4, 0.6].forEach(function(spacing) {
			path += " M " + Math.round((this.currentFrame[0] + (this.config.frameHandleThickness * spacing))) + " " + Math.round(this.config.height * 0.3);
			path += " V " + Math.round(this.config.height * 0.7);
			path += " M " + Math.round((this.currentFrame[1] + (this.config.frameHandleThickness * (1 + spacing)))) + " " + Math.round(this.config.height * 0.3);
			path += " V " + Math.round(this.config.height * 0.7);
		***REMOVED***.bind(this));

		gripper.attr("d", path);
	***REMOVED***,

	_renderHandles: function() {

		var leftHandle = this.svg.selectAll("rect.left_handle")
			.data([null]);

		leftHandle.enter()
			.append("rect")
			.attr('width', this.config.frameHandleThickness)
			.style("cursor", "ew-resize")
			.style("fill-opacity", "0")
			.classed("left_handle", true);

		leftHandle
			.attr('x', this.currentFrame[0])
			.attr('height', this.config.height);

		var rightHandle = this.svg.selectAll("rect.right_handle")
			.data([null]);

		rightHandle.enter()
			.append("rect")
			.attr('width', this.config.frameHandleThickness)
			.style("cursor", "ew-resize")
			.style("fill-opacity", "0")
			.classed("right_handle", true);

		rightHandle
			.attr('x', this.currentFrame[1] + this.config.frameHandleThickness)
			.attr('height', this.config.height);
	***REMOVED***,

	_renderMiddle: function() {

		var middleHandle = this.svg.selectAll("rect.middle_handle")
			.data([null]);

		middleHandle.enter()
			.append("rect")
			.style("cursor", "move")
			.style("fill-opacity", "0")
			.classed("middle_handle", true);

		middleHandle
			.attr('width', Math.max(0, this.currentFrame[1] - this.currentFrame[0]))
			.attr('x', this.currentFrame[0] + this.config.frameHandleThickness)
			.attr('height', this.config.height);
	***REMOVED***,

	_registerMouseEvents: function() {

		var element = d3.select(this.element);

		var drag = {
			target: null,
			start: null,
			stop: null,
			left: false,
			right: false,
			rigid: false
		***REMOVED***;

		var self = this;

		function onMousemove(datum, index) {

			drag.stop = self._getClientXFromEvent(d3.event, drag);
			var distanceTraveled = drag.stop - drag.start;
			var frameAfterDrag = self.frameBeforeDrag.slice(0);
			var minimumFrameWidth = self.config.minimumFrameWidth;

			if (drag.rigid) {
				minimumFrameWidth = self.frameBeforeDrag[1] - self.frameBeforeDrag[0];
			***REMOVED***
			if (drag.left) {
				frameAfterDrag[0] = Math.max(frameAfterDrag[0] + distanceTraveled, 0);
			***REMOVED***
			if (drag.right) {
				frameAfterDrag[1] = Math.min(frameAfterDrag[1] + distanceTraveled, self.previewWidth);
			***REMOVED***

			var currentFrameWidth = frameAfterDrag[1] - frameAfterDrag[0];

			if (currentFrameWidth <= minimumFrameWidth) {

				if (drag.left) {
					frameAfterDrag[0] = frameAfterDrag[1] - minimumFrameWidth;
				***REMOVED***
				if (drag.right) {
					frameAfterDrag[1] = frameAfterDrag[0] + minimumFrameWidth;
				***REMOVED***
				if (frameAfterDrag[0] <= 0) {
					frameAfterDrag[1] -= frameAfterDrag[0];
					frameAfterDrag[0] = 0;
				***REMOVED***
				if (frameAfterDrag[1] >= self.previewWidth) {
					frameAfterDrag[0] -= (frameAfterDrag[1] - self.previewWidth);
					frameAfterDrag[1] = self.previewWidth;
				***REMOVED***
			***REMOVED***

			self.graphs.forEach(function(graph) {

				var domainScale = d3.scale.linear()
					.interpolate(d3.interpolateNumber)
					.domain([0, self.previewWidth])
					.range(graph.dataDomain());

				var windowAfterDrag = [
					domainScale(frameAfterDrag[0]),
					domainScale(frameAfterDrag[1])
				];

				self.slideCallbacks.forEach(function(callback) {
					callback(graph, windowAfterDrag[0], windowAfterDrag[1]);
				***REMOVED***);

				if (frameAfterDrag[0] === 0) {
					windowAfterDrag[0] = undefined;
				***REMOVED***
				if (frameAfterDrag[1] === self.previewWidth) {
					windowAfterDrag[1] = undefined;
				***REMOVED***
				graph.window.xMin = windowAfterDrag[0];
				graph.window.xMax = windowAfterDrag[1];

				graph.update();
			***REMOVED***);
		***REMOVED***

		function onMousedown() {
			drag.target = d3.event.target;
			drag.start = self._getClientXFromEvent(d3.event, drag);
			self.frameBeforeDrag = self.currentFrame.slice();
			d3.event.preventDefault ? d3.event.preventDefault() : d3.event.returnValue = false;
			d3.select(document).on("mousemove.rickshaw_range_slider_preview", onMousemove);
			d3.select(document).on("mouseup.rickshaw_range_slider_preview", onMouseup);
			d3.select(document).on("touchmove.rickshaw_range_slider_preview", onMousemove);
			d3.select(document).on("touchend.rickshaw_range_slider_preview", onMouseup);
			d3.select(document).on("touchcancel.rickshaw_range_slider_preview", onMouseup);
		***REMOVED***

		function onMousedownLeftHandle(datum, index) {
			drag.left = true;
			onMousedown();
		***REMOVED***

		function onMousedownRightHandle(datum, index) {
			drag.right = true;
			onMousedown();
		***REMOVED***

		function onMousedownMiddleHandle(datum, index) {
			drag.left = true;
			drag.right = true;
			drag.rigid = true;
			onMousedown();
		***REMOVED***

		function onMouseup(datum, index) {
			d3.select(document).on("mousemove.rickshaw_range_slider_preview", null);
			d3.select(document).on("mouseup.rickshaw_range_slider_preview", null);
			d3.select(document).on("touchmove.rickshaw_range_slider_preview", null);
			d3.select(document).on("touchend.rickshaw_range_slider_preview", null);
			d3.select(document).on("touchcancel.rickshaw_range_slider_preview", null);
			delete self.frameBeforeDrag;
			drag.left = false;
			drag.right = false;
			drag.rigid = false;
		***REMOVED***

		element.select("rect.left_handle").on("mousedown", onMousedownLeftHandle);
		element.select("rect.right_handle").on("mousedown", onMousedownRightHandle);
		element.select("rect.middle_handle").on("mousedown", onMousedownMiddleHandle);
		element.select("rect.left_handle").on("touchstart", onMousedownLeftHandle);
		element.select("rect.right_handle").on("touchstart", onMousedownRightHandle);
		element.select("rect.middle_handle").on("touchstart", onMousedownMiddleHandle);
	***REMOVED***,

	_getClientXFromEvent: function(event, drag) {

		switch (event.type) {
			case 'touchstart':
			case 'touchmove':
				var touchList = event.changedTouches;
				var touch = null;
				for (var touchIndex = 0; touchIndex < touchList.length; touchIndex++) {
					if (touchList[touchIndex].target === drag.target) {
						touch = touchList[touchIndex];
						break;
					***REMOVED***
				***REMOVED***
				return touch !== null ? touch.clientX : undefined;

			default:
				return event.clientX;
		***REMOVED***
	***REMOVED***
***REMOVED***);

Rickshaw.namespace("Rickshaw.Graph.Renderer");

Rickshaw.Graph.Renderer = Rickshaw.Class.create( {

	initialize: function(args) {
		this.graph = args.graph;
		this.tension = args.tension || this.tension;
		this.configure(args);
	***REMOVED***,

	seriesPathFactory: function() {
		//implement in subclass
	***REMOVED***,

	seriesStrokeFactory: function() {
		// implement in subclass
	***REMOVED***,

	defaults: function() {
		return {
			tension: 0.8,
			strokeWidth: 2,
			unstack: true,
			padding: { top: 0.01, right: 0, bottom: 0.01, left: 0 ***REMOVED***,
			stroke: false,
			fill: false
		***REMOVED***;
	***REMOVED***,

	domain: function(data) {
		// Requires that at least one series contains some data
		var stackedData = data || this.graph.stackedData || this.graph.stackData();

		var xMin = +Infinity;
		var xMax = -Infinity;

		var yMin = +Infinity;
		var yMax = -Infinity;

		stackedData.forEach( function(series) {

			series.forEach( function(d) {

				if (d.y == null) return;

				var y = d.y + d.y0;

				if (y < yMin) yMin = y;
				if (y > yMax) yMax = y;
			***REMOVED*** );

			if (!series.length) return;

			if (series[0].x < xMin) xMin = series[0].x;
			if (series[series.length - 1].x > xMax) xMax = series[series.length - 1].x;
		***REMOVED*** );

		xMin -= (xMax - xMin) * this.padding.left;
		xMax += (xMax - xMin) * this.padding.right;

		yMin = this.graph.min === 'auto' ? yMin : this.graph.min || 0;
		yMax = this.graph.max === undefined ? yMax : this.graph.max;

		if (this.graph.min === 'auto' || yMin < 0) {
			yMin -= (yMax - yMin) * this.padding.bottom;
		***REMOVED***

		if (this.graph.max === undefined) {
			yMax += (yMax - yMin) * this.padding.top;
		***REMOVED***

		return { x: [xMin, xMax], y: [yMin, yMax] ***REMOVED***;
	***REMOVED***,

	render: function(args) {

		args = args || {***REMOVED***;

		var graph = this.graph;
		var series = args.series || graph.series;

		var vis = args.vis || graph.vis;
		vis.selectAll('*').remove();

		var data = series
			.filter(function(s) { return !s.disabled ***REMOVED***)
			.map(function(s) { return s.stack ***REMOVED***);

		var pathNodes = vis.selectAll("path.path")
			.data(data)
			.enter().append("svg:path")
			.classed('path', true)
			.attr("d", this.seriesPathFactory());

		if (this.stroke) {
                        var strokeNodes = vis.selectAll('path.stroke')
                                .data(data)
                                .enter().append("svg:path")
				.classed('stroke', true)
				.attr("d", this.seriesStrokeFactory());
		***REMOVED***

		var i = 0;
		series.forEach( function(series) {
			if (series.disabled) return;
			series.path = pathNodes[0][i];
			if (this.stroke) series.stroke = strokeNodes[0][i];
			this._styleSeries(series);
			i++;
		***REMOVED***, this );

	***REMOVED***,

	_styleSeries: function(series) {

		var fill = this.fill ? series.color : 'none';
		var stroke = this.stroke ? series.color : 'none';

		series.path.setAttribute('fill', fill);
		series.path.setAttribute('stroke', stroke);
		series.path.setAttribute('stroke-width', this.strokeWidth);

		if (series.className) {
			d3.select(series.path).classed(series.className, true);
		***REMOVED***
		if (series.className && this.stroke) {
			d3.select(series.stroke).classed(series.className, true);
		***REMOVED***
	***REMOVED***,

	configure: function(args) {

		args = args || {***REMOVED***;

		Rickshaw.keys(this.defaults()).forEach( function(key) {

			if (!args.hasOwnProperty(key)) {
				this[key] = this[key] || this.graph[key] || this.defaults()[key];
				return;
			***REMOVED***

			if (typeof this.defaults()[key] == 'object') {

				Rickshaw.keys(this.defaults()[key]).forEach( function(k) {

					this[key][k] =
						args[key][k] !== undefined ? args[key][k] :
						this[key][k] !== undefined ? this[key][k] :
						this.defaults()[key][k];
				***REMOVED***, this );

			***REMOVED*** else {
				this[key] =
					args[key] !== undefined ? args[key] :
					this[key] !== undefined ? this[key] :
					this.graph[key] !== undefined ? this.graph[key] :
					this.defaults()[key];
			***REMOVED***

		***REMOVED***, this );
	***REMOVED***,

	setStrokeWidth: function(strokeWidth) {
		if (strokeWidth !== undefined) {
			this.strokeWidth = strokeWidth;
		***REMOVED***
	***REMOVED***,

	setTension: function(tension) {
		if (tension !== undefined) {
			this.tension = tension;
		***REMOVED***
	***REMOVED***
***REMOVED*** );

Rickshaw.namespace('Rickshaw.Graph.Renderer.Line');

Rickshaw.Graph.Renderer.Line = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

	name: 'line',

	defaults: function($super) {

		return Rickshaw.extend( $super(), {
			unstack: true,
			fill: false,
			stroke: true
		***REMOVED*** );
	***REMOVED***,

	seriesPathFactory: function() {

		var graph = this.graph;

		var factory = d3.svg.line()
			.x( function(d) { return graph.x(d.x) ***REMOVED*** )
			.y( function(d) { return graph.y(d.y) ***REMOVED*** )
			.interpolate(this.graph.interpolation).tension(this.tension);

		factory.defined && factory.defined( function(d) { return d.y !== null ***REMOVED*** );
		return factory;
	***REMOVED***
***REMOVED*** );

Rickshaw.namespace('Rickshaw.Graph.Renderer.Stack');

Rickshaw.Graph.Renderer.Stack = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

	name: 'stack',

	defaults: function($super) {

		return Rickshaw.extend( $super(), {
			fill: true,
			stroke: false,
			unstack: false
		***REMOVED*** );
	***REMOVED***,

	seriesPathFactory: function() {

		var graph = this.graph;

		var factory = d3.svg.area()
			.x( function(d) { return graph.x(d.x) ***REMOVED*** )
			.y0( function(d) { return graph.y(d.y0) ***REMOVED*** )
			.y1( function(d) { return graph.y(d.y + d.y0) ***REMOVED*** )
			.interpolate(this.graph.interpolation).tension(this.tension);

		factory.defined && factory.defined( function(d) { return d.y !== null ***REMOVED*** );
		return factory;
	***REMOVED***
***REMOVED*** );

Rickshaw.namespace('Rickshaw.Graph.Renderer.Bar');

Rickshaw.Graph.Renderer.Bar = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

	name: 'bar',

	defaults: function($super) {

		var defaults = Rickshaw.extend( $super(), {
			gapSize: 0.05,
			unstack: false
		***REMOVED*** );

		delete defaults.tension;
		return defaults;
	***REMOVED***,

	initialize: function($super, args) {
		args = args || {***REMOVED***;
		this.gapSize = args.gapSize || this.gapSize;
		$super(args);
	***REMOVED***,

	domain: function($super) {

		var domain = $super();

		var frequentInterval = this._frequentInterval(this.graph.stackedData.slice(-1).shift());
		domain.x[1] += Number(frequentInterval.magnitude);

		return domain;
	***REMOVED***,

	barWidth: function(series) {

		var frequentInterval = this._frequentInterval(series.stack);
		var barWidth = this.graph.x.magnitude(frequentInterval.magnitude) * (1 - this.gapSize);

		return barWidth;
	***REMOVED***,

	render: function(args) {

		args = args || {***REMOVED***;

		var graph = this.graph;
		var series = args.series || graph.series;

		var vis = args.vis || graph.vis;
		vis.selectAll('*').remove();

		var barWidth = this.barWidth(series.active()[0]);
		var barXOffset = 0;

		var activeSeriesCount = series.filter( function(s) { return !s.disabled; ***REMOVED*** ).length;
		var seriesBarWidth = this.unstack ? barWidth / activeSeriesCount : barWidth;

		var transform = function(d) {
			// add a matrix transform for negative values
			var matrix = [ 1, 0, 0, (d.y < 0 ? -1 : 1), 0, (d.y < 0 ? graph.y.magnitude(Math.abs(d.y)) * 2 : 0) ];
			return "matrix(" + matrix.join(',') + ")";
		***REMOVED***;

		series.forEach( function(series) {

			if (series.disabled) return;

			var barWidth = this.barWidth(series);

			var nodes = vis.selectAll("path")
				.data(series.stack.filter( function(d) { return d.y !== null ***REMOVED*** ))
				.enter().append("svg:rect")
				.attr("x", function(d) { return graph.x(d.x) + barXOffset ***REMOVED***)
				.attr("y", function(d) { return (graph.y(d.y0 + Math.abs(d.y))) * (d.y < 0 ? -1 : 1 ) ***REMOVED***)
				.attr("width", seriesBarWidth)
				.attr("height", function(d) { return graph.y.magnitude(Math.abs(d.y)) ***REMOVED***)
				.attr("transform", transform);

			Array.prototype.forEach.call(nodes[0], function(n) {
				n.setAttribute('fill', series.color);
			***REMOVED*** );

			if (this.unstack) barXOffset += seriesBarWidth;

		***REMOVED***, this );
	***REMOVED***,

	_frequentInterval: function(data) {

		var intervalCounts = {***REMOVED***;

		for (var i = 0; i < data.length - 1; i++) {
			var interval = data[i + 1].x - data[i].x;
			intervalCounts[interval] = intervalCounts[interval] || 0;
			intervalCounts[interval]++;
		***REMOVED***

		var frequentInterval = { count: 0, magnitude: 1 ***REMOVED***;

		Rickshaw.keys(intervalCounts).forEach( function(i) {
			if (frequentInterval.count < intervalCounts[i]) {
				frequentInterval = {
					count: intervalCounts[i],
					magnitude: i
				***REMOVED***;
			***REMOVED***
		***REMOVED*** );

		return frequentInterval;
	***REMOVED***
***REMOVED*** );

Rickshaw.namespace('Rickshaw.Graph.Renderer.Area');

Rickshaw.Graph.Renderer.Area = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

	name: 'area',

	defaults: function($super) {

		return Rickshaw.extend( $super(), {
			unstack: false,
			fill: false,
			stroke: false
		***REMOVED*** );
	***REMOVED***,

	seriesPathFactory: function() {

		var graph = this.graph;

		var factory = d3.svg.area()
			.x( function(d) { return graph.x(d.x) ***REMOVED*** )
			.y0( function(d) { return graph.y(d.y0) ***REMOVED*** )
			.y1( function(d) { return graph.y(d.y + d.y0) ***REMOVED*** )
			.interpolate(graph.interpolation).tension(this.tension);

		factory.defined && factory.defined( function(d) { return d.y !== null ***REMOVED*** );
		return factory;
	***REMOVED***,

	seriesStrokeFactory: function() {

		var graph = this.graph;

		var factory = d3.svg.line()
			.x( function(d) { return graph.x(d.x) ***REMOVED*** )
			.y( function(d) { return graph.y(d.y + d.y0) ***REMOVED*** )
			.interpolate(graph.interpolation).tension(this.tension);

		factory.defined && factory.defined( function(d) { return d.y !== null ***REMOVED*** );
		return factory;
	***REMOVED***,

	render: function(args) {

		args = args || {***REMOVED***;

		var graph = this.graph;
		var series = args.series || graph.series;

		var vis = args.vis || graph.vis;
		vis.selectAll('*').remove();

		// insert or stacked areas so strokes lay on top of areas
		var method = this.unstack ? 'append' : 'insert';

		var data = series
			.filter(function(s) { return !s.disabled ***REMOVED***)
			.map(function(s) { return s.stack ***REMOVED***);

		var nodes = vis.selectAll("path")
			.data(data)
			.enter()[method]("svg:g", 'g');

		nodes.append("svg:path")
			.attr("d", this.seriesPathFactory())
			.attr("class", 'area');

		if (this.stroke) {
			nodes.append("svg:path")
				.attr("d", this.seriesStrokeFactory())
				.attr("class", 'line');
		***REMOVED***

		var i = 0;
		series.forEach( function(series) {
			if (series.disabled) return;
			series.path = nodes[0][i++];
			this._styleSeries(series);
		***REMOVED***, this );
	***REMOVED***,

	_styleSeries: function(series) {

		if (!series.path) return;

		d3.select(series.path).select('.area')
			.attr('fill', series.color);

		if (this.stroke) {
			d3.select(series.path).select('.line')
				.attr('fill', 'none')
				.attr('stroke', series.stroke || d3.interpolateRgb(series.color, 'black')(0.125))
				.attr('stroke-width', this.strokeWidth);
		***REMOVED***

		if (series.className) {
			series.path.setAttribute('class', series.className);
		***REMOVED***
	***REMOVED***
***REMOVED*** );

Rickshaw.namespace('Rickshaw.Graph.Renderer.ScatterPlot');

Rickshaw.Graph.Renderer.ScatterPlot = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

	name: 'scatterplot',

	defaults: function($super) {

		return Rickshaw.extend( $super(), {
			unstack: true,
			fill: true,
			stroke: false,
			padding:{ top: 0.01, right: 0.01, bottom: 0.01, left: 0.01 ***REMOVED***,
			dotSize: 4
		***REMOVED*** );
	***REMOVED***,

	initialize: function($super, args) {
		$super(args);
	***REMOVED***,

	render: function(args) {

		args = args || {***REMOVED***;

		var graph = this.graph;

		var series = args.series || graph.series;
		var vis = args.vis || graph.vis;

		var dotSize = this.dotSize;

		vis.selectAll('*').remove();

		series.forEach( function(series) {

			if (series.disabled) return;

			var nodes = vis.selectAll("path")
				.data(series.stack.filter( function(d) { return d.y !== null ***REMOVED*** ))
				.enter().append("svg:circle")
					.attr("cx", function(d) { return graph.x(d.x) ***REMOVED***)
					.attr("cy", function(d) { return graph.y(d.y) ***REMOVED***)
					.attr("r", function(d) { return ("r" in d) ? d.r : dotSize***REMOVED***);
			if (series.className) {
				nodes.classed(series.className, true);
			***REMOVED***
			
			Array.prototype.forEach.call(nodes[0], function(n) {
				n.setAttribute('fill', series.color);
			***REMOVED*** );

		***REMOVED***, this );
	***REMOVED***
***REMOVED*** );
Rickshaw.namespace('Rickshaw.Graph.Renderer.Multi');

Rickshaw.Graph.Renderer.Multi = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

	name: 'multi',

	initialize: function($super, args) {

		$super(args);
	***REMOVED***,

	defaults: function($super) {

		return Rickshaw.extend( $super(), {
			unstack: true,
			fill: false,
			stroke: true 
		***REMOVED*** );
	***REMOVED***,

	configure: function($super, args) {

		args = args || {***REMOVED***;
		this.config = args;
		$super(args);
	***REMOVED***,

	domain: function($super) {

		this.graph.stackData();

		var domains = [];

		var groups = this._groups();
		this._stack(groups);

		groups.forEach( function(group) {

			var data = group.series
				.filter( function(s) { return !s.disabled ***REMOVED*** )
				.map( function(s) { return s.stack ***REMOVED***);

			if (!data.length) return;
			
			var domain = null;
			if (group.renderer && group.renderer.domain) {
				domain = group.renderer.domain(data);
			***REMOVED***
			else {
				domain = $super(data);
			***REMOVED***
			domains.push(domain);
		***REMOVED***);

		var xMin = d3.min(domains.map( function(d) { return d.x[0] ***REMOVED*** ));
		var xMax = d3.max(domains.map( function(d) { return d.x[1] ***REMOVED*** ));
		var yMin = d3.min(domains.map( function(d) { return d.y[0] ***REMOVED*** ));
		var yMax = d3.max(domains.map( function(d) { return d.y[1] ***REMOVED*** ));

		return { x: [xMin, xMax], y: [yMin, yMax] ***REMOVED***;
	***REMOVED***,

	_groups: function() {

		var graph = this.graph;

		var renderGroups = {***REMOVED***;

		graph.series.forEach( function(series) {

			if (series.disabled) return;

			if (!renderGroups[series.renderer]) {

				var ns = "http://www.w3.org/2000/svg";
				var vis = document.createElementNS(ns, 'g');

				graph.vis[0][0].appendChild(vis);

				var renderer = graph._renderers[series.renderer];

				var config = {***REMOVED***;

				var defaults = [ this.defaults(), renderer.defaults(), this.config, this.graph ];
				defaults.forEach(function(d) { Rickshaw.extend(config, d) ***REMOVED***);

				renderer.configure(config);

				renderGroups[series.renderer] = {
					renderer: renderer,
					series: [],
					vis: d3.select(vis)
				***REMOVED***;
			***REMOVED***
				
			renderGroups[series.renderer].series.push(series);

		***REMOVED***, this);

		var groups = [];

		Object.keys(renderGroups).forEach( function(key) {
			var group = renderGroups[key];
			groups.push(group);
		***REMOVED***);

		return groups;
	***REMOVED***,

	_stack: function(groups) {

		groups.forEach( function(group) {

			var series = group.series
				.filter( function(series) { return !series.disabled ***REMOVED*** );

			var data = series
				.map( function(series) { return series.stack ***REMOVED*** );

			if (!group.renderer.unstack) {

				var layout = d3.layout.stack();
				var stackedData = Rickshaw.clone(layout(data));

				series.forEach( function(series, index) {
					series._stack = Rickshaw.clone(stackedData[index]);
				***REMOVED***);
			***REMOVED***

		***REMOVED***, this );

		return groups;

	***REMOVED***,

	render: function() {

		this.graph.series.forEach( function(series) {
			if (!series.renderer) {
				throw new Error("Each series needs a renderer for graph 'multi' renderer");
			***REMOVED***
		***REMOVED***);

		this.graph.vis.selectAll('*').remove();

		var groups = this._groups();
		groups = this._stack(groups);

		groups.forEach( function(group) {

			var series = group.series
				.filter( function(series) { return !series.disabled ***REMOVED*** );

			series.active = function() { return series ***REMOVED***;

			group.renderer.render({ series: series, vis: group.vis ***REMOVED***);
			series.forEach(function(s) { s.stack = s._stack || s.stack || s.data; ***REMOVED***);
		***REMOVED***);
	***REMOVED***

***REMOVED*** );
Rickshaw.namespace('Rickshaw.Graph.Renderer.LinePlot');

Rickshaw.Graph.Renderer.LinePlot = Rickshaw.Class.create( Rickshaw.Graph.Renderer, {

	name: 'lineplot',

	defaults: function($super) {

		return Rickshaw.extend( $super(), {
			unstack: true,
			fill: false,
			stroke: true,
			padding:{ top: 0.01, right: 0.01, bottom: 0.01, left: 0.01 ***REMOVED***,
			dotSize: 3,
			strokeWidth: 2
		***REMOVED*** );
	***REMOVED***,

	seriesPathFactory: function() {

		var graph = this.graph;

		var factory = d3.svg.line()
			.x( function(d) { return graph.x(d.x) ***REMOVED*** )
			.y( function(d) { return graph.y(d.y) ***REMOVED*** )
			.interpolate(this.graph.interpolation).tension(this.tension);

		factory.defined && factory.defined( function(d) { return d.y !== null ***REMOVED*** );
		return factory;
	***REMOVED***,

	render: function(args) {

		args = args || {***REMOVED***;

		var graph = this.graph;

		var series = args.series || graph.series;
		var vis = args.vis || graph.vis;

		var dotSize = this.dotSize;

		vis.selectAll('*').remove();

		var data = series
			.filter(function(s) { return !s.disabled ***REMOVED***)
			.map(function(s) { return s.stack ***REMOVED***);

		var nodes = vis.selectAll("path")
			.data(data)
			.enter().append("svg:path")
			.attr("d", this.seriesPathFactory());

		var i = 0;
		series.forEach(function(series) {
			if (series.disabled) return;
			series.path = nodes[0][i++];
			this._styleSeries(series);
		***REMOVED***, this);

		series.forEach(function(series) {

			if (series.disabled) return;

			var nodes = vis.selectAll("x")
				.data(series.stack.filter( function(d) { return d.y !== null ***REMOVED*** ))
				.enter().append("svg:circle")
				.attr("cx", function(d) { return graph.x(d.x) ***REMOVED***)
				.attr("cy", function(d) { return graph.y(d.y) ***REMOVED***)
				.attr("r", function(d) { return ("r" in d) ? d.r : dotSize***REMOVED***);

			Array.prototype.forEach.call(nodes[0], function(n) {
				if (!n) return;
				n.setAttribute('data-color', series.color);
				n.setAttribute('fill', 'white');
				n.setAttribute('stroke', series.color);
				n.setAttribute('stroke-width', this.strokeWidth);

			***REMOVED***.bind(this));

		***REMOVED***, this);
	***REMOVED***
***REMOVED*** );

Rickshaw.namespace('Rickshaw.Graph.Smoother');

Rickshaw.Graph.Smoother = Rickshaw.Class.create({

	initialize: function(args) {

		this.graph = args.graph;
		this.element = args.element;
		this.aggregationScale = 1;

		this.build();

		this.graph.stackData.hooks.data.push( {
			name: 'smoother',
			orderPosition: 50,
			f: this.transformer.bind(this)
		***REMOVED*** );
	***REMOVED***,

	build: function() {

		var self = this;
		var $ = jQuery;

		if (this.element) {
			$( function() {
				$(self.element).slider( {
					min: 1,
					max: 100,
					slide: function( event, ui ) {
						self.setScale(ui.value);
						self.graph.update();
					***REMOVED***
				***REMOVED*** );
			***REMOVED*** );
		***REMOVED***
	***REMOVED***,

	setScale: function(scale) {

		if (scale < 1) {
			throw "scale out of range: " + scale;
		***REMOVED***

		this.aggregationScale = scale;
		this.graph.update();
	***REMOVED***,

	transformer: function(data) {

		if (this.aggregationScale == 1) return data;

		var aggregatedData = [];

		data.forEach( function(seriesData) {

			var aggregatedSeriesData = [];

			while (seriesData.length) {

				var avgX = 0, avgY = 0;
				var slice = seriesData.splice(0, this.aggregationScale);

				slice.forEach( function(d) {
					avgX += d.x / slice.length;
					avgY += d.y / slice.length;
				***REMOVED*** );

				aggregatedSeriesData.push( { x: avgX, y: avgY ***REMOVED*** );
			***REMOVED***

			aggregatedData.push(aggregatedSeriesData);

		***REMOVED***.bind(this) );

		return aggregatedData;
	***REMOVED***
***REMOVED***);

Rickshaw.namespace('Rickshaw.Graph.Socketio');

Rickshaw.Graph.Socketio = Rickshaw.Class.create( Rickshaw.Graph.Ajax, {
	request: function() {
		var socket = io.connect(this.dataURL);
		var self = this;
		socket.on('rickshaw', function (data) {
			self.success(data);
		***REMOVED***);
	***REMOVED***
***REMOVED*** );
Rickshaw.namespace('Rickshaw.Series');

Rickshaw.Series = Rickshaw.Class.create( Array, {

	initialize: function (data, palette, options) {

		options = options || {***REMOVED***;

		this.palette = new Rickshaw.Color.Palette(palette);

		this.timeBase = typeof(options.timeBase) === 'undefined' ? 
			Math.floor(new Date().getTime() / 1000) : 
			options.timeBase;

		var timeInterval = typeof(options.timeInterval) == 'undefined' ?
			1000 :
			options.timeInterval;

		this.setTimeInterval(timeInterval);

		if (data && (typeof(data) == "object") && Array.isArray(data)) {
			data.forEach( function(item) { this.addItem(item) ***REMOVED***, this );
		***REMOVED***
	***REMOVED***,

	addItem: function(item) {

		if (typeof(item.name) === 'undefined') {
			throw('addItem() needs a name');
		***REMOVED***

		item.color = (item.color || this.palette.color(item.name));
		item.data = (item.data || []);

		// backfill, if necessary
		if ((item.data.length === 0) && this.length && (this.getIndex() > 0)) {
			this[0].data.forEach( function(plot) {
				item.data.push({ x: plot.x, y: 0 ***REMOVED***);
			***REMOVED*** );
		***REMOVED*** else if (item.data.length === 0) {
			item.data.push({ x: this.timeBase - (this.timeInterval || 0), y: 0 ***REMOVED***);
		***REMOVED*** 

		this.push(item);

		if (this.legend) {
			this.legend.addLine(this.itemByName(item.name));
		***REMOVED***
	***REMOVED***,

	addData: function(data, x) {

		var index = this.getIndex();

		Rickshaw.keys(data).forEach( function(name) {
			if (! this.itemByName(name)) {
				this.addItem({ name: name ***REMOVED***);
			***REMOVED***
		***REMOVED***, this );

		this.forEach( function(item) {
			item.data.push({ 
				x: x || (index * this.timeInterval || 1) + this.timeBase, 
				y: (data[item.name] || 0) 
			***REMOVED***);
		***REMOVED***, this );
	***REMOVED***,

	getIndex: function () {
		return (this[0] && this[0].data && this[0].data.length) ? this[0].data.length : 0;
	***REMOVED***,

	itemByName: function(name) {

		for (var i = 0; i < this.length; i++) {
			if (this[i].name == name)
				return this[i];
		***REMOVED***
	***REMOVED***,

	setTimeInterval: function(iv) {
		this.timeInterval = iv / 1000;
	***REMOVED***,

	setTimeBase: function (t) {
		this.timeBase = t;
	***REMOVED***,

	dump: function() {

		var data = {
			timeBase: this.timeBase,
			timeInterval: this.timeInterval,
			items: []
		***REMOVED***;

		this.forEach( function(item) {

			var newItem = {
				color: item.color,
				name: item.name,
				data: []
			***REMOVED***;

			item.data.forEach( function(plot) {
				newItem.data.push({ x: plot.x, y: plot.y ***REMOVED***);
			***REMOVED*** );

			data.items.push(newItem);
		***REMOVED*** );

		return data;
	***REMOVED***,

	load: function(data) {

		if (data.timeInterval) {
			this.timeInterval = data.timeInterval;
		***REMOVED***

		if (data.timeBase) {
			this.timeBase = data.timeBase;
		***REMOVED***

		if (data.items) {
			data.items.forEach( function(item) {
				this.push(item);
				if (this.legend) {
					this.legend.addLine(this.itemByName(item.name));
				***REMOVED***

			***REMOVED***, this );
		***REMOVED***
	***REMOVED***
***REMOVED*** );

Rickshaw.Series.zeroFill = function(series) {
	Rickshaw.Series.fill(series, 0);
***REMOVED***;

Rickshaw.Series.fill = function(series, fill) {

	var x;
	var i = 0;

	var data = series.map( function(s) { return s.data ***REMOVED*** );

	while ( i < Math.max.apply(null, data.map( function(d) { return d.length ***REMOVED*** )) ) {

		x = Math.min.apply( null, 
			data
				.filter(function(d) { return d[i] ***REMOVED***)
				.map(function(d) { return d[i].x ***REMOVED***)
		);

		data.forEach( function(d) {
			if (!d[i] || d[i].x != x) {
				d.splice(i, 0, { x: x, y: fill ***REMOVED***);
			***REMOVED***
		***REMOVED*** );

		i++;
	***REMOVED***
***REMOVED***;

Rickshaw.namespace('Rickshaw.Series.FixedDuration');

Rickshaw.Series.FixedDuration = Rickshaw.Class.create(Rickshaw.Series, {

	initialize: function (data, palette, options) {

		options = options || {***REMOVED***;

		if (typeof(options.timeInterval) === 'undefined') {
			throw new Error('FixedDuration series requires timeInterval');
		***REMOVED***

		if (typeof(options.maxDataPoints) === 'undefined') {
			throw new Error('FixedDuration series requires maxDataPoints');
		***REMOVED***

		this.palette = new Rickshaw.Color.Palette(palette);
		this.timeBase = typeof(options.timeBase) === 'undefined' ? Math.floor(new Date().getTime() / 1000) : options.timeBase;
		this.setTimeInterval(options.timeInterval);

		if (this[0] && this[0].data && this[0].data.length) {
			this.currentSize = this[0].data.length;
			this.currentIndex = this[0].data.length;
		***REMOVED*** else {
			this.currentSize  = 0;
			this.currentIndex = 0;
		***REMOVED***

		this.maxDataPoints = options.maxDataPoints;


		if (data && (typeof(data) == "object") && Array.isArray(data)) {
			data.forEach( function (item) { this.addItem(item) ***REMOVED***, this );
			this.currentSize  += 1;
			this.currentIndex += 1;
		***REMOVED***

		// reset timeBase for zero-filled values if needed
		this.timeBase -= (this.maxDataPoints - this.currentSize) * this.timeInterval;

		// zero-fill up to maxDataPoints size if we don't have that much data yet
		if ((typeof(this.maxDataPoints) !== 'undefined') && (this.currentSize < this.maxDataPoints)) {
			for (var i = this.maxDataPoints - this.currentSize - 1; i > 1; i--) {
				this.currentSize  += 1;
				this.currentIndex += 1;
				this.forEach( function (item) {
					item.data.unshift({ x: ((i-1) * this.timeInterval || 1) + this.timeBase, y: 0, i: i ***REMOVED***);
				***REMOVED***, this );
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	addData: function($super, data, x) {

		$super(data, x);

		this.currentSize += 1;
		this.currentIndex += 1;

		if (this.maxDataPoints !== undefined) {
			while (this.currentSize > this.maxDataPoints) {
				this.dropData();
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	dropData: function() {

		this.forEach(function(item) {
			item.data.splice(0, 1);
		***REMOVED*** );

		this.currentSize -= 1;
	***REMOVED***,

	getIndex: function () {
		return this.currentIndex;
	***REMOVED***
***REMOVED*** );

	return Rickshaw;
***REMOVED***));