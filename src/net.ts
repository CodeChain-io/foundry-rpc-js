import RpcBase from "./base";
import IdGenerator from "./idGenerator";

export default class Net extends RpcBase {
    constructor(node: string, idGenerator: IdGenerator | null) {
        super(node, idGenerator);
    }

    async localKeyFor(params: { address: string; port: number }, id?: string | number | null): Promise<string> {
        const method = "net_localKeyFor";
        const { address, port } = params;
        const response = await this.call({ method, id }, address, port);
        return response.result;
    }
    async registerRemoteKeyFor(
        params: { address: string; port: number; remotePublicKey: string },
        id?: string | number | null
    ): Promise<string> {
        const method = "net_registerRemoteKeyFor";
        const { address, port, remotePublicKey } = params;
        const response = await this.call({ method, id }, address, port, remotePublicKey);
        return response.result;
    }
    async connect(params: { address: string; port: number }, id?: string | number | null): Promise<void> {
        const method = "net_connect";
        const { address, port } = params;
        await this.call({ method, id }, address, port);
    }
    async isConnected(params: { address: string; port: number }, id?: string | number | null): Promise<boolean> {
        const method = "net_isConnected";
        const { address, port } = params;
        const response = await this.call({ method, id }, address, port);
        return response.result;
    }
    async disconnect(params: { address: string; port: number }, id?: string | number | null): Promise<void> {
        const method = "net_disconnect";
        const { address, port } = params;
        await this.call({ method, id }, address, port);
    }
    async getPeerCount(_params?: {}, id?: string | number | null): Promise<number> {
        const method = "net_getPeerCount";
        const response = await this.call({ method, id });
        return response.result;
    }
    async getEstablishedPeers(_params?: {}, id?: string | number | null): Promise<string[]> {
        const method = "net_getEstablishedPeers";
        const response = await this.call({ method, id });
        return response.result;
    }
    async getPort(_params?: {}, id?: string | number | null): Promise<number> {
        const method = "net_getPort";
        const response = await this.call({ method, id });
        return response.result;
    }
    async addToWhitelist(params: { address: string; tag?: string | null }, id?: string | number | null): Promise<void> {
        const method = "net_addToWhitelist";
        const { address, tag } = params;
        await this.call({ method, id }, address, tag);
    }
    async removeFromWhitelist(params: { address: string }, id?: string | number | null): Promise<void> {
        const method = "net_removeFromWhitelist";
        const { address } = params;
        await this.call({ method, id }, address);
    }
    async addToBlacklist(params: { address: string; tag?: string | null }, id?: string | number | null): Promise<void> {
        const method = "net_addToBlacklist";
        const { address, tag } = params;
        await this.call({ method, id }, address, tag);
    }
    async removeFromBlacklist(params: { address: string }, id?: string | number | null): Promise<void> {
        const method = "net_removeFromBlacklist";
        const { address } = params;
        await this.call({ method, id }, address);
    }
    async enableWhitelist(_params?: {}, id?: string | number | null): Promise<void> {
        const method = "net_enableWhitelist";
        await this.call({ method, id });
    }
    async disableWhitelist(_params?: {}, id?: string | number | null): Promise<void> {
        const method = "net_disableWhitelist";
        await this.call({ method, id });
    }
    async enableBlacklist(_params?: {}, id?: string | number | null): Promise<void> {
        const method = "net_enableBlacklist";
        await this.call({ method, id });
    }
    async disableBlacklist(_params?: {}, id?: string | number | null): Promise<void> {
        const method = "net_disableBlacklist";
        await this.call({ method, id });
    }
    async getWhitelist(_params?: {}, id?: string | number | null): Promise<{ list: string[][]; enabled: boolean }> {
        const method = "net_getWhitelist";
        const response = await this.call({ method, id });
        return response.result;
    }
    async getBlacklist(_params?: {}, id?: string | number | null): Promise<{ list: string[][]; enabled: boolean }> {
        const method = "net_getBlacklist";
        const response = await this.call({ method, id });
        return response.result;
    }
    async recentNetworkUsage(_params?: {}, id?: string | number | null): Promise<{ [_: string]: number }> {
        const method = "net_recentNetworkUsage";
        const response = await this.call({ method, id });
        return response.result;
    }
}
