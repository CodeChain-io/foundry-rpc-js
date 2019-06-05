import RpcBase from "./base";

type Action = Object;
type UnsignedTransaction = {
    fee: string | number;
    networkId: string;
    seq: number | null;
    action: Action;
};

export default class Account extends RpcBase {
    constructor(node: string) {
        super(node);
    }

    async getList(_params?: {}, id?: string | number | null): Promise<string[]> {
        const method = "account_getList";
        const response = await this.call({ method, id });
        return response.result;
    }

    async create(params: { passphrase: string | null }, id?: string | number | null): Promise<string> {
        const method = "account_create";
        const { passphrase } = params;
        const response = await this.call({ method, id }, passphrase);
        return response.result;
    }

    async importRaw(
        params: { secret: string; passphrase: string | null },
        id?: string | number | null
    ): Promise<string> {
        const method = "account_importRaw";
        const { secret, passphrase } = params;
        const response = await this.call({ method, id }, secret, passphrase);
        return response.result;
    }

    async unlock(
        params: { account: string; passphrase: string | null; duration?: number | null },
        id?: string | number | null
    ): Promise<void> {
        const method = "account_unlock";
        const { account, passphrase } = params;
        const duration = params.duration == null ? null : params.duration;
        await this.call({ method, id }, account, passphrase, duration);
    }

    async sign(
        params: { message: string; account: string; passphrase: string | null },
        id?: string | number | null
    ): Promise<string> {
        const method = "account_sign";
        const { message, account, passphrase } = params;
        const response = await this.call({ method, id }, message, account, passphrase);
        return response.result;
    }

    async sendTransaction(
        params: { transaction: UnsignedTransaction; account: string; passphrase: string | null },
        id?: string | number | null
    ): Promise<{ hash: string; seq: number }> {
        const method = "account_sendTransaction";
        const { transaction, account, passphrase } = params;
        const response = await this.call({ method, id }, transaction, account, passphrase);
        return response.result;
    }

    async changePassword(
        params: { account: string; oldPassphrase: string | null; newPassphrase: string | null },
        id?: string | number | null
    ): Promise<void> {
        const method = "account_changePassword";
        const { account, oldPassphrase, newPassphrase } = params;
        await this.call({ method, id }, account, oldPassphrase, newPassphrase);
    }
}
