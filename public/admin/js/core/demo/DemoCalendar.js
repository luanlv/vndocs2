(function (namespace, $) {
	"use strict";

	var DemoCalendar = function () {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function () {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = DemoCalendar.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function () {
		this._enableEvents();

		this._initEventslist();
		this._initCalendar();
		this._displayDate();
	***REMOVED***;

	// =========================================================================
	// EVENTS
	// =========================================================================

	// events
	p._enableEvents = function () {
		var o = this;

		$('#calender-prev').on('click', function (e) {
			o._handleCalendarPrevClick(e);
		***REMOVED***);
		$('#calender-next').on('click', function (e) {
			o._handleCalendarNextClick(e);
		***REMOVED***);
		$('.nav-tabs li').on('show.bs.tab', function (e) {
			o._handleCalendarMode(e);
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// CONTROLBAR
	// =========================================================================

	p._handleCalendarPrevClick = function (e) {
		$('#calendar').fullCalendar('prev');
		this._displayDate();
	***REMOVED***;
	p._handleCalendarNextClick = function (e) {
		$('#calendar').fullCalendar('next');
		this._displayDate();
	***REMOVED***;
	p._handleCalendarMode = function (e) {
		$('#calendar').fullCalendar('changeView', $(e.currentTarget).data('mode'));
	***REMOVED***;

	p._displayDate = function () {
		var selectedDate = $('#calendar').fullCalendar('getDate');
		$('.selected-day').html(moment(selectedDate).format("dddd"));
		$('.selected-date').html(moment(selectedDate).format("DD MMMM YYYY"));
		$('.selected-year').html(moment(selectedDate).format("YYYY"));
	***REMOVED***;

	// =========================================================================
	// TASKLIST
	// =========================================================================

	p._initEventslist = function () {
		if (!$.isFunction($.fn.draggable)) {
			return;
		***REMOVED***
		var o = this;

		$('.list-events li ').each(function () {
			// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
			// it doesn't need to have a start or end
			var eventObject = {
				title: $.trim($(this).text()), // use the element's text as the event title
				className: $.trim($(this).data('className'))
			***REMOVED***;

			// store the Event Object in the DOM element so we can get to it later
			$(this).data('eventObject', eventObject);

			// make the event draggable using jQuery UI
			$(this).draggable({
				zIndex: 999,
				revert: true, // will cause the event to go back to its
				revertDuration: 0, //  original position after the drag
			***REMOVED***);
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// CALENDAR
	// =========================================================================

	p._initCalendar = function (e) {
		if (!$.isFunction($.fn.fullCalendar)) {
			return;
		***REMOVED***

		var date = new Date();
		var d = date.getDate();
		var m = date.getMonth();
		var y = date.getFullYear();

		$('#calendar').fullCalendar({
			height: 700,
			header: false,
			editable: true,
			droppable: true,
			drop: function (date, allDay) { // this function is called when something is dropped
				// retrieve the dropped element's stored Event Object
				var originalEventObject = $(this).data('eventObject');

				// we need to copy it, so that multiple events don't have a reference to the same object
				var copiedEventObject = $.extend({***REMOVED***, originalEventObject);

				// assign it the date that was reported
				copiedEventObject.start = date;
				copiedEventObject.allDay = allDay;
				copiedEventObject.className = originalEventObject.className;
				
				// render the event on the calendar
				// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
				$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

				// is the "remove after drop" checkbox checked?
				if ($('#drop-remove').is(':checked')) {
					// if so, remove the element from the "Draggable Events" list
					$(this).remove();
				***REMOVED***
			***REMOVED***,
			events: [
				{
					title: 'Birthday Party',
					start: new Date(y, m, d + 1, 19, 0),
					end: new Date(y, m, d + 1, 22, 30),
					allDay: false
				***REMOVED***
			],
			eventRender: function (event, element) {
				element.find('#date-title').html(element.find('span.fc-event-title').text());
			***REMOVED***
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	namespace.DemoCalendar = new DemoCalendar;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
