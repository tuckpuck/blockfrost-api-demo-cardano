function getLatestProtocolParams() {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/epochs/latest/parameters`,
    {
      headers: {
        project_id: config.BLOCKFROST_KEY,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
getLatestProtocolParams();

function getNetworkInfo() {
  fetch(`https://cardano-mainnet.blockfrost.io/api/v0/network`, {
    headers: {
      project_id: config.BLOCKFROST_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
getNetworkInfo();

function getCurrentEpoch() {
  fetch(`https://cardano-mainnet.blockfrost.io/api/v0/epochs/latest`, {
    headers: {
      project_id: config.BLOCKFROST_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
getCurrentEpoch();

function getAddressesByStakeKey(STAKE_KEY) {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/accounts/${STAKE_KEY}/addresses`,
    {
      headers: {
        project_id: config.BLOCKFROST_KEY,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
let stakeKey = "stake1u9frc5rqj5ca62jd09njs2uq26caykuw724gmfyke59ln7qdmgm8p";
// getAddressesByStakeKey(stakeKey);

function getInfoAboutStakeKey(STAKE_INFO_KEY) {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/accounts/${STAKE_INFO_KEY}`,
    {
      headers: {
        project_id: config.BLOCKFROST_KEY,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
let stakeInfoKey =
  "stake1uxa5x88ngvkd07lxtezj2ngufv58qg0dgjkla3k2dd3pzfgqhz3ck";
// getInfoAboutStakeKey(stakeInfoKey);

function queryAddress(WALLET_ADDRESS) {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${WALLET_ADDRESS}`,
    {
      headers: {
        project_id: config.BLOCKFROST_KEY,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
let walletAddress =
  "addr1qx3875f4yqjzz6wzztx4ele2fleh9wkc42tzjt5fvxmdwe9mgvw0xsev6la7vhj9y4x3cjegwqs7639dlmrv56mzzyjs3kwcqz";
// queryAddress(walletAddress);

function queryTransactions(WALLET_ADDR) {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/addresses/${WALLET_ADDR}/transactions?order=desc`,
    {
      headers: {
        project_id: config.BLOCKFROST_KEY,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
let walletAddr =
  "addr1qx3875f4yqjzz6wzztx4ele2fleh9wkc42tzjt5fvxmdwe9mgvw0xsev6la7vhj9y4x3cjegwqs7639dlmrv56mzzyjs3kwcqz";
// queryTransactions(walletAddr);

function queryAsset(POLICY_ID) {
  fetch(`https://cardano-mainnet.blockfrost.io/api/v0/assets/${POLICY_ID}`, {
    headers: {
      project_id: config.BLOCKFROST_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
let policyId = "b07d3105470861a94d44b48b5ae4f85c243f35be4519d94e60b6db55";
// queryAsset(policyId);

function getBlockByID(BLOCK_ID) {
  fetch(`https://cardano-mainnet.blockfrost.io/api/v0/blocks/${BLOCK_ID}`, {
    headers: {
      project_id: config.BLOCKFROST_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
let blockId = "2287021";
// getBlockByID(blockId);

function getTransactionsInBlock(BLOCK_HASH) {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/blocks/${BLOCK_HASH}/txs`,
    {
      headers: {
        project_id: config.BLOCKFROST_KEY,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
let blockHash =
  "98cb0b8ed42af1dbf6b1aa70d33df0c8a455d5ac853b61fc647e5d0d734a6d7d";
// getTransactionsInBlock(blockHash);

function getTransactionInfo(TRANSACTION_HASH) {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/txs/${TRANSACTION_HASH}`,
    {
      headers: {
        project_id: config.BLOCKFROST_KEY,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
let transactionHash =
  "ed24ae0028dde5fd39fe8488a9bb13b6ea591866127ecb5788dabf86d368d3ff";
// getTransactionInfo(transactionHash);

function getTransactionMetadata(TX_HASH) {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/txs/${TX_HASH}/metadata`,
    {
      headers: {
        project_id: config.BLOCKFROST_KEY,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
let txHash = "9205ea89f8fbd8c9efabfae91e893c0b07823b9d5236eecafbf6bb052bd4abcc";
// getTransactionMetadata(txHash);

function getEpochByNumber(EPOCH_NUMBER) {
  fetch(`https://cardano-mainnet.blockfrost.io/api/v0/epochs/${EPOCH_NUMBER}`, {
    headers: {
      project_id: config.BLOCKFROST_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
let epochNumber = "193";
// getEpochByNumber(epochNumber);

function getStakePool(BECH32_POOL_ID) {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/pools/${BECH32_POOL_ID}`,
    {
      headers: {
        project_id: config.BLOCKFROST_KEY,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
let bech32PoolID = "pool1pclcqwg45da00d4py9qfry3k86w7vkzjgfmvyrpx75g7u8t9nwf";
// getStakePool(bech32PoolID);
