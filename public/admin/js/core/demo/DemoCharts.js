(function (namespace, $) {
	"use strict";

	var DemoCharts = function () {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function () {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = DemoCharts.prototype;

	// =========================================================================
	// MEMBERS
	// =========================================================================

	p.rickshawSeries = [[], []];
	p.rickshawGraph = null;
	p.rickshawRandomData = null;
	p.rickshawTimer = null;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function () {
		// Rickshaw
		this._initRickshaw();
		this._initRickshawDemo2();
		
		// Sparkline
		this._initResponsiveSparkline();
		this._initInlineSparkline();

		// Knob
		this._initKnob();

		// Flot
		this._initFlotLine();
		this._initFlotRealtime();

		// Morris
		this._initMorris();
	***REMOVED***;

	// =========================================================================
	// Rickshaw
	// =========================================================================

	p._initRickshaw = function () {
		// Don't init a rickshaw graph twice
		if (this.rickshawGraph !== null) {
			return;
		***REMOVED***

		var o = this;

		// Create random data
		this.rickshawRandomData = new Rickshaw.Fixtures.RandomData(50);
		for (var i = 0; i < 75; i++) {
			this.rickshawRandomData.addData(this.rickshawSeries);
		***REMOVED***

		// Init Richshaw graph
		this.rickshawGraph = new Rickshaw.Graph({
			element: $('#rickshawGraph').get(0),
			width: $('#rickshawGraph').closest('.card-body').width(),
			height: $('#rickshawGraph').height(),
			interpolation: 'linear',
			renderer: 'area',
			series: [
				{
					data: this.rickshawSeries[0],
					color: $('#rickshawGraph').data('color1'),
					name: 'temperature'
				***REMOVED***, {
					data: this.rickshawSeries[1],
					color: $('#rickshawGraph').data('color2'),
					name: 'heat index'
				***REMOVED***
			]
		***REMOVED***);

		// Add hover info
		var hoverDetail = new Rickshaw.Graph.HoverDetail({
			graph: this.rickshawGraph
		***REMOVED***);

		// Render graph
		this.rickshawGraph.render();

		// Add animated data
		clearInterval(this.rickshawTimer);
		this.rickshawTimer = setInterval(function () {
			o._refreshRickshaw();
		***REMOVED***, 2000);

		materialadmin.App.callOnResize(function () {
			o.rickshawGraph.configure({
				height: $('#rickshawGraph').height(),
				width: $('#rickshawGraph').closest('.card-body').width()
			***REMOVED***);
			o.rickshawGraph.render();
		***REMOVED***);
	***REMOVED***;

	p._refreshRickshaw = function () {
		this.rickshawRandomData.removeData(this.rickshawSeries);
		this.rickshawRandomData.addData(this.rickshawSeries);
		this.rickshawGraph.update();
	***REMOVED***;

	// =========================================================================
	// Rickshaw - demo 2
	// =========================================================================

	p._initRickshawDemo2 = function () {
		var seriesData = [[], [], [], [], []];
		var random = new Rickshaw.Fixtures.RandomData(50);
		for (var i = 0; i < 75; i++) {
			random.addData(seriesData);
		***REMOVED***
		var graph = new Rickshaw.Graph({
			element: $('#rickshawDemo2').get(0),
			renderer: 'multi',
			width: $('#rickshawDemo2').width(),
			height: 300,
			dotSize: 5,
			series: [
				{
					name: 'temperature',
					data: seriesData.shift(),
					color: 'rgba(255, 0, 0, 0.4)',
					renderer: 'stack'
				***REMOVED***, {
					name: 'heat index',
					data: seriesData.shift(),
					color: 'rgba(255, 127, 0, 0.4)',
					renderer: 'stack'
				***REMOVED***, {
					name: 'dewpoint',
					data: seriesData.shift(),
					color: 'rgba(127, 0, 0, 0.3)',
					renderer: 'scatterplot'
				***REMOVED***, {
					name: 'pop',
					data: seriesData.shift().map(function (d) {
						return {x: d.x, y: d.y / 4***REMOVED***
					***REMOVED***),
					color: 'rgba(0, 0, 127, 0.4)',
					renderer: 'bar'
				***REMOVED***, {
					name: 'humidity',
					data: seriesData.shift().map(function (d) {
						return {x: d.x, y: d.y * 1.5***REMOVED***
					***REMOVED***),
					renderer: 'line',
					color: 'rgba(0, 0, 127, 0.25)'
				***REMOVED***
			]
		***REMOVED***);
		var slider = new Rickshaw.Graph.RangeSlider.Preview({
			graph: graph,
			element: document.querySelector('#slider')
		***REMOVED***);
		graph.render();
		var detail = new Rickshaw.Graph.HoverDetail({
			graph: graph
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// SPARKLINE
	// =========================================================================

	p._initResponsiveSparkline = function () {
		if ($('.sparkline3').length === 0) {
			return;
		***REMOVED***
		if ($('.sparkline4').length === 0) {
			return;
		***REMOVED***

		materialadmin.App.callOnResize(function () {
			var options = $('.sparkline3').data();
			options.type = 'line';
			options.width = '100%';
			options.height = '80px';
			$('.sparkline3').sparkline([3, 6, 5, 10, 8, 7, 9, 11, 12, 9, 14], options);
		***REMOVED***);
		materialadmin.App.callOnResize(function () {
			var options = $('.sparkline4').data();
			options.type = 'line';
			options.width = '100%';
			options.height = '80px';
			$('.sparkline4').sparkline([14, 11, 13, 9, 11, 12, 10, 8, 7, 9, 3], options);
		***REMOVED***);
	***REMOVED***;

	p._initInlineSparkline = function () {
		if (!$.isFunction($.fn.sparkline)) {
			return;
		***REMOVED***

		$('.inlinesparkline').each(function () {
			var options = $(this).data();
			$(this).sparkline('html', options);
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// KNOB
	// =========================================================================

	p._initKnob = function () {
		if (!$.isFunction($.fn.knob)) {
			return;
		***REMOVED***

		$('.dial').each(function () {
			var options = materialadmin.App.getKnobStyle($(this));
			$(this).knob(options);
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// FLOT - line
	// =========================================================================

	p._initFlotLine = function () {
		var chart = $("#visitor-chart");
		if (!$.isFunction($.fn.plot) || chart.length === 0) {
			return;
		***REMOVED***

		var o = this;
		var labelColor = chart.css('color');
		var data = [
			{
				label: 'Pageviews',
				data: [
					[moment().subtract(11, 'month').valueOf(), 1100],
					[moment().subtract(10, 'month').valueOf(), 2450],
					[moment().subtract(9, 'month').valueOf(), 3800],
					[moment().subtract(8, 'month').valueOf(), 3400],
					[moment().subtract(7, 'month').valueOf(), 3000],
					[moment().subtract(6, 'month').valueOf(), 5250],
					[moment().subtract(5, 'month').valueOf(), 7500],
					[moment().subtract(4, 'month').valueOf(), 5500],
					[moment().subtract(3, 'month').valueOf(), 3500],
					[moment().subtract(2, 'month').valueOf(), 4000],
					[moment().subtract(1, 'month').valueOf(), 4500],
					[moment().valueOf(), 3000]
				],
				last: true
			***REMOVED***,
			{
				label: 'Visitors',
				data: [
					[moment().subtract(11, 'month').valueOf(), 100],
					[moment().subtract(10, 'month').valueOf(), 450],
					[moment().subtract(9, 'month').valueOf(), 800],
					[moment().subtract(8, 'month').valueOf(), 400],
					[moment().subtract(7, 'month').valueOf(), 2100],
					[moment().subtract(6, 'month').valueOf(), 2440],
					[moment().subtract(5, 'month').valueOf(), 3500],
					[moment().subtract(4, 'month').valueOf(), 2800],
					[moment().subtract(3, 'month').valueOf(), 2500],
					[moment().subtract(2, 'month').valueOf(), 1000],
					[moment().subtract(1, 'month').valueOf(), 500],
					[moment().valueOf(), 1000]
				],
				last: true
			***REMOVED***
		];

		var options = {
			colors: chart.data('color').split(','),
			series: {
				shadowSize: 0,
				lines: {
					show: true,
					lineWidth: 2
				***REMOVED***,
				points: {
					show: true,
					radius: 3,
					lineWidth: 2
				***REMOVED***
			***REMOVED***,
			legend: {
				show: false
			***REMOVED***,
			xaxis: {
				mode: "time",
				timeformat: "%b",
				color: 'rgba(0, 0, 0, 0)',
				font: {color: labelColor***REMOVED***
			***REMOVED***,
			yaxis: {
				font: {color: labelColor***REMOVED***
			***REMOVED***,
			grid: {
				borderWidth: 0,
				color: labelColor,
				hoverable: true
			***REMOVED***
		***REMOVED***;

		chart.width('100%');
		var plot = $.plot(chart, data, options);

		var tip, previousPoint = null;
		chart.bind("plothover", function (event, pos, item) {
			if (item) {
				if (previousPoint !== item.dataIndex) {
					previousPoint = item.dataIndex;

					var x = item.datapoint[0];
					var y = item.datapoint[1];
					var tipLabel = '<strong>' + $(this).data('title') + '</strong>';
					var tipContent = y + " " + item.series.label.toLowerCase() + " on " + moment(x).format('dddd');

					if (tip !== undefined) {
						$(tip).popover('destroy');
					***REMOVED***
					tip = $('<div></div>').appendTo('body').css({left: item.pageX, top: item.pageY - 5, position: 'absolute'***REMOVED***);
					tip.popover({html: true, title: tipLabel, content: tipContent, placement: 'top'***REMOVED***).popover('show');
				***REMOVED***
			***REMOVED***
			else {
				if (tip !== undefined) {
					$(tip).popover('destroy');
				***REMOVED***
				previousPoint = null;
			***REMOVED***
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// FLOT - realtime
	// =========================================================================

	p._initFlotRealtime = function () {
		var chart = $("#realtime-chart");
		if (!$.isFunction($.fn.plot) || chart.length === 0) {
			return;
		***REMOVED***

		var o = this;
		var labelColor = chart.css('color');
		var options = {
			colors: chart.data('color').split(','),
			series: {
				shadowSize: 0,
				lines: {
					show: true,
					lineWidth: 1,
					fill: true
				***REMOVED***
			***REMOVED***,
			legend: {
				show: false
			***REMOVED***,
			xaxis: {
				show: false,
				font: {color: labelColor***REMOVED***
			***REMOVED***,
			yaxis: {
				min: 0,
				max: 100,
				font: {color: labelColor***REMOVED***
			***REMOVED***,
			grid: {
				borderWidth: 0,
				color: labelColor,
				hoverable: true
			***REMOVED***
		***REMOVED***;

		// We use an inline data source in the example, usually data would
		// be fetched from a server
		var data = [];
		var totalPoints = 300;

		function getRandomData() {
			if (data.length > 0) {
				data = data.slice(1);
			***REMOVED***

			// Do a random walk
			while (data.length < totalPoints) {
				var prev = data.length > 0 ? data[data.length - 1] : 50;
				var y = prev + Math.random() * 10 - 5;

				if (y < 0) {
					y = 0;
				***REMOVED*** else if (y > 100) {
					y = 100;
				***REMOVED***
				data.push(y);
			***REMOVED***

			// Zip the generated y values with the x values
			var res = [];
			for (var i = 0; i < data.length; ++i) {
				res.push([i, data[i]])
			***REMOVED***
			return res;
		***REMOVED***

		// Set up the control widget
		var updateInterval = 30;
		var plot = $.plot(chart, [getRandomData()], options);

		function update() {
			plot.setData([getRandomData()]);

			// Since the axes don't change, we don't need to call plot.setupGrid()
			plot.draw();
			setTimeout(update, updateInterval);
		***REMOVED***

		update();
	***REMOVED***;

	// =========================================================================
	// MORRIS
	// =========================================================================

	p._initMorris = function () {
		if (typeof Morris !== 'object') {
			return;
		***REMOVED***

		// Morris Donut demo
		if ($('#morris-donut-graph').length > 0) {
			Morris.Donut({
				element: 'morris-donut-graph',
				data: [
					{value: 70, label: 'foo', formatted: 'at least 70%'***REMOVED***,
					{value: 15, label: 'bar', formatted: 'approx. 15%'***REMOVED***,
					{value: 10, label: 'baz', formatted: 'approx. 10%'***REMOVED***,
					{value: 5, label: 'A really really long label', formatted: 'at most 5%'***REMOVED***
				],
				colors: $('#morris-donut-graph').data('colors').split(','),
				formatter: function (x, data) {
					return data.formatted;
				***REMOVED***
			***REMOVED***);
		***REMOVED***

		// Morris line demo
		if ($('#morris-line-graph').length > 0) {
			var decimal_data = [];
			for (var x = 0; x <= 360; x += 10) {
				decimal_data.push({
					x: x,
					y: 1.5 + 1.5 * Math.sin(Math.PI * x / 180).toFixed(4)
				***REMOVED***);
			***REMOVED***
			window.m = Morris.Line({
				element: 'morris-line-graph',
				data: decimal_data,
				xkey: 'x',
				ykeys: ['y'],
				labels: ['sin(x)'],
				parseTime: false,
				resize: true,
				lineColors: $('#morris-line-graph').data('colors').split(','),
				hoverCallback: function (index, options, default_content) {
					var row = options.data[index];
					return default_content.replace("sin(x)", "1.5 + 1.5 sin(" + row.x + ")");
				***REMOVED***,
				xLabelMargin: 10,
				integerYLabels: true
			***REMOVED***);
		***REMOVED***

		// Morris Bar demo
		if ($('#morris-bar-graph').length > 0) {
			Morris.Bar({
				element: 'morris-bar-graph',
				data: [
					{x: '2011 Q1', y: 3, z: 2, a: 3***REMOVED***,
					{x: '2011 Q2', y: 2, z: null, a: 1***REMOVED***,
					{x: '2011 Q3', y: 0, z: 2, a: 4***REMOVED***,
					{x: '2011 Q4', y: 2, z: 4, a: 3***REMOVED***
				],
				xkey: 'x',
				ykeys: ['y', 'z', 'a'],
				labels: ['Y', 'Z', 'A'],
				barColors: $('#morris-bar-graph').data('colors').split(',')
			***REMOVED***);
		***REMOVED***

		// Morris stacked bar demo
		if ($('#morris-stacked-bar-graph').length > 0) {
			Morris.Bar({
				element: 'morris-stacked-bar-graph',
				data: [
					{x: '2011 Q1', y: 3, z: 2, a: 3***REMOVED***,
					{x: '2011 Q2', y: 2, z: null, a: 1***REMOVED***,
					{x: '2011 Q3', y: 0, z: 2, a: 4***REMOVED***,
					{x: '2011 Q4', y: 2, z: 4, a: 3***REMOVED***
				],
				xkey: 'x',
				ykeys: ['y', 'z', 'a'],
				labels: ['Y', 'Z', 'A'],
				stacked: true,
				barColors: $('#morris-stacked-bar-graph').data('colors').split(',')
			***REMOVED***);
		***REMOVED***

		// Morris Area demo
		if ($('#morris-area-graph').length > 0) {
			var labelColor = $('#morris-area-graph').css('color');
			Morris.Area({
				element: 'morris-area-graph',
				behaveLikeLine: true,
				data: [
					{x: '2011 Q1', y: 3, z: 3***REMOVED***,
					{x: '2011 Q2', y: 2, z: 1***REMOVED***,
					{x: '2011 Q3', y: 2, z: 4***REMOVED***,
					{x: '2011 Q4', y: 3, z: 3***REMOVED***
				],
				xkey: 'x',
				ykeys: ['y', 'z'],
				labels: ['Y', 'Z'],
				gridTextColor: labelColor,
				lineColors: $('#morris-area-graph').data('colors').split(',')
			***REMOVED***);
		***REMOVED***
	***REMOVED***;

	// =========================================================================
	namespace.DemoCharts = new DemoCharts;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
