/**
 * Bootstrap Multiselect v0.9.8 (https://github.com/davidstutz/bootstrap-multiselect)
 * 
 * Copyright 2012 - 2014 David Stutz
 * 
 * Dual licensed under the BSD-3-Clause and the Apache License, Version 2.0.
 */
!function($) {
 
    "use strict";// jshint ;_;

    if (typeof ko !== 'undefined' && ko.bindingHandlers && !ko.bindingHandlers.multiselect) {
        ko.bindingHandlers.multiselect = {

            init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                var listOfSelectedItems = allBindingsAccessor().selectedOptions;
                var config = ko.utils.unwrapObservable(valueAccessor());

                $(element).multiselect(config);

                if (isObservableArray(listOfSelectedItems)) {
                    
                    // Set the initial selection state on the multiselect list.
                    $(element).multiselect('select', ko.utils.unwrapObservable(listOfSelectedItems));
                    
                    // Subscribe to the selectedOptions: ko.observableArray
                    listOfSelectedItems.subscribe(function (changes) {
                        var addedArray = [], deletedArray = [];
                        forEach(changes, function (change) {
                            switch (change.status) {
                                case 'added':
                                    addedArray.push(change.value);
                                    break;
                                case 'deleted':
                                    deletedArray.push(change.value);
                                    break;
                          ***REMOVED***
                      ***REMOVED***);
                        
                        if (addedArray.length > 0) {
                            $(element).multiselect('select', addedArray);
                      ***REMOVED***
                        
                        if (deletedArray.length > 0) {
                            $(element).multiselect('deselect', deletedArray);
                      ***REMOVED***
                  ***REMOVED***, null, "arrayChange");
              ***REMOVED***
          ***REMOVED***,

            update: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {

                var listOfItems = allBindingsAccessor().options,
                    ms = $(element).data('multiselect'),
                    config = ko.utils.unwrapObservable(valueAccessor());

                if (isObservableArray(listOfItems)) {
                    // Subscribe to the options: ko.observableArray incase it changes later
                    listOfItems.subscribe(function (theArray) {
                        $(element).multiselect('rebuild');
                  ***REMOVED***);
              ***REMOVED***

                if (!ms) {
                    $(element).multiselect(config);
              ***REMOVED***
                else {
                    ms.updateOriginalOptions();
              ***REMOVED***
          ***REMOVED***
      ***REMOVED***;
  ***REMOVED***

    function isObservableArray(obj) {
        return ko.isObservable(obj) && !(obj.destroyAll === undefined);
  ***REMOVED***

    function forEach(array, callback) {
        for (var index = 0; index < array.length; ++index) {
            callback(array[index]);
      ***REMOVED***
  ***REMOVED***

    /**
     * Constructor to create a new multiselect using the given select.
     * 
     * @param {jQuery***REMOVED*** select
     * @param {Object***REMOVED*** options
     * @returns {Multiselect***REMOVED***
     */
    function Multiselect(select, options) {

        this.$select = $(select);
        this.options = this.mergeOptions($.extend({***REMOVED***, options, this.$select.data()));

        // Initialization.
        // We have to clone to create a new reference.
        this.originalOptions = this.$select.clone()[0].options;
        this.query = '';
        this.searchTimeout = null;

        this.options.multiple = this.$select.attr('multiple') === "multiple";
        this.options.onChange = $.proxy(this.options.onChange, this);
        this.options.onDropdownShow = $.proxy(this.options.onDropdownShow, this);
        this.options.onDropdownHide = $.proxy(this.options.onDropdownHide, this);
        this.options.onDropdownShown = $.proxy(this.options.onDropdownShown, this);
        this.options.onDropdownHidden = $.proxy(this.options.onDropdownHidden, this);
        
        // Build select all if enabled.
        this.buildContainer();
        this.buildButton();
        this.buildDropdown();
        this.buildSelectAll();
        this.buildDropdownOptions();
        this.buildFilter();
        
        this.updateButtonText();
        this.updateSelectAll();
        
        if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
            this.disable();
      ***REMOVED***
        
        this.$select.hide().after(this.$container);
  ***REMOVED***;

    Multiselect.prototype = {

        defaults: {
            /**
             * Default text function will either print 'None selected' in case no
             * option is selected or a list of the selected options up to a length
             * of 3 selected options.
             * 
             * @param {jQuery***REMOVED*** options
             * @param {jQuery***REMOVED*** select
             * @returns {String***REMOVED***
             */
            buttonText: function(options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText + ' <b class="caret"></b>';
              ***REMOVED***
                else if (options.length == $('option', $(select)).length) {
                    return this.allSelectedText + ' <b class="caret"></b>';
              ***REMOVED***
                else if (options.length > this.numberDisplayed) {
                    return options.length + ' ' + this.nSelectedText + ' <b class="caret"></b>';
              ***REMOVED***
                else {
                    var selected = '';
                    options.each(function() {
                        var label = ($(this).attr('label') !== undefined) ? $(this).attr('label') : $(this).html();

                        selected += label + ', ';
                  ***REMOVED***);
                    
                    return selected.substr(0, selected.length - 2) + ' <b class="caret"></b>';
              ***REMOVED***
          ***REMOVED***,
            /**
             * Updates the title of the button similar to the buttonText function.
             * 
             * @param {jQuery***REMOVED*** options
             * @param {jQuery***REMOVED*** select
             * @returns {@exp;selected@call;substr***REMOVED***
             */
            buttonTitle: function(options, select) {
                if (options.length === 0) {
                    return this.nonSelectedText;
              ***REMOVED***
                else {
                    var selected = '';
                    options.each(function () {
                        selected += $(this).text() + ', ';
                  ***REMOVED***);
                    return selected.substr(0, selected.length - 2);
              ***REMOVED***
          ***REMOVED***,
            /**
             * Create a label.
             * 
             * @param {jQuery***REMOVED*** element
             * @returns {String***REMOVED***
             */
            label: function(element){
                return $(element).attr('label') || $(element).html();
          ***REMOVED***,
            /**
             * Triggered on change of the multiselect.
             * 
             * Not triggered when selecting/deselecting options manually.
             * 
             * @param {jQuery***REMOVED*** option
             * @param {Boolean***REMOVED*** checked
             */
            onChange : function(option, checked) {

          ***REMOVED***,
            /**
             * Triggered when the dropdown is shown.
             * 
             * @param {jQuery***REMOVED*** event
             */
            onDropdownShow: function(event) {
                
          ***REMOVED***,
            /**
             * Triggered when the dropdown is hidden.
             * 
             * @param {jQuery***REMOVED*** event
             */
            onDropdownHide: function(event) {
                
          ***REMOVED***,
            /**
             * Triggered after the dropdown is shown.
             * 
             * @param {jQuery***REMOVED*** event
             */
            onDropdownShown: function(event) {
                
          ***REMOVED***,
            /**
             * Triggered after the dropdown is hidden.
             * 
             * @param {jQuery***REMOVED*** event
             */
            onDropdownHidden: function(event) {
                
          ***REMOVED***,
            buttonClass: 'btn btn-default',
            buttonWidth: 'auto',
            buttonContainer: '<div class="btn-group" />',
            dropRight: false,
            selectedClass: 'active',
            // Maximum height of the dropdown menu.
            // If maximum height is exceeded a scrollbar will be displayed.
            maxHeight: false,
            checkboxName: false,
            includeSelectAllOption: false,
            includeSelectAllIfMoreThan: 0,
            selectAllText: ' Select all',
            selectAllValue: 'multiselect-all',
            selectAllName: false,
            enableFiltering: false,
            enableCaseInsensitiveFiltering: false,
            enableClickableOptGroups: false,
            filterPlaceholder: 'Search',
            // possible options: 'text', 'value', 'both'
            filterBehavior: 'text',
            includeFilterClearBtn: true,
            preventInputChangeEvent: false,
            nonSelectedText: 'None selected',
            nSelectedText: 'selected',
            allSelectedText: 'All selected',
            numberDisplayed: 3,
            disableIfEmpty: false,
            templates: {
                button: '<button type="button" class="multiselect dropdown-toggle" data-toggle="dropdown"></button>',
                ul: '<ul class="multiselect-container dropdown-menu"></ul>',
                filter: '<li class="multiselect-item filter"><div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-search"></i></span><input class="form-control multiselect-search" type="text"></div></li>',
                filterClearBtn: '<span class="input-group-btn"><button class="btn btn-default multiselect-clear-filter" type="button"><i class="glyphicon glyphicon-remove-circle"></i></button></span>',
                li: '<li><a href="javascript:void(0);"><label></label></a></li>',
                divider: '<li class="multiselect-item divider"></li>',
                liGroup: '<li class="multiselect-item multiselect-group"><label></label></li>'
          ***REMOVED***
      ***REMOVED***,

        constructor: Multiselect,

        /**
         * Builds the container of the multiselect.
         */
        buildContainer: function() {
            this.$container = $(this.options.buttonContainer);
            this.$container.on('show.bs.dropdown', this.options.onDropdownShow);
            this.$container.on('hide.bs.dropdown', this.options.onDropdownHide);
            this.$container.on('shown.bs.dropdown', this.options.onDropdownShown);
            this.$container.on('hidden.bs.dropdown', this.options.onDropdownHidden);
      ***REMOVED***,

        /**
         * Builds the button of the multiselect.
         */
        buildButton: function() {
            this.$button = $(this.options.templates.button).addClass(this.options.buttonClass);

            // Adopt active state.
            if (this.$select.prop('disabled')) {
                this.disable();
          ***REMOVED***
            else {
                this.enable();
          ***REMOVED***

            // Manually add button width if set.
            if (this.options.buttonWidth && this.options.buttonWidth !== 'auto') {
                this.$button.css({
                    'width' : this.options.buttonWidth
              ***REMOVED***);
                this.$container.css({
                    'width': this.options.buttonWidth
              ***REMOVED***);
          ***REMOVED***

            // Keep the tab index from the select.
            var tabindex = this.$select.attr('tabindex');
            if (tabindex) {
                this.$button.attr('tabindex', tabindex);
          ***REMOVED***

            this.$container.prepend(this.$button);
      ***REMOVED***,

        /**
         * Builds the ul representing the dropdown menu.
         */
        buildDropdown: function() {

            // Build ul.
            this.$ul = $(this.options.templates.ul);

            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
          ***REMOVED***

            // Set max height of dropdown menu to activate auto scrollbar.
            if (this.options.maxHeight) {
                // TODO: Add a class for this option to move the css declarations.
                this.$ul.css({
                    'max-height': this.options.maxHeight + 'px',
                    'overflow-y': 'auto',
                    'overflow-x': 'hidden'
              ***REMOVED***);
          ***REMOVED***

            this.$container.append(this.$ul);
      ***REMOVED***,

        /**
         * Build the dropdown options and binds all nessecary events.
         * 
         * Uses createDivider and createOptionValue to create the necessary options.
         */
        buildDropdownOptions: function() {

            this.$select.children().each($.proxy(function(index, element) {

                var $element = $(element);
                // Support optgroups and options without a group simultaneously.
                var tag = $element.prop('tagName')
                    .toLowerCase();
            
                if ($element.prop('value') === this.options.selectAllValue) {
                    return;
              ***REMOVED***

                if (tag === 'optgroup') {
                    this.createOptgroup(element);
              ***REMOVED***
                else if (tag === 'option') {

                    if ($element.data('role') === 'divider') {
                        this.createDivider();
                  ***REMOVED***
                    else {
                        this.createOptionValue(element);
                  ***REMOVED***

              ***REMOVED***
                
                // Other illegal tags will be ignored.
          ***REMOVED***, this));

            // Bind the change event on the dropdown elements.
            $('li input', this.$ul).on('change', $.proxy(function(event) {
                var $target = $(event.target);

                var checked = $target.prop('checked') || false;
                var isSelectAllOption = $target.val() === this.options.selectAllValue;

                // Apply or unapply the configured selected class.
                if (this.options.selectedClass) {
                    if (checked) {
                        $target.closest('li')
                            .addClass(this.options.selectedClass);
                  ***REMOVED***
                    else {
                        $target.closest('li')
                            .removeClass(this.options.selectedClass);
                  ***REMOVED***
              ***REMOVED***

                // Get the corresponding option.
                var value = $target.val();
                var $option = this.getOptionByValue(value);

                var $optionsNotThis = $('option', this.$select).not($option);
                var $checkboxesNotThis = $('input', this.$container).not($target);

                if (isSelectAllOption) {
                    if (checked) {
                        this.selectAll();
                  ***REMOVED***
                    else {
                        this.deselectAll();
                  ***REMOVED***
              ***REMOVED***

                if(!isSelectAllOption){
                    if (checked) {
                        $option.prop('selected', true);

                        if (this.options.multiple) {
                            // Simply select additional option.
                            $option.prop('selected', true);
                      ***REMOVED***
                        else {
                            // Unselect all other options and corresponding checkboxes.
                            if (this.options.selectedClass) {
                                $($checkboxesNotThis).closest('li').removeClass(this.options.selectedClass);
                          ***REMOVED***

                            $($checkboxesNotThis).prop('checked', false);
                            $optionsNotThis.prop('selected', false);

                            // It's a single selection, so close.
                            this.$button.click();
                      ***REMOVED***

                        if (this.options.selectedClass === "active") {
                            $optionsNotThis.closest("a").css("outline", "");
                      ***REMOVED***
                  ***REMOVED***
                    else {
                        // Unselect option.
                        $option.prop('selected', false);
                  ***REMOVED***
              ***REMOVED***

                this.$select.change();

                this.updateButtonText();
                this.updateSelectAll();
                
                this.options.onChange($option, checked);

                if(this.options.preventInputChangeEvent) {
                    return false;
              ***REMOVED***
          ***REMOVED***, this));

            $('li a', this.$ul).on('touchstart click', function(event) {
                event.stopPropagation();

                var $target = $(event.target);

                if (document.getSelection().type === 'Range') {
                  var $input = $(this).find("input:first");

                  $input.prop("checked", !$input.prop("checked"))
                      .trigger("change");
              ***REMOVED***

                if (event.shiftKey) {
                    var checked = $target.prop('checked') || false;

                    if (checked) {
                        var prev = $target.closest('li')
                            .siblings('li[class="active"]:first');

                        var currentIdx = $target.closest('li')
                            .index();
                        var prevIdx = prev.index();

                        if (currentIdx > prevIdx) {
                            $target.closest("li").prevUntil(prev).each(
                                function() {
                                    $(this).find("input:first").prop("checked", true)
                                        .trigger("change");
                              ***REMOVED***
                            );
                      ***REMOVED***
                        else {
                            $target.closest("li").nextUntil(prev).each(
                                function() {
                                    $(this).find("input:first").prop("checked", true)
                                        .trigger("change");
                              ***REMOVED***
                            );
                      ***REMOVED***
                  ***REMOVED***
              ***REMOVED***

                $target.blur();
          ***REMOVED***);

            // Keyboard support.
            this.$container.off('keydown.multiselect').on('keydown.multiselect', $.proxy(function(event) {
                if ($('input[type="text"]', this.$container).is(':focus')) {
                    return;
              ***REMOVED***

                if (event.keyCode === 9 && this.$container.hasClass('open')) {
                    this.$button.click();
              ***REMOVED***
                else {
                    var $items = $(this.$container).find("li:not(.divider):not(.disabled) a").filter(":visible");

                    if (!$items.length) {
                        return;
                  ***REMOVED***

                    var index = $items.index($items.filter(':focus'));

                    // Navigation up.
                    if (event.keyCode === 38 && index > 0) {
                        index--;
                  ***REMOVED***
                    // Navigate down.
                    else if (event.keyCode === 40 && index < $items.length - 1) {
                        index++;
                  ***REMOVED***
                    else if (!~index) {
                        index = 0;
                  ***REMOVED***

                    var $current = $items.eq(index);
                    $current.focus();

                    if (event.keyCode === 32 || event.keyCode === 13) {
                        var $checkbox = $current.find('input');

                        $checkbox.prop("checked", !$checkbox.prop("checked"));
                        $checkbox.change();
                  ***REMOVED***

                    event.stopPropagation();
                    event.preventDefault();
              ***REMOVED***
          ***REMOVED***, this));

            if(this.options.enableClickableOptGroups && this.options.multiple) {
                $('li.multiselect-group', this.$ul).on('click', $.proxy(function(event) {
                    event.stopPropagation();

                    var group = $(event.target).parent();

                    // Search all option in optgroup
                    var $options = group.nextUntil('li.multiselect-group');

                    // check or uncheck items
                    var allChecked = true;
                    var optionInputs = $options.find('input');
                    optionInputs.each(function() {
                        allChecked = allChecked && $(this).prop('checked');
                  ***REMOVED***);

                    optionInputs.prop('checked', !allChecked).trigger('change');
             ***REMOVED***, this));
          ***REMOVED***
      ***REMOVED***,

        /**
         * Create an option using the given select option.
         * 
         * @param {jQuery***REMOVED*** element
         */
        createOptionValue: function(element) {
            var $element = $(element);
            if ($element.is(':selected')) {
                $element.prop('selected', true);
          ***REMOVED***

            // Support the label attribute on options.
            var label = this.options.label(element);
            var value = $element.val();
            var inputType = this.options.multiple ? "checkbox" : "radio";

            var $li = $(this.options.templates.li);
            var $label = $('label', $li);
            $label.addClass(inputType);

            var $checkbox = $('<input/>').attr('type', inputType);

            if (this.options.checkboxName) {
                $checkbox.attr('name', this.options.checkboxName);
          ***REMOVED***
            $label.append($checkbox);

            var selected = $element.prop('selected') || false;
            $checkbox.val(value);

            if (value === this.options.selectAllValue) {
                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');
          ***REMOVED***

            $label.append(" " + label);
            $label.attr('title', $element.attr('title'));

            this.$ul.append($li);

            if ($element.is(':disabled')) {
                $checkbox.attr('disabled', 'disabled')
                    .prop('disabled', true)
                    .closest('a')
                    .attr("tabindex", "-1")
                    .closest('li')
                    .addClass('disabled');
          ***REMOVED***

            $checkbox.prop('checked', selected);

            if (selected && this.options.selectedClass) {
                $checkbox.closest('li')
                    .addClass(this.options.selectedClass);
          ***REMOVED***
      ***REMOVED***,

        /**
         * Creates a divider using the given select option.
         * 
         * @param {jQuery***REMOVED*** element
         */
        createDivider: function(element) {
            var $divider = $(this.options.templates.divider);
            this.$ul.append($divider);
      ***REMOVED***,

        /**
         * Creates an optgroup.
         * 
         * @param {jQuery***REMOVED*** group
         */
        createOptgroup: function(group) {
            var groupName = $(group).prop('label');

            // Add a header for the group.
            var $li = $(this.options.templates.liGroup);
            $('label', $li).text(groupName);

            if (this.options.enableClickableOptGroups) {
                $li.addClass('multiselect-group-clickable');
          ***REMOVED***

            this.$ul.append($li);

            if ($(group).is(':disabled')) {
                $li.addClass('disabled');
          ***REMOVED***

            // Add the options of the group.
            $('option', group).each($.proxy(function(index, element) {
                this.createOptionValue(element);
          ***REMOVED***, this));
      ***REMOVED***,

        /**
         * Build the selct all.
         * 
         * Checks if a select all has already been created.
         */
        buildSelectAll: function() {
            if (typeof this.options.selectAllValue === 'number') {
                this.options.selectAllValue = this.options.selectAllValue.toString();
          ***REMOVED***
            
            var alreadyHasSelectAll = this.hasSelectAll();
            
            if (!alreadyHasSelectAll && this.options.includeSelectAllOption && this.options.multiple
                    && $('option', this.$select).length > this.options.includeSelectAllIfMoreThan) {
                
                // Check whether to add a divider after the select all.
                if (this.options.includeSelectAllDivider) {
                    this.$ul.prepend($(this.options.templates.divider));
              ***REMOVED***

                var $li = $(this.options.templates.li);
                $('label', $li).addClass("checkbox");
                
                if (this.options.selectAllName) {
                    $('label', $li).append('<input type="checkbox" name="' + this.options.selectAllName + '" />');
              ***REMOVED***
                else {
                    $('label', $li).append('<input type="checkbox" />');
              ***REMOVED***
                
                var $checkbox = $('input', $li);
                $checkbox.val(this.options.selectAllValue);

                $li.addClass("multiselect-item multiselect-all");
                $checkbox.parent().parent()
                    .addClass('multiselect-all');

                $('label', $li).append(" " + this.options.selectAllText);

                this.$ul.prepend($li);

                $checkbox.prop('checked', false);
          ***REMOVED***
      ***REMOVED***,

        /**
         * Builds the filter.
         */
        buildFilter: function() {

            // Build filter if filtering OR case insensitive filtering is enabled and the number of options exceeds (or equals) enableFilterLength.
            if (this.options.enableFiltering || this.options.enableCaseInsensitiveFiltering) {
                var enableFilterLength = Math.max(this.options.enableFiltering, this.options.enableCaseInsensitiveFiltering);

                if (this.$select.find('option').length >= enableFilterLength) {

                    this.$filter = $(this.options.templates.filter);
                    $('input', this.$filter).attr('placeholder', this.options.filterPlaceholder);
                    
                    // Adds optional filter clear button
                    if(this.options.includeFilterClearBtn){
                        var clearBtn = $(this.options.templates.filterClearBtn);
                        clearBtn.on('click', $.proxy(function(event){
                            clearTimeout(this.searchTimeout);
                            this.$filter.find('.multiselect-search').val('');
                            $('li', this.$ul).show().removeClass("filter-hidden");
                            this.updateSelectAll();
                      ***REMOVED***, this));
                        this.$filter.find('.input-group').append(clearBtn);
                  ***REMOVED***
                    
                    this.$ul.prepend(this.$filter);

                    this.$filter.val(this.query).on('click', function(event) {
                        event.stopPropagation();
                  ***REMOVED***).on('input keydown', $.proxy(function(event) {
                        // Cancel enter key default behaviour
                        if (event.which === 13) {
                          event.preventDefault();
                      ***REMOVED***
                        
                        // This is useful to catch "keydown" events after the browser has updated the control.
                        clearTimeout(this.searchTimeout);

                        this.searchTimeout = this.asyncFunction($.proxy(function() {

                            if (this.query !== event.target.value) {
                                this.query = event.target.value;

                                var currentGroup, currentGroupVisible;
                                $.each($('li', this.$ul), $.proxy(function(index, element) {
                                    var value = $('input', element).val();
                                    var text = $('label', element).text();

                                    var filterCandidate = '';
                                    if ((this.options.filterBehavior === 'text')) {
                                        filterCandidate = text;
                                  ***REMOVED***
                                    else if ((this.options.filterBehavior === 'value')) {
                                        filterCandidate = value;
                                  ***REMOVED***
                                    else if (this.options.filterBehavior === 'both') {
                                        filterCandidate = text + '\n' + value;
                                  ***REMOVED***

                                    if (value !== this.options.selectAllValue && text) {
                                        // By default lets assume that element is not
                                        // interesting for this search.
                                        var showElement = false;

                                        if (this.options.enableCaseInsensitiveFiltering && filterCandidate.toLowerCase().indexOf(this.query.toLowerCase()) > -1) {
                                            showElement = true;
                                      ***REMOVED***
                                        else if (filterCandidate.indexOf(this.query) > -1) {
                                            showElement = true;
                                      ***REMOVED***

                                        // Toggle current element (group or group item) according to showElement boolean.
                                        $(element).toggle(showElement).toggleClass('filter-hidden', !showElement);
                                        
                                        // Differentiate groups and group items.
                                        if ($(element).hasClass('multiselect-group')) {
                                            // Remember group status.
                                            currentGroup = element;
                                            currentGroupVisible = showElement;
                                      ***REMOVED***
                                        else {
                                            // Show group name when at least one of its items is visible.
                                            if (showElement) {
                                                $(currentGroup).show().removeClass('filter-hidden');
                                          ***REMOVED***
                                            
                                            // Show all group items when group name satisfies filter.
                                            if (!showElement && currentGroupVisible) {
                                                $(element).show().removeClass('filter-hidden');
                                          ***REMOVED***
                                      ***REMOVED***
                                  ***REMOVED***
                              ***REMOVED***, this));
                          ***REMOVED***

                            this.updateSelectAll();
                      ***REMOVED***, this), 300, this);
                  ***REMOVED***, this));
              ***REMOVED***
          ***REMOVED***
      ***REMOVED***,

        /**
         * Unbinds the whole plugin.
         */
        destroy: function() {
            this.$container.remove();
            this.$select.show();
            this.$select.data('multiselect', null);
      ***REMOVED***,

        /**
         * Refreshs the multiselect based on the selected options of the select.
         */
        refresh: function() {
            $('option', this.$select).each($.proxy(function(index, element) {
                var $input = $('li input', this.$ul).filter(function() {
                    return $(this).val() === $(element).val();
              ***REMOVED***);

                if ($(element).is(':selected')) {
                    $input.prop('checked', true);

                    if (this.options.selectedClass) {
                        $input.closest('li')
                            .addClass(this.options.selectedClass);
                  ***REMOVED***
              ***REMOVED***
                else {
                    $input.prop('checked', false);

                    if (this.options.selectedClass) {
                        $input.closest('li')
                            .removeClass(this.options.selectedClass);
                  ***REMOVED***
              ***REMOVED***

                if ($(element).is(":disabled")) {
                    $input.attr('disabled', 'disabled')
                        .prop('disabled', true)
                        .closest('li')
                        .addClass('disabled');
              ***REMOVED***
                else {
                    $input.prop('disabled', false)
                        .closest('li')
                        .removeClass('disabled');
              ***REMOVED***
          ***REMOVED***, this));

            this.updateButtonText();
            this.updateSelectAll();
      ***REMOVED***,

        /**
         * Select all options of the given values.
         * 
         * If triggerOnChange is set to true, the on change event is triggered if
         * and only if one value is passed.
         * 
         * @param {Array***REMOVED*** selectValues
         * @param {Boolean***REMOVED*** triggerOnChange
         */
        select: function(selectValues, triggerOnChange) {
            if(!$.isArray(selectValues)) {
                selectValues = [selectValues];
          ***REMOVED***

            for (var i = 0; i < selectValues.length; i++) {
                var value = selectValues[i];

                if (value === null || value === undefined) {
                    continue;
              ***REMOVED***

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if($option === undefined || $checkbox === undefined) {
                    continue;
              ***REMOVED***
                
                if (!this.options.multiple) {
                    this.deselectAll(false);
              ***REMOVED***
                
                if (this.options.selectedClass) {
                    $checkbox.closest('li')
                        .addClass(this.options.selectedClass);
              ***REMOVED***

                $checkbox.prop('checked', true);
                $option.prop('selected', true);
          ***REMOVED***

            this.updateButtonText();
            this.updateSelectAll();

            if (triggerOnChange && selectValues.length === 1) {
                this.options.onChange($option, true);
          ***REMOVED***
      ***REMOVED***,

        /**
         * Clears all selected items.
         */
        clearSelection: function () {
            this.deselectAll(false);
            this.updateButtonText();
            this.updateSelectAll();
      ***REMOVED***,

        /**
         * Deselects all options of the given values.
         * 
         * If triggerOnChange is set to true, the on change event is triggered, if
         * and only if one value is passed.
         * 
         * @param {Array***REMOVED*** deselectValues
         * @param {Boolean***REMOVED*** triggerOnChange
         */
        deselect: function(deselectValues, triggerOnChange) {
            if(!$.isArray(deselectValues)) {
                deselectValues = [deselectValues];
          ***REMOVED***

            for (var i = 0; i < deselectValues.length; i++) {
                var value = deselectValues[i];

                if (value === null || value === undefined) {
                    continue;
              ***REMOVED***

                var $option = this.getOptionByValue(value);
                var $checkbox = this.getInputByValue(value);

                if($option === undefined || $checkbox === undefined) {
                    continue;
              ***REMOVED***

                if (this.options.selectedClass) {
                    $checkbox.closest('li')
                        .removeClass(this.options.selectedClass);
              ***REMOVED***

                $checkbox.prop('checked', false);
                $option.prop('selected', false);
          ***REMOVED***

            this.updateButtonText();
            this.updateSelectAll();
            
            if (triggerOnChange && deselectValues.length === 1) {
                this.options.onChange($option, false);
          ***REMOVED***
      ***REMOVED***,
        
        /**
         * Selects all enabled & visible options.
         *
         * If justVisible is true or not specified, only visible options are selected.
         *
         * @param {Boolean***REMOVED*** justVisible
         */
        selectAll: function (justVisible) {
            var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
            var allCheckboxes = $("li input[type='checkbox']:enabled", this.$ul);
            var visibleCheckboxes = allCheckboxes.filter(":visible");
            var allCheckboxesCount = allCheckboxes.length;
            var visibleCheckboxesCount = visibleCheckboxes.length;
            
            if(justVisible) {
                visibleCheckboxes.prop('checked', true);
                $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").addClass(this.options.selectedClass);
          ***REMOVED***
            else {
                allCheckboxes.prop('checked', true);
                $("li:not(.divider):not(.disabled)", this.$ul).addClass(this.options.selectedClass);
          ***REMOVED***
                
            if (allCheckboxesCount === visibleCheckboxesCount || justVisible === false) {
                $("option:enabled", this.$select).prop('selected', true);
          ***REMOVED***
            else {
                var values = visibleCheckboxes.map(function() {
                    return $(this).val();
              ***REMOVED***).get();
                
                $("option:enabled", this.$select).filter(function(index) {
                    return $.inArray($(this).val(), values) !== -1;
              ***REMOVED***).prop('selected', true);
          ***REMOVED***
      ***REMOVED***,

        /**
         * Deselects all options.
         * 
         * If justVisible is true or not specified, only visible options are deselected.
         * 
         * @param {Boolean***REMOVED*** justVisible
         */
        deselectAll: function (justVisible) {
            var justVisible = typeof justVisible === 'undefined' ? true : justVisible;
            
            if(justVisible) {              
                var visibleCheckboxes = $("li input[type='checkbox']:enabled", this.$ul).filter(":visible");
                visibleCheckboxes.prop('checked', false);
                
                var values = visibleCheckboxes.map(function() {
                    return $(this).val();
              ***REMOVED***).get();
                
                $("option:enabled", this.$select).filter(function(index) {
                    return $.inArray($(this).val(), values) !== -1;
              ***REMOVED***).prop('selected', false);
                
                if (this.options.selectedClass) {
                    $("li:not(.divider):not(.disabled)", this.$ul).filter(":visible").removeClass(this.options.selectedClass);
              ***REMOVED***
          ***REMOVED***
            else {
                $("li input[type='checkbox']:enabled", this.$ul).prop('checked', false);
                $("option:enabled", this.$select).prop('selected', false);
                
                if (this.options.selectedClass) {
                    $("li:not(.divider):not(.disabled)", this.$ul).removeClass(this.options.selectedClass);
              ***REMOVED***
          ***REMOVED***
      ***REMOVED***,

        /**
         * Rebuild the plugin.
         * 
         * Rebuilds the dropdown, the filter and the select all option.
         */
        rebuild: function() {
            this.$ul.html('');

            // Important to distinguish between radios and checkboxes.
            this.options.multiple = this.$select.attr('multiple') === "multiple";

            this.buildSelectAll();
            this.buildDropdownOptions();
            this.buildFilter();
            
            this.updateButtonText();
            this.updateSelectAll();
            
            if (this.options.disableIfEmpty && $('option', this.$select).length <= 0) {
                this.disable();
          ***REMOVED***
            
            if (this.options.dropRight) {
                this.$ul.addClass('pull-right');
          ***REMOVED***
      ***REMOVED***,

        /**
         * The provided data will be used to build the dropdown.
         */
        dataprovider: function(dataprovider) {
            var optionDOM = "";
            var groupCounter = 0;
            var tags = $(''); // create empty jQuery array

            $.each(dataprovider, function (index, option) {
                var tag;
                if ($.isArray(option.children)) { // create optiongroup tag
                    groupCounter++;
                    tag = $('<optgroup/>').attr({
                        label: option.label || 'Group ' + groupCounter
                  ***REMOVED***);
                    forEach(option.children, function(subOption) { // add children option tags
                        tag.append($('<option/>').attr({
                            value: subOption.value,
                            label: subOption.label || subOption.value,
                            title: subOption.title,
                            selected: !!subOption.selected
                      ***REMOVED***));
                  ***REMOVED***);

                    optionDOM += '</optgroup>';
              ***REMOVED***
                else { // create option tag
                    tag = $('<option/>').attr({
                        value: option.value,
                        label: option.label || option.value,
                        title: option.title,
                        selected: !!option.selected
                  ***REMOVED***);
              ***REMOVED***

                tags = tags.add(tag);
          ***REMOVED***);
            
            this.$select.empty().append(tags);
            this.rebuild();
      ***REMOVED***,

        /**
         * Enable the multiselect.
         */
        enable: function() {
            this.$select.prop('disabled', false);
            this.$button.prop('disabled', false)
                .removeClass('disabled');
      ***REMOVED***,

        /**
         * Disable the multiselect.
         */
        disable: function() {
            this.$select.prop('disabled', true);
            this.$button.prop('disabled', true)
                .addClass('disabled');
      ***REMOVED***,

        /**
         * Set the options.
         * 
         * @param {Array***REMOVED*** options
         */
        setOptions: function(options) {
            this.options = this.mergeOptions(options);
      ***REMOVED***,

        /**
         * Merges the given options with the default options.
         * 
         * @param {Array***REMOVED*** options
         * @returns {Array***REMOVED***
         */
        mergeOptions: function(options) {
            return $.extend(true, {***REMOVED***, this.defaults, options);
      ***REMOVED***,
        
        /**
         * Checks whether a select all checkbox is present.
         * 
         * @returns {Boolean***REMOVED***
         */
        hasSelectAll: function() {
            return $('li.' + this.options.selectAllValue, this.$ul).length > 0;
      ***REMOVED***,
        
        /**
         * Updates the select all checkbox based on the currently displayed and selected checkboxes.
         */
        updateSelectAll: function() {
            if (this.hasSelectAll()) {
                var allBoxes = $("li:not(.multiselect-item):not(.filter-hidden) input:enabled", this.$ul);
                var allBoxesLength = allBoxes.length;
                var checkedBoxesLength = allBoxes.filter(":checked").length;
                var selectAllLi  = $("li." + this.options.selectAllValue, this.$ul);
                var selectAllInput = selectAllLi.find("input");
                
                if (checkedBoxesLength > 0 && checkedBoxesLength === allBoxesLength) {
                    selectAllInput.prop("checked", true);
                    selectAllLi.addClass(this.options.selectedClass);
              ***REMOVED***
                else {
                    selectAllInput.prop("checked", false);
                    selectAllLi.removeClass(this.options.selectedClass);
              ***REMOVED***
          ***REMOVED***
      ***REMOVED***,
        
        /**
         * Update the button text and its title based on the currently selected options.
         */
        updateButtonText: function() {
            var options = this.getSelected();
            
            // First update the displayed button text.
            $('.multiselect', this.$container).html(this.options.buttonText(options, this.$select));
            
            // Now update the title attribute of the button.
            $('.multiselect', this.$container).attr('title', this.options.buttonTitle(options, this.$select));
      ***REMOVED***,

        /**
         * Get all selected options.
         * 
         * @returns {jQUery***REMOVED***
         */
        getSelected: function() {
            return $('option', this.$select).filter(":selected");
      ***REMOVED***,

        /**
         * Gets a select option by its value.
         * 
         * @param {String***REMOVED*** value
         * @returns {jQuery***REMOVED***
         */
        getOptionByValue: function (value) {

            var options = $('option', this.$select);
            var valueToCompare = value.toString();

            for (var i = 0; i < options.length; i = i + 1) {
                var option = options[i];
                if (option.value === valueToCompare) {
                    return $(option);
              ***REMOVED***
          ***REMOVED***
      ***REMOVED***,

        /**
         * Get the input (radio/checkbox) by its value.
         * 
         * @param {String***REMOVED*** value
         * @returns {jQuery***REMOVED***
         */
        getInputByValue: function (value) {

            var checkboxes = $('li input', this.$ul);
            var valueToCompare = value.toString();

            for (var i = 0; i < checkboxes.length; i = i + 1) {
                var checkbox = checkboxes[i];
                if (checkbox.value === valueToCompare) {
                    return $(checkbox);
              ***REMOVED***
          ***REMOVED***
      ***REMOVED***,

        /**
         * Used for knockout integration.
         */
        updateOriginalOptions: function() {
            this.originalOptions = this.$select.clone()[0].options;
      ***REMOVED***,

        asyncFunction: function(callback, timeout, self) {
            var args = Array.prototype.slice.call(arguments, 3);
            return setTimeout(function() {
                callback.apply(self || window, args);
          ***REMOVED***, timeout);
      ***REMOVED***
  ***REMOVED***;

    $.fn.multiselect = function(option, parameter, extraOptions) {
        return this.each(function() {
            var data = $(this).data('multiselect');
            var options = typeof option === 'object' && option;
            
            // Initialize the multiselect.
            if (!data) {
                data = new Multiselect(this, options);
                $(this).data('multiselect', data);
          ***REMOVED***

            // Call multiselect method.
            if (typeof option === 'string') {
                data[option](parameter, extraOptions);
                
                if (option === 'destroy') {
                    $(this).data('multiselect', false);
              ***REMOVED***
          ***REMOVED***
      ***REMOVED***);
  ***REMOVED***;

    $.fn.multiselect.Constructor = Multiselect;

    $(function() {
        $("select[data-role=multiselect]").multiselect();
  ***REMOVED***);

***REMOVED***(window.jQuery);