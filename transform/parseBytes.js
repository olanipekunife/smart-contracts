const ethersnode = require("ethers");

const parseBytes = (args) => {
  const bytes = args[0];
  const name = ethers.utils.parseBytes32String(bytes);
  console.log(name);
};

parseBytes(process.argv.slice(2));
