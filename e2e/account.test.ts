import Rpc from "../src";
import "mocha";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import { ec as EC } from "elliptic";
import { padStart } from "lodash";

chai.use(chaiAsPromised);
const expect = chai.expect;

const secp256k1 = new EC("secp256k1");

describe("account", () => {
    it("create", async () => {
        const rpc = new Rpc("http://localhost:8080");
        const beforeList = await rpc.account.getList();
        const passphrase = `some passphrase ${Math.random()}`;
        const account = await rpc.account.create({ passphrase });
        const afterList = await rpc.account.getList({});
        beforeList.push(account);
        beforeList.sort();
        afterList.sort();
        expect(beforeList).deep.equal(afterList);
    });

    it("importRaw", async () => {
        const rpc = new Rpc("http://localhost:8080");
        const beforeList = await rpc.account.getList({});
        const passphrase = `some passphrase ${Math.random()}`;
        const randomPrivate = secp256k1
            .genKeyPair()
            .getPrivate()
            .toString("hex");
        const secret = `0x${padStart(randomPrivate, 64, "0")}`;
        const account = await rpc.account.importRaw({ secret, passphrase });
        const afterList = await rpc.account.getList();
        beforeList.push(account);
        beforeList.sort();
        afterList.sort();
        expect(beforeList).deep.equal(afterList);
    });

    it("sign", async () => {
        const rpc = new Rpc("http://localhost:8080");
        const passphrase = `some passphrase ${Math.random()}`;
        const randomKeyPair = secp256k1.genKeyPair();
        const randomPrivate = randomKeyPair.getPrivate().toString("hex");
        const secret = `0x${padStart(randomPrivate, 64, "0")}`;
        const account = await rpc.account.importRaw({ secret, passphrase });
        const message = Buffer.from("1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "hex").toString(
            "hex"
        );
        const signature = await rpc.account.sign({ message: `0x${message}`, account, passphrase });
        const expected = sign(randomKeyPair, message);
        expect(signature).deep.equal(expected);
    });

    it("cannot sign without passphrase", async () => {
        const rpc = new Rpc("http://localhost:8080");
        const passphrase = `some passphrase ${Math.random()}`;
        const randomKeyPair = secp256k1.genKeyPair();
        const randomPrivate = randomKeyPair.getPrivate().toString("hex");
        const secret = `0x${padStart(randomPrivate, 64, "0")}`;
        const account = await rpc.account.importRaw({ secret, passphrase });
        const message = Buffer.from("1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "hex").toString(
            "hex"
        );
        await expect(rpc.account.sign({ message: `0x${message}`, account, passphrase: null })).be.rejected;
    });

    it("unlock", async () => {
        const rpc = new Rpc("http://localhost:8080");
        const passphrase = `some passphrase ${Math.random()}`;
        const randomKeyPair = secp256k1.genKeyPair();
        const randomPrivate = randomKeyPair.getPrivate().toString("hex");
        const secret = `0x${padStart(randomPrivate, 64, "0")}`;
        const account = await rpc.account.importRaw({ secret, passphrase });
        const message = Buffer.from("1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "hex").toString(
            "hex"
        );
        await rpc.account.unlock({ account, passphrase });
        const signature = await rpc.account.sign({ message: `0x${message}`, account, passphrase: null });
        const expected = sign(randomKeyPair, message);
        expect(signature).deep.equal(expected);
    });

    it("unlock with duration", async () => {
        const rpc = new Rpc("http://localhost:8080");
        const passphrase = `some passphrase ${Math.random()}`;
        const randomKeyPair = secp256k1.genKeyPair();
        const randomPrivate = randomKeyPair.getPrivate().toString("hex");
        const secret = `0x${padStart(randomPrivate, 64, "0")}`;
        const account = await rpc.account.importRaw({ secret, passphrase });
        const message = Buffer.from("1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef", "hex").toString(
            "hex"
        );
        await rpc.account.unlock({ account, passphrase, duration: 3 });
        const signature = await rpc.account.sign({ message: `0x${message}`, account, passphrase: null });
        const expected = sign(randomKeyPair, message);
        expect(signature).deep.equal(expected);

        await wait(4_000);
        await expect(rpc.account.sign({ message: `0x${message}`, account, passphrase: null })).be.rejected;
    });

    it("changePassword", async () => {
        const rpc = new Rpc("http://localhost:8080");
        const passphrase1 = `some passphrase ${Math.random()}`;
        const passphrase2 = `another random passphrase ${Math.random()}`;

        const randomKeyPair = secp256k1.genKeyPair();
        const randomPrivate = randomKeyPair.getPrivate().toString("hex");
        const secret = `0x${padStart(randomPrivate, 64, "0")}`;
        const account = await rpc.account.importRaw({ secret, passphrase: passphrase1 });
        const messageStr = Buffer.from(
            "1234567890abcdef1234567890abcdef1234567890abcdef1234567890abcdef",
            "hex"
        ).toString("hex");
        const expected = sign(randomKeyPair, messageStr);
        const message = `0x${messageStr}`;

        const signature1 = await rpc.account.sign({ message, account, passphrase: passphrase1 });
        expect(signature1).deep.equal(expected);
        await expect(rpc.account.sign({ message, account, passphrase: passphrase2 })).be.rejected;

        await rpc.account.changePassword({ account, oldPassphrase: passphrase1, newPassphrase: passphrase2 });

        await expect(rpc.account.sign({ message, account, passphrase: passphrase1 })).be.rejected;
        const signature2 = await rpc.account.sign({ message, account, passphrase: passphrase2 });
        expect(signature2).deep.equal(expected);
    });
});

function sign(keyPair: EC.KeyPair, message: string) {
    const { r, s, recoveryParam } = keyPair.sign(message, { canonical: true });
    const paddedR = padStart(r.toString(16), 64, "0");
    const paddedS = padStart(s.toString(16), 64, "0");
    const paddedV = padStart(recoveryParam!.toString(16), 2, "0");
    return `0x${paddedR}${paddedS}${paddedV}`;
}

function wait(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
