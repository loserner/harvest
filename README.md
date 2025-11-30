# ConfidentialYield

**Private Yield Farming Platform**

ConfidentialYield enables users to stake tokens and participate in yield farming while keeping their positions, strategies, and returns completely private.

## Overview

Traditional yield farming exposes your positions. ConfidentialYield uses Zama FHEVM to encrypt all sensitive data on-chain.

## Features

- Encrypted staking amounts
- Private APY calculations  
- Confidential farming strategies
- Encrypted reward management
- Selective decryption for withdrawals

## Tech

- Zama FHEVM v0.9
- Hardhat
- React + TypeScript
- ethers.js

## Quick Start

```bash
npm install
npm run compile
npm run deploy
```

## Structure

```
ConfidentialYield/
├── contracts/
│   ├── YieldPool.sol
│   ├── StakingVault.sol
│   └── RewardCalculator.sol
├── deploy/
├── tests/
└── client/
```

## License

MIT

