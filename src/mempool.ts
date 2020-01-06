import RpcBase from "./base";
import IdGenerator from "./idGenerator";

export default class Mempool extends RpcBase {
    constructor(node: string, idGenerator: IdGenerator | null) {
        super(node, idGenerator);
    }

    async sendSignedTransaction(params: { tx: string }, id?: string | number | null): Promise<string> {
        const method = "mempool_sendSignedTransaction";
        const { tx } = params;
        const response = await this.call({ method, id }, tx);
        return response.result;
    }

    async getErrorHint(params: { transactionHash: string }, id?: string | number | null): Promise<string | null> {
        const method = "mempool_getErrorHint";
        const { transactionHash } = params;
        const response = await this.call({ method, id }, transactionHash);
        return response.result;
    }

    async getTransactionResultsByTracker(params: { tracker: string }, id?: string | number | null): Promise<boolean[]> {
        const method = "mempool_getTransactionResultsByTracker";
        const { tracker } = params;
        const response = await this.call({ method, id }, tracker);
        return response.result;
    }

    async deleteAllPendingTransactions(id?: string | number | null): Promise<void> {
        const method = "mempool_deleteAllPendingTransactions";
        await this.call({ method, id });
    }

    async getPendingTransactions(
        params: { from?: number | null; to?: number | null } = {},
        id?: string | number | null
    ): Promise<{ transactions: Object[]; lastTimestamp: number }> {
        const method = "mempool_getPendingTransactions";
        const from = params.from == null ? null : params.from;
        const to = params.to == null ? null : params.to;
        const response = await this.call({ method, id }, from, to);
        return response.result;
    }
}
