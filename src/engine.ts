import RpcBase from "./base";
import IdGenerator from "./idGenerator";

export default class Engine extends RpcBase {
    constructor(node: string, idGenerator: IdGenerator | null) {
        super(node, idGenerator);
    }

    async getCoinbase(_params?: {}, id?: string | number | null): Promise<string | null> {
        const method = "engine_getCoinbase";
        const response = await this.call({ method, id });
        return response.result;
    }

    async getBlockReward(params: { blockNumber: number }, id?: string | number | null): Promise<string | number> {
        const method = "engine_getBlockReward";
        const { blockNumber } = params;
        const response = await this.call({ method, id }, blockNumber);
        return response.result;
    }

    async getRecommendedConfirmation(_params?: {}, id?: string | number | null): Promise<number> {
        const method = "engine_getRecommendedConfirmation";
        const response = await this.call({ method, id });
        return response.result;
    }

    async getCustomActionData(
        params: { handlerId: number; bytes: string; blockNumber?: number | null },
        id?: string | number | null
    ): Promise<number> {
        const method = "engine_getCustomActionData";
        const { handlerId, bytes } = params;
        const blockNumber = params.blockNumber == null ? null : params.blockNumber;
        const response = await this.call({ method, id }, handlerId, bytes, blockNumber);
        return response.result;
    }
}
