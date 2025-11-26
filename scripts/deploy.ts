import { ethers } from "hardhat";
import * as dotenv from "dotenv";

dotenv.config();

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts...");
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Account balance:", ethers.formatEther(balance), "ETH");

  // Deploy YieldPool
  console.log("\nDeploying YieldPool...");
  const YieldPool = await ethers.getContractFactory("YieldPool");
  const yieldPool = await YieldPool.deploy();
  await yieldPool.waitForDeployment();
  const yieldPoolAddress = await yieldPool.getAddress();
  console.log("YieldPool deployed to:", yieldPoolAddress);

  // Deploy StakingVault
  console.log("\nDeploying StakingVault...");
  const StakingVault = await ethers.getContractFactory("StakingVault");
  const stakingVault = await StakingVault.deploy();
  await stakingVault.waitForDeployment();
  const stakingVaultAddress = await stakingVault.getAddress();
  console.log("StakingVault deployed to:", stakingVaultAddress);

  // Deploy RewardCalculator
  console.log("\nDeploying RewardCalculator...");
  const RewardCalculator = await ethers.getContractFactory("RewardCalculator");
  const rewardCalculator = await RewardCalculator.deploy();
  await rewardCalculator.waitForDeployment();
  const rewardCalculatorAddress = await rewardCalculator.getAddress();
  console.log("RewardCalculator deployed to:", rewardCalculatorAddress);

  // Summary
  console.log("\n" + "=".repeat(60));
  console.log("Deployment Summary");
  console.log("=".repeat(60));
  console.log("YIELD_POOL:", yieldPoolAddress);
  console.log("STAKING_VAULT:", stakingVaultAddress);
  console.log("REWARD_CALCULATOR:", rewardCalculatorAddress);
  console.log("=".repeat(60));

  // Save addresses to .env format
  console.log("\nAdd these to your .env file:");
  console.log(`YIELD_POOL_ADDRESS=${yieldPoolAddress}`);
  console.log(`STAKING_VAULT_ADDRESS=${stakingVaultAddress}`);
  console.log(`REWARD_CALCULATOR_ADDRESS=${rewardCalculatorAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });