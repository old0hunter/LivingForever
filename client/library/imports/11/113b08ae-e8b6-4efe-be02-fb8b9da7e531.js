"use strict";
cc._RF.push(module, '113b0iu6LZO/r4C+4udp+Ux', 'NetMgr');
// scripts/Net/NetMgr.js

"use strict";

ws = new WebSocket("ws://echo.websocket.org");
ws.onopen = function (event) {
    console.log("Send Text WS was opened.");
};
ws.onmessage = function (event) {
    console.log("response text msg: " + event.data);
};
ws.onerror = function (event) {
    console.log("Send Text fired an error");
};
ws.onclose = function (event) {
    console.log("WebSocket instance closed.");
};

cc._RF.pop();