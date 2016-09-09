;(function (global, factory) { // eslint-disable-line
	"use strict"
	/* eslint-disable no-undef */
	var m = factory(global)
	if (typeof module === "object" && module != null && module.exports) {
		module.exports = m
	***REMOVED*** else if (typeof define === "function" && define.amd) {
		define(function () { return m ***REMOVED***)
	***REMOVED*** else {
		global.m = m
	***REMOVED***
	/* eslint-enable no-undef */
***REMOVED***)(typeof window !== "undefined" ? window : this, function (global, undefined) { // eslint-disable-line
	"use strict"

	m.version = function () {
		return "v0.2.5"
	***REMOVED***

	var hasOwn = {***REMOVED***.hasOwnProperty
	var type = {***REMOVED***.toString

	function isFunction(object) {
		return typeof object === "function"
	***REMOVED***

	function isObject(object) {
		return type.call(object) === "[object Object]"
	***REMOVED***

	function isString(object) {
		return type.call(object) === "[object String]"
	***REMOVED***

	var isArray = Array.isArray || function (object) {
		return type.call(object) === "[object Array]"
	***REMOVED***

	function noop() {***REMOVED***

	var voidElements = {
		AREA: 1,
		BASE: 1,
		BR: 1,
		COL: 1,
		COMMAND: 1,
		EMBED: 1,
		HR: 1,
		IMG: 1,
		INPUT: 1,
		KEYGEN: 1,
		LINK: 1,
		META: 1,
		PARAM: 1,
		SOURCE: 1,
		TRACK: 1,
		WBR: 1
	***REMOVED***

	// caching commonly used variables
	var $document, $location, $requestAnimationFrame, $cancelAnimationFrame

	// self invoking function needed because of the way mocks work
	function initialize(mock) {
		$document = mock.document
		$location = mock.location
		$cancelAnimationFrame = mock.cancelAnimationFrame || mock.clearTimeout
		$requestAnimationFrame = mock.requestAnimationFrame || mock.setTimeout
	***REMOVED***

	// testing API
	m.deps = function (mock) {
		initialize(global = mock || window)
		return global
	***REMOVED***

	m.deps(global)

	/**
	 * @typedef {String***REMOVED*** Tag
	 * A string that looks like -> div.classname#id[param=one][param2=two]
	 * Which describes a DOM node
	 */

	function parseTagAttrs(cell, tag) {
		var classes = []
		var parser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[.+?\])/g
		var match

		while ((match = parser.exec(tag))) {
			if (match[1] === "" && match[2]) {
				cell.tag = match[2]
			***REMOVED*** else if (match[1] === "#") {
				cell.attrs.id = match[2]
			***REMOVED*** else if (match[1] === ".") {
				classes.push(match[2])
			***REMOVED*** else if (match[3][0] === "[") {
				var pair = /\[(.+?)(?:=("|'|)(.*?)\2)?\]/.exec(match[3])
				cell.attrs[pair[1]] = pair[3] || ""
			***REMOVED***
		***REMOVED***

		return classes
	***REMOVED***

	function getVirtualChildren(args, hasAttrs) {
		var children = hasAttrs ? args.slice(1) : args

		if (children.length === 1 && isArray(children[0])) {
			return children[0]
		***REMOVED*** else {
			return children
		***REMOVED***
	***REMOVED***

	function assignAttrs(target, attrs, classes) {
		var classAttr = "class" in attrs ? "class" : "className"

		for (var attrName in attrs) {
			if (hasOwn.call(attrs, attrName)) {
				if (attrName === classAttr &&
						attrs[attrName] != null &&
						attrs[attrName] !== "") {
					classes.push(attrs[attrName])
					// create key in correct iteration order
					target[attrName] = ""
				***REMOVED*** else {
					target[attrName] = attrs[attrName]
				***REMOVED***
			***REMOVED***
		***REMOVED***

		if (classes.length) target[classAttr] = classes.join(" ")
	***REMOVED***

	/**
	 *
	 * @param {Tag***REMOVED*** The DOM node tag
	 * @param {Object=[]***REMOVED*** optional key-value pairs to be mapped to DOM attrs
	 * @param {...mNode=[]***REMOVED*** Zero or more Mithril child nodes. Can be an array,
	 *                      or splat (optional)
	 */
	function m(tag, pairs) {
		var args = []

		for (var i = 1, length = arguments.length; i < length; i++) {
			args[i - 1] = arguments[i]
		***REMOVED***

		if (isObject(tag)) return parameterize(tag, args)

		if (!isString(tag)) {
			throw new Error("selector in m(selector, attrs, children) should " +
				"be a string")
		***REMOVED***

		var hasAttrs = pairs != null && isObject(pairs) &&
			!("tag" in pairs || "view" in pairs || "subtree" in pairs)

		var attrs = hasAttrs ? pairs : {***REMOVED***
		var cell = {
			tag: "div",
			attrs: {***REMOVED***,
			children: getVirtualChildren(args, hasAttrs)
		***REMOVED***

		assignAttrs(cell.attrs, attrs, parseTagAttrs(cell, tag))
		return cell
	***REMOVED***

	function forEach(list, f) {
		for (var i = 0; i < list.length && !f(list[i], i++);) {
			// function called in condition
		***REMOVED***
	***REMOVED***

	function forKeys(list, f) {
		forEach(list, function (attrs, i) {
			return (attrs = attrs && attrs.attrs) &&
				attrs.key != null &&
				f(attrs, i)
		***REMOVED***)
	***REMOVED***
	// This function was causing deopts in Chrome.
	function dataToString(data) {
		// data.toString() might throw or return null if data is the return
		// value of Console.log in some versions of Firefox (behavior depends on
		// version)
		try {
			if (data != null && data.toString() != null) return data
		***REMOVED*** catch (e) {
			// silently ignore errors
		***REMOVED***
		return ""
	***REMOVED***

	// This function was causing deopts in Chrome.
	function injectTextNode(parentElement, first, index, data) {
		try {
			insertNode(parentElement, first, index)
			first.nodeValue = data
		***REMOVED*** catch (e) {
			// IE erroneously throws error when appending an empty text node
			// after a null
		***REMOVED***
	***REMOVED***

	function flatten(list) {
		// recursively flatten array
		for (var i = 0; i < list.length; i++) {
			if (isArray(list[i])) {
				list = list.concat.apply([], list)
				// check current index again and flatten until there are no more
				// nested arrays at that index
				i--
			***REMOVED***
		***REMOVED***
		return list
	***REMOVED***

	function insertNode(parentElement, node, index) {
		parentElement.insertBefore(node,
			parentElement.childNodes[index] || null)
	***REMOVED***

	var DELETION = 1
	var INSERTION = 2
	var MOVE = 3

	function handleKeysDiffer(data, existing, cached, parentElement) {
		forKeys(data, function (key, i) {
			existing[key = key.key] = existing[key] ? {
				action: MOVE,
				index: i,
				from: existing[key].index,
				element: cached.nodes[existing[key].index] ||
					$document.createElement("div")
			***REMOVED*** : {action: INSERTION, index: i***REMOVED***
		***REMOVED***)

		var actions = []
		for (var prop in existing) {
			if (hasOwn.call(existing, prop)) {
				actions.push(existing[prop])
			***REMOVED***
		***REMOVED***

		var changes = actions.sort(sortChanges)
		var newCached = new Array(cached.length)

		newCached.nodes = cached.nodes.slice()

		forEach(changes, function (change) {
			var index = change.index
			if (change.action === DELETION) {
				clear(cached[index].nodes, cached[index])
				newCached.splice(index, 1)
			***REMOVED***
			if (change.action === INSERTION) {
				var dummy = $document.createElement("div")
				dummy.key = data[index].attrs.key
				insertNode(parentElement, dummy, index)
				newCached.splice(index, 0, {
					attrs: {key: data[index].attrs.key***REMOVED***,
					nodes: [dummy]
				***REMOVED***)
				newCached.nodes[index] = dummy
			***REMOVED***

			if (change.action === MOVE) {
				var changeElement = change.element
				var maybeChanged = parentElement.childNodes[index]
				if (maybeChanged !== changeElement && changeElement !== null) {
					parentElement.insertBefore(changeElement,
						maybeChanged || null)
				***REMOVED***
				newCached[index] = cached[change.from]
				newCached.nodes[index] = changeElement
			***REMOVED***
		***REMOVED***)

		return newCached
	***REMOVED***

	function diffKeys(data, cached, existing, parentElement) {
		var keysDiffer = data.length !== cached.length

		if (!keysDiffer) {
			forKeys(data, function (attrs, i) {
				var cachedCell = cached[i]
				return keysDiffer = cachedCell &&
					cachedCell.attrs &&
					cachedCell.attrs.key !== attrs.key
			***REMOVED***)
		***REMOVED***

		if (keysDiffer) {
			return handleKeysDiffer(data, existing, cached, parentElement)
		***REMOVED*** else {
			return cached
		***REMOVED***
	***REMOVED***

	function diffArray(data, cached, nodes) {
		// diff the array itself

		// update the list of DOM nodes by collecting the nodes from each item
		forEach(data, function (_, i) {
			if (cached[i] != null) nodes.push.apply(nodes, cached[i].nodes)
		***REMOVED***)
		// remove items from the end of the array if the new array is shorter
		// than the old one. if errors ever happen here, the issue is most
		// likely a bug in the construction of the `cached` data structure
		// somewhere earlier in the program
		forEach(cached.nodes, function (node, i) {
			if (node.parentNode != null && nodes.indexOf(node) < 0) {
				clear([node], [cached[i]])
			***REMOVED***
		***REMOVED***)

		if (data.length < cached.length) cached.length = data.length
		cached.nodes = nodes
	***REMOVED***

	function buildArrayKeys(data) {
		var guid = 0
		forKeys(data, function () {
			forEach(data, function (attrs) {
				if ((attrs = attrs && attrs.attrs) && attrs.key == null) {
					attrs.key = "__mithril__" + guid++
				***REMOVED***
			***REMOVED***)
			return 1
		***REMOVED***)
	***REMOVED***

	function isDifferentEnough(data, cached, dataAttrKeys) {
		if (data.tag !== cached.tag) return true

		if (dataAttrKeys.sort().join() !==
				Object.keys(cached.attrs).sort().join()) {
			return true
		***REMOVED***

		if (data.attrs.id !== cached.attrs.id) {
			return true
		***REMOVED***

		if (data.attrs.key !== cached.attrs.key) {
			return true
		***REMOVED***

		if (m.redraw.strategy() === "all") {
			return !cached.configContext || cached.configContext.retain !== true
		***REMOVED***

		if (m.redraw.strategy() === "diff") {
			return cached.configContext && cached.configContext.retain === false
		***REMOVED***

		return false
	***REMOVED***

	function maybeRecreateObject(data, cached, dataAttrKeys) {
		// if an element is different enough from the one in cache, recreate it
		if (isDifferentEnough(data, cached, dataAttrKeys)) {
			if (cached.nodes.length) clear(cached.nodes)

			if (cached.configContext &&
					isFunction(cached.configContext.onunload)) {
				cached.configContext.onunload()
			***REMOVED***

			if (cached.controllers) {
				forEach(cached.controllers, function (controller) {
					if (controller.onunload) {
						controller.onunload({preventDefault: noop***REMOVED***)
					***REMOVED***
				***REMOVED***)
			***REMOVED***
		***REMOVED***
	***REMOVED***

	function getObjectNamespace(data, namespace) {
		if (data.attrs.xmlns) return data.attrs.xmlns
		if (data.tag === "svg") return "http://www.w3.org/2000/svg"
		if (data.tag === "math") return "http://www.w3.org/1998/Math/MathML"
		return namespace
	***REMOVED***

	var pendingRequests = 0
	m.startComputation = function () { pendingRequests++ ***REMOVED***
	m.endComputation = function () {
		if (pendingRequests > 1) {
			pendingRequests--
		***REMOVED*** else {
			pendingRequests = 0
			m.redraw()
		***REMOVED***
	***REMOVED***

	function unloadCachedControllers(cached, views, controllers) {
		if (controllers.length) {
			cached.views = views
			cached.controllers = controllers
			forEach(controllers, function (controller) {
				if (controller.onunload && controller.onunload.$old) {
					controller.onunload = controller.onunload.$old
				***REMOVED***

				if (pendingRequests && controller.onunload) {
					var onunload = controller.onunload
					controller.onunload = noop
					controller.onunload.$old = onunload
				***REMOVED***
			***REMOVED***)
		***REMOVED***
	***REMOVED***

	function scheduleConfigsToBeCalled(configs, data, node, isNew, cached) {
		// schedule configs to be called. They are called after `build` finishes
		// running
		if (isFunction(data.attrs.config)) {
			var context = cached.configContext = cached.configContext || {***REMOVED***

			// bind
			configs.push(function () {
				return data.attrs.config.call(data, node, !isNew, context,
					cached)
			***REMOVED***)
		***REMOVED***
	***REMOVED***

	function buildUpdatedNode(
		cached,
		data,
		editable,
		hasKeys,
		namespace,
		views,
		configs,
		controllers
	) {
		var node = cached.nodes[0]

		if (hasKeys) {
			setAttributes(node, data.tag, data.attrs, cached.attrs, namespace)
		***REMOVED***

		cached.children = build(
			node,
			data.tag,
			undefined,
			undefined,
			data.children,
			cached.children,
			false,
			0,
			data.attrs.contenteditable ? node : editable,
			namespace,
			configs
		)

		cached.nodes.intact = true

		if (controllers.length) {
			cached.views = views
			cached.controllers = controllers
		***REMOVED***

		return node
	***REMOVED***

	function handleNonexistentNodes(data, parentElement, index) {
		var nodes
		if (data.$trusted) {
			nodes = injectHTML(parentElement, index, data)
		***REMOVED*** else {
			nodes = [$document.createTextNode(data)]
			if (!(parentElement.nodeName in voidElements)) {
				insertNode(parentElement, nodes[0], index)
			***REMOVED***
		***REMOVED***

		var cached

		if (typeof data === "string" ||
				typeof data === "number" ||
				typeof data === "boolean") {
			cached = new data.constructor(data)
		***REMOVED*** else {
			cached = data
		***REMOVED***

		cached.nodes = nodes
		return cached
	***REMOVED***

	function reattachNodes(
		data,
		cached,
		parentElement,
		editable,
		index,
		parentTag
	) {
		var nodes = cached.nodes
		if (!editable || editable !== $document.activeElement) {
			if (data.$trusted) {
				clear(nodes, cached)
				nodes = injectHTML(parentElement, index, data)
			***REMOVED*** else if (parentTag === "textarea") {
				// <textarea> uses `value` instead of `nodeValue`.
				parentElement.value = data
			***REMOVED*** else if (editable) {
				// contenteditable nodes use `innerHTML` instead of `nodeValue`.
				editable.innerHTML = data
			***REMOVED*** else {
				// was a trusted string
				if (nodes[0].nodeType === 1 || nodes.length > 1 ||
						(nodes[0].nodeValue.trim &&
							!nodes[0].nodeValue.trim())) {
					clear(cached.nodes, cached)
					nodes = [$document.createTextNode(data)]
				***REMOVED***

				injectTextNode(parentElement, nodes[0], index, data)
			***REMOVED***
		***REMOVED***
		cached = new data.constructor(data)
		cached.nodes = nodes
		return cached
	***REMOVED***

	function handleTextNode(
		cached,
		data,
		index,
		parentElement,
		shouldReattach,
		editable,
		parentTag
	) {
		if (!cached.nodes.length) {
			return handleNonexistentNodes(data, parentElement, index)
		***REMOVED*** else if (cached.valueOf() !== data.valueOf() || shouldReattach) {
			return reattachNodes(data, cached, parentElement, editable, index,
				parentTag)
		***REMOVED*** else {
			return (cached.nodes.intact = true, cached)
		***REMOVED***
	***REMOVED***

	function getSubArrayCount(item) {
		if (item.$trusted) {
			// fix offset of next element if item was a trusted string w/ more
			// than one html element
			// the first clause in the regexp matches elements
			// the second clause (after the pipe) matches text nodes
			var match = item.match(/<[^\/]|\>\s*[^<]/g)
			if (match != null) return match.length
		***REMOVED*** else if (isArray(item)) {
			return item.length
		***REMOVED***
		return 1
	***REMOVED***

	function buildArray(
		data,
		cached,
		parentElement,
		index,
		parentTag,
		shouldReattach,
		editable,
		namespace,
		configs
	) {
		data = flatten(data)
		var nodes = []
		var intact = cached.length === data.length
		var subArrayCount = 0

		// keys algorithm: sort elements without recreating them if keys are
		// present
		//
		// 1) create a map of all existing keys, and mark all for deletion
		// 2) add new keys to map and mark them for addition
		// 3) if key exists in new list, change action from deletion to a move
		// 4) for each key, handle its corresponding action as marked in
		//    previous steps

		var existing = {***REMOVED***
		var shouldMaintainIdentities = false

		forKeys(cached, function (attrs, i) {
			shouldMaintainIdentities = true
			existing[cached[i].attrs.key] = {action: DELETION, index: i***REMOVED***
		***REMOVED***)

		buildArrayKeys(data)
		if (shouldMaintainIdentities) {
			cached = diffKeys(data, cached, existing, parentElement)
		***REMOVED***
		// end key algorithm

		var cacheCount = 0
		// faster explicitly written
		for (var i = 0, len = data.length; i < len; i++) {
			// diff each item in the array
			var item = build(
				parentElement,
				parentTag,
				cached,
				index,
				data[i],
				cached[cacheCount],
				shouldReattach,
				index + subArrayCount || subArrayCount,
				editable,
				namespace,
				configs)

			if (item !== undefined) {
				intact = intact && item.nodes.intact
				subArrayCount += getSubArrayCount(item)
				cached[cacheCount++] = item
			***REMOVED***
		***REMOVED***

		if (!intact) diffArray(data, cached, nodes)
		return cached
	***REMOVED***

	function makeCache(data, cached, index, parentIndex, parentCache) {
		if (cached != null) {
			if (type.call(cached) === type.call(data)) return cached

			if (parentCache && parentCache.nodes) {
				var offset = index - parentIndex
				var end = offset + (isArray(data) ? data : cached.nodes).length
				clear(
					parentCache.nodes.slice(offset, end),
					parentCache.slice(offset, end))
			***REMOVED*** else if (cached.nodes) {
				clear(cached.nodes, cached)
			***REMOVED***
		***REMOVED***

		cached = new data.constructor()
		// if constructor creates a virtual dom element, use a blank object as
		// the base cached node instead of copying the virtual el (#277)
		if (cached.tag) cached = {***REMOVED***
		cached.nodes = []
		return cached
	***REMOVED***

	function constructNode(data, namespace) {
		if (data.attrs.is) {
			if (namespace == null) {
				return $document.createElement(data.tag, data.attrs.is)
			***REMOVED*** else {
				return $document.createElementNS(namespace, data.tag,
					data.attrs.is)
			***REMOVED***
		***REMOVED*** else if (namespace == null) {
			return $document.createElement(data.tag)
		***REMOVED*** else {
			return $document.createElementNS(namespace, data.tag)
		***REMOVED***
	***REMOVED***

	function constructAttrs(data, node, namespace, hasKeys) {
		if (hasKeys) {
			return setAttributes(node, data.tag, data.attrs, {***REMOVED***, namespace)
		***REMOVED*** else {
			return data.attrs
		***REMOVED***
	***REMOVED***

	function constructChildren(
		data,
		node,
		cached,
		editable,
		namespace,
		configs
	) {
		if (data.children != null && data.children.length > 0) {
			return build(
				node,
				data.tag,
				undefined,
				undefined,
				data.children,
				cached.children,
				true,
				0,
				data.attrs.contenteditable ? node : editable,
				namespace,
				configs)
		***REMOVED*** else {
			return data.children
		***REMOVED***
	***REMOVED***

	function reconstructCached(
		data,
		attrs,
		children,
		node,
		namespace,
		views,
		controllers
	) {
		var cached = {
			tag: data.tag,
			attrs: attrs,
			children: children,
			nodes: [node]
		***REMOVED***

		unloadCachedControllers(cached, views, controllers)

		if (cached.children && !cached.children.nodes) {
			cached.children.nodes = []
		***REMOVED***

		// edge case: setting value on <select> doesn't work before children
		// exist, so set it again after children have been created
		if (data.tag === "select" && "value" in data.attrs) {
			setAttributes(node, data.tag, {value: data.attrs.value***REMOVED***, {***REMOVED***,
				namespace)
		***REMOVED***

		return cached
	***REMOVED***

	function getController(views, view, cachedControllers, controller) {
		var controllerIndex

		if (m.redraw.strategy() === "diff" && views) {
			controllerIndex = views.indexOf(view)
		***REMOVED*** else {
			controllerIndex = -1
		***REMOVED***

		if (controllerIndex > -1) {
			return cachedControllers[controllerIndex]
		***REMOVED*** else if (isFunction(controller)) {
			return new controller()
		***REMOVED*** else {
			return {***REMOVED***
		***REMOVED***
	***REMOVED***

	var unloaders = []

	function updateLists(views, controllers, view, controller) {
		if (controller.onunload != null &&
				unloaders.map(function (u) { return u.handler ***REMOVED***)
					.indexOf(controller.onunload) < 0) {
			unloaders.push({
				controller: controller,
				handler: controller.onunload
			***REMOVED***)
		***REMOVED***

		views.push(view)
		controllers.push(controller)
	***REMOVED***

	var forcing = false
	function checkView(
		data,
		view,
		cached,
		cachedControllers,
		controllers,
		views
	) {
		var controller = getController(
			cached.views,
			view,
			cachedControllers,
			data.controller)

		var key = data && data.attrs && data.attrs.key

		if (pendingRequests === 0 ||
				forcing ||
				cachedControllers &&
					cachedControllers.indexOf(controller) > -1) {
			data = data.view(controller)
		***REMOVED*** else {
			data = {tag: "placeholder"***REMOVED***
		***REMOVED***

		if (data.subtree === "retain") return data
		data.attrs = data.attrs || {***REMOVED***
		data.attrs.key = key
		updateLists(views, controllers, view, controller)
		return data
	***REMOVED***

	function markViews(data, cached, views, controllers) {
		var cachedControllers = cached && cached.controllers

		while (data.view != null) {
			data = checkView(
				data,
				data.view.$original || data.view,
				cached,
				cachedControllers,
				controllers,
				views)
		***REMOVED***

		return data
	***REMOVED***

	function buildObject( // eslint-disable-line max-statements
		data,
		cached,
		editable,
		parentElement,
		index,
		shouldReattach,
		namespace,
		configs
	) {
		var views = []
		var controllers = []

		data = markViews(data, cached, views, controllers)

		if (data.subtree === "retain") return cached

		if (!data.tag && controllers.length) {
			throw new Error("Component template must return a virtual " +
				"element, not an array, string, etc.")
		***REMOVED***

		data.attrs = data.attrs || {***REMOVED***
		cached.attrs = cached.attrs || {***REMOVED***

		var dataAttrKeys = Object.keys(data.attrs)
		var hasKeys = dataAttrKeys.length > ("key" in data.attrs ? 1 : 0)

		maybeRecreateObject(data, cached, dataAttrKeys)

		if (!isString(data.tag)) return

		var isNew = cached.nodes.length === 0

		namespace = getObjectNamespace(data, namespace)

		var node
		if (isNew) {
			node = constructNode(data, namespace)
			// set attributes first, then create children
			var attrs = constructAttrs(data, node, namespace, hasKeys)

			// add the node to its parent before attaching children to it
			insertNode(parentElement, node, index)

			var children = constructChildren(data, node, cached, editable,
				namespace, configs)

			cached = reconstructCached(
				data,
				attrs,
				children,
				node,
				namespace,
				views,
				controllers)
		***REMOVED*** else {
			node = buildUpdatedNode(
				cached,
				data,
				editable,
				hasKeys,
				namespace,
				views,
				configs,
				controllers)
		***REMOVED***

		if (!isNew && shouldReattach === true && node != null) {
			insertNode(parentElement, node, index)
		***REMOVED***

		// The configs are called after `build` finishes running
		scheduleConfigsToBeCalled(configs, data, node, isNew, cached)

		return cached
	***REMOVED***

	function build(
		parentElement,
		parentTag,
		parentCache,
		parentIndex,
		data,
		cached,
		shouldReattach,
		index,
		editable,
		namespace,
		configs
	) {
		/*
		 * `build` is a recursive function that manages creation/diffing/removal
		 * of DOM elements based on comparison between `data` and `cached` the
		 * diff algorithm can be summarized as this:
		 *
		 * 1 - compare `data` and `cached`
		 * 2 - if they are different, copy `data` to `cached` and update the DOM
		 *     based on what the difference is
		 * 3 - recursively apply this algorithm for every array and for the
		 *     children of every virtual element
		 *
		 * The `cached` data structure is essentially the same as the previous
		 * redraw's `data` data structure, with a few additions:
		 * - `cached` always has a property called `nodes`, which is a list of
		 *    DOM elements that correspond to the data represented by the
		 *    respective virtual element
		 * - in order to support attaching `nodes` as a property of `cached`,
		 *    `cached` is *always* a non-primitive object, i.e. if the data was
		 *    a string, then cached is a String instance. If data was `null` or
		 *    `undefined`, cached is `new String("")`
		 * - `cached also has a `configContext` property, which is the state
		 *    storage object exposed by config(element, isInitialized, context)
		 * - when `cached` is an Object, it represents a virtual element; when
		 *    it's an Array, it represents a list of elements; when it's a
		 *    String, Number or Boolean, it represents a text node
		 *
		 * `parentElement` is a DOM element used for W3C DOM API calls
		 * `parentTag` is only used for handling a corner case for textarea
		 * values
		 * `parentCache` is used to remove nodes in some multi-node cases
		 * `parentIndex` and `index` are used to figure out the offset of nodes.
		 * They're artifacts from before arrays started being flattened and are
		 * likely refactorable
		 * `data` and `cached` are, respectively, the new and old nodes being
		 * diffed
		 * `shouldReattach` is a flag indicating whether a parent node was
		 * recreated (if so, and if this node is reused, then this node must
		 * reattach itself to the new parent)
		 * `editable` is a flag that indicates whether an ancestor is
		 * contenteditable
		 * `namespace` indicates the closest HTML namespace as it cascades down
		 * from an ancestor
		 * `configs` is a list of config functions to run after the topmost
		 * `build` call finishes running
		 *
		 * there's logic that relies on the assumption that null and undefined
		 * data are equivalent to empty strings
		 * - this prevents lifecycle surprises from procedural helpers that mix
		 *   implicit and explicit return statements (e.g.
		 *   function foo() {if (cond) return m("div")***REMOVED***
		 * - it simplifies diffing code
		 */
		data = dataToString(data)
		if (data.subtree === "retain") return cached
		cached = makeCache(data, cached, index, parentIndex, parentCache)

		if (isArray(data)) {
			return buildArray(
				data,
				cached,
				parentElement,
				index,
				parentTag,
				shouldReattach,
				editable,
				namespace,
				configs)
		***REMOVED*** else if (data != null && isObject(data)) {
			return buildObject(
				data,
				cached,
				editable,
				parentElement,
				index,
				shouldReattach,
				namespace,
				configs)
		***REMOVED*** else if (!isFunction(data)) {
			return handleTextNode(
				cached,
				data,
				index,
				parentElement,
				shouldReattach,
				editable,
				parentTag)
		***REMOVED*** else {
			return cached
		***REMOVED***
	***REMOVED***

	function sortChanges(a, b) {
		return a.action - b.action || a.index - b.index
	***REMOVED***

	function copyStyleAttrs(node, dataAttr, cachedAttr) {
		for (var rule in dataAttr) {
			if (hasOwn.call(dataAttr, rule)) {
				if (cachedAttr == null || cachedAttr[rule] !== dataAttr[rule]) {
					node.style[rule] = dataAttr[rule]
				***REMOVED***
			***REMOVED***
		***REMOVED***

		for (rule in cachedAttr) {
			if (hasOwn.call(cachedAttr, rule)) {
				if (!hasOwn.call(dataAttr, rule)) node.style[rule] = ""
			***REMOVED***
		***REMOVED***
	***REMOVED***

	var shouldUseSetAttribute = {
		list: 1,
		style: 1,
		form: 1,
		type: 1,
		width: 1,
		height: 1
	***REMOVED***

	function setSingleAttr(
		node,
		attrName,
		dataAttr,
		cachedAttr,
		tag,
		namespace
	) {
		if (attrName === "config" || attrName === "key") {
			// `config` isn't a real attribute, so ignore it
			return true
		***REMOVED*** else if (isFunction(dataAttr) && attrName.slice(0, 2) === "on") {
			// hook event handlers to the auto-redrawing system
			node[attrName] = autoredraw(dataAttr, node)
		***REMOVED*** else if (attrName === "style" && dataAttr != null &&
				isObject(dataAttr)) {
			// handle `style: {...***REMOVED***`
			copyStyleAttrs(node, dataAttr, cachedAttr)
		***REMOVED*** else if (namespace != null) {
			// handle SVG
			if (attrName === "href") {
				node.setAttributeNS("http://www.w3.org/1999/xlink",
					"href", dataAttr)
			***REMOVED*** else {
				node.setAttribute(
					attrName === "className" ? "class" : attrName,
					dataAttr)
			***REMOVED***
		***REMOVED*** else if (attrName in node && !shouldUseSetAttribute[attrName]) {
			// handle cases that are properties (but ignore cases where we
			// should use setAttribute instead)
			//
			// - list and form are typically used as strings, but are DOM
			//   element references in js
			//
			// - when using CSS selectors (e.g. `m("[style='']")`), style is
			//   used as a string, but it's an object in js
			//
			// #348 don't set the value if not needed - otherwise, cursor
			// placement breaks in Chrome
			try {
				if (tag !== "input" || node[attrName] !== dataAttr) {
					node[attrName] = dataAttr
				***REMOVED***
			***REMOVED*** catch (e) {
				node.setAttribute(attrName, dataAttr)
			***REMOVED***
		***REMOVED***
		else node.setAttribute(attrName, dataAttr)
	***REMOVED***

	function trySetAttr(
		node,
		attrName,
		dataAttr,
		cachedAttr,
		cachedAttrs,
		tag,
		namespace
	) {
		if (!(attrName in cachedAttrs) || (cachedAttr !== dataAttr) || ($document.activeElement === node)) {
			cachedAttrs[attrName] = dataAttr
			try {
				return setSingleAttr(
					node,
					attrName,
					dataAttr,
					cachedAttr,
					tag,
					namespace)
			***REMOVED*** catch (e) {
				// swallow IE's invalid argument errors to mimic HTML's
				// fallback-to-doing-nothing-on-invalid-attributes behavior
				if (e.message.indexOf("Invalid argument") < 0) throw e
			***REMOVED***
		***REMOVED*** else if (attrName === "value" && tag === "input" &&
				node.value !== dataAttr) {
			// #348 dataAttr may not be a string, so use loose comparison
			node.value = dataAttr
		***REMOVED***
	***REMOVED***

	function setAttributes(node, tag, dataAttrs, cachedAttrs, namespace) {
		for (var attrName in dataAttrs) {
			if (hasOwn.call(dataAttrs, attrName)) {
				if (trySetAttr(
						node,
						attrName,
						dataAttrs[attrName],
						cachedAttrs[attrName],
						cachedAttrs,
						tag,
						namespace)) {
					continue
				***REMOVED***
			***REMOVED***
		***REMOVED***
		return cachedAttrs
	***REMOVED***

	function clear(nodes, cached) {
		for (var i = nodes.length - 1; i > -1; i--) {
			if (nodes[i] && nodes[i].parentNode) {
				try {
					nodes[i].parentNode.removeChild(nodes[i])
				***REMOVED*** catch (e) {
					/* eslint-disable max-len */
					// ignore if this fails due to order of events (see
					// http://stackoverflow.com/questions/21926083/failed-to-execute-removechild-on-node)
					/* eslint-enable max-len */
				***REMOVED***
				cached = [].concat(cached)
				if (cached[i]) unload(cached[i])
			***REMOVED***
		***REMOVED***
		// release memory if nodes is an array. This check should fail if nodes
		// is a NodeList (see loop above)
		if (nodes.length) {
			nodes.length = 0
		***REMOVED***
	***REMOVED***

	function unload(cached) {
		if (cached.configContext && isFunction(cached.configContext.onunload)) {
			cached.configContext.onunload()
			cached.configContext.onunload = null
		***REMOVED***
		if (cached.controllers) {
			forEach(cached.controllers, function (controller) {
				if (isFunction(controller.onunload)) {
					controller.onunload({preventDefault: noop***REMOVED***)
				***REMOVED***
			***REMOVED***)
		***REMOVED***
		if (cached.children) {
			if (isArray(cached.children)) forEach(cached.children, unload)
			else if (cached.children.tag) unload(cached.children)
		***REMOVED***
	***REMOVED***

	function appendTextFragment(parentElement, data) {
		try {
			parentElement.appendChild(
				$document.createRange().createContextualFragment(data))
		***REMOVED*** catch (e) {
			parentElement.insertAdjacentHTML("beforeend", data)
			replaceScriptNodes(parentElement)
		***REMOVED***
	***REMOVED***

	// Replace script tags inside given DOM element with executable ones.
	// Will also check children recursively and replace any found script
	// tags in same manner.
	function replaceScriptNodes(node) {
		if (node.tagName === "SCRIPT") {
			node.parentNode.replaceChild(buildExecutableNode(node), node)
		***REMOVED*** else {
			var children = node.childNodes
			if (children && children.length) {
				for (var i = 0; i < children.length; i++) {
					replaceScriptNodes(children[i])
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return node
	***REMOVED***

	// Replace script element with one whose contents are executable.
	function buildExecutableNode(node){
		var scriptEl = document.createElement("script")
		var attrs = node.attributes

		for (var i = 0; i < attrs.length; i++) {
			scriptEl.setAttribute(attrs[i].name, attrs[i].value)
		***REMOVED***

		scriptEl.text = node.innerHTML
		return scriptEl
	***REMOVED***

	function injectHTML(parentElement, index, data) {
		var nextSibling = parentElement.childNodes[index]
		if (nextSibling) {
			var isElement = nextSibling.nodeType !== 1
			var placeholder = $document.createElement("span")
			if (isElement) {
				parentElement.insertBefore(placeholder, nextSibling || null)
				placeholder.insertAdjacentHTML("beforebegin", data)
				parentElement.removeChild(placeholder)
			***REMOVED*** else {
				nextSibling.insertAdjacentHTML("beforebegin", data)
			***REMOVED***
		***REMOVED*** else {
			appendTextFragment(parentElement, data)
		***REMOVED***

		var nodes = []

		while (parentElement.childNodes[index] !== nextSibling) {
			nodes.push(parentElement.childNodes[index])
			index++
		***REMOVED***

		return nodes
	***REMOVED***

	function autoredraw(callback, object) {
		return function (e) {
			e = e || event
			m.redraw.strategy("diff")
			m.startComputation()
			try {
				return callback.call(object, e)
			***REMOVED*** finally {
				endFirstComputation()
			***REMOVED***
		***REMOVED***
	***REMOVED***

	var html
	var documentNode = {
		appendChild: function (node) {
			if (html === undefined) html = $document.createElement("html")
			if ($document.documentElement &&
					$document.documentElement !== node) {
				$document.replaceChild(node, $document.documentElement)
			***REMOVED*** else {
				$document.appendChild(node)
			***REMOVED***

			this.childNodes = $document.childNodes
		***REMOVED***,

		insertBefore: function (node) {
			this.appendChild(node)
		***REMOVED***,

		childNodes: []
	***REMOVED***

	var nodeCache = []
	var cellCache = {***REMOVED***

	m.render = function (root, cell, forceRecreation) {
		if (!root) {
			throw new Error("Ensure the DOM element being passed to " +
				"m.route/m.mount/m.render is not undefined.")
		***REMOVED***
		var configs = []
		var id = getCellCacheKey(root)
		var isDocumentRoot = root === $document
		var node

		if (isDocumentRoot || root === $document.documentElement) {
			node = documentNode
		***REMOVED*** else {
			node = root
		***REMOVED***

		if (isDocumentRoot && cell.tag !== "html") {
			cell = {tag: "html", attrs: {***REMOVED***, children: cell***REMOVED***
		***REMOVED***

		if (cellCache[id] === undefined) clear(node.childNodes)
		if (forceRecreation === true) reset(root)

		cellCache[id] = build(
			node,
			null,
			undefined,
			undefined,
			cell,
			cellCache[id],
			false,
			0,
			null,
			undefined,
			configs)

		forEach(configs, function (config) { config() ***REMOVED***)
	***REMOVED***

	function getCellCacheKey(element) {
		var index = nodeCache.indexOf(element)
		return index < 0 ? nodeCache.push(element) - 1 : index
	***REMOVED***

	m.trust = function (value) {
		value = new String(value) // eslint-disable-line no-new-wrappers
		value.$trusted = true
		return value
	***REMOVED***

	function gettersetter(store) {
		function prop() {
			if (arguments.length) store = arguments[0]
			return store
		***REMOVED***

		prop.toJSON = function () {
			return store
		***REMOVED***

		return prop
	***REMOVED***

	m.prop = function (store) {
		if ((store != null && (isObject(store) || isFunction(store)) || ((typeof Promise !== "undefined") && (store instanceof Promise))) &&
				isFunction(store.then)) {
			return propify(store)
		***REMOVED***

		return gettersetter(store)
	***REMOVED***

	var roots = []
	var components = []
	var controllers = []
	var lastRedrawId = null
	var lastRedrawCallTime = 0
	var computePreRedrawHook = null
	var computePostRedrawHook = null
	var topComponent
	var FRAME_BUDGET = 16 // 60 frames per second = 1 call per 16 ms

	function parameterize(component, args) {
		function controller() {
			/* eslint-disable no-invalid-this */
			return (component.controller || noop).apply(this, args) || this
			/* eslint-enable no-invalid-this */
		***REMOVED***

		if (component.controller) {
			controller.prototype = component.controller.prototype
		***REMOVED***

		function view(ctrl) {
			var currentArgs = [ctrl].concat(args)
			for (var i = 1; i < arguments.length; i++) {
				currentArgs.push(arguments[i])
			***REMOVED***

			return component.view.apply(component, currentArgs)
		***REMOVED***

		view.$original = component.view
		var output = {controller: controller, view: view***REMOVED***
		if (args[0] && args[0].key != null) output.attrs = {key: args[0].key***REMOVED***
		return output
	***REMOVED***

	m.component = function (component) {
		var args = new Array(arguments.length - 1)

		for (var i = 1; i < arguments.length; i++) {
			args[i - 1] = arguments[i]
		***REMOVED***

		return parameterize(component, args)
	***REMOVED***

	function checkPrevented(component, root, index, isPrevented) {
		if (!isPrevented) {
			m.redraw.strategy("all")
			m.startComputation()
			roots[index] = root
			var currentComponent

			if (component) {
				currentComponent = topComponent = component
			***REMOVED*** else {
				currentComponent = topComponent = component = {controller: noop***REMOVED***
			***REMOVED***

			var controller = new (component.controller || noop)()

			// controllers may call m.mount recursively (via m.route redirects,
			// for example)
			// this conditional ensures only the last recursive m.mount call is
			// applied
			if (currentComponent === topComponent) {
				controllers[index] = controller
				components[index] = component
			***REMOVED***
			endFirstComputation()
			if (component === null) {
				removeRootElement(root, index)
			***REMOVED***
			return controllers[index]
		***REMOVED*** else if (component == null) {
			removeRootElement(root, index)
		***REMOVED***
	***REMOVED***

	m.mount = m.module = function (root, component) {
		if (!root) {
			throw new Error("Please ensure the DOM element exists before " +
				"rendering a template into it.")
		***REMOVED***

		var index = roots.indexOf(root)
		if (index < 0) index = roots.length

		var isPrevented = false
		var event = {
			preventDefault: function () {
				isPrevented = true
				computePreRedrawHook = computePostRedrawHook = null
			***REMOVED***
		***REMOVED***

		forEach(unloaders, function (unloader) {
			unloader.handler.call(unloader.controller, event)
			unloader.controller.onunload = null
		***REMOVED***)

		if (isPrevented) {
			forEach(unloaders, function (unloader) {
				unloader.controller.onunload = unloader.handler
			***REMOVED***)
		***REMOVED*** else {
			unloaders = []
		***REMOVED***

		if (controllers[index] && isFunction(controllers[index].onunload)) {
			controllers[index].onunload(event)
		***REMOVED***

		return checkPrevented(component, root, index, isPrevented)
	***REMOVED***

	function removeRootElement(root, index) {
		roots.splice(index, 1)
		controllers.splice(index, 1)
		components.splice(index, 1)
		reset(root)
		nodeCache.splice(getCellCacheKey(root), 1)
	***REMOVED***

	var redrawing = false
	m.redraw = function (force) {
		if (redrawing) return
		redrawing = true
		if (force) forcing = true

		try {
			// lastRedrawId is a positive number if a second redraw is requested
			// before the next animation frame
			// lastRedrawId is null if it's the first redraw and not an event
			// handler
			if (lastRedrawId && !force) {
				// when setTimeout: only reschedule redraw if time between now
				// and previous redraw is bigger than a frame, otherwise keep
				// currently scheduled timeout
				// when rAF: always reschedule redraw
				if ($requestAnimationFrame === global.requestAnimationFrame ||
						new Date() - lastRedrawCallTime > FRAME_BUDGET) {
					if (lastRedrawId > 0) $cancelAnimationFrame(lastRedrawId)
					lastRedrawId = $requestAnimationFrame(redraw, FRAME_BUDGET)
				***REMOVED***
			***REMOVED*** else {
				redraw()
				lastRedrawId = $requestAnimationFrame(function () {
					lastRedrawId = null
				***REMOVED***, FRAME_BUDGET)
			***REMOVED***
		***REMOVED*** finally {
			redrawing = forcing = false
		***REMOVED***
	***REMOVED***

	m.redraw.strategy = m.prop()
	function redraw() {
		if (computePreRedrawHook) {
			computePreRedrawHook()
			computePreRedrawHook = null
		***REMOVED***
		forEach(roots, function (root, i) {
			var component = components[i]
			if (controllers[i]) {
				var args = [controllers[i]]
				m.render(root,
					component.view ? component.view(controllers[i], args) : "")
			***REMOVED***
		***REMOVED***)
		// after rendering within a routed context, we need to scroll back to
		// the top, and fetch the document title for history.pushState
		if (computePostRedrawHook) {
			computePostRedrawHook()
			computePostRedrawHook = null
		***REMOVED***
		lastRedrawId = null
		lastRedrawCallTime = new Date()
		m.redraw.strategy("diff")
	***REMOVED***

	function endFirstComputation() {
		if (m.redraw.strategy() === "none") {
			pendingRequests--
			m.redraw.strategy("diff")
		***REMOVED*** else {
			m.endComputation()
		***REMOVED***
	***REMOVED***

	m.withAttr = function (prop, withAttrCallback, callbackThis) {
		return function (e) {
			e = e || window.event
			/* eslint-disable no-invalid-this */
			var currentTarget = e.currentTarget || this
			var _this = callbackThis || this
			/* eslint-enable no-invalid-this */
			var target = prop in currentTarget ?
				currentTarget[prop] :
				currentTarget.getAttribute(prop)
			withAttrCallback.call(_this, target)
		***REMOVED***
	***REMOVED***

	// routing
	var modes = {pathname: "", hash: "#", search: "?"***REMOVED***
	var redirect = noop
	var isDefaultRoute = false
	var routeParams, currentRoute

	m.route = function (root, arg1, arg2, vdom) { // eslint-disable-line
		// m.route()
		if (arguments.length === 0) return currentRoute
		// m.route(el, defaultRoute, routes)
		if (arguments.length === 3 && isString(arg1)) {
			redirect = function (source) {
				var path = currentRoute = normalizeRoute(source)
				if (!routeByValue(root, arg2, path)) {
					if (isDefaultRoute) {
						throw new Error("Ensure the default route matches " +
							"one of the routes defined in m.route")
					***REMOVED***

					isDefaultRoute = true
					m.route(arg1, true)
					isDefaultRoute = false
				***REMOVED***
			***REMOVED***

			var listener = m.route.mode === "hash" ?
				"onhashchange" :
				"onpopstate"

			global[listener] = function () {
				var path = $location[m.route.mode]
				if (m.route.mode === "pathname") path += $location.search
				if (currentRoute !== normalizeRoute(path)) redirect(path)
			***REMOVED***

			computePreRedrawHook = setScroll
			global[listener]()

			return
		***REMOVED***

		// config: m.route
		if (root.addEventListener || root.attachEvent) {
			var base = m.route.mode !== "pathname" ? $location.pathname : ""
			root.href = base + modes[m.route.mode] + vdom.attrs.href
			if (root.addEventListener) {
				root.removeEventListener("click", routeUnobtrusive)
				root.addEventListener("click", routeUnobtrusive)
			***REMOVED*** else {
				root.detachEvent("onclick", routeUnobtrusive)
				root.attachEvent("onclick", routeUnobtrusive)
			***REMOVED***

			return
		***REMOVED***
		// m.route(route, params, shouldReplaceHistoryEntry)
		if (isString(root)) {
			var oldRoute = currentRoute
			currentRoute = root

			var args = arg1 || {***REMOVED***
			var queryIndex = currentRoute.indexOf("?")
			var params

			if (queryIndex > -1) {
				params = parseQueryString(currentRoute.slice(queryIndex + 1))
			***REMOVED*** else {
				params = {***REMOVED***
			***REMOVED***

			for (var i in args) {
				if (hasOwn.call(args, i)) {
					params[i] = args[i]
				***REMOVED***
			***REMOVED***

			var querystring = buildQueryString(params)
			var currentPath

			if (queryIndex > -1) {
				currentPath = currentRoute.slice(0, queryIndex)
			***REMOVED*** else {
				currentPath = currentRoute
			***REMOVED***

			if (querystring) {
				currentRoute = currentPath +
					(currentPath.indexOf("?") === -1 ? "?" : "&") +
					querystring
			***REMOVED***

			var replaceHistory =
				(arguments.length === 3 ? arg2 : arg1) === true ||
				oldRoute === root

			if (global.history.pushState) {
				var method = replaceHistory ? "replaceState" : "pushState"
				computePreRedrawHook = setScroll
				computePostRedrawHook = function () {
					try {
						global.history[method](null, $document.title,
							modes[m.route.mode] + currentRoute)
					***REMOVED*** catch (err) {
						// In the event of a pushState or replaceState failure,
						// fallback to a standard redirect. This is specifically
						// to address a Safari security error when attempting to
						// call pushState more than 100 times.
						$location[m.route.mode] = currentRoute
					***REMOVED***
				***REMOVED***
				redirect(modes[m.route.mode] + currentRoute)
			***REMOVED*** else {
				$location[m.route.mode] = currentRoute
				redirect(modes[m.route.mode] + currentRoute)
			***REMOVED***
		***REMOVED***
	***REMOVED***

	m.route.param = function (key) {
		if (!routeParams) {
			throw new Error("You must call m.route(element, defaultRoute, " +
				"routes) before calling m.route.param()")
		***REMOVED***

		if (!key) {
			return routeParams
		***REMOVED***

		return routeParams[key]
	***REMOVED***

	m.route.mode = "search"

	function normalizeRoute(route) {
		return route.slice(modes[m.route.mode].length)
	***REMOVED***

	function routeByValue(root, router, path) {
		routeParams = {***REMOVED***

		var queryStart = path.indexOf("?")
		if (queryStart !== -1) {
			routeParams = parseQueryString(
				path.substr(queryStart + 1, path.length))
			path = path.substr(0, queryStart)
		***REMOVED***

		// Get all routes and check if there's
		// an exact match for the current path
		var keys = Object.keys(router)
		var index = keys.indexOf(path)

		if (index !== -1){
			m.mount(root, router[keys [index]])
			return true
		***REMOVED***

		for (var route in router) {
			if (hasOwn.call(router, route)) {
				if (route === path) {
					m.mount(root, router[route])
					return true
				***REMOVED***

				var matcher = new RegExp("^" + route
					.replace(/:[^\/]+?\.{3***REMOVED***/g, "(.*?)")
					.replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")

				if (matcher.test(path)) {
					/* eslint-disable no-loop-func */
					path.replace(matcher, function () {
						var keys = route.match(/:[^\/]+/g) || []
						var values = [].slice.call(arguments, 1, -2)
						forEach(keys, function (key, i) {
							routeParams[key.replace(/:|\./g, "")] =
								decodeURIComponent(values[i])
						***REMOVED***)
						m.mount(root, router[route])
					***REMOVED***)
					/* eslint-enable no-loop-func */
					return true
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	function routeUnobtrusive(e) {
		e = e || event
		if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return

		if (e.preventDefault) {
			e.preventDefault()
		***REMOVED*** else {
			e.returnValue = false
		***REMOVED***

		var currentTarget = e.currentTarget || e.srcElement
		var args

		if (m.route.mode === "pathname" && currentTarget.search) {
			args = parseQueryString(currentTarget.search.slice(1))
		***REMOVED*** else {
			args = {***REMOVED***
		***REMOVED***

		while (currentTarget && !/a/i.test(currentTarget.nodeName)) {
			currentTarget = currentTarget.parentNode
		***REMOVED***

		// clear pendingRequests because we want an immediate route change
		pendingRequests = 0
		m.route(currentTarget[m.route.mode]
			.slice(modes[m.route.mode].length), args)
	***REMOVED***

	function setScroll() {
		if (m.route.mode !== "hash" && $location.hash) {
			$location.hash = $location.hash
		***REMOVED*** else {
			global.scrollTo(0, 0)
		***REMOVED***
	***REMOVED***

	function buildQueryString(object, prefix) {
		var duplicates = {***REMOVED***
		var str = []

		for (var prop in object) {
			if (hasOwn.call(object, prop)) {
				var key = prefix ? prefix + "[" + prop + "]" : prop
				var value = object[prop]

				if (value === null) {
					str.push(encodeURIComponent(key))
				***REMOVED*** else if (isObject(value)) {
					str.push(buildQueryString(value, key))
				***REMOVED*** else if (isArray(value)) {
					var keys = []
					duplicates[key] = duplicates[key] || {***REMOVED***
					/* eslint-disable no-loop-func */
					forEach(value, function (item) {
						/* eslint-enable no-loop-func */
						if (!duplicates[key][item]) {
							duplicates[key][item] = true
							keys.push(encodeURIComponent(key) + "=" +
								encodeURIComponent(item))
						***REMOVED***
					***REMOVED***)
					str.push(keys.join("&"))
				***REMOVED*** else if (value !== undefined) {
					str.push(encodeURIComponent(key) + "=" +
						encodeURIComponent(value))
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return str.join("&")
	***REMOVED***

	function parseQueryString(str) {
		if (str === "" || str == null) return {***REMOVED***
		if (str.charAt(0) === "?") str = str.slice(1)

		var pairs = str.split("&")
		var params = {***REMOVED***

		forEach(pairs, function (string) {
			var pair = string.split("=")
			var key = decodeURIComponent(pair[0])
			var value = pair.length === 2 ? decodeURIComponent(pair[1]) : null
			if (params[key] != null) {
				if (!isArray(params[key])) params[key] = [params[key]]
				params[key].push(value)
			***REMOVED***
			else params[key] = value
		***REMOVED***)

		return params
	***REMOVED***

	m.route.buildQueryString = buildQueryString
	m.route.parseQueryString = parseQueryString

	function reset(root) {
		var cacheKey = getCellCacheKey(root)
		clear(root.childNodes, cellCache[cacheKey])
		cellCache[cacheKey] = undefined
	***REMOVED***

	m.deferred = function () {
		var deferred = new Deferred()
		deferred.promise = propify(deferred.promise)
		return deferred
	***REMOVED***

	function propify(promise, initialValue) {
		var prop = m.prop(initialValue)
		promise.then(prop)
		prop.then = function (resolve, reject) {
			return propify(promise.then(resolve, reject), initialValue)
		***REMOVED***

		prop.catch = prop.then.bind(null, null)
		return prop
	***REMOVED***
	// Promiz.mithril.js | Zolmeister | MIT
	// a modified version of Promiz.js, which does not conform to Promises/A+
	// for two reasons:
	//
	// 1) `then` callbacks are called synchronously (because setTimeout is too
	//    slow, and the setImmediate polyfill is too big
	//
	// 2) throwing subclasses of Error cause the error to be bubbled up instead
	//    of triggering rejection (because the spec does not account for the
	//    important use case of default browser error handling, i.e. message w/
	//    line number)

	var RESOLVING = 1
	var REJECTING = 2
	var RESOLVED = 3
	var REJECTED = 4

	function Deferred(onSuccess, onFailure) {
		var self = this
		var state = 0
		var promiseValue = 0
		var next = []

		self.promise = {***REMOVED***

		self.resolve = function (value) {
			if (!state) {
				promiseValue = value
				state = RESOLVING

				fire()
			***REMOVED***

			return self
		***REMOVED***

		self.reject = function (value) {
			if (!state) {
				promiseValue = value
				state = REJECTING

				fire()
			***REMOVED***

			return self
		***REMOVED***

		self.promise.then = function (onSuccess, onFailure) {
			var deferred = new Deferred(onSuccess, onFailure)

			if (state === RESOLVED) {
				deferred.resolve(promiseValue)
			***REMOVED*** else if (state === REJECTED) {
				deferred.reject(promiseValue)
			***REMOVED*** else {
				next.push(deferred)
			***REMOVED***

			return deferred.promise
		***REMOVED***

		function finish(type) {
			state = type || REJECTED
			next.map(function (deferred) {
				if (state === RESOLVED) {
					deferred.resolve(promiseValue)
				***REMOVED*** else {
					deferred.reject(promiseValue)
				***REMOVED***
			***REMOVED***)
		***REMOVED***

		function thennable(then, success, failure, notThennable) {
			if (((promiseValue != null && isObject(promiseValue)) ||
					isFunction(promiseValue)) && isFunction(then)) {
				try {
					// count protects against abuse calls from spec checker
					var count = 0
					then.call(promiseValue, function (value) {
						if (count++) return
						promiseValue = value
						success()
					***REMOVED***, function (value) {
						if (count++) return
						promiseValue = value
						failure()
					***REMOVED***)
				***REMOVED*** catch (e) {
					m.deferred.onerror(e)
					promiseValue = e
					failure()
				***REMOVED***
			***REMOVED*** else {
				notThennable()
			***REMOVED***
		***REMOVED***

		function fire() {
			// check if it's a thenable
			var then
			try {
				then = promiseValue && promiseValue.then
			***REMOVED*** catch (e) {
				m.deferred.onerror(e)
				promiseValue = e
				state = REJECTING
				return fire()
			***REMOVED***

			if (state === REJECTING) {
				m.deferred.onerror(promiseValue)
			***REMOVED***

			thennable(then, function () {
				state = RESOLVING
				fire()
			***REMOVED***, function () {
				state = REJECTING
				fire()
			***REMOVED***, function () {
				try {
					if (state === RESOLVING && isFunction(onSuccess)) {
						promiseValue = onSuccess(promiseValue)
					***REMOVED*** else if (state === REJECTING && isFunction(onFailure)) {
						promiseValue = onFailure(promiseValue)
						state = RESOLVING
					***REMOVED***
				***REMOVED*** catch (e) {
					m.deferred.onerror(e)
					promiseValue = e
					return finish()
				***REMOVED***

				if (promiseValue === self) {
					promiseValue = TypeError()
					finish()
				***REMOVED*** else {
					thennable(then, function () {
						finish(RESOLVED)
					***REMOVED***, finish, function () {
						finish(state === RESOLVING && RESOLVED)
					***REMOVED***)
				***REMOVED***
			***REMOVED***)
		***REMOVED***
	***REMOVED***

	m.deferred.onerror = function (e) {
		if (type.call(e) === "[object Error]" &&
				!/ Error/.test(e.constructor.toString())) {
			pendingRequests = 0
			throw e
		***REMOVED***
	***REMOVED***

	m.sync = function (args) {
		var deferred = m.deferred()
		var outstanding = args.length
		var results = []
		var method = "resolve"

		function synchronizer(pos, resolved) {
			return function (value) {
				results[pos] = value
				if (!resolved) method = "reject"
				if (--outstanding === 0) {
					deferred.promise(results)
					deferred[method](results)
				***REMOVED***
				return value
			***REMOVED***
		***REMOVED***

		if (args.length > 0) {
			forEach(args, function (arg, i) {
				arg.then(synchronizer(i, true), synchronizer(i, false))
			***REMOVED***)
		***REMOVED*** else {
			deferred.resolve([])
		***REMOVED***

		return deferred.promise
	***REMOVED***

	function identity(value) { return value ***REMOVED***

	function handleJsonp(options) {
		var callbackKey = options.callbackName || "mithril_callback_" +
			new Date().getTime() + "_" +
			(Math.round(Math.random() * 1e16)).toString(36)

		var script = $document.createElement("script")

		global[callbackKey] = function (resp) {
			script.parentNode.removeChild(script)
			options.onload({
				type: "load",
				target: {
					responseText: resp
				***REMOVED***
			***REMOVED***)
			global[callbackKey] = undefined
		***REMOVED***

		script.onerror = function () {
			script.parentNode.removeChild(script)

			options.onerror({
				type: "error",
				target: {
					status: 500,
					responseText: JSON.stringify({
						error: "Error making jsonp request"
					***REMOVED***)
				***REMOVED***
			***REMOVED***)
			global[callbackKey] = undefined

			return false
		***REMOVED***

		script.onload = function () {
			return false
		***REMOVED***

		script.src = options.url +
			(options.url.indexOf("?") > 0 ? "&" : "?") +
			(options.callbackKey ? options.callbackKey : "callback") +
			"=" + callbackKey +
			"&" + buildQueryString(options.data || {***REMOVED***)

		$document.body.appendChild(script)
	***REMOVED***

	function createXhr(options) {
		var xhr = new global.XMLHttpRequest()
		xhr.open(options.method, options.url, true, options.user,
			options.password)

		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status < 300) {
					options.onload({type: "load", target: xhr***REMOVED***)
				***REMOVED*** else {
					options.onerror({type: "error", target: xhr***REMOVED***)
				***REMOVED***
			***REMOVED***
		***REMOVED***

		if (options.serialize === JSON.stringify &&
				options.data &&
				options.method !== "GET") {
			xhr.setRequestHeader("Content-Type",
				"application/json; charset=utf-8")
		***REMOVED***

		if (options.deserialize === JSON.parse) {
			xhr.setRequestHeader("Accept", "application/json, text/*")
		***REMOVED***

		if (isFunction(options.config)) {
			var maybeXhr = options.config(xhr, options)
			if (maybeXhr != null) xhr = maybeXhr
		***REMOVED***

		var data = options.method === "GET" || !options.data ? "" : options.data

		if (data && !isString(data) && data.constructor !== global.FormData) {
			throw new Error("Request data should be either be a string or " +
				"FormData. Check the `serialize` option in `m.request`")
		***REMOVED***

		xhr.send(data)
		return xhr
	***REMOVED***

	function ajax(options) {
		if (options.dataType && options.dataType.toLowerCase() === "jsonp") {
			return handleJsonp(options)
		***REMOVED*** else {
			return createXhr(options)
		***REMOVED***
	***REMOVED***

	function bindData(options, data, serialize) {
		if (options.method === "GET" && options.dataType !== "jsonp") {
			var prefix = options.url.indexOf("?") < 0 ? "?" : "&"
			var querystring = buildQueryString(data)
			options.url += (querystring ? prefix + querystring : "")
		***REMOVED*** else {
			options.data = serialize(data)
		***REMOVED***
	***REMOVED***

	function parameterizeUrl(url, data) {
		if (data) {
			url = url.replace(/:[a-z]\w+/gi, function (token){
				var key = token.slice(1)
				var value = data[key] || token
				delete data[key]
				return value
			***REMOVED***)
		***REMOVED***
		return url
	***REMOVED***

	m.request = function (options) {
		if (options.background !== true) m.startComputation()
		var deferred = new Deferred()
		var isJSONP = options.dataType &&
			options.dataType.toLowerCase() === "jsonp"

		var serialize, deserialize, extract

		if (isJSONP) {
			serialize = options.serialize =
			deserialize = options.deserialize = identity

			extract = function (jsonp) { return jsonp.responseText ***REMOVED***
		***REMOVED*** else {
			serialize = options.serialize = options.serialize || JSON.stringify

			deserialize = options.deserialize =
				options.deserialize || JSON.parse
			extract = options.extract || function (xhr) {
				if (xhr.responseText.length || deserialize !== JSON.parse) {
					return xhr.responseText
				***REMOVED*** else {
					return null
				***REMOVED***
			***REMOVED***
		***REMOVED***

		options.method = (options.method || "GET").toUpperCase()
		options.url = parameterizeUrl(options.url, options.data)
		bindData(options, options.data, serialize)
		options.onload = options.onerror = function (ev) {
			try {
				ev = ev || event
				var response = deserialize(extract(ev.target, options))
				if (ev.type === "load") {
					if (options.unwrapSuccess) {
						response = options.unwrapSuccess(response, ev.target)
					***REMOVED***

					if (isArray(response) && options.type) {
						forEach(response, function (res, i) {
							response[i] = new options.type(res)
						***REMOVED***)
					***REMOVED*** else if (options.type) {
						response = new options.type(response)
					***REMOVED***

					deferred.resolve(response)
				***REMOVED*** else {
					if (options.unwrapError) {
						response = options.unwrapError(response, ev.target)
					***REMOVED***

					deferred.reject(response)
				***REMOVED***
			***REMOVED*** catch (e) {
				deferred.reject(e)
				m.deferred.onerror(e)
			***REMOVED*** finally {
				if (options.background !== true) m.endComputation()
			***REMOVED***
		***REMOVED***

		ajax(options)
		deferred.promise = propify(deferred.promise, options.initialValue)
		return deferred.promise
	***REMOVED***

	return m
***REMOVED***); // eslint-disable-line
