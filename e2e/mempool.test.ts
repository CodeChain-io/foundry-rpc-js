import Rpc from "../src";
import "mocha";
import { expect } from "chai";
import generator from "./generator";
import { strictEqual } from "assert";

describe("mempool", function() {
    it("error hint", async function() {
        const rpc = new Rpc("http://localhost:8080", { id: generator("mempool-error-hint") });
        const transactionHash = `0x${randomHexString(64)}`;
        const hint = await rpc.mempool.getErrorHint({ transactionHash });
        expect(hint).is.null;
    });

    it("transaction results by tracker", async function() {
        const rpc = new Rpc("http://localhost:8080", { id: generator("mempool-transaction-results-by-tracker") });
        const tracker = `0x${randomHexString(64)}`;
        const results = await rpc.mempool.getTransactionResultsByTracker({ tracker });
        expect(results).deep.equal([]);
    });

    it("pending transactions", async function() {
        const rpc = new Rpc("http://localhost:8080", { id: generator("mempool-pending-transactions") });
        const { transactions, lastTimestamp } = await rpc.mempool.getPendingTransactions();
        expect(transactions).deep.equal([]);
        expect(lastTimestamp).is.null;
    });

    it("delete pending transactions", async function() {
        const rpc = new Rpc("http://localhost:8080", { id: generator("mempool-delete-pending-transactions") });
        await rpc.mempool.deleteAllPendingTransactions();
    });
});

function randomHexString(length: number): string {
    strictEqual(length % 2, 0);
    const buffer = Buffer.alloc(length / 2);
    for (let i = 0; i < length / 2; i += 1) {
        buffer[i] = Math.floor(Math.random() * 256);
    }
    return buffer.toString("hex");
}
