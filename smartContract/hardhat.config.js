require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/u_ga5NiPLTXy7ROUSwLILqJFsj-ME6Vn',
      accounts: [ 'f23d3802d926e7088aa3d101d0eac72208022e2ab00517a5b03f4b86a273b5ac' ]
    }
  }
}