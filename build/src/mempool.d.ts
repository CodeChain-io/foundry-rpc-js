import RpcBase from "./base";
import IdGenerator from "./idGenerator";
export default class Mempool extends RpcBase {
    constructor(node: string, idGenerator: IdGenerator | null);
    sendSignedTransaction(params: {
        tx: string;
    }, id?: string | number | null): Promise<string>;
    getErrorHint(params: {
        transactionHash: string;
    }, id?: string | number | null): Promise<string | null>;
    getTransactionResultsByTracker(params: {
        tracker: string;
    }, id?: string | number | null): Promise<boolean[]>;
    deleteAllPendingTransactions(id?: string | number | null): Promise<void>;
    getPendingTransactions(params?: {
        from?: number | null;
        to?: number | null;
    }, id?: string | number | null): Promise<{
        transactions: Object[];
        lastTimestamp: number;
    }>;
}
