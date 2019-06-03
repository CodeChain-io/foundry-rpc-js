import call from "./call";

type Result = {
    jsonrpc: "2.0";
    result: any;
    id: string | number | null;
};

export default class RpcBase {
    private readonly node: string;
    constructor(node: string) {
        this.node = node;
    }

    async call(
        options: { method: string; id?: number | string | null },
        ...params: ReadonlyArray<any>
    ): Promise<Result> {
        const response = await call(
            {
                node: this.node,
                ...options
            },
            ...params
        );
        const json = JSON.parse(response);
        if (json.error != null) {
            throw json;
        }
        return json;
    }
}
