import { ethers } from 'ethers';
import {getNextThreeInvitations, setInvitationInvitedBy, setInvitationUsed, getInvitationByInvitationValue} from '../db/invitations';
import { connectWallet } from './connectWallet';
import { transactionInitiated } from '../ux/transactionInitiated.js';
import {revertMintingAnimation} from '../ux/revertMintingAnimation';
import { openCongratzOverlay } from '../ux/openCongratzOverlay';
import {getAnNFTViaOpenSea} from '../ux/getAnNFTViaOpenSea';

const mintByInvitation = async (tokenId, invitationId, choosePrice) => {

    await connectWallet();

    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contractAddress = import.meta.env.VITE_NFT_CONTRACT_ADDRESS;
    const contractABI = [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_nftMetadata",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "reservationContractAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "invitationsContractAddress",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Approval",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "ApprovalForAll",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "string",
              "name": "log",
              "type": "string"
            }
          ],
          "name": "Debugging",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "Transfer",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "_alreadyMintedTokenIds",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "approve",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            }
          ],
          "name": "balanceOf",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "newTokenURI",
              "type": "string"
            }
          ],
          "name": "changeAttributes",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getAlreadyMintedTokenIds",
          "outputs": [
            {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "getApproved",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getInvitationsActive",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getPrice1",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getPrice2",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "getPriceForTokenId",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getReservationsActive",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            }
          ],
          "name": "isApprovedForAll",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "isOwnerOnlyMode",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "mintBaseTest",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "chosenPrice",
              "type": "uint256"
            }
          ],
          "name": "mintById",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "invitationId",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "chosenPrice",
              "type": "uint256"
            }
          ],
          "name": "mintByInvitation",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "reservationId",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "chosenPrice",
              "type": "uint256"
            }
          ],
          "name": "mintByReservation",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "name",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "nftMetadata",
          "outputs": [
            {
              "internalType": "contract NFTMetadata",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "ownerOf",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            },
            {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
            }
          ],
          "name": "safeTransferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address payable",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "sendViaCall",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "operator",
              "type": "address"
            },
            {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
            }
          ],
          "name": "setApprovalForAll",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "_status",
              "type": "bool"
            }
          ],
          "name": "setInvitationsActive",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_price1",
              "type": "uint256"
            }
          ],
          "name": "setPrice1",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_price2",
              "type": "uint256"
            }
          ],
          "name": "setPrice2",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bool",
              "name": "_status",
              "type": "bool"
            }
          ],
          "name": "setReservationsActive",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
            }
          ],
          "name": "supportsInterface",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "symbol",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "tokenPurchasePrice",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "tokenURI",
          "outputs": [
            {
              "internalType": "string",
              "name": "",
              "type": "string"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "transferFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "withdrawERC20",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "tokenAddress",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
            }
          ],
          "name": "withdrawERC721",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ];
    const nftContract = new ethers.Contract(contractAddress, contractABI, signer);

    let price1 = 0.0001;
    let price2 = 0.0002;


    try {
        // choosenPrice is not as amount in wei -> write it as message;
        let choosenPriceWei = 0.001;
        // technical debt - do this as timeout so it does not stay forever
        if(choosePrice != price1 || choosePrice != price2){
          //error invalid priceSelected;  
        }
        if(choosePrice == price1){
          choosenPriceWei = ethers.parseEther(price1.toString());
        }
        if(choosePrice == price2){
          choosenPriceWei = ethers.parseEther(price2.toString());
        }

        const mintingError = document.getElementById('tiersErrorMessage');
        mintingError.innerHTML = ""

        const expectedNetworkId = '0xaa36a7';
        const expectedNetworkIdNumber = 11155111n;
        const currentNetworkId = await provider.getNetwork().then(net => net.chainId);

        if (currentNetworkId !== expectedNetworkIdNumber) {
            try {
               const changed = await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: expectedNetworkId }] });
               console.log('network is changed:', changed);
               window.location.reload();
            } catch (switchError) {
                console.error('Chain switch failed:', switchError);
                return;
            }
        }
        const transaction = await nftContract.mintByInvitation(tokenId, invitationId, choosenPriceWei, {
            gasLimit: 12000000,
            value: choosenPriceWei
        });

        document.getElementById('priceTierOverlayClose').click();
        transactionInitiated(tokenId);
        const receipt = await transaction.wait();
        if (receipt && receipt.status == 1) {
          const buttons = document.querySelectorAll(`#publishUnit${tokenId}`);
          buttons.forEach(function(button) {
            // Apply changes to each element
            if(button) {
              button.remove();
          } else {
              console.warn(`Button with ID ${button} not found.`);
          }
        });
        try {
          await setInvitationUsed(invitationId, signer.address);
          let initial = await getInvitationByInvitationValue(invitationId);
          const threeNewInvitations = await getNextThreeInvitations();
          threeNewInvitations.forEach(element => {
          setInvitationInvitedBy(initial[0].id, element.value);
          for (let i = 1; i <= 3; i++) {
            let element = document.getElementById(`invitation-link${i}`);
            element.innerHTML = `${import.meta.env.VITE_INVITATION_URL}${threeNewInvitations[i-1].value}`;
        }
        }); 
        } catch (error) {
          console.log('operations with invitation storage failed...');
        }
        // close mint overlay!
        document.getElementById('priceTierOverlayClose').click();
        // open congratz overlay!
        // try to display the nft
        try {
          let nft = await getAnNFTViaOpenSea(tokenId);
          console.log('mint by invitation, response from opensea: ', nft);
          let nftElement = document.getElementById('nft-image');
          if(nftElement){
            nftElement.src = nft.image_url;
        
            let url = import.meta.env.VITE_CHAIN == 'sepolia' ? 'testnets.opensea.io' : 'opensea.io'; 
            const final = `https://${url}/assets/${import.meta.env.VITE_CHAIN}/${import.meta.env.VITE_NFT_CONTRACT_ADDRESS}/${tokenId}`;
            
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
          console.log('displaying NFT as an image silently failed...');
        }
        openCongratzOverlay();
        }
    }
    catch (error) {
        if (error.code == "ACTION_REJECTED") {
            console.log('Transaction was rejected by the user.');
        } else if (error.message.includes("wrong chain") || error.message.includes("network mismatch")) {
            console.log('You are on the wrong network. Please switch your network.');
        } else if (error.message.includes("insufficient funds")) {
            console.log('You do not have enough funds. Consider switching to a network with enough balance.');
        } else {
          if (error.code == "ACTION_REJECTED") {
            console.log('Transaction was rejected by the user.');
          }else{
              // here transaction fails:
              // 1. revert minting animation
              revertMintingAnimation(tokenId);
              // 2. reopen tierSubmitSelectionOverlay, and set it's error message. 
              document.getElementById('priceTierOverlay').style.display = 'block';
              document.getElementById('priceTierOverlayClose').style.display = 'block';
              document.getElementById('priceTierContent').style.display = 'block';
              const mintingError = document.getElementById('tiersErrorMessage');
              const tiersSubmitButton = document.getElementById('tiersSubmitButton');
              if(mintingError){
                mintingError.innerHTML = "It happens that transactions fail sometimes. Would you retry?"
                mintingError.style.display = "block";
              }
              if(tiersSubmitButton){
                const tiersSubmitButton = document.getElementById('tiersSubmitButton');
                tiersSubmitButton.innerHTML = "Retry";
              }
              // save tier so we don't have to present it again:
              const selectedTier = document.querySelector('#priceTiers input[type="radio"]:checked');
              if (selectedTier) {
                console.log('selectedTier, minting again: ', selectedTier.value);
                localStorage.setItem('chosenPrice', selectedTier.value);
              }
          }

        }
    }
}
export {mintByInvitation}