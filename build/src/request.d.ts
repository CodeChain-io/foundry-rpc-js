import { Response } from "node-fetch";
declare type Body = {
    jsonrpc: "2.0";
    method: string;
    params: ReadonlyArray<any>;
    id: string | number | null;
};
export default function request(node: string, body: Body): Promise<Response>;
export {};
