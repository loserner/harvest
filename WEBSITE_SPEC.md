# WEBSITE_SPEC.md - Harvest (Confidential Yield Platform)

> **NOTE:** This file is for the frontend developer. After the website is created, this file can be deleted from the repository.

## General Description

Harvest is a yield farming platform with encrypted staking amounts and rewards. Staking strategies and reward amounts remain private.

## Website Structure

### Home Page (/)

**Header:**
- Logo "Harvest" (click → home)
- Navigation:
  - "Pools" (click → /pools)
  - "Stake" (click → /stake)
  - "My Stakes" (click → /my-stakes)
  - "Rewards" (click → /rewards)
- "Connect Wallet" button

**Hero:**
- Title: "Private Yield Farming"
- Subtitle: "Stake tokens and earn rewards with encrypted amounts"
- Button "View Pools" (click → /pools)

**Features:**
- "Encrypted Staking" - staking amounts stay private
- "Private Rewards" - reward amounts encrypted
- "Confidential Pools" - pool details remain private
- "Strategy Protection" - your strategy stays hidden

### Page "Pools" (/pools)

**Pool List:**
- Cards for each pool:
  - Pool Name
  - Token Pair
  - APY (encrypted, shown as "***")
  - Total Staked (encrypted, shown as "***")
  - Your Stake (encrypted, shown as "***" if staked)
  - Button "View Pool"
  - Button "Stake" (if not staked)
  - Button "Unstake" (if staked)

**Filters:**
- By Token
- By APY Range (encrypted)
- By Status
- Sort by: APY, Total Staked, Newest

### Page "Stake" (/stake/[poolId])

**Pool Details:**
- Pool name and token pair
- Current APY (encrypted, shown as "***")
- Total staked (encrypted)
- Your current stake (encrypted, if any)

**Staking Form:**
- Field "Amount" (number, in tokens)
  - Button "Max" - stake maximum available
  - Balance display
- Field "Duration" (dropdown: Flexible, 30 days, 90 days, 180 days)
- Estimated Rewards (encrypted, shown as "***")
- Button "Encrypt & Stake"
  - On click: encrypts amount and stakes
  - Shows "Staking..."
  - After success: "Staked successfully"
  - Redirects to /my-stakes

### Page "My Stakes" (/my-stakes)

**Tabs:**
- "Active Stakes" (current stakes)
- "Unstaked" (completed stakes)
- "Rewards" (earned rewards)

**Tab "Active Stakes":**
- Table of active stakes:
  - Columns: Pool, Amount (encrypted, button "Decrypt"), APY (encrypted), Duration, Rewards (encrypted), Actions
  - Button "Unstake"
  - Button "Claim Rewards"
  - Button "View Details"

**Tab "Unstaked":**
- List of unstaked positions
- Final rewards (encrypted, can be decrypted)
- Unstake date
- Button "Decrypt Rewards"

**Tab "Rewards":**
- Total rewards earned (encrypted, button "Decrypt")
- Rewards by pool (encrypted)
- Claim history
- Button "Claim All Rewards"

### Page "Rewards" (/rewards)

**Rewards Overview:**
- Total Earned (encrypted, button "Decrypt")
- Pending Rewards (encrypted)
- Claimed Rewards (encrypted)
- Rewards by Pool (chart, encrypted)

**Claim Rewards:**
- List of claimable rewards
- Amount (encrypted, shown as "***")
- Pool
- Button "Claim" - claim individual reward
- Button "Claim All" - claim all rewards
  - On click: encrypts claim and processes
  - Shows "Rewards claimed successfully"

## Common UI Elements

### Modals

**Modal "Pool Details":**
- Full pool information
- APY (encrypted, button "Decrypt")
- Total staked (encrypted)
- Your stake (encrypted, button "Decrypt")
- Button "Stake"
- Button "Close"

**Modal "Confirm Stake":**
- Pool info
- Amount (before encryption)
- Duration
- Estimated rewards (encrypted)
- Gas fee
- Buttons: "Cancel", "Confirm & Encrypt"

**Modal "Decrypt Stake":**
- Warning: "Decrypting will reveal staking amount. Continue?"
- Buttons: "Cancel", "Confirm Decrypt"

### Notifications

- "Staked successfully" (green)
- "Rewards claimed successfully" (green)
- "Unstaked successfully" (green)
- "Stake decrypted" (info)

### Loading

- "Encrypting stake..."
- "Staking tokens..."
- "Claiming rewards..."
- "Decrypting stake..."

## Navigation

- `/` - Home
- `/pools` - Browse pools
- `/stake/[id]` - Stake in pool
- `/my-stakes` - My stakes
- `/rewards` - Rewards

## Design

- DeFi/yield farming theme
- Green/gold color scheme
- Charts for APY and rewards
- Encrypted data as "***"
- Responsive design

## Technical Requirements

- Web3 wallet integration
- Zama FHEVM for staking encryption
- Display encrypted data as "***"
- Token balance integration
- Reward calculation
- Decryption on user request
- Real-time APY updates (optional)

