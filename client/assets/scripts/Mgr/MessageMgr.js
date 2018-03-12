var onfire = require("../3rd/onfire.js");

var register = function (eventName, callBack) {
    onfire.on(eventName, callBack);
};

var unregister = function (event) {
    onfire.un(event);
};

var onCall = function (eventName) {
    onfire.fire(eventName);
};

module.exports = {
    register: register,
    unregister: unregister,
    onCall: onCall,
};