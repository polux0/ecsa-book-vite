const connectWallet = async () => {
    try {
      if (window.ethereum) {
        if (window.ethereum.isMetaMask) {
        } else {
        }
      } else {
      }
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      localStorage.setItem("account", accounts[0]);
    } catch (error) {
      console.log("error: ", error);
    }
  };
export {connectWallet};