$.extend($.fn, {
	// http://jqueryvalidation.org/validate/
	validate: function( options ) {

		// if nothing is selected, return nothing; can't chain anyway
		if ( !this.length ) {
			if ( options && options.debug && window.console ) {
				console.warn( "Nothing selected, can't validate, returning nothing." );
			***REMOVED***
			return;
		***REMOVED***

		// check if a validator for this form was already created
		var validator = $.data( this[ 0 ], "validator" );
		if ( validator ) {
			return validator;
		***REMOVED***

		// Add novalidate tag if HTML5.
		this.attr( "novalidate", "novalidate" );

		validator = new $.validator( options, this[ 0 ] );
		$.data( this[ 0 ], "validator", validator );

		if ( validator.settings.onsubmit ) {

			this.validateDelegate( ":submit", "click", function( event ) {
				if ( validator.settings.submitHandler ) {
					validator.submitButton = event.target;
				***REMOVED***
				// allow suppressing validation by adding a cancel class to the submit button
				if ( $( event.target ).hasClass( "cancel" ) ) {
					validator.cancelSubmit = true;
				***REMOVED***

				// allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
				if ( $( event.target ).attr( "formnovalidate" ) !== undefined ) {
					validator.cancelSubmit = true;
				***REMOVED***
			***REMOVED***);

			// validate the form on submit
			this.submit( function( event ) {
				if ( validator.settings.debug ) {
					// prevent form submit to be able to see console output
					event.preventDefault();
				***REMOVED***
				function handle() {
					var hidden, result;
					if ( validator.settings.submitHandler ) {
						if ( validator.submitButton ) {
							// insert a hidden input as a replacement for the missing submit button
							hidden = $( "<input type='hidden'/>" )
								.attr( "name", validator.submitButton.name )
								.val( $( validator.submitButton ).val() )
								.appendTo( validator.currentForm );
						***REMOVED***
						result = validator.settings.submitHandler.call( validator, validator.currentForm, event );
						if ( validator.submitButton ) {
							// and clean up afterwards; thanks to no-block-scope, hidden can be referenced
							hidden.remove();
						***REMOVED***
						if ( result !== undefined ) {
							return result;
						***REMOVED***
						return false;
					***REMOVED***
					return true;
				***REMOVED***

				// prevent submit for invalid forms or custom submit handlers
				if ( validator.cancelSubmit ) {
					validator.cancelSubmit = false;
					return handle();
				***REMOVED***
				if ( validator.form() ) {
					if ( validator.pendingRequest ) {
						validator.formSubmitted = true;
						return false;
					***REMOVED***
					return handle();
				***REMOVED*** else {
					validator.focusInvalid();
					return false;
				***REMOVED***
			***REMOVED***);
		***REMOVED***

		return validator;
	***REMOVED***,
	// http://jqueryvalidation.org/valid/
	valid: function() {
		var valid, validator;

		if ( $( this[ 0 ] ).is( "form" ) ) {
			valid = this.validate().form();
		***REMOVED*** else {
			valid = true;
			validator = $( this[ 0 ].form ).validate();
			this.each( function() {
				valid = validator.element( this ) && valid;
			***REMOVED***);
		***REMOVED***
		return valid;
	***REMOVED***,
	// attributes: space separated list of attributes to retrieve and remove
	removeAttrs: function( attributes ) {
		var result = {***REMOVED***,
			$element = this;
		$.each( attributes.split( /\s/ ), function( index, value ) {
			result[ value ] = $element.attr( value );
			$element.removeAttr( value );
		***REMOVED***);
		return result;
	***REMOVED***,
	// http://jqueryvalidation.org/rules/
	rules: function( command, argument ) {
		var element = this[ 0 ],
			settings, staticRules, existingRules, data, param, filtered;

		if ( command ) {
			settings = $.data( element.form, "validator" ).settings;
			staticRules = settings.rules;
			existingRules = $.validator.staticRules( element );
			switch ( command ) {
			case "add":
				$.extend( existingRules, $.validator.normalizeRule( argument ) );
				// remove messages from rules, but allow them to be set separately
				delete existingRules.messages;
				staticRules[ element.name ] = existingRules;
				if ( argument.messages ) {
					settings.messages[ element.name ] = $.extend( settings.messages[ element.name ], argument.messages );
				***REMOVED***
				break;
			case "remove":
				if ( !argument ) {
					delete staticRules[ element.name ];
					return existingRules;
				***REMOVED***
				filtered = {***REMOVED***;
				$.each( argument.split( /\s/ ), function( index, method ) {
					filtered[ method ] = existingRules[ method ];
					delete existingRules[ method ];
					if ( method === "required" ) {
						$( element ).removeAttr( "aria-required" );
					***REMOVED***
				***REMOVED***);
				return filtered;
			***REMOVED***
		***REMOVED***

		data = $.validator.normalizeRules(
		$.extend(
			{***REMOVED***,
			$.validator.classRules( element ),
			$.validator.attributeRules( element ),
			$.validator.dataRules( element ),
			$.validator.staticRules( element )
		), element );

		// make sure required is at front
		if ( data.required ) {
			param = data.required;
			delete data.required;
			data = $.extend( { required: param ***REMOVED***, data );
			$( element ).attr( "aria-required", "true" );
		***REMOVED***

		// make sure remote is at back
		if ( data.remote ) {
			param = data.remote;
			delete data.remote;
			data = $.extend( data, { remote: param ***REMOVED***);
		***REMOVED***

		return data;
	***REMOVED***
***REMOVED***);

// Custom selectors
$.extend( $.expr[ ":" ], {
	// http://jqueryvalidation.org/blank-selector/
	blank: function( a ) {
		return !$.trim( "" + $( a ).val() );
	***REMOVED***,
	// http://jqueryvalidation.org/filled-selector/
	filled: function( a ) {
		return !!$.trim( "" + $( a ).val() );
	***REMOVED***,
	// http://jqueryvalidation.org/unchecked-selector/
	unchecked: function( a ) {
		return !$( a ).prop( "checked" );
	***REMOVED***
***REMOVED***);

// constructor for validator
$.validator = function( options, form ) {
	this.settings = $.extend( true, {***REMOVED***, $.validator.defaults, options );
	this.currentForm = form;
	this.init();
***REMOVED***;

// http://jqueryvalidation.org/jQuery.validator.format/
$.validator.format = function( source, params ) {
	if ( arguments.length === 1 ) {
		return function() {
			var args = $.makeArray( arguments );
			args.unshift( source );
			return $.validator.format.apply( this, args );
		***REMOVED***;
	***REMOVED***
	if ( arguments.length > 2 && params.constructor !== Array  ) {
		params = $.makeArray( arguments ).slice( 1 );
	***REMOVED***
	if ( params.constructor !== Array ) {
		params = [ params ];
	***REMOVED***
	$.each( params, function( i, n ) {
		source = source.replace( new RegExp( "\\{" + i + "\\***REMOVED***", "g" ), function() {
			return n;
		***REMOVED***);
	***REMOVED***);
	return source;
***REMOVED***;

$.extend( $.validator, {

	defaults: {
		messages: {***REMOVED***,
		groups: {***REMOVED***,
		rules: {***REMOVED***,
		errorClass: "error",
		validClass: "valid",
		errorElement: "label",
		focusCleanup: false,
		focusInvalid: true,
		errorContainer: $( [] ),
		errorLabelContainer: $( [] ),
		onsubmit: true,
		ignore: ":hidden",
		ignoreTitle: false,
		onfocusin: function( element ) {
			this.lastActive = element;

			// Hide error label and remove error class on focus if enabled
			if ( this.settings.focusCleanup ) {
				if ( this.settings.unhighlight ) {
					this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
				***REMOVED***
				this.hideThese( this.errorsFor( element ) );
			***REMOVED***
		***REMOVED***,
		onfocusout: function( element ) {
			if ( !this.checkable( element ) && ( element.name in this.submitted || !this.optional( element ) ) ) {
				this.element( element );
			***REMOVED***
		***REMOVED***,
		onkeyup: function( element, event ) {
			if ( event.which === 9 && this.elementValue( element ) === "" ) {
				return;
			***REMOVED*** else if ( element.name in this.submitted || element === this.lastElement ) {
				this.element( element );
			***REMOVED***
		***REMOVED***,
		onclick: function( element ) {
			// click on selects, radiobuttons and checkboxes
			if ( element.name in this.submitted ) {
				this.element( element );

			// or option elements, check parent select in that case
			***REMOVED*** else if ( element.parentNode.name in this.submitted ) {
				this.element( element.parentNode );
			***REMOVED***
		***REMOVED***,
		highlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).addClass( errorClass ).removeClass( validClass );
			***REMOVED*** else {
				$( element ).addClass( errorClass ).removeClass( validClass );
			***REMOVED***
		***REMOVED***,
		unhighlight: function( element, errorClass, validClass ) {
			if ( element.type === "radio" ) {
				this.findByName( element.name ).removeClass( errorClass ).addClass( validClass );
			***REMOVED*** else {
				$( element ).removeClass( errorClass ).addClass( validClass );
			***REMOVED***
		***REMOVED***
	***REMOVED***,

	// http://jqueryvalidation.org/jQuery.validator.setDefaults/
	setDefaults: function( settings ) {
		$.extend( $.validator.defaults, settings );
	***REMOVED***,

	messages: {
		required: "This field is required.",
		remote: "Please fix this field.",
		email: "Please enter a valid email address.",
		url: "Please enter a valid URL.",
		date: "Please enter a valid date.",
		dateISO: "Please enter a valid date ( ISO ).",
		number: "Please enter a valid number.",
		digits: "Please enter only digits.",
		creditcard: "Please enter a valid credit card number.",
		equalTo: "Please enter the same value again.",
		maxlength: $.validator.format( "Please enter no more than {0***REMOVED*** characters." ),
		minlength: $.validator.format( "Please enter at least {0***REMOVED*** characters." ),
		rangelength: $.validator.format( "Please enter a value between {0***REMOVED*** and {1***REMOVED*** characters long." ),
		range: $.validator.format( "Please enter a value between {0***REMOVED*** and {1***REMOVED***." ),
		max: $.validator.format( "Please enter a value less than or equal to {0***REMOVED***." ),
		min: $.validator.format( "Please enter a value greater than or equal to {0***REMOVED***." )
	***REMOVED***,

	autoCreateRanges: false,

	prototype: {

		init: function() {
			this.labelContainer = $( this.settings.errorLabelContainer );
			this.errorContext = this.labelContainer.length && this.labelContainer || $( this.currentForm );
			this.containers = $( this.settings.errorContainer ).add( this.settings.errorLabelContainer );
			this.submitted = {***REMOVED***;
			this.valueCache = {***REMOVED***;
			this.pendingRequest = 0;
			this.pending = {***REMOVED***;
			this.invalid = {***REMOVED***;
			this.reset();

			var groups = ( this.groups = {***REMOVED*** ),
				rules;
			$.each( this.settings.groups, function( key, value ) {
				if ( typeof value === "string" ) {
					value = value.split( /\s/ );
				***REMOVED***
				$.each( value, function( index, name ) {
					groups[ name ] = key;
				***REMOVED***);
			***REMOVED***);
			rules = this.settings.rules;
			$.each( rules, function( key, value ) {
				rules[ key ] = $.validator.normalizeRule( value );
			***REMOVED***);

			function delegate( event ) {
				var validator = $.data( this[ 0 ].form, "validator" ),
					eventType = "on" + event.type.replace( /^validate/, "" ),
					settings = validator.settings;
				if ( settings[ eventType ] && !this.is( settings.ignore ) ) {
					settings[ eventType ].call( validator, this[ 0 ], event );
				***REMOVED***
			***REMOVED***
			$( this.currentForm )
				.validateDelegate( ":text, [type='password'], [type='file'], select, textarea, " +
					"[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
					"[type='email'], [type='datetime'], [type='date'], [type='month'], " +
					"[type='week'], [type='time'], [type='datetime-local'], " +
					"[type='range'], [type='color'], [type='radio'], [type='checkbox']",
					"focusin focusout keyup", delegate)
				// Support: Chrome, oldIE
				// "select" is provided as event.target when clicking a option
				.validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", delegate);

			if ( this.settings.invalidHandler ) {
				$( this.currentForm ).bind( "invalid-form.validate", this.settings.invalidHandler );
			***REMOVED***

			// Add aria-required to any Static/Data/Class required fields before first validation
			// Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
			$( this.currentForm ).find( "[required], [data-rule-required], .required" ).attr( "aria-required", "true" );
		***REMOVED***,

		// http://jqueryvalidation.org/Validator.form/
		form: function() {
			this.checkForm();
			$.extend( this.submitted, this.errorMap );
			this.invalid = $.extend({***REMOVED***, this.errorMap );
			if ( !this.valid() ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
			***REMOVED***
			this.showErrors();
			return this.valid();
		***REMOVED***,

		checkForm: function() {
			this.prepareForm();
			for ( var i = 0, elements = ( this.currentElements = this.elements() ); elements[ i ]; i++ ) {
				this.check( elements[ i ] );
			***REMOVED***
			return this.valid();
		***REMOVED***,

		// http://jqueryvalidation.org/Validator.element/
		element: function( element ) {
			var cleanElement = this.clean( element ),
				checkElement = this.validationTargetFor( cleanElement ),
				result = true;

			this.lastElement = checkElement;

			if ( checkElement === undefined ) {
				delete this.invalid[ cleanElement.name ];
			***REMOVED*** else {
				this.prepareElement( checkElement );
				this.currentElements = $( checkElement );

				result = this.check( checkElement ) !== false;
				if ( result ) {
					delete this.invalid[ checkElement.name ];
				***REMOVED*** else {
					this.invalid[ checkElement.name ] = true;
				***REMOVED***
			***REMOVED***
			// Add aria-invalid status for screen readers
			$( element ).attr( "aria-invalid", !result );

			if ( !this.numberOfInvalids() ) {
				// Hide error containers on last error
				this.toHide = this.toHide.add( this.containers );
			***REMOVED***
			this.showErrors();
			return result;
		***REMOVED***,

		// http://jqueryvalidation.org/Validator.showErrors/
		showErrors: function( errors ) {
			if ( errors ) {
				// add items to error list and map
				$.extend( this.errorMap, errors );
				this.errorList = [];
				for ( var name in errors ) {
					this.errorList.push({
						message: errors[ name ],
						element: this.findByName( name )[ 0 ]
					***REMOVED***);
				***REMOVED***
				// remove items from success list
				this.successList = $.grep( this.successList, function( element ) {
					return !( element.name in errors );
				***REMOVED***);
			***REMOVED***
			if ( this.settings.showErrors ) {
				this.settings.showErrors.call( this, this.errorMap, this.errorList );
			***REMOVED*** else {
				this.defaultShowErrors();
			***REMOVED***
		***REMOVED***,

		// http://jqueryvalidation.org/Validator.resetForm/
		resetForm: function() {
			if ( $.fn.resetForm ) {
				$( this.currentForm ).resetForm();
			***REMOVED***
			this.submitted = {***REMOVED***;
			this.lastElement = null;
			this.prepareForm();
			this.hideErrors();
			this.elements()
					.removeClass( this.settings.errorClass )
					.removeData( "previousValue" )
					.removeAttr( "aria-invalid" );
		***REMOVED***,

		numberOfInvalids: function() {
			return this.objectLength( this.invalid );
		***REMOVED***,

		objectLength: function( obj ) {
			/* jshint unused: false */
			var count = 0,
				i;
			for ( i in obj ) {
				count++;
			***REMOVED***
			return count;
		***REMOVED***,

		hideErrors: function() {
			this.hideThese( this.toHide );
		***REMOVED***,

		hideThese: function( errors ) {
			errors.not( this.containers ).text( "" );
			this.addWrapper( errors ).hide();
		***REMOVED***,

		valid: function() {
			return this.size() === 0;
		***REMOVED***,

		size: function() {
			return this.errorList.length;
		***REMOVED***,

		focusInvalid: function() {
			if ( this.settings.focusInvalid ) {
				try {
					$( this.findLastActive() || this.errorList.length && this.errorList[ 0 ].element || [])
					.filter( ":visible" )
					.focus()
					// manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
					.trigger( "focusin" );
				***REMOVED*** catch ( e ) {
					// ignore IE throwing errors when focusing hidden elements
				***REMOVED***
			***REMOVED***
		***REMOVED***,

		findLastActive: function() {
			var lastActive = this.lastActive;
			return lastActive && $.grep( this.errorList, function( n ) {
				return n.element.name === lastActive.name;
			***REMOVED***).length === 1 && lastActive;
		***REMOVED***,

		elements: function() {
			var validator = this,
				rulesCache = {***REMOVED***;

			// select all valid inputs inside the form (no submit or reset buttons)
			return $( this.currentForm )
			.find( "input, select, textarea" )
			.not( ":submit, :reset, :image, [disabled], [readonly]" )
			.not( this.settings.ignore )
			.filter( function() {
				if ( !this.name && validator.settings.debug && window.console ) {
					console.error( "%o has no name assigned", this );
				***REMOVED***

				// select only the first element for each name, and only those with rules specified
				if ( this.name in rulesCache || !validator.objectLength( $( this ).rules() ) ) {
					return false;
				***REMOVED***

				rulesCache[ this.name ] = true;
				return true;
			***REMOVED***);
		***REMOVED***,

		clean: function( selector ) {
			return $( selector )[ 0 ];
		***REMOVED***,

		errors: function() {
			var errorClass = this.settings.errorClass.split( " " ).join( "." );
			return $( this.settings.errorElement + "." + errorClass, this.errorContext );
		***REMOVED***,

		reset: function() {
			this.successList = [];
			this.errorList = [];
			this.errorMap = {***REMOVED***;
			this.toShow = $( [] );
			this.toHide = $( [] );
			this.currentElements = $( [] );
		***REMOVED***,

		prepareForm: function() {
			this.reset();
			this.toHide = this.errors().add( this.containers );
		***REMOVED***,

		prepareElement: function( element ) {
			this.reset();
			this.toHide = this.errorsFor( element );
		***REMOVED***,

		elementValue: function( element ) {
			var val,
				$element = $( element ),
				type = element.type;

			if ( type === "radio" || type === "checkbox" ) {
				return $( "input[name='" + element.name + "']:checked" ).val();
			***REMOVED*** else if ( type === "number" && typeof element.validity !== "undefined" ) {
				return element.validity.badInput ? false : $element.val();
			***REMOVED***

			val = $element.val();
			if ( typeof val === "string" ) {
				return val.replace(/\r/g, "" );
			***REMOVED***
			return val;
		***REMOVED***,

		check: function( element ) {
			element = this.validationTargetFor( this.clean( element ) );

			var rules = $( element ).rules(),
				rulesCount = $.map( rules, function( n, i ) {
					return i;
				***REMOVED***).length,
				dependencyMismatch = false,
				val = this.elementValue( element ),
				result, method, rule;

			for ( method in rules ) {
				rule = { method: method, parameters: rules[ method ] ***REMOVED***;
				try {

					result = $.validator.methods[ method ].call( this, val, element, rule.parameters );

					// if a method indicates that the field is optional and therefore valid,
					// don't mark it as valid when there are no other rules
					if ( result === "dependency-mismatch" && rulesCount === 1 ) {
						dependencyMismatch = true;
						continue;
					***REMOVED***
					dependencyMismatch = false;

					if ( result === "pending" ) {
						this.toHide = this.toHide.not( this.errorsFor( element ) );
						return;
					***REMOVED***

					if ( !result ) {
						this.formatAndAdd( element, rule );
						return false;
					***REMOVED***
				***REMOVED*** catch ( e ) {
					if ( this.settings.debug && window.console ) {
						console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
					***REMOVED***
					throw e;
				***REMOVED***
			***REMOVED***
			if ( dependencyMismatch ) {
				return;
			***REMOVED***
			if ( this.objectLength( rules ) ) {
				this.successList.push( element );
			***REMOVED***
			return true;
		***REMOVED***,

		// return the custom message for the given element and validation method
		// specified in the element's HTML5 data attribute
		// return the generic message if present and no method specific message is present
		customDataMessage: function( element, method ) {
			return $( element ).data( "msg" + method.charAt( 0 ).toUpperCase() +
				method.substring( 1 ).toLowerCase() ) || $( element ).data( "msg" );
		***REMOVED***,

		// return the custom message for the given element name and validation method
		customMessage: function( name, method ) {
			var m = this.settings.messages[ name ];
			return m && ( m.constructor === String ? m : m[ method ]);
		***REMOVED***,

		// return the first defined argument, allowing empty strings
		findDefined: function() {
			for ( var i = 0; i < arguments.length; i++) {
				if ( arguments[ i ] !== undefined ) {
					return arguments[ i ];
				***REMOVED***
			***REMOVED***
			return undefined;
		***REMOVED***,

		defaultMessage: function( element, method ) {
			return this.findDefined(
				this.customMessage( element.name, method ),
				this.customDataMessage( element, method ),
				// title is never undefined, so handle empty string as undefined
				!this.settings.ignoreTitle && element.title || undefined,
				$.validator.messages[ method ],
				"<strong>Warning: No message defined for " + element.name + "</strong>"
			);
		***REMOVED***,

		formatAndAdd: function( element, rule ) {
			var message = this.defaultMessage( element, rule.method ),
				theregex = /\$?\{(\d+)\***REMOVED***/g;
			if ( typeof message === "function" ) {
				message = message.call( this, rule.parameters, element );
			***REMOVED*** else if ( theregex.test( message ) ) {
				message = $.validator.format( message.replace( theregex, "{$1***REMOVED***" ), rule.parameters );
			***REMOVED***
			this.errorList.push({
				message: message,
				element: element,
				method: rule.method
			***REMOVED***);

			this.errorMap[ element.name ] = message;
			this.submitted[ element.name ] = message;
		***REMOVED***,

		addWrapper: function( toToggle ) {
			if ( this.settings.wrapper ) {
				toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
			***REMOVED***
			return toToggle;
		***REMOVED***,

		defaultShowErrors: function() {
			var i, elements, error;
			for ( i = 0; this.errorList[ i ]; i++ ) {
				error = this.errorList[ i ];
				if ( this.settings.highlight ) {
					this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
				***REMOVED***
				this.showLabel( error.element, error.message );
			***REMOVED***
			if ( this.errorList.length ) {
				this.toShow = this.toShow.add( this.containers );
			***REMOVED***
			if ( this.settings.success ) {
				for ( i = 0; this.successList[ i ]; i++ ) {
					this.showLabel( this.successList[ i ] );
				***REMOVED***
			***REMOVED***
			if ( this.settings.unhighlight ) {
				for ( i = 0, elements = this.validElements(); elements[ i ]; i++ ) {
					this.settings.unhighlight.call( this, elements[ i ], this.settings.errorClass, this.settings.validClass );
				***REMOVED***
			***REMOVED***
			this.toHide = this.toHide.not( this.toShow );
			this.hideErrors();
			this.addWrapper( this.toShow ).show();
		***REMOVED***,

		validElements: function() {
			return this.currentElements.not( this.invalidElements() );
		***REMOVED***,

		invalidElements: function() {
			return $( this.errorList ).map(function() {
				return this.element;
			***REMOVED***);
		***REMOVED***,

		showLabel: function( element, message ) {
			var place, group, errorID,
				error = this.errorsFor( element ),
				elementID = this.idOrName( element ),
				describedBy = $( element ).attr( "aria-describedby" );
			if ( error.length ) {
				// refresh error/success class
				error.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
				// replace message on existing label
				error.html( message );
			***REMOVED*** else {
				// create error element
				error = $( "<" + this.settings.errorElement + ">" )
					.attr( "id", elementID + "-error" )
					.addClass( this.settings.errorClass )
					.html( message || "" );

				// Maintain reference to the element to be placed into the DOM
				place = error;
				if ( this.settings.wrapper ) {
					// make sure the element is visible, even in IE
					// actually showing the wrapped element is handled elsewhere
					place = error.hide().show().wrap( "<" + this.settings.wrapper + "/>" ).parent();
				***REMOVED***
				if ( this.labelContainer.length ) {
					this.labelContainer.append( place );
				***REMOVED*** else if ( this.settings.errorPlacement ) {
					this.settings.errorPlacement( place, $( element ) );
				***REMOVED*** else {
					place.insertAfter( element );
				***REMOVED***

				// Link error back to the element
				if ( error.is( "label" ) ) {
					// If the error is a label, then associate using 'for'
					error.attr( "for", elementID );
				***REMOVED*** else if ( error.parents( "label[for='" + elementID + "']" ).length === 0 ) {
					// If the element is not a child of an associated label, then it's necessary
					// to explicitly apply aria-describedby

					errorID = error.attr( "id" ).replace( /(:|\.|\[|\])/g, "\\$1");
					// Respect existing non-error aria-describedby
					if ( !describedBy ) {
						describedBy = errorID;
					***REMOVED*** else if ( !describedBy.match( new RegExp( "\\b" + errorID + "\\b" ) ) ) {
						// Add to end of list if not already present
						describedBy += " " + errorID;
					***REMOVED***
					$( element ).attr( "aria-describedby", describedBy );

					// If this element is grouped, then assign to all elements in the same group
					group = this.groups[ element.name ];
					if ( group ) {
						$.each( this.groups, function( name, testgroup ) {
							if ( testgroup === group ) {
								$( "[name='" + name + "']", this.currentForm )
									.attr( "aria-describedby", error.attr( "id" ) );
							***REMOVED***
						***REMOVED***);
					***REMOVED***
				***REMOVED***
			***REMOVED***
			if ( !message && this.settings.success ) {
				error.text( "" );
				if ( typeof this.settings.success === "string" ) {
					error.addClass( this.settings.success );
				***REMOVED*** else {
					this.settings.success( error, element );
				***REMOVED***
			***REMOVED***
			this.toShow = this.toShow.add( error );
		***REMOVED***,

		errorsFor: function( element ) {
			var name = this.idOrName( element ),
				describer = $( element ).attr( "aria-describedby" ),
				selector = "label[for='" + name + "'], label[for='" + name + "'] *";

			// aria-describedby should directly reference the error element
			if ( describer ) {
				selector = selector + ", #" + describer.replace( /\s+/g, ", #" );
			***REMOVED***
			return this
				.errors()
				.filter( selector );
		***REMOVED***,

		idOrName: function( element ) {
			return this.groups[ element.name ] || ( this.checkable( element ) ? element.name : element.id || element.name );
		***REMOVED***,

		validationTargetFor: function( element ) {

			// If radio/checkbox, validate first element in group instead
			if ( this.checkable( element ) ) {
				element = this.findByName( element.name );
			***REMOVED***

			// Always apply ignore filter
			return $( element ).not( this.settings.ignore )[ 0 ];
		***REMOVED***,

		checkable: function( element ) {
			return ( /radio|checkbox/i ).test( element.type );
		***REMOVED***,

		findByName: function( name ) {
			return $( this.currentForm ).find( "[name='" + name + "']" );
		***REMOVED***,

		getLength: function( value, element ) {
			switch ( element.nodeName.toLowerCase() ) {
			case "select":
				return $( "option:selected", element ).length;
			case "input":
				if ( this.checkable( element ) ) {
					return this.findByName( element.name ).filter( ":checked" ).length;
				***REMOVED***
			***REMOVED***
			return value.length;
		***REMOVED***,

		depend: function( param, element ) {
			return this.dependTypes[typeof param] ? this.dependTypes[typeof param]( param, element ) : true;
		***REMOVED***,

		dependTypes: {
			"boolean": function( param ) {
				return param;
			***REMOVED***,
			"string": function( param, element ) {
				return !!$( param, element.form ).length;
			***REMOVED***,
			"function": function( param, element ) {
				return param( element );
			***REMOVED***
		***REMOVED***,

		optional: function( element ) {
			var val = this.elementValue( element );
			return !$.validator.methods.required.call( this, val, element ) && "dependency-mismatch";
		***REMOVED***,

		startRequest: function( element ) {
			if ( !this.pending[ element.name ] ) {
				this.pendingRequest++;
				this.pending[ element.name ] = true;
			***REMOVED***
		***REMOVED***,

		stopRequest: function( element, valid ) {
			this.pendingRequest--;
			// sometimes synchronization fails, make sure pendingRequest is never < 0
			if ( this.pendingRequest < 0 ) {
				this.pendingRequest = 0;
			***REMOVED***
			delete this.pending[ element.name ];
			if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
				$( this.currentForm ).submit();
				this.formSubmitted = false;
			***REMOVED*** else if (!valid && this.pendingRequest === 0 && this.formSubmitted ) {
				$( this.currentForm ).triggerHandler( "invalid-form", [ this ]);
				this.formSubmitted = false;
			***REMOVED***
		***REMOVED***,

		previousValue: function( element ) {
			return $.data( element, "previousValue" ) || $.data( element, "previousValue", {
				old: null,
				valid: true,
				message: this.defaultMessage( element, "remote" )
			***REMOVED***);
		***REMOVED***

	***REMOVED***,

	classRuleSettings: {
		required: { required: true ***REMOVED***,
		email: { email: true ***REMOVED***,
		url: { url: true ***REMOVED***,
		date: { date: true ***REMOVED***,
		dateISO: { dateISO: true ***REMOVED***,
		number: { number: true ***REMOVED***,
		digits: { digits: true ***REMOVED***,
		creditcard: { creditcard: true ***REMOVED***
	***REMOVED***,

	addClassRules: function( className, rules ) {
		if ( className.constructor === String ) {
			this.classRuleSettings[ className ] = rules;
		***REMOVED*** else {
			$.extend( this.classRuleSettings, className );
		***REMOVED***
	***REMOVED***,

	classRules: function( element ) {
		var rules = {***REMOVED***,
			classes = $( element ).attr( "class" );

		if ( classes ) {
			$.each( classes.split( " " ), function() {
				if ( this in $.validator.classRuleSettings ) {
					$.extend( rules, $.validator.classRuleSettings[ this ]);
				***REMOVED***
			***REMOVED***);
		***REMOVED***
		return rules;
	***REMOVED***,

	attributeRules: function( element ) {
		var rules = {***REMOVED***,
			$element = $( element ),
			type = element.getAttribute( "type" ),
			method, value;

		for ( method in $.validator.methods ) {

			// support for <input required> in both html5 and older browsers
			if ( method === "required" ) {
				value = element.getAttribute( method );
				// Some browsers return an empty string for the required attribute
				// and non-HTML5 browsers might have required="" markup
				if ( value === "" ) {
					value = true;
				***REMOVED***
				// force non-HTML5 browsers to return bool
				value = !!value;
			***REMOVED*** else {
				value = $element.attr( method );
			***REMOVED***

			// convert the value to a number for number inputs, and for text for backwards compability
			// allows type="date" and others to be compared as strings
			if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
				value = Number( value );
			***REMOVED***

			if ( value || value === 0 ) {
				rules[ method ] = value;
			***REMOVED*** else if ( type === method && type !== "range" ) {
				// exception: the jquery validate 'range' method
				// does not test for the html5 'range' type
				rules[ method ] = true;
			***REMOVED***
		***REMOVED***

		// maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
		if ( rules.maxlength && /-1|2147483647|524288/.test( rules.maxlength ) ) {
			delete rules.maxlength;
		***REMOVED***

		return rules;
	***REMOVED***,

	dataRules: function( element ) {
		var method, value,
			rules = {***REMOVED***, $element = $( element );
		for ( method in $.validator.methods ) {
			value = $element.data( "rule" + method.charAt( 0 ).toUpperCase() + method.substring( 1 ).toLowerCase() );
			if ( value !== undefined ) {
				rules[ method ] = value;
			***REMOVED***
		***REMOVED***
		return rules;
	***REMOVED***,

	staticRules: function( element ) {
		var rules = {***REMOVED***,
			validator = $.data( element.form, "validator" );

		if ( validator.settings.rules ) {
			rules = $.validator.normalizeRule( validator.settings.rules[ element.name ] ) || {***REMOVED***;
		***REMOVED***
		return rules;
	***REMOVED***,

	normalizeRules: function( rules, element ) {
		// handle dependency check
		$.each( rules, function( prop, val ) {
			// ignore rule when param is explicitly false, eg. required:false
			if ( val === false ) {
				delete rules[ prop ];
				return;
			***REMOVED***
			if ( val.param || val.depends ) {
				var keepRule = true;
				switch ( typeof val.depends ) {
				case "string":
					keepRule = !!$( val.depends, element.form ).length;
					break;
				case "function":
					keepRule = val.depends.call( element, element );
					break;
				***REMOVED***
				if ( keepRule ) {
					rules[ prop ] = val.param !== undefined ? val.param : true;
				***REMOVED*** else {
					delete rules[ prop ];
				***REMOVED***
			***REMOVED***
		***REMOVED***);

		// evaluate parameters
		$.each( rules, function( rule, parameter ) {
			rules[ rule ] = $.isFunction( parameter ) ? parameter( element ) : parameter;
		***REMOVED***);

		// clean number parameters
		$.each([ "minlength", "maxlength" ], function() {
			if ( rules[ this ] ) {
				rules[ this ] = Number( rules[ this ] );
			***REMOVED***
		***REMOVED***);
		$.each([ "rangelength", "range" ], function() {
			var parts;
			if ( rules[ this ] ) {
				if ( $.isArray( rules[ this ] ) ) {
					rules[ this ] = [ Number( rules[ this ][ 0 ]), Number( rules[ this ][ 1 ] ) ];
				***REMOVED*** else if ( typeof rules[ this ] === "string" ) {
					parts = rules[ this ].replace(/[\[\]]/g, "" ).split( /[\s,]+/ );
					rules[ this ] = [ Number( parts[ 0 ]), Number( parts[ 1 ] ) ];
				***REMOVED***
			***REMOVED***
		***REMOVED***);

		if ( $.validator.autoCreateRanges ) {
			// auto-create ranges
			if ( rules.min != null && rules.max != null ) {
				rules.range = [ rules.min, rules.max ];
				delete rules.min;
				delete rules.max;
			***REMOVED***
			if ( rules.minlength != null && rules.maxlength != null ) {
				rules.rangelength = [ rules.minlength, rules.maxlength ];
				delete rules.minlength;
				delete rules.maxlength;
			***REMOVED***
		***REMOVED***

		return rules;
	***REMOVED***,

	// Converts a simple string to a {string: true***REMOVED*** rule, e.g., "required" to {required:true***REMOVED***
	normalizeRule: function( data ) {
		if ( typeof data === "string" ) {
			var transformed = {***REMOVED***;
			$.each( data.split( /\s/ ), function() {
				transformed[ this ] = true;
			***REMOVED***);
			data = transformed;
		***REMOVED***
		return data;
	***REMOVED***,

	// http://jqueryvalidation.org/jQuery.validator.addMethod/
	addMethod: function( name, method, message ) {
		$.validator.methods[ name ] = method;
		$.validator.messages[ name ] = message !== undefined ? message : $.validator.messages[ name ];
		if ( method.length < 3 ) {
			$.validator.addClassRules( name, $.validator.normalizeRule( name ) );
		***REMOVED***
	***REMOVED***,

	methods: {

		// http://jqueryvalidation.org/required-method/
		required: function( value, element, param ) {
			// check if dependency is met
			if ( !this.depend( param, element ) ) {
				return "dependency-mismatch";
			***REMOVED***
			if ( element.nodeName.toLowerCase() === "select" ) {
				// could be an array for select-multiple or a string, both are fine this way
				var val = $( element ).val();
				return val && val.length > 0;
			***REMOVED***
			if ( this.checkable( element ) ) {
				return this.getLength( value, element ) > 0;
			***REMOVED***
			return $.trim( value ).length > 0;
		***REMOVED***,

		// http://jqueryvalidation.org/email-method/
		email: function( value, element ) {
			// From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=email%29
			// Retrieved 2014-01-14
			// If you have a problem with this implementation, report a bug against the above spec
			// Or use custom methods to implement your own email validation
			return this.optional( element ) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|***REMOVED***~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61***REMOVED***[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61***REMOVED***[a-zA-Z0-9])?)*$/.test( value );
		***REMOVED***,

		// http://jqueryvalidation.org/url-method/
		url: function( value, element ) {
			// contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
			return this.optional( element ) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2***REMOVED***)|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2***REMOVED***)|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2***REMOVED***)|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2***REMOVED***)|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2***REMOVED***)|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test( value );
		***REMOVED***,

		// http://jqueryvalidation.org/date-method/
		date: function( value, element ) {
			return this.optional( element ) || !/Invalid|NaN/.test( new Date( value ).toString() );
		***REMOVED***,

		// http://jqueryvalidation.org/dateISO-method/
		dateISO: function( value, element ) {
			return this.optional( element ) || /^\d{4***REMOVED***[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test( value );
		***REMOVED***,

		// http://jqueryvalidation.org/number-method/
		number: function( value, element ) {
			return this.optional( element ) || /^-?(?:\d+|\d{1,3***REMOVED***(?:,\d{3***REMOVED***)+)?(?:\.\d+)?$/.test( value );
		***REMOVED***,

		// http://jqueryvalidation.org/digits-method/
		digits: function( value, element ) {
			return this.optional( element ) || /^\d+$/.test( value );
		***REMOVED***,

		// http://jqueryvalidation.org/creditcard-method/
		// based on http://en.wikipedia.org/wiki/Luhn/
		creditcard: function( value, element ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			***REMOVED***
			// accept only spaces, digits and dashes
			if ( /[^0-9 \-]+/.test( value ) ) {
				return false;
			***REMOVED***
			var nCheck = 0,
				nDigit = 0,
				bEven = false,
				n, cDigit;

			value = value.replace( /\D/g, "" );

			// Basing min and max length on
			// http://developer.ean.com/general_info/Valid_Credit_Card_Types
			if ( value.length < 13 || value.length > 19 ) {
				return false;
			***REMOVED***

			for ( n = value.length - 1; n >= 0; n--) {
				cDigit = value.charAt( n );
				nDigit = parseInt( cDigit, 10 );
				if ( bEven ) {
					if ( ( nDigit *= 2 ) > 9 ) {
						nDigit -= 9;
					***REMOVED***
				***REMOVED***
				nCheck += nDigit;
				bEven = !bEven;
			***REMOVED***

			return ( nCheck % 10 ) === 0;
		***REMOVED***,

		// http://jqueryvalidation.org/minlength-method/
		minlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length >= param;
		***REMOVED***,

		// http://jqueryvalidation.org/maxlength-method/
		maxlength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || length <= param;
		***REMOVED***,

		// http://jqueryvalidation.org/rangelength-method/
		rangelength: function( value, element, param ) {
			var length = $.isArray( value ) ? value.length : this.getLength( value, element );
			return this.optional( element ) || ( length >= param[ 0 ] && length <= param[ 1 ] );
		***REMOVED***,

		// http://jqueryvalidation.org/min-method/
		min: function( value, element, param ) {
			return this.optional( element ) || value >= param;
		***REMOVED***,

		// http://jqueryvalidation.org/max-method/
		max: function( value, element, param ) {
			return this.optional( element ) || value <= param;
		***REMOVED***,

		// http://jqueryvalidation.org/range-method/
		range: function( value, element, param ) {
			return this.optional( element ) || ( value >= param[ 0 ] && value <= param[ 1 ] );
		***REMOVED***,

		// http://jqueryvalidation.org/equalTo-method/
		equalTo: function( value, element, param ) {
			// bind to the blur event of the target in order to revalidate whenever the target field is updated
			// TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
			var target = $( param );
			if ( this.settings.onfocusout ) {
				target.unbind( ".validate-equalTo" ).bind( "blur.validate-equalTo", function() {
					$( element ).valid();
				***REMOVED***);
			***REMOVED***
			return value === target.val();
		***REMOVED***,

		// http://jqueryvalidation.org/remote-method/
		remote: function( value, element, param ) {
			if ( this.optional( element ) ) {
				return "dependency-mismatch";
			***REMOVED***

			var previous = this.previousValue( element ),
				validator, data;

			if (!this.settings.messages[ element.name ] ) {
				this.settings.messages[ element.name ] = {***REMOVED***;
			***REMOVED***
			previous.originalMessage = this.settings.messages[ element.name ].remote;
			this.settings.messages[ element.name ].remote = previous.message;

			param = typeof param === "string" && { url: param ***REMOVED*** || param;

			if ( previous.old === value ) {
				return previous.valid;
			***REMOVED***

			previous.old = value;
			validator = this;
			this.startRequest( element );
			data = {***REMOVED***;
			data[ element.name ] = value;
			$.ajax( $.extend( true, {
				url: param,
				mode: "abort",
				port: "validate" + element.name,
				dataType: "json",
				data: data,
				context: validator.currentForm,
				success: function( response ) {
					var valid = response === true || response === "true",
						errors, message, submitted;

					validator.settings.messages[ element.name ].remote = previous.originalMessage;
					if ( valid ) {
						submitted = validator.formSubmitted;
						validator.prepareElement( element );
						validator.formSubmitted = submitted;
						validator.successList.push( element );
						delete validator.invalid[ element.name ];
						validator.showErrors();
					***REMOVED*** else {
						errors = {***REMOVED***;
						message = response || validator.defaultMessage( element, "remote" );
						errors[ element.name ] = previous.message = $.isFunction( message ) ? message( value ) : message;
						validator.invalid[ element.name ] = true;
						validator.showErrors( errors );
					***REMOVED***
					previous.valid = valid;
					validator.stopRequest( element, valid );
				***REMOVED***
			***REMOVED***, param ) );
			return "pending";
		***REMOVED***

	***REMOVED***

***REMOVED***);

$.format = function deprecated() {
	throw "$.format has been deprecated. Please use $.validator.format instead.";
***REMOVED***;
