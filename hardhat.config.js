require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.12",
      },
    ],
  },
  paths: {
    sources: "./src", 
    tests: "./src/test",
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
