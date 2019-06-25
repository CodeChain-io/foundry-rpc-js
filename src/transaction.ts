export type MintAsset = {
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

export type TransferAsset = {
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

export type ChangeAssetScheme = {
    type: "changeAssetScheme";
    // FIXME: declare other fields
};

export type IncreaseAssetSupply = {
    type: "increaseAssetSupply";
    // FIXME: declare other fields
};

export type UnwrapCCC = {
    type: "unwrapCCC";
    // FIXME: declare other fields
};

export type WrapCCC = {
    type: "wrapCCC";
    // FIXME: declare other fields
};

export type Pay = {
    type: "pay";
    // FIXME: declare other fields
};

export type SetRegularKey = {
    type: "setRegularKey";
    // FIXME: declare other fields
};

export type Store = {
    type: "store";
    // FIXME: declare other fields
};

export type Remove = {
    type: "remove";
    // FIXME: declare other fields
};

export type Custom = {
    type: "custom";
    networkId: string;
    handlerId: number | string;
    bytes: string;
};

export type Action =
    | MintAsset
    | TransferAsset
    | ChangeAssetScheme
    | IncreaseAssetSupply
    | WrapCCC
    | UnwrapCCC
    | Pay
    | SetRegularKey
    | Store
    | Remove
    | Custom;

export type Transaction = {
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
