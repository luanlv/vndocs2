$.validator.addMethod("ipv6", function(value, element) {
	return this.optional(element) || /^((([0-9A-Fa-f]{1,4***REMOVED***:){7***REMOVED***[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){6***REMOVED***:[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){5***REMOVED***:([0-9A-Fa-f]{1,4***REMOVED***:)?[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){4***REMOVED***:([0-9A-Fa-f]{1,4***REMOVED***:){0,2***REMOVED***[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){3***REMOVED***:([0-9A-Fa-f]{1,4***REMOVED***:){0,3***REMOVED***[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){2***REMOVED***:([0-9A-Fa-f]{1,4***REMOVED***:){0,4***REMOVED***[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){6***REMOVED***((\b((25[0-5])|(1\d{2***REMOVED***)|(2[0-4]\d)|(\d{1,2***REMOVED***))\b)\.){3***REMOVED***(\b((25[0-5])|(1\d{2***REMOVED***)|(2[0-4]\d)|(\d{1,2***REMOVED***))\b))|(([0-9A-Fa-f]{1,4***REMOVED***:){0,5***REMOVED***:((\b((25[0-5])|(1\d{2***REMOVED***)|(2[0-4]\d)|(\d{1,2***REMOVED***))\b)\.){3***REMOVED***(\b((25[0-5])|(1\d{2***REMOVED***)|(2[0-4]\d)|(\d{1,2***REMOVED***))\b))|(::([0-9A-Fa-f]{1,4***REMOVED***:){0,5***REMOVED***((\b((25[0-5])|(1\d{2***REMOVED***)|(2[0-4]\d)|(\d{1,2***REMOVED***))\b)\.){3***REMOVED***(\b((25[0-5])|(1\d{2***REMOVED***)|(2[0-4]\d)|(\d{1,2***REMOVED***))\b))|([0-9A-Fa-f]{1,4***REMOVED***::([0-9A-Fa-f]{1,4***REMOVED***:){0,5***REMOVED***[0-9A-Fa-f]{1,4***REMOVED***)|(::([0-9A-Fa-f]{1,4***REMOVED***:){0,6***REMOVED***[0-9A-Fa-f]{1,4***REMOVED***)|(([0-9A-Fa-f]{1,4***REMOVED***:){1,7***REMOVED***:))$/i.test(value);
***REMOVED***, "Please enter a valid IP v6 address.");
