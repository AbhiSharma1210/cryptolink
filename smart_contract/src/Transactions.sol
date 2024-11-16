// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title Transactions
 * @dev Manages simple transactions and records them on the blockchain.
 */
contract Transactions {
    uint256 private s_transactionCount;

    /**
     * @dev Emitted when a new transaction is recorded.
     */
    event Transfer(address from, address receiver, uint256 amount, string message, uint256 timestamp, string keyword);

    /**
     * @dev Structure to store transaction details.
     */
    struct transferStruct {
        address from;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    transferStruct[] private s_transactions;

    /**
     * @dev Records a new transaction and emits a Transfer event.
     * @param receiver The recipient address.
     * @param amount The amount transferred.
     * @param message A custom message.
     * @param keyword A keyword associated with the transaction.
     */
    function addToBlockchain(address payable receiver, uint256 amount, string memory message, string memory keyword)
        public
    {
        s_transactionCount += 1;
        s_transactions.push(transferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));
        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    /**
     * @dev Returns all recorded transactions.
     */
    function getAllTransactions() public view returns (transferStruct[] memory) {
        return s_transactions;
    }

    /**
     * @dev Returns the total number of transactions.
     */
    function getTransactionCount() public view returns (uint256) {
        return s_transactionCount;
    }
}
