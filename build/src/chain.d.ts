import RpcBase from "./base";
import IdGenerator from "./idGenerator";
import { Transaction } from "./transaction";
export declare type Block = {
    author: string;
    extraData: number[];
    hash: string;
    number: number;
    parentHash: string;
    score: string | number;
    seal: number[][];
    stateRoot: string;
    validatorSetRoot: string;
    timestamp: number;
    transactions: Transaction[];
    transactionsRoot: string;
};
declare type UnsignedTransaction = Object;
declare type CommonParams = {
    [s: string]: string | number | null;
};
export default class Chain extends RpcBase {
    constructor(node: string, idGenerator: IdGenerator | null);
    getBestBlockNumber(_params?: {}, id?: string | number | null): Promise<number>;
    getBestBlockId(_params?: {}, id?: string | number | null): Promise<{
        hash: string;
        number: number;
    }>;
    getBlockHash(params: {
        blockNumber: number;
    }, id?: string | number | null): Promise<string>;
    getBlockByNumber(params: {
        blockNumber: number;
    }, id?: string | number | null): Promise<Block | null>;
    getBlockByHash(params: {
        blockHash: string;
    }, id?: string | number | null): Promise<Block | null>;
    getBlockTransactionCountByHash(params: {
        blockHash: string;
    }, id?: string | number | null): Promise<number | null>;
    getTransaction(params: {
        transactionHash: string;
    }, id?: string | number | null): Promise<Transaction | null>;
    getTransactionSigner(params: {
        transactionHash: string;
    }, id?: string | number | null): Promise<string | null>;
    containsTransaction(params: {
        transactionHash: string;
    }, id?: string | number | null): Promise<boolean>;
    getTransactionByTracker(params: {
        tracker: string;
    }, id?: string | number | null): Promise<Transaction | null>;
    getSeq(params: {
        address: string;
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<number | null>;
    getBalance(params: {
        address: string;
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<string | number | null>;
    getRegularKey(params: {
        address: string;
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<string | null>;
    getRegularKeyOwner(params: {
        publicKey: string;
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<string | null>;
    getGenesisAccounts(_params?: {}, id?: string | number | null): Promise<string[]>;
    getNumberOfShards(params?: {
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<number | null>;
    getShardIdByHash(params: {
        transactionHash: string;
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<number | null>;
    getShardRoot(params: {
        shardId: number;
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<string | null>;
    getShardOwners(params: {
        shardId: number;
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<string[] | null>;
    getShardUsers(params: {
        shardId: number;
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<string[] | null>;
    getMiningReward(params: {
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<string | number | null>;
    getMinTransactionFee(params: {
        transactionType: string;
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<number | null>;
    getCommonParams(params: {
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<CommonParams | null>;
    getTermMetadata(params: {
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<[number, number] | null>;
    executeTransaction(params: {
        transaction: UnsignedTransaction;
        sender: string;
    }, id?: string | number | null): Promise<string | null>;
    getNetworkId(_params?: {}, id?: string | number | null): Promise<string>;
    getPossibleAuthors(params: {
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<string[] | null>;
    getMetadataSeq(params: {
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<number | null>;
}
export {};
