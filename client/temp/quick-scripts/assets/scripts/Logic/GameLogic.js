(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Logic/GameLogic.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'a6ba8JADUNCwY8GISCMVcQb', 'GameLogic', __filename);
// scripts/Logic/GameLogic.js

"use strict";

var messageMgr = require("../Mgr/MessageMgr");
var protobuf = require("protobufjs");

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        protobuf.load("res/raw-assets/resources/ProtoBuf/test.proto", function (err, root) {
            if (err) throw err;

            var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");
        });
    },
    start: function start() {}
}
// update (dt) {},
);

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
        //# sourceMappingURL=GameLogic.js.map
        