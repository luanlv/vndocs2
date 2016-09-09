/*!
	Autosize 1.18.17
	license: MIT
	http://www.jacklmoore.com/autosize
*/
(function ($) {
	var
	defaults = {
		className: 'autosizejs',
		id: 'autosizejs',
		append: '\n',
		callback: false,
		resizeDelay: 10,
		placeholder: true
	***REMOVED***,

	// border:0 is unnecessary, but avoids a bug in Firefox on OSX
	copy = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',

	// line-height is conditionally included because IE7/IE8/old Opera do not return the correct value.
	typographyStyles = [
		'fontFamily',
		'fontSize',
		'fontWeight',
		'fontStyle',
		'letterSpacing',
		'textTransform',
		'wordSpacing',
		'textIndent',
		'whiteSpace'
	],

	// to keep track which textarea is being mirrored when adjust() is called.
	mirrored,

	// the mirror element, which is used to calculate what size the mirrored element should be.
	mirror = $(copy).data('autosize', true)[0];

	// test that line-height can be accurately copied.
	mirror.style.lineHeight = '99px';
	if ($(mirror).css('lineHeight') === '99px') {
		typographyStyles.push('lineHeight');
	***REMOVED***
	mirror.style.lineHeight = '';

	$.fn.autosize = function (options) {
		if (!this.length) {
			return this;
		***REMOVED***

		options = $.extend({***REMOVED***, defaults, options || {***REMOVED***);

		if (mirror.parentNode !== document.body) {
			$(document.body).append(mirror);
		***REMOVED***

		return this.each(function () {
			var
			ta = this,
			$ta = $(ta),
			maxHeight,
			minHeight,
			boxOffset = 0,
			callback = $.isFunction(options.callback),
			originalStyles = {
				height: ta.style.height,
				overflow: ta.style.overflow,
				overflowY: ta.style.overflowY,
				wordWrap: ta.style.wordWrap,
				resize: ta.style.resize
			***REMOVED***,
			timeout,
			width = $ta.width(),
			taResize = $ta.css('resize');

			if ($ta.data('autosize')) {
				// exit if autosize has already been applied, or if the textarea is the mirror element.
				return;
			***REMOVED***
			$ta.data('autosize', true);

			if ($ta.css('box-sizing') === 'border-box' || $ta.css('-moz-box-sizing') === 'border-box' || $ta.css('-webkit-box-sizing') === 'border-box'){
				boxOffset = $ta.outerHeight() - $ta.height();
			***REMOVED***

			// IE8 and lower return 'auto', which parses to NaN, if no min-height is set.
			minHeight = Math.max(parseFloat($ta.css('minHeight')) - boxOffset || 0, $ta.height());

			$ta.css({
				overflow: 'hidden',
				overflowY: 'hidden',
				wordWrap: 'break-word' // horizontal overflow is hidden, so break-word is necessary for handling words longer than the textarea width
			***REMOVED***);

			if (taResize === 'vertical') {
				$ta.css('resize','none');
			***REMOVED*** else if (taResize === 'both') {
				$ta.css('resize', 'horizontal');
			***REMOVED***

			// getComputedStyle is preferred here because it preserves sub-pixel values, while jQuery's .width() rounds to an integer.
			function setWidth() {
				var width;
				var style = window.getComputedStyle ? window.getComputedStyle(ta, null) : null;

				if (style) {
					width = parseFloat(style.width);
					if (style.boxSizing === 'border-box' || style.webkitBoxSizing === 'border-box' || style.mozBoxSizing === 'border-box') {
						$.each(['paddingLeft', 'paddingRight', 'borderLeftWidth', 'borderRightWidth'], function(i,val){
							width -= parseFloat(style[val]);
						***REMOVED***);
					***REMOVED***
				***REMOVED*** else {
					width = $ta.width();
				***REMOVED***

				mirror.style.width = Math.max(width,0) + 'px';
			***REMOVED***

			function initMirror() {
				var styles = {***REMOVED***;

				mirrored = ta;
				mirror.className = options.className;
				mirror.id = options.id;
				maxHeight = parseFloat($ta.css('maxHeight'));

				// mirror is a duplicate textarea located off-screen that
				// is automatically updated to contain the same text as the
				// original textarea.  mirror always has a height of 0.
				// This gives a cross-browser supported way getting the actual
				// height of the text, through the scrollTop property.
				$.each(typographyStyles, function(i,val){
					styles[val] = $ta.css(val);
				***REMOVED***);

				$(mirror).css(styles).attr('wrap', $ta.attr('wrap'));

				setWidth();

				// Chrome-specific fix:
				// When the textarea y-overflow is hidden, Chrome doesn't reflow the text to account for the space
				// made available by removing the scrollbar. This workaround triggers the reflow for Chrome.
				if (window.chrome) {
					var width = ta.style.width;
					ta.style.width = '0px';
					var ignore = ta.offsetWidth;
					ta.style.width = width;
				***REMOVED***
			***REMOVED***

			// Using mainly bare JS in this function because it is going
			// to fire very often while typing, and needs to very efficient.
			function adjust() {
				var height, originalHeight;

				if (mirrored !== ta) {
					initMirror();
				***REMOVED*** else {
					setWidth();
				***REMOVED***

				if (!ta.value && options.placeholder) {
					// If the textarea is empty, copy the placeholder text into
					// the mirror control and use that for sizing so that we
					// don't end up with placeholder getting trimmed.
					mirror.value = ($ta.attr("placeholder") || '');
				***REMOVED*** else {
					mirror.value = ta.value;
				***REMOVED***

				mirror.value += options.append || '';
				mirror.style.overflowY = ta.style.overflowY;
				originalHeight = parseFloat(ta.style.height) || 0;

				// Setting scrollTop to zero is needed in IE8 and lower for the next step to be accurately applied
				mirror.scrollTop = 0;

				mirror.scrollTop = 9e4;

				// Using scrollTop rather than scrollHeight because scrollHeight is non-standard and includes padding.
				height = mirror.scrollTop;

				if (maxHeight && height > maxHeight) {
					ta.style.overflowY = 'scroll';
					height = maxHeight;
				***REMOVED*** else {
					ta.style.overflowY = 'hidden';
					if (height < minHeight) {
						height = minHeight;
					***REMOVED***
				***REMOVED***

				height += boxOffset;

				if (Math.abs(originalHeight - height) > 1/100) {
					ta.style.height = height + 'px';

					// Trigger a repaint for IE8 for when ta is nested 2 or more levels inside an inline-block
					mirror.className = mirror.className;

					if (callback) {
						options.callback.call(ta,ta);
					***REMOVED***
					$ta.trigger('autosize.resized');
				***REMOVED***
			***REMOVED***

			function resize () {
				clearTimeout(timeout);
				timeout = setTimeout(function(){
					var newWidth = $ta.width();

					if (newWidth !== width) {
						width = newWidth;
						adjust();
					***REMOVED***
				***REMOVED***, parseInt(options.resizeDelay,10));
			***REMOVED***

			if ('onpropertychange' in ta) {
				if ('oninput' in ta) {
					// Detects IE9.  IE9 does not fire onpropertychange or oninput for deletions,
					// so binding to onkeyup to catch most of those occasions.  There is no way that I
					// know of to detect something like 'cut' in IE9.
					$ta.on('input.autosize keyup.autosize', adjust);
				***REMOVED*** else {
					// IE7 / IE8
					$ta.on('propertychange.autosize', function(){
						if(event.propertyName === 'value'){
							adjust();
						***REMOVED***
					***REMOVED***);
				***REMOVED***
			***REMOVED*** else {
				// Modern Browsers
				$ta.on('input.autosize', adjust);
			***REMOVED***

			// Set options.resizeDelay to false if using fixed-width textarea elements.
			// Uses a timeout and width check to reduce the amount of times adjust needs to be called after window resize.

			if (options.resizeDelay !== false) {
				$(window).on('resize.autosize', resize);
			***REMOVED***

			// Event for manual triggering if needed.
			// Should only be needed when the value of the textarea is changed through JavaScript rather than user input.
			$ta.on('autosize.resize', adjust);

			// Event for manual triggering that also forces the styles to update as well.
			// Should only be needed if one of typography styles of the textarea change, and the textarea is already the target of the adjust method.
			$ta.on('autosize.resizeIncludeStyle', function() {
				mirrored = null;
				adjust();
			***REMOVED***);

			$ta.on('autosize.destroy', function(){
				mirrored = null;
				clearTimeout(timeout);
				$(window).off('resize', resize);
				$ta
					.off('autosize')
					.off('.autosize')
					.css(originalStyles)
					.removeData('autosize');
			***REMOVED***);

			// Call adjust in case the textarea already contains text.
			adjust();
		***REMOVED***);
	***REMOVED***;
***REMOVED***(jQuery || $)); // jQuery or jQuery-like library, such as Zepto
