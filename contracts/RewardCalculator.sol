// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ZamaEthereumConfig} from "@fhevm/solidity/config/ZamaConfig.sol";
import {FHE} from "@fhevm/solidity/lib/FHE.sol";
import {euint32} from "@fhevm/solidity/lib/FHE.sol";

/**
 * @title RewardCalculator
 * @notice Additional contract for ConfidentialYield
 */
contract RewardCalculator is ZamaEthereumConfig {
    using FHE for euint32;

    mapping(uint256 => euint32) public encryptedData;
    uint256 public dataCounter;

    event DataStored(uint256 indexed id, address indexed owner);

    function storeData(euint32 encryptedValue) external returns (uint256 id) {
        id = dataCounter++;
        encryptedData[id] = encryptedValue;
        emit DataStored(id, msg.sender);
        return id;
    }

    function getData(uint256 id) external view returns (euint32) {
        return encryptedData[id];
    }
}