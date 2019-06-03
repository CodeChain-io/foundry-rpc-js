import Rpc from "../src";
import "mocha";
import { expect } from "chai";

describe("version", () => {
    it("without id", async () => {
        const rpc = new Rpc("http://localhost:8080");
        const result = await rpc.version({});
        expect(result).to.match(/^[0-9]+\.[0-9]+\.[0-9]+$/);
        expect(result).equal(await rpc.version());
    });

    it("with number id", async () => {
        const id = Math.floor(Math.random() * 1000);
        const rpc = new Rpc("http://localhost:8080");
        const result = await rpc.version({}, id);
        expect(result).to.match(/^[0-9]+\.[0-9]+\.[0-9]+$/);
        expect(result).equal(await rpc.version());
    });

    it("with string id", async () => {
        const id = "string id";
        const rpc = new Rpc("http://localhost:8080");
        const result = await rpc.version({}, id);
        expect(result).to.match(/^[0-9]+\.[0-9]+\.[0-9]+$/);
        expect(result).equal(await rpc.version());
    });
});
