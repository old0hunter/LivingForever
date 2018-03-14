var messageMgr = require("../Mgr/MessageMgr");
var protobuf = require("protobufjs");
//protobuf.util.fetch = cc.loader.load.bind(cc.loader);

cc.Class({
    extends: cc.Component,

    properties: {
    },

    onLoad () {
        protobuf.load("res/raw-assets/resources/ProtoBuf/test.proto", function (err, root) {
            if (err)
                throw err;

            var AwesomeMessage = root.lookupType("awesomepackage.AwesomeMessage");
        });
    },

    start () {
    },
    // update (dt) {},
});
