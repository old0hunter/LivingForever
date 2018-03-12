"use strict";
cc._RF.push(module, 'b422e37D2dBHpiNCpwTlfeh', 'MessageMgr');
// scripts/Mgr/MessageMgr.js

"use strict";

var onfire = require("../3rd/onfire.js");

var register = function register(eventName, callBack) {
    onfire.on(eventName, callBack);
};

var unregister = function unregister(event) {
    onfire.un(event);
};

var onCall = function onCall(eventName) {
    onfire.fire(eventName);
};

module.exports = {
    register: register,
    unregister: unregister,
    onCall: onCall
};

cc._RF.pop();