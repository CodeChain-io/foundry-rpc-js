import Rpc from "../src";
import "mocha";
import { expect } from "chai";
import generator from "./generator";

describe("engine", function() {
    it("coinbase", async function() {
        const rpc = new Rpc("http://localhost:8080", { id: generator("engine-coinbase") });
        const coinbase = await rpc.engine.getCoinbase();
        expect(coinbase).is.null;
    });

    it("block reward", async function() {
        const rpc = new Rpc("http://localhost:8080", { id: generator("engine-block-reward") });
        const reward = await rpc.engine.getBlockReward({ blockNumber: 0 });
        expect(reward).equal(0);
    });

    it("recommended confirmation", async function() {
        const rpc = new Rpc("http://localhost:8080", { id: generator("engine-recommended-confirmation") });
        const confirmation = await rpc.engine.getRecommendedConfirmation();
        expect(confirmation).equal(1);
    });
});
