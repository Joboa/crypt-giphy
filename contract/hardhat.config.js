require('dotenv').config()
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/PPKBwORLhVWMi41KfV3epVAikixECPzN",
      accounts: ["79a07319f413042634972802a0bc9d8299bd44323e81f4ab4782a2847b106916"]
    }
  }
}