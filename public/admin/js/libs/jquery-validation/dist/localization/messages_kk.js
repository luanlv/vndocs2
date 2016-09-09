(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	***REMOVED*** else {
		factory( jQuery );
	***REMOVED***
***REMOVED***(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: KK (Kazakh; қазақ тілі)
 */
$.extend($.validator.messages, {
	required: "Бұл өрісті міндетті түрде толтырыңыз.",
	remote: "Дұрыс мағына енгізуіңізді сұраймыз.",
	email: "Нақты электронды поштаңызды енгізуіңізді сұраймыз.",
	url: "Нақты URL-ды енгізуіңізді сұраймыз.",
	date: "Нақты URL-ды енгізуіңізді сұраймыз.",
	dateISO: "Нақты ISO форматымен сәйкес датасын енгізуіңізді сұраймыз.",
	number: "Күнді енгізуіңізді сұраймыз.",
	digits: "Тек қана сандарды енгізуіңізді сұраймыз.",
	creditcard: "Несие картасының нөмірін дұрыс енгізуіңізді сұраймыз.",
	equalTo: "Осы мәнді қайта енгізуіңізді сұраймыз.",
	extension: "Файлдың кеңейтуін дұрыс таңдаңыз.",
	maxlength: $.validator.format("Ұзындығы {0***REMOVED*** символдан көр болмасын."),
	minlength: $.validator.format("Ұзындығы {0***REMOVED*** символдан аз болмасын."),
	rangelength: $.validator.format("Ұзындығы {0***REMOVED***-{1***REMOVED*** дейін мән енгізуіңізді сұраймыз."),
	range: $.validator.format("Пожалуйста, введите число от {0***REMOVED*** до {1***REMOVED***. - {0***REMOVED*** - {1***REMOVED*** санын енгізуіңізді сұраймыз."),
	max: $.validator.format("{0***REMOVED*** аз немесе тең санын енгізуіңіді сұраймыз."),
	min: $.validator.format("{0***REMOVED*** көп немесе тең санын енгізуіңізді сұраймыз.")
***REMOVED***);

***REMOVED***));