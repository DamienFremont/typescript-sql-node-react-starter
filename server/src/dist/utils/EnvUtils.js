"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
class EnvUtils {
    static initOrOverride() {
        if (process.env.NODE_ENV !== 'production') {
            dotenv.config();
            console.log('warn: Loaded Env file over Node process.env');
        }
    }
}
exports.default = EnvUtils;
//# sourceMappingURL=EnvUtils.js.map