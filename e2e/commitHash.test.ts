import Rpc from "../src";
import "mocha";
import { expect } from "chai";
import generator from "./generator";

describe("commitHash", () => {
    it("without id", async () => {
        const rpc = new Rpc("http://localhost:8080", { id: generator("commitHash1") });
        const result = await rpc.commitHash({});
        expect(result).to.match(/^[a-fA-F0-9]{40}$/);
        expect(result).equal(await rpc.commitHash());
    });

    it("with number id", async () => {
        const rpc = new Rpc("http://localhost:8080", { id: generator("commitHash2") });
        const id = Math.floor(Math.random() * 1000);
        const result = await rpc.commitHash({}, id);
        expect(result).to.match(/^[a-fA-F0-9]{40}$/);
        expect(result).equal(await rpc.commitHash());
    });

    it("with string id", async () => {
        const rpc = new Rpc("http://localhost:8080", { id: generator("commitHash3") });
        const id = "string id";
        const result = await rpc.commitHash({}, id);
        expect(result).to.match(/^[a-fA-F0-9]{40}$/);
        expect(result).equal(await rpc.commitHash());
    });
});
