var itemState = {
    none: 0,
    alive: 1,
    breakdown: 2,
    impossible: 3,
};

cc.Class({
    extends: cc.Component,

    properties: {
        hp: {
            default: 0,
            displayName: "地图组件的血量"
        },
        isAttack: {
            default: false,
            displayName: "是否可以攻击"
        },
        isObstacle: {
            default: false,
            displayName: "是否障碍"
        },
        state: {
            default: itemState.none,
            displayName: "元件状态"
        },
    },

    ctor () {
    },
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    onCollide(target) {
        if (itemState.none) {
            return;
        } else if (itemState.breakdown) {
            return;
        }
    },

    update (dt) {

    },
});
