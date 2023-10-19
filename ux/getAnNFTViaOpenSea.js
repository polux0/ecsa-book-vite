async function getAnNFTViaOpenSea(tokenId) {
  const isSepolia = import.meta.env.VITE_NETWORK === 'sepolia';
  const api = isSepolia ? import.meta.env.VITE_TESTNET_OPEN_SEA_API_URL : import.meta.env.VITE_OPEN_SEA_API_URL;
  const apiKey = isSepolia ? '' : import.meta.env.VITE_OPEN_SEA_API_KEY;
  
  const url = `https://${api}/v2/chain/${import.meta.env.VITE_NETWORK}/contract/${import.meta.env.VITE_NFT_CONTRACT_ADDRESS}/nfts/${tokenId}`;

  try {
      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'accept': 'application/json',
              'X-API-KEY': apiKey
          }
      });

      if (!response.ok) {
          throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('open sea response: ', data);
      console.log('what we actually need from open sea: ', data.nft.image_url);

      return data.nft;

  } catch (error) {
      console.error('There was a problem with the fetch operation:', error.message);
  }
}

export { getAnNFTViaOpenSea };
