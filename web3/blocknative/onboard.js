import Onboard from '@web3-onboard/core'
import injectedModule from '@web3-onboard/injected-wallets'
// import type { OnboardAPI } from '@web3-onboard/core'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseModule from '@web3-onboard/coinbase'
import magicModule from '@web3-onboard/magic'

const injected = injectedModule({
  displayUnavailable: true,
})
const walletConnect = walletConnectModule({projectId: 'd81918ea6d7ef1f1fe78fdb74ec52ed2',   qrcodeModalOptions: {
  mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar']
}}, )
const coinbaseWallet = coinbaseModule()
const magicWallet = magicModule({apiKey: "pk_live_22D57864122EFAD7"});

const wallets = [injected, walletConnect, coinbaseWallet, magicWallet]

// technical debt - enviornment variables
const chains = [
  {
    id: 11155111,
    token: 'ETH Sepolia',
    label: 'Sepolia Testnet',
    rpcUrl: `https://eth-sepolia.g.alchemy.com/v2/-tMMu3AHudsbSzy1OJNFuhoiFCgHLKwE`
  },
  // {
  //   id: 137,
  //   token: 'MATIC',
  //   label: 'Matic Mainnet',
  //   rpcUrl: 'https://matic-mainnet.chainstacklabs.com'
  // },
]

const appMetadata = {
  name: 'Web3-Onboard',
  icon: '<svg />',
  logo: '<svg />',
  description: 'Demo using Onboard',
  recommendedInjectedWallets: [
    { name: 'Coinbase', url: 'https://wallet.coinbase.com/' },
    { name: 'MetaMask', url: 'https://metamask.io' }
  ]
}
let onboard

if (!onboard) {
  onboard = Onboard({
    wallets,
    chains,
    appMetadata
  })
}

export default onboard