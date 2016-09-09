(function (namespace, $) {
	"use strict";

	var DemoDocs = function () {
		// Create reference to this instance
		var o = this;
		// Initialize app when document is ready
		$(document).ready(function () {
			o.initialize();
		***REMOVED***);

	***REMOVED***;
	var p = DemoDocs.prototype;

	// =========================================================================
	// INIT
	// =========================================================================

	p.initialize = function () {
		this._enableEvents();

		this._initMenu();
		this._initTasks();
	***REMOVED***;

	// =========================================================================
	// EVENTS
	// =========================================================================

	// events
	p._enableEvents = function () {
		var o = this;

		$('#menubar').on('activate.bs.scrollspy', function () {
			$('#main-menu li > a').removeClass('active');
			$('#main-menu li.active > a').addClass('active');
			$('#main-menu li').removeClass('expanded');
			materialadmin.AppNavigation._invalidateMenu();
		***REMOVED***);
	***REMOVED***;

	// =========================================================================
	// MENU
	// =========================================================================

	p._initMenu = function () {
		this._buildMenu();

		$('#main-menu').addClass('nav');
		$('body').scrollspy({target: '#menubar', offset: 50***REMOVED***);
	***REMOVED***;
	p._buildMenu = function () {
		var expandedMenu = $('#main-menu > li.active > ul');
		var tree = this._getMenuStructure();

		var i = 0;
		for (i; i < tree.length; i++) {
			var node = tree[i];
			if (node.children.length > 0) {
				var subitemHTML = ('<li class="gui-folder"><a href="#' + node.id + '"><span class="title">' + node.header + '</span></a></li>');
				var subitem = $(subitemHTML).appendTo(expandedMenu);
				this._addSubMenu(subitem, node.children);
			***REMOVED***
			else {
				var subitemHTML = ('<li><a href="#' + node.id + '"><span class="title">' + node.header + '</span></a></li>');
				var subitem = $(subitemHTML).appendTo(expandedMenu);
			***REMOVED***
		***REMOVED***
		expandedMenu.find('li:first a').addClass('active');
	***REMOVED***;
	p._addSubMenu = function (subitem, nodes) {
		var menu = $('<ul></ul>').appendTo(subitem);
		var i = 0;
		for (i; i < nodes.length; i++) {
			var node = nodes[i];
			var subitemHTML = ('<li><a href="#' + node.id + '"><span class="title">' + node.label + '</span></a></li>');
			var subitem = $(subitemHTML).appendTo(menu);
		***REMOVED***
	***REMOVED***;

	p._getMenuStructure = function () {
		var tree = [];
		$('.doc-section').each(function () {
			var section = $(this);
			var node = {header: section.find('h1').text(), id: section.find('h1').attr('id')***REMOVED***;
			node.children = [];
			section.find('h3').each(function () {
				var subItem = $(this);
				var id = subItem.attr('id');
				if (id !== undefined) {
					node.children.push({label: subItem.text(), id: id***REMOVED***);
				***REMOVED***
			***REMOVED***);
			tree.push(node);
		***REMOVED***);
		return tree;
	***REMOVED***;

	// =========================================================================
	namespace.DemoDocs = new DemoDocs;
***REMOVED***(this.materialadmin, jQuery)); // pass in (namespace, jQuery):
