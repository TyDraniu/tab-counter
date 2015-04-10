'use strict';

let { Cc, Ci } = require('chrome');

var self = require('sdk/self');

var btn = require('sdk/ui/button')

var w = Cc['@mozilla.org/appshell/window-mediator;1'].getService(Ci.nsIWindowMediator).getEnumerator('navigator:browser');

var newtab = document.getElementById('new-tab-button');
var t = 0;

while (w.hasMoreElements())
t += w.getNext().document.getElementById('content').mTabs.length;
if (t == 1) {
    newtab.setAttribute('tooltiptext', 'You have 1 tab');
} 
else {
    newtab.setAttribute('tooltiptext', 'You have ' + t + ' tabs');
}