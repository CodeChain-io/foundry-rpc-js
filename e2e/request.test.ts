import { request } from "../src";
import "mocha";
import { expect } from "chai";

describe("request", () => {
    it("ping", async () => {
        const response = await request("http://localhost:8080", {
            jsonrpc: "2.0",
            method: "ping",
            params: [],
            id: null
        });
        const result = await response.json();
        expect(result.jsonrpc).equal("2.0");
        expect(result.result).equal("pong");
        expect(result.id).be.null;
    });

    it("ping with number id", async () => {
        const id = Math.floor(Math.random() * 1000);
        const response = await request("http://localhost:8080", {
            jsonrpc: "2.0",
            method: "ping",
            params: [],
            id
        });
        const result = await response.json();
        expect(result.jsonrpc).equal("2.0");
        expect(result.result).equal("pong");
        expect(result.id).equal(id);
    });

    it("ping with string id", async () => {
        const id = "string id";
        const response = await request("http://localhost:8080", {
            jsonrpc: "2.0",
            method: "ping",
            params: [],
            id
        });
        const result = await response.json();
        expect(result.jsonrpc).equal("2.0");
        expect(result.result).equal("pong");
        expect(result.id).equal(id);
    });
});
