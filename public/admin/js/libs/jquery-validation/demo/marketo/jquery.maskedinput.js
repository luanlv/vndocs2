/*
	Masked Input plugin for jQuery
	Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
	Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
	Version: 1.3.1
*/
(function($) {
	function getPasteEvent() {
    var el = document.createElement('input'),
        name = 'onpaste';
    el.setAttribute(name, '');
    return (typeof el[name] === 'function')?'paste':'input';
***REMOVED***

var pasteEventName = getPasteEvent() + ".mask",
	ua = navigator.userAgent,
	iPhone = /iphone/i.test(ua),
	android=/android/i.test(ua),
	caretTimeoutId;

$.mask = {
	//Predefined character definitions
	definitions: {
		'9': "[0-9]",
		'a': "[A-Za-z]",
		'*': "[A-Za-z0-9]"
	***REMOVED***,
	dataName: "rawMaskFn",
	placeholder: '_',
***REMOVED***;

$.fn.extend({
	//Helper Function for Caret positioning
	caret: function(begin, end) {
		var range;

		if (this.length === 0 || this.is(":hidden")) {
			return;
		***REMOVED***

		if (typeof begin == 'number') {
			end = (typeof end === 'number') ? end : begin;
			return this.each(function() {
				if (this.setSelectionRange) {
					this.setSelectionRange(begin, end);
				***REMOVED*** else if (this.createTextRange) {
					range = this.createTextRange();
					range.collapse(true);
					range.moveEnd('character', end);
					range.moveStart('character', begin);
					range.select();
				***REMOVED***
			***REMOVED***);
		***REMOVED*** else {
			if (this[0].setSelectionRange) {
				begin = this[0].selectionStart;
				end = this[0].selectionEnd;
			***REMOVED*** else if (document.selection && document.selection.createRange) {
				range = document.selection.createRange();
				begin = 0 - range.duplicate().moveStart('character', -100000);
				end = begin + range.text.length;
			***REMOVED***
			return { begin: begin, end: end ***REMOVED***;
		***REMOVED***
	***REMOVED***,
	unmask: function() {
		return this.trigger("unmask");
	***REMOVED***,
	mask: function(mask, settings) {
		var input,
			defs,
			tests,
			partialPosition,
			firstNonMaskPos,
			len;

		if (!mask && this.length > 0) {
			input = $(this[0]);
			return input.data($.mask.dataName)();
		***REMOVED***
		settings = $.extend({
			placeholder: $.mask.placeholder, // Load default placeholder
			completed: null
		***REMOVED***, settings);


		defs = $.mask.definitions;
		tests = [];
		partialPosition = len = mask.length;
		firstNonMaskPos = null;

		$.each(mask.split(""), function(i, c) {
			if (c == '?') {
				len--;
				partialPosition = i;
			***REMOVED*** else if (defs[c]) {
				tests.push(new RegExp(defs[c]));
				if (firstNonMaskPos === null) {
					firstNonMaskPos = tests.length - 1;
				***REMOVED***
			***REMOVED*** else {
				tests.push(null);
			***REMOVED***
		***REMOVED***);

		return this.trigger("unmask").each(function() {
			var input = $(this),
				buffer = $.map(
				mask.split(""),
				function(c, i) {
					if (c != '?') {
						return defs[c] ? settings.placeholder : c;
					***REMOVED***
				***REMOVED***),
				focusText = input.val();

			function seekNext(pos) {
				while (++pos < len && !tests[pos]);
				return pos;
			***REMOVED***

			function seekPrev(pos) {
				while (--pos >= 0 && !tests[pos]);
				return pos;
			***REMOVED***

			function shiftL(begin,end) {
				var i,
					j;

				if (begin<0) {
					return;
				***REMOVED***

				for (i = begin, j = seekNext(end); i < len; i++) {
					if (tests[i]) {
						if (j < len && tests[i].test(buffer[j])) {
							buffer[i] = buffer[j];
							buffer[j] = settings.placeholder;
						***REMOVED*** else {
							break;
						***REMOVED***

						j = seekNext(j);
					***REMOVED***
				***REMOVED***
				writeBuffer();
				input.caret(Math.max(firstNonMaskPos, begin));
			***REMOVED***

			function shiftR(pos) {
				var i,
					c,
					j,
					t;

				for (i = pos, c = settings.placeholder; i < len; i++) {
					if (tests[i]) {
						j = seekNext(i);
						t = buffer[i];
						buffer[i] = c;
						if (j < len && tests[j].test(t)) {
							c = t;
						***REMOVED*** else {
							break;
						***REMOVED***
					***REMOVED***
				***REMOVED***
			***REMOVED***

			function keydownEvent(e) {
				var k = e.which,
					pos,
					begin,
					end;

				//backspace, delete, and escape get special treatment
				if (k === 8 || k === 46 || (iPhone && k === 127)) {
					pos = input.caret();
					begin = pos.begin;
					end = pos.end;

					if (end - begin === 0) {
						begin=k!==46?seekPrev(begin):(end=seekNext(begin-1));
						end=k===46?seekNext(end):end;
					***REMOVED***
					clearBuffer(begin, end);
					shiftL(begin, end - 1);

					e.preventDefault();
				***REMOVED*** else if (k == 27) {//escape
					input.val(focusText);
					input.caret(0, checkVal());
					e.preventDefault();
				***REMOVED***
			***REMOVED***

			function keypressEvent(e) {
				var k = e.which,
					pos = input.caret(),
					p,
					c,
					next;

				if (e.ctrlKey || e.altKey || e.metaKey || k < 32) {//Ignore
					return;
				***REMOVED*** else if (k) {
					if (pos.end - pos.begin !== 0){
						clearBuffer(pos.begin, pos.end);
						shiftL(pos.begin, pos.end-1);
					***REMOVED***

					p = seekNext(pos.begin - 1);
					if (p < len) {
						c = String.fromCharCode(k);
						if (tests[p].test(c)) {
							shiftR(p);

							buffer[p] = c;
							writeBuffer();
							next = seekNext(p);

							if(android){
								setTimeout($.proxy($.fn.caret,input,next),0);
							***REMOVED***else{
								input.caret(next);
							***REMOVED***

							if (settings.completed && next >= len) {
								settings.completed.call(input);
							***REMOVED***
						***REMOVED***
					***REMOVED***
					e.preventDefault();
				***REMOVED***
			***REMOVED***

			function clearBuffer(start, end) {
				var i;
				for (i = start; i < end && i < len; i++) {
					if (tests[i]) {
						buffer[i] = settings.placeholder;
					***REMOVED***
				***REMOVED***
			***REMOVED***

			function writeBuffer() { input.val(buffer.join('')); ***REMOVED***

			function checkVal(allow) {
				//try to place characters where they belong
				var test = input.val(),
					lastMatch = -1,
					i,
					c;

				for (i = 0, pos = 0; i < len; i++) {
					if (tests[i]) {
						buffer[i] = settings.placeholder;
						while (pos++ < test.length) {
							c = test.charAt(pos - 1);
							if (tests[i].test(c)) {
								buffer[i] = c;
								lastMatch = i;
								break;
							***REMOVED***
						***REMOVED***
						if (pos > test.length) {
							break;
						***REMOVED***
					***REMOVED*** else if (buffer[i] === test.charAt(pos) && i !== partialPosition) {
						pos++;
						lastMatch = i;
					***REMOVED***
				***REMOVED***
				if (allow) {
					writeBuffer();
				***REMOVED*** else if (lastMatch + 1 < partialPosition) {
					input.val("");
					clearBuffer(0, len);
				***REMOVED*** else {
					writeBuffer();
					input.val(input.val().substring(0, lastMatch + 1));
				***REMOVED***
				return (partialPosition ? i : firstNonMaskPos);
			***REMOVED***

			input.data($.mask.dataName,function(){
				return $.map(buffer, function(c, i) {
					return tests[i]&&c!=settings.placeholder ? c : null;
				***REMOVED***).join('');
			***REMOVED***);

			if (!input.attr("readonly"))
				input
				.one("unmask", function() {
					input
						.unbind(".mask")
						.removeData($.mask.dataName);
				***REMOVED***)
				.bind("focus.mask", function() {
					clearTimeout(caretTimeoutId);
					var pos,
						moveCaret;

					focusText = input.val();
					pos = checkVal();

					caretTimeoutId = setTimeout(function(){
						writeBuffer();
						if (pos == mask.length) {
							input.caret(0, pos);
						***REMOVED*** else {
							input.caret(pos);
						***REMOVED***
					***REMOVED***, 10);
				***REMOVED***)
				.bind("blur.mask", function() {
					checkVal();
					if (input.val() != focusText)
						input.change();
				***REMOVED***)
				.bind("keydown.mask", keydownEvent)
				.bind("keypress.mask", keypressEvent)
				.bind(pasteEventName, function() {
					setTimeout(function() {
						var pos=checkVal(true);
						input.caret(pos);
						if (settings.completed && pos == input.val().length)
							settings.completed.call(input);
					***REMOVED***, 0);
				***REMOVED***);
			checkVal(); //Perform initial check for existing values
		***REMOVED***);
	***REMOVED***
***REMOVED***);


***REMOVED***)(jQuery);