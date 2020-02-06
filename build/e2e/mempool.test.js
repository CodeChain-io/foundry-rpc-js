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
var chai_1 = require("chai");
var generator_1 = require("./generator");
var assert_1 = require("assert");
describe("mempool", function () {
    it("error hint", function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpc, transactionHash, hint;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("mempool-error-hint") });
                        transactionHash = "0x" + randomHexString(64);
                        return [4 /*yield*/, rpc.mempool.getErrorHint({ transactionHash: transactionHash })];
                    case 1:
                        hint = _a.sent();
                        chai_1.expect(hint).is.null;
                        return [2 /*return*/];
                }
            });
        });
    });
    it("transaction results by tracker", function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpc, tracker, results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("mempool-transaction-results-by-tracker") });
                        tracker = "0x" + randomHexString(64);
                        return [4 /*yield*/, rpc.mempool.getTransactionResultsByTracker({ tracker: tracker })];
                    case 1:
                        results = _a.sent();
                        chai_1.expect(results).deep.equal([]);
                        return [2 /*return*/];
                }
            });
        });
    });
    it("pending transactions", function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpc, _a, transactions, lastTimestamp;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("mempool-pending-transactions") });
                        return [4 /*yield*/, rpc.mempool.getPendingTransactions()];
                    case 1:
                        _a = _b.sent(), transactions = _a.transactions, lastTimestamp = _a.lastTimestamp;
                        chai_1.expect(transactions).deep.equal([]);
                        chai_1.expect(lastTimestamp).is.null;
                        return [2 /*return*/];
                }
            });
        });
    });
    it("delete pending transactions", function () {
        return __awaiter(this, void 0, void 0, function () {
            var rpc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rpc = new src_1.default("http://localhost:8080", { id: generator_1.default("mempool-delete-pending-transactions") });
                        return [4 /*yield*/, rpc.mempool.deleteAllPendingTransactions()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    });
});
function randomHexString(length) {
    assert_1.strictEqual(length % 2, 0);
    var buffer = Buffer.alloc(length / 2);
    for (var i = 0; i < length / 2; i += 1) {
        buffer[i] = Math.floor(Math.random() * 256);
    }
    return buffer.toString("hex");
}