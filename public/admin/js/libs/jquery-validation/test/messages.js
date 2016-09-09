module("messages");

test("predefined message not overwritten by addMethod(a, b, undefined)", function() {
	var message = "my custom message";
	$.validator.messages.custom = message;
	$.validator.addMethod("custom", function() {***REMOVED***);
	deepEqual(message, $.validator.messages.custom);
	delete $.validator.messages.custom;
	delete $.validator.methods.custom;
***REMOVED***);

test("group error messages", function() {
	$.validator.addClassRules({
		requiredDateRange: { required: true, date: true, dateRange: true ***REMOVED***
	***REMOVED***);
	$.validator.addMethod("dateRange", function() {
		return new Date($("#fromDate").val()) < new Date($("#toDate").val());
	***REMOVED***, "Please specify a correct date range.");
	var form = $("#dateRangeForm");
	form.validate({
		groups: {
			dateRange: "fromDate toDate"
		***REMOVED***,
		errorPlacement: function(error) {
			form.find(".errorContainer").append(error);
		***REMOVED***
	***REMOVED***);
	ok( !form.valid() );
	equal( 1, form.find(".errorContainer *").length );
	equal( "Please enter a valid date.", form.find(".errorContainer .error:not(input)").text() );

	$("#fromDate").val("12/03/2006");
	$("#toDate").val("12/01/2006");
	ok( !form.valid() );
	equal( "Please specify a correct date range.", form.find(".errorContainer .error:not(input)").text() );

	$("#toDate").val("12/04/2006");
	ok( form.valid() );
	ok( form.find(".errorContainer .error:not(input)").is(":hidden") );
***REMOVED***);

test("read messages from metadata", function() {
	var form = $("#testForm9"),
		e, g;

	form.validate();
	e = $("#testEmail9");
	e.valid();
	equal( form.find("#testEmail9").next(".error:not(input)").text(), "required" );
	e.val("bla").valid();
	equal( form.find("#testEmail9").next(".error:not(input)").text(), "email" );

	g = $("#testGeneric9");
	g.valid();
	equal( form.find("#testGeneric9").next(".error:not(input)").text(), "generic");
	g.val("bla").valid();
	equal( form.find("#testGeneric9").next(".error:not(input)").text(), "email" );
***REMOVED***);

test("read messages from metadata, with meta option specified, but no metadata in there", function() {
	var form = $("#testForm1clean");
	form.validate({
		meta: "validate",
		rules: {
			firstnamec: "required"
		***REMOVED***
	***REMOVED***);
	ok(!form.valid(), "not valid");
***REMOVED***);
