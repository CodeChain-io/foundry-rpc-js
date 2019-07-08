CodeChain RPC JS
=================

CodeChain RPC JS is a JavaScript library that calls RPC to a CodeChain node.

How to install
--------------

If you are using NPM, use the command below:

```
npm install codechain-rpc --save
```

If you prefer Yarn, use the command below:

```
yarn add codechain-rpc
```

Example
-------

```
const RPC = require("codechain-rpc").default;

async function main() {
  const rpc = new RPC("http://localhost:8080");

  const blockNumber = await rpc.chain.getBestBlockNumber();
  console.log(`Current best block number: ${blockNumber}`);
}

main().catch(console.error);
```

RPC list
--------

You can find the RPC list in [this link](https://github.com/CodeChain-io/codechain/blob/master/spec/JSON-RPC.md).