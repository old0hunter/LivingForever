(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/battle/MapElement/MapElementBase.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '3904euFYZFG2ovRo8AWktJN', 'MapElementBase', __filename);
// scripts/battle/MapElement/MapElementBase.js

"use strict";

var itemState = {
    none: 0,
    alive: 1,
    breakdown: 2,
    impossible: 3
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
        }
    },

    ctor: function ctor() {},

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start: function start() {},
    onCollide: function onCollide(target) {
        if (itemState.none) {
            return;
        } else if (itemState.breakdown) {
            return;
        }
    },
    update: function update(dt) {}
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
        //# sourceMappingURL=MapElementBase.js.map
        