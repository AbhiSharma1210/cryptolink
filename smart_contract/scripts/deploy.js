// import { ContractFactory } from 'ethers';

/**
 * Deploys the `Transactions` contract using Hardhat.
 * 
 * @async
 * @function main
 * @returns {Promise<void>} Logs the deployed contract's address.
 */
const main = async () => {
    const transactionsFactory = await ethers.getContractFactory("Transactions");
    const transactionsContract = await transactionsFactory.deploy();
    await transactionsContract.waitForDeployment();
    const contractAddress = await transactionsContract.getAddress();
    console.log(`Transactions contract deployed to: ${contractAddress}`); // Output: "0x..." (the deployed contract address)
}

/**
 * Executes the deployment process and handles errors.
 * 
 * @async
 * @function runMain
 * @returns {Promise<void>} Exits the process with a status code.
 */
const runMain = async () => {
    try {
        await main();
        process.exit(0); // Exit with success status code.
    } catch (error) {
        console.error(error);
        process.exit(1); // Exit with failure status code.
    }
}

// Start the deployment process.
runMain();
