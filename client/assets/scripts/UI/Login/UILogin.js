cc.Class({
    extends: cc.Component,

    properties: {
        loginPanel: {
            type: cc.Layout,
            default: null,
        },
        
        registerPanel: {
            type: cc.Layout,
            default: null,
        }
    },

    accountInput: null,
    passwordInput: null,

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.registerPanel.node.active = false;
        this.accountInput = this.loginPanel.node.getChildByName("AccountInput");
        this.passwordInput = this.loginPanel.node.getChildByName("PasswordInput");
    },

    start () {

    },

    onOK () {
        var input = this.accountInput.getComponent(cc.EditBox);
        cc.log(input.string);
        input = this.passwordInput.getComponent(cc.EditBox);
        cc.log(input.string);
    },

    onRegister () {
        this.registerPanel.node.active = true;
        this.loginPanel.node.active = false;
    }

    // update (dt) {},
});
