import React, { useContext, useEffect } from 'react';
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from '../utils/shortenAddress';
// import { dummyData } from '../utils/dummyData';

// import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';

// const Transactions = () => {
//     const [transactions, setTransactions] = useContext(TransactionContext);

//     useEffect(() => {
//         // This is where you can add the logic to fetch transaction data using ethers.js v6.
//         // Example fetchTransactions function:
//         const fetchTransactions = async () => {
//             try {
//                 const provider = new ethers.JsonRpcProvider('https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID');
//                 // Replace the wallet address below with your wallet address
//                 const walletAddress = '0xYourWalletAddress';
//                 const txs = await provider.getHistory(walletAddress);

//                 const formattedTransactions = txs.map(tx => ({
//                     hash: tx.hash,
//                     amount: ethers.formatEther(tx.value),
//                     date: new Date(tx.timestamp * 1000).toLocaleDateString(), // convert timestamp to date
//                 }));

//                 setTransactions(formattedTransactions);
//             } catch (error) {
//                 console.error('Error fetching transactions:', error);
//             }
//         };

//         fetchTransactions();
//     }, []);

//     // Helper function to shorten the transaction hash
//     const shortenHash = (hash) => `${hash.slice(0, 6)}...${hash.slice(-4)}`;

const transactions = [
    {
        hash: '0xabc123def456ghi789jkl012mno345pqr678stu901',
        amount: '0.5',
        date: '2024-10-15 12:30:45',
    },
    {
        hash: '0x987xyz654wvu321rst876def123ghi456jkl789abc',
        amount: '1.2',
        date: '2024-10-14 09:15:22',
    },
    {
        hash: '0x456def789ghi012jkl345mno678pqr901stu234vwx',
        amount: '0.75',
        date: '2024-10-13 14:45:38',
    },
];

function shortenHash(hash) {
    // Function to shorten a transaction hash for display
    return `${hash.substring(0, 6)}...${hash.substring(hash.length - 4)}`;
}

const Transactions = () => {
    return (
        <div className="flex w-full justify-center items-center gradient-bg-transactions">
            <div className="flex justify-center items-center p-4 w-full max-w-6xl">
                <div className="w-full">
                    <table className="w-full bg-gray-800 text-white rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-900 text-left">
                                <th className="p-4">Transaction Hash</th>
                                <th className="p-4">Amount (ETH)</th>
                                <th className="p-4">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((tx, index) => (
                                <tr key={index} className="border-b border-gray-700">
                                    <td className="p-4">transaction hash</td>
                                    <td className="p-4">Amount (ETH)</td>
                                    <td className="p-4">Timestamp</td>
                                </tr>
                            ))}
                            {transactions.length === 0 && (
                                <tr>
                                    <td colSpan="3" className="p-4 text-center text-gray-400">
                                        No transactions found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Transactions;

