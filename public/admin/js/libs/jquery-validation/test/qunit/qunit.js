/*!
 * QUnit 1.14.0
 * http://qunitjs.com/
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-31T16:40Z
 */

(function( window ) {

var QUnit,
	assert,
	config,
	onErrorFnPrev,
	testId = 0,
	fileName = (sourceFromStacktrace( 0 ) || "" ).replace(/(:\d+)+\)?/, "").replace(/.+\//, ""),
	toString = Object.prototype.toString,
	hasOwn = Object.prototype.hasOwnProperty,
	// Keep a local reference to Date (GH-283)
	Date = window.Date,
	setTimeout = window.setTimeout,
	clearTimeout = window.clearTimeout,
	defined = {
		document: typeof window.document !== "undefined",
		setTimeout: typeof window.setTimeout !== "undefined",
		sessionStorage: (function() {
			var x = "qunit-test-string";
			try {
				sessionStorage.setItem( x, x );
				sessionStorage.removeItem( x );
				return true;
			***REMOVED*** catch( e ) {
				return false;
			***REMOVED***
		***REMOVED***())
	***REMOVED***,
	/**
	 * Provides a normalized error string, correcting an issue
	 * with IE 7 (and prior) where Error.prototype.toString is
	 * not properly implemented
	 *
	 * Based on http://es5.github.com/#x15.11.4.4
	 *
	 * @param {String|Error***REMOVED*** error
	 * @return {String***REMOVED*** error message
	 */
	errorString = function( error ) {
		var name, message,
			errorString = error.toString();
		if ( errorString.substring( 0, 7 ) === "[object" ) {
			name = error.name ? error.name.toString() : "Error";
			message = error.message ? error.message.toString() : "";
			if ( name && message ) {
				return name + ": " + message;
			***REMOVED*** else if ( name ) {
				return name;
			***REMOVED*** else if ( message ) {
				return message;
			***REMOVED*** else {
				return "Error";
			***REMOVED***
		***REMOVED*** else {
			return errorString;
		***REMOVED***
	***REMOVED***,
	/**
	 * Makes a clone of an object using only Array or Object as base,
	 * and copies over the own enumerable properties.
	 *
	 * @param {Object***REMOVED*** obj
	 * @return {Object***REMOVED*** New object with only the own properties (recursively).
	 */
	objectValues = function( obj ) {
		// Grunt 0.3.x uses an older version of jshint that still has jshint/jshint#392.
		/*jshint newcap: false */
		var key, val,
			vals = QUnit.is( "array", obj ) ? [] : {***REMOVED***;
		for ( key in obj ) {
			if ( hasOwn.call( obj, key ) ) {
				val = obj[key];
				vals[key] = val === Object(val) ? objectValues(val) : val;
			***REMOVED***
		***REMOVED***
		return vals;
	***REMOVED***;


// Root QUnit object.
// `QUnit` initialized at top of scope
QUnit = {

	// call on start of module test to prepend name to all tests
	module: function( name, testEnvironment ) {
		config.currentModule = name;
		config.currentModuleTestEnvironment = testEnvironment;
		config.modules[name] = true;
	***REMOVED***,

	asyncTest: function( testName, expected, callback ) {
		if ( arguments.length === 2 ) {
			callback = expected;
			expected = null;
		***REMOVED***

		QUnit.test( testName, expected, callback, true );
	***REMOVED***,

	test: function( testName, expected, callback, async ) {
		var test,
			nameHtml = "<span class='test-name'>" + escapeText( testName ) + "</span>";

		if ( arguments.length === 2 ) {
			callback = expected;
			expected = null;
		***REMOVED***

		if ( config.currentModule ) {
			nameHtml = "<span class='module-name'>" + escapeText( config.currentModule ) + "</span>: " + nameHtml;
		***REMOVED***

		test = new Test({
			nameHtml: nameHtml,
			testName: testName,
			expected: expected,
			async: async,
			callback: callback,
			module: config.currentModule,
			moduleTestEnvironment: config.currentModuleTestEnvironment,
			stack: sourceFromStacktrace( 2 )
		***REMOVED***);

		if ( !validTest( test ) ) {
			return;
		***REMOVED***

		test.queue();
	***REMOVED***,

	// Specify the number of expected assertions to guarantee that failed test (no assertions are run at all) don't slip through.
	expect: function( asserts ) {
		if (arguments.length === 1) {
			config.current.expected = asserts;
		***REMOVED*** else {
			return config.current.expected;
		***REMOVED***
	***REMOVED***,

	start: function( count ) {
		// QUnit hasn't been initialized yet.
		// Note: RequireJS (et al) may delay onLoad
		if ( config.semaphore === undefined ) {
			QUnit.begin(function() {
				// This is triggered at the top of QUnit.load, push start() to the event loop, to allow QUnit.load to finish first
				setTimeout(function() {
					QUnit.start( count );
				***REMOVED***);
			***REMOVED***);
			return;
		***REMOVED***

		config.semaphore -= count || 1;
		// don't start until equal number of stop-calls
		if ( config.semaphore > 0 ) {
			return;
		***REMOVED***
		// ignore if start is called more often then stop
		if ( config.semaphore < 0 ) {
			config.semaphore = 0;
			QUnit.pushFailure( "Called start() while already started (QUnit.config.semaphore was 0 already)", null, sourceFromStacktrace(2) );
			return;
		***REMOVED***
		// A slight delay, to avoid any current callbacks
		if ( defined.setTimeout ) {
			setTimeout(function() {
				if ( config.semaphore > 0 ) {
					return;
				***REMOVED***
				if ( config.timeout ) {
					clearTimeout( config.timeout );
				***REMOVED***

				config.blocking = false;
				process( true );
			***REMOVED***, 13);
		***REMOVED*** else {
			config.blocking = false;
			process( true );
		***REMOVED***
	***REMOVED***,

	stop: function( count ) {
		config.semaphore += count || 1;
		config.blocking = true;

		if ( config.testTimeout && defined.setTimeout ) {
			clearTimeout( config.timeout );
			config.timeout = setTimeout(function() {
				QUnit.ok( false, "Test timed out" );
				config.semaphore = 1;
				QUnit.start();
			***REMOVED***, config.testTimeout );
		***REMOVED***
	***REMOVED***
***REMOVED***;

// We use the prototype to distinguish between properties that should
// be exposed as globals (and in exports) and those that shouldn't
(function() {
	function F() {***REMOVED***
	F.prototype = QUnit;
	QUnit = new F();
	// Make F QUnit's constructor so that we can add to the prototype later
	QUnit.constructor = F;
***REMOVED***());

/**
 * Config object: Maintain internal state
 * Later exposed as QUnit.config
 * `config` initialized at top of scope
 */
config = {
	// The queue of tests to run
	queue: [],

	// block until document ready
	blocking: true,

	// when enabled, show only failing tests
	// gets persisted through sessionStorage and can be changed in UI via checkbox
	hidepassed: false,

	// by default, run previously failed tests first
	// very useful in combination with "Hide passed tests" checked
	reorder: true,

	// by default, modify document.title when suite is done
	altertitle: true,

	// by default, scroll to top of the page when suite is done
	scrolltop: true,

	// when enabled, all tests must call expect()
	requireExpects: false,

	// add checkboxes that are persisted in the query-string
	// when enabled, the id is set to `true` as a `QUnit.config` property
	urlConfig: [
		{
			id: "noglobals",
			label: "Check for Globals",
			tooltip: "Enabling this will test if any test introduces new properties on the `window` object. Stored as query-strings."
		***REMOVED***,
		{
			id: "notrycatch",
			label: "No try-catch",
			tooltip: "Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."
		***REMOVED***
	],

	// Set of all modules.
	modules: {***REMOVED***,

	// logging callback queues
	begin: [],
	done: [],
	log: [],
	testStart: [],
	testDone: [],
	moduleStart: [],
	moduleDone: []
***REMOVED***;

// Initialize more QUnit.config and QUnit.urlParams
(function() {
	var i, current,
		location = window.location || { search: "", protocol: "file:" ***REMOVED***,
		params = location.search.slice( 1 ).split( "&" ),
		length = params.length,
		urlParams = {***REMOVED***;

	if ( params[ 0 ] ) {
		for ( i = 0; i < length; i++ ) {
			current = params[ i ].split( "=" );
			current[ 0 ] = decodeURIComponent( current[ 0 ] );

			// allow just a key to turn on a flag, e.g., test.html?noglobals
			current[ 1 ] = current[ 1 ] ? decodeURIComponent( current[ 1 ] ) : true;
			if ( urlParams[ current[ 0 ] ] ) {
				urlParams[ current[ 0 ] ] = [].concat( urlParams[ current[ 0 ] ], current[ 1 ] );
			***REMOVED*** else {
				urlParams[ current[ 0 ] ] = current[ 1 ];
			***REMOVED***
		***REMOVED***
	***REMOVED***

	QUnit.urlParams = urlParams;

	// String search anywhere in moduleName+testName
	config.filter = urlParams.filter;

	// Exact match of the module name
	config.module = urlParams.module;

	config.testNumber = [];
	if ( urlParams.testNumber ) {

		// Ensure that urlParams.testNumber is an array
		urlParams.testNumber = [].concat( urlParams.testNumber );
		for ( i = 0; i < urlParams.testNumber.length; i++ ) {
			current = urlParams.testNumber[ i ];
			config.testNumber.push( parseInt( current, 10 ) );
		***REMOVED***
	***REMOVED***

	// Figure out if we're running the tests from a server or not
	QUnit.isLocal = location.protocol === "file:";
***REMOVED***());

extend( QUnit, {

	config: config,

	// Initialize the configuration options
	init: function() {
		extend( config, {
			stats: { all: 0, bad: 0 ***REMOVED***,
			moduleStats: { all: 0, bad: 0 ***REMOVED***,
			started: +new Date(),
			updateRate: 1000,
			blocking: false,
			autostart: true,
			autorun: false,
			filter: "",
			queue: [],
			semaphore: 1
		***REMOVED***);

		var tests, banner, result,
			qunit = id( "qunit" );

		if ( qunit ) {
			qunit.innerHTML =
				"<h1 id='qunit-header'>" + escapeText( document.title ) + "</h1>" +
				"<h2 id='qunit-banner'></h2>" +
				"<div id='qunit-testrunner-toolbar'></div>" +
				"<h2 id='qunit-userAgent'></h2>" +
				"<ol id='qunit-tests'></ol>";
		***REMOVED***

		tests = id( "qunit-tests" );
		banner = id( "qunit-banner" );
		result = id( "qunit-testresult" );

		if ( tests ) {
			tests.innerHTML = "";
		***REMOVED***

		if ( banner ) {
			banner.className = "";
		***REMOVED***

		if ( result ) {
			result.parentNode.removeChild( result );
		***REMOVED***

		if ( tests ) {
			result = document.createElement( "p" );
			result.id = "qunit-testresult";
			result.className = "result";
			tests.parentNode.insertBefore( result, tests );
			result.innerHTML = "Running...<br/>&nbsp;";
		***REMOVED***
	***REMOVED***,

	// Resets the test setup. Useful for tests that modify the DOM.
	/*
	DEPRECATED: Use multiple tests instead of resetting inside a test.
	Use testStart or testDone for custom cleanup.
	This method will throw an error in 2.0, and will be removed in 2.1
	*/
	reset: function() {
		var fixture = id( "qunit-fixture" );
		if ( fixture ) {
			fixture.innerHTML = config.fixture;
		***REMOVED***
	***REMOVED***,

	// Safe object type checking
	is: function( type, obj ) {
		return QUnit.objectType( obj ) === type;
	***REMOVED***,

	objectType: function( obj ) {
		if ( typeof obj === "undefined" ) {
			return "undefined";
		***REMOVED***

		// Consider: typeof null === object
		if ( obj === null ) {
			return "null";
		***REMOVED***

		var match = toString.call( obj ).match(/^\[object\s(.*)\]$/),
			type = match && match[1] || "";

		switch ( type ) {
			case "Number":
				if ( isNaN(obj) ) {
					return "nan";
				***REMOVED***
				return "number";
			case "String":
			case "Boolean":
			case "Array":
			case "Date":
			case "RegExp":
			case "Function":
				return type.toLowerCase();
		***REMOVED***
		if ( typeof obj === "object" ) {
			return "object";
		***REMOVED***
		return undefined;
	***REMOVED***,

	push: function( result, actual, expected, message ) {
		if ( !config.current ) {
			throw new Error( "assertion outside test context, was " + sourceFromStacktrace() );
		***REMOVED***

		var output, source,
			details = {
				module: config.current.module,
				name: config.current.testName,
				result: result,
				message: message,
				actual: actual,
				expected: expected
			***REMOVED***;

		message = escapeText( message ) || ( result ? "okay" : "failed" );
		message = "<span class='test-message'>" + message + "</span>";
		output = message;

		if ( !result ) {
			expected = escapeText( QUnit.jsDump.parse(expected) );
			actual = escapeText( QUnit.jsDump.parse(actual) );
			output += "<table><tr class='test-expected'><th>Expected: </th><td><pre>" + expected + "</pre></td></tr>";

			if ( actual !== expected ) {
				output += "<tr class='test-actual'><th>Result: </th><td><pre>" + actual + "</pre></td></tr>";
				output += "<tr class='test-diff'><th>Diff: </th><td><pre>" + QUnit.diff( expected, actual ) + "</pre></td></tr>";
			***REMOVED***

			source = sourceFromStacktrace();

			if ( source ) {
				details.source = source;
				output += "<tr class='test-source'><th>Source: </th><td><pre>" + escapeText( source ) + "</pre></td></tr>";
			***REMOVED***

			output += "</table>";
		***REMOVED***

		runLoggingCallbacks( "log", QUnit, details );

		config.current.assertions.push({
			result: !!result,
			message: output
		***REMOVED***);
	***REMOVED***,

	pushFailure: function( message, source, actual ) {
		if ( !config.current ) {
			throw new Error( "pushFailure() assertion outside test context, was " + sourceFromStacktrace(2) );
		***REMOVED***

		var output,
			details = {
				module: config.current.module,
				name: config.current.testName,
				result: false,
				message: message
			***REMOVED***;

		message = escapeText( message ) || "error";
		message = "<span class='test-message'>" + message + "</span>";
		output = message;

		output += "<table>";

		if ( actual ) {
			output += "<tr class='test-actual'><th>Result: </th><td><pre>" + escapeText( actual ) + "</pre></td></tr>";
		***REMOVED***

		if ( source ) {
			details.source = source;
			output += "<tr class='test-source'><th>Source: </th><td><pre>" + escapeText( source ) + "</pre></td></tr>";
		***REMOVED***

		output += "</table>";

		runLoggingCallbacks( "log", QUnit, details );

		config.current.assertions.push({
			result: false,
			message: output
		***REMOVED***);
	***REMOVED***,

	url: function( params ) {
		params = extend( extend( {***REMOVED***, QUnit.urlParams ), params );
		var key,
			querystring = "?";

		for ( key in params ) {
			if ( hasOwn.call( params, key ) ) {
				querystring += encodeURIComponent( key ) + "=" +
					encodeURIComponent( params[ key ] ) + "&";
			***REMOVED***
		***REMOVED***
		return window.location.protocol + "//" + window.location.host +
			window.location.pathname + querystring.slice( 0, -1 );
	***REMOVED***,

	extend: extend,
	id: id,
	addEvent: addEvent,
	addClass: addClass,
	hasClass: hasClass,
	removeClass: removeClass
	// load, equiv, jsDump, diff: Attached later
***REMOVED***);

/**
 * @deprecated: Created for backwards compatibility with test runner that set the hook function
 * into QUnit.{hook***REMOVED***, instead of invoking it and passing the hook function.
 * QUnit.constructor is set to the empty F() above so that we can add to it's prototype here.
 * Doing this allows us to tell if the following methods have been overwritten on the actual
 * QUnit object.
 */
extend( QUnit.constructor.prototype, {

	// Logging callbacks; all receive a single argument with the listed properties
	// run test/logs.html for any related changes
	begin: registerLoggingCallback( "begin" ),

	// done: { failed, passed, total, runtime ***REMOVED***
	done: registerLoggingCallback( "done" ),

	// log: { result, actual, expected, message ***REMOVED***
	log: registerLoggingCallback( "log" ),

	// testStart: { name ***REMOVED***
	testStart: registerLoggingCallback( "testStart" ),

	// testDone: { name, failed, passed, total, runtime ***REMOVED***
	testDone: registerLoggingCallback( "testDone" ),

	// moduleStart: { name ***REMOVED***
	moduleStart: registerLoggingCallback( "moduleStart" ),

	// moduleDone: { name, failed, passed, total ***REMOVED***
	moduleDone: registerLoggingCallback( "moduleDone" )
***REMOVED***);

if ( !defined.document || document.readyState === "complete" ) {
	config.autorun = true;
***REMOVED***

QUnit.load = function() {
	runLoggingCallbacks( "begin", QUnit, {***REMOVED*** );

	// Initialize the config, saving the execution queue
	var banner, filter, i, j, label, len, main, ol, toolbar, val, selection,
		urlConfigContainer, moduleFilter, userAgent,
		numModules = 0,
		moduleNames = [],
		moduleFilterHtml = "",
		urlConfigHtml = "",
		oldconfig = extend( {***REMOVED***, config );

	QUnit.init();
	extend(config, oldconfig);

	config.blocking = false;

	len = config.urlConfig.length;

	for ( i = 0; i < len; i++ ) {
		val = config.urlConfig[i];
		if ( typeof val === "string" ) {
			val = {
				id: val,
				label: val
			***REMOVED***;
		***REMOVED***
		config[ val.id ] = QUnit.urlParams[ val.id ];
		if ( !val.value || typeof val.value === "string" ) {
			urlConfigHtml += "<input id='qunit-urlconfig-" + escapeText( val.id ) +
				"' name='" + escapeText( val.id ) +
				"' type='checkbox'" +
				( val.value ? " value='" + escapeText( val.value ) + "'" : "" ) +
				( config[ val.id ] ? " checked='checked'" : "" ) +
				" title='" + escapeText( val.tooltip ) +
				"'><label for='qunit-urlconfig-" + escapeText( val.id ) +
				"' title='" + escapeText( val.tooltip ) + "'>" + val.label + "</label>";
		***REMOVED*** else {
			urlConfigHtml += "<label for='qunit-urlconfig-" + escapeText( val.id ) +
				"' title='" + escapeText( val.tooltip ) +
				"'>" + val.label +
				": </label><select id='qunit-urlconfig-" + escapeText( val.id ) +
				"' name='" + escapeText( val.id ) +
				"' title='" + escapeText( val.tooltip ) +
				"'><option></option>";
			selection = false;
			if ( QUnit.is( "array", val.value ) ) {
				for ( j = 0; j < val.value.length; j++ ) {
					urlConfigHtml += "<option value='" + escapeText( val.value[j] ) + "'" +
						( config[ val.id ] === val.value[j] ?
							(selection = true) && " selected='selected'" :
							"" ) +
						">" + escapeText( val.value[j] ) + "</option>";
				***REMOVED***
			***REMOVED*** else {
				for ( j in val.value ) {
					if ( hasOwn.call( val.value, j ) ) {
						urlConfigHtml += "<option value='" + escapeText( j ) + "'" +
							( config[ val.id ] === j ?
								(selection = true) && " selected='selected'" :
								"" ) +
							">" + escapeText( val.value[j] ) + "</option>";
					***REMOVED***
				***REMOVED***
			***REMOVED***
			if ( config[ val.id ] && !selection ) {
				urlConfigHtml += "<option value='" + escapeText( config[ val.id ] ) +
					"' selected='selected' disabled='disabled'>" +
					escapeText( config[ val.id ] ) +
					"</option>";
			***REMOVED***
			urlConfigHtml += "</select>";
		***REMOVED***
	***REMOVED***
	for ( i in config.modules ) {
		if ( config.modules.hasOwnProperty( i ) ) {
			moduleNames.push(i);
		***REMOVED***
	***REMOVED***
	numModules = moduleNames.length;
	moduleNames.sort( function( a, b ) {
		return a.localeCompare( b );
	***REMOVED***);
	moduleFilterHtml += "<label for='qunit-modulefilter'>Module: </label><select id='qunit-modulefilter' name='modulefilter'><option value='' " +
		( config.module === undefined  ? "selected='selected'" : "" ) +
		">< All Modules ></option>";


	for ( i = 0; i < numModules; i++) {
			moduleFilterHtml += "<option value='" + escapeText( encodeURIComponent(moduleNames[i]) ) + "' " +
				( config.module === moduleNames[i] ? "selected='selected'" : "" ) +
				">" + escapeText(moduleNames[i]) + "</option>";
	***REMOVED***
	moduleFilterHtml += "</select>";

	// `userAgent` initialized at top of scope
	userAgent = id( "qunit-userAgent" );
	if ( userAgent ) {
		userAgent.innerHTML = navigator.userAgent;
	***REMOVED***

	// `banner` initialized at top of scope
	banner = id( "qunit-header" );
	if ( banner ) {
		banner.innerHTML = "<a href='" + QUnit.url({ filter: undefined, module: undefined, testNumber: undefined ***REMOVED***) + "'>" + banner.innerHTML + "</a> ";
	***REMOVED***

	// `toolbar` initialized at top of scope
	toolbar = id( "qunit-testrunner-toolbar" );
	if ( toolbar ) {
		// `filter` initialized at top of scope
		filter = document.createElement( "input" );
		filter.type = "checkbox";
		filter.id = "qunit-filter-pass";

		addEvent( filter, "click", function() {
			var tmp,
				ol = id( "qunit-tests" );

			if ( filter.checked ) {
				ol.className = ol.className + " hidepass";
			***REMOVED*** else {
				tmp = " " + ol.className.replace( /[\n\t\r]/g, " " ) + " ";
				ol.className = tmp.replace( / hidepass /, " " );
			***REMOVED***
			if ( defined.sessionStorage ) {
				if (filter.checked) {
					sessionStorage.setItem( "qunit-filter-passed-tests", "true" );
				***REMOVED*** else {
					sessionStorage.removeItem( "qunit-filter-passed-tests" );
				***REMOVED***
			***REMOVED***
		***REMOVED***);

		if ( config.hidepassed || defined.sessionStorage && sessionStorage.getItem( "qunit-filter-passed-tests" ) ) {
			filter.checked = true;
			// `ol` initialized at top of scope
			ol = id( "qunit-tests" );
			ol.className = ol.className + " hidepass";
		***REMOVED***
		toolbar.appendChild( filter );

		// `label` initialized at top of scope
		label = document.createElement( "label" );
		label.setAttribute( "for", "qunit-filter-pass" );
		label.setAttribute( "title", "Only show tests and assertions that fail. Stored in sessionStorage." );
		label.innerHTML = "Hide passed tests";
		toolbar.appendChild( label );

		urlConfigContainer = document.createElement("span");
		urlConfigContainer.innerHTML = urlConfigHtml;
		// For oldIE support:
		// * Add handlers to the individual elements instead of the container
		// * Use "click" instead of "change" for checkboxes
		// * Fallback from event.target to event.srcElement
		addEvents( urlConfigContainer.getElementsByTagName("input"), "click", function( event ) {
			var params = {***REMOVED***,
				target = event.target || event.srcElement;
			params[ target.name ] = target.checked ?
				target.defaultValue || true :
				undefined;
			window.location = QUnit.url( params );
		***REMOVED***);
		addEvents( urlConfigContainer.getElementsByTagName("select"), "change", function( event ) {
			var params = {***REMOVED***,
				target = event.target || event.srcElement;
			params[ target.name ] = target.options[ target.selectedIndex ].value || undefined;
			window.location = QUnit.url( params );
		***REMOVED***);
		toolbar.appendChild( urlConfigContainer );

		if (numModules > 1) {
			moduleFilter = document.createElement( "span" );
			moduleFilter.setAttribute( "id", "qunit-modulefilter-container" );
			moduleFilter.innerHTML = moduleFilterHtml;
			addEvent( moduleFilter.lastChild, "change", function() {
				var selectBox = moduleFilter.getElementsByTagName("select")[0],
					selectedModule = decodeURIComponent(selectBox.options[selectBox.selectedIndex].value);

				window.location = QUnit.url({
					module: ( selectedModule === "" ) ? undefined : selectedModule,
					// Remove any existing filters
					filter: undefined,
					testNumber: undefined
				***REMOVED***);
			***REMOVED***);
			toolbar.appendChild(moduleFilter);
		***REMOVED***
	***REMOVED***

	// `main` initialized at top of scope
	main = id( "qunit-fixture" );
	if ( main ) {
		config.fixture = main.innerHTML;
	***REMOVED***

	if ( config.autostart ) {
		QUnit.start();
	***REMOVED***
***REMOVED***;

if ( defined.document ) {
	addEvent( window, "load", QUnit.load );
***REMOVED***

// `onErrorFnPrev` initialized at top of scope
// Preserve other handlers
onErrorFnPrev = window.onerror;

// Cover uncaught exceptions
// Returning true will suppress the default browser handler,
// returning false will let it run.
window.onerror = function ( error, filePath, linerNr ) {
	var ret = false;
	if ( onErrorFnPrev ) {
		ret = onErrorFnPrev( error, filePath, linerNr );
	***REMOVED***

	// Treat return value as window.onerror itself does,
	// Only do our handling if not suppressed.
	if ( ret !== true ) {
		if ( QUnit.config.current ) {
			if ( QUnit.config.current.ignoreGlobalErrors ) {
				return true;
			***REMOVED***
			QUnit.pushFailure( error, filePath + ":" + linerNr );
		***REMOVED*** else {
			QUnit.test( "global failure", extend( function() {
				QUnit.pushFailure( error, filePath + ":" + linerNr );
			***REMOVED***, { validTest: validTest ***REMOVED*** ) );
		***REMOVED***
		return false;
	***REMOVED***

	return ret;
***REMOVED***;

function done() {
	config.autorun = true;

	// Log the last module results
	if ( config.previousModule ) {
		runLoggingCallbacks( "moduleDone", QUnit, {
			name: config.previousModule,
			failed: config.moduleStats.bad,
			passed: config.moduleStats.all - config.moduleStats.bad,
			total: config.moduleStats.all
		***REMOVED***);
	***REMOVED***
	delete config.previousModule;

	var i, key,
		banner = id( "qunit-banner" ),
		tests = id( "qunit-tests" ),
		runtime = +new Date() - config.started,
		passed = config.stats.all - config.stats.bad,
		html = [
			"Tests completed in ",
			runtime,
			" milliseconds.<br/>",
			"<span class='passed'>",
			passed,
			"</span> assertions of <span class='total'>",
			config.stats.all,
			"</span> passed, <span class='failed'>",
			config.stats.bad,
			"</span> failed."
		].join( "" );

	if ( banner ) {
		banner.className = ( config.stats.bad ? "qunit-fail" : "qunit-pass" );
	***REMOVED***

	if ( tests ) {
		id( "qunit-testresult" ).innerHTML = html;
	***REMOVED***

	if ( config.altertitle && defined.document && document.title ) {
		// show ✖ for good, ✔ for bad suite result in title
		// use escape sequences in case file gets loaded with non-utf-8-charset
		document.title = [
			( config.stats.bad ? "\u2716" : "\u2714" ),
			document.title.replace( /^[\u2714\u2716] /i, "" )
		].join( " " );
	***REMOVED***

	// clear own sessionStorage items if all tests passed
	if ( config.reorder && defined.sessionStorage && config.stats.bad === 0 ) {
		// `key` & `i` initialized at top of scope
		for ( i = 0; i < sessionStorage.length; i++ ) {
			key = sessionStorage.key( i++ );
			if ( key.indexOf( "qunit-test-" ) === 0 ) {
				sessionStorage.removeItem( key );
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// scroll back to top to show results
	if ( config.scrolltop && window.scrollTo ) {
		window.scrollTo(0, 0);
	***REMOVED***

	runLoggingCallbacks( "done", QUnit, {
		failed: config.stats.bad,
		passed: passed,
		total: config.stats.all,
		runtime: runtime
	***REMOVED***);
***REMOVED***

/** @return Boolean: true if this test should be ran */
function validTest( test ) {
	var include,
		filter = config.filter && config.filter.toLowerCase(),
		module = config.module && config.module.toLowerCase(),
		fullName = ( test.module + ": " + test.testName ).toLowerCase();

	// Internally-generated tests are always valid
	if ( test.callback && test.callback.validTest === validTest ) {
		delete test.callback.validTest;
		return true;
	***REMOVED***

	if ( config.testNumber.length > 0 ) {
		if ( inArray( test.testNumber, config.testNumber ) < 0 ) {
			return false;
		***REMOVED***
	***REMOVED***

	if ( module && ( !test.module || test.module.toLowerCase() !== module ) ) {
		return false;
	***REMOVED***

	if ( !filter ) {
		return true;
	***REMOVED***

	include = filter.charAt( 0 ) !== "!";
	if ( !include ) {
		filter = filter.slice( 1 );
	***REMOVED***

	// If the filter matches, we need to honour include
	if ( fullName.indexOf( filter ) !== -1 ) {
		return include;
	***REMOVED***

	// Otherwise, do the opposite
	return !include;
***REMOVED***

// so far supports only Firefox, Chrome and Opera (buggy), Safari (for real exceptions)
// Later Safari and IE10 are supposed to support error.stack as well
// See also https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Error/Stack
function extractStacktrace( e, offset ) {
	offset = offset === undefined ? 3 : offset;

	var stack, include, i;

	if ( e.stacktrace ) {
		// Opera
		return e.stacktrace.split( "\n" )[ offset + 3 ];
	***REMOVED*** else if ( e.stack ) {
		// Firefox, Chrome
		stack = e.stack.split( "\n" );
		if (/^error$/i.test( stack[0] ) ) {
			stack.shift();
		***REMOVED***
		if ( fileName ) {
			include = [];
			for ( i = offset; i < stack.length; i++ ) {
				if ( stack[ i ].indexOf( fileName ) !== -1 ) {
					break;
				***REMOVED***
				include.push( stack[ i ] );
			***REMOVED***
			if ( include.length ) {
				return include.join( "\n" );
			***REMOVED***
		***REMOVED***
		return stack[ offset ];
	***REMOVED*** else if ( e.sourceURL ) {
		// Safari, PhantomJS
		// hopefully one day Safari provides actual stacktraces
		// exclude useless self-reference for generated Error objects
		if ( /qunit.js$/.test( e.sourceURL ) ) {
			return;
		***REMOVED***
		// for actual exceptions, this is useful
		return e.sourceURL + ":" + e.line;
	***REMOVED***
***REMOVED***
function sourceFromStacktrace( offset ) {
	try {
		throw new Error();
	***REMOVED*** catch ( e ) {
		return extractStacktrace( e, offset );
	***REMOVED***
***REMOVED***

/**
 * Escape text for attribute or text content.
 */
function escapeText( s ) {
	if ( !s ) {
		return "";
	***REMOVED***
	s = s + "";
	// Both single quotes and double quotes (for attributes)
	return s.replace( /['"<>&]/g, function( s ) {
		switch( s ) {
			case "'":
				return "&#039;";
			case "\"":
				return "&quot;";
			case "<":
				return "&lt;";
			case ">":
				return "&gt;";
			case "&":
				return "&amp;";
		***REMOVED***
	***REMOVED***);
***REMOVED***

function synchronize( callback, last ) {
	config.queue.push( callback );

	if ( config.autorun && !config.blocking ) {
		process( last );
	***REMOVED***
***REMOVED***

function process( last ) {
	function next() {
		process( last );
	***REMOVED***
	var start = new Date().getTime();
	config.depth = config.depth ? config.depth + 1 : 1;

	while ( config.queue.length && !config.blocking ) {
		if ( !defined.setTimeout || config.updateRate <= 0 || ( ( new Date().getTime() - start ) < config.updateRate ) ) {
			config.queue.shift()();
		***REMOVED*** else {
			setTimeout( next, 13 );
			break;
		***REMOVED***
	***REMOVED***
	config.depth--;
	if ( last && !config.blocking && !config.queue.length && config.depth === 0 ) {
		done();
	***REMOVED***
***REMOVED***

function saveGlobal() {
	config.pollution = [];

	if ( config.noglobals ) {
		for ( var key in window ) {
			if ( hasOwn.call( window, key ) ) {
				// in Opera sometimes DOM element ids show up here, ignore them
				if ( /^qunit-test-output/.test( key ) ) {
					continue;
				***REMOVED***
				config.pollution.push( key );
			***REMOVED***
		***REMOVED***
	***REMOVED***
***REMOVED***

function checkPollution() {
	var newGlobals,
		deletedGlobals,
		old = config.pollution;

	saveGlobal();

	newGlobals = diff( config.pollution, old );
	if ( newGlobals.length > 0 ) {
		QUnit.pushFailure( "Introduced global variable(s): " + newGlobals.join(", ") );
	***REMOVED***

	deletedGlobals = diff( old, config.pollution );
	if ( deletedGlobals.length > 0 ) {
		QUnit.pushFailure( "Deleted global variable(s): " + deletedGlobals.join(", ") );
	***REMOVED***
***REMOVED***

// returns a new Array with the elements that are in a but not in b
function diff( a, b ) {
	var i, j,
		result = a.slice();

	for ( i = 0; i < result.length; i++ ) {
		for ( j = 0; j < b.length; j++ ) {
			if ( result[i] === b[j] ) {
				result.splice( i, 1 );
				i--;
				break;
			***REMOVED***
		***REMOVED***
	***REMOVED***
	return result;
***REMOVED***

function extend( a, b ) {
	for ( var prop in b ) {
		if ( hasOwn.call( b, prop ) ) {
			// Avoid "Member not found" error in IE8 caused by messing with window.constructor
			if ( !( prop === "constructor" && a === window ) ) {
				if ( b[ prop ] === undefined ) {
					delete a[ prop ];
				***REMOVED*** else {
					a[ prop ] = b[ prop ];
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***

	return a;
***REMOVED***

/**
 * @param {HTMLElement***REMOVED*** elem
 * @param {string***REMOVED*** type
 * @param {Function***REMOVED*** fn
 */
function addEvent( elem, type, fn ) {
	if ( elem.addEventListener ) {

		// Standards-based browsers
		elem.addEventListener( type, fn, false );
	***REMOVED*** else if ( elem.attachEvent ) {

		// support: IE <9
		elem.attachEvent( "on" + type, fn );
	***REMOVED*** else {

		// Caller must ensure support for event listeners is present
		throw new Error( "addEvent() was called in a context without event listener support" );
	***REMOVED***
***REMOVED***

/**
 * @param {Array|NodeList***REMOVED*** elems
 * @param {string***REMOVED*** type
 * @param {Function***REMOVED*** fn
 */
function addEvents( elems, type, fn ) {
	var i = elems.length;
	while ( i-- ) {
		addEvent( elems[i], type, fn );
	***REMOVED***
***REMOVED***

function hasClass( elem, name ) {
	return (" " + elem.className + " ").indexOf(" " + name + " ") > -1;
***REMOVED***

function addClass( elem, name ) {
	if ( !hasClass( elem, name ) ) {
		elem.className += (elem.className ? " " : "") + name;
	***REMOVED***
***REMOVED***

function removeClass( elem, name ) {
	var set = " " + elem.className + " ";
	// Class name may appear multiple times
	while ( set.indexOf(" " + name + " ") > -1 ) {
		set = set.replace(" " + name + " " , " ");
	***REMOVED***
	// If possible, trim it for prettiness, but not necessarily
	elem.className = typeof set.trim === "function" ? set.trim() : set.replace(/^\s+|\s+$/g, "");
***REMOVED***

function id( name ) {
	return defined.document && document.getElementById && document.getElementById( name );
***REMOVED***

function registerLoggingCallback( key ) {
	return function( callback ) {
		config[key].push( callback );
	***REMOVED***;
***REMOVED***

// Supports deprecated method of completely overwriting logging callbacks
function runLoggingCallbacks( key, scope, args ) {
	var i, callbacks;
	if ( QUnit.hasOwnProperty( key ) ) {
		QUnit[ key ].call(scope, args );
	***REMOVED*** else {
		callbacks = config[ key ];
		for ( i = 0; i < callbacks.length; i++ ) {
			callbacks[ i ].call( scope, args );
		***REMOVED***
	***REMOVED***
***REMOVED***

// from jquery.js
function inArray( elem, array ) {
	if ( array.indexOf ) {
		return array.indexOf( elem );
	***REMOVED***

	for ( var i = 0, length = array.length; i < length; i++ ) {
		if ( array[ i ] === elem ) {
			return i;
		***REMOVED***
	***REMOVED***

	return -1;
***REMOVED***

function Test( settings ) {
	extend( this, settings );
	this.assertions = [];
	this.testNumber = ++Test.count;
***REMOVED***

Test.count = 0;

Test.prototype = {
	init: function() {
		var a, b, li,
			tests = id( "qunit-tests" );

		if ( tests ) {
			b = document.createElement( "strong" );
			b.innerHTML = this.nameHtml;

			// `a` initialized at top of scope
			a = document.createElement( "a" );
			a.innerHTML = "Rerun";
			a.href = QUnit.url({ testNumber: this.testNumber ***REMOVED***);

			li = document.createElement( "li" );
			li.appendChild( b );
			li.appendChild( a );
			li.className = "running";
			li.id = this.id = "qunit-test-output" + testId++;

			tests.appendChild( li );
		***REMOVED***
	***REMOVED***,
	setup: function() {
		if (
			// Emit moduleStart when we're switching from one module to another
			this.module !== config.previousModule ||
				// They could be equal (both undefined) but if the previousModule property doesn't
				// yet exist it means this is the first test in a suite that isn't wrapped in a
				// module, in which case we'll just emit a moduleStart event for 'undefined'.
				// Without this, reporters can get testStart before moduleStart  which is a problem.
				!hasOwn.call( config, "previousModule" )
		) {
			if ( hasOwn.call( config, "previousModule" ) ) {
				runLoggingCallbacks( "moduleDone", QUnit, {
					name: config.previousModule,
					failed: config.moduleStats.bad,
					passed: config.moduleStats.all - config.moduleStats.bad,
					total: config.moduleStats.all
				***REMOVED***);
			***REMOVED***
			config.previousModule = this.module;
			config.moduleStats = { all: 0, bad: 0 ***REMOVED***;
			runLoggingCallbacks( "moduleStart", QUnit, {
				name: this.module
			***REMOVED***);
		***REMOVED***

		config.current = this;

		this.testEnvironment = extend({
			setup: function() {***REMOVED***,
			teardown: function() {***REMOVED***
		***REMOVED***, this.moduleTestEnvironment );

		this.started = +new Date();
		runLoggingCallbacks( "testStart", QUnit, {
			name: this.testName,
			module: this.module
		***REMOVED***);

		/*jshint camelcase:false */


		/**
		 * Expose the current test environment.
		 *
		 * @deprecated since 1.12.0: Use QUnit.config.current.testEnvironment instead.
		 */
		QUnit.current_testEnvironment = this.testEnvironment;

		/*jshint camelcase:true */

		if ( !config.pollution ) {
			saveGlobal();
		***REMOVED***
		if ( config.notrycatch ) {
			this.testEnvironment.setup.call( this.testEnvironment, QUnit.assert );
			return;
		***REMOVED***
		try {
			this.testEnvironment.setup.call( this.testEnvironment, QUnit.assert );
		***REMOVED*** catch( e ) {
			QUnit.pushFailure( "Setup failed on " + this.testName + ": " + ( e.message || e ), extractStacktrace( e, 1 ) );
		***REMOVED***
	***REMOVED***,
	run: function() {
		config.current = this;

		var running = id( "qunit-testresult" );

		if ( running ) {
			running.innerHTML = "Running: <br/>" + this.nameHtml;
		***REMOVED***

		if ( this.async ) {
			QUnit.stop();
		***REMOVED***

		this.callbackStarted = +new Date();

		if ( config.notrycatch ) {
			this.callback.call( this.testEnvironment, QUnit.assert );
			this.callbackRuntime = +new Date() - this.callbackStarted;
			return;
		***REMOVED***

		try {
			this.callback.call( this.testEnvironment, QUnit.assert );
			this.callbackRuntime = +new Date() - this.callbackStarted;
		***REMOVED*** catch( e ) {
			this.callbackRuntime = +new Date() - this.callbackStarted;

			QUnit.pushFailure( "Died on test #" + (this.assertions.length + 1) + " " + this.stack + ": " + ( e.message || e ), extractStacktrace( e, 0 ) );
			// else next test will carry the responsibility
			saveGlobal();

			// Restart the tests if they're blocking
			if ( config.blocking ) {
				QUnit.start();
			***REMOVED***
		***REMOVED***
	***REMOVED***,
	teardown: function() {
		config.current = this;
		if ( config.notrycatch ) {
			if ( typeof this.callbackRuntime === "undefined" ) {
				this.callbackRuntime = +new Date() - this.callbackStarted;
			***REMOVED***
			this.testEnvironment.teardown.call( this.testEnvironment, QUnit.assert );
			return;
		***REMOVED*** else {
			try {
				this.testEnvironment.teardown.call( this.testEnvironment, QUnit.assert );
			***REMOVED*** catch( e ) {
				QUnit.pushFailure( "Teardown failed on " + this.testName + ": " + ( e.message || e ), extractStacktrace( e, 1 ) );
			***REMOVED***
		***REMOVED***
		checkPollution();
	***REMOVED***,
	finish: function() {
		config.current = this;
		if ( config.requireExpects && this.expected === null ) {
			QUnit.pushFailure( "Expected number of assertions to be defined, but expect() was not called.", this.stack );
		***REMOVED*** else if ( this.expected !== null && this.expected !== this.assertions.length ) {
			QUnit.pushFailure( "Expected " + this.expected + " assertions, but " + this.assertions.length + " were run", this.stack );
		***REMOVED*** else if ( this.expected === null && !this.assertions.length ) {
			QUnit.pushFailure( "Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.", this.stack );
		***REMOVED***

		var i, assertion, a, b, time, li, ol,
			test = this,
			good = 0,
			bad = 0,
			tests = id( "qunit-tests" );

		this.runtime = +new Date() - this.started;
		config.stats.all += this.assertions.length;
		config.moduleStats.all += this.assertions.length;

		if ( tests ) {
			ol = document.createElement( "ol" );
			ol.className = "qunit-assert-list";

			for ( i = 0; i < this.assertions.length; i++ ) {
				assertion = this.assertions[i];

				li = document.createElement( "li" );
				li.className = assertion.result ? "pass" : "fail";
				li.innerHTML = assertion.message || ( assertion.result ? "okay" : "failed" );
				ol.appendChild( li );

				if ( assertion.result ) {
					good++;
				***REMOVED*** else {
					bad++;
					config.stats.bad++;
					config.moduleStats.bad++;
				***REMOVED***
			***REMOVED***

			// store result when possible
			if ( QUnit.config.reorder && defined.sessionStorage ) {
				if ( bad ) {
					sessionStorage.setItem( "qunit-test-" + this.module + "-" + this.testName, bad );
				***REMOVED*** else {
					sessionStorage.removeItem( "qunit-test-" + this.module + "-" + this.testName );
				***REMOVED***
			***REMOVED***

			if ( bad === 0 ) {
				addClass( ol, "qunit-collapsed" );
			***REMOVED***

			// `b` initialized at top of scope
			b = document.createElement( "strong" );
			b.innerHTML = this.nameHtml + " <b class='counts'>(<b class='failed'>" + bad + "</b>, <b class='passed'>" + good + "</b>, " + this.assertions.length + ")</b>";

			addEvent(b, "click", function() {
				var next = b.parentNode.lastChild,
					collapsed = hasClass( next, "qunit-collapsed" );
				( collapsed ? removeClass : addClass )( next, "qunit-collapsed" );
			***REMOVED***);

			addEvent(b, "dblclick", function( e ) {
				var target = e && e.target ? e.target : window.event.srcElement;
				if ( target.nodeName.toLowerCase() === "span" || target.nodeName.toLowerCase() === "b" ) {
					target = target.parentNode;
				***REMOVED***
				if ( window.location && target.nodeName.toLowerCase() === "strong" ) {
					window.location = QUnit.url({ testNumber: test.testNumber ***REMOVED***);
				***REMOVED***
			***REMOVED***);

			// `time` initialized at top of scope
			time = document.createElement( "span" );
			time.className = "runtime";
			time.innerHTML = this.runtime + " ms";

			// `li` initialized at top of scope
			li = id( this.id );
			li.className = bad ? "fail" : "pass";
			li.removeChild( li.firstChild );
			a = li.firstChild;
			li.appendChild( b );
			li.appendChild( a );
			li.appendChild( time );
			li.appendChild( ol );

		***REMOVED*** else {
			for ( i = 0; i < this.assertions.length; i++ ) {
				if ( !this.assertions[i].result ) {
					bad++;
					config.stats.bad++;
					config.moduleStats.bad++;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		runLoggingCallbacks( "testDone", QUnit, {
			name: this.testName,
			module: this.module,
			failed: bad,
			passed: this.assertions.length - bad,
			total: this.assertions.length,
			runtime: this.runtime,
			// DEPRECATED: this property will be removed in 2.0.0, use runtime instead
			duration: this.runtime
		***REMOVED***);

		QUnit.reset();

		config.current = undefined;
	***REMOVED***,

	queue: function() {
		var bad,
			test = this;

		synchronize(function() {
			test.init();
		***REMOVED***);
		function run() {
			// each of these can by async
			synchronize(function() {
				test.setup();
			***REMOVED***);
			synchronize(function() {
				test.run();
			***REMOVED***);
			synchronize(function() {
				test.teardown();
			***REMOVED***);
			synchronize(function() {
				test.finish();
			***REMOVED***);
		***REMOVED***

		// `bad` initialized at top of scope
		// defer when previous test run passed, if storage is available
		bad = QUnit.config.reorder && defined.sessionStorage &&
						+sessionStorage.getItem( "qunit-test-" + this.module + "-" + this.testName );

		if ( bad ) {
			run();
		***REMOVED*** else {
			synchronize( run, true );
		***REMOVED***
	***REMOVED***
***REMOVED***;

// `assert` initialized at top of scope
// Assert helpers
// All of these must either call QUnit.push() or manually do:
// - runLoggingCallbacks( "log", .. );
// - config.current.assertions.push({ .. ***REMOVED***);
assert = QUnit.assert = {
	/**
	 * Asserts rough true-ish result.
	 * @name ok
	 * @function
	 * @example ok( "asdfasdf".length > 5, "There must be at least 5 chars" );
	 */
	ok: function( result, msg ) {
		if ( !config.current ) {
			throw new Error( "ok() assertion outside test context, was " + sourceFromStacktrace(2) );
		***REMOVED***
		result = !!result;
		msg = msg || ( result ? "okay" : "failed" );

		var source,
			details = {
				module: config.current.module,
				name: config.current.testName,
				result: result,
				message: msg
			***REMOVED***;

		msg = "<span class='test-message'>" + escapeText( msg ) + "</span>";

		if ( !result ) {
			source = sourceFromStacktrace( 2 );
			if ( source ) {
				details.source = source;
				msg += "<table><tr class='test-source'><th>Source: </th><td><pre>" +
					escapeText( source ) +
					"</pre></td></tr></table>";
			***REMOVED***
		***REMOVED***
		runLoggingCallbacks( "log", QUnit, details );
		config.current.assertions.push({
			result: result,
			message: msg
		***REMOVED***);
	***REMOVED***,

	/**
	 * Assert that the first two arguments are equal, with an optional message.
	 * Prints out both actual and expected values.
	 * @name equal
	 * @function
	 * @example equal( format( "Received {0***REMOVED*** bytes.", 2), "Received 2 bytes.", "format() replaces {0***REMOVED*** with next argument" );
	 */
	equal: function( actual, expected, message ) {
		/*jshint eqeqeq:false */
		QUnit.push( expected == actual, actual, expected, message );
	***REMOVED***,

	/**
	 * @name notEqual
	 * @function
	 */
	notEqual: function( actual, expected, message ) {
		/*jshint eqeqeq:false */
		QUnit.push( expected != actual, actual, expected, message );
	***REMOVED***,

	/**
	 * @name propEqual
	 * @function
	 */
	propEqual: function( actual, expected, message ) {
		actual = objectValues(actual);
		expected = objectValues(expected);
		QUnit.push( QUnit.equiv(actual, expected), actual, expected, message );
	***REMOVED***,

	/**
	 * @name notPropEqual
	 * @function
	 */
	notPropEqual: function( actual, expected, message ) {
		actual = objectValues(actual);
		expected = objectValues(expected);
		QUnit.push( !QUnit.equiv(actual, expected), actual, expected, message );
	***REMOVED***,

	/**
	 * @name deepEqual
	 * @function
	 */
	deepEqual: function( actual, expected, message ) {
		QUnit.push( QUnit.equiv(actual, expected), actual, expected, message );
	***REMOVED***,

	/**
	 * @name notDeepEqual
	 * @function
	 */
	notDeepEqual: function( actual, expected, message ) {
		QUnit.push( !QUnit.equiv(actual, expected), actual, expected, message );
	***REMOVED***,

	/**
	 * @name strictEqual
	 * @function
	 */
	strictEqual: function( actual, expected, message ) {
		QUnit.push( expected === actual, actual, expected, message );
	***REMOVED***,

	/**
	 * @name notStrictEqual
	 * @function
	 */
	notStrictEqual: function( actual, expected, message ) {
		QUnit.push( expected !== actual, actual, expected, message );
	***REMOVED***,

	"throws": function( block, expected, message ) {
		var actual,
			expectedOutput = expected,
			ok = false;

		// 'expected' is optional
		if ( !message && typeof expected === "string" ) {
			message = expected;
			expected = null;
		***REMOVED***

		config.current.ignoreGlobalErrors = true;
		try {
			block.call( config.current.testEnvironment );
		***REMOVED*** catch (e) {
			actual = e;
		***REMOVED***
		config.current.ignoreGlobalErrors = false;

		if ( actual ) {

			// we don't want to validate thrown error
			if ( !expected ) {
				ok = true;
				expectedOutput = null;

			// expected is an Error object
			***REMOVED*** else if ( expected instanceof Error ) {
				ok = actual instanceof Error &&
					 actual.name === expected.name &&
					 actual.message === expected.message;

			// expected is a regexp
			***REMOVED*** else if ( QUnit.objectType( expected ) === "regexp" ) {
				ok = expected.test( errorString( actual ) );

			// expected is a string
			***REMOVED*** else if ( QUnit.objectType( expected ) === "string" ) {
				ok = expected === errorString( actual );

			// expected is a constructor
			***REMOVED*** else if ( actual instanceof expected ) {
				ok = true;

			// expected is a validation function which returns true is validation passed
			***REMOVED*** else if ( expected.call( {***REMOVED***, actual ) === true ) {
				expectedOutput = null;
				ok = true;
			***REMOVED***

			QUnit.push( ok, actual, expectedOutput, message );
		***REMOVED*** else {
			QUnit.pushFailure( message, null, "No exception was thrown." );
		***REMOVED***
	***REMOVED***
***REMOVED***;

/**
 * @deprecated since 1.8.0
 * Kept assertion helpers in root for backwards compatibility.
 */
extend( QUnit.constructor.prototype, assert );

/**
 * @deprecated since 1.9.0
 * Kept to avoid TypeErrors for undefined methods.
 */
QUnit.constructor.prototype.raises = function() {
	QUnit.push( false, false, false, "QUnit.raises has been deprecated since 2012 (fad3c1ea), use QUnit.throws instead" );
***REMOVED***;

/**
 * @deprecated since 1.0.0, replaced with error pushes since 1.3.0
 * Kept to avoid TypeErrors for undefined methods.
 */
QUnit.constructor.prototype.equals = function() {
	QUnit.push( false, false, false, "QUnit.equals has been deprecated since 2009 (e88049a0), use QUnit.equal instead" );
***REMOVED***;
QUnit.constructor.prototype.same = function() {
	QUnit.push( false, false, false, "QUnit.same has been deprecated since 2009 (e88049a0), use QUnit.deepEqual instead" );
***REMOVED***;

// Test for equality any JavaScript type.
// Author: Philippe Rathé <prathe@gmail.com>
QUnit.equiv = (function() {

	// Call the o related callback with the given arguments.
	function bindCallbacks( o, callbacks, args ) {
		var prop = QUnit.objectType( o );
		if ( prop ) {
			if ( QUnit.objectType( callbacks[ prop ] ) === "function" ) {
				return callbacks[ prop ].apply( callbacks, args );
			***REMOVED*** else {
				return callbacks[ prop ]; // or undefined
			***REMOVED***
		***REMOVED***
	***REMOVED***

	// the real equiv function
	var innerEquiv,
		// stack to decide between skip/abort functions
		callers = [],
		// stack to avoiding loops from circular referencing
		parents = [],
		parentsB = [],

		getProto = Object.getPrototypeOf || function ( obj ) {
			/*jshint camelcase:false */
			return obj.__proto__;
		***REMOVED***,
		callbacks = (function () {

			// for string, boolean, number and null
			function useStrictEquality( b, a ) {
				/*jshint eqeqeq:false */
				if ( b instanceof a.constructor || a instanceof b.constructor ) {
					// to catch short annotation VS 'new' annotation of a
					// declaration
					// e.g. var i = 1;
					// var j = new Number(1);
					return a == b;
				***REMOVED*** else {
					return a === b;
				***REMOVED***
			***REMOVED***

			return {
				"string": useStrictEquality,
				"boolean": useStrictEquality,
				"number": useStrictEquality,
				"null": useStrictEquality,
				"undefined": useStrictEquality,

				"nan": function( b ) {
					return isNaN( b );
				***REMOVED***,

				"date": function( b, a ) {
					return QUnit.objectType( b ) === "date" && a.valueOf() === b.valueOf();
				***REMOVED***,

				"regexp": function( b, a ) {
					return QUnit.objectType( b ) === "regexp" &&
						// the regex itself
						a.source === b.source &&
						// and its modifiers
						a.global === b.global &&
						// (gmi) ...
						a.ignoreCase === b.ignoreCase &&
						a.multiline === b.multiline &&
						a.sticky === b.sticky;
				***REMOVED***,

				// - skip when the property is a method of an instance (OOP)
				// - abort otherwise,
				// initial === would have catch identical references anyway
				"function": function() {
					var caller = callers[callers.length - 1];
					return caller !== Object && typeof caller !== "undefined";
				***REMOVED***,

				"array": function( b, a ) {
					var i, j, len, loop, aCircular, bCircular;

					// b could be an object literal here
					if ( QUnit.objectType( b ) !== "array" ) {
						return false;
					***REMOVED***

					len = a.length;
					if ( len !== b.length ) {
						// safe and faster
						return false;
					***REMOVED***

					// track reference to avoid circular references
					parents.push( a );
					parentsB.push( b );
					for ( i = 0; i < len; i++ ) {
						loop = false;
						for ( j = 0; j < parents.length; j++ ) {
							aCircular = parents[j] === a[i];
							bCircular = parentsB[j] === b[i];
							if ( aCircular || bCircular ) {
								if ( a[i] === b[i] || aCircular && bCircular ) {
									loop = true;
								***REMOVED*** else {
									parents.pop();
									parentsB.pop();
									return false;
								***REMOVED***
							***REMOVED***
						***REMOVED***
						if ( !loop && !innerEquiv(a[i], b[i]) ) {
							parents.pop();
							parentsB.pop();
							return false;
						***REMOVED***
					***REMOVED***
					parents.pop();
					parentsB.pop();
					return true;
				***REMOVED***,

				"object": function( b, a ) {
					/*jshint forin:false */
					var i, j, loop, aCircular, bCircular,
						// Default to true
						eq = true,
						aProperties = [],
						bProperties = [];

					// comparing constructors is more strict than using
					// instanceof
					if ( a.constructor !== b.constructor ) {
						// Allow objects with no prototype to be equivalent to
						// objects with Object as their constructor.
						if ( !(( getProto(a) === null && getProto(b) === Object.prototype ) ||
							( getProto(b) === null && getProto(a) === Object.prototype ) ) ) {
								return false;
						***REMOVED***
					***REMOVED***

					// stack constructor before traversing properties
					callers.push( a.constructor );

					// track reference to avoid circular references
					parents.push( a );
					parentsB.push( b );

					// be strict: don't ensure hasOwnProperty and go deep
					for ( i in a ) {
						loop = false;
						for ( j = 0; j < parents.length; j++ ) {
							aCircular = parents[j] === a[i];
							bCircular = parentsB[j] === b[i];
							if ( aCircular || bCircular ) {
								if ( a[i] === b[i] || aCircular && bCircular ) {
									loop = true;
								***REMOVED*** else {
									eq = false;
									break;
								***REMOVED***
							***REMOVED***
						***REMOVED***
						aProperties.push(i);
						if ( !loop && !innerEquiv(a[i], b[i]) ) {
							eq = false;
							break;
						***REMOVED***
					***REMOVED***

					parents.pop();
					parentsB.pop();
					callers.pop(); // unstack, we are done

					for ( i in b ) {
						bProperties.push( i ); // collect b's properties
					***REMOVED***

					// Ensures identical properties name
					return eq && innerEquiv( aProperties.sort(), bProperties.sort() );
				***REMOVED***
			***REMOVED***;
		***REMOVED***());

	innerEquiv = function() { // can take multiple arguments
		var args = [].slice.apply( arguments );
		if ( args.length < 2 ) {
			return true; // end transition
		***REMOVED***

		return (function( a, b ) {
			if ( a === b ) {
				return true; // catch the most you can
			***REMOVED*** else if ( a === null || b === null || typeof a === "undefined" ||
					typeof b === "undefined" ||
					QUnit.objectType(a) !== QUnit.objectType(b) ) {
				return false; // don't lose time with error prone cases
			***REMOVED*** else {
				return bindCallbacks(a, callbacks, [ b, a ]);
			***REMOVED***

			// apply transition with (1..n) arguments
		***REMOVED***( args[0], args[1] ) && innerEquiv.apply( this, args.splice(1, args.length - 1 )) );
	***REMOVED***;

	return innerEquiv;
***REMOVED***());

/**
 * jsDump Copyright (c) 2008 Ariel Flesler - aflesler(at)gmail(dot)com |
 * http://flesler.blogspot.com Licensed under BSD
 * (http://www.opensource.org/licenses/bsd-license.php) Date: 5/15/2008
 *
 * @projectDescription Advanced and extensible data dumping for Javascript.
 * @version 1.0.0
 * @author Ariel Flesler
 * @link {http://flesler.blogspot.com/2008/05/jsdump-pretty-dump-of-any-javascript.html***REMOVED***
 */
QUnit.jsDump = (function() {
	function quote( str ) {
		return "\"" + str.toString().replace( /"/g, "\\\"" ) + "\"";
	***REMOVED***
	function literal( o ) {
		return o + "";
	***REMOVED***
	function join( pre, arr, post ) {
		var s = jsDump.separator(),
			base = jsDump.indent(),
			inner = jsDump.indent(1);
		if ( arr.join ) {
			arr = arr.join( "," + s + inner );
		***REMOVED***
		if ( !arr ) {
			return pre + post;
		***REMOVED***
		return [ pre, inner + arr, base + post ].join(s);
	***REMOVED***
	function array( arr, stack ) {
		var i = arr.length, ret = new Array(i);
		this.up();
		while ( i-- ) {
			ret[i] = this.parse( arr[i] , undefined , stack);
		***REMOVED***
		this.down();
		return join( "[", ret, "]" );
	***REMOVED***

	var reName = /^function (\w+)/,
		jsDump = {
			// type is used mostly internally, you can fix a (custom)type in advance
			parse: function( obj, type, stack ) {
				stack = stack || [ ];
				var inStack, res,
					parser = this.parsers[ type || this.typeOf(obj) ];

				type = typeof parser;
				inStack = inArray( obj, stack );

				if ( inStack !== -1 ) {
					return "recursion(" + (inStack - stack.length) + ")";
				***REMOVED***
				if ( type === "function" )  {
					stack.push( obj );
					res = parser.call( this, obj, stack );
					stack.pop();
					return res;
				***REMOVED***
				return ( type === "string" ) ? parser : this.parsers.error;
			***REMOVED***,
			typeOf: function( obj ) {
				var type;
				if ( obj === null ) {
					type = "null";
				***REMOVED*** else if ( typeof obj === "undefined" ) {
					type = "undefined";
				***REMOVED*** else if ( QUnit.is( "regexp", obj) ) {
					type = "regexp";
				***REMOVED*** else if ( QUnit.is( "date", obj) ) {
					type = "date";
				***REMOVED*** else if ( QUnit.is( "function", obj) ) {
					type = "function";
				***REMOVED*** else if ( typeof obj.setInterval !== undefined && typeof obj.document !== "undefined" && typeof obj.nodeType === "undefined" ) {
					type = "window";
				***REMOVED*** else if ( obj.nodeType === 9 ) {
					type = "document";
				***REMOVED*** else if ( obj.nodeType ) {
					type = "node";
				***REMOVED*** else if (
					// native arrays
					toString.call( obj ) === "[object Array]" ||
					// NodeList objects
					( typeof obj.length === "number" && typeof obj.item !== "undefined" && ( obj.length ? obj.item(0) === obj[0] : ( obj.item( 0 ) === null && typeof obj[0] === "undefined" ) ) )
				) {
					type = "array";
				***REMOVED*** else if ( obj.constructor === Error.prototype.constructor ) {
					type = "error";
				***REMOVED*** else {
					type = typeof obj;
				***REMOVED***
				return type;
			***REMOVED***,
			separator: function() {
				return this.multiline ?	this.HTML ? "<br />" : "\n" : this.HTML ? "&nbsp;" : " ";
			***REMOVED***,
			// extra can be a number, shortcut for increasing-calling-decreasing
			indent: function( extra ) {
				if ( !this.multiline ) {
					return "";
				***REMOVED***
				var chr = this.indentChar;
				if ( this.HTML ) {
					chr = chr.replace( /\t/g, "   " ).replace( / /g, "&nbsp;" );
				***REMOVED***
				return new Array( this.depth + ( extra || 0 ) ).join(chr);
			***REMOVED***,
			up: function( a ) {
				this.depth += a || 1;
			***REMOVED***,
			down: function( a ) {
				this.depth -= a || 1;
			***REMOVED***,
			setParser: function( name, parser ) {
				this.parsers[name] = parser;
			***REMOVED***,
			// The next 3 are exposed so you can use them
			quote: quote,
			literal: literal,
			join: join,
			//
			depth: 1,
			// This is the list of parsers, to modify them, use jsDump.setParser
			parsers: {
				window: "[Window]",
				document: "[Document]",
				error: function(error) {
					return "Error(\"" + error.message + "\")";
				***REMOVED***,
				unknown: "[Unknown]",
				"null": "null",
				"undefined": "undefined",
				"function": function( fn ) {
					var ret = "function",
						// functions never have name in IE
						name = "name" in fn ? fn.name : (reName.exec(fn) || [])[1];

					if ( name ) {
						ret += " " + name;
					***REMOVED***
					ret += "( ";

					ret = [ ret, QUnit.jsDump.parse( fn, "functionArgs" ), "){" ].join( "" );
					return join( ret, QUnit.jsDump.parse(fn,"functionCode" ), "***REMOVED***" );
				***REMOVED***,
				array: array,
				nodelist: array,
				"arguments": array,
				object: function( map, stack ) {
					/*jshint forin:false */
					var ret = [ ], keys, key, val, i;
					QUnit.jsDump.up();
					keys = [];
					for ( key in map ) {
						keys.push( key );
					***REMOVED***
					keys.sort();
					for ( i = 0; i < keys.length; i++ ) {
						key = keys[ i ];
						val = map[ key ];
						ret.push( QUnit.jsDump.parse( key, "key" ) + ": " + QUnit.jsDump.parse( val, undefined, stack ) );
					***REMOVED***
					QUnit.jsDump.down();
					return join( "{", ret, "***REMOVED***" );
				***REMOVED***,
				node: function( node ) {
					var len, i, val,
						open = QUnit.jsDump.HTML ? "&lt;" : "<",
						close = QUnit.jsDump.HTML ? "&gt;" : ">",
						tag = node.nodeName.toLowerCase(),
						ret = open + tag,
						attrs = node.attributes;

					if ( attrs ) {
						for ( i = 0, len = attrs.length; i < len; i++ ) {
							val = attrs[i].nodeValue;
							// IE6 includes all attributes in .attributes, even ones not explicitly set.
							// Those have values like undefined, null, 0, false, "" or "inherit".
							if ( val && val !== "inherit" ) {
								ret += " " + attrs[i].nodeName + "=" + QUnit.jsDump.parse( val, "attribute" );
							***REMOVED***
						***REMOVED***
					***REMOVED***
					ret += close;

					// Show content of TextNode or CDATASection
					if ( node.nodeType === 3 || node.nodeType === 4 ) {
						ret += node.nodeValue;
					***REMOVED***

					return ret + open + "/" + tag + close;
				***REMOVED***,
				// function calls it internally, it's the arguments part of the function
				functionArgs: function( fn ) {
					var args,
						l = fn.length;

					if ( !l ) {
						return "";
					***REMOVED***

					args = new Array(l);
					while ( l-- ) {
						// 97 is 'a'
						args[l] = String.fromCharCode(97+l);
					***REMOVED***
					return " " + args.join( ", " ) + " ";
				***REMOVED***,
				// object calls it internally, the key part of an item in a map
				key: quote,
				// function calls it internally, it's the content of the function
				functionCode: "[code]",
				// node calls it internally, it's an html attribute value
				attribute: quote,
				string: quote,
				date: quote,
				regexp: literal,
				number: literal,
				"boolean": literal
			***REMOVED***,
			// if true, entities are escaped ( <, >, \t, space and \n )
			HTML: false,
			// indentation unit
			indentChar: "  ",
			// if true, items in a collection, are separated by a \n, else just a space.
			multiline: true
		***REMOVED***;

	return jsDump;
***REMOVED***());

/*
 * Javascript Diff Algorithm
 *  By John Resig (http://ejohn.org/)
 *  Modified by Chu Alan "sprite"
 *
 * Released under the MIT license.
 *
 * More Info:
 *  http://ejohn.org/projects/javascript-diff-algorithm/
 *
 * Usage: QUnit.diff(expected, actual)
 *
 * QUnit.diff( "the quick brown fox jumped over", "the quick fox jumps over" ) == "the  quick <del>brown </del> fox <del>jumped </del><ins>jumps </ins> over"
 */
QUnit.diff = (function() {
	/*jshint eqeqeq:false, eqnull:true */
	function diff( o, n ) {
		var i,
			ns = {***REMOVED***,
			os = {***REMOVED***;

		for ( i = 0; i < n.length; i++ ) {
			if ( !hasOwn.call( ns, n[i] ) ) {
				ns[ n[i] ] = {
					rows: [],
					o: null
				***REMOVED***;
			***REMOVED***
			ns[ n[i] ].rows.push( i );
		***REMOVED***

		for ( i = 0; i < o.length; i++ ) {
			if ( !hasOwn.call( os, o[i] ) ) {
				os[ o[i] ] = {
					rows: [],
					n: null
				***REMOVED***;
			***REMOVED***
			os[ o[i] ].rows.push( i );
		***REMOVED***

		for ( i in ns ) {
			if ( hasOwn.call( ns, i ) ) {
				if ( ns[i].rows.length === 1 && hasOwn.call( os, i ) && os[i].rows.length === 1 ) {
					n[ ns[i].rows[0] ] = {
						text: n[ ns[i].rows[0] ],
						row: os[i].rows[0]
					***REMOVED***;
					o[ os[i].rows[0] ] = {
						text: o[ os[i].rows[0] ],
						row: ns[i].rows[0]
					***REMOVED***;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		for ( i = 0; i < n.length - 1; i++ ) {
			if ( n[i].text != null && n[ i + 1 ].text == null && n[i].row + 1 < o.length && o[ n[i].row + 1 ].text == null &&
						n[ i + 1 ] == o[ n[i].row + 1 ] ) {

				n[ i + 1 ] = {
					text: n[ i + 1 ],
					row: n[i].row + 1
				***REMOVED***;
				o[ n[i].row + 1 ] = {
					text: o[ n[i].row + 1 ],
					row: i + 1
				***REMOVED***;
			***REMOVED***
		***REMOVED***

		for ( i = n.length - 1; i > 0; i-- ) {
			if ( n[i].text != null && n[ i - 1 ].text == null && n[i].row > 0 && o[ n[i].row - 1 ].text == null &&
						n[ i - 1 ] == o[ n[i].row - 1 ]) {

				n[ i - 1 ] = {
					text: n[ i - 1 ],
					row: n[i].row - 1
				***REMOVED***;
				o[ n[i].row - 1 ] = {
					text: o[ n[i].row - 1 ],
					row: i - 1
				***REMOVED***;
			***REMOVED***
		***REMOVED***

		return {
			o: o,
			n: n
		***REMOVED***;
	***REMOVED***

	return function( o, n ) {
		o = o.replace( /\s+$/, "" );
		n = n.replace( /\s+$/, "" );

		var i, pre,
			str = "",
			out = diff( o === "" ? [] : o.split(/\s+/), n === "" ? [] : n.split(/\s+/) ),
			oSpace = o.match(/\s+/g),
			nSpace = n.match(/\s+/g);

		if ( oSpace == null ) {
			oSpace = [ " " ];
		***REMOVED***
		else {
			oSpace.push( " " );
		***REMOVED***

		if ( nSpace == null ) {
			nSpace = [ " " ];
		***REMOVED***
		else {
			nSpace.push( " " );
		***REMOVED***

		if ( out.n.length === 0 ) {
			for ( i = 0; i < out.o.length; i++ ) {
				str += "<del>" + out.o[i] + oSpace[i] + "</del>";
			***REMOVED***
		***REMOVED***
		else {
			if ( out.n[0].text == null ) {
				for ( n = 0; n < out.o.length && out.o[n].text == null; n++ ) {
					str += "<del>" + out.o[n] + oSpace[n] + "</del>";
				***REMOVED***
			***REMOVED***

			for ( i = 0; i < out.n.length; i++ ) {
				if (out.n[i].text == null) {
					str += "<ins>" + out.n[i] + nSpace[i] + "</ins>";
				***REMOVED***
				else {
					// `pre` initialized at top of scope
					pre = "";

					for ( n = out.n[i].row + 1; n < out.o.length && out.o[n].text == null; n++ ) {
						pre += "<del>" + out.o[n] + oSpace[n] + "</del>";
					***REMOVED***
					str += " " + out.n[i].text + nSpace[i] + pre;
				***REMOVED***
			***REMOVED***
		***REMOVED***

		return str;
	***REMOVED***;
***REMOVED***());

// For browser, export only select globals
if ( typeof window !== "undefined" ) {
	extend( window, QUnit.constructor.prototype );
	window.QUnit = QUnit;
***REMOVED***

// For CommonJS environments, export everything
if ( typeof module !== "undefined" && module.exports ) {
	module.exports = QUnit;
***REMOVED***


// Get a reference to the global object, like window in browsers
***REMOVED***( (function() {
	return this;
***REMOVED***)() ));
