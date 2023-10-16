require('@nomicfoundation/hardhat-toolbox');
require('dotenv').config();

module.exports = {
  solidity: "0.8.17",
  paths: {
    artifacts: "./app/src/artifacts",
  },
  networks: {
    sepolia: {
      url: `${process.env.MY_ALCHEMY_RPC_ENDPOINT}`,
      chainId: 11155111,
      accounts: ["process.env.MY_PRIVATE_KEY"],
    }
  }
};

