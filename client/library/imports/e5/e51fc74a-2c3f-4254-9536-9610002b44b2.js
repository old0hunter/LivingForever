"use strict";
cc._RF.push(module, 'e51fcdKLD9CVJU2lhAAK0Sy', 'UILogin');
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