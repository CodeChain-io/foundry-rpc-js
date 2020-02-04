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
var Account = /** @class */ (function (_super) {
    __extends(Account, _super);
    function Account(node, idGenerator) {
        return _super.call(this, node, idGenerator) || this;
    }
    Account.prototype.getList = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "account_getList";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Account.prototype.create = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, passphrase, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "account_create";
                        passphrase = params.passphrase;
                        return [4 /*yield*/, this.call({ method: method, id: id }, passphrase)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Account.prototype.importRaw = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, secret, passphrase, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "account_importRaw";
                        secret = params.secret, passphrase = params.passphrase;
                        return [4 /*yield*/, this.call({ method: method, id: id }, secret, passphrase)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Account.prototype.unlock = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, account, passphrase, duration;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "account_unlock";
                        account = params.account, passphrase = params.passphrase;
                        duration = params.duration == null ? null : params.duration;
                        return [4 /*yield*/, this.call({ method: method, id: id }, account, passphrase, duration)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Account.prototype.sign = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, message, account, passphrase, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "account_sign";
                        message = params.message, account = params.account, passphrase = params.passphrase;
                        return [4 /*yield*/, this.call({ method: method, id: id }, message, account, passphrase)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Account.prototype.sendTransaction = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, transaction, account, passphrase, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "account_sendTransaction";
                        transaction = params.transaction, account = params.account, passphrase = params.passphrase;
                        return [4 /*yield*/, this.call({ method: method, id: id }, transaction, account, passphrase)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Account.prototype.changePassword = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, account, oldPassphrase, newPassphrase;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "account_changePassword";
                        account = params.account, oldPassphrase = params.oldPassphrase, newPassphrase = params.newPassphrase;
                        return [4 /*yield*/, this.call({ method: method, id: id }, account, oldPassphrase, newPassphrase)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Account;
}(base_1.default));
exports.default = Account;
