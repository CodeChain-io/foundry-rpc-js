export declare type MintAsset = {
    type: "mintAsset";
    network_id: string;
    shard_id: number;
    metadata: string;
    approver: string | null;
    registrar: string | null;
    allowed_script_hashes: string[];
    output: object;
    approvals: string[];
    tracker: string;
};
export declare type TransferAsset = {
    type: "transferAsset";
    network_id: string;
    burns: any[];
    inputs: any[];
    outputs: any[];
    orders: any[];
    metadata: string;
    approvals: string[];
    tracker: string;
    expiration: number | null;
};
export declare type ChangeAssetScheme = {
    type: "changeAssetScheme";
};
export declare type IncreaseAssetSupply = {
    type: "increaseAssetSupply";
};
export declare type UnwrapCCC = {
    type: "unwrapCCC";
};
export declare type WrapCCC = {
    type: "wrapCCC";
};
export declare type Pay = {
    type: "pay";
};
export declare type SetRegularKey = {
    type: "setRegularKey";
};
export declare type Store = {
    type: "store";
};
export declare type Remove = {
    type: "remove";
};
export declare type Custom = {
    type: "custom";
    networkId: string;
    handlerId: number | string;
    bytes: string;
};
export declare type Action = MintAsset | TransferAsset | ChangeAssetScheme | IncreaseAssetSupply | WrapCCC | UnwrapCCC | Pay | SetRegularKey | Store | Remove | Custom;
export declare type Transaction = {
    blockHash: string | null;
    blockNumber: number | null;
    transactionIndex: number | null;
    result: true | null;
    seq: number;
    fee: string | number;
    hash: string;
    networkId: string;
    sig: string;
    action: Action;
};
