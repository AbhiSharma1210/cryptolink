require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-foundry");

const path = require('path');
const fs = require('fs');

// Load the environment variables from .env file
const envPath = path.join("../", '.env');
require('dotenv').config({ path: envPath });

// Destructure environment variables
const { ALCHEMY_SEPOLIA_URL, PRIVATE_KEY } = process.env;

// Validate the .env file path
if (!fs.existsSync(envPath)) {
  console.error(`Error: .env file not found at path: ${envPath}`);
  process.exit(1); // Exit the process with a failure status code
}

// Validate the environment variables
if (!ALCHEMY_SEPOLIA_URL) {
  console.error("Error: ALCHEMY_SEPOLIA_URL is not defined in .env");
  process.exit(1); // Exit the process with a failure status code
}

if (!PRIVATE_KEY) {
  console.error("Error: PRIVATE_KEY is not defined in .env");
  process.exit(1); // Exit the process with a failure status code
}

// console.log(`RPC URL: ${ALCHEMY_SEPOLIA_URL}\nPrivate key: ${PRIVATE_KEY}`)
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: ALCHEMY_SEPOLIA_URL,
      accounts: [PRIVATE_KEY]
    }
  }
};
