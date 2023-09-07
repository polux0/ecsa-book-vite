import { isReservationValidForTokenId } from "../db/reservations";
import { mintByReservation} from "../web3/mintByReservation";
async function handleReservations(reservationId, tokenId, chosenPrice) {
    if (reservationId) {
        let validReservation = await isReservationValidForTokenId(reservationId, parseInt(tokenId, 10));
        if (validReservation) {
            mintByReservation(parseInt(tokenId, 10), reservationId, chosenPrice);
            return true;
        } else {
            return "Invalid reservation!";
        }
    } else {
        return "Reservations are active but no reservation is provided.";
    }
}
export {handleReservations}