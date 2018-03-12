var messageMgr = require('../Mgr/MessageMgr.js');
var WebSocket = WebSocket;
const netConfig = {
    host: "ws://192.168.33.192:8080",
    testhost: "ws://echo.websocket.org"
}

var NetControl  = (function() {
    var instance = null;
    function getNetworkInstance () {
        var networkInstance = {
            socket: null,
            isInit: false,
            initNetwork: function() {
                cc.log('Network initSocket...');
                this.host = netConfig.host;
                this.testhost = netConfig.testhost;
                this.socket = new WebSocket(this.host);
                var self = this;
                this.socket.onopen = function(evt) {
                    messageMgr.onCall("game.net.open", evt);
                    self.isInit = true;
                };
                  
                this.socket.onmessage = function(evt) {
                    var data = evt.data;
                    messageMgr.onCall("game.net.message", evt);
                };
                  
                this.socket.onerror = function(evt) {
                    messageMgr.onCall(evt);
                };
                  
                this.socket.onclose = function(evt) {
                    messageMgr.onCall("game.net.close", evt);
                    this.isInit = false;
                };
            },
            send: function(data) { 
                if (!this.isInit) {
                    cc.log('Network is not inited...');
                } else if (this.socket.readyState == WebSocket.OPEN) {
                    cc.log('Network send:' + data);
                    this.socket.send(data);
                } else {
                    cc.log('Network WebSocket readState:'+this.socket.readyState);
                }
            },
            close: function() {
                if (this.socket) {
                    messageMgr.onCall("game.net.close");
                    this.socket.close();
                    this.socket = null;
                }
            }
        };
        return networkInstance;
    };
  
    return {
        getInstance:function() {
            if (instance === null) {
                instance = getNetworkInstance();  
            }
            return instance;
        }
    };
})();