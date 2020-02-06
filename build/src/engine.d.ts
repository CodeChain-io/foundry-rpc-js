import RpcBase from "./base";
import IdGenerator from "./idGenerator";
export default class Engine extends RpcBase {
    constructor(node: string, idGenerator: IdGenerator | null);
    getCoinbase(_params?: {}, id?: string | number | null): Promise<string | null>;
    getBlockReward(params: {
        blockNumber: number;
    }, id?: string | number | null): Promise<string | number>;
    getRecommendedConfirmation(_params?: {}, id?: string | number | null): Promise<number>;
    getCustomActionData(params: {
        handlerId: number;
        bytes: string;
        blockNumber?: number | null;
    }, id?: string | number | null): Promise<string>;
}
