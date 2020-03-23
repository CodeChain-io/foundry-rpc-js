import call from "./call";
import IdGenerator from "./idGenerator";

type Result = {
    jsonrpc: "2.0";
    result: any;
    id: string | number | null;
};

export default class RpcBase {
    private readonly node: string;
    private readonly idGenerator: IdGenerator | null;
    constructor(node: string, idGenerator: IdGenerator | null) {
        this.node = node;
        this.idGenerator = idGenerator;
    }

    private id(options: { method: string; id?: number | string | null }): number | string | null {
        if (options.id !== undefined) {
            return options.id;
        }
        if (this.idGenerator) {
            return this.idGenerator(options.method);
        }
        return null;
    }

    async call(
        options: { method: string; id?: number | string | null },
        ...params: ReadonlyArray<any>
    ): Promise<Result> {
        const { method } = options;
        const id = this.id(options);
        const response = await call(
            {
                node: this.node,
                method,
                id
            },
            ...params
        );
        const json = JSON.parse(response);
        if (json.error != null) {
            throw json.error;
        }
        return json;
    }
}
