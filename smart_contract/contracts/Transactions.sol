// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Transactions {
    uint256 transactionCount;

    event Transfer(address from, address receiver, uint256 amount, string message, uint256 timestamp, string keyword);

    struct transferStruct {
        address from;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    transferStruct[] transactions;

    function AddToBlockchain(address payable receiver, uint256 amount, string memory message, string memory keyword)
        public
    {
        transactionCount += 1;
        transactions.push(transferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (transferStruct[] memory) {
        // returns transactions
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        // returns transactionCount
        return transactionCount;
    }
}
