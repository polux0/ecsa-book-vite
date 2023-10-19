const { 
    VITE_EXPECTED_NETWORK_ID: expectedNetworkId,
    VITE_EXPECTED_NETWORK_ID_NUMBER: expectedNetworkIdNumber,
    VITE_NETWORK: networkName
} = import.meta.env;

const checkAndSwitchNetwork = async (provider) => {
    // Fetch the current network's chain ID
    const currentNetworkId = await provider.getNetwork().then(net => net.chainId);

    // If the current network doesn't match the expected one, try to switch
    if (currentNetworkId !== expectedNetworkIdNumber) {
        try {
            await window.ethereum.request({ 
                method: 'wallet_switchEthereumChain', 
                params: [{ chainId: expectedNetworkId }] 
            });
        } catch (switchError) {
            throw new Error(`Please change your network to ${networkName}`);
        }
    }
}

export { checkAndSwitchNetwork };
