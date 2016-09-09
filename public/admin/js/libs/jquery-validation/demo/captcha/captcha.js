$(function(){
	$("body").on("click", "#refreshimg", function(){
		$.post("newsession.php");
		$("#captchaimage").load("image_req.php");
		return false;
	***REMOVED***);

	$("#captchaform").validate({
		rules: {
			captcha: {
				required: true,
				remote: "process.php"
			***REMOVED***
		***REMOVED***,
		messages: {
			captcha: "Correct captcha is required. Click the captcha to generate a new one"
		***REMOVED***,
		submitHandler: function() {
			alert("Correct captcha!");
		***REMOVED***,
		success: function(label) {
			label.addClass("valid").text("Valid captcha!")
		***REMOVED***,
		onkeyup: false
	***REMOVED***);

***REMOVED***);
