var onfire = require("../3rd/onfire.js");

var register = function (eventName, callBack) {
    onfire.on(eventName, callBack);
};

var unregister = function (event) {
    onfire.un(event);
};

var send = function (eventName) {
    onfire.fire(eventName);
};

var catapult = function (type, event) {
    if (type === "game.net.open") {
        send("game.net.open", event);
    } else if (type === "game.net.message") {
        if (!event) {
            return;
        }

        var messageData = event.data;
        if (!messageData) {
            return;
        }

        send(messageData.interfaceName, messageData.data);
    } else if (type === "game.net.close") {
        send("game.net.close", event);
    } else if (type === "game.net.error") {
        send("game.net.error", event);
    }
}

module.exports = {
    register: register,
    unregister: unregister,
    send: send,
    catapult: catapult,
};