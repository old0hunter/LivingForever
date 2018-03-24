(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/UI/Login/UILogin.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'e51fcdKLD9CVJU2lhAAK0Sy', 'UILogin', __filename);
// scripts/UI/Login/UILogin.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        loginPanel: {
            type: cc.Layout,
            default: null
        },

        registerPanel: {
            type: cc.Layout,
            default: null
        }
    },

    accountInput: null,
    passwordInput: null,

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.registerPanel.node.active = false;
        this.accountInput = this.loginPanel.node.getChildByName("AccountInput");
        this.passwordInput = this.loginPanel.node.getChildByName("PasswordInput");
    },
    start: function start() {},
    onOK: function onOK() {
        var input = this.accountInput.getComponent(cc.EditBox);
        cc.log(input.string);
        input = this.passwordInput.getComponent(cc.EditBox);
        cc.log(input.string);
    },
    onRegister: function onRegister() {
        this.registerPanel.node.active = true;
        this.loginPanel.node.active = false;
    }

    // update (dt) {},

});

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
        //# sourceMappingURL=UILogin.js.map
        