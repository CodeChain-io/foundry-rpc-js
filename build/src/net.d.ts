import RpcBase from "./base";
import IdGenerator from "./idGenerator";
export default class Net extends RpcBase {
    constructor(node: string, idGenerator: IdGenerator | null);
    localKeyFor(params: {
        address: string;
        port: number;
    }, id?: string | number | null): Promise<string>;
    registerRemoteKeyFor(params: {
        address: string;
        port: number;
        remotePublicKey: string;
    }, id?: string | number | null): Promise<string>;
    connect(params: {
        address: string;
        port: number;
    }, id?: string | number | null): Promise<void>;
    isConnected(params: {
        address: string;
        port: number;
    }, id?: string | number | null): Promise<boolean>;
    disconnect(params: {
        address: string;
        port: number;
    }, id?: string | number | null): Promise<void>;
    getPeerCount(_params?: {}, id?: string | number | null): Promise<number>;
    getEstablishedPeers(_params?: {}, id?: string | number | null): Promise<string[]>;
    getPort(_params?: {}, id?: string | number | null): Promise<number>;
    addToWhitelist(params: {
        address: string;
        tag?: string | null;
    }, id?: string | number | null): Promise<void>;
    removeFromWhitelist(params: {
        address: string;
    }, id?: string | number | null): Promise<void>;
    addToBlacklist(params: {
        address: string;
        tag?: string | null;
    }, id?: string | number | null): Promise<void>;
    removeFromBlacklist(params: {
        address: string;
    }, id?: string | number | null): Promise<void>;
    enableWhitelist(_params?: {}, id?: string | number | null): Promise<void>;
    disableWhitelist(_params?: {}, id?: string | number | null): Promise<void>;
    enableBlacklist(_params?: {}, id?: string | number | null): Promise<void>;
    disableBlacklist(_params?: {}, id?: string | number | null): Promise<void>;
    getWhitelist(_params?: {}, id?: string | number | null): Promise<{
        list: string[][];
        enabled: boolean;
    }>;
    getBlacklist(_params?: {}, id?: string | number | null): Promise<{
        list: string[][];
        enabled: boolean;
    }>;
    recentNetworkUsage(_params?: {}, id?: string | number | null): Promise<{
        [_: string]: number;
    }>;
}
