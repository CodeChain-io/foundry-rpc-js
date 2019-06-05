import Rpc from "../src";
import "mocha";
import { expect } from "chai";
import generator from "./generator";

describe("devel", function() {
    it("cannot use by default", async function() {
        const rpc = new Rpc("http://localhost:8080");
        expect(rpc.devel).be.undefined;
    });

    it("doesn't exist when it's explicitly false", async function() {
        const rpc = new Rpc("http://localhost:8080", { devel: false });
        expect(rpc.devel).be.undefined;
    });

    it("exist", async function() {
        const rpc = new Rpc("http://localhost:8080", { devel: true });
        expect(rpc.devel).not.null;
        expect(rpc.devel).not.undefined;
    });

    it("getBlockSyncPeers", async function() {
        const rpc = new Rpc("http://localhost:8080", { devel: true, id: generator("devel-getBlockSyncPeers") });
        expect(await rpc.devel!.getBlockSyncPeers()).deep.equal([]);
    });

    it("testTPS", async function() {
        const rpc = new Rpc("http://localhost:8080", { devel: true, id: generator("devel-getBlockSyncPeers") });
        const tps = await rpc.devel!.testTPS({ count: 1, seed: 0, option: "payOnly" });
        expect(tps).not.equal(0);
    });

    it("trie", async function() {
        const rpc = new Rpc("http://localhost:8080", { devel: true, id: generator("devel-trie") });
        const devel = rpc.devel!;

        const keys1 = await devel.getStateTrieKeys({ offset: 0, limit: 3 });
        expect(keys1.length).equal(3);
        for (const key of keys1) {
            const value = await devel.getStateTrieValue({ key });
            expect(value).not.null;
        }

        const keys2 = await devel.getStateTrieKeys({ offset: 3, limit: 10 });
        expect(keys2.length).equal(10);
        for (const key of keys2) {
            const value = await devel.getStateTrieValue({ key });
            expect(value).not.null;
        }

        for (const key1 of keys1) {
            for (const key2 of keys2) {
                expect(key1).not.equal(key2);
            }
        }
    });
});
