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
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
require("mocha");
var chai_1 = require("chai");
var generator_1 = require("./generator");
describe("devel", function () {
    it("cannot use by default", function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpc;
            return __generator(this, function (_a) {
                rpc = new src_1.default("http://localhost:8080");
                chai_1.expect(rpc.devel).be.undefined;
                return [2 /*return*/];
            });
        });
    });
    it("doesn't exist when it's explicitly false", function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpc;
            return __generator(this, function (_a) {
                rpc = new src_1.default("http://localhost:8080", { devel: false });
                chai_1.expect(rpc.devel).be.undefined;
                return [2 /*return*/];
            });
        });
    });
    it("exist", function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpc;
            return __generator(this, function (_a) {
                rpc = new src_1.default("http://localhost:8080", { devel: true });
                chai_1.expect(rpc.devel).not.null;
                chai_1.expect(rpc.devel).not.undefined;
                return [2 /*return*/];
            });
        });
    });
    it("getBlockSyncPeers", function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpc, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        rpc = new src_1.default("http://localhost:8080", { devel: true, id: generator_1.default("devel-getBlockSyncPeers") });
                        _a = chai_1.expect;
                        return [4 /*yield*/, rpc.devel.getBlockSyncPeers()];
                    case 1:
                        _a.apply(void 0, [_b.sent()]).deep.equal([]);
                        return [2 /*return*/];
                }
            });
        });
    });
    it("testTPS", function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpc, tps;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpc = new src_1.default("http://localhost:8080", { devel: true, id: generator_1.default("devel-getBlockSyncPeers") });
                        return [4 /*yield*/, rpc.devel.testTPS({ count: 1, seed: 0, option: "payOnly" })];
                    case 1:
                        tps = _a.sent();
                        chai_1.expect(tps).not.equal(0);
                        return [2 /*return*/];
                }
            });
        });
    });
    it("trie", function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpc, devel, keys1, keys1_1, keys1_1_1, key, value, e_1_1, keys2, keys2_1, keys2_1_1, key, value, e_2_1, keys1_2, keys1_2_1, key1, keys2_2, keys2_2_1, key2;
            var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        rpc = new src_1.default("http://localhost:8080", { devel: true, id: generator_1.default("devel-trie") });
                        devel = rpc.devel;
                        return [4 /*yield*/, devel.getStateTrieKeys({ offset: 0, limit: 3 })];
                    case 1:
                        keys1 = _e.sent();
                        chai_1.expect(keys1.length).equal(3);
                        _e.label = 2;
                    case 2:
                        _e.trys.push([2, 7, 8, 9]);
                        keys1_1 = __values(keys1), keys1_1_1 = keys1_1.next();
                        _e.label = 3;
                    case 3:
                        if (!!keys1_1_1.done) return [3 /*break*/, 6];
                        key = keys1_1_1.value;
                        return [4 /*yield*/, devel.getStateTrieValue({ key: key })];
                    case 4:
                        value = _e.sent();
                        chai_1.expect(value).not.null;
                        _e.label = 5;
                    case 5:
                        keys1_1_1 = keys1_1.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (keys1_1_1 && !keys1_1_1.done && (_a = keys1_1.return)) _a.call(keys1_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [4 /*yield*/, devel.getStateTrieKeys({ offset: 3, limit: 10 })];
                    case 10:
                        keys2 = _e.sent();
                        chai_1.expect(keys2.length).equal(10);
                        _e.label = 11;
                    case 11:
                        _e.trys.push([11, 16, 17, 18]);
                        keys2_1 = __values(keys2), keys2_1_1 = keys2_1.next();
                        _e.label = 12;
                    case 12:
                        if (!!keys2_1_1.done) return [3 /*break*/, 15];
                        key = keys2_1_1.value;
                        return [4 /*yield*/, devel.getStateTrieValue({ key: key })];
                    case 13:
                        value = _e.sent();
                        chai_1.expect(value).not.null;
                        _e.label = 14;
                    case 14:
                        keys2_1_1 = keys2_1.next();
                        return [3 /*break*/, 12];
                    case 15: return [3 /*break*/, 18];
                    case 16:
                        e_2_1 = _e.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 18];
                    case 17:
                        try {
                            if (keys2_1_1 && !keys2_1_1.done && (_b = keys2_1.return)) _b.call(keys2_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 18:
                        try {
                            for (keys1_2 = __values(keys1), keys1_2_1 = keys1_2.next(); !keys1_2_1.done; keys1_2_1 = keys1_2.next()) {
                                key1 = keys1_2_1.value;
                                try {
                                    for (keys2_2 = (e_4 = void 0, __values(keys2)), keys2_2_1 = keys2_2.next(); !keys2_2_1.done; keys2_2_1 = keys2_2.next()) {
                                        key2 = keys2_2_1.value;
                                        chai_1.expect(key1).not.equal(key2);
                                    }
                                }
                                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                                finally {
                                    try {
                                        if (keys2_2_1 && !keys2_2_1.done && (_d = keys2_2.return)) _d.call(keys2_2);
                                    }
                                    finally { if (e_4) throw e_4.error; }
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (keys1_2_1 && !keys1_2_1.done && (_c = keys1_2.return)) _c.call(keys1_2);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [2 /*return*/];
                }
            });
        });
    });
});
