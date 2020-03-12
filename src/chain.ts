import RpcBase from "./base";
import IdGenerator from "./idGenerator";
import { Transaction } from "./transaction";

export type Block = {
    author: string;
    extraData: number[];
    hash: string;
    number: number;
    parentHash: string;
    score: string | number;
    seal: number[][];
    stateRoot: string;
    nextValidatorSetHash: string;
    timestamp: number;
    transactions: Transaction[];
    transactionsRoot: string;
};

type UnsignedTransaction = Object;
type CommonParams = {
    [s: string]: string | number | null;
};

export default class Chain extends RpcBase {
    constructor(node: string, idGenerator: IdGenerator | null) {
        super(node, idGenerator);
    }

    async getBestBlockNumber(_params?: {}, id?: string | number | null): Promise<number> {
        const method = "chain_getBestBlockNumber";
        const response = await this.call({ method, id });
        return response.result;
    }

    async getBestBlockId(_params?: {}, id?: string | number | null): Promise<{ hash: string; number: number }> {
        const method = "chain_getBestBlockId";
        const response = await this.call({ method, id });
        return response.result;
    }

    async getBlockHash(params: { blockNumber: number }, id?: string | number | null): Promise<string> {
        const method = "chain_getBlockHash";
        const { blockNumber } = params;
        const response = await this.call({ method, id }, blockNumber);
        return response.result;
    }

    async getBlockByNumber(params: { blockNumber: number }, id?: string | number | null): Promise<Block | null> {
        const method = "chain_getBlockByNumber";
        const { blockNumber } = params;
        const response = await this.call({ method, id }, blockNumber);
        return response.result;
    }

    async getBlockByHash(params: { blockHash: string }, id?: string | number | null): Promise<Block | null> {
        const method = "chain_getBlockByHash";
        const { blockHash } = params;
        const response = await this.call({ method, id }, blockHash);
        return response.result;
    }

    async getBlockTransactionCountByHash(
        params: { blockHash: string },
        id?: string | number | null
    ): Promise<number | null> {
        const method = "chain_getBlockTransactionCountByHash";
        const { blockHash } = params;
        const response = await this.call({ method, id }, blockHash);
        return response.result;
    }

    async getTransaction(
        params: { transactionHash: string },
        id?: string | number | null
    ): Promise<Transaction | null> {
        const method = "chain_getTransaction";
        const { transactionHash } = params;
        const response = await this.call({ method, id }, transactionHash);
        return response.result;
    }

    async getTransactionSigner(
        params: { transactionHash: string },
        id?: string | number | null
    ): Promise<string | null> {
        const method = "chain_getTransactionSigner";
        const { transactionHash } = params;
        const response = await this.call({ method, id }, transactionHash);
        return response.result;
    }

    async containsTransaction(params: { transactionHash: string }, id?: string | number | null): Promise<boolean> {
        const method = "chain_containsTransaction";
        const { transactionHash } = params;
        const response = await this.call({ method, id }, transactionHash);
        return response.result;
    }

    async getTransactionByTracker(
        params: { tracker: string },
        id?: string | number | null
    ): Promise<Transaction | null> {
        const method = "chain_getTransactionByTracker";
        const { tracker } = params;
        const response = await this.call({ method, id }, tracker);
        return response.result;
    }

    async getSeq(
        params: { address: string; blockNumber?: number | null },
        id?: string | number | null
    ): Promise<number | null> {
        const method = "chain_getSeq";
        const { address } = params;
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, address, blockNumber);
        return response.result;
    }

    async getBalance(
        params: { address: string; blockNumber?: number | null },
        id?: string | number | null
    ): Promise<string | number | null> {
        const method = "chain_getBalance";
        const { address } = params;
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, address, blockNumber);
        return response.result;
    }

    async getGenesisAccounts(_params?: {}, id?: string | number | null): Promise<string[]> {
        const method = "chain_getGenesisAccounts";
        const response = await this.call({ method, id });
        return response.result;
    }

    async getNumberOfShards(
        params: { blockNumber?: number | null } = {},
        id?: string | number | null
    ): Promise<number | null> {
        const method = "chain_getNumberOfShards";
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, blockNumber);
        return response.result;
    }

    async getShardIdByHash(
        params: { transactionHash: string; blockNumber?: number | null },
        id?: string | number | null
    ): Promise<number | null> {
        const method = "chain_getShardIdByHash";
        const { transactionHash } = params;
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, transactionHash, blockNumber);
        return response.result;
    }

    async getShardRoot(
        params: { shardId: number; blockNumber?: number | null },
        id?: string | number | null
    ): Promise<string | null> {
        const method = "chain_getShardRoot";
        const { shardId } = params;
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, shardId, blockNumber);
        return response.result;
    }

    async getShardOwners(
        params: { shardId: number; blockNumber?: number | null },
        id?: string | number | null
    ): Promise<string[] | null> {
        const method = "chain_getShardOwners";
        const { shardId } = params;
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, shardId, blockNumber);
        return response.result;
    }

    async getShardUsers(
        params: { shardId: number; blockNumber?: number | null },
        id?: string | number | null
    ): Promise<string[] | null> {
        const method = "chain_getShardUsers";
        const { shardId } = params;
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, shardId, blockNumber);
        return response.result;
    }

    async getMiningReward(
        params: { blockNumber?: number | null },
        id?: string | number | null
    ): Promise<string | number | null> {
        const method = "chain_getMiningReward";
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, blockNumber);
        return response.result;
    }

    async getMinTransactionFee(
        params: { transactionType: string; blockNumber?: number | null },
        id?: string | number | null
    ): Promise<number | null> {
        const method = "chain_getMinTransactionFee";
        const { transactionType } = params;
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, transactionType, blockNumber);
        return response.result;
    }

    async getCommonParams(
        params: { blockNumber?: number | null },
        id?: string | number | null
    ): Promise<CommonParams | null> {
        const method = "chain_getCommonParams";
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, blockNumber);
        return response.result;
    }

    async getTermMetadata(
        params: { blockNumber?: number | null },
        id?: string | number | null
    ): Promise<[number, number] | null> {
        const method = "chain_getTermMetadata";
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, blockNumber);
        return response.result;
    }

    async executeTransaction(
        params: { transaction: UnsignedTransaction; sender: string },
        id?: string | number | null
    ): Promise<string | null> {
        const method = "chain_executeTransaction";
        const { transaction, sender } = params;
        const response = await this.call({ method, id }, transaction, sender);
        return response.result;
    }

    async getNetworkId(_params?: {}, id?: string | number | null): Promise<string> {
        const method = "chain_getNetworkId";
        const response = await this.call({ method, id });
        return response.result;
    }

    async getPossibleAuthors(
        params: { blockNumber?: number | null },
        id?: string | number | null
    ): Promise<string[] | null> {
        const method = "chain_getPossibleAuthors";
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, blockNumber);
        return response.result;
    }

    async getMetadataSeq(params: { blockNumber?: number | null }, id?: string | number | null): Promise<number | null> {
        const method = "chain_getMetadataSeq";
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, blockNumber);
        return response.result;
    }
}
