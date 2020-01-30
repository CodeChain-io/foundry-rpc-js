"use strict";
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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
require("mocha");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var elliptic_1 = require("elliptic");
var generator_1 = require("./generator");
chai.use(chaiAsPromised);
var expect = chai.expect;
var secp256k1 = new elliptic_1.ec("secp256k1");
describe("net", function () {
    it("register remote key", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rpc, address, port, keyPair, remotePublicKey, local, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("net-register-remote-key") });
                    address = randomIp();
                    port = randomPort();
                    keyPair = secp256k1.genKeyPair();
                    remotePublicKey = "0x" + keyPair.getPublic(false, "hex").slice(2);
                    return [4 /*yield*/, rpc.net.registerRemoteKeyFor({ address: address, port: port, remotePublicKey: remotePublicKey })];
                case 1:
                    local = _b.sent();
                    _a = expect;
                    return [4 /*yield*/, rpc.net.localKeyFor({ address: address, port: port })];
                case 2:
                    _a.apply(void 0, [_b.sent()]).equal(local);
                    return [2 /*return*/];
            }
        });
    }); });
    it("port", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rpc, port;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("net-port") });
                    return [4 /*yield*/, rpc.net.getPort()];
                case 1:
                    port = _a.sent();
                    expect(port).equal(3485);
                    return [2 /*return*/];
            }
        });
    }); });
    it("peer count", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rpc, count;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("net-peer-count") });
                    return [4 /*yield*/, rpc.net.getPeerCount({})];
                case 1:
                    count = _a.sent();
                    expect(count).equal(0);
                    return [2 /*return*/];
            }
        });
    }); });
    it("established peers", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rpc, peers;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("net-established-peers") });
                    return [4 /*yield*/, rpc.net.getEstablishedPeers({})];
                case 1:
                    peers = _a.sent();
                    expect(peers).deep.equal([]);
                    return [2 /*return*/];
            }
        });
    }); });
    describe("whitelist", function () {
        var _this = this;
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function () {
                var rpc, _a, list, enabled, promises, list_1, list_1_1, _b, address, tag, _c, list_2, enabled_1;
                var e_1, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            this.timeout(10000);
                            rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("net-whitelist") });
                            return [4 /*yield*/, rpc.net.getWhitelist({})];
                        case 1:
                            _a = _e.sent(), list = _a.list, enabled = _a.enabled;
                            promises = [];
                            if (enabled) {
                                promises.push(rpc.net.disableWhitelist());
                            }
                            try {
                                for (list_1 = __values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                                    _b = __read(list_1_1.value, 2), address = _b[0], tag = _b[1];
                                    promises.push(rpc.net.removeFromWhitelist({ address: address }, "whitelist-before-each-remove-" + tag));
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (list_1_1 && !list_1_1.done && (_d = list_1.return)) _d.call(list_1);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                            return [4 /*yield*/, Promise.all(promises)];
                        case 2:
                            _e.sent();
                            _e.label = 3;
                        case 3:
                            if (!true) return [3 /*break*/, 6];
                            return [4 /*yield*/, rpc.net.getWhitelist({})];
                        case 4:
                            _c = _e.sent(), list_2 = _c.list, enabled_1 = _c.enabled;
                            if (!enabled_1 && list_2.length === 0) {
                                return [3 /*break*/, 6];
                            }
                            return [4 /*yield*/, wait(300)];
                        case 5:
                            _e.sent();
                            return [3 /*break*/, 3];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        });
        it("add", function () { return __awaiter(_this, void 0, void 0, function () {
            var rpc, expected, address, tag, _a, list, enabled, address, tag, _b, list, enabled;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("net-whitelist") });
                        expected = [];
                        address = randomIp(2) + "/16";
                        tag = "e2e test";
                        return [4 /*yield*/, rpc.net.addToWhitelist({ address: address, tag: tag })];
                    case 1:
                        _c.sent();
                        expected.push([address, tag]);
                        return [4 /*yield*/, rpc.net.getWhitelist({})];
                    case 2:
                        _a = _c.sent(), list = _a.list, enabled = _a.enabled;
                        expect(enabled).be.false;
                        expect(list).deep.equal(expected);
                        address = randomIp(3) + "/24";
                        tag = "e2e test2";
                        return [4 /*yield*/, rpc.net.addToWhitelist({ address: address, tag: tag })];
                    case 3:
                        _c.sent();
                        expected.push([address, tag]);
                        return [4 /*yield*/, rpc.net.getWhitelist({})];
                    case 4:
                        _b = _c.sent(), list = _b.list, enabled = _b.enabled;
                        expect(enabled).be.false;
                        list.sort();
                        expected.sort();
                        expect(list).deep.equal(expected);
                        return [2 /*return*/];
                }
            });
        }); });
        it("enable", function () { return __awaiter(_this, void 0, void 0, function () {
            var rpc, enabled, enabled;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("net-whitelist") });
                        return [4 /*yield*/, rpc.net.getWhitelist()];
                    case 1:
                        enabled = (_a.sent()).enabled;
                        expect(enabled).be.false;
                        return [4 /*yield*/, rpc.net.enableWhitelist()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, rpc.net.getWhitelist()];
                    case 3:
                        enabled = (_a.sent()).enabled;
                        expect(enabled).be.true;
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe("blacklist", function () {
        var _this = this;
        beforeEach(function () {
            return __awaiter(this, void 0, void 0, function () {
                var rpc, _a, list, enabled, promises, list_3, list_3_1, _b, address, tag, _c, list_4, enabled_2;
                var e_2, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            this.timeout(10000);
                            rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("net-blacklist") });
                            return [4 /*yield*/, rpc.net.getBlacklist({})];
                        case 1:
                            _a = _e.sent(), list = _a.list, enabled = _a.enabled;
                            promises = [];
                            if (enabled) {
                                promises.push(rpc.net.disableBlacklist());
                            }
                            try {
                                for (list_3 = __values(list), list_3_1 = list_3.next(); !list_3_1.done; list_3_1 = list_3.next()) {
                                    _b = __read(list_3_1.value, 2), address = _b[0], tag = _b[1];
                                    promises.push(rpc.net.removeFromBlacklist({ address: address }, "blacklist-before-each-remove-" + tag));
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (list_3_1 && !list_3_1.done && (_d = list_3.return)) _d.call(list_3);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                            return [4 /*yield*/, Promise.all(promises)];
                        case 2:
                            _e.sent();
                            _e.label = 3;
                        case 3:
                            if (!true) return [3 /*break*/, 6];
                            return [4 /*yield*/, rpc.net.getBlacklist({})];
                        case 4:
                            _c = _e.sent(), list_4 = _c.list, enabled_2 = _c.enabled;
                            if (!enabled_2 && list_4.length === 0) {
                                return [3 /*break*/, 6];
                            }
                            return [4 /*yield*/, wait(300)];
                        case 5:
                            _e.sent();
                            return [3 /*break*/, 3];
                        case 6: return [2 /*return*/];
                    }
                });
            });
        });
        it("add", function () { return __awaiter(_this, void 0, void 0, function () {
            var rpc, expected, address, tag, _a, list, enabled, address, tag, _b, list, enabled;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("net-blacklist") });
                        expected = [];
                        address = randomIp(2) + "/16";
                        tag = "e2e test";
                        return [4 /*yield*/, rpc.net.addToBlacklist({ address: address, tag: tag })];
                    case 1:
                        _c.sent();
                        expected.push([address, tag]);
                        return [4 /*yield*/, rpc.net.getBlacklist({})];
                    case 2:
                        _a = _c.sent(), list = _a.list, enabled = _a.enabled;
                        expect(enabled).be.false;
                        expect(list).deep.equal(expected);
                        address = randomIp(3) + "/24";
                        tag = "e2e test2";
                        return [4 /*yield*/, rpc.net.addToBlacklist({ address: address, tag: tag })];
                    case 3:
                        _c.sent();
                        expected.push([address, tag]);
                        return [4 /*yield*/, rpc.net.getBlacklist({})];
                    case 4:
                        _b = _c.sent(), list = _b.list, enabled = _b.enabled;
                        expect(enabled).be.false;
                        list.sort();
                        expected.sort();
                        expect(list).deep.equal(expected);
                        return [2 /*return*/];
                }
            });
        }); });
        it("enable", function () { return __awaiter(_this, void 0, void 0, function () {
            var rpc, enabled, enabled;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("net-blacklist") });
                        return [4 /*yield*/, rpc.net.getBlacklist()];
                    case 1:
                        enabled = (_a.sent()).enabled;
                        expect(enabled).be.false;
                        return [4 /*yield*/, rpc.net.enableBlacklist()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, rpc.net.getBlacklist()];
                    case 3:
                        enabled = (_a.sent()).enabled;
                        expect(enabled).be.true;
                        return [2 /*return*/];
                }
            });
        }); });
    });
    it("recent usage", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rpc, usage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("net-recent-usage") });
                    return [4 /*yield*/, rpc.net.recentNetworkUsage()];
                case 1:
                    usage = _a.sent();
                    expect(usage).deep.equal({}); // There are no connections.
                    return [2 /*return*/];
            }
        });
    }); });
});
function randomIp(length) {
    if (length === void 0) { length = 4; }
    var first = length < 1 ? 0 : 1 + Math.floor(Math.random() * 254);
    var second = length < 2 ? 0 : Math.floor(Math.random() * 256);
    var third = length < 3 ? 0 : Math.floor(Math.random() * 256);
    var fourth = length < 4 ? 0 : 1 + Math.floor(Math.random() * 254);
    return first + "." + second + "." + third + "." + fourth;
}
function randomPort() {
    return 49152 + Math.floor(Math.random() * (65535 - 49152));
}
function wait(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}
