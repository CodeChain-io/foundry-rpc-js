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
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../src");
require("mocha");
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
var elliptic_1 = require("elliptic");
var lodash_1 = require("lodash");
var generator_1 = require("./generator");
chai.use(chaiAsPromised);
var expect = chai.expect;
var secp256k1 = new elliptic_1.ec("secp256k1");
describe("account", function () {
    it("create", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rpc, beforeList, passphrase, account, afterList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("account-create") });
                    return [4 /*yield*/, rpc.account.getList()];
                case 1:
                    beforeList = _a.sent();
                    passphrase = "some passphrase " + Math.random();
                    return [4 /*yield*/, rpc.account.create({ passphrase: passphrase })];
                case 2:
                    account = _a.sent();
                    return [4 /*yield*/, rpc.account.getList({})];
                case 3:
                    afterList = _a.sent();
                    beforeList.push(account);
                    beforeList.sort();
                    afterList.sort();
                    expect(beforeList).deep.equal(afterList);
                    return [2 /*return*/];
            }
        });
    }); });
    it("importRaw", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rpc, beforeList, passphrase, randomPrivate, secret, account, afterList;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("account-importRaw") });
                    return [4 /*yield*/, rpc.account.getList({})];
                case 1:
                    beforeList = _a.sent();
                    passphrase = "some passphrase " + Math.random();
                    randomPrivate = secp256k1
                        .genKeyPair()
                        .getPrivate()
                        .toString("hex");
                    secret = "0x" + lodash_1.padStart(randomPrivate, 64, "0");
                    return [4 /*yield*/, rpc.account.importRaw({ secret: secret, passphrase: passphrase })];
                case 2:
                    account = _a.sent();
                    return [4 /*yield*/, rpc.account.getList()];
                case 3:
                    afterList = _a.sent();
                    beforeList.push(account);
                    beforeList.sort();
                    afterList.sort();
                    expect(beforeList).deep.equal(afterList);
                    return [2 /*return*/];
            }
        });
    }); });
    it("sign", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rpc, passphrase, randomKeyPair, randomPrivate, secret, account, message, signature, expected;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("account-sign") });
                    passphrase = "some passphrase " + Math.random();
                    randomKeyPair = secp256k1.genKeyPair();
                    randomPrivate = randomKeyPair.getPrivate().toString("hex");
                    secret = "0x" + lodash_1.padStart(randomPrivate, 64, "0");
                    return [4 /*yield*/, rpc.account.importRaw({ secret: secret, passphrase: passphrase })];
                case 1:
                    account = _a.sent();
                    message = Buffer.from("1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "hex").toString("hex");
                    return [4 /*yield*/, rpc.account.sign({ message: "0x" + message, account: account, passphrase: passphrase })];
                case 2:
                    signature = _a.sent();
                    expected = sign(randomKeyPair, message);
                    expect(signature).deep.equal(expected);
                    return [2 /*return*/];
            }
        });
    }); });
    it("cannot sign without passphrase", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rpc, passphrase, randomKeyPair, randomPrivate, secret, account, message;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("account-sign2") });
                    passphrase = "some passphrase " + Math.random();
                    randomKeyPair = secp256k1.genKeyPair();
                    randomPrivate = randomKeyPair.getPrivate().toString("hex");
                    secret = "0x" + lodash_1.padStart(randomPrivate, 64, "0");
                    return [4 /*yield*/, rpc.account.importRaw({ secret: secret, passphrase: passphrase })];
                case 1:
                    account = _a.sent();
                    message = Buffer.from("1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "hex").toString("hex");
                    return [4 /*yield*/, expect(rpc.account.sign({ message: "0x" + message, account: account, passphrase: null })).be.rejected];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("unlock", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rpc, passphrase, randomKeyPair, randomPrivate, secret, account, message, signature, expected;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("account-unlock") });
                    passphrase = "some passphrase " + Math.random();
                    randomKeyPair = secp256k1.genKeyPair();
                    randomPrivate = randomKeyPair.getPrivate().toString("hex");
                    secret = "0x" + lodash_1.padStart(randomPrivate, 64, "0");
                    return [4 /*yield*/, rpc.account.importRaw({ secret: secret, passphrase: passphrase })];
                case 1:
                    account = _a.sent();
                    message = Buffer.from("1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "hex").toString("hex");
                    return [4 /*yield*/, rpc.account.unlock({ account: account, passphrase: passphrase })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, rpc.account.sign({ message: "0x" + message, account: account, passphrase: null })];
                case 3:
                    signature = _a.sent();
                    expected = sign(randomKeyPair, message);
                    expect(signature).deep.equal(expected);
                    return [2 /*return*/];
            }
        });
    }); });
    it("unlock with duration", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rpc, passphrase, randomKeyPair, randomPrivate, secret, account, message, signature, expected;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("account-unlock2") });
                    passphrase = "some passphrase " + Math.random();
                    randomKeyPair = secp256k1.genKeyPair();
                    randomPrivate = randomKeyPair.getPrivate().toString("hex");
                    secret = "0x" + lodash_1.padStart(randomPrivate, 64, "0");
                    return [4 /*yield*/, rpc.account.importRaw({ secret: secret, passphrase: passphrase })];
                case 1:
                    account = _a.sent();
                    message = Buffer.from("1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "hex").toString("hex");
                    return [4 /*yield*/, rpc.account.unlock({ account: account, passphrase: passphrase, duration: 3 })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, rpc.account.sign({ message: "0x" + message, account: account, passphrase: null })];
                case 3:
                    signature = _a.sent();
                    expected = sign(randomKeyPair, message);
                    expect(signature).deep.equal(expected);
                    return [4 /*yield*/, wait(4000)];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, expect(rpc.account.sign({ message: "0x" + message, account: account, passphrase: null })).be.rejected];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it("changePassword", function () { return __awaiter(void 0, void 0, void 0, function () {
        var rpc, passphrase1, passphrase2, randomKeyPair, randomPrivate, secret, account, messageStr, expected, message, signature1, signature2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("account-changePassword") });
                    passphrase1 = "some passphrase " + Math.random();
                    passphrase2 = "another random passphrase " + Math.random();
                    randomKeyPair = secp256k1.genKeyPair();
                    randomPrivate = randomKeyPair.getPrivate().toString("hex");
                    secret = "0x" + lodash_1.padStart(randomPrivate, 64, "0");
                    return [4 /*yield*/, rpc.account.importRaw({ secret: secret, passphrase: passphrase1 })];
                case 1:
                    account = _a.sent();
                    messageStr = Buffer.from("1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "hex").toString("hex");
                    expected = sign(randomKeyPair, messageStr);
                    message = "0x" + messageStr;
                    return [4 /*yield*/, rpc.account.sign({ message: message, account: account, passphrase: passphrase1 })];
                case 2:
                    signature1 = _a.sent();
                    expect(signature1).deep.equal(expected);
                    return [4 /*yield*/, expect(rpc.account.sign({ message: message, account: account, passphrase: passphrase2 })).be.rejected];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, rpc.account.changePassword({ account: account, oldPassphrase: passphrase1, newPassphrase: passphrase2 })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, expect(rpc.account.sign({ message: message, account: account, passphrase: passphrase1 })).be.rejected];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, rpc.account.sign({ message: message, account: account, passphrase: passphrase2 })];
                case 6:
                    signature2 = _a.sent();
                    expect(signature2).deep.equal(expected);
                    return [2 /*return*/];
            }
        });
    }); });
});
function sign(keyPair, message) {
    var _a = keyPair.sign(message, { canonical: true }), r = _a.r, s = _a.s, recoveryParam = _a.recoveryParam;
    var paddedR = lodash_1.padStart(r.toString(16), 64, "0");
    var paddedS = lodash_1.padStart(s.toString(16), 64, "0");
    var paddedV = lodash_1.padStart(recoveryParam.toString(16), 2, "0");
    return "0x" + paddedR + paddedS + paddedV;
}
function wait(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}
