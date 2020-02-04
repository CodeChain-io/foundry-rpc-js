export default function call(option: {
    node: string;
    method: string;
    id?: number | string | null;
}, ...params: ReadonlyArray<any>): Promise<string>;
