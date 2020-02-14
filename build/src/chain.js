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
var Chain = /** @class */ (function (_super) {
    __extends(Chain, _super);
    function Chain(node, idGenerator) {
        return _super.call(this, node, idGenerator) || this;
    }
    Chain.prototype.getBestBlockNumber = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getBestBlockNumber";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getBestBlockId = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getBestBlockId";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getBlockHash = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getBlockHash";
                        blockNumber = params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getBlockByNumber = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getBlockByNumber";
                        blockNumber = params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getBlockByHash = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, blockHash, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getBlockByHash";
                        blockHash = params.blockHash;
                        return [4 /*yield*/, this.call({ method: method, id: id }, blockHash)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getBlockTransactionCountByHash = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, blockHash, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getBlockTransactionCountByHash";
                        blockHash = params.blockHash;
                        return [4 /*yield*/, this.call({ method: method, id: id }, blockHash)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getTransaction = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, transactionHash, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getTransaction";
                        transactionHash = params.transactionHash;
                        return [4 /*yield*/, this.call({ method: method, id: id }, transactionHash)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getTransactionSigner = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, transactionHash, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getTransactionSigner";
                        transactionHash = params.transactionHash;
                        return [4 /*yield*/, this.call({ method: method, id: id }, transactionHash)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.containsTransaction = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, transactionHash, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_containsTransaction";
                        transactionHash = params.transactionHash;
                        return [4 /*yield*/, this.call({ method: method, id: id }, transactionHash)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getTransactionByTracker = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, tracker, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getTransactionByTracker";
                        tracker = params.tracker;
                        return [4 /*yield*/, this.call({ method: method, id: id }, tracker)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getSeq = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, address, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getSeq";
                        address = params.address;
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, address, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getBalance = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, address, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getBalance";
                        address = params.address;
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, address, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getRegularKey = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, address, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getRegularKey";
                        address = params.address;
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, address, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getRegularKeyOwner = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, publicKey, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getRegularKeyOwner";
                        publicKey = params.publicKey;
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, publicKey, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getGenesisAccounts = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getGenesisAccounts";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getNumberOfShards = function (params, id) {
        if (params === void 0) { params = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var method, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getNumberOfShards";
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getShardIdByHash = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, transactionHash, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getShardIdByHash";
                        transactionHash = params.transactionHash;
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, transactionHash, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getShardRoot = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, shardId, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getShardRoot";
                        shardId = params.shardId;
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, shardId, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getShardOwners = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, shardId, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getShardOwners";
                        shardId = params.shardId;
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, shardId, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getShardUsers = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, shardId, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getShardUsers";
                        shardId = params.shardId;
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, shardId, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getMiningReward = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getMiningReward";
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getMinTransactionFee = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, transactionType, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getMinTransactionFee";
                        transactionType = params.transactionType;
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, transactionType, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getCommonParams = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getCommonParams";
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getTermMetadata = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getTermMetadata";
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.executeTransaction = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, transaction, sender, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_executeTransaction";
                        transaction = params.transaction, sender = params.sender;
                        return [4 /*yield*/, this.call({ method: method, id: id }, transaction, sender)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getNetworkId = function (_params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getNetworkId";
                        return [4 /*yield*/, this.call({ method: method, id: id })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getPossibleAuthors = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getPossibleAuthors";
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    Chain.prototype.getMetadataSeq = function (params, id) {
        return __awaiter(this, void 0, void 0, function () {
            var method, blockNumber, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = "chain_getMetadataSeq";
                        blockNumber = params.blockNumber == null ? null : params.blockNumber;
                        return [4 /*yield*/, this.call({ method: method, id: id }, blockNumber)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.result];
                }
            });
        });
    };
    return Chain;
}(base_1.default));
exports.default = Chain;
