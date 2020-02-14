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
var account_1 = require("./account");
var devel_1 = require("./devel");
var net_1 = require("./net");
var engine_1 = require("./engine");
var mempool_1 = require("./mempool");
var chain_1 = require("./chain");
var Rpc = /** @class */ (function (_super) {
    __extends(Rpc, _super);
    function Rpc(node, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        var idGenerator = options.id || null;
        _this = _super.call(this, node, idGenerator) || this;
        _this.account = new account_1.default(node, idGenerator);
        _this.chain = new chain_1.default(node, idGenerator);
        _this.engine = new engine_1.default(node, idGenerator);
        _this.mempool = new mempool_1.default(node, idGenerator);
        _this.net = new net_1.default(node, idGenerator);
        if (options.devel === true) {
            _this.devel = new devel_1.default(node, idGenerator);
        }
        return _this;
    }
    Rpc.prototype.ping = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "ping";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Rpc.prototype.version = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "version";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Rpc.prototype.commitHash = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "commitHash";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    return Rpc;
}(base_1.default));
exports.default = Rpc;
