import RpcBase from "./base";
import IdGenerator from "./idGenerator";
export default class Devel extends RpcBase {
    constructor(node: string, idGenerator: IdGenerator | null);
    getStateTrieKeys(params: {
        offset: number;
        limit: number;
    }, id?: string | number | null): Promise<string[]>;
    getStateTrieValue(params: {
        key: string;
    }, id?: string | number | null): Promise<string[]>;
    startSealing(_params?: {}, id?: string | number | null): Promise<void>;
    stopSealing(_params?: {}, id?: string | number | null): Promise<void>;
    getBlockSyncPeers(_params?: {}, id?: string | number | null): Promise<string[]>;
    developSnapshot(_params: {
        hash: string;
    }, id?: string | number | null): Promise<void>;
    testTPS(params: {
        count: number;
        seed: number;
        option: "payOnly" | "transferSingle" | "transferMultiple" | "payOrTransfer";
    }, id?: string | number | null): Promise<number>;
}
