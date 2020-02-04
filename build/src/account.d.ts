import RpcBase from "./base";
import IdGenerator from "./idGenerator";
declare type Action = Object;
declare type UnsignedTransaction = {
    fee: string | number;
    networkId: string;
    seq: number | null;
    action: Action;
};
export default class Account extends RpcBase {
    constructor(node: string, idGenerator: IdGenerator | null);
    getList(_params?: {}, id?: string | number | null): Promise<string[]>;
    create(params: {
        passphrase: string | null;
    }, id?: string | number | null): Promise<string>;
    importRaw(params: {
        secret: string;
        passphrase: string | null;
    }, id?: string | number | null): Promise<string>;
    unlock(params: {
        account: string;
        passphrase: string | null;
        duration?: number | null;
    }, id?: string | number | null): Promise<void>;
    sign(params: {
        message: string;
        account: string;
        passphrase: string | null;
    }, id?: string | number | null): Promise<string>;
    sendTransaction(params: {
        transaction: UnsignedTransaction;
        account: string;
        passphrase: string | null;
    }, id?: string | number | null): Promise<{
        hash: string;
        seq: number;
    }>;
    changePassword(params: {
        account: string;
        oldPassphrase: string | null;
        newPassphrase: string | null;
    }, id?: string | number | null): Promise<void>;
}
export {};
