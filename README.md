# **Cryptolink**

Cryptolink is a blockchain-based project that enables users to transfer cryptocurrencies globally through decentralized wallets. The project is built using **Solidity** for smart contracts and **React** for the frontend.

---

## **Features**
- **Smart Contract Backend**: Built using Solidity and Hardhat for secure and decentralized cryptocurrency transfers.  
- **Frontend**: Developed with React, Vite, and Tailwind CSS to deliver a fast and responsive user interface.  

---

## **Tools and Frameworks Used**

### **Frontend**
- **React**: JavaScript library for building user interfaces.  
- **Vite**: Modern frontend build tool for fast and optimized development.  
- **Tailwind CSS**: Utility-first CSS framework for styling.  
- **Ethers.js**: Used for 

### **Backend (Smart Contracts)**
- **Solidity**: Programming language for writing Ethereum smart contracts.  
- **Hardhat**: Development environment for testing and deploying smart contracts.  

### **General Tools**
- **Node.js**: JavaScript runtime for running backend and frontend development scripts.  
- **NPM**: Package manager for managing project dependencies.  

---

## **Getting Started**

Follow the instructions below to set up and run the Cryptolink project locally.

---

### **Backend (Smart Contracts)**

1. Navigate to the `smart_contract` directory:  
   ```bash
   cd cryptolink-main/smart_contract
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Compile the smart contracts:  
   ```bash
   npx hardhat compile
   ```

4. Deploy contracts (adjust the script as needed):  
   ```bash
   npx hardhat run scripts/deploy.js --network <network-name>
   ```

---

### **Frontend**

1. Navigate to the `client` directory:  
   ```bash
   cd cryptolink-main/client
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```

3. Start the development server:  
   ```bash
   npm run dev
   ```

---

## **Technologies Used**

- **Frontend**: React, Vite, Tailwind CSS.  
- **Backend**: Solidity, Hardhat, Foundry.  
- **Testing**: Foundry for testing smart contracts.  
- **Tooling**: Node.js, NPM.  

---