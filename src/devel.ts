import RpcBase from "./base";
import IdGenerator from "./idGenerator";

export default class Devel extends RpcBase {
    constructor(node: string, idGenerator: IdGenerator | null) {
        super(node, idGenerator);
    }

    async getStateTrieKeys(params: { offset: number; limit: number }, id?: string | number | null): Promise<string[]> {
        const method = "devel_getStateTrieKeys";
        const { offset, limit } = params;
        const response = await this.call({ method, id }, offset, limit);
        return response.result;
    }

    async getStateTrieValue(params: { key: string }, id?: string | number | null): Promise<string[]> {
        const method = "devel_getStateTrieValue";
        const { key } = params;
        const response = await this.call({ method, id }, key);
        return response.result;
    }

    async startSealing(_params?: {}, id?: string | number | null): Promise<void> {
        const method = "devel_startSealing";
        const response = await this.call({ method, id });
        return response.result;
    }

    async stopSealing(_params?: {}, id?: string | number | null): Promise<void> {
        const method = "devel_stopSealing";
        const response = await this.call({ method, id });
        return response.result;
    }

    async getBlockSyncPeers(_params?: {}, id?: string | number | null): Promise<string[]> {
        const method = "devel_getBlockSyncPeers";
        const response = await this.call({ method, id });
        return response.result;
    }

    async testTPS(
        params: {
            count: number;
            seed: number;
            option: "payOnly" | "transferSingle" | "transferMultiple" | "payOrTransfer";
        },
        id?: string | number | null
    ): Promise<number> {
        const method = "devel_testTPS";
        const { count, seed, option } = params;
        const response = await this.call({ method, id }, { count, seed, option });
        return response.result;
    }
}
