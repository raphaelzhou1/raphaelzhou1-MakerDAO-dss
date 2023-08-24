require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4", // Use your desired version
  paths: {
    sources: "./src",  // Source directory for your .sol files
    tests: "./src/test", // Directory for your test files
    cache: "./cache",
    artifacts: "./artifacts"
  }
};
