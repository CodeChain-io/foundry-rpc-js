import Rpc from "../src";
import "mocha";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { ec as EC } from "elliptic";
import generator from "./generator";

chai.use(chaiAsPromised);
const expect = chai.expect;

const secp256k1 = new EC("secp256k1");

describe("net", () => {
    it("register remote key", async () => {
        const rpc = new Rpc("http://localhost:8080", { id: generator("net-register-remote-key") });
        const address = randomIp();
        const port = randomPort();
        const keyPair = secp256k1.genKeyPair();
        const remotePublicKey = `0x${keyPair.getPublic(false, "hex").slice(2)}`;
        const local = await rpc.net.registerRemoteKeyFor({ address, port, remotePublicKey });

        expect(await rpc.net.localKeyFor({ address, port })).equal(local);
    });

    it("port", async () => {
        const rpc = new Rpc("http://localhost:8080", { id: generator("net-port") });
        const port = await rpc.net.getPort();

        expect(port).equal(3485);
    });

    it("peer count", async () => {
        const rpc = new Rpc("http://localhost:8080", { id: generator("net-peer-count") });
        const count = await rpc.net.getPeerCount({});

        expect(count).equal(0);
    });

    it("established peers", async () => {
        const rpc = new Rpc("http://localhost:8080", { id: generator("net-established-peers") });
        const peers = await rpc.net.getEstablishedPeers({});

        expect(peers).deep.equal([]);
    });

    describe("whitelist", function() {
        beforeEach(async function() {
            this.timeout(10_000);

            const rpc = new Rpc("http://localhost:8080", { id: generator("net-whitelist") });
            const { list, enabled } = await rpc.net.getWhitelist({});
            const promises = [];
            if (enabled) {
                promises.push(rpc.net.disableWhitelist());
            }
            for (const [address, tag] of list) {
                promises.push(rpc.net.removeFromWhitelist({ address }, `whitelist-before-each-remove-${tag}`));
            }
            await Promise.all(promises);

            while (true) {
                const { list, enabled } = await rpc.net.getWhitelist({});
                if (!enabled && list.length === 0) {
                    break;
                }
                await wait(300);
            }
        });

        it("add", async () => {
            const rpc = new Rpc("http://localhost:8080", { id: generator("net-whitelist") });
            const expected = [];
            {
                const address = `${randomIp(2)}/16`;
                const tag = "e2e test";
                await rpc.net.addToWhitelist({ address, tag });
                expected.push([address, tag]);

                const { list, enabled } = await rpc.net.getWhitelist({});
                expect(enabled).be.false;
                expect(list).deep.equal(expected);
            }

            {
                const address = `${randomIp(3)}/24`;
                const tag = "e2e test2";
                await rpc.net.addToWhitelist({ address, tag });
                expected.push([address, tag]);

                const { list, enabled } = await rpc.net.getWhitelist({});
                expect(enabled).be.false;
                list.sort();
                expected.sort();
                expect(list).deep.equal(expected);
            }
        });

        it("enable", async () => {
            const rpc = new Rpc("http://localhost:8080", { id: generator("net-whitelist") });
            {
                const { enabled } = await rpc.net.getWhitelist();
                expect(enabled).be.false;
            }
            await rpc.net.enableWhitelist();
            {
                const { enabled } = await rpc.net.getWhitelist();
                expect(enabled).be.true;
            }
        });
    });

    describe("blacklist", function() {
        beforeEach(async function() {
            this.timeout(10_000);

            const rpc = new Rpc("http://localhost:8080", { id: generator("net-blacklist") });
            const { list, enabled } = await rpc.net.getBlacklist({});
            const promises = [];
            if (enabled) {
                promises.push(rpc.net.disableBlacklist());
            }
            for (const [address, tag] of list) {
                promises.push(rpc.net.removeFromBlacklist({ address }, `blacklist-before-each-remove-${tag}`));
            }
            await Promise.all(promises);

            while (true) {
                const { list, enabled } = await rpc.net.getBlacklist({});
                if (!enabled && list.length === 0) {
                    break;
                }
                await wait(300);
            }
        });

        it("add", async () => {
            const rpc = new Rpc("http://localhost:8080", { id: generator("net-blacklist") });
            const expected = [];
            {
                const address = `${randomIp(2)}/16`;
                const tag = "e2e test";
                await rpc.net.addToBlacklist({ address, tag });
                expected.push([address, tag]);

                const { list, enabled } = await rpc.net.getBlacklist({});
                expect(enabled).be.false;
                expect(list).deep.equal(expected);
            }

            {
                const address = `${randomIp(3)}/24`;
                const tag = "e2e test2";
                await rpc.net.addToBlacklist({ address, tag });
                expected.push([address, tag]);

                const { list, enabled } = await rpc.net.getBlacklist({});
                expect(enabled).be.false;
                list.sort();
                expected.sort();
                expect(list).deep.equal(expected);
            }
        });

        it("enable", async () => {
            const rpc = new Rpc("http://localhost:8080", { id: generator("net-blacklist") });
            {
                const { enabled } = await rpc.net.getBlacklist();
                expect(enabled).be.false;
            }
            await rpc.net.enableBlacklist();
            {
                const { enabled } = await rpc.net.getBlacklist();
                expect(enabled).be.true;
            }
        });
    });

    it("recent usage", async () => {
        const rpc = new Rpc("http://localhost:8080", { id: generator("net-recent-usage") });
        const usage = await rpc.net.recentNetworkUsage();
        expect(usage).deep.equal({}); // There are no connections.
    });
});

function randomIp(length: number = 4): string {
    const first = length < 1 ? 0 : 1 + Math.floor(Math.random() * 254);
    const second = length < 2 ? 0 : Math.floor(Math.random() * 256);
    const third = length < 3 ? 0 : Math.floor(Math.random() * 256);
    const fourth = length < 4 ? 0 : 1 + Math.floor(Math.random() * 254);
    return `${first}.${second}.${third}.${fourth}`;
}

function randomPort(): number {
    return 49152 + Math.floor(Math.random() * (65535 - 49152));
}

function wait(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
