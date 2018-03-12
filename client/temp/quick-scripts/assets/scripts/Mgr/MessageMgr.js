(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Mgr/MessageMgr.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'b422e37D2dBHpiNCpwTlfeh', 'MessageMgr', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=MessageMgr.js.map
        