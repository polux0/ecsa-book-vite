import {getAnNFTViaOpenSea } from '../../ux/getAnNFTViaOpenSea';

const displayNFTImageFromOpenSea = async (tokenId) => {
    try {
        let nft = await getAnNFTViaOpenSea(tokenId);
        console.log('mint by invitation, response from opensea: ', nft);
        let nftElement = document.getElementById('nft-image');
        if(nftElement){
          nftElement.src = nft.image_url;
      
          let url = import.meta.env.VITE_NETWORK == 'sepolia' ? 'testnets.opensea.io' : 'opensea.io'; 
          const final = `https://${url}/assets/${import.meta.env.VITE_NETWORK}/${import.meta.env.VITE_NFT_CONTRACT_ADDRESS}/${tokenId}`;
          
          // Create a new anchor element
          let anchor = document.createElement('a');
          anchor.href = final;
          anchor.target = "_blank"; // Optional: to open in a new tab
      
          // Append the image to the anchor element
          anchor.appendChild(nftElement.cloneNode(true));
      
          // Replace the image with the anchor in the DOM
          nftElement.parentNode.replaceChild(anchor, nftElement);
      }
      } catch (error) {
        console.log('displaying NFT as as an image from OpenSea silently failed. Reason: ', error.message);
      }
};
export {displayNFTImageFromOpenSea};
