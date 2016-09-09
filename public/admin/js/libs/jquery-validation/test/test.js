if ( window.sessionStorage ) {
	sessionStorage.clear();
***REMOVED***
jQuery.validator.defaults.debug = true;
$.mockjaxSettings.log = $.noop;

$.mockjax({
	url: "form.php?user=Peter&password=foobar",
	responseText: "Hi Peter, welcome back.",
	responseStatus: 200,
	responseTime: 1
***REMOVED***);

$.mockjax({
	url: "users.php",
	data: {
		username: /Peter2?|asdf/
	***REMOVED***,
	responseText: "false",
	responseStatus: 200,
	responseTime: 1
***REMOVED***);

$.mockjax({
	url: "users2.php",
	data: {
		username: "asdf"
	***REMOVED***,
	responseText: "\"asdf is already taken, please try something else\"",
	responseStatus: 200,
	responseTime: 1
***REMOVED***);

$.mockjax({
	url: "echo.php",
	response: function( data ) {
		this.responseText = JSON.stringify( data.data );
	***REMOVED***,
	responseTime: 100
***REMOVED***);

// Asserts that there is a visible error with the given text for the specified element
QUnit.assert.hasError = function( element, text, message ) {
	var errors = $( element ).closest( "form" ).validate().errorsFor( element[ 0 ] ),
		actual = ( errors.length === 1 && errors.is( ":visible" ) ) ? errors.text() : "";
	QUnit.push( actual, actual, text, message );
***REMOVED***;

// Asserts that there is no visible error for the given element
QUnit.assert.noErrorFor = function( element, message ) {
	var errors = $( element ).closest( "form" ).validate().errorsFor( element[ 0 ] ),
		hidden = ( errors.length === 0 ) || (errors.is( ":hidden" ) && ( errors.text() === "" ) );
	QUnit.push( hidden, hidden, true, message );
***REMOVED***;

module( "validator" );

test( "Constructor", function() {
	var v1 = $( "#testForm1" ).validate(),
		v2 = $( "#testForm1" ).validate();

	equal( v1, v2, "Calling validate() multiple times must return the same validator instance" );
	equal( v1.elements().length, 3, "validator elements" );
***REMOVED***);

test( "validate() without elements, with non-form elements", 0, function() {
	$( "#doesntexist" ).validate();
***REMOVED***);

test( "valid() plugin method", function() {
	var form = $( "#userForm" ),
		input = $( "#username" );

	form.validate();
	ok ( !form.valid(), "Form isn't valid yet" );
	ok ( !input.valid(), "Input isn't valid either" );

	input.val( "Hello world" );
	ok ( form.valid(), "Form is now valid" );
	ok ( input.valid(), "Input is valid, too" );
***REMOVED***);

test( "valid() plugin method, multiple inputs", function() {
	var form = $( "#testForm1" ),
		validator = form.validate(),
		inputs = form.find( "input" );

	ok( !inputs.valid(), "all invalid" );
	inputs.not( ":first" ).val( "ok" );
	equal( validator.numberOfInvalids(), 2 );
	strictEqual( inputs.valid(), false, "just one invalid" );
	inputs.val( "ok" );
	strictEqual( inputs.valid(), true, "all valid" );
***REMOVED***);

test( "valid() plugin method, special handling for checkable groups", function() {
	// rule is defined on first checkbox, must apply to others, too
	var checkable = $( "#checkable2" );
	ok( !checkable.valid(), "must be invalid, not checked yet" );
	checkable.attr( "checked", true );
	ok( checkable.valid(), "valid, is now checked" );
	checkable.attr( "checked", false );
	ok( !checkable.valid(), "invalid again" );
	$( "#checkable3" ).attr( "checked", true );
	ok( checkable.valid(), "valid, third box is checked" );
***REMOVED***);

test( "valid() ???", function() {
	expect( 4 );
	var errorList = [
			{
				name: "meal",
				message: "foo",
				element: $( "#meal" )[ 0 ]
			***REMOVED***
		],
		v = $( "#testForm3" ).validate();

	ok( v.valid(), "No errors, must be valid" );
	v.errorList = errorList;
	ok( !v.valid(), "One error, must be invalid" );
	QUnit.reset();
	v = $( "#testForm3" ).validate({
		submitHandler: function() {
			ok( false, "Submit handler was called" );
		***REMOVED***
	***REMOVED***);
	ok( v.valid(), "No errors, must be valid and returning true, even with the submit handler" );
	v.errorList = errorList;
	ok( !v.valid(), "One error, must be invalid, no call to submit handler" );
***REMOVED***);

test( "valid(), ignores ignored elements", function() {
	$( "#testForm1clean" ).validate({
		ignore: "#firstnamec",
		rules: {
			firstnamec: "required"
		***REMOVED***
	***REMOVED***);
	ok( $( "#firstnamec" ).valid() );
***REMOVED***);

test( "addMethod", function() {
	expect( 3 );
	$.validator.addMethod( "hi", function( value ) {
		return value === "hi";
	***REMOVED***, "hi me too" );
	var method = $.validator.methods.hi,
		e = $( "#text1" )[ 0 ];
	ok( !method( e.value, e ), "Invalid" );
	e.value = "hi";
	ok( method( e.value, e ), "Invalid" );
	ok( jQuery.validator.messages.hi === "hi me too", "Check custom message" );
***REMOVED***);

test( "addMethod2", function() {
	expect( 4 );
	$.validator.addMethod( "complicatedPassword", function( value, element ) {
		return this.optional( element ) || /\D/.test( value ) && /\d/.test( value );
	***REMOVED***, "Your password must contain at least one number and one letter" );
	var v = jQuery( "#form" ).validate({
			rules: {
				action: { complicatedPassword: true ***REMOVED***
			***REMOVED***
		***REMOVED***),
		e = $( "#text1" )[ 0 ];

	e.value = "";
	strictEqual( v.element( e ), true, "Rule is optional, valid" );
	equal( 0, v.size() );
	e.value = "ko";
	ok( !v.element( e ), "Invalid, doesn't contain one of the required characters" );
	e.value = "ko1";
	ok( v.element( e ) );
***REMOVED***);

test( "form(): simple", function() {
	expect( 2 );
	var form = $( "#testForm1" )[ 0 ],
		v = $( form ).validate();

	ok( !v.form(), "Invalid form" );
	$( "#firstname" ).val( "hi" );
	$( "#lastname" ).val( "hi" );
	ok( v.form(), "Valid form" );
***REMOVED***);

test( "form(): checkboxes: min/required", function() {
	expect( 3 );
	var form = $( "#testForm6" )[ 0 ],
		v = $( form ).validate();

	ok( !v.form(), "Invalid form" );
	$( "#form6check1" ).attr( "checked", true );
	ok( !v.form(), "Invalid form" );
	$( "#form6check2" ).attr( "checked", true );
	ok( v.form(), "Valid form" );
***REMOVED***);

test( "form(): radio buttons: required", function() {
	expect( 6 );
	var form = $( "#testForm10" )[ 0 ],
		v = $( form ).validate({
			rules: {
				testForm10Radio: "required"
			***REMOVED***
		***REMOVED***);

	ok(!v.form(), "Invalid Form" );
	equal($( "#testForm10Radio1" ).attr( "class" ), "error" );
	equal($( "#testForm10Radio2" ).attr( "class" ), "error" );

	$( "#testForm10Radio2" ).attr( "checked", true );
	ok( v.form(), "Valid form" );

	equal($( "#testForm10Radio1" ).attr( "class" ), "valid" );
	equal($( "#testForm10Radio2" ).attr( "class" ), "valid" );
***REMOVED***);

test( "form(): selects: min/required", function() {
	expect( 3 );
	var form = $( "#testForm7" )[ 0 ],
		v = $( form ).validate();

	ok( !v.form(), "Invalid form" );
	$( "#optionxa" ).attr( "selected", true );
	ok( !v.form(), "Invalid form" );
	$( "#optionxb" ).attr( "selected", true );
	ok( v.form(), "Valid form" );
***REMOVED***);

test( "form(): with equalTo", function() {
	expect( 2 );
	var form = $( "#testForm5" )[ 0 ],
		v = $( form ).validate();

	ok( !v.form(), "Invalid form" );
	$( "#x1, #x2" ).val( "hi" );
	ok( v.form(), "Valid form" );
***REMOVED***);

test( "form(): with equalTo and onfocusout=false", function() {
	expect( 4 );
	var form = $( "#testForm5" )[ 0 ],
		v = $( form ).validate({
			onfocusout: false,
			showErrors: function() {
				ok( true, "showErrors should only be called twice" );
				this.defaultShowErrors();
			***REMOVED***
		***REMOVED***);

	$( "#x1, #x2" ).val( "hi" );
	ok( v.form(), "Valid form" );
	$( "#x2" ).val( "not equal" ).blur();
	ok( !v.form(), "Invalid form" );
***REMOVED***);

test( "check(): simple", function() {
	expect( 3 );
	var element = $( "#firstname" )[ 0 ],
		v = $( "#testForm1" ).validate();

	ok( v.size() === 0, "No errors yet" );
	v.check( element );
	ok( v.size() === 1, "error exists" );
	v.errorList = [];
	$( "#firstname" ).val( "hi" );
	v.check( element );
	ok( v.size() === 0, "No more errors" );
***REMOVED***);

test( "hide(): input", function() {
	expect( 3 );
	var errorLabel = $( "#errorFirstname" ),
		element = $( "#firstname" )[ 0 ],
		v;

	element.value = "bla";
	v = $( "#testForm1" ).validate();
	errorLabel.show();

	ok( errorLabel.is( ":visible" ), "Error label visible before validation" );
	ok( v.element( element ) );
	ok( errorLabel.is( ":hidden" ), "Error label not visible after validation" );
***REMOVED***);

test( "hide(): radio", function() {
	expect( 2 );
	var errorLabel = $( "#agreeLabel" ),
		element = $( "#agb" )[ 0 ],
		v;

	element.checked = true;
	v = $( "#testForm2" ).validate({ errorClass: "xerror" ***REMOVED***);
	errorLabel.show();

	ok( errorLabel.is( ":visible" ), "Error label visible after validation" );
	v.element( element );
	ok( errorLabel.is( ":hidden" ), "Error label not visible after hiding it" );
***REMOVED***);

test( "hide(): errorWrapper", function() {
	expect( 2 );
	var errorLabel = $( "#errorWrapper" ),
		element = $( "#meal" )[ 0 ],
		v;

	element.selectedIndex = 1;
	errorLabel.show();

	ok( errorLabel.is( ":visible" ), "Error label visible after validation" );
	v = $( "#testForm3" ).validate({ wrapper: "li", errorLabelContainer: $( "#errorContainer" ) ***REMOVED***);
	v.element( element );
	ok( errorLabel.is( ":hidden" ), "Error label not visible after hiding it" );
***REMOVED***);

test( "hide(): container", function() {
	expect( 4 );
	var errorLabel = $( "#errorContainer" ),
		v = $( "#testForm3" ).validate({ errorWrapper: "li", errorContainer: $( "#errorContainer" ) ***REMOVED***);

	v.form();
	ok( errorLabel.is( ":visible" ), "Error label visible after validation" );
	$( "#meal" )[ 0 ].selectedIndex = 1;
	v.form();
	ok( errorLabel.is( ":hidden" ), "Error label not visible after hiding it" );
	$( "#meal" )[ 0 ].selectedIndex = -1;
	v.element( "#meal" );
	ok( errorLabel.is( ":visible" ), "Error label visible after validation" );
	$( "#meal" )[ 0 ].selectedIndex = 1;
	v.element( "#meal" );
	ok( errorLabel.is( ":hidden" ), "Error label not visible after hiding it" );
***REMOVED***);

test( "submitHandler keeps submitting button", function() {
	var button, event;

	$( "#userForm" ).validate({
		debug: true,
		submitHandler: function( form ) {
			// dunno how to test this better; this tests the implementation that uses a hidden input
			var hidden = $( form ).find( "input:hidden" )[ 0 ];
			deepEqual( hidden.value, button.value );
			deepEqual( hidden.name, button.name );
		***REMOVED***
	***REMOVED***);
	$( "#username" ).val( "bla" );
	button = $( "#userForm :submit" )[ 0 ];
	event = $.Event( "click" );
	event.preventDefault();
	$.event.trigger( event, null, button );
	$( "#userForm" ).submit();
***REMOVED***);

asyncTest("validation triggered on radio/checkbox when using keyboard", function() {
    expect( 1 );
	var input, i, events, triggeredEvents = 0;

	$("#form").validate({
		onfocusin: function() {
			triggeredEvents++;
		***REMOVED***,
		onfocusout: function() {
			triggeredEvents++;
		***REMOVED***,
		onkeyup: function() {
			triggeredEvents++;
		***REMOVED***
	***REMOVED***);

	events = [
		$.Event("focusin"),
		$.Event("focusout"),
		$.Event("keyup")
	];

	input = $("#form :radio:first");
	for (i = 0; i < events.length; i++) {
		input.trigger(events[i]);
	***REMOVED***

	input = $("#form :checkbox:first");
	for (i = 0; i < events.length; i++) {
		input.trigger(events[i]);
	***REMOVED***

	setTimeout(function() {
		// assert all event handlers fired
		equal(6, triggeredEvents);
		start();
	***REMOVED***, 50);
***REMOVED***);

asyncTest("validation triggered on radio/checkbox when using mouseclick", function() {
    expect( 1 );
	var input, i, events, triggeredEvents = 0;

	$("#form").validate({
		onclick: function() {
			triggeredEvents++;
		***REMOVED***
	***REMOVED***);

	events = [
		$.Event("click")
	];

	input = $("#form :radio:first");
	for (i = 0; i < events.length; i++) {
		input.trigger(events[i]);
	***REMOVED***

	input = $("#form :checkbox:first");
	for (i = 0; i < events.length; i++) {
		input.trigger(events[i]);
	***REMOVED***

	setTimeout(function() {
		// assert all event handlers fired
		equal(2, triggeredEvents);
		start();
	***REMOVED***, 50);
***REMOVED***);

test( "showErrors()", function() {
	expect( 4 );
	var errorLabel = $( "#errorFirstname" ).hide(),
		v = $( "#testForm1" ).validate();

	ok( errorLabel.is( ":hidden" ) );
	equal( 0, $( "#lastname" ).next( ".error:not(input)" ).size() );
	v.showErrors({ "firstname": "required", "lastname": "bla" ***REMOVED***);
	equal( true, errorLabel.is( ":visible" ) );
	equal( true, $( "#lastname" ).next( ".error:not(input)" ).is( ":visible" ) );
***REMOVED***);

test( "showErrors(), allow empty string and null as default message", function() {
	$( "#userForm" ).validate({
		rules: {
			username: {
				required: true,
				minlength: 3
			***REMOVED***
		***REMOVED***,
		messages: {
			username: {
				required: "",
				minlength: "too short"
			***REMOVED***
		***REMOVED***
	***REMOVED***);
	ok( !$( "#username" ).valid() );
	equal( "", $( "#username" ).next( ".error:not(input)" ).text() );

	$( "#username" ).val( "ab" );
	ok( !$( "#username" ).valid() );
	equal( "too short", $( "#username" ).next( ".error:not(input)" ).text() );

	$( "#username" ).val( "abc" );
	ok( $( "#username" ).valid() );
	ok( $( "#username" ).next( ".error:not(input)" ).is( ":hidden" ) );
***REMOVED***);

test( "showErrors() - external messages", function() {
	expect( 4 );
	var methods = $.extend( {***REMOVED***, $.validator.methods ),
		messages = $.extend( {***REMOVED***, $.validator.messages ),
		form, v;

	$.validator.addMethod( "foo", function() { return false; ***REMOVED***);
	$.validator.addMethod( "bar", function() { return false; ***REMOVED***);
	equal( 0, $( "#testForm4 #f1" ).next( ".error:not(input)" ).size() );
	equal( 0, $( "#testForm4 #f2" ).next( ".error:not(input)" ).size() );

	form = $( "#testForm4" )[ 0 ];
	v = $( form ).validate({
		messages: {
			f1: "Please!",
			f2: "Wohoo!"
		***REMOVED***
	***REMOVED***);
	v.form();
	equal( $( "#testForm4 #f1" ).next( ".error:not(input)" ).text(), "Please!" );
	equal( $( "#testForm4 #f2" ).next( ".error:not(input)" ).text(), "Wohoo!" );

	$.validator.methods = methods;
	$.validator.messages = messages;
***REMOVED***);

test( "showErrors() - custom handler", function() {
	expect( 5 );
	var v = $( "#testForm1" ).validate({
		showErrors: function( errorMap, errorList ) {
			equal( v, this );
			equal( v.errorList, errorList );
			equal( v.errorMap, errorMap );
			equal( "buga", errorMap.firstname );
			equal( "buga", errorMap.lastname );
		***REMOVED***
	***REMOVED***);
	v.form();
***REMOVED***);

test( "option: (un)highlight, default", function() {
	$( "#testForm1" ).validate();
	var e = $( "#firstname" );
	ok( !e.hasClass( "error" ) );
	ok( !e.hasClass( "valid" ) );
	e.valid();
	ok( e.hasClass( "error" ) );
	ok( !e.hasClass( "valid" ) );
	e.val( "hithere" ).valid();
	ok( !e.hasClass( "error" ) );
	ok( e.hasClass( "valid" ) );
***REMOVED***);

test( "option: (un)highlight, nothing", function() {
	expect( 3 );
	$( "#testForm1" ).validate({
		highlight: false,
		unhighlight: false
	***REMOVED***);
	var e = $( "#firstname" );
	ok( !e.hasClass( "error" ) );
	e.valid();
	ok( !e.hasClass( "error" ) );
	e.valid();
	ok( !e.hasClass( "error" ) );
***REMOVED***);

test( "option: (un)highlight, custom", function() {
	expect( 5 );
	$( "#testForm1clean" ).validate({
		highlight: function( element, errorClass ) {
			equal( "invalid", errorClass );
			$( element ).hide();
		***REMOVED***,
		unhighlight: function( element, errorClass ) {
			equal( "invalid", errorClass );
			$( element ).show();
		***REMOVED***,
		ignore: "",
		errorClass: "invalid",
		rules: {
			firstnamec: "required"
		***REMOVED***
	***REMOVED***);
	var e = $( "#firstnamec" );
	ok( e.is( ":visible" ) );
	e.valid();
	ok( !e.is( ":visible" ) );
	e.val( "hithere" ).valid();
	ok( e.is( ":visible" ) );
***REMOVED***);

test( "option: (un)highlight, custom2", function() {
	expect( 6 );
	var e, l;
	$( "#testForm1" ).validate({
		highlight: function( element, errorClass ) {
			$( element ).addClass( errorClass );
			$( element ).next( ".error:not(input)" ).addClass( errorClass );
		***REMOVED***,
		unhighlight: function( element, errorClass ) {
			$( element ).removeClass( errorClass );
			$( element ).next( ".error:not(input)" ).removeClass( errorClass );
		***REMOVED***,
		errorClass: "invalid"
	***REMOVED***);

	e = $( "#firstname" );
	l = $( "#errorFirstname" );

	ok( !e.is( ".invalid" ) );
	ok( !l.is( ".invalid" ) );
	e.valid();
	ok( e.is( ".invalid" ) );
	ok( l.is( ".invalid" ) );
	e.val( "hithere" ).valid();
	ok( !e.is( ".invalid" ) );
	ok( !l.is( ".invalid" ) );
***REMOVED***);

test( "option: focusCleanup default false", function() {
	var form = $( "#userForm" );
	form.validate();
	form.valid();
	ok( form.find( "#username" ).next( ".error:not(input)" ).is( ":visible" ));
	$( "#username" ).focus();
	ok( form.find( "#username" ).next( ".error:not(input)" ).is( ":visible" ));
***REMOVED***);

test( "option: focusCleanup true", function() {
	var form = $( "#userForm" );
	form.validate({
		focusCleanup: true
	***REMOVED***);
	form.valid();
	ok( form.find( "#username" ).next( ".error:not(input)" ).is( ":visible" ) );
	$( "#username" ).focus().trigger( "focusin" );
	ok( !form.find( "#username" ).next( ".error:not(input)" ).is( ":visible" ) );
***REMOVED***);

test( "option: focusCleanup with wrapper", function() {
	var form = $( "#userForm" );
	form.validate({
		focusCleanup: true,
		wrapper: "span"
	***REMOVED***);
	form.valid();
	ok( form.is( ":has(span:visible:has(.error#username-error))" ) );
	$( "#username" ).focus().trigger( "focusin" );
	ok( !form.is( ":has(span:visible:has(.error#username-error))" ) );
***REMOVED***);

test( "option: errorClass with multiple classes", function() {
	var form = $( "#userForm" );
	form.validate({
		focusCleanup: true,
		wrapper: "span",
		errorClass: "error error1 error2"
	***REMOVED***);
	form.valid();
	ok( form.is( ":has(span:visible:has(.error#username-error))" ) );
	ok( form.is( ":has(span:visible:has(.error1#username-error))" ) );
	ok( form.is( ":has(span:visible:has(.error2#username-error))" ) );
	$( "#username" ).focus().trigger( "focusin" );
	ok( !form.is( ":has(span:visible:has(.error#username-error))" ) );
	ok( !form.is( ":has(span:visible:has(.error1#username-error))" ) );
	ok( !form.is( ":has(span:visible:has(.error2#username-error))" ) );
***REMOVED***);

test( "defaultMessage(), empty title is ignored", function() {
	var v = $( "#userForm" ).validate();
	equal( "This field is required.", v.defaultMessage($( "#username" )[ 0 ], "required" ) );
***REMOVED***);

test( "formatAndAdd", function() {
	expect( 4 );
	var v = $( "#form" ).validate(),
		fakeElement = { form: $( "#form" )[ 0 ], name: "bar" ***REMOVED***;

	v.formatAndAdd( fakeElement, { method: "maxlength", parameters: 2 ***REMOVED***);
	equal( "Please enter no more than 2 characters.", v.errorList[ 0 ].message );
	equal( "bar", v.errorList[ 0 ].element.name );

	v.formatAndAdd( fakeElement, { method: "range", parameters: [ 2, 4 ] ***REMOVED***);
	equal( "Please enter a value between 2 and 4.", v.errorList[ 1 ].message );

	v.formatAndAdd( fakeElement, { method: "range", parameters: [ 0, 4 ] ***REMOVED***);
	equal( "Please enter a value between 0 and 4.", v.errorList[ 2 ].message );
***REMOVED***);

test( "formatAndAdd2", function() {
	expect( 3 );
	var v = $( "#form" ).validate(),
		fakeElement = { form: $( "#form" )[ 0 ], name: "bar" ***REMOVED***;

	jQuery.validator.messages.test1 = function( param, element ) {
		equal( v, this );
		equal( 0, param );
		return "element " + element.name + " is not valid";
	***REMOVED***;
	v.formatAndAdd( fakeElement, { method: "test1", parameters: 0 ***REMOVED***);
	equal( "element bar is not valid", v.errorList[ 0 ].message );
***REMOVED***);

test( "formatAndAdd, auto detect substitution string", function() {
	var v = $( "#testForm1clean" ).validate({
		rules: {
			firstnamec: {
				required: true,
				rangelength: [ 5, 10 ]
			***REMOVED***
		***REMOVED***,
		messages: {
			firstnamec: {
				rangelength: "at least ${0***REMOVED***, up to {1***REMOVED***"
			***REMOVED***
		***REMOVED***
	***REMOVED***);
	$( "#firstnamec" ).val( "abc" );
	v.form();
	equal( "at least 5, up to 10", v.errorList[ 0 ].message );
***REMOVED***);

asyncTest( "option invalidHandler", function() {
	expect( 1 );
	$( "#testForm1clean" ).validate({
		invalidHandler: function() {
			ok( true, "invalid-form event triggered called" );
			start();
		***REMOVED***
	***REMOVED***);
	$( "#usernamec" ).val( "asdf" ).rules( "add", { required: true, minlength: 5 ***REMOVED***);
	$( "#testForm1clean" ).submit();
***REMOVED***);

test( "findByName()", function() {
	deepEqual(
		new $.validator({***REMOVED***, document.getElementById( "form" ))
			.findByName( document.getElementById( "radio1" ).name )
			.get(),
		$( "#form" ).find( "[name=radio1]" ).get()
	);
***REMOVED***);

test( "focusInvalid()", function() {
	// TODO when using custom focusin, this is triggered just once
	// TODO when using 1.4 focusin, triggered twice; fix once not testing against 1.3 anymore
	// expect( 1 );
	var inputs = $( "#testForm1 input" ).focus(function() {
			equal( inputs[ 0 ], this, "focused first element" );
		***REMOVED***),
		v = $( "#testForm1" ).validate();

	v.form();
	v.focusInvalid();
***REMOVED***);

test( "findLastActive()", function() {
	expect( 3 );
	var v = $( "#testForm1" ).validate(),
		lastActive;

	ok( !v.findLastActive() );
	v.form();
	v.focusInvalid();
	equal( v.findLastActive(), $( "#firstname" )[ 0 ] );
	lastActive = $( "#lastname" ).trigger( "focus" ).trigger( "focusin" )[ 0 ];

	equal( v.lastActive, lastActive );
***REMOVED***);

test( "validating multiple checkboxes with 'required'", function() {
	expect( 3 );
	var checkboxes = $( "#form input[name=check3]" ).prop( "checked", false ),
		v;
	equal( checkboxes.size(), 5 );

	v = $( "#form" ).validate({
		rules: {
			check3: "required"
		***REMOVED***
	***REMOVED***);
	v.form();

	equal( v.size(), 1 );
	checkboxes.filter( ":last" ).prop( "checked", true );
	v.form();
	equal( v.size(), 0 );
***REMOVED***);

test( "dynamic form", function() {
	var counter = 0,
		v;
	function add() {
		$( "<input data-rule-required='true' name='list" + counter++ + "' />" ).appendTo( "#testForm2" );
	***REMOVED***
	function errors( expected, message ) {
		equal( expected, v.size(), message );
	***REMOVED***

	v = $( "#testForm2" ).validate();
	v.form();
	errors( 1 );
	add();
	v.form();
	errors( 2 );
	add();
	v.form();
	errors( 3 );
	$( "#testForm2 input[name=list1]" ).remove();
	v.form();
	errors( 2 );
	add();
	v.form();
	errors( 3 );
	$( "#testForm2 input[name^=list]" ).remove();
	v.form();
	errors( 1 );
	$( "#agb" ).attr( "disabled", true );
	v.form();
	errors( 0 );
	$( "#agb" ).attr( "disabled", false );
	v.form();
	errors( 1 );
	$( "#agb" ).attr( "readonly", true );
	v.form();
	errors( 0 );
	$( "#agb" ).attr( "readonly", false );
	v.form();
	errors( 1 );
***REMOVED***);

test( "idOrName()", function() {
	expect( 4 );
	var v = $( "#testForm1" ).validate();
	equal( "form8input", v.idOrName( $( "#form8input" )[ 0 ] ) );
	equal( "check", v.idOrName( $( "#form6check1" )[ 0 ] ) );
	equal( "agree", v.idOrName( $( "#agb" )[ 0 ] ) );
	equal( "button", v.idOrName( $( "#form :button" )[ 0 ] ) );
***REMOVED***);

test( "resetForm()", function() {
	function errors( expected, message ) {
		equal( expected, v.size(), message );
	***REMOVED***
	var v = $( "#testForm1" ).validate();
	v.form();
	errors( 2 );
	$( "#firstname" ).val( "hiy" );
	v.resetForm();
	errors( 0 );
	equal( "", $( "#firstname" ).val(), "form plugin is included, therefor resetForm must also reset inputs, not only errors" );
***REMOVED***);

test( "message from title", function() {
	var v = $( "#withTitle" ).validate();
	v.checkForm();
	equal( v.errorList[ 0 ].message, "fromtitle", "title not used" );
***REMOVED***);

test( "ignoreTitle", function() {
	var v = $( "#withTitle" ).validate({ ignoreTitle: true ***REMOVED***);
	v.checkForm();
	equal( v.errorList[ 0 ].message, $.validator.messages.required, "title used when it should have been ignored" );
***REMOVED***);

asyncTest( "ajaxSubmit", function() {
	expect( 1 );
	$( "#user" ).val( "Peter" );
	$( "#password" ).val( "foobar" );
	jQuery( "#signupForm" ).validate({
		submitHandler: function( form ) {
			jQuery( form ).ajaxSubmit({
				success: function( response ) {
					equal( "Hi Peter, welcome back.", response );
					start();
				***REMOVED***
			***REMOVED***);
		***REMOVED***
	***REMOVED***);
	jQuery( "#signupForm" ).triggerHandler( "submit" );
***REMOVED***);

test( "validating groups settings parameter", function() {
	var form = $( "<form>" ),
		validate = form.validate({
			groups: {
				arrayGroup: [ "input one", "input-two", "input three" ],
				stringGroup: "input-four input-five input-six"
			***REMOVED***
		***REMOVED***);

	equal( validate.groups[ "input one" ], "arrayGroup" );
	equal( validate.groups[ "input-two" ], "arrayGroup" );
	equal( validate.groups[ "input three" ], "arrayGroup" );
	equal( validate.groups[ "input-four" ], "stringGroup" );
	equal( validate.groups[ "input-five" ], "stringGroup" );
	equal( validate.groups[ "input-six" ], "stringGroup" );
***REMOVED***);

test( "bypassing validation on form submission", function() {
	var form = $( "#bypassValidation" ),
		normalSubmission = $( "form#bypassValidation :input[id=normalSubmit]" ),
		bypassSubmitWithCancel = $( "form#bypassValidation :input[id=bypassSubmitWithCancel]" ),
		bypassSubmitWithNoValidate1 = $( "form#bypassValidation :input[id=bypassSubmitWithNoValidate1]" ),
		bypassSubmitWithNoValidate2 = $( "form#bypassValidation :input[id=bypassSubmitWithNoValidate2]" ),
		$v = form.validate({
			debug: true
		***REMOVED***);

	bypassSubmitWithCancel.click();
	equal($v.numberOfInvalids(), 0, "Validation was bypassed using CSS 'cancel' class." );
	$v.resetForm();

	bypassSubmitWithNoValidate1.click();
	equal($v.numberOfInvalids(), 0, "Validation was bypassed using blank 'formnovalidate' attribute." );
	$v.resetForm();

	bypassSubmitWithNoValidate2.click();
	equal($v.numberOfInvalids(), 0, "Validation was bypassed using 'formnovalidate=\"formnovalidate\"' attribute." );
	$v.resetForm();

	normalSubmission.click();
	equal($v.numberOfInvalids(), 1, "Validation failed correctly" );
***REMOVED***);

module( "misc" );

test( "success option", function() {
	expect( 7 );
	equal( "", $( "#firstname" ).val() );
	var v = $( "#testForm1" ).validate({
			success: "valid"
		***REMOVED***),
		label = $( "#testForm1 .error:not(input)" );

	ok( label.is( ".error" ) );
	ok( !label.is( ".valid" ) );
	v.form();
	ok( label.is( ".error" ) );
	ok( !label.is( ".valid" ) );
	$( "#firstname" ).val( "hi" );
	v.form();
	ok( label.is( ".error" ) );
	ok( label.is( ".valid" ) );
***REMOVED***);

test( "success option2", function() {
	expect( 5 );
	equal( "", $( "#firstname" ).val() );
	var v = $( "#testForm1" ).validate({
			success: "valid"
		***REMOVED***),
		label = $( "#testForm1 .error:not(input)" );

	ok( label.is( ".error" ) );
	ok( !label.is( ".valid" ) );
	$( "#firstname" ).val( "hi" );
	v.form();
	ok( label.is( ".error" ) );
	ok( label.is( ".valid" ) );
***REMOVED***);

test( "success option3", function() {
	expect( 5 );
	equal( "", $( "#firstname" ).val() );
	$( "#errorFirstname" ).remove();
	var v = $( "#testForm1" ).validate({
			success: "valid"
		***REMOVED***),
		labels;

	equal( 0, $( "#testForm1 .error:not(input)" ).size() );
	$( "#firstname" ).val( "hi" );
	v.form();
	labels = $( "#testForm1 .error:not(input)" );

	equal( 3, labels.size() );
	ok( labels.eq( 0 ).is( ".valid" ) );
	ok( !labels.eq( 1 ).is( ".valid" ) );
***REMOVED***);

test( "successlist", function() {
	var v = $( "#form" ).validate({ success: "xyz" ***REMOVED***);
	v.form();
	equal( 0, v.successList.length );
***REMOVED***);

test( "success isn't called for optional elements with no other rules", function() {
	expect( 4 );
	equal( "", $( "#firstname" ).removeAttr( "data-rule-required" ).removeAttr( "data-rule-minlength" ).val() );
	$( "#something" ).remove();
	$( "#lastname" ).remove();
	$( "#errorFirstname" ).remove();
	var v = $( "#testForm1" ).validate({
		success: function() {
			ok( false, "don't call success for optional elements!" );
		***REMOVED***,
		rules: {
			firstname: { required: false ***REMOVED***
		***REMOVED***
	***REMOVED***);
	equal( 0, $( "#testForm1 .error:not(input)" ).size() );
	v.form();
	equal( 0, $( "#testForm1 .error:not(input)" ).size() );
	$( "#firstname" ).valid();
	equal( 0, $( "#testForm1 .error:not(input)" ).size() );
***REMOVED***);

test( "success is called for optional elements with other rules", function() {
	expect( 1 );

	$.validator.addMethod( "custom1", function() {
		return true;
	***REMOVED***, "" );

	$( "#testForm1clean" ).validate({
		success: function() {
			ok( true, "success called correctly!" );
		***REMOVED***,
		rules: {
			firstnamec: {
				required: false,
				custom1: true
			***REMOVED***
		***REMOVED***
	***REMOVED***);

	$( "#firstnamec" ).valid();

	delete $.validator.methods.custom1;
***REMOVED***);

test( "success callback with element", function() {
	expect( 1 );
	var v = $( "#userForm" ).validate({
		success: function( label, element ) {
			equal( element, $( "#username" ).get( 0 ) );
		***REMOVED***
	***REMOVED***);
	$( "#username" ).val( "hi" );
	v.form();
***REMOVED***);

test( "all rules are evaluated even if one returns a dependency-mistmatch", function() {
	expect( 6 );
	equal( "", $( "#firstname" ).removeAttr( "data-rule-required" ).removeAttr( "data-rule-minlength" ).val() );
	$( "#lastname" ).remove();
	$( "#errorFirstname" ).remove();
	$.validator.addMethod( "custom1", function() {
		ok( true, "custom method must be evaluated" );
		return true;
	***REMOVED***, "" );
	var v = $( "#testForm1" ).validate({
		rules: {
			firstname: {
				email: true,
				custom1: true
			***REMOVED***
		***REMOVED***
	***REMOVED***);
	equal( 0, $( "#testForm1 .error:not(input)" ).size() );
	v.form();
	equal( 0, $( "#testForm1 .error:not(input)" ).size() );
	$( "#firstname" ).valid();
	equal( 0, $( "#testForm1 .error:not(input)" ).size() );

	delete $.validator.methods.custom1;
	delete $.validator.messages.custom1;
***REMOVED***);

test( "messages", function() {
	var m = jQuery.validator.messages;
	equal( "Please enter no more than 0 characters.", m.maxlength( 0 ) );
	equal( "Please enter at least 1 characters.", m.minlength( 1 ) );
	equal( "Please enter a value between 1 and 2 characters long.", m.rangelength( [ 1, 2 ] ) );
	equal( "Please enter a value less than or equal to 1.", m.max( 1 ) );
	equal( "Please enter a value greater than or equal to 0.", m.min( 0 ) );
	equal( "Please enter a value between 1 and 2.", m.range( [ 1, 2 ] ) );
***REMOVED***);

test( "jQuery.validator.format", function() {
	equal(
		"Please enter a value between 0 and 1.",
		jQuery.validator.format( "Please enter a value between {0***REMOVED*** and {1***REMOVED***.", 0, 1 )
	);
	equal(
		"0 is too fast! Enter a value smaller then 0 and at least -15",
		jQuery.validator.format( "{0***REMOVED*** is too fast! Enter a value smaller then {0***REMOVED*** and at least {1***REMOVED***", 0, -15 )
	);
	var template = jQuery.validator.format( "{0***REMOVED*** is too fast! Enter a value smaller then {0***REMOVED*** and at least {1***REMOVED***" );
	equal( "0 is too fast! Enter a value smaller then 0 and at least -15", template( 0, -15 ) );
	template = jQuery.validator.format( "Please enter a value between {0***REMOVED*** and {1***REMOVED***." );
	equal( "Please enter a value between 1 and 2.", template( [ 1, 2 ] ) );
	equal( $.validator.format( "{0***REMOVED***", "$0" ), "$0" );
***REMOVED***);

test( "option: ignore", function() {
	var v = $( "#testForm1" ).validate({
		ignore: "[name=lastname]"
	***REMOVED***);
	v.form();
	equal( 1, v.size() );
***REMOVED***);

test( "option: subformRequired", function() {
	jQuery.validator.addMethod( "billingRequired", function( value, element ) {
		if ($( "#bill_to_co" ).is( ":checked" )) {
			return $( element ).parents( "#subform" ).length;
		***REMOVED***
		return !this.optional( element );
	***REMOVED***, "" );
	var v = $( "#subformRequired" ).validate();
	v.form();
	equal( 1, v.size() );
	$( "#bill_to_co" ).attr( "checked", false );
	v.form();
	equal( 2, v.size() );

	delete $.validator.methods.billingRequired;
	delete $.validator.messages.billingRequired;
***REMOVED***);

module( "expressions" );

test( "expression: :blank", function() {
	var e = $( "#lastname" )[ 0 ];
	equal( 1, $( e ).filter( ":blank" ).length );
	e.value = " ";
	equal( 1, $( e ).filter( ":blank" ).length );
	e.value = "   ";
	equal( 1, $( e ).filter( ":blank" ).length );
	e.value = " a ";
	equal( 0, $( e ).filter( ":blank" ).length );
***REMOVED***);

test( "expression: :filled", function() {
	var e = $( "#lastname" )[ 0 ];
	equal( 0, $( e ).filter( ":filled" ).length );
	e.value = " ";
	equal( 0, $( e ).filter( ":filled" ).length );
	e.value = "   ";
	equal( 0, $( e ).filter( ":filled" ).length );
	e.value = " a ";
	equal( 1, $( e ).filter( ":filled" ).length );
***REMOVED***);

test( "expression: :unchecked", function() {
	var e = $( "#check2" )[ 0 ];
	equal( 1, $( e ).filter( ":unchecked" ).length );
	e.checked = true;
	equal( 0, $( e ).filter( ":unchecked" ).length );
	e.checked = false;
	equal( 1, $( e ).filter( ":unchecked" ).length );
***REMOVED***);

module( "events" );

test( "validate on blur", function() {
	function errors( expected, message ) {
		equal( v.size(), expected, message );
	***REMOVED***
	function labels( expected ) {
		equal( v.errors().filter( ":visible" ).size(), expected );
	***REMOVED***
	function blur( target ) {
		target.trigger( "blur" ).trigger( "focusout" );
	***REMOVED***
	$( "#errorFirstname" ).hide();
	var e = $( "#firstname" ),
		v = $( "#testForm1" ).validate();

	$( "#something" ).val( "" );
	blur( e );
	errors( 0, "No value yet, required is skipped on blur" );
	labels( 0 );
	e.val( "h" );
	blur( e );
	errors( 1, "Required was ignored, but as something was entered, check other rules, minlength isn't met" );
	labels( 1 );
	e.val( "hh" );
	blur( e );
	errors( 0, "All is fine" );
	labels( 0 );
	e.val( "" );
	v.form();
	errors( 3, "Submit checks all rules, both fields invalid" );
	labels( 3 );
	blur( e );
	errors( 1, "Blurring the field results in emptying the error list first, then checking the invalid field: its still invalid, don't remove the error" );
	labels( 3 );
	e.val( "h" );
	blur( e );
	errors( 1, "Entering a single character fulfills required, but not minlength: 2, still invalid" );
	labels( 3 );
	e.val( "hh" );
	blur( e );
	errors( 0, "Both required and minlength are met, no errors left" );
	labels( 2 );
***REMOVED***);

test( "validate on keyup", function() {
	function errors( expected, message ) {
		equal( expected, v.size(), message );
	***REMOVED***
	function keyup( target ) {
		target.trigger( "keyup" );
	***REMOVED***
	var e = $( "#firstname" ),
		v = $( "#testForm1" ).validate();

	keyup( e );
	errors( 0, "No value, no errors" );
	e.val( "a" );
	keyup( e );
	errors( 0, "Value, but not invalid" );
	e.val( "" );
	v.form();
	errors( 2, "Both invalid" );
	keyup( e );
	errors( 1, "Only one field validated, still invalid" );
	e.val( "hh" );
	keyup( e );
	errors( 0, "Not invalid anymore" );
	e.val( "h" );
	keyup( e );
	errors( 1, "Field didn't loose focus, so validate again, invalid" );
	e.val( "hh" );
	keyup( e );
	errors( 0, "Valid" );
***REMOVED***);

test( "validate on not keyup, only blur", function() {
	function errors( expected, message ) {
		equal( expected, v.size(), message );
	***REMOVED***
	var e = $( "#firstname" ),
		v = $( "#testForm1" ).validate({
			onkeyup: false
		***REMOVED***);

	errors( 0 );
	e.val( "a" );
	e.trigger( "keyup" );
	e.keyup();
	errors( 0 );
	e.trigger( "blur" ).trigger( "focusout" );
	errors( 1 );
***REMOVED***);

test( "validate on keyup and blur", function() {
	function errors( expected, message ) {
		equal( expected, v.size(), message );
	***REMOVED***
	var e = $( "#firstname" ),
		v = $( "#testForm1" ).validate();

	errors( 0 );
	e.val( "a" );
	e.trigger( "keyup" );
	errors( 0 );
	e.trigger( "blur" ).trigger( "focusout" );
	errors( 1 );
***REMOVED***);

test( "validate email on keyup and blur", function() {
	function errors( expected, message ) {
		equal( expected, v.size(), message );
	***REMOVED***
	var e = $( "#firstname" ),
		v = $( "#testForm1" ).validate();

	v.form();
	errors( 2 );
	e.val( "a" );
	e.trigger( "keyup" );
	errors( 1 );
	e.val( "aa" );
	e.trigger( "keyup" );
	errors( 0 );
***REMOVED***);

test( "validate checkbox on click", function() {
	function errors( expected, message ) {
		equal( expected, v.size(), message );
	***REMOVED***
	function trigger( element ) {
		element.click();
		// triggered click event screws up checked-state in 1.4
		element.valid();
	***REMOVED***
	var e = $( "#check2" ),
		v = $( "#form" ).validate({
			rules: {
				check2: "required"
			***REMOVED***
		***REMOVED***);

	trigger( e );
	errors( 0 );
	trigger( e );
	equal( false, v.form() );
	errors( 1 );
	trigger( e );
	errors( 0 );
	trigger( e );
	errors( 1 );
***REMOVED***);

test( "validate multiple checkbox on click", function() {
	function errors( expected, message ) {
		equal( expected, v.size(), message );
	***REMOVED***
	function trigger( element ) {
		element.click();
		// triggered click event screws up checked-state in 1.4
		element.valid();
	***REMOVED***
	var e1 = $( "#check1" ).attr( "checked", false ),
		e2 = $( "#check1b" ),
		v = $( "#form" ).validate({
			rules: {
				check: {
					required: true,
					minlength: 2
				***REMOVED***
			***REMOVED***
		***REMOVED***);

	trigger( e1 );
	trigger( e2 );
	errors( 0 );
	trigger( e2 );
	equal( false, v.form() );
	errors( 1 );
	trigger( e2 );
	errors( 0 );
	trigger( e2 );
	errors( 1 );
***REMOVED***);

test( "correct checkbox receives the error", function() {
	function trigger( element ) {
		element.click();
		// triggered click event screws up checked-state in 1.4
		element.valid();
	***REMOVED***
	var e1 = $( "#check1" ).attr( "checked", false ),
		v;

	$( "#check1b" ).attr( "checked", false );
	v = $( "#form" ).find( "[type=checkbox]" ).attr( "checked", false ).end().validate({
		rules: {
			check: {
				required: true,
				minlength: 2
			***REMOVED***
		***REMOVED***
	***REMOVED***);

	equal( false, v.form());
	trigger( e1 );
	equal( false, v.form());
	ok( v.errorList[ 0 ].element.id === v.currentElements[ 0 ].id, "the proper checkbox has the error AND is present in currentElements" );
***REMOVED***);

test( "validate radio on click", function() {
	function errors( expected, message ) {
		equal( expected, v.size(), message );
	***REMOVED***
	function trigger( element ) {
		element.click();
		// triggered click event screws up checked-state in 1.4
		element.valid();
	***REMOVED***
	var e1 = $( "#radio1" ),
		e2 = $( "#radio1a" ),
		v = $( "#form" ).validate({
			rules: {
				radio1: "required"
			***REMOVED***
		***REMOVED***);

	errors( 0 );
	equal( false, v.form() );
	errors( 1 );
	trigger( e2 );
	errors( 0 );
	trigger( e1 );
	errors( 0 );
***REMOVED***);

test( "validate input with no type attribute, defaulting to text", function() {
	function errors( expected, message ) {
		equal( expected, v.size(), message );
	***REMOVED***
	var v = $( "#testForm12" ).validate(),
		e = $( "#testForm12text" );

	errors( 0 );
	e.valid();
	errors( 1 );
	e.val( "test" );
	e.trigger( "keyup" );
	errors( 0 );
***REMOVED***);

test( "ignore hidden elements", function() {
	var form = $( "#userForm" ),
		validate = form.validate({
			rules: {
				"username": "required"
			***REMOVED***
		***REMOVED***);

	form.get( 0 ).reset();
	ok( !validate.form(), "form should be initially invalid" );
	$( "#userForm [name=username]" ).hide();
	ok( validate.form(), "hidden elements should be ignored by default" );
***REMOVED***);

test( "ignore hidden elements at start", function() {
	var form = $( "#userForm" ),
		validate = form.validate({
			rules: {
				"username": "required"
			***REMOVED***
		***REMOVED***);

	form.get( 0 ).reset();
	$( "#userForm [name=username]" ).hide();
	ok( validate.form(), "hidden elements should be ignored by default" );
	$( "#userForm [name=username]" ).show();
	ok( !validate.form(), "form should be invalid when required element is visible" );
***REMOVED***);

test( "Specify error messages through data attributes", function() {
	var form = $( "#dataMessages" ),
		name = $( "#dataMessagesName" ),
		label;

	form.validate();

	form.get( 0 ).reset();
	name.valid();

	label = $( "#dataMessages .error:not(input)" );
	equal( label.text(), "You must enter a value here", "Correct error label" );
***REMOVED***);

test( "Updates pre-existing label if has error class", function() {
	var form = $( "#updateLabel" ),
		input = $( "#updateLabelInput" ),
		label = $( "#targetLabel" ),
		labelsBefore = form.find( ".error:not(input)" ).length,
		labelsAfter;

	form.validate();
	input.val( "" );
	input.valid();
	labelsAfter = form.find( ".error:not(input)" ).length;

	// label was updated
	equal( label.text(), input.attr( "data-msg-required" ) );
	// new label wasn't created
	equal( labelsBefore, labelsAfter );
***REMOVED***);

test( "Min date set by attribute", function() {
	var form = $( "#rangesMinDateInvalid" ),
		name = $( "#minDateInvalid" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#rangesMinDateInvalid .error:not(input)" );
	equal( label.text(), "Please enter a value greater than or equal to 2012-12-21.", "Correct error label" );
***REMOVED***);

test( "Max date set by attribute", function() {
	var form = $( "#ranges" ),
		name = $( "#maxDateInvalid" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "Please enter a value less than or equal to 2012-12-21.", "Correct error label" );
***REMOVED***);

test( "Min and Max date set by attributes greater", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeDateInvalidGreater" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "Please enter a value less than or equal to 2013-01-21.", "Correct error label" );
***REMOVED***);

test( "Min and Max date set by attributes less", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeDateInvalidLess" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "Please enter a value greater than or equal to 2012-11-21.", "Correct error label" );
***REMOVED***);

test( "Min date set by attribute valid", function() {
	var form = $( "#rangeMinDateValid" ),
		name = $( "#minDateValid" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#rangeMinDateValid .error:not(input)" );
	equal( label.text(), "", "Correct error label" );
***REMOVED***);

test( "Max date set by attribute valid", function() {
	var form = $( "#ranges" ),
		name = $( "#maxDateValid" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "", "Correct error label" );
***REMOVED***);

test( "Min and Max date set by attributes valid", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeDateValid" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "", "Correct error label" );
***REMOVED***);

test( "Min and Max strings set by attributes greater", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeTextInvalidGreater" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "Please enter a value less than or equal to 200.", "Correct error label" );
***REMOVED***);

test( "Min and Max strings set by attributes less", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeTextInvalidLess" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "Please enter a value greater than or equal to 200.", "Correct error label" );
***REMOVED***);

test( "Min and Max strings set by attributes valid", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeTextValid" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "", "Correct error label" );
***REMOVED***);

test( "calling blur on ignored element", function() {
	var form = $( "#ignoredElements" );

	form.validate({
		ignore: ".ignore",
		submitHandler: $.noop,
		invalidHandler: function() {
			$( "#ss1" ).blur();
		***REMOVED***
	***REMOVED***);

	form.trigger( "submit" );
	equal( form.valid(), false, "valid() should return false" );
***REMOVED***);

test( "Min and Max type absent set by attributes greater", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeAbsentInvalidGreater" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "Please enter a value less than or equal to 200.", "Correct error label" );
***REMOVED***);

test( "Min and Max type absent set by attributes less", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeAbsentInvalidLess" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "Please enter a value greater than or equal to 200.", "Correct error label" );
***REMOVED***);

test( "Min and Max type absent set by attributes valid", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeAbsentValid" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "", "Correct error label" );
***REMOVED***);

test( "Min and Max range set by attributes valid", function() {
	//
	// cannot test for overflow:
	// When the element is suffering from an underflow,
	// the user agent must set the element"s value to a valid
	// floating-point number that represents the minimum.
	// http://www.w3.org/TR/html5/forms.html#range-state-%28type=range%29
	//
	var form = $( "#ranges" ),
		name = $( "#rangeRangeValid" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "", "Correct error label" );
***REMOVED***);

test( "Min and Max number set by attributes valid", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeNumberValid" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "", "Correct error label" );
***REMOVED***);

test( "Min and Max number set by attributes greater", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeNumberInvalidGreater" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "Please enter a value less than or equal to 200.", "Correct error label" );
***REMOVED***);

test( "Min and Max number set by attributes less", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeNumberInvalidLess" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "Please enter a value greater than or equal to 50.", "Correct error label" );
***REMOVED***);

test( "Rules allowed to have a value of zero invalid", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeMinZeroInvalidLess" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "Please enter a value greater than or equal to 0.", "Correct error label" );
***REMOVED***);

test( "Rules allowed to have a value of zero valid equal", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeMinZeroValidEqual" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "", "Correct error label" );
***REMOVED***);

test( "Rules allowed to have a value of zero valid greater", function() {
	var form = $( "#ranges" ),
		name = $( "#rangeMinZeroValidGreater" ),
		label;

	form.validate();
	form.get( 0 ).reset();
	name.valid();

	label = $( "#ranges .error:not(input)" );
	equal( label.text(), "", "Correct error label" );
***REMOVED***);

test( "Validation triggered on radio and checkbox via click", function() {
	expect( 2 );

	var form = $( "#radiocheckbox" );

	// init validate
	form.validate();

	// validate so we have errors
	ok( !form.valid(), "Form invalid");

	// simulate native click on first checkbox to trigger change-event
	$( "#radiocheckbox-0-1" ).simulate( "click" );

	// simulate native click on first radio to trigger change-event
	$( "#radiocheckbox-1-1" ).simulate( "click" );

	// test if there is no error anymore
	ok( form.find( "input.error" ).length === 0, "Form valid" );
***REMOVED***);
