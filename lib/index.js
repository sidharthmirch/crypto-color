"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cryptoColor = void 0;
var cryptocurrencies_1 = __importDefault(require("cryptocurrencies"));
var cryptoColor = function (ticker, name, rgba, alpha) {
    if (ticker) {
        if (cryptocurrencies_1.default[ticker.toUpperCase()] != undefined) {
            name = cryptocurrencies_1.default[ticker.toUpperCase()].toLowerCase();
        }
        else {
            return "No record for that ticker";
        }
    }
    var output = rgba ? "rgba" : "rgb";
    var appendedAlpha = alpha === undefined || rgba === false ? "" : "," + alpha;
    switch (name) {
        case "bitcoin":
            return output + "(247,147,26" + appendedAlpha + ")";
        case "blackcoin":
            return output + "(0,0,0" + appendedAlpha + ")";
        case "bitcoin cash":
            return output + "(45,179,1" + appendedAlpha + ")";
        case "eos":
            return output + "(2,2,2" + appendedAlpha + ")";
        case "zcash":
            return output + "(215,149,45" + appendedAlpha + ")";
        case "ethereum":
            return output + "(140,140,140" + appendedAlpha + ")";
        case "monero":
            return output + "(255,102,1" + appendedAlpha + ")";
        case "litecoin":
            return output + "(190,190,190" + appendedAlpha + ")";
        case "ethereum classic":
            return output + "(30,159,103" + appendedAlpha + ")";
        case "xrp":
            return output + "(210,210,210" + appendedAlpha + ")";
        case "dash":
            return output + "(0,141,230" + appendedAlpha + ")";
        case "qtum":
            return output + "(208,201,234" + appendedAlpha + ")";
        case "neo":
            return output + "(123,184,81" + appendedAlpha + ")";
        case "bytom":
            return output + "(215,215,215" + appendedAlpha + ")";
        case "tether":
            return output + "(38,161,23" + appendedAlpha + ")";
        case "bitshares":
            return output + "(4,110,52" + appendedAlpha + ")";
        case "tron":
            return output + "(228,7,20" + appendedAlpha + ")";
        case "cardano":
            return output + "(6,21,41" + appendedAlpha + ")";
        case "stellar":
            return output + "(221,223,252" + appendedAlpha + ")";
        case "exchange union":
            return output + "(17,69,134" + appendedAlpha + ")";
        case "true chain":
            return output + "(30,107,186" + appendedAlpha + ")";
        case "paxos standard":
            return output + "(230,228,56" + appendedAlpha + ")";
        case "gifto":
            return output + "(137,52,255" + appendedAlpha + ")";
        case "unitedbitcoin":
            return output + "(61,183,247" + appendedAlpha + ")";
        case "basic attention token":
            return output + "(48,48,48" + appendedAlpha + ")";
        case "bitcoin gold":
            return output + "(255,200,98" + appendedAlpha + ")";
        case "selfkey":
            return output + "(47,53,69" + appendedAlpha + ")";
        case "ravencoin":
            return output + "(55,64,130" + appendedAlpha + ")";
        case "binance coin":
            return output + "(246,190,48" + appendedAlpha + ")";
        case "omisego":
            return output + "(27,83,240" + appendedAlpha + ")";
        case "hshare":
            return output + "(90,69,141" + appendedAlpha + ")";
        case "okex":
            return output + "(90,148,255" + appendedAlpha + ")";
        case "0x":
            return output + "(28,23,37" + appendedAlpha + ")";
        case "mithril":
            return output + "(147,147,200" + appendedAlpha + ")";
        default:
            return output + "(242,169,0" + appendedAlpha + ")";
    }
};
exports.cryptoColor = cryptoColor;
//# sourceMappingURL=index.js.map