"use strict";
cc._RF.push(module, 'a6ba8JADUNCwY8GISCMVcQb', 'GameLogic');
// scripts/Logic/GameLogic.js

"use strict";

var messageMgr = require("../Mgr/MessageMgr");
var protobuf = require("protobufjs");
//protobuf.util.fetch = cc.loader.load.bind(cc.loader);

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