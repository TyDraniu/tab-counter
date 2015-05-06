'use strict';

var self = require('sdk/self');
var { viewFor } = require("sdk/view/core");
var windows = require("sdk/windows");
var tabs = require("sdk/tabs");
var _ = require("sdk/l10n").get;
var tb = 0;


function TabNumber() {
	return tabs.length;
}

function SetTooltip(window, tn)
{
	var newtab = window.document.getElementById('new-tab-button');
	if (newtab != null) {
		tb = tn;
		newtab.setAttribute('tooltiptext', _("tooltiptext", tn));
	}
}

for (let window of windows.browserWindows)
{
	SetTooltip(viewFor(window), TabNumber());
}

windows.browserWindows.on('open', function(window) {
	SetTooltip(viewFor(window), TabNumber());
});

tabs.on('open', function(tab) {
	SetTooltip(viewFor(windows.browserWindows.activeWindow), ++tb);
});

tabs.on('close', function(tab) {
	SetTooltip(viewFor(windows.browserWindows.activeWindow), --tb);
});
