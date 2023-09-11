import { setReservationUsed, getReservationByReservationValue } from "../db/reservations";
import { getNextThreeInvitations, setInvitationInvitedByReservation } from "../db/invitations";
const handleReservationOperations = async (reservationId, signer) => {
try {
    await setReservationUsed(reservationId, signer);
    let initial = await getReservationByReservationValue(reservationId);
    const threeNewInvitations = await getNextThreeInvitations();
    threeNewInvitations.forEach(element => {
    setInvitationInvitedByReservation(initial[0].id, element.value);
    for (let i = 1; i <= 3; i++) {
      let element = document.getElementById(`invitation-link${i}`);
      element.innerHTML = `${import.meta.env.VITE_INVITATION_URL}${threeNewInvitations[i-1].value}`;
  }
  }); 
  } catch (error) {
    console.log('operations with invitation & reservation storage silently failed...');
  }
}
export {handleReservationOperations};