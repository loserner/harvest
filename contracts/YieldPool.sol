// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {ZamaEthereumConfig} from "@fhevm/solidity/config/ZamaConfig.sol";
import {FHE} from "@fhevm/solidity/lib/FHE.sol";
import {euint64} from "@fhevm/solidity/lib/FHE.sol";

contract YieldPool is ZamaEthereumConfig {
    using FHE for euint64;

    struct Stake {
        address staker;
        euint64 amount;
        uint256 timestamp;
        bool active;
    }

    mapping(address => Stake) public stakes;
    euint64 public totalStaked;
    uint256 public constant APY_BASIS = 10000;

    event Staked(address indexed staker, uint256 timestamp);
    event Unstaked(address indexed staker);
    event RewardsClaimed(address indexed staker);

    function stake(euint64 encryptedAmount) external {
        require(!stakes[msg.sender].active, "Already staked");
        
        stakes[msg.sender] = Stake({
            staker: msg.sender,
            amount: encryptedAmount,
            timestamp: block.timestamp,
            active: true
        });

        totalStaked = FHE.add(totalStaked, encryptedAmount);
        emit Staked(msg.sender, block.timestamp);
    }

    function unstake(euint64 encryptedAmount) external {
        Stake storage userStake = stakes[msg.sender];
        require(userStake.active, "Not staked");

        totalStaked = FHE.sub(totalStaked, encryptedAmount);
        userStake.active = false;
        
        emit Unstaked(msg.sender);
    }

    function claimRewards() external {
        require(stakes[msg.sender].active, "Not staked");
        emit RewardsClaimed(msg.sender);
    }
}

