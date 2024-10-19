# Define a variable for the script path for easier modifications later.
DEPLOY_SCRIPT_PATH = scripts/deploy.js

# Define a variable for the network name to avoid duplication.
NETWORK = sepolia

# Create a target to run the deployment script.
deploy-contract:
	npx hardhat run $(DEPLOY_SCRIPT_PATH) --network $(NETWORK)
