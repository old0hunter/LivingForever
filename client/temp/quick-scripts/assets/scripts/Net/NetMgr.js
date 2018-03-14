(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/Net/NetMgr.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '113b0iu6LZO/r4C+4udp+Ux', 'NetMgr', __filename);
// scripts/Net/NetMgr.js

"use strict";

var messageMgr = require('../Mgr/MessageMgr.js');
var WebSocket = WebSocket;

var netConfig = {
    host: "ws://192.168.33.192:8080",
    testhost: "ws://echo.websocket.org"
};

var instance = null;
function getNetworkInstance() {
    var networkInstance = {
        socket: null,
        isInit: false,
        initNetwork: function initNetwork() {
            this.host = netConfig.host;
            this.testhost = netConfig.testhost;
            this.socket = new WebSocket(this.host);
            var self = this;
            this.socket.onopen = function (evt) {
                messageMgr.catapult("game.net.open", evt);
                self.isInit = true;
            };

            this.socket.onmessage = function (evt) {
                var data = evt.data;
                messageMgr.catapult("game.net.message", evt);
            };

            this.socket.onerror = function (evt) {
                messageMgr.catapult("game.net.error", evt);
            };

            this.socket.onclose = function (evt) {
                messageMgr.catapult("game.net.close", evt);
                this.isInit = false;
            };
        },
        send: function send(data) {
            if (!this.isInit) {
                cc.log('Network is not inited...');
            } else if (this.socket.readyState == WebSocket.OPEN) {
                cc.log('Network send:' + data);
                this.socket.send(data);
            } else {
                cc.log('Network WebSocket readState:' + this.socket.readyState);
            }
        },
        close: function close() {
            if (this.socket) {
                messageMgr.catapult("game.net.close");
                this.socket.close();
                this.socket = null;
            }
        }
    };
    return networkInstance;
};

var getInstance = function getInstance() {
    if (instance === null) {
        instance = getNetworkInstance();
    }
    return instance;
};

module.exports = {
    getInstance: getInstance
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
        //# sourceMappingURL=NetMgr.js.map
        