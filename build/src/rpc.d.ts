import RpcBase from "./base";
import Account from "./account";
import IdGenerator from "./idGenerator";
import Devel from "./devel";
import Net from "./net";
import Engine from "./engine";
import Mempool from "./mempool";
import Chain from "./chain";
export default class Rpc extends RpcBase {
    readonly account: Account;
    readonly chain: Chain;
    readonly engine: Engine;
    readonly mempool: Mempool;
    readonly net: Net;
    readonly devel?: Devel;
    constructor(node: string, options?: {
        id?: IdGenerator;
        devel?: boolean;
    });
    ping(_params?: {}, id?: string | number | null): Promise<string>;
    version(_params?: {}, id?: string | number | null): Promise<string>;
    commitHash(_params?: {}, id?: string | number | null): Promise<string>;
}
