(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/scripts/JoystickCommon.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2f218v14+5ApY52tiPQqn49', 'JoystickCommon', __filename);
// scripts/JoystickCommon.js

"use strict";

module.exports = {

    TouchType: cc.Enum({
        DEFAULT: 0,
        FOLLOW: 1
    }),

    DirectionType: cc.Enum({
        FOUR: 4,
        EIGHT: 8,
        ALL: 0
    })

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
        //# sourceMappingURL=JoystickCommon.js.map
        