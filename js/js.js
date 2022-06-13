function getAddressesByStakeKey() {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/accounts/stake1uxej4ueycaa02v4gu540aetz0mgx5xlqfce92vyc49v4dzca49k87/addresses`,
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

// getAddressesByStakeKey()

function getInfoAboutStakeKey() {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/accounts/stake1uxa5x88ngvkd07lxtezj2ngufv58qg0dgjkla3k2dd3pzfgqhz3ck`,
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

// getInfoAboutStakeKey()

function queryAddress() {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1qx3875f4yqjzz6wzztx4ele2fleh9wkc42tzjt5fvxmdwe9mgvw0xsev6la7vhj9y4x3cjegwqs7639dlmrv56mzzyjs3kwcqz`,
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

// queryAddress()

function queryTransactions() {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/addresses/addr1qx3875f4yqjzz6wzztx4ele2fleh9wkc42tzjt5fvxmdwe9mgvw0xsev6la7vhj9y4x3cjegwqs7639dlmrv56mzzyjs3kwcqz/transactions?order=desc`,
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

// queryTransactions()

function queryAsset() {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/assets/d894897411707efa755a76deb66d26dfd50593f2e70863e1661e98a07370616365636f696e73`,
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

// queryAsset()

function getBlockByID() {
  fetch(`https://cardano-mainnet.blockfrost.io/api/v0/blocks/2287021`, {
    headers: {
      project_id: config.BLOCKFROST_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

// getBlockByID()

function getTransactionsInBlock() {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/blocks/98cb0b8ed42af1dbf6b1aa70d33df0c8a455d5ac853b61fc647e5d0d734a6d7d/txs`,
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

// getTransactionsInBlock()

function getTransactionInfo() {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/txs/ed24ae0028dde5fd39fe8488a9bb13b6ea591866127ecb5788dabf86d368d3ff`,
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

// getTransactionInfo()

function getTransactionMetadata() {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/txs/9205ea89f8fbd8c9efabfae91e893c0b07823b9d5236eecafbf6bb052bd4abcc/metadata`,
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

// getTransactionMetadata()

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

// getCurrentEpoch() {}

function getEpochByNumber() {
  fetch(`https://cardano-mainnet.blockfrost.io/api/v0/epochs/193`, {
    headers: {
      project_id: config.BLOCKFROST_KEY,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

// getEpochByNumber()

function getStakePool() {
  fetch(
    `https://cardano-mainnet.blockfrost.io/api/v0/pools/pool1pclcqwg45da00d4py9qfry3k86w7vkzjgfmvyrpx75g7u8t9nwf`,
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

// getStakePool()

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

// getNetworkInfo();
