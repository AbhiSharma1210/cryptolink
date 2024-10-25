import React, { useContext, useEffect } from 'react';
import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from '../utils/shortenAddress';
import { ethers } from 'ethers';

const Transactions = () => {
    // Get transactions from the context
    const { transactions } = useContext(TransactionContext);

    return (
        <div className="flex w-full justify-center items-center gradient-bg-transactions">
            <div className="flex justify-center items-center p-4 w-full max-w-6xl">
                <div className="w-full">
                    <table className="w-full bg-gray-800 text-white rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-900 text-left">
                                <th className="p-4">Transaction From</th>
                                <th className="p-4">Transaction To</th>
                                <th className="p-4">Amount (ETH)</th>
                                <th className="p-4">Date</th>
                                <th className="p-4">Comment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Slice is used to create a new copy and then perform reverse() on it. */}
                            {transactions.slice().reverse().map((tx, index) => (
                                <tr key={index} className="border-b border-gray-700">
                                    <td className="p-4">{shortenAddress(tx.addressFrom)}</td>
                                    <td className="p-4">{shortenAddress(tx.addressTo)}</td>
                                    <td className="p-4">{tx.amount}</td>
                                    <td className="p-4">{tx.timestamp}</td>
                                    <td className="p-4">{tx.message}</td>
                                </tr>
                            ))}

                            {transactions.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="p-4 text-center text-gray-400">
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

