import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config({ path: "./.env" });

const {CELO_SEPOLIA_URL, PRIVATE_KEY } = process.env;



const config: HardhatUserConfig = {
  solidity: "0.8.28",

  networks: {
    liskSepolia: {
      url: CELO_SEPOLIA_URL,
      accounts: [`0x${PRIVATE_KEY}`],
      // chainId: <LISK_SEPOLIA_CHAIN_ID>,
    },
  },
  etherscan: {
    // apiKey: `${ETHERSCAN_API_KEY}`,
  },
};

export default config;
