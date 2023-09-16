import { ethers } from 'ethers';
import { connect } from '../web3/blocknative/index';
import { areInvitationsActive } from '../web3/areInvitationsActive.js';
import { areReservationsActive } from '../web3/areReservationsActive.js';
import { mintById } from "../web3/mintById";
import { displayError } from "../validation/displayError.js";
import { getChosenPrice } from "../validation/getChosenPrice.js";
import { handleInvitations } from '../validation/handleInvitations.js';
import { handleReservations } from '../validation/handleReservations.js';
import { handleWithoutInvitationOrReservation } from '../validation/handleWithoutInvitationOrReservation.js';
import { waitingForTransactionToInitiate, revertWaitingForTransactionToInitiate } from '../ux/waitingForTransactionToInitiate';
import { checkAndSwitchNetwork } from '../ux/checkAndSwitchNetwork.js';
import { clearMintingError } from '../web3/ui-interactions/index';

async function submitSelection() {

    const tokenId = localStorage.getItem('tokenId');
    clearMintingError();

    let wallets = null;
    let provider;
    let connected = false;
    wallets = await connect();
    //

    if(wallets){
        if(wallets[0]){
            connected = true;
            provider = new ethers.BrowserProvider(wallets[0].provider, 'any');
            try {
                await checkAndSwitchNetwork(provider);
            } catch (error) {
                displayError(error.message);
                return;
            }
        }
        else{
            // wallets = await connect();
            displayError('Please connect with one of the available wallet providers');
            return;
        }
    
    }
    waitingForTransactionToInitiate();
      
    const params = new URLSearchParams(window.location.search);
    const reservationId = params.get('reservationId');
    const invitationId = params.get('invitationId');
    const reservationsActive = await areReservationsActive();
    const invitationsActive = await areInvitationsActive();

    try {
        let errors = [];
        const chosenPrice = getChosenPrice();
    
        if (!chosenPrice) {
            revertWaitingForTransactionToInitiate();
            displayError("Please select a price tier before proceeding.");
            return;
        }
        if(connected){
            if (reservationsActive && reservationId) {
                const reservationError = await handleReservations(reservationsActive, reservationId, tokenId, chosenPrice);
                if (reservationError !== true){
                    revertWaitingForTransactionToInitiate();
                    displayError(reservationError);
                }
            }
            else if (invitationsActive && invitationId) {
                const invitationError = await handleInvitations(invitationId, tokenId, chosenPrice, provider, reservationsActive);
                if (invitationError !== true){
                    revertWaitingForTransactionToInitiate();
                    displayError(invitationError);
                }
            }
            else{
                const withoutReservationAndInvitationError = await handleWithoutInvitationOrReservation(reservationsActive, invitationsActive, tokenId, chosenPrice);
                if (withoutReservationAndInvitationError !== true){
                    revertWaitingForTransactionToInitiate();
                    displayError(withoutReservationAndInvitationError);
                }
            }
        }
        else{
            displayError('Please connect with one of available wallet providers.');
        }
    
    } catch (error) {
        console.error("An error occurred:", error.message);
    }
}

window.submitSelection = submitSelection;
export {submitSelection}