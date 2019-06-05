import Rpc from "../src";
import "mocha";
import generator from "./generator";

describe("ping", () => {
    it("without id", async () => {
        const rpc = new Rpc("http://localhost:8080", { id: generator("ping1") });
        await rpc.ping();
    });

    it("with number id", async () => {
        const rpc = new Rpc("http://localhost:8080", { id: generator("ping2") });
        const id = Math.floor(Math.random() * 1000);
        await rpc.ping({}, id);
    });

    it("with string id", async () => {
        const rpc = new Rpc("http://localhost:8080", { id: generator("ping3") });
        const id = "string id";
        await rpc.ping({}, id);
    });
});
