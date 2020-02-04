import IdGenerator from "./idGenerator";
declare type Result = {
    jsonrpc: "2.0";
    result: any;
    id: string | number | null;
};
export default class RpcBase {
    private readonly node;
    private readonly idGenerator;
    constructor(node: string, idGenerator: IdGenerator | null);
    private id;
    call(options: {
        method: string;
        id?: number | string | null;
    }, ...params: ReadonlyArray<any>): Promise<Result>;
}
export {};
