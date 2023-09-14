

import { isTokenReserved } from "../web3/isTokenReserved";
import { mintById } from "../web3/mintById";
async function handleWithoutInvitationOrReservation(reservationsActive, invitationsActive, tokenId, choosenPrice) {
    let tokenReserved = await isTokenReserved(tokenId);
    if(tokenReserved){
        if(reservationsActive){
            return "Unit is reserved, and reservations are still active!";
        }
        else{
            mintById(tokenId, choosenPrice);
            return true;
        }
    }
    if(invitationsActive){
        return "Invitations are still active!";
    }
    else{
        mintById(tokenId, choosenPrice);
        return true;
    }
}
export { handleWithoutInvitationOrReservation };