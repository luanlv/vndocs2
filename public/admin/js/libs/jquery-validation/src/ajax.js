// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]***REMOVED***);
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()

var pendingRequests = {***REMOVED***,
	ajax;
// Use a prefilter if available (1.5+)
if ( $.ajaxPrefilter ) {
	$.ajaxPrefilter(function( settings, _, xhr ) {
		var port = settings.port;
		if ( settings.mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			***REMOVED***
			pendingRequests[port] = xhr;
		***REMOVED***
	***REMOVED***);
***REMOVED*** else {
	// Proxy ajax
	ajax = $.ajax;
	$.ajax = function( settings ) {
		var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
			port = ( "port" in settings ? settings : $.ajaxSettings ).port;
		if ( mode === "abort" ) {
			if ( pendingRequests[port] ) {
				pendingRequests[port].abort();
			***REMOVED***
			pendingRequests[port] = ajax.apply(this, arguments);
			return pendingRequests[port];
		***REMOVED***
		return ajax.apply(this, arguments);
	***REMOVED***;
***REMOVED***
