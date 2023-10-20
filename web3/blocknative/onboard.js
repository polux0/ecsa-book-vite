import Onboard from '@web3-onboard/core'
import injectedModule, { ProviderLabel } from '@web3-onboard/injected-wallets'
import walletConnectModule from '@web3-onboard/walletconnect'
import coinbaseWalletModule from '@web3-onboard/coinbase'
import magicModule from '@web3-onboard/magic'
// import { CopublishLogoBlack } from '../../imgs/OPENSEA LOGO COPUBLISH2 BLACK.png'

const injected = injectedModule({
  // display specific unavailable wallets
  displayUnavailable: false,
  filter: {
    // allow only on non android mobile
    [ProviderLabel.Detected]: ['desktop'],
    [ProviderLabel.Coinbase]: ['desktop']
  }
  // sort: wallets => {
  //   const metaMask = wallets.find(
  //     ({ label }) => label === ProviderLabel.walletConnect
  //   )
  //   return (
  //     [
  //       metaMask,
  //       ...wallets.filter(
  //         ({ label }) =>
  //           label !== ProviderLabel.walletConnect
  //       )
  //     ]
  //       // remove undefined values
  //       .filter(wallet => wallet)
  //   )
  // }

})
const walletConnect = walletConnectModule({projectId: `${import.meta.env.VITE_WALLET_CONNECT_API_KEY}`,   qrcodeModalOptions: {
  mobileLinks: ['rainbow', 'metamask', 'argent', 'trust', 'imtoken', 'pillar', 'coinbase']
}}, )

const coinbaseWallet = coinbaseWalletModule()
const magicWallet = magicModule({apiKey: `${import.meta.env.VITE_MAGIC_AUTH_MODULE_API_KEY}`});

const wallets = [walletConnect, injected, coinbaseWallet, magicWallet]

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
  name: 'Economic Space Agency',
  icon: '<svg />',
  logo: '<svg />',
  description: 'Protocols for Postcapitalist Expression',
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