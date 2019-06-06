import Rpc from "../src";
import "mocha";
import { expect } from "chai";
import generator from "./generator";

describe("chain", function() {
    it("network id", async function() {
        const rpc = new Rpc("http://localhost:8080", { id: generator("chain-network-id") });
        const id = await rpc.chain.getNetworkId();
        expect(id).equal("tc");
    });

    it("genesis accounts", async function() {
        const rpc = new Rpc("http://localhost:8080", { id: generator("chain-genesis-accounts") });
        const accounts = await rpc.chain.getGenesisAccounts();
        const expected = [
            "tccqyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqyca3rwt",
            "tccqyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqgfrhflv",
            "tccqyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqvxf40sk",
            "tccqyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqszkma5z",
            "tccqyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq5duemmc",
            "tccqyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqcuzl32l",
            "tccqyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqungah99",
            "tccqyqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqpqc2ul2h",
            "tccq9h7vnl68frvqapzv3tujrxtxtwqdnxw6yamrrgd",
            "tccq8vapdlstar6ghmqgczp6j2e83njsqq0tsvaxm9u"
        ];
        expected.sort();
        accounts.sort();
        expect(accounts).deep.equal(expected);
    });

    it("number of shards", async function() {
        const rpc = new Rpc("http://localhost:8080", { id: generator("chain-genesis-accounts") });
        const numberOfShards = await rpc.chain.getNumberOfShards({ blockNumber: 0 });
        expect(numberOfShards).equal(1);
    });
});
