import { Response } from "node-fetch";
import fetch from "node-fetch";

type Body = {
    jsonrpc: "2.0";
    method: string;
    params: ReadonlyArray<any>;
    id: string | number | null;
};

export default function request(node: string, body: Body): Promise<Response> {
    return fetch(node, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
}
