import { isReservationValid, isReservationValidForTokenId } from "../db/reservations";
import { isTokenReserved } from "../web3/isTokenReserved";
import { mintByReservation} from "../web3/mintByReservation";

// previous version
// async function handleReservations(reservationId, tokenId, chosenPrice) {

//     // if (reservationId) {
//         let validReservation = await isReservationValidForTokenId(reservationId, parseInt(tokenId, 10));
//         console.log('isValidReservation', validReservation);
//         if (validReservation) {
//             mintByReservation(parseInt(tokenId, 10), reservationId, chosenPrice);
//             return true;
//         } else {
//             return "Invalid reservation!";
//         }
//     // } else {
//     //     return "Reservations are active but no reservation is provided.";
//     // }
// }

// more sophisticated one

async function handleReservations(reservationsActive, reservationId, tokenId, choosenPrice){

    let tokenReserved = await isTokenReserved(tokenId);

    if(tokenReserved){
        if(reservationsActive){
            if(reservationId){
                let validReservation = await isReservationValid(reservationId);
                if(validReservation){
                    let validReservationForTokenId = await isReservationValidForTokenId(reservationId, parseInt(tokenId, 10));
                    if(validReservationForTokenId){
                        await mintByReservation(parseInt(tokenId, 10), reservationId, choosenPrice);
                        return true;
                    }
                    else{
                        return "Reservation is not for this unit!";
                    }
                }
                else{
                    return "Invalid reservation!";
                }
            }
            else{
                return "Reservation not provided!";
            }
        }
        else{
            return "Reservations are not active anymore!";
        }
    }
    else{
        return "Reservation is not for this unit!";
    }
}

export {handleReservations}