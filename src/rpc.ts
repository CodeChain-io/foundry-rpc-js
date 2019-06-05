import RpcBase from "./base";
import Account from "./account";
import IdGenerator from "./idGenerator";

export default class Rpc extends RpcBase {
    public readonly account: Account;

    constructor(node: string, options: { id?: IdGenerator } = {}) {
        const idGenerator = options.id || null;
        super(node, idGenerator);
        this.account = new Account(node, idGenerator);
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

    async commitHash(_params?: {}, id?: string | number | null): Promise<string> {
        const method = "commitHash";
        const response = await this.call({ method, id });
        return response.result;
    }
}
