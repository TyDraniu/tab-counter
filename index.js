'use strict';

let { Cc, Ci } = require('chrome');
var self = require('sdk/self');
var { viewFor } = require("sdk/view/core");
var window = viewFor(require("sdk/windows").browserWindows[0]);


function TabsNumber() {
	var w = Cc['@mozilla.org/appshell/window-mediator;1'].getService(Ci.nsIWindowMediator).getEnumerator('navigator:browser');
	var t = 0;
	while (w.hasMoreElements())
		t += w.getNext().document.getElementById('content').mTabs.length;
	return t;
}


var newtab = window.document.getElementById('new-tab-button');


if (newtab != null) {
	var tn = TabsNumber();
	if (tn == 1) {
		newtab.setAttribute('tooltiptext', 'You have 1 tab');
	} 
	else {
		newtab.setAttribute('tooltiptext', 'You have ' + tn + ' tabs');
	}

}