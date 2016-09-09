module("rules");

test("rules() - internal - input", function() {
	var element = $("#firstname");

	$("#testForm1").validate();

	deepEqual( element.rules(), { required: true, minlength: 2 ***REMOVED*** );
***REMOVED***);

test("rules(), ignore method:false", function() {
	var element = $("#firstnamec");

	$("#testForm1clean").validate({
		rules: {
			firstnamec: { required: false, minlength: 2 ***REMOVED***
		***REMOVED***
	***REMOVED***);

	deepEqual( element.rules(), { minlength: 2 ***REMOVED*** );
***REMOVED***);

test("rules() HTML5 required (no value)", function() {
	var element = $("#testForm11text1");

	$("#testForm11").validate();

	deepEqual( element.rules(), { required: true ***REMOVED*** );
***REMOVED***);

test("rules() - internal - select", function() {
	var element = $("#meal");

	$("#testForm3").validate();

	deepEqual( element.rules(), { required: true ***REMOVED*** );
***REMOVED***);

test("rules() - external", function() {
	var element = $("#text1");

	$("#form").validate({
		rules: {
			action: { date: true, min: 5 ***REMOVED***
		***REMOVED***
	***REMOVED***);

	deepEqual( element.rules(), { date: true, min: 5 ***REMOVED*** );
***REMOVED***);

test("rules() - external - complete form", function() {
	expect(1);

	var methods = $.extend({***REMOVED***, $.validator.methods),
		messages = $.extend({***REMOVED***, $.validator.messages),
		v;

	$.validator.addMethod("verifyTest", function() {
		ok( true, "method executed" );
		return true;
	***REMOVED***);
	v = $("#form").validate({
		rules: {
			action: { verifyTest: true ***REMOVED***
		***REMOVED***
	***REMOVED***);
	v.form();

	$.validator.methods = methods;
	$.validator.messages = messages;
***REMOVED***);

test("rules() - internal - input", function() {
	var element = $("#form8input");

	$("#testForm8").validate();

	deepEqual( element.rules(), { required: true, number: true, rangelength: [ 2, 8 ] ***REMOVED*** );
***REMOVED***);

test("rules(), merge min/max to range, minlength/maxlength to rangelength", function() {
	jQuery.validator.autoCreateRanges = true;

	$("#testForm1clean").validate({
		rules: {
			firstnamec: {
				min: -15,
				max: 0
			***REMOVED***,
			lastname: {
				minlength: 0,
				maxlength: 10
			***REMOVED***
		***REMOVED***
	***REMOVED***);

	deepEqual( $("#firstnamec").rules(), { range: [ -15, 0 ] ***REMOVED*** );
	deepEqual( $("#lastnamec").rules(), { rangelength: [ 0, 10 ] ***REMOVED*** );

	jQuery.validator.autoCreateRanges = false;
***REMOVED***);

test("rules(), guarantee that required is at front", function() {
	$("#testForm1").validate();
	var v = $("#v2").validate();
	$("#subformRequired").validate();
	function flatRules(element) {
		var result = [];
		jQuery.each($(element).rules(), function(key) { result.push(key); ***REMOVED***);
		return result.join(" ");
	***REMOVED***
	equal( "required minlength", flatRules("#firstname") );
	equal( "required minlength maxlength", flatRules("#v2-i6") );
	equal( "required maxlength", flatRules("#co_name") );

	QUnit.reset();
	jQuery.validator.autoCreateRanges = true;
	v = $("#v2").validate();
	equal( "required rangelength", flatRules("#v2-i6") );

	$("#subformRequired").validate({
		rules: {
			co_name: "required"
		***REMOVED***
	***REMOVED***);
	$("#co_name").removeClass();
	equal( "required maxlength", flatRules("#co_name") );
	jQuery.validator.autoCreateRanges = false;
***REMOVED***);

test("rules(), evaluate dynamic parameters", function() {
	expect(2);

	$("#testForm1clean").validate({
		rules: {
			firstnamec: {
				min: function(element) {
					equal( $("#firstnamec")[0], element );
					return 12;
				***REMOVED***
			***REMOVED***
		***REMOVED***
	***REMOVED***);

	deepEqual( $("#firstnamec").rules(), { min: 12 ***REMOVED***);
***REMOVED***);

test("rules(), class and attribute combinations", function() {

	$.validator.addMethod("customMethod1", function() {
		return false;
	***REMOVED***, "");
	$.validator.addMethod("customMethod2", function() {
		return false;
	***REMOVED***, "");

	$("#v2").validate({
		rules: {
			"v2-i7": {
				required: true,
				minlength: 2,
				customMethod: true
			***REMOVED***
		***REMOVED***
	***REMOVED***);

	deepEqual( $("#v2-i1").rules(), { required: true ***REMOVED***);
	deepEqual( $("#v2-i2").rules(), { required: true, email: true ***REMOVED***);
	deepEqual( $("#v2-i3").rules(), { url: true ***REMOVED***);
	deepEqual( $("#v2-i4").rules(), { required: true, minlength: 2 ***REMOVED***);
	deepEqual( $("#v2-i5").rules(), { required: true, minlength: 2, maxlength: 5, customMethod1: "123" ***REMOVED***);
	jQuery.validator.autoCreateRanges = true;
	deepEqual( $("#v2-i5").rules(), { required: true, customMethod1: "123", rangelength: [ 2, 5 ] ***REMOVED***);
	deepEqual( $("#v2-i6").rules(), { required: true, customMethod2: true, rangelength: [ 2, 5 ] ***REMOVED***);
	jQuery.validator.autoCreateRanges = false;
	deepEqual( $("#v2-i7").rules(), { required: true, minlength: 2, customMethod: true ***REMOVED***);

	delete $.validator.methods.customMethod1;
	delete $.validator.messages.customMethod1;
	delete $.validator.methods.customMethod2;
	delete $.validator.messages.customMethod2;
***REMOVED***);

test("rules(), dependency checks", function() {
	var v = $("#testForm1clean").validate({
			rules: {
				firstnamec: {
					min: {
						param: 5,
						depends: function(el) {
							return (/^a/).test($(el).val());
						***REMOVED***
					***REMOVED***
				***REMOVED***,
				lastname: {
					max: {
						param: 12
					***REMOVED***,
					email: {
						depends: function() { return true; ***REMOVED***
					***REMOVED***
				***REMOVED***
			***REMOVED***
		***REMOVED***),
		rules = $("#firstnamec").rules();

	equal( 0, v.objectLength(rules) );

	$("#firstnamec").val("ab");
	deepEqual( $("#firstnamec").rules(), { min: 5 ***REMOVED***);

	deepEqual( $("#lastnamec").rules(), { max: 12, email: true ***REMOVED***);
***REMOVED***);

test("rules(), add and remove", function() {
	$.validator.addMethod("customMethod1", function() {
		return false;
	***REMOVED***, "");
	$("#v2").validate();
	var removedAttrs = $("#v2-i5").removeClass("required").removeAttrs("minlength maxlength");
	deepEqual( $("#v2-i5").rules(), { customMethod1: "123" ***REMOVED***);

	$("#v2-i5").addClass("required").attr(removedAttrs);
	deepEqual( $("#v2-i5").rules(), { required: true, minlength: 2, maxlength: 5, customMethod1: "123" ***REMOVED***);

	$("#v2-i5").addClass("email").attr({ min: 5 ***REMOVED***);
	deepEqual( $("#v2-i5").rules(), { required: true, email: true, minlength: 2, maxlength: 5, min: 5, customMethod1: "123" ***REMOVED***);

	$("#v2-i5").removeClass("required email").removeAttrs("minlength maxlength customMethod1 min");
	deepEqual( $("#v2-i5").rules(), {***REMOVED***);

	delete $.validator.methods.customMethod1;
	delete $.validator.messages.customMethod1;
***REMOVED***);

test("rules(), add and remove static rules", function() {

	$("#testForm1clean").validate({
		rules: {
			firstnamec: "required date"
		***REMOVED***
	***REMOVED***);

	deepEqual( $("#firstnamec").rules(), { required: true, date: true ***REMOVED*** );

	$("#firstnamec").rules("remove", "date");
	deepEqual( $("#firstnamec").rules(), { required: true ***REMOVED*** );
	$("#firstnamec").rules("add", "email");
	deepEqual( $("#firstnamec").rules(), { required: true, email: true ***REMOVED*** );

	$("#firstnamec").rules("remove", "required");
	deepEqual( $("#firstnamec").rules(), { email: true ***REMOVED*** );

	deepEqual( $("#firstnamec").rules("remove"), { email: true ***REMOVED*** );
	deepEqual( $("#firstnamec").rules(), { ***REMOVED*** );

	$("#firstnamec").rules("add", "required email");
	deepEqual( $("#firstnamec").rules(), { required: true, email: true ***REMOVED*** );

	deepEqual( $("#lastnamec").rules(), {***REMOVED*** );
	$("#lastnamec").rules("add", "required");
	$("#lastnamec").rules("add", {
		minlength: 2
	***REMOVED***);
	deepEqual( $("#lastnamec").rules(), { required: true, minlength: 2 ***REMOVED*** );

	var removedRules = $("#lastnamec").rules("remove", "required email");
	deepEqual( $("#lastnamec").rules(), { minlength: 2 ***REMOVED*** );
	$("#lastnamec").rules("add", removedRules);
	deepEqual( $("#lastnamec").rules(), { required: true, minlength: 2 ***REMOVED*** );
***REMOVED***);

test("rules(), add messages", function() {
	$("#firstnamec").attr("title", null);
	var v = $("#testForm1clean").validate({
		rules: {
			firstnamec: "required"
		***REMOVED***
	***REMOVED***);
	$("#testForm1clean").valid();
	$("#firstnamec").valid();
	deepEqual( v.settings.messages.firstname, undefined );

	$("#firstnamec").rules("add", {
		messages: {
			required: "required"
		***REMOVED***
	***REMOVED***);

	$("#firstnamec").valid();
	deepEqual( v.errorList[0] && v.errorList[0].message, "required" );

	$("#firstnamec").val("test");
	$("#firstnamec").valid();
	equal(v.errorList.length, 0);
***REMOVED***);

test( "rules(), rangelength attribute as array", function() {
	$("#testForm13").validate();
	deepEqual( $("#cars-select").rules(), {
		required: true,
		rangelength: [ 2, 3 ]
	***REMOVED***);
***REMOVED***);
