'use client'

import { WagmiProvider, createConfig, http } from 'wagmi'
import { sepolia } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { metaMask } from '@wagmi/connectors'

// Use ONLY MetaMask to avoid origin errors
const config = createConfig({
  chains: [sepolia],
  connectors: [
    metaMask(), // Simple MetaMask connector, no projectId needed
  ],
  transports: {
    [sepolia.id]: http('https://sepolia.gateway.tenderly.co'),
  },
})

const queryClient = new QueryClient()

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}
