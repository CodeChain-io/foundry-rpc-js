import RpcBase from "./base";
import Account from "./account";
import IdGenerator from "./idGenerator";
import Devel from "./devel";
import Net from "./net";
import Engine from "./engine";
import Mempool from "./mempool";

export default class Rpc extends RpcBase {
    public readonly account: Account;
    public readonly engine: Engine;
    public readonly mempool: Mempool;
    public readonly net: Net;
    public readonly devel?: Devel;

    constructor(node: string, options: { id?: IdGenerator; devel?: boolean } = {}) {
        const idGenerator = options.id || null;
        super(node, idGenerator);
        this.account = new Account(node, idGenerator);
        this.engine = new Engine(node, idGenerator);
        this.mempool = new Mempool(node, idGenerator);
        this.net = new Net(node, idGenerator);
        if (options.devel === true) {
            this.devel = new Devel(node, idGenerator);
        }
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
