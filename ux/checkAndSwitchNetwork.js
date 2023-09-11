const checkAndSwitchNetwork = async (provider) => {
    const expectedNetworkId = import.meta.env.VITE_EXPECTED_NETWORK_ID;
    const expectedNetworkIdNumber = import.meta.env.VITE_EXPECTED_NETWORK_ID_NUMBER;
    const currentNetworkId = await provider.getNetwork().then(net => net.chainId);

    if (currentNetworkId !== expectedNetworkIdNumber) {
        try {
            await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: expectedNetworkId }] });
        } catch (switchError) {
            throw new Error(`Please change your network to ${import.meta.env.VITE_NETWORK}`);
        }
    }
}
export {checkAndSwitchNetwork}