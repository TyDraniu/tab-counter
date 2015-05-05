'use strict';

var self = require('sdk/self');
var { viewFor } = require("sdk/view/core");
var windows = require("sdk/windows");
var tabs = require("sdk/tabs");
var _ = require("sdk/l10n").get;
var tb = 0;


function TN() {
	var tabs = require("sdk/tabs");
	var t = 0;
	for (let tab of tabs) {
			t++;
	}
	return t;
}

function SetTooltip(window)
{
	var newtab = window.document.getElementById('new-tab-button');
	if (newtab != null) {
		//var tn = TabsNumber();
		tb = TN();
		if (tb == 1) {
			newtab.setAttribute('tooltiptext', _('You have 1 tab', 1));
		} 
		else {
			newtab.setAttribute('tooltiptext', _('You have %d tabs', tb));
		}
	}
}

for (let window of windows.browserWindows)
{
	SetTooltip(viewFor(window));
}

windows.browserWindows.on('open', function(window) {
	SetTooltip(viewFor(window));
});

tabs.on('open', function(tab) {
	var window = viewFor(windows.browserWindows.activeWindow);
	SetTooltip(window);
});

tabs.on('close', function(tab) {
	var window = viewFor(windows.browserWindows.activeWindow);
	SetTooltip(window);
});
