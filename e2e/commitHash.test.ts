import Rpc from "../src";
import "mocha";
import { expect } from "chai";

describe("commitHash", () => {
    it("without id", async () => {
        const rpc = new Rpc("http://localhost:8080");
        const result = await rpc.commitHash({});
        expect(result).to.match(/^[a-fA-F0-9]{40}$/);
        expect(result).equal(await rpc.commitHash());
    });

    it("with number id", async () => {
        const id = Math.floor(Math.random() * 1000);
        const rpc = new Rpc("http://localhost:8080");
        const result = await rpc.commitHash({}, id);
        expect(result).to.match(/^[a-fA-F0-9]{40}$/);
        expect(result).equal(await rpc.commitHash());
    });

    it("with string id", async () => {
        const id = "string id";
        const rpc = new Rpc("http://localhost:8080");
        const result = await rpc.commitHash({}, id);
        expect(result).to.match(/^[a-fA-F0-9]{40}$/);
        expect(result).equal(await rpc.commitHash());
    });
});
