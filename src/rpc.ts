import RpcBase from "./base";

export default class Rpc extends RpcBase {
    constructor(node: string) {
        super(node);
    }

    async ping(_params?: {}, id?: string | number | null): Promise<void> {
        const method = "ping";
        await this.call({ method, id });
    }

    async version(_params?: {}, id?: string | number | null): Promise<string> {
        const method = "version";
        const response = await this.call({ method, id });
        return response.result;
    }

    async commitHash(
        _params?: {},
        id?: string | number | null
    ): Promise<string> {
        const method = "commitHash";
        const response = await this.call({ method, id });
        return response.result;
    }
}
