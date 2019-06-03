import request from "./request";

export default async function call(
    option: { node: string; method: string; id?: number | string | null },
    ...params: ReadonlyArray<any>
): Promise<string> {
    const { node, method } = option;
    const id = option.id == null ? null : option.id;
    const response = await request(node, {
        jsonrpc: "2.0",
        method,
        params,
        id
    });
    return response.text();
}
