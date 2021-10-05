"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoColor = void 0;
var colors_json_1 = __importDefault(require("./colors.json"));
var cryptoColor = function (ticker, rgba, alpha) {
    var prefix = rgba ? "rgba" : "rgb";
    var suffix = alpha === undefined || rgba === false ? "" : "," + alpha;
    if (ticker) {
        if (colors_json_1.default[ticker.toUpperCase()] != undefined)
            return prefix + "(" + colors_json_1.default[ticker.toUpperCase()] + suffix + ")";
        return undefined;
    }
    return undefined;
};
exports.cryptoColor = cryptoColor;
//# sourceMappingURL=index.js.map