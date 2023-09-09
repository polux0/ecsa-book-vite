import { areInvitationsActive } from '../web3/areInvitationsActive.js';
import { areReservationsActive } from '../web3/areReservationsActive.js';
import { mintById } from "../web3/mintById";
import { connect } from '../web3/blocknative/index';
import { ethers } from 'ethers';
import { displayError } from "../validation/displayError.js";
import { getChosenPrice } from "../validation/getChosenPrice.js";
import { handleInvitations } from '../validation/handleInvitations.js';
import { handleReservations } from '../validation/handleReservations.js';

async function submitSelection() {

    // clear all previous error messages
    const tokenId = localStorage.getItem('tokenId');
    const mintingError = document.getElementById('tiersErrorMessage');

    if(mintingError){
        mintingError.innerHTML = "";
    }
    
    let connected = false;
    let wallets = null;
    let provider;
    wallets = await connect();
    console.log('wallets', wallets);

    if(wallets){
        if(wallets[0]){
            let label = wallets[0].label
            let connectedAccount = document.getElementById("connectedAccount");
            if(connectedAccount){
                connectedAccount.innerHTML = label;
            }
            connected = true;

            provider = new ethers.BrowserProvider(wallets[0].provider, 'any');

            const expectedNetworkId = import.meta.env.VITE_EXPECTED_NETWORK_ID;
            const expectedNetworkIdNumber = import.meta.env.VITE_EXPECTED_NETWORK_ID_NUMBER;
            const currentNetworkId = await provider.getNetwork().then(net => net.chainId);

            if (currentNetworkId !== expectedNetworkIdNumber) {
                try {
                   const changed = await window.ethereum.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: expectedNetworkId }] });
                } catch (switchError) {
                    console.error('Chain switch failed:', switchError);
                    mintingError.innerHTML = `Please change your network to ${import.meta.env.VITE_NETWORK}`;
                    mintingError.style.display = "block";
                    return;
                }
            }
        }
        else{
            connected = false;
            mintingError.innerHTML = "Please connect with one of the available wallet providers";
            mintingError.style.display = "block";
            return;
        }
    
    }
      
    const params = new URLSearchParams(window.location.search);
    const reservationId = params.get('reservationId') || "";
    const invitationId = params.get('invitationId') || "";
    const reservationsActive = await areReservationsActive();
    const invitationsActive = await areInvitationsActive();

    try {
        let errors = [];
        const chosenPrice = getChosenPrice();
    
        if (!chosenPrice) {
            displayError("Please select a price tier before proceeding.");
            return;
        }
        console.log("connected: ", connected)
        if(connected){
            if (reservationsActive) {
                const reservationError = await handleReservations(reservationId, tokenId, chosenPrice);
                if (reservationError !== true) errors.push(reservationError);
            }
        
            if (invitationsActive) {
                const invitationError = await handleInvitations(invitationId, tokenId, chosenPrice, provider, reservationsActive);
                if (invitationError !== true) errors.push(invitationError);
            }
        
            if (!reservationsActive && !invitationsActive) {
                await mintById(tokenId, chosenPrice);
                return;
            }
        
            if (errors.length > 0) {
                displayError(errors[errors.length - 1]);
                console.log('errors: ', errors);
            }
        }
        else{
            mintingError.innerHTML = "Please connect with one of available wallet providers";
            mintingError.style.display = "block";
        }
    
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

window.submitSelection = submitSelection;
export {submitSelection}