"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./base");
var Net = /** @class */ (function (_super) {
    __extends(Net, _super);
    function Net(node, idGenerator) {
        return _super.call(this, node, idGenerator) || this;
    }
    Net.prototype.localKeyFor = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, address, port, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_localKeyFor";
                        address = params.address, port = params.port;
                        return [4 /*yield*/, this.call({ method: method, id: id }, address, port)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Net.prototype.registerRemoteKeyFor = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, address, port, remotePublicKey, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_registerRemoteKeyFor";
                        address = params.address, port = params.port, remotePublicKey = params.remotePublicKey;
                        return [4 /*yield*/, this.call({ method: method, id: id }, address, port, remotePublicKey)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Net.prototype.connect = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, address, port;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_connect";
                        address = params.address, port = params.port;
                        return [4 /*yield*/, this.call({ method: method, id: id }, address, port)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Net.prototype.isConnected = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, address, port, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_isConnected";
                        address = params.address, port = params.port;
                        return [4 /*yield*/, this.call({ method: method, id: id }, address, port)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Net.prototype.disconnect = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, address, port;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_disconnect";
                        address = params.address, port = params.port;
                        return [4 /*yield*/, this.call({ method: method, id: id }, address, port)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Net.prototype.getPeerCount = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_getPeerCount";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Net.prototype.getEstablishedPeers = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_getEstablishedPeers";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Net.prototype.getPort = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_getPort";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Net.prototype.addToWhitelist = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, address, tag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_addToWhitelist";
                        address = params.address, tag = params.tag;
                        return [4 /*yield*/, this.call({ method: method, id: id }, address, tag)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Net.prototype.removeFromWhitelist = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_removeFromWhitelist";
                        address = params.address;
                        return [4 /*yield*/, this.call({ method: method, id: id }, address)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Net.prototype.addToBlacklist = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, address, tag;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_addToBlacklist";
                        address = params.address, tag = params.tag;
                        return [4 /*yield*/, this.call({ method: method, id: id }, address, tag)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Net.prototype.removeFromBlacklist = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, address;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_removeFromBlacklist";
                        address = params.address;
                        return [4 /*yield*/, this.call({ method: method, id: id }, address)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Net.prototype.enableWhitelist = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_enableWhitelist";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Net.prototype.disableWhitelist = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_disableWhitelist";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Net.prototype.enableBlacklist = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_enableBlacklist";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Net.prototype.disableBlacklist = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_disableBlacklist";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Net.prototype.getWhitelist = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_getWhitelist";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Net.prototype.getBlacklist = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_getBlacklist";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Net.prototype.recentNetworkUsage = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "net_recentNetworkUsage";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    return Net;
}(base_1.default));
exports.default = Net;
